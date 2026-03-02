import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — JCK LTD',
  description: 'Jim Koniecki — Global Director at Kyndryl, Microsoft AI expert, founder, and Ironman triathlete.',
}

export default function AboutPage() {
  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #1A3F7A)', padding: 'clamp(3rem,7vw,5rem) 0' }}>
        <div className="container">
          <span className="label" style={{ color: '#9FC2E8' }}>About JCK LTD</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '1rem', maxWidth: 560 }}>
            Strategic AI Transformation
          </h1>
          <p style={{ color: '#9FC2E8', fontSize: '1rem', lineHeight: 1.7, maxWidth: 520, fontWeight: 300 }}>
            JCK LTD is an innovative and strategic Microsoft AI Advisory partner, focused on
            AI transformation grounded in security, governance, and management.
          </p>
        </div>
      </section>

      {/* About intro */}
      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span className="label">Our Mission</span>
              <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: '1.25rem' }}>
                Empower enterprises to harness AI with confidence
              </h2>
              <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                JCK LTD partners with forward-thinking organizations to design, govern, and
                deploy AI that performs — securely, compliantly, at scale.
              </p>
              <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.95rem' }}>
                We empower enterprises to harness the potential of artificial intelligence
                while ensuring robust governance, compliance, and risk management that
                protects your organization and earns stakeholder trust.
              </p>
            </div>

            {/* Core advantages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { title: 'Microsoft AI Expertise', body: 'Certified advisors with specialized focus on Microsoft AI technologies and enterprise transformation at Fortune 500 scale.' },
                { title: 'Strategic Governance', body: 'Deep knowledge of compliance, regulatory frameworks, and responsible AI practices.' },
                { title: 'Security-First Approach', body: 'Robust protocols for safeguarding enterprise data and AI systems — built in from the start.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', padding: '1.25rem', background: '#F8FAFC', borderRadius: 10, border: '1px solid #E2E8F0' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6A8FE3', marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#555', lineHeight: 1.7 }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tailored solutions */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
            <span className="label">Our Approach</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', marginBottom: '1.25rem' }}>
              Tailored Solutions for Complex Business Challenges
            </h2>
            <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
              Every organization&apos;s AI journey is unique. JCK LTD delivers customized strategies
              to align AI initiatives with your business goals, ensuring measurable impact and
              sustainable transformation.
            </p>
            <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.95rem' }}>
              Our approach combines deep Microsoft AI expertise with years of experience in
              enterprise security, governance, and compliance — delivered with the builder
              credibility of someone who has shipped AI in production.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Jim */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">Meet the Advisor</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>Expert Advisory Leadership</h2>
          </div>

          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="card" style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              {/* Photo placeholder */}
              <div style={{
                width: 140, height: 140, borderRadius: 10, flexShrink: 0,
                background: 'linear-gradient(135deg, #E2EBF8, #F2F5F9)',
                border: '2px solid #E2E8F0',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg viewBox="0 0 60 70" fill="none" width={60} height={70}>
                  <circle cx="30" cy="22" r="14" fill="#9FC2E8" opacity="0.5"/>
                  <path d="M6 65 Q12 45 30 42 Q48 45 54 65Z" fill="#9FC2E8" opacity="0.4"/>
                </svg>
                <span style={{ fontSize: '0.65rem', color: '#888', marginTop: 4 }}>Photo TBD</span>
              </div>

              <div style={{ flex: 1, minWidth: 200 }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem', color: '#0A1F44' }}>Jim Koniecki</h3>
                <p style={{ fontSize: '0.85rem', color: '#6A8FE3', fontWeight: 600, marginBottom: '1rem' }}>
                  Principal · JCK LTD | Global Director, Kyndryl
                </p>
                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.8, marginBottom: '1rem' }}>
                  Jim brings 15+ years of enterprise technology leadership to AI transformation.
                  As Global Director of Digital Workplace Strategy at Kyndryl, he leads Microsoft
                  AI adoption across Fortune 500 organizations.
                </p>
                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                  Beyond consulting, Jim is a founder — building and shipping AI-powered products
                  including healthcare AI that is actively in production. He is also an Ironman
                  triathlete who understands what it means to train for and execute the winning plan.
                </p>
                <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
                  className="btn btn-outline" style={{ fontSize: '0.85rem' }}>
                  Connect on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="label">Trusted by Enterprise Leaders</span>
            <h2 style={{ fontSize: 'clamp(1.5rem,3vw,2rem)' }}>What Clients Say</h2>
            <p style={{ color: '#555', marginTop: '0.75rem', fontSize: '0.9rem' }}>
              Trusted by enterprise clients for AI strategy, governance, and transformation.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '1.5rem' }}>
            {[
              { quote: "Jim's expertise in AI governance helped us accelerate adoption with confidence and full regulatory compliance.", role: 'IT Director', org: 'Global Retailer' },
              { quote: "His deep Microsoft knowledge and hands-on approach set him apart from every other advisor we evaluated.", role: 'VP Technology', org: 'Financial Services Firm' },
              { quote: "A true partner in our AI transformation journey — enterprise credibility and a builder who actually ships.", role: 'Chief Data Officer', org: 'Enterprise Manufacturer' },
            ].map((t, i) => (
              <div key={i} className="card" style={{ background: 'white' }}>
                <div style={{ color: '#6A8FE3', fontSize: '1rem', letterSpacing: 2, marginBottom: '1rem' }}>★★★★★</div>
                <p style={{ fontSize: '0.9rem', color: '#444', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0A1F44' }}>{t.role}</p>
                <p style={{ fontSize: '0.8rem', color: '#888' }}>{t.org}</p>
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
            Partner with JCK LTD for Secure, Strategic AI
          </h2>
          <p style={{ color: '#9FC2E8', maxWidth: 460, margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Contact us to discuss your AI transformation goals or learn more about our
            tailored enterprise solutions.
          </p>
          <Link href="/contact" className="btn btn-white">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}
