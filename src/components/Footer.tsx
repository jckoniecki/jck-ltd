'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0A1F44', color: 'white', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ fontFamily: 'var(--font-roboto)', fontWeight: 700, fontSize: '1.2rem', color: 'white' }}>JCK</span>
              <span style={{ fontFamily: 'var(--font-roboto)', fontWeight: 700, fontSize: '1.2rem', color: '#9FC2E8' }}> LTD</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#9FC2E8', lineHeight: 1.7, maxWidth: 220 }}>
              Strategic Microsoft AI advisory focused on security, governance, and transformation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9FC2E8', marginBottom: '1rem', fontFamily: 'var(--font-roboto)' }}>
              Navigation
            </h4>
            {[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'white'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#CBD5E1'}>
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9FC2E8', marginBottom: '1rem', fontFamily: 'var(--font-roboto)' }}>
              Services
            </h4>
            {['Microsoft AI Enablement', 'Digital Workplace Strategy', 'AI Governance & Security', 'Founder Advisory'].map(s => (
              <Link key={s} href="/services" style={{ display: 'block', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = 'white'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#CBD5E1'}>
                {s}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9FC2E8', marginBottom: '1rem', fontFamily: 'var(--font-roboto)' }}>
              Contact
            </h4>
            <a href="mailto:jckoniecki@gmail.com" style={{ display: 'block', fontSize: '0.875rem', color: '#CBD5E1', marginBottom: '0.5rem' }}>
              jckoniecki@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', color: '#9FC2E8', marginTop: '0.5rem' }}>
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: '0.8rem', color: '#5F7F99' }}>© {new Date().getFullYear()} JCK LTD. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', color: '#5F7F99' }}>Strategic Microsoft AI Advisory</p>
        </div>
      </div>
    </footer>
  )
}
