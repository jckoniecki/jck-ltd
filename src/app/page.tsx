import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JCK LTD — Strategic AI Transformation',
  description: 'JCK LTD partners with enterprises to drive AI innovation with a focus on security, governance, and management. Microsoft AI advisory from Global Director Jim Koniecki.',
}

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="#6A8FE3" strokeWidth="1.8"/>
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="#6A8FE3" strokeWidth="1.8"/>
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="#6A8FE3" strokeWidth="1.8"/>
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="#6A8FE3" strokeWidth="1.8" strokeDasharray="3 2"/>
      </svg>
    ),
    title: 'Microsoft AI Expertise',
    body: 'Certified advisor with specialized focus on Microsoft AI technologies — Copilot, Azure AI, Intune, and M365. Deployed at Fortune 500 scale through Kyndryl.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <path d="M20 4L34 10v10c0 9-6.3 16.5-14 18C12.3 36.5 6 29 6 20V10L20 4z" stroke="#6A8FE3" strokeWidth="1.8"/>
        <path d="M14 20l4 4 8-8" stroke="#6A8FE3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Strategic Governance',
    body: 'Deep knowledge of compliance, regulatory frameworks, and responsible AI practices — built from enterprise-scale deployments across regulated industries.',
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
        <circle cx="20" cy="20" r="14" stroke="#6A8FE3" strokeWidth="1.8"/>
        <circle cx="20" cy="20" r="7" stroke="#6A8FE3" strokeWidth="1.5" strokeDasharray="3 2"/>
        <circle cx="20" cy="20" r="2.5" fill="#6A8FE3"/>
        <line x1="20" y1="6" x2="20" y2="10" stroke="#6A8FE3" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="34" y1="20" x2="30" y2="20" stroke="#6A8FE3" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Security-First Approach',
    body: 'Robust protocols for safeguarding enterprise data and AI systems. Risk analysis and mitigation built from the ground up, not bolted on at the end.',
  },
]

const services = [
  {
    title: 'AI Strategy & Advisory',
    body: 'Guidance on AI transformation, roadmap development, and aligning AI initiatives with business goals — grounded in global deployment reality, not vendor promises.',
    link: '/services#strategy',
  },
  {
    title: 'AI Governance & Compliance',
    body: 'Expertise in regulatory frameworks, data privacy, and responsible AI practices for CISOs and compliance teams in regulated industries.',
    link: '/services#governance',
  },
  {
    title: 'AI Security & Risk Management',
    body: 'Assessment and implementation of AI security protocols, risk analysis, and mitigation strategies at enterprise scale.',
    link: '/services#security',
  },
]

export default function HomePage() {
  return (
    <main style={{ paddingTop: 68 }}>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #0A1F44 0%, #0D2D5E 60%, #1A3F7A 100%)',
        padding: 'clamp(4rem, 10vw, 7rem) 0',
        minHeight: 580,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle pattern overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, #9FC2E8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 720 }}>
            <span className="label" style={{ color: '#9FC2E8', marginBottom: '1rem' }}>
              Innovative Microsoft AI Advisory
            </span>
            <h1 style={{
              fontFamily: 'var(--font-roboto)',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '1.25rem',
            }}>
              Strategic AI Transformation
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: '#9FC2E8',
              lineHeight: 1.7,
              marginBottom: '2.25rem',
              maxWidth: 560,
              fontWeight: 300,
            }}>
              JCK LTD partners with enterprises to drive AI innovation with a focus on
              security, governance, and management — led by Jim Koniecki, Global Director
              at Kyndryl and founder of AI products that ship.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-white">Get Started</Link>
              <Link href="/services" className="btn btn-ghost-light">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 Pillars ── */}
      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '2rem' }}>
            {pillars.map(p => (
              <div key={p.title} style={{ textAlign: 'center', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  {p.icon}
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.75rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="label">About JCK LTD</span>
              <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: '1.25rem' }}>
                Your Trusted Microsoft AI Partner
              </h2>
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '1rem', fontSize: '0.95rem' }}>
                JCK LTD is an innovative and strategic Microsoft AI advisory firm, focused on
                AI transformation grounded in security, governance, and management.
              </p>
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.95rem' }}>
                Led by Jim Koniecki — Global Director of Digital Workplace Strategy at Kyndryl
                and a founder who has shipped AI in production — JCK LTD brings both enterprise
                rigor and builder credibility to every engagement.
              </p>
              <Link href="/about" className="btn btn-primary">Learn More</Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {[
                { n: '15+', label: 'Years Enterprise Technology' },
                { n: 'F500', label: 'Scale Clients at Kyndryl' },
                { n: '3', label: 'AI Products in Production' },
                { n: '🏅', label: 'Ironman Triathlete' },
              ].map(s => (
                <div key={s.label} style={{
                  background: 'white',
                  border: '1px solid #E2E8F0',
                  borderRadius: 10,
                  padding: '1.5rem 1.25rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'var(--font-roboto)', fontSize: '2rem', fontWeight: 700, color: '#6A8FE3', marginBottom: '0.4rem', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">Our Services</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', marginBottom: '1rem' }}>
              Expert Guidance for Enterprise AI
            </h2>
            <p style={{ color: '#555', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
              JCK LTD provides advisory services to accelerate AI adoption, ensure compliance,
              and secure your enterprise transformation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {services.map(s => (
              <div key={s.title} className="card">
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.875rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose ── */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">Why JCK LTD</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>
              The Advisor Most Consulting Firms Can&apos;t Be
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Principal-Led', body: 'You work directly with Jim. No handoffs to junior staff. Senior expertise start to finish.' },
              { title: 'Builder Credibility', body: 'Has shipped production AI in healthcare, consumer, and enterprise. Advisory from doing, not theorizing.' },
              { title: 'Microsoft-Native', body: 'Kyndryl-level depth across the full Microsoft AI stack — M365, Copilot, Azure AI, Intune.' },
              { title: 'Outcome-Focused', body: 'Measured in adoption rates and deployments — not deliverable counts or slide decks.' },
            ].map(item => (
              <div key={item.title} className="card" style={{ background: 'white' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials placeholder ── */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">Trusted By Enterprise Leaders</span>
            <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)' }}>What Clients Say</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '1.5rem' }}>
            {[
              { quote: "Jim's Microsoft AI expertise was instrumental in our successful Copilot rollout. Deep knowledge, direct execution.", role: 'CIO', org: 'Global Enterprise' },
              { quote: "His team provided clarity on compliance and governance, making our AI adoption both fast and secure.", role: 'VP Technology', org: 'Financial Services' },
              { quote: "With JCK LTD, we confidently accelerated our AI initiatives while ensuring robust data protection.", role: 'IT Director', org: 'Healthcare Group' },
            ].map((t, i) => (
              <div key={i} className="card" style={{ background: '#F8FAFC' }}>
                <div style={{ color: '#6A8FE3', fontSize: '1.1rem', letterSpacing: 2, marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0A1F44' }}>{t.role}</p>
                  <p style={{ fontSize: '0.8rem', color: '#888' }}>{t.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #1A3F7A)', padding: 'clamp(3.5rem, 8vw, 5rem) 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label" style={{ color: '#9FC2E8' }}>Ready to Transform?</span>
          <h2 style={{ fontSize: 'clamp(1.6rem,3vw,2.2rem)', color: 'white', margin: '0.75rem 0 1.25rem' }}>
            Partner with JCK LTD for Strategic AI
          </h2>
          <p style={{ color: '#9FC2E8', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Get in touch to start your AI transformation journey with a focus on security,
            governance, and measurable outcomes.
          </p>
          <Link href="/contact" className="btn btn-white">Start the Conversation</Link>
        </div>
      </section>
    </main>
  )
}
