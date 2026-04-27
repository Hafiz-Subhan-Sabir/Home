'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import FeaturedLogosStrip from '@/components/FeaturedLogosStrip'
import SiteFooter from '@/components/SiteFooter'
import { syndicateOtpLoginHref } from '@/lib/syndicate-otp-paths'

const FEATURED_LOGOS = [
  {
    src: '/assets/press-forbes.png',
    alt: 'Forbes logo',
    href: 'https://forbes.ge/en/how-the-syndicate-uses-mastery-and-empowerment-to-redefine-business/',
  },
  {
    src: '/assets/press-luxury.png',
    alt: 'LLM logo',
    href: 'https://www.luxurylifestylemag.co.uk/money/how-the-syndicate-empowers-individuals-to-master-power-money-and-influence-in-the-money-mastery-course/',
  },
  {
    src: '/assets/press-gq.png',
    alt: 'GQ logo',
    href: 'https://gq.co.za/wealth/2025-02-10-how-the-syndicate-can-disrupt-the-traditional-model-of-influence-and-education-in-the-digital-age/',
  },
]

export default function GlobalBottomSections() {
  const pathname = usePathname()
  const isProgramsPage = pathname === '/programs'
  const isWhatYouGetPage = pathname === '/what-you-get'
  const actionWord = pathname === '/what-you-get' ? 'BE POWERFUL' : pathname === '/our-methods' ? 'BE RICH' : 'MASTER MONEY'
  const sectionLayoutClass = isWhatYouGetPage
    ? 'relative flex h-[100dvh] min-h-[100dvh] w-full items-center overflow-hidden px-4 py-12 sm:px-6 sm:py-14'
    : 'relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20'

  return (
    <>
      <section id="joinNowSection" className={sectionLayoutClass}>
        <div className="pointer-events-none absolute inset-0">
          <video autoPlay muted loop playsInline preload="metadata" className="h-full w-full object-cover opacity-55">
            <source src="/assets/v.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/72" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[min(1700px,98vw)] px-3 text-center">
          {isWhatYouGetPage && (
            <div className="relative mx-auto mb-10 w-full max-w-[min(1600px,96vw)] overflow-hidden rounded-3xl bg-gradient-to-b from-black/55 via-[#060606]/70 to-black/70 p-7 shadow-[0_0_50px_rgba(251,191,36,0.18)] backdrop-blur-[2px] sm:mb-12 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(251,191,36,0.18),transparent_38%),radial-gradient(circle_at_88%_82%,rgba(34,211,238,0.14),transparent_40%)]" />
              <h2 className="bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 bg-clip-text text-2xl font-black tracking-[0.02em] text-transparent drop-shadow-[0_0_16px_rgba(251,191,36,0.34)] sm:text-4xl">
                You Leave With Clarity, Discipline, and Executable Systems
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-zinc-100/85 sm:text-base">
                Not theory. Not noise. Every module is designed for real-world leverage across business, finances, and leadership - so your execution stays sharp
                and your growth stays controlled.
              </p>
              <div className="relative mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {['Clarity', 'Discipline', 'Execution', 'Leverage', 'Strategy', 'Scale'].map((keyword, index) => (
                  <span
                    key={keyword}
                    className={`inline-flex min-h-[48px] items-center justify-center rounded-xl px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-amber-100 shadow-[0_0_16px_rgba(251,191,36,0.26)] transition duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(251,191,36,0.42)] sm:min-h-[54px] sm:text-xs ${
                      index % 2 === 0
                        ? 'bg-gradient-to-b from-[#1a1206]/92 via-[#0a0804]/88 to-black/80'
                        : 'bg-gradient-to-b from-[#07131b]/92 via-[#050b10]/88 to-black/80'
                    }`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
          {isProgramsPage ? (
            <h2 className="mx-auto mt-3 max-w-[30ch] text-4xl font-black uppercase leading-[1.08] tracking-[0.05em] text-amber-100 sm:text-6xl md:text-7xl">
              <span className="block">
                IF YOU WANT
                <span className="hamburger-attract mx-2 inline-block text-amber-200 drop-shadow-[0_0_30px_rgba(251,191,36,0.9)]">FREEDOM</span>
                FROM
              </span>
              <span className="mt-1.5 block">
                <span className="hamburger-attract mx-2 inline-block text-amber-200 drop-shadow-[0_0_30px_rgba(251,191,36,0.9)]">9 TO 5</span>
                JOIN
                <span className="hamburger-attract mx-2 inline-block text-amber-100 drop-shadow-[0_0_32px_rgba(251,191,36,0.92)]">THE SYNDICATE</span>
              </span>
            </h2>
          ) : (
            <h2 className="mx-auto mt-3 max-w-[26ch] text-4xl font-black uppercase leading-[1.08] tracking-[0.05em] text-amber-100 sm:text-6xl md:text-7xl">
              <span className="block">IF YOU WANT TO</span>
              <span className="mt-1.5 block">
                <span className="hamburger-attract mx-2 inline-block text-amber-200 drop-shadow-[0_0_30px_rgba(251,191,36,0.9)]">{actionWord}</span>
                <span className="mx-2 inline-block">JOIN</span>
                <span className="hamburger-attract mx-2 inline-block text-amber-100 drop-shadow-[0_0_32px_rgba(251,191,36,0.92)]">THE SYNDICATE</span>
              </span>
            </h2>
          )}
          <div className="mt-10 flex flex-wrap justify-center gap-x-7 gap-y-4 sm:mt-12">
            <Link
              href={syndicateOtpLoginHref()}
              className="hamburger-attract inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-xl border border-amber-300/80 bg-black/80 px-10 py-4 text-lg font-bold tracking-[0.03em] text-amber-100 shadow-[0_0_24px_rgba(251,191,36,0.45)] transition hover:scale-[1.04] hover:bg-black/95 hover:shadow-[0_0_36px_rgba(251,191,36,0.68)]"
            >
              JOIN NOW
            </Link>
            <Link
              href="/programs"
              className="hamburger-attract inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-xl border border-amber-300/80 bg-black/80 px-10 py-4 text-lg font-bold tracking-[0.03em] text-amber-50 shadow-[0_0_24px_rgba(251,191,36,0.45)] transition hover:scale-[1.04] hover:bg-black/95 hover:shadow-[0_0_36px_rgba(251,191,36,0.68)]"
            >
              EXPLORE PROGRAMS
            </Link>
          </div>
        </div>
      </section>
      <FeaturedLogosStrip logos={FEATURED_LOGOS} speedSeconds={40} />
      <SiteFooter />
    </>
  )
}

