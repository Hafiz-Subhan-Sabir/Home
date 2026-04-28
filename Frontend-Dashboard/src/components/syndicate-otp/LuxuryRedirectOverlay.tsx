"use client";

import { useEffect } from "react";

const FALLBACK_URL = "https://the-syndicate.com/";

type LuxuryRedirectOverlayProps = {
  active: boolean;
  href?: string;
  delayMs?: number;
};

export default function LuxuryRedirectOverlay({
  active,
  href = FALLBACK_URL,
  delayMs = 700,
}: LuxuryRedirectOverlayProps) {
  useEffect(() => {
    if (!active) return;
    const target = href?.trim() || FALLBACK_URL;
    const timer = window.setTimeout(() => {
      window.location.replace(target);
    }, delayMs);
    return () => window.clearTimeout(timer);
  }, [active, href, delayMs]);

  if (!active) return null;

  return (
    <div className="luxury-redirect" role="status" aria-live="polite">
      <div className="luxury-redirect__veil" />
      <div className="luxury-redirect__door luxury-redirect__door--left" />
      <div className="luxury-redirect__door luxury-redirect__door--right" />
      <div className="luxury-redirect__tunnel" />
      <div className="luxury-redirect__glow luxury-redirect__glow--outer" />
      <div className="luxury-redirect__glow luxury-redirect__glow--inner" />
      <div className="luxury-redirect__ring luxury-redirect__ring--a" />
      <div className="luxury-redirect__ring luxury-redirect__ring--b" />
      <div className="luxury-redirect__core">
        <p className="luxury-redirect__title">Opening the gate</p>
        <div className="luxury-redirect__bar">
          <span className="luxury-redirect__bar-fill" />
        </div>
        <p className="luxury-redirect__hint">Moving into the inner circle</p>
      </div>
    </div>
  );
}
