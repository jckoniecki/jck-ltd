import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services — JCK LTD',
  description: 'Microsoft AI Strategy, Governance, Security, and Founder Advisory from Jim Koniecki at JCK LTD.',
}

const services = [
  {
    id: 'strategy',
    number: '01',
    title: 'AI Strategy & Advisory',
    sub: 'Roadmap Development · AI Transformation · Business Alignment',
    body: [
      'Transform your enterprise with AI strategies tailored to your business reality — not vendor slide decks. JCK LTD develops actionable roadmaps grounded in real deployment experience at Fortune 500 scale.',
      'Every AI strategy engagement begins with honest assessment of current capabilities, organizational constraints, and competitive context. The output is a plan that can be executed — not a framework to be re-scoped after kickoff.',
    ],
    includes: ['AI maturity and readiness assessment', 'Roadmap development and prioritization', 'Business case and ROI modeling', 'Microsoft AI technology selection', 'Stakeholder alignment workshops'],
  },
  {
    id: 'governance',
    number: '02',
    title: 'AI Governance & Compliance',
    sub: 'Regulatory Frameworks · Data Privacy · Responsible AI',
    body: [
      'Implement robust governance frameworks and achieve regulatory compliance with specialized guidance built for CISOs, legal teams, and compliance officers in regulated industries.',
      'From HIPAA to SOC2 to GDPR, AI deployments face increasing regulatory scrutiny. JCK LTD helps enterprises get ahead of frameworks before enforcement — not in reaction to it.',
    ],
    includes: ['AI governance framework design', 'Regulatory compliance mapping (HIPAA, SOC2, GDPR)', 'Data privacy and residency policies', 'Responsible AI principles and review processes', 'Audit trails and monitoring frameworks'],
  },
  {
    id: 'security',
    number: '03',
    title: 'AI Security & Risk Management',
    sub: 'Risk Analysis · Security Protocols · Threat Mitigation',
    body: [
      'Protect enterprise AI systems with advanced security architecture and risk management built from real enterprise deployments — not theoretical frameworks.',
      'AI introduces new attack surfaces, data exposure risks, and model integrity challenges. Security must be designed in from the start, not retrofitted when problems surface.',
    ],
    includes: ['AI risk assessment and classification', 'Security architecture for AI systems', 'Endpoint and model protection (Intune + Azure)', 'Threat modeling for AI pipelines', 'Incident response planning'],
  },
  {
    id: 'founder',
    number: '04',
    title: 'Founder Advisory',
    sub: 'Product AI · Enterprise GTM · Architecture Review',
    body: [
      'For startups building AI products and selling into enterprise. The advisor who has sat on both sides of the table — as a builder who has shipped AI in production and as an enterprise buyer who has evaluated and deployed it at Fortune 500 scale.',
      "Most enterprise AI advisory for startups comes from people who have never shipped code. JCK LTD brings a different perspective: what enterprise buyers actually evaluate, where AI products fail to land, and what it takes to win.",
    ],
    includes: ['Enterprise readiness and security posture review', 'GTM strategy for enterprise sales cycles', 'Architecture review for enterprise requirements', 'Pricing and packaging strategy', 'CIO/CISO stakeholder preparation'],
  },
]

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #1A3F7A)', padding: 'clamp(3rem,7vw,5rem) 0' }}>
        <div className="container">
          <span className="label" style={{ color: '#9FC2E8' }}>Enterprise AI Consulting</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '1rem', maxWidth: 600 }}>
            Strategic AI Services for Modern Enterprises
          </h1>
          <p style={{ color: '#9FC2E8', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, fontWeight: 300 }}>
            JCK LTD delivers Microsoft AI-powered solutions, governance, and security
            for transformative business outcomes.
          </p>
        </div>
      </section>

      {/* Service overview cards */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">Our Core Services</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)', marginBottom: '0.75rem' }}>
              Comprehensive AI Advisory
            </h2>
            <p style={{ color: '#555', maxWidth: 520, margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.7 }}>
              A complete suite of services to accelerate AI adoption, ensure compliance,
              and secure your enterprise transformation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem', marginBottom: '1rem' }}>
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="card" style={{ cursor: 'pointer', display: 'block', textDecoration: 'none' }}>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-roboto)', letterSpacing: '0.15em', color: '#9FC2E8', marginBottom: '0.75rem' }}>{s.number}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>{s.body[0].substring(0,140)}…</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Full service detail */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={`section ${i % 2 === 0 ? 'section-gray' : 'section-light'}`}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '3rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: '0.7rem', fontFamily: 'var(--font-roboto)', letterSpacing: '0.15em', color: '#9FC2E8', marginBottom: '0.5rem' }}>{s.number}</div>
                <span className="label">{s.sub}</span>
                <h2 style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', marginBottom: '1.25rem', color: '#0A1F44' }}>{s.title}</h2>
                {s.body.map((p, j) => (
                  <p key={j} style={{ color: '#444', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>{p}</p>
                ))}
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '0.75rem' }}>
                  Discuss This Service
                </Link>
              </div>

              <div style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 10, padding: '2rem' }}>
                <h4 style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6A8FE3', marginBottom: '1.25rem', fontFamily: 'var(--font-roboto)' }}>
                  What&apos;s Included
                </h4>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {s.includes.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.6rem 0', borderBottom: '1px solid #F2F5F9', fontSize: '0.9rem', color: '#444' }}>
                      <span style={{ color: '#6A8FE3', marginTop: 2, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="label">Why JCK LTD</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2.1rem)' }}>
              The Difference That Matters
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Microsoft AI Expertise', body: 'Certified advisor with Fortune 500-scale deployment experience across Copilot, Azure AI, Intune, and M365.' },
              { title: 'Strategic Governance', body: 'Deep knowledge of compliance frameworks and responsible AI practices for regulated industries.' },
              { title: 'Security-First', body: 'Robust protocols for safeguarding enterprise data and AI systems — built in from day one.' },
            ].map(item => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #1A3F7A)', padding: 'clamp(3rem,7vw,5rem) 0', textAlign: 'center' }}>
        <div className="container">
          <span className="label" style={{ color: '#9FC2E8' }}>Ready to Transform?</span>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem,3vw,2.1rem)', margin: '0.75rem 0 1.25rem' }}>
            Ready to Transform Your Enterprise with AI?
          </h2>
          <p style={{ color: '#9FC2E8', maxWidth: 460, margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Connect with Jim to discuss your AI goals and challenges.
          </p>
          <Link href="/contact" className="btn btn-white">Start the Conversation</Link>
        </div>
      </section>
    </main>
  )
}
