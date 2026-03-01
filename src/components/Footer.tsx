'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-0.5 mb-2">
              <span className="text-[15px] font-black tracking-tight" style={{ color: '#F1F5F9' }}>JCK</span>
              <span className="text-[15px] font-black tracking-tight text-cool-static"> LTD</span>
            </Link>
            <p className="text-xs leading-relaxed max-w-[220px]" style={{ color: '#1E293B' }}>
              Enterprise AI advisory. Builder credibility.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8">
            {[
              { label: 'Services', href: '/services' },
              { label: 'About', href: '/about' },
              { label: 'Process', href: '/process' },
              { label: 'Contact', href: '/contact' },
            ].map(({ label, href }) => (
              <Link key={href} href={href}
                className="text-xs transition-colors duration-150"
                style={{ color: '#1E293B' }}
                onMouseEnter={e => (e.target as HTMLElement).style.color = '#64748B'}
                onMouseLeave={e => (e.target as HTMLElement).style.color = '#1E293B'}
              >{label}</Link>
            ))}
            <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
              className="text-xs transition-colors duration-150"
              style={{ color: '#1E293B' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#6366F1'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = '#1E293B'}
            >LinkedIn ↗</a>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
          <p className="text-[11px]" style={{ color: '#0F172A' }}>© {new Date().getFullYear()} JCK LTD. All rights reserved.</p>
          <p className="text-[11px]" style={{ color: '#0F172A' }}>jckoniecki@gmail.com</p>
        </div>
      </div>
    </footer>
  )
}
