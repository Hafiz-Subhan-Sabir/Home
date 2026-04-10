# Syndicate

Full-stack **Syndicate** dashboard (portal, membership, gold HUD UI) plus an **AI agent** that creates daily missions, scores responses, and syncs streaks, leaderboard, and admin tasks.

This repo merges the upstream challenges stack described in [Smart AI Agent — Creates & Evaluates Challenges](https://github.com/HammadAli64/Smart-AI-Agent-That-Creates-Evaluates-Challenges) with the Syndicate portal and dashboard.

## What it does

- **Dashboard** — Programs, Syndicate mode, membership hub, affiliate portal (Next.js + GSAP).
- **Portal auth** — JWT at `/api/auth/login/` (used with `/api/portal-proxy/` from the Next app).
- **Syndicate missions** — DRF Token auth at `/api/syndicate-auth/login/` (signup, login, logout, me) for the missions panel; OpenAI generates and evaluates missions.
- **Progress & sync** — Authenticated users persist streaks and points; leaderboard and admin-assigned tasks are supported.
- **Affiliate tracking** — Same Django service: `/api/track/*` and `/api/affiliate/auth/*` (OTP). The Next.js app calls these via `NEXT_PUBLIC_SYNDICATE_API_URL` (or optional `NEXT_PUBLIC_AFFILIATE_API_BASE_URL` override).

## Tech stack

| Layer | Stack |
|--------|--------|
| API | Django 4.2, DRF, Simple JWT (portal) + Token auth (Syndicate) |
| AI | OpenAI (`OPENAI_MODEL`, default `gpt-4o-mini`) |
| UI | Next.js (App Router), React, Tailwind |

## Layout (one backend, one frontend)

| Folder | Role |
|--------|------|
| **`backend/`** | Single Django project: `syndicate_backend`, `api`, `apps/challenges`, `apps/portal`, `apps/membership`, **`apps/affiliate_tracking`** (merged from the old standalone affiliate API). |
| **`frontend/`** | Next.js dashboard (recommended directory name). |

If your tree still has **`Frontend-Dashboard/`** (file lock during rename), it is the same app—close the IDE lock on that folder and rename it to **`frontend/`**, or set Railway / CI root to the folder you actually have.

The old **`affiliate-portal/`** split (separate Next + Django) has been removed; behavior lives in **`backend/`** + **`frontend/`** (or `Frontend-Dashboard/`).

## Backend setup

```bash
cd backend
python -m venv .venv
# Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

Copy `backend/.env.example` to `backend/.env`, set secrets as needed, then:

```bash
python manage.py migrate
python manage.py runserver
```

## Frontend setup

```bash
cd frontend
# or: cd Frontend-Dashboard
npm install
```

Copy `.env.local.example` to `.env.local` in that folder. Use `BACKEND_INTERNAL_URL` for the portal proxy and `NEXT_PUBLIC_SYNDICATE_API_URL` for direct API calls (must end with `/api`). Affiliate features use the **same** base URL unless `NEXT_PUBLIC_AFFILIATE_API_BASE_URL` is set.

```bash
npm run dev
```

## License

Add your license if you publish publicly.
