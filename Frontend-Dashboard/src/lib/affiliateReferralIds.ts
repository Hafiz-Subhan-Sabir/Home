/** JSON referral ids from Django after OTP — used by Affiliate portal fetches. */
export const AFFILIATE_REFERRAL_IDS_STORAGE_KEY = "syndicate:affiliate_referral_ids_v1";

export type StoredAffiliateReferralIds = {
  complete: string;
  single: string;
  pawn: string;
  king: string;
  // Legacy key kept for backward compatibility with older payloads.
  exclusive?: string;
};

export function readStoredAffiliateReferralIds(): StoredAffiliateReferralIds | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(AFFILIATE_REFERRAL_IDS_STORAGE_KEY);
    if (!raw) return null;
    const j = JSON.parse(raw) as Partial<StoredAffiliateReferralIds>;
    const complete = typeof j.complete === "string" ? j.complete.trim() : "";
    if (!complete) return null;
    return {
      complete,
      single: typeof j.single === "string" && j.single.trim() ? j.single.trim() : complete,
      pawn:
        typeof j.pawn === "string" && j.pawn.trim()
          ? j.pawn.trim()
          : typeof j.single === "string" && j.single.trim()
            ? j.single.trim()
            : complete,
      king:
        typeof j.king === "string" && j.king.trim()
          ? j.king.trim()
          : typeof j.exclusive === "string" && j.exclusive.trim()
            ? j.exclusive.trim()
            : complete,
    };
  } catch {
    return null;
  }
}
