# How agent tasks are generated (new user → returning user)

This document describes how **daily missions / challenges** are produced in the Syndicate backend, from a **brand-new account** through **returning users**. Code lives mainly in `Backend/apps/challenges/services.py`, `Backend/apps/challenges/device_batch_async.py`, `Backend/apps/challenges/views.py`, and `Backend/api/services/openai_client.py`.

**Note:** The **`MissionTemplate`** static pool was removed (migration `0015`); daily missions are **agent-generated** only. Some sections below may still mention older template counts—treat those as historical.

## How it works for new users

“New user” here means someone on the **first calendar day** of their account (same local date as `user.date_joined`). That day is tuned for **speed** and **no long OpenAI wait** for the main 30-mission grid.

### What happens after signup

1. **Mindsets must exist on the server** (`MindsetKnowledge`). Without them, `GET /api/challenges/today/` returns an empty `results` list and a message such as “No mindsets loaded yet.” Templates still need a **source document** on each `GeneratedChallenge` row, so onboarding assumes documents have been ingested (same as the rest of the product).

2. The dashboard calls **`GET /api/challenges/today/`** with auth. The backend uses **`device_id = "user:" + str(user.id)`** for that user’s rows.

3. **First calendar day:** `challenges_today` detects this with **`_is_user_first_calendar_day(user)`** and runs **`ensure_first_day_from_templates(device_id, user)`** (synchronous). It does **not** start the background “progressive” job used on day 2+.

4. **Thirty missions from the template pool:** The **`MissionTemplate`** table holds about **300** rotating JSON missions. For this user, the server picks **one template per (category × mood × slot)** — **30 rows total** — using a **seeded random choice** from `user_id`, `device_id`, and **today’s date**. **Different new users** on the same day get **different** missions; **the same user** reloading gets the **same** set until the next day.

5. **API response for a successful first day:** `results` contains **30** system missions plus any **custom** missions for that device; **`batch_complete: true`** and **`generating: false`**. The frontend does **not** need to poll for completion on this path — everything is ready in one response.

6. **UI:** `fetchChallengesTodayUntilComplete` still runs, but the first response is already complete, so no extra polling loop is needed. Missions appear **all at once**, which is intentional: first day avoids agent latency.

7. **If templates cannot be used** (pool empty, validation errors, missing mindset/source): the server **falls back** to **`ensure_daily_challenges`**, the **shared** OpenAI batch (`device_batch_device_id = ""`). That **does** call the agent and may be slower; everyone on that fallback shares the same shared batch for that day.

### What new users do *not* get on day one

- **No** per-user OpenAI **daily grid** on the happy path (templates replace it).
- **No** progressive “missions dripping in” on first calendar day (that behavior is for **day 2+** when the agent builds the batch in the background).

### After midnight (still “new” only for one calendar day)

On **day two** (local date after signup day), the user is treated as a **returning** user for daily generation: see **Phase 2** and **Progressive loading** below.

---

## Entry point

- **HTTP:** `GET /api/challenges/today/` (see `views.challenges_today`).
- **Auth:** Endpoints use `IsAuthenticated`; the server resolves the user’s batch key as  
  `device_id = "user:" + str(request.user.id)` (see `_user_device_key`).
- **Prerequisite:** At least one ingested **mindset** (`MindsetKnowledge`). If none exist, the API returns an empty list with a “No mindsets loaded yet.” style message.

For authenticated users, `challenges_today` reads **`device_id = "user:<id>"`**, merges custom missions, and may start **background** generation (see **Progressive loading** below). **`POST /generate_daily/`** and the document-sync path in `api/views.py` still use **`ensure_daily_challenges_for_device`** (sync, often **parallel** OpenAI). Without a user key, `challenges_today` uses the **shared** helper `ensure_daily_challenges`.

### Progressive loading (returning users, empty batch)

When today’s per-device system rows are **0** and it is **not** the first calendar day, the server **does not** block on all 30 missions:

1. **`start_device_ai_batch_generation`** (`device_batch_async.py`) starts a daemon thread.
2. The **GET** response returns immediately with `generating: true`, `batch_complete: false`, and `results` that may be empty or already partial.
3. **`generate_device_ai_batch_sequential`** runs **one OpenAI call per category** (5 sequential steps) and **commits 6 rows after each category** so the DB grows 6 → 12 → … → 30.
4. The dashboard **`fetchChallengesTodayUntilComplete`** polls `GET /today/` until `batch_complete` is true, calling **`onPartial`** so missions **appear gradually** in the UI.

**Regenerate** and **document sync** paths still use **parallel** generation inside **`device_generation_lock`** (`_generate_device_ai_parallel_and_persist`) so a full batch is produced in one blocking run when required.

## What “30 missions” means

The system batch is **5 categories** × **3 moods** (energetic, happy, tired) × **2 slots** = **30** `GeneratedChallenge` rows per day for that batch key. Categories are: `business`, `money`, `fitness`, `power`, `grooming`.

Custom missions (user-created) are **not** part of this generator; they are **merged in the view** from rows where `creator_device` matches the user key.

---

## Phase 1 — First calendar day after signup (“new user”)

### Who qualifies

`_is_user_first_calendar_day(user)` is true when the **local calendar date** equals the **local calendar date of `user.date_joined`**. So “first day” is the **same calendar day you created the account**, in the server’s timezone configuration.

### What runs (no OpenAI for the main grid)

1. **`ensure_first_day_from_templates(device_id, user)`** runs.
2. It pulls **30 missions** from the **`MissionTemplate`** table (static JSON payloads), **not** from the live agent in this step.
3. Selection is **stratified**: for each category and each `(mood, slot)` pair, one template is chosen from the matching bucket so mood filters in the UI still work.
4. **Uniqueness across users:** `pick_balanced_template_mission_payloads` uses a **seeded RNG** derived from `user_id`, `device_id`, and **today’s date** (plus a `salt` on retries if titles collide). Different users get **different random templates** in each slot; the same user on the same day gets a **stable** set across reloads.
5. Rows are **persisted** as `GeneratedChallenge` with  
   `device_batch_device_id = device_id` (e.g. `user:42`), `challenge_date = today`, and `payload` copied from the template (plus points/difficulty handling).

### When the template path fails

If the pool is missing, validation fails repeatedly, or mindsets/source doc are missing, the code **falls back** to **`ensure_daily_challenges`**, which is the **shared server-wide** batch (see below). That path **does** call OpenAI to fill the shared grid.

---

## Phase 2 — Second calendar day and later (“returning user”)

### When the user is no longer on their signup calendar day

Returning users **do not** use the first-day template pool for the main grid. Each user still gets their **own** batch under **`device_batch_device_id = user:<id>`** (not the shared server-wide grid).

#### A) Dashboard: first `GET /today/` of the day (empty batch)

When there are **no** system rows yet for **today** for this device:

1. **`challenges_today`** starts **`start_device_ai_batch_generation`** and returns quickly with **`generating: true`**, **`batch_complete: false`**.
2. A background thread runs **`generate_device_ai_batch_sequential`**: for each of the **5 categories**, it calls **`generate_daily_category_moods_batch(mindsets, avoid, category, personalization=...)`**, validates titles against what is already saved, then **writes 6 rows** before moving to the next category.
3. **`avoid`** is refreshed from **`recent_titles()`** after each category; **`personalization`** comes from **`_daily_personalization_for_device(device_id)`** (unique device string + optional **`UserDeviceMindsetContext`** from past custom missions).
4. The **frontend** polls until **`batch_complete: true`**, updating the list on each response so missions **appear in waves** (~6 per category).

#### B) Sync flows: `POST /generate_daily/`, document sync with `auto_challenge`

These call **`ensure_daily_challenges_for_device`** with **blocking** generation: **`_generate_device_ai_parallel_and_persist`** runs **five OpenAI calls in parallel** (one per category), then persists all **30** rows under the same lock used by the background thread, so the two paths do not corrupt each other.

### When rows already exist for today

If the DB already has system rows for this `device_id` and date, **`GET /today/`** returns them sorted; **`batch_complete: true`**, **`generating: false`**. No regeneration unless **`force`** on **`POST /generate_daily/`** (or similar).

---

## The shared batch (`ensure_daily_challenges`) — when it is used

`ensure_daily_challenges` maintains **`device_batch_device_id = ""`** (empty) system rows for **today**. It:

- Reuses existing shared rows if enough exist.
- Otherwise calls OpenAI **`generate_daily_category_moods_batch`** **without** per-user `personalization` (parallel per category).
- Writes rows tied to the **shared** batch key.

**Typical use today:**

- **Fallback** when first-day **templates** fail but mindsets exist.
- **`device_id` missing** in the view (unusual for the dashboard if authenticated).
- Other callers that explicitly use the shared helper.

Authenticated dashboard users with `user:<id>` normally go through **`ensure_daily_challenges_for_device`**, not this shared path, **except** for that first-day fallback.

---

## Other agent surfaces (brief)

| Flow | Role of the “agent” |
|------|----------------------|
| `POST .../generate/` (mood + category) | Generates **two** challenges via OpenAI for that mood/category; not necessarily persisted as the full daily grid. |
| `POST .../user_task/` | OpenAI **enriches** a user title into a full mission payload; stored as custom missions. |
| `GET .../agent_quote/` | Separate **daily quote** via `ensure_agent_quote_for_user` (not the 30-mission grid). |

---

## Mental model summary

| Stage | User | Main mechanism | Response shape (dashboard) | Stored under |
|------|------|----------------|----------------------------|--------------|
| First calendar day | New | **MissionTemplate** pool + **seeded** random picks (30 in one go) | `batch_complete: true`, `generating: false` — **no polling** needed | `device_batch_device_id = user:<id>` |
| First day fallback | New | Shared **OpenAI** batch if templates fail | Same flags when shared path returns a full batch | `device_batch_device_id = ""` (shared) |
| Day 2+ first load of day | Returning | Background **sequential** OpenAI (6 rows per category), **poll** `GET /today/` | `generating: true` until 30 rows exist | `device_batch_device_id = user:<id>` |
| Day 2+ regenerate / sync | Returning | **Parallel** OpenAI inside **lock** (blocking) | Caller waits for full HTTP response | `device_batch_device_id = user:<id>` |

**Speed:** New users on the template path get **all 30 missions in one fast response** (no agent grid). Returning users on the dashboard get **progressive** missions while the agent fills the batch in the background; **regenerate** still waits for a **full** parallel batch.
