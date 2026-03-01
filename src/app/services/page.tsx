import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — JCK LTD',
  description: 'Microsoft AI Enablement, Digital Workplace Strategy, AI Governance, and Founder Advisory. Enterprise AI advisory from Jim Koniecki at Kyndryl.',
}

const services = [
  {
    n: '01',
    icon: 'M3 3h5v5H3zM12 3h5v5h-5zM3 12h5v5H3zM12 12h5v5h-5z',
    title: 'Microsoft AI Enablement',
    sub: 'Copilot · Azure AI · Intune · M365',
    summary: 'Deep deployment expertise across the full Microsoft AI stack.',
    body: [
      "Most organizations have the Microsoft licenses. Few have someone who's actually deployed AI across them at Fortune 500 scale. That's the gap JCK LTD fills.",
      "From Copilot rollouts that employees actually adopt, to Azure OpenAI integrations that run in production, to Intune policies that enforce AI security at the endpoint — this is hands-on deployment work, not advisory from a safe distance.",
      "Built on Kyndryl's global delivery practice and years of managing some of the world's most complex Microsoft environments.",
    ],
    bullets: ['Microsoft Copilot strategy and deployment', 'Azure AI and Azure OpenAI integration', 'Microsoft Intune + security governance', 'M365 AI feature adoption programs', 'Copilot Studio custom agents'],
  },
  {
    n: '02',
    icon: 'M10 2a8 8 0 100 16A8 8 0 0010 2zM10 6v4l3 3',
    title: 'Digital Workplace Strategy',
    sub: 'Roadmap · Adoption · Change Management',
    summary: 'How AI actually changes how people work.',
    body: [
      "The gap between 'AI strategy' and employees actually using AI is enormous — and most consultants live on the strategy side. JCK LTD bridges both.",
      "Leading Kyndryl's Digital Workplace practice means I've seen what drives adoption and what kills it. Most failures aren't technical. They're organizational — wrong sequencing, wrong incentives, wrong change management.",
      "The result: a workplace where AI makes people measurably more capable, not just theoretically enabled.",
    ],
    bullets: ['AI readiness assessment', 'Adoption roadmap and sequencing', 'Change management and communication strategy', 'Employee experience design', 'Leadership alignment and governance'],
  },
  {
    n: '03',
    icon: 'M10 2l7 3.5v4.5c0 4-3 7.5-7 8.5C7 17.5 3 14 3 10V5.5L10 2z',
    title: 'AI Governance & Security',
    sub: 'Compliance · Risk · Regulatory Frameworks',
    summary: 'CISO-ready frameworks for regulated industries.',
    body: [
      "Regulated industries — healthcare, financial services, government — can't treat AI governance as an afterthought. The frameworks need to be built before problems surface, not in response to them.",
      "Built from real enterprise deployments where security and compliance weren't optional. Risk analysis, data residency, model governance, audit trails — the full picture.",
      "Not just frameworks. Implementation. Policies that actually get enforced, not just documented.",
    ],
    bullets: ['AI risk assessment and classification', 'Data governance and residency policies', 'Regulatory compliance (HIPAA, SOC2, GDPR)', 'Security architecture for AI systems', 'Audit and monitoring frameworks'],
  },
  {
    n: '04',
    icon: 'M3 17l4-10 4 7 3-5 3 8',
    title: 'Founder Advisory',
    sub: 'Product AI · Enterprise GTM · Architecture',
    summary: 'For builders selling AI into enterprise.',
    body: [
      "Enterprise AI advisory for startups requires someone who's sat on both sides of the table — as a builder and as a buyer. Most advisors have only seen one side.",
      "I've shipped production AI in healthcare (behavioral health platform), consumer (mobile apps), and enterprise tools. I know what enterprise buyers actually evaluate, what procurement looks like, and where AI products fail to land.",
      "Practical advisory: architecture decisions that enterprise buyers won't reject, GTM sequencing that fits enterprise sales cycles, and honest feedback on where your product is underprepared.",
    ],
    bullets: ['Enterprise readiness assessment', 'Architecture review for enterprise requirements', 'GTM strategy and sequencing', 'Security and compliance positioning', 'Stakeholder navigation (CISO, CIO, legal)'],
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-32">
      {/* Page header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-16">
        <div className="max-w-2xl">
          <span className="label">Services</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-5"
            style={{ color: '#F1F5F9' }}>
            What JCK LTD<br />
            <span className="text-cool">delivers.</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            Advisory grounded in doing, not theorizing. Every service reflects work
            that has been planned, built, and shipped at enterprise scale.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg,rgba(99,102,241,0.3),transparent)' }} />
      </div>

      {/* Services — full detail */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        {services.map((s, i) => (
          <article key={s.n} className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-16">
            {/* Left meta */}
            <div className="flex-shrink-0">
              <span className="text-[10px] font-mono tracking-[0.2em] block mb-3" style={{ color: 'rgba(99,102,241,0.4)' }}>{s.n}</span>
              <div className="p-2.5 rounded-xl inline-flex mb-4" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}>
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" style={{ color: '#6366F1' }}>
                  <path d={s.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-lg font-black tracking-tight mb-1" style={{ color: '#F1F5F9' }}>{s.title}</h2>
              <p className="text-xs font-semibold tracking-wide mb-5" style={{ color: 'rgba(99,102,241,0.55)' }}>{s.sub}</p>
              <p className="text-sm leading-relaxed italic" style={{ color: '#475569' }}>{s.summary}</p>
            </div>

            {/* Right content */}
            <div>
              <div className="space-y-4 mb-8">
                {s.body.map((para, j) => (
                  <p key={j} className="text-sm sm:text-[15px] leading-relaxed" style={{ color: '#64748B' }}>{para}</p>
                ))}
              </div>

              <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: '#334155' }}>Includes</p>
                <ul className="space-y-2">
                  {s.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2.5 text-sm" style={{ color: '#64748B' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#6366F1' }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mt-24">
        <div className="p-8 sm:p-12 rounded-2xl text-center"
          style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.14)' }}>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3" style={{ color: '#F1F5F9' }}>
            Ready to get started?
          </h2>
          <p className="text-sm mb-8" style={{ color: '#475569' }}>
            Tell me what you&apos;re working on. I&apos;ll tell you if and how I can help.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">
            Work With Me →
          </Link>
        </div>
      </div>
    </main>
  )
}
