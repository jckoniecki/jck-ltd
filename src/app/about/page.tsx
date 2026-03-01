import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — JCK LTD',
  description: 'Jim Koniecki — Global Director of Digital Workplace Strategy at Kyndryl. Enterprise AI advisor, founder, and Ironman triathlete.',
}

const timeline = [
  { period: '2021 – Present', role: 'Global Director, Digital Workplace Strategy', org: 'Kyndryl', detail: 'Leading digital workplace strategy globally. Microsoft AI speaker at GDS Group. Managing enterprise AI deployments at Fortune 500 scale.' },
  { period: '~2011 – 2021', role: 'Enterprise Technology Leader', org: 'IBM', detail: 'Pre-Kyndryl spinoff. Decade of enterprise technology delivery across some of the world\'s largest and most complex organizations.' },
  { period: '2024 – Present', role: 'Founder', org: 'JA215 LTD', detail: 'Building AI-powered products: CentricHealth (behavioral health AI), consumer apps, and tools for populations Silicon Valley ignores.' },
]

const creds = [
  { label: 'Global Director', detail: 'Digital Workplace Strategy, Kyndryl — one of the world\'s largest IT service providers' },
  { label: 'Enterprise AI Speaker', detail: 'Microsoft & Kyndryl Generative AI Summit, GDS Group' },
  { label: 'Microsoft Expertise', detail: 'M365, Copilot, Azure AI, Intune, Teams — full ecosystem depth' },
  { label: 'Ironman Triathlete', detail: 'Trained for the finish line. Knows what it takes to build a winning plan and execute.' },
  { label: 'Healthcare AI Founder', detail: 'CentricHealth — prevention-first behavioral health platform in production' },
  { label: 'Fortune 500 Scale', detail: 'Infrastructure deployments across the world\'s largest organizations' },
]

export default function AboutPage() {
  return (
    <main className="pt-24 pb-32">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-16">
        <div className="max-w-2xl">
          <span className="label">About</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-5"
            style={{ color: '#F1F5F9' }}>
            Built for enterprise.<br />
            <span className="text-cool">Wired to build.</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            Senior enterprise technology leader by day. AI founder by night.
            The advisor most consultants can&apos;t be — because they&apos;ve only done one of those.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg,rgba(99,102,241,0.3),transparent)' }} />
      </div>

      {/* Bio + Photo */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-10 lg:gap-20 mb-20">
          {/* Photo */}
          <div className="flex-shrink-0">
            {/* Photo placeholder */}
            <div className="relative w-full max-w-[280px] rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/5', border: '1px solid rgba(99,102,241,0.18)', background: 'linear-gradient(160deg,#0D1225,#080D18)' }}>
              <svg viewBox="0 0 280 350" className="absolute inset-0 w-full h-full">
                <defs>
                  <radialGradient id="figG2" cx="50%" cy="35%" r="50%">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.2)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.03)" />
                  </radialGradient>
                  <linearGradient id="shapeG2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(129,140,248,0.32)" />
                    <stop offset="100%" stopColor="rgba(99,102,241,0.06)" />
                  </linearGradient>
                </defs>
                <rect width="280" height="350" fill="#080D18" />
                <rect width="280" height="350" fill="url(#figG2)" />
                <circle cx="140" cy="115" r="48" fill="url(#shapeG2)" />
                <path d="M55 320 Q80 228 140 222 Q200 228 225 320 Z" fill="url(#shapeG2)" />
                <circle cx="124" cy="108" r="5" fill="rgba(129,140,248,0.25)" />
                <circle cx="156" cy="108" r="5" fill="rgba(129,140,248,0.25)" />
                <path d="M124 132 Q140 142 156 132" stroke="rgba(129,140,248,0.22)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="56" y="308" width="168" height="28" rx="6" fill="rgba(6,9,24,0.92)" />
                <text x="140" y="325" textAnchor="middle" fill="rgba(99,102,241,0.65)" fontSize="10" fontWeight="700" fontFamily="system-ui" letterSpacing="1.5">JIM KONIECKI</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 h-1/4" style={{ background: 'linear-gradient(to top,rgba(8,13,24,0.9),transparent)' }} />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[10px]" style={{ color: '#334155' }}>Photo placeholder — replace via email</span>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-5 space-y-2">
              <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold hover:opacity-75 transition-opacity"
                style={{ color: '#6366F1' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile ↗
              </a>
            </div>
          </div>

          {/* Bio copy */}
          <div>
            <div className="space-y-5 text-[15px] leading-relaxed mb-10" style={{ color: '#64748B' }}>
              <p>
                I&apos;ve spent the last several years building at two speeds simultaneously. By day, I&apos;m a senior enterprise technology leader at Kyndryl — one of the world&apos;s largest IT service providers — managing complex Microsoft infrastructure deployments at scale across some of the world&apos;s largest organizations.
              </p>
              <p>
                By night, I&apos;m a founder. I&apos;ve built and shipped AI-powered products in healthcare, consumer, and enterprise — including CentricHealth, a prevention-first behavioral health platform designed to keep families out of emergency departments before a crisis occurs.
              </p>
              <p style={{ color: '#475569' }}>
                That combination is rare. Most enterprise AI advisors have never shipped code in production. Most builders have never managed a Fortune 500 Microsoft deployment. The advisor who&apos;s done both is someone fundamentally different.
              </p>
              <p style={{ color: '#475569' }}>
                An Ironman can always find the finish line. I know how to train, build the winning plan, and execute when it matters — whether that&apos;s a global infrastructure rollout or a 3am debugging session on a production system.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid sm:grid-cols-2 gap-2">
              {creds.map(c => (
                <div key={c.label} className="flex items-start gap-3 p-4 rounded-xl transition-colors duration-200"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#6366F1' }} />
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#CBD5E1' }}>{c.label}</p>
                    <p className="text-xs leading-snug" style={{ color: '#334155' }}>{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="h-px mb-14" style={{ background: 'rgba(255,255,255,0.04)' }} />
          <span className="label">Career</span>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-10" style={{ color: '#F1F5F9' }}>Background</h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="grid sm:grid-cols-[200px_1fr] gap-4 sm:gap-10 py-8"
                style={{ borderBottom: i < timeline.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <div className="flex-shrink-0">
                  <p className="text-xs font-mono mb-1" style={{ color: 'rgba(99,102,241,0.5)' }}>{item.period}</p>
                  <p className="text-[13px] font-bold" style={{ color: '#CBD5E1' }}>{item.role}</p>
                  <p className="text-xs font-semibold mt-0.5" style={{ color: '#6366F1' }}>{item.org}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="p-8 sm:p-12 rounded-2xl mb-16"
          style={{ background: 'rgba(99,102,241,0.04)', border: '1px solid rgba(99,102,241,0.12)' }}>
          <span className="label">Philosophy</span>
          <blockquote className="text-xl sm:text-2xl font-black tracking-tight leading-[1.2] mb-5"
            style={{ color: '#F1F5F9' }}>
            The enterprise has no shortage of advisors.{' '}
            <span className="text-cool">Most of them have never shipped anything.</span>
          </blockquote>
          <p className="text-sm" style={{ color: '#334155' }}>— Jim Koniecki, JCK LTD</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact" className="btn-primary inline-flex">
            Work With Me →
          </Link>
        </div>
      </div>
    </main>
  )
}
