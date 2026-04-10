import type {
  AffiliateFunnelResponse,
  AffiliateStats,
  AffiliateVisitorsResponse,
  AuthLoginResponse,
  AuthOtpRequestResponse,
  RecentReferralsResponse
} from "@/lib/affiliateTypes";
import { getSyndicateApiBase } from "@/lib/syndicateApiBase";

/**
 * Affiliate API lives on the same Django service as Syndicate (`/api/track/...`, `/api/affiliate/auth/...`).
 * Override with NEXT_PUBLIC_AFFILIATE_API_BASE_URL only if you still run a separate tracking server.
 */
function affiliateApiRoot(): string {
  const override = (process.env.NEXT_PUBLIC_AFFILIATE_API_BASE_URL ?? "").trim().replace(/\/+$/, "");
  if (override) {
    return override.endsWith("/api") ? override : `${override}/api`;
  }
  return getSyndicateApiBase();
}

async function parseJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let message = "Request failed";
    try {
      const body = await res.json();
      message = body?.error ?? message;
    } catch {
      /* keep default */
    }
    throw new Error(message);
  }
  return (await res.json()) as T;
}

function authHeaders(): HeadersInit {
  if (typeof window === "undefined") return {};
  const token = window.localStorage.getItem("affiliate_token");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const root = () => affiliateApiRoot();

export async function getAffiliateStats(affiliateId: string): Promise<AffiliateStats> {
  const res = await fetch(
    `${root()}/track/stats?affiliate_id=${encodeURIComponent(affiliateId)}`,
    { cache: "no-store", headers: authHeaders() }
  );
  return parseJson<AffiliateStats>(res);
}

export async function getAffiliateVisitors(affiliateId: string, limit = 20): Promise<AffiliateVisitorsResponse> {
  const res = await fetch(
    `${root()}/track/affiliate-visitors?affiliate_id=${encodeURIComponent(affiliateId)}&limit=${limit}`,
    { cache: "no-store", headers: authHeaders() }
  );
  return parseJson<AffiliateVisitorsResponse>(res);
}

export async function getAffiliateFunnel(affiliateId: string): Promise<AffiliateFunnelResponse> {
  const res = await fetch(
    `${root()}/track/funnel?affiliate_id=${encodeURIComponent(affiliateId)}`,
    { cache: "no-store", headers: authHeaders() }
  );
  return parseJson<AffiliateFunnelResponse>(res);
}

export async function getRecentReferrals(affiliateId: string, limit = 10): Promise<RecentReferralsResponse> {
  const res = await fetch(
    `${root()}/track/recent-referrals?affiliate_id=${encodeURIComponent(affiliateId)}&limit=${limit}`,
    { cache: "no-store", headers: authHeaders() }
  );
  return parseJson<RecentReferralsResponse>(res);
}

export async function requestLoginOtp(email: string): Promise<AuthOtpRequestResponse> {
  const res = await fetch(`${root()}/affiliate/auth/request-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });
  return parseJson<AuthOtpRequestResponse>(res);
}

export async function verifyLoginOtp(email: string, otp: string): Promise<AuthLoginResponse> {
  const res = await fetch(`${root()}/affiliate/auth/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp })
  });
  return parseJson<AuthLoginResponse>(res);
}

export async function trackClick(affiliateId: string, visitorId: string) {
  const res = await fetch(`${root()}/track/click`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ affiliate_id: affiliateId, visitor_id: visitorId })
  });
  return parseJson<{ success: boolean }>(res);
}

export async function trackLead(affiliateId: string, visitorId: string, email: string) {
  const res = await fetch(`${root()}/track/lead`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ affiliate_id: affiliateId, visitor_id: visitorId, email })
  });
  return parseJson<{ success: boolean }>(res);
}

export async function trackSale(affiliateId: string, visitorId: string, email: string, amount: string) {
  const res = await fetch(`${root()}/track/sale`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeaders() },
    body: JSON.stringify({ affiliate_id: affiliateId, visitor_id: visitorId, email, amount })
  });
  return parseJson<{ success: boolean }>(res);
}
