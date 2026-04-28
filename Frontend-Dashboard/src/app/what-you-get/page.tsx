import Image from 'next/image'
import Link from 'next/link'
import { NavApp } from '@/components/NavApp'
import GlobalBottomSections from '@/components/GlobalBottomSections'
import NeonTypingBadge from '@/components/NeonTypingBadge'

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

const MASTERY_POINTS = [
  'Master money and power systems without becoming enslaved by them.',
  'Use influence with discipline, moral resilience, and long-term intent.',
  'Transform ambition into structured execution and measurable outcomes.',
]

const KINGS_PATH_POINTS = [
  'Study the strategic principles behind kings, emperors, and elite operators.',
  'Convert historical insight into modern frameworks for power, leadership, and leverage.',
  'Build integrity and control so growth never compromises your standards.',
]

const MEMBERSHIP_PREVIEW = [
  { name: 'The Pawn', note: 'Entry-level access and foundational momentum systems.' },
  { name: 'The King', note: 'Elite leadership tier with highest-level leverage principles.' },
]

const CYBER_PANEL_GLOW = [
  'border-cyan-300/95 shadow-[0_0_0_1px_rgba(56,236,255,1),0_0_26px_rgba(56,236,255,0.72),0_0_72px_rgba(56,236,255,0.44),0_0_140px_rgba(56,236,255,0.24),inset_0_0_18px_rgba(56,236,255,0.14)]',
  'border-violet-300/95 shadow-[0_0_0_1px_rgba(193,120,255,1),0_0_26px_rgba(193,120,255,0.72),0_0_72px_rgba(193,120,255,0.44),0_0_140px_rgba(193,120,255,0.24),inset_0_0_18px_rgba(193,120,255,0.14)]',
  'border-rose-400/95 shadow-[0_0_0_1px_rgba(251,113,133,1),0_0_26px_rgba(251,113,133,0.72),0_0_72px_rgba(251,113,133,0.44),0_0_140px_rgba(251,113,133,0.24),inset_0_0_18px_rgba(251,113,133,0.14)]',
  'border-cyan-300/95 shadow-[0_0_0_1px_rgba(56,236,255,1),0_0_26px_rgba(56,236,255,0.72),0_0_72px_rgba(56,236,255,0.44),0_0_140px_rgba(56,236,255,0.24),inset_0_0_18px_rgba(56,236,255,0.14)]',
  'border-fuchsia-300/95 shadow-[0_0_0_1px_rgba(244,114,182,1),0_0_26px_rgba(244,114,182,0.72),0_0_72px_rgba(244,114,182,0.44),0_0_140px_rgba(244,114,182,0.24),inset_0_0_18px_rgba(244,114,182,0.14)]',
  'border-teal-300/95 shadow-[0_0_0_1px_rgba(94,234,212,1),0_0_26px_rgba(94,234,212,0.72),0_0_72px_rgba(94,234,212,0.44),0_0_140px_rgba(94,234,212,0.24),inset_0_0_18px_rgba(94,234,212,0.14)]',
]

export default function WhatYouGetPage() {
  return (
    <div className="relative min-h-[100dvh] w-screen min-w-[100vw] overflow-x-hidden bg-black">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/899461161?autoplay=1&muted=1&loop=1&background=1"
          className="h-full w-full scale-[1.16] opacity-56 saturate-[0.88]"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="What you get background video"
        />
      </div>
      <div className="pointer-events-none fixed inset-0 z-0 bg-black/58" />
      <NavApp />
      <section className="relative z-10 flex h-[100dvh] min-h-[100dvh] w-screen min-w-[100vw] items-center overflow-hidden px-4 pb-10 pt-[110px] sm:px-6 sm:pb-12 sm:pt-[126px]">
        <div className="pointer-events-none absolute left-1/2 top-[clamp(96px,11vw,136px)] z-20 w-full -translate-x-1/2 px-4">
          <div className="mx-auto flex w-full max-w-[920px] justify-center">
            <NeonTypingBadge
              phrases={['HONOUR · MONEY · POWER · FREEDOM']}
              typingSpeed={78}
              deletingSpeed={44}
              pauseMs={1350}
              boxed={false}
            />
          </div>
        </div>
        <div className="relative z-10 mx-auto grid h-full w-full max-w-[min(2200px,100vw)] items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="pl-[clamp(0.2rem,2.8vw,3.4rem)] text-left">
            <h1 className="mt-4 text-5xl font-bold leading-[1.02] text-amber-200 drop-shadow-[0_0_24px_rgba(251,191,36,0.42)] sm:text-6xl md:text-7xl lg:text-[7.6rem]">
              <span className="block">Access To A</span>
              <span className="block">Powerful Network</span>
              <span className="block">And Alliance.</span>
            </h1>
            <p className="mt-5 max-w-4xl text-base text-amber-100/88 sm:text-lg md:text-2xl">
              <span className="block">You unlock a complete execution ecosystem:</span>
              <span className="block">strategy, implementation systems, and structured</span>
              <span className="block">growth frameworks designed for real-world outcomes.</span>
            </p>
          </div>
          <div className="relative mx-auto grid h-[66vh] min-h-[460px] w-full max-w-[500px] translate-y-[13%] place-items-center">
            <div className="absolute left-1/2 top-1/2 h-[94%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.34)_0%,rgba(251,191,36,0.1)_42%,rgba(0,0,0,0)_74%)] blur-[14px]" />
            <div
              className="relative grid h-full w-full place-items-center"
              style={{ animation: 'whatYouGetKeyFloat 4.6s ease-in-out infinite' }}
            >
              <Image
                src="/assets/Gold-Key.png"
                alt="Gold key access marker"
                fill={false}
                width={440}
                height={760}
                sizes="(max-width: 1024px) 320px, 440px"
                className="mt-16 h-[84%] w-auto object-contain object-center drop-shadow-[0_0_62px_rgba(251,191,36,0.78)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 flex h-[100dvh] min-h-[100dvh] w-full items-center overflow-hidden px-4 py-10 sm:px-6 sm:py-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#03050a]/80 via-black/84 to-[#010204]/88" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_20%,rgba(251,191,36,0.08),transparent_35%),radial-gradient(circle_at_86%_82%,rgba(34,211,238,0.06),transparent_35%)]" />
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
              <div
                key={pillar.title}
                className={`cyber-chip-animate methods-fade-up group relative border bg-transparent p-[1px] [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] transition duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-[cyberChipGlow_2.4s_ease-in-out_infinite] ${CYBER_PANEL_GLOW[index % CYBER_PANEL_GLOW.length]}`}
                style={{ animationDelay: `${index * 0.16}s` }}
              >
                <span className="pointer-events-none absolute inset-[-1px] bg-transparent opacity-0 blur-[12px]" />
                <article className="relative min-h-[clamp(250px,31vh,340px)] overflow-hidden bg-black/44 p-6 [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] sm:p-7">
                  <h3 className="text-2xl font-semibold text-amber-100 sm:text-3xl">{pillar.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-zinc-200/88">{pillar.description}</p>
                </article>
              </div>
            ))}
            </div>
            <div className="cyber-chip-animate group relative border border-violet-300/95 bg-transparent p-[1px] shadow-[0_0_0_1px_rgba(193,120,255,0.92),0_0_48px_rgba(193,120,255,0.62),0_0_118px_rgba(193,120,255,0.3)] animate-[cyberChipGlow_2.2s_ease-in-out_infinite] [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)]">
              <span className="pointer-events-none absolute inset-[-1px] bg-transparent opacity-0 blur-[12px]" />
              <div className="relative bg-black/44 p-6 [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] sm:p-7">
                <p className="text-base uppercase tracking-[0.24em] text-amber-200/85">Delivery Process</p>
                <div className="mt-4 space-y-3">
                  {DELIVERY_FLOW.map((item, index) => (
                    <div
                      key={item.step}
                      className={`cyber-chip-animate methods-fade-up relative border bg-transparent p-[1px] [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] animate-[cyberChipGlow_2.2s_ease-in-out_infinite] ${CYBER_PANEL_GLOW[(index + 2) % CYBER_PANEL_GLOW.length]}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <span className="pointer-events-none absolute inset-[-1px] bg-transparent opacity-0 blur-[10px]" />
                      <article className="relative bg-black/45 p-5 [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)]">
                        <p className="text-base font-semibold tracking-[0.2em] text-amber-200/85">{item.step}</p>
                        <h3 className="mt-1 text-xl font-semibold text-amber-100 sm:text-2xl">{item.title}</h3>
                        <p className="mt-2 text-base leading-relaxed text-zinc-200/90 sm:text-lg">{item.description}</p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden px-4 py-14 sm:px-6 sm:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-black/56" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(1860px,99vw)]">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="cyber-chip-animate group relative border border-amber-300/95 bg-transparent p-[1px] shadow-[0_0_0_1px_rgba(255,198,64,0.92),0_0_48px_rgba(255,198,64,0.62),0_0_118px_rgba(255,198,64,0.32)] animate-[cyberChipGlow_2.2s_ease-in-out_infinite] [clip-path:polygon(14px_0,calc(100%-14px)_0,100%_14px,100%_calc(100%-14px),calc(100%-14px)_100%,14px_100%,0_calc(100%-14px),0_14px)]">
              <span className="pointer-events-none absolute inset-[-1px] bg-transparent opacity-0 blur-[12px]" />
              <div className="relative h-full bg-transparent p-7 [clip-path:polygon(14px_0,calc(100%-14px)_0,100%_14px,100%_calc(100%-14px),calc(100%-14px)_100%,14px_100%,0_calc(100%-14px),0_14px)] sm:p-9">
                <p className="text-xs uppercase tracking-[0.3em] text-amber-300/85">Money and Power Mastery</p>
                <h2 className="mt-3 text-3xl font-black text-amber-100 sm:text-4xl">Master tools, not illusions.</h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-200/88 sm:text-lg">
                  The philosophy trains you to operate inside real money and power systems with control, discipline, and purpose - not chaos.
                </p>
                <div className="mt-6 space-y-3">
                  {MASTERY_POINTS.map((point, index) => (
                    <div
                      key={point}
                      className="relative border border-cyan-300/85 bg-transparent p-[1px] [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)] shadow-[0_0_0_1px_rgba(56,236,255,0.92),0_0_24px_rgba(56,236,255,0.52),0_0_64px_rgba(56,236,255,0.28)] animate-[cyberChipGlow_2.6s_ease-in-out_infinite]"
                    >
                      <p className="bg-transparent px-4 py-3 text-sm leading-relaxed text-zinc-100 [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)] sm:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="cyber-chip-animate group relative border border-cyan-300/95 bg-transparent p-[1px] shadow-[0_0_0_1px_rgba(56,236,255,0.92),0_0_48px_rgba(56,236,255,0.62),0_0_118px_rgba(56,236,255,0.3)] animate-[cyberChipGlow_2.2s_ease-in-out_infinite] [clip-path:polygon(14px_0,calc(100%-14px)_0,100%_14px,100%_calc(100%-14px),calc(100%-14px)_100%,14px_100%,0_calc(100%-14px),0_14px)]">
              <span className="pointer-events-none absolute inset-[-1px] bg-transparent opacity-0 blur-[12px]" />
              <div className="relative h-full bg-transparent p-7 [clip-path:polygon(14px_0,calc(100%-14px)_0,100%_14px,100%_calc(100%-14px),calc(100%-14px)_100%,14px_100%,0_calc(100%-14px),0_14px)] sm:p-9">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/85">Path of Kings and Emperors</p>
                <h2 className="mt-3 text-3xl font-black text-amber-100 sm:text-4xl">Ancient strategy, modern execution.</h2>
                <p className="mt-4 text-base leading-relaxed text-zinc-200/88 sm:text-lg">
                  Follow principles of historical leadership and apply them to business, influence, and high-stakes decision making in today&apos;s world.
                </p>
                <div className="mt-6 space-y-3">
                  {KINGS_PATH_POINTS.map((point, index) => (
                    <div
                      key={point}
                      className="relative border border-violet-300/85 bg-transparent p-[1px] [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)] shadow-[0_0_0_1px_rgba(193,120,255,0.92),0_0_24px_rgba(193,120,255,0.52),0_0_64px_rgba(193,120,255,0.28)] animate-[cyberChipGlow_2.6s_ease-in-out_infinite]"
                    >
                      <p className="bg-transparent px-4 py-3 text-sm leading-relaxed text-zinc-100 [clip-path:polygon(10px_0,calc(100%-10px)_0,100%_10px,100%_calc(100%-10px),calc(100%-10px)_100%,10px_100%,0_calc(100%-10px),0_10px)] sm:text-base">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden px-4 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-black/58" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(1860px,99vw)]">
          <p className="text-center text-xs uppercase tracking-[0.34em] text-amber-300/82">Membership Trajectory</p>
          <h2 className="mt-3 text-center text-3xl font-black text-amber-100 sm:text-4xl md:text-5xl">Choose your operating tier</h2>
          <div className="mx-auto mt-8 grid max-w-6xl gap-4 md:grid-cols-2">
            {MEMBERSHIP_PREVIEW.map((tier, index) => (
              <article
                key={tier.name}
                className={`cyber-chip-animate group relative border bg-transparent p-[1px] [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)] animate-[cyberChipGlow_2.2s_ease-in-out_infinite] ${CYBER_PANEL_GLOW[(index + 1) % CYBER_PANEL_GLOW.length]}`}
              >
                <span className="pointer-events-none absolute inset-[-1px] bg-transparent opacity-0 blur-[10px]" />
                <div className="relative h-full bg-transparent p-6 [clip-path:polygon(12px_0,calc(100%-12px)_0,100%_12px,100%_calc(100%-12px),calc(100%-12px)_100%,12px_100%,0_calc(100%-12px),0_12px)]">
                  <p className="text-sm uppercase tracking-[0.22em] text-amber-200/85">Tier</p>
                  <h3 className="mt-2 text-2xl font-bold text-zinc-100 sm:text-3xl">{tier.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-200/88 sm:text-base">{tier.note}</p>
                  <Link
                    href="/#pricing"
                    className="mt-5 inline-flex items-center justify-center border border-amber-300/85 bg-transparent px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-amber-100 shadow-[0_0_0_1px_rgba(251,191,36,0.72),0_0_26px_rgba(251,191,36,0.46)] animate-[cyberChipGlow_2s_ease-in-out_infinite] transition duration-300 hover:border-amber-200 hover:shadow-[0_0_0_1px_rgba(252,211,77,0.9),0_0_38px_rgba(252,211,77,0.62)]"
                  >
                    View Syndicate Offers
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-xs uppercase tracking-[0.34em] text-amber-300/82">Pawn Trajectory</p>
          <h3 className="mt-3 text-center text-3xl font-black text-amber-100 sm:text-4xl md:text-5xl">Rise through the pawn path</h3>
          <div className="relative mx-auto mt-8 h-[60vh] min-h-[420px] w-full max-w-6xl">
            <div className="relative mx-auto h-full w-full max-w-[720px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.36)_0%,rgba(251,191,36,0.12)_42%,rgba(0,0,0,0)_74%)] blur-[12px]" />
              <div className="cyber-chip-animate absolute left-[16%] top-[26%] h-[35%] w-[28%] min-h-[150px] min-w-[130px]">
                <Image
                  src="/assets/pawn2.png"
                  alt="Pawn grouped left"
                  fill
                  sizes="(max-width: 768px) 24vw, 18vw"
                  className="object-contain drop-shadow-[0_0_34px_rgba(251,191,36,0.45)]"
                />
              </div>
              <div className="cyber-chip-animate absolute left-1/2 top-[52%] h-[78%] w-[48%] min-h-[340px] min-w-[260px] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/assets/pawn1.png"
                  alt="Pawn grouped center"
                  fill
                  sizes="(max-width: 768px) 46vw, 36vw"
                  className="object-contain drop-shadow-[0_0_62px_rgba(251,191,36,0.66)]"
                />
              </div>
              <div className="cyber-chip-animate absolute right-[16%] top-[27%] h-[38%] w-[30%] min-h-[168px] min-w-[145px]">
                <Image
                  src="/assets/pawn.png"
                  alt="Pawn grouped right"
                  fill
                  sizes="(max-width: 768px) 26vw, 20vw"
                  className="object-contain drop-shadow-[0_0_40px_rgba(251,191,36,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 flex h-[100dvh] min-h-[100dvh] w-full items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-14">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-black/58" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(1860px,99vw)]">
          <div className="relative bg-transparent">
            <article className="relative min-h-[clamp(500px,68vh,780px)] overflow-hidden bg-transparent p-8 sm:p-12">
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
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Aligned network of ambitious operators with shared standards.',
                'Strategic accountability that keeps your execution consistent.',
                'Real-world frameworks focused on leverage, not noise.',
                'A disciplined environment built for long-term power growth.',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-amber-300/85 bg-transparent px-4 py-3 text-sm leading-relaxed text-zinc-200/88 shadow-[0_0_0_1px_rgba(251,191,36,0.82),0_0_22px_rgba(251,191,36,0.44),0_0_56px_rgba(251,191,36,0.24)] animate-[cyberChipGlow_2.5s_ease-in-out_infinite] sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
            </article>
            <div className="cyber-chip-animate mx-auto mb-8 mt-10 h-[220px] w-[220px] sm:h-[300px] sm:w-[300px]">
              <div className="relative h-full w-full" style={{ animation: 'whatYouGetCoinSpin 14s linear infinite' }}>
                <Image
                  src="/assets/coin-gold.png"
                  alt="Syndicate coin symbol"
                  fill
                  sizes="(max-width: 768px) 220px, 300px"
                  className="object-contain drop-shadow-[0_0_54px_rgba(251,191,36,0.72)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalBottomSections />

    </div>
  )
}

