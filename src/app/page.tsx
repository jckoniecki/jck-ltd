import Link from 'next/link'
import Marquee from '@/components/Marquee'
import HomeHero from '@/components/HomeHero'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />

      {/* Services preview */}
      <section className="py-24 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="label">Services</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: '#F1F5F9' }}>
                What JCK LTD <span className="text-cool">delivers.</span>
              </h2>
            </div>
            <Link href="/services"
              className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 flex-shrink-0 ml-4"
              style={{ color: '#6366F1' }}>
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              {
                icon: 'M3 3h5v5H3zM12 3h5v5h-5zM3 12h5v5H3zM12 12h5v5h-5z',
                title: 'Microsoft AI Enablement',
                sub: 'Copilot · Azure AI · Intune · M365',
                body: 'Deep deployment expertise across the full Microsoft AI stack — built on Kyndryl-scale delivery across Fortune 500 environments.',
              },
              {
                icon: 'M3 17l4-10 4 7 3-5 3 8',
                title: 'Founder Advisory',
                sub: 'Product AI · Enterprise GTM · Architecture',
                body: "For startups integrating AI into product and selling into enterprise. I've shipped production AI across healthcare, consumer, and enterprise.",
              },
            ].map(s => (
              <div key={s.title} className="card p-6 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}>
                    <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: '#6366F1' }}>
                      <path d={s.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-[15px] font-bold mb-1" style={{ color: '#E2E8F0' }}>{s.title}</h3>
                <p className="text-[11px] font-semibold mb-3 tracking-wide" style={{ color: 'rgba(99,102,241,0.55)' }}>{s.sub}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{s.body}</p>
              </div>
            ))}
          </div>

          <Link href="/services" className="sm:hidden flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#6366F1' }}>
            View all services →
          </Link>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#050810,#080D1A,#050810)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[90px] pointer-events-none"
          style={{ background: '#6366F1' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-[28px_1fr] gap-8 md:gap-16 items-start">
            <div className="hidden md:block w-px h-32 mt-1"
              style={{ background: 'linear-gradient(to bottom,#6366F1,rgba(99,102,241,0.04))' }} />
            <div>
              <span className="label">Philosophy</span>
              <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.15] mb-5"
                style={{ color: '#F1F5F9' }}>
                The enterprise has no shortage of advisors.{' '}
                <span className="text-cool">Most of them have never shipped anything.</span>
              </blockquote>
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-8" style={{ background: 'rgba(99,102,241,0.4)' }} />
                <p className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: '#334155' }}>
                  Jim Koniecki · JCK LTD
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/about" className="btn-primary">About Jim →</Link>
                <Link href="/contact" className="btn-ghost">Start a Conversation</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
