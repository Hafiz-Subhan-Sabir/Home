"use client";

import { useEffect, useRef, useState, type ClipboardEvent, type FormEvent, type KeyboardEvent } from "react";
import { requestLoginOtp, verifyLoginOtp } from "@/lib/affiliateApi";
import { getSyndicateApiBase } from "@/lib/syndicateApiBase";
import type { AuthLoginResponse } from "@/lib/affiliateTypes";

type Props = {
  onSuccess: (res: AuthLoginResponse) => void;
};

export function AffiliatePortalLoginForm({ onSuccess }: Props) {
  const [email, setEmail] = useState("");
  const [otpDigits, setOtpDigits] = useState<string[]>(() => Array(6).fill(""));
  const [step, setStep] = useState<"email" | "otp">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const otpInputRefs = useRef<Array<HTMLInputElement | null>>([]);

  function isValidEmail(v: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
  }

  const otp = otpDigits.join("");

  useEffect(() => {
    if (step === "otp") {
      otpInputRefs.current[0]?.focus();
    }
  }, [step]);

  function handleOtpDigitChange(index: number, rawValue: string) {
    const value = rawValue.replace(/\D/g, "").slice(0, 1);
    setOtpDigits((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  }

  function handleOtpKeyDown(index: number, e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      otpInputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      otpInputRefs.current[index + 1]?.focus();
    }
  }

  function handleOtpPaste(e: ClipboardEvent<HTMLInputElement>) {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    const next = Array(6).fill("");
    pasted.split("").forEach((char, idx) => {
      next[idx] = char;
    });
    setOtpDigits(next);
    otpInputRefs.current[Math.min(pasted.length, 6) - 1]?.focus();
  }

  async function requestOtp(e: FormEvent) {
    e.preventDefault();
    const mail = email.trim().toLowerCase();
    if (!isValidEmail(mail)) {
      setError("Enter a valid email.");
      return;
    }
    setLoading(true);
    setError(null);
    setInfo(null);
    try {
      const res = await requestLoginOtp(mail);
      setEmail(mail);
      setStep("otp");
      const hint = res.dev_otp ? ` Dev code: ${res.dev_otp}` : "";
      setInfo((res.message || "OTP sent to your email.") + hint);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Could not send OTP.";
      if (message.toLowerCase().includes("failed to fetch")) {
        setError(
          `Cannot reach ${getSyndicateApiBase()}. Run the unified Django backend and set NEXT_PUBLIC_SYNDICATE_API_URL (or NEXT_PUBLIC_AFFILIATE_API_BASE_URL for a separate server).`
        );
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp(e: FormEvent) {
    e.preventDefault();
    const mail = email.trim().toLowerCase();
    const code = otp.trim();
    if (!isValidEmail(mail)) {
      setError("Enter a valid email.");
      return;
    }
    if (code.length !== 6) {
      setError("Enter 6-digit OTP.");
      return;
    }
    setLoading(true);
    setError(null);
    setInfo(null);
    try {
      const res = await verifyLoginOtp(mail, code);
      onSuccess(res);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Login failed.";
      if (message.toLowerCase().includes("failed to fetch")) {
        setError(
          `Cannot reach ${getSyndicateApiBase()}. Run the unified Django backend and set NEXT_PUBLIC_SYNDICATE_API_URL (or NEXT_PUBLIC_AFFILIATE_API_BASE_URL for a separate server).`
        );
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={step === "email" ? requestOtp : verifyOtp}
      className="font-thryon cut-frame cyber-frame glass-dark premium-gold-border gold-stroke mx-auto w-full max-w-xl p-6"
    >
      <h2 className="text-2xl font-black uppercase tracking-[0.08em] text-[#f8d878] sm:text-3xl">Affiliate access</h2>
      <p className="mt-2 text-[12px] leading-relaxed text-white/60">
        Sign in with the email on file. OTP is sent by the affiliate tracking service (same flow as the standalone portal).
      </p>

      <div className="mt-5">
        <label className="mb-2 block text-xs font-black uppercase tracking-[0.18em] text-white/65">
          {step === "email" ? "Email" : "Enter OTP"}
        </label>
        {step === "email" ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="cut-frame-sm focus-ring-gold w-full border border-[rgba(255,215,0,0.4)] bg-black/60 px-3 py-3 text-sm outline-none placeholder:text-white/35"
          />
        ) : (
          <div className="grid grid-cols-6 gap-2">
            {otpDigits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  otpInputRefs.current[idx] = el;
                }}
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpDigitChange(idx, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                onPaste={handleOtpPaste}
                className="cut-frame-sm focus-ring-gold h-12 w-full border border-[rgba(255,215,0,0.42)] bg-black/65 text-center text-lg font-black tracking-[0.06em] text-[#f8d878] outline-none"
              />
            ))}
          </div>
        )}
      </div>

      {step === "otp" ? (
        <div className="mt-2 text-xs text-white/70">
          OTP sent to <span className="font-semibold text-[#f8d878]">{email}</span>
        </div>
      ) : null}

      {info ? (
        <div className="mt-4 cut-frame-sm border border-[rgba(0,191,255,0.45)] bg-[rgba(0,191,255,0.1)] px-3 py-2 text-sm text-[#bfefff]">
          {info}
        </div>
      ) : null}
      {error ? <div className="mt-4 cut-frame-sm badge-danger px-3 py-2 text-sm">{error}</div> : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-5 cut-frame-sm hud-hover-glow btn-gold cta-shimmer cta-glow-gold w-full px-4 py-3 text-sm font-black uppercase tracking-[0.16em] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Please wait..." : step === "email" ? "Send OTP" : "Verify & enter"}
      </button>

      {step === "otp" ? (
        <button
          type="button"
          onClick={() => {
            setStep("email");
            setOtpDigits(Array(6).fill(""));
            setInfo(null);
            setError(null);
          }}
          className="mt-2 w-full text-xs font-semibold uppercase tracking-[0.14em] text-white/65 hover:text-[#f8d878]"
        >
          Change email
        </button>
      ) : null}
    </form>
  );
}
