import Image from 'next/image'
import { NavApp } from '@/components/NavApp'
import GlobalBottomSections from '@/components/GlobalBottomSections'

const VALUE_PILLARS = [
  {
    title: 'Practical Training Systems',
    description:
      'Structured modules focused on execution, positioning, and leverage so every lesson translates into action.',
  },
  {
    title: 'Elite Operator Frameworks',
    description:
      'Battle-tested decision tools that help you prioritize high-value moves and avoid wasted effort.',
  },
  {
    title: 'Ethical Power Blueprint',
    description:
      'Methods to build wealth and influence with integrity, discipline, and long-term control.',
  },
  {
    title: 'Strategic Growth Environment',
    description:
      'A focused ecosystem designed to keep your standards high, your momentum stable, and your outcomes measurable.',
  },
]

const DELIVERY_FLOW = [
  {
    step: '01',
    title: 'Access & Orientation',
    description:
      'Get immediate platform access and a clear operating map so you know exactly where to begin.',
  },
  {
    step: '02',
    title: 'Implementation Phases',
    description:
      'Move through practical phases built to turn insight into execution from day one.',
  },
  {
    step: '03',
    title: 'Performance Refinement',
    description:
      'Optimize your systems with repeatable workflows, strategic feedback loops, and real-world adaptation.',
  },
]

const FOUNDER_SHOWCASE = [
  { src: '/assets/founder/ceo.jpg', alt: 'Founder portrait one' },
  { src: '/assets/founder/ceo.webp', alt: 'Founder portrait two' },
  { src: '/assets/founder/Pic%204.png', alt: 'Founder portrait three' },
  { src: '/assets/founder/Still%201.jpg', alt: 'Founder portrait four' },
]

export default function WhatYouGetPage() {
  return (
    <div className="min-h-[100dvh] bg-black">
      <NavApp />
      <section className="relative flex h-[100dvh] min-h-[100dvh] w-full items-center overflow-hidden px-4 pb-14 pt-[96px] sm:px-6 sm:pb-16 sm:pt-[110px]">
        <div className="pointer-events-none absolute inset-0">
          <video autoPlay muted loop playsInline preload="metadata" className="h-[100dvh] w-full object-cover opacity-100">
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/84 to-[#02050b]/92" />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <h1 className="mt-3 text-3xl font-bold text-cyan-50 sm:text-4xl md:text-5xl">Access to a powerful network and alliance.</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-cyan-100/75 sm:text-base">
            You unlock a complete execution ecosystem: strategy, implementation systems, and structured growth frameworks designed for real-world outcomes.
          </p>
        </div>
      </section>

      <section className="relative flex h-[100dvh] min-h-[100dvh] w-full items-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/g.gif"
            alt=""
            aria-hidden
            fill
            unoptimized
            sizes="100vw"
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(251,191,36,0.15),transparent_35%),radial-gradient(circle_at_86%_82%,rgba(34,211,238,0.12),transparent_35%)]" />
          <div className="absolute inset-0 bg-black/54" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(1860px,99vw)]">
          <div className="mb-5">
            <h2 className="mt-2 text-5xl font-black text-amber-100 drop-shadow-[0_0_22px_rgba(251,191,36,0.42)] sm:text-6xl lg:text-7xl">
              Built for operators who want structure, not noise
            </h2>
            <p className="mt-3 max-w-5xl text-lg leading-relaxed text-zinc-200/90 sm:text-xl">
              A complete system for money, power, and life mastery designed to create clarity, execution, and long-term momentum.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:gap-5">
            {VALUE_PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`methods-fade-up group relative min-h-[clamp(250px,31vh,340px)] overflow-hidden rounded-2xl border p-6 sm:p-7 shadow-[0_0_30px_rgba(251,191,36,0.24)] transition duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:rotate-[-0.2deg] ${
                  index % 2 === 0
                    ? 'border-amber-300/60 bg-gradient-to-b from-[#170f04]/78 via-[#0a0a0a] to-black hover:border-amber-200/75 hover:shadow-[0_0_48px_rgba(251,191,36,0.44)]'
                    : 'border-cyan-300/48 bg-gradient-to-b from-[#130b03]/74 via-[#090909] to-black hover:border-cyan-200/70 hover:shadow-[0_0_44px_rgba(34,211,238,0.34)]'
                }`}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-300/80 to-transparent opacity-70 group-hover:opacity-100" />
                <h3 className="text-2xl font-semibold text-amber-100 sm:text-3xl">{pillar.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-zinc-200/88">{pillar.description}</p>
              </article>
            ))}
            </div>
            <div className="rounded-2xl border border-amber-300/50 bg-gradient-to-b from-[#120d05]/80 via-black/82 to-[#100b04]/84 p-6 shadow-[0_0_40px_rgba(251,191,36,0.24)] sm:p-7">
              <p className="text-base uppercase tracking-[0.24em] text-amber-200/85">Delivery Process</p>
              <div className="mt-4 space-y-3">
                {DELIVERY_FLOW.map((item, index) => (
                  <article
                    key={item.step}
                    className={`methods-fade-up rounded-xl border p-5 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] ${
                      index === 1
                        ? 'border-amber-300/58 bg-[#130e05]/60 shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.45)]'
                        : 'border-amber-300/48 bg-black/56 shadow-[0_0_26px_rgba(251,191,36,0.22)] hover:shadow-[0_0_34px_rgba(251,191,36,0.34)]'
                    }`}
                  >
                    <p className="text-base font-semibold tracking-[0.2em] text-amber-200/85">{item.step}</p>
                    <h3 className="mt-1 text-xl font-semibold text-amber-100 sm:text-2xl">{item.title}</h3>
                    <p className="mt-2 text-base leading-relaxed text-zinc-200/90 sm:text-lg">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-[100dvh] min-h-[100dvh] w-full items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-14">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/assets/tt.gif"
            alt=""
            aria-hidden
            fill
            unoptimized
            sizes="100vw"
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-black/56" />
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-[min(1860px,99vw)] gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="relative min-h-[clamp(500px,68vh,780px)] overflow-hidden rounded-3xl bg-gradient-to-b from-[#151005]/68 to-black/92 p-8 shadow-[0_0_38px_rgba(251,191,36,0.24)] sm:p-12">
            <p className="text-base uppercase tracking-[0.24em] text-amber-200/85">Access to a Powerful Network and Alliance</p>
            <h2 className="mt-3 text-4xl font-bold text-amber-100 sm:text-5xl lg:text-6xl">The path to success is not meant to be walked alone</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-zinc-200/90 sm:text-xl">
              <p>
                Joining a powerful alliance of disciplined operators is not optional for those who want sustained power and meaningful growth.
              </p>
              <p>
                The Syndicate culture is built on integrity, standards, and strategic accountability so strengths are sharpened and weaknesses are transformed.
              </p>
            </div>
          </article>

          <div className="relative min-h-[clamp(500px,68vh,780px)] rounded-3xl bg-gradient-to-b from-[#120d05]/64 to-black/92 p-8 shadow-[0_0_38px_rgba(251,191,36,0.22)] sm:p-12">
          <h2 className="text-center text-5xl font-black uppercase tracking-[0.12em] text-amber-100 drop-shadow-[0_0_16px_rgba(251,191,36,0.35)] sm:text-6xl">
            Founder Vision
          </h2>
          <p className="mx-auto mt-4 max-w-5xl text-center text-lg leading-relaxed text-zinc-200/90 sm:text-xl">
            Built for disciplined operators who execute with intent, structure, and long-term leverage.
          </p>
          <div className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FOUNDER_SHOWCASE.map((item) => (
              <article
                key={item.src}
                className="group relative h-[clamp(220px,36vh,320px)] overflow-hidden rounded-2xl border border-amber-300/48 bg-black/45 shadow-[0_0_30px_rgba(251,191,36,0.22)] transition duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_0_46px_rgba(251,191,36,0.38)]"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              </article>
            ))}
          </div>
          </div>
        </div>
      </section>

      <GlobalBottomSections />

    </div>
  )
}

