'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'white',
      borderBottom: scrolled ? '1px solid #E2E8F0' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 12px rgba(10,31,68,0.08)' : 'none',
      transition: 'border-color 0.3s, box-shadow 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          <span style={{ fontFamily: 'var(--font-roboto)', fontWeight: 700, fontSize: '1.3rem', color: '#0A1F44', letterSpacing: '-0.02em' }}>
            JCK
          </span>
          <span style={{ fontFamily: 'var(--font-roboto)', fontWeight: 700, fontSize: '1.3rem', color: '#6A8FE3', letterSpacing: '-0.02em' }}>
            {' '}LTD
          </span>
        </Link>

        {/* Desktop links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden-mobile">
          {links.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              fontFamily: 'var(--font-open-sans)',
              fontWeight: pathname === href ? 600 : 400,
              color: pathname === href ? '#6A8FE3' : '#444',
              borderRadius: 6,
              transition: 'color 0.15s, background 0.15s',
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = '#6A8FE3'; (e.target as HTMLElement).style.background = '#F2F5F9' }}
            onMouseLeave={e => { (e.target as HTMLElement).style.color = pathname === href ? '#6A8FE3' : '#444'; (e.target as HTMLElement).style.background = 'transparent' }}
            >
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ marginLeft: '0.75rem', fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}>
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          className="show-mobile"
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, background: '#0A1F44',
              transition: 'all 0.25s',
              transform: open ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'scaleX(0)') : 'none',
            }} />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: 'white', borderTop: '1px solid #E2E8F0', padding: '1rem 1.5rem 1.5rem' }}>
          {links.map(({ label, href }) => (
            <Link key={href} href={href} style={{ display: 'block', padding: '0.75rem 0', fontSize: '1rem', color: pathname === href ? '#6A8FE3' : '#444', borderBottom: '1px solid #F2F5F9', fontWeight: pathname === href ? 600 : 400 }}>
              {label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
