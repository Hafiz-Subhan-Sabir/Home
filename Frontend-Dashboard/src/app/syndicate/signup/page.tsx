import { Suspense } from "react";

import { SyndicateSignupForm } from "./signup-form";

function SignupFallback() {
  return (
    <main className="w-full min-w-0 overflow-x-hidden break-words rounded-2xl border border-[rgba(0,255,180,0.34)] bg-black/50 p-5 sm:p-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8ffff0]/80">Syndicate Access</p>
      <h1 className="mt-2 text-[clamp(1.35rem,5vw,1.75rem)] font-black tracking-tight text-white">Sign Up</h1>
      <p className="mt-3 text-sm text-white/50">Loading…</p>
    </main>
  );
}

export default function SyndicateSignupPage() {
  return (
    <Suspense fallback={<SignupFallback />}>
      <SyndicateSignupForm />
    </Suspense>
  );
}
