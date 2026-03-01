import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Process — JCK LTD',
  description: 'How JCK LTD engagements work — Discovery, Design, Deploy. Hands-on, principal-led, outcome-focused.',
}

const steps = [
  {
    n: '01',
    title: 'Discovery',
    duration: '1–2 weeks',
    icon: 'M9 3a6 6 0 100 12A6 6 0 009 3zM17 17l-3.5-3.5M6.5 9h5M9 6.5v5',
    body: [
      "Before anything is built or recommended, we need to understand what you're actually working with. Current state, constraints, political realities, technical debt — the full picture.",
      "Most consulting failures start here: advisors who listen for 45 minutes and then present a pre-built framework. Discovery at JCK LTD is real investigation.",
    ],
    deliverables: ['Current state assessment', 'Constraint and risk mapping', 'Stakeholder alignment (technical + executive)', 'Success criteria definition', 'Engagement scope and timeline'],
  },
  {
    n: '02',
    title: 'Design',
    duration: '2–4 weeks',
    icon: 'M3 17L10 3l3.5 8.5M5.5 12h7M14 7h3v3M17 10l-3 3',
    body: [
      "Architecture and strategy built specifically for your environment — not adapted from a generic template. This means understanding your Microsoft licensing situation, your security posture, your team's actual capabilities, and your organizational appetite for change.",
      "The output isn't a slide deck. It's a plan that can be executed. That distinction matters.",
    ],
    deliverables: ['Technical architecture', 'Implementation roadmap', 'Governance and security framework', 'Resource and skill requirements', 'Risk mitigation plan'],
  },
  {
    n: '03',
    title: 'Deploy',
    duration: 'Engagement-dependent',
    icon: 'M10 2.5v8M6.5 7l3.5 3.5L13.5 7M4 14.5h12M4 17.5h12',
    body: [
      "Hands-on implementation. Not oversight of a team you've hired — actual work. Code, configuration, policy creation, stakeholder enablement. What gets built depends on the engagement type, but principal involvement is the constant.",
      "Knowledge transfer is baked in from the start, not bolted on at the end. When the engagement closes, your team knows how to maintain and evolve what was built. No retainer required to keep the lights on.",
    ],
    deliverables: ['Working implementation', 'Documentation and runbooks', 'Team knowledge transfer', 'Monitoring and alerting setup', 'Post-deployment support window'],
  },
]

const faqs = [
  { q: 'What types of organizations do you work with?', a: 'Primarily mid-market to enterprise organizations (500+ employees) with meaningful Microsoft infrastructure. Also founder advisory for startups building AI products targeting the enterprise market.' },
  { q: 'How long do engagements typically run?', a: 'Varies significantly by scope. Discovery-only engagements can close in 2–3 weeks. Full strategy and implementation typically runs 8–16 weeks. Founder advisory is often ongoing monthly retainers.' },
  { q: 'Do you work with a team or solo?', a: 'JCK LTD is principal-led — you work directly with Jim throughout the engagement. For large-scale implementation work that requires additional capacity, Jim brings in vetted partners rather than staffing agency consultants.' },
  { q: 'Where do you work?', a: 'Remote-first with on-site availability for critical phases (workshops, executive presentations, launch). Location-flexible within North America.' },
]

export default function ProcessPage() {
  return (
    <main className="pt-24 pb-32">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-16">
        <div className="max-w-2xl">
          <span className="label">Process</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] mb-5"
            style={{ color: '#F1F5F9' }}>
            How we <span className="text-cool">work.</span>
          </h1>
          <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
            Three phases. Consistent throughout every engagement.
            No surprises, no scope creep, no handing off to someone else midway through.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="h-px mb-16" style={{ background: 'linear-gradient(90deg,rgba(99,102,241,0.3),transparent)' }} />
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-0 mb-24">
        {steps.map((step, i) => (
          <div key={step.n} className="grid sm:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-6 sm:gap-14 py-12"
            style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
            {/* Left */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)' }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: '#6366F1' }}>
                    <path d={step.icon} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-3xl font-black text-cool-static">{step.n}</span>
              </div>
              <h2 className="text-xl font-black mb-1" style={{ color: '#F1F5F9' }}>{step.title}</h2>
              <p className="text-xs font-mono" style={{ color: 'rgba(99,102,241,0.5)' }}>{step.duration}</p>
            </div>

            {/* Right */}
            <div>
              <div className="space-y-4 mb-7">
                {step.body.map((p, j) => (
                  <p key={j} className="text-sm sm:text-[15px] leading-relaxed" style={{ color: '#64748B' }}>{p}</p>
                ))}
              </div>
              <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: '#334155' }}>Deliverables</p>
                <ul className="space-y-2">
                  {step.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-2.5 text-sm" style={{ color: '#64748B' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#6366F1' }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-24">
        <div className="h-px mb-14" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <span className="label">FAQ</span>
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-10" style={{ color: '#F1F5F9' }}>Common questions</h2>
        <div className="space-y-0 max-w-3xl">
          {faqs.map((faq, i) => (
            <div key={i} className="py-6" style={{ borderBottom: i < faqs.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
              <p className="text-[15px] font-bold mb-3" style={{ color: '#E2E8F0' }}>{faq.q}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl text-center"
          style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.14)' }}>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-3" style={{ color: '#F1F5F9' }}>
            Ready to start?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: '#475569' }}>
            Every engagement starts with a conversation. Tell me where you are and what you&apos;re trying to accomplish.
          </p>
          <Link href="/contact" className="btn-primary inline-flex">Work With Me →</Link>
        </div>
      </div>
    </main>
  )
}
