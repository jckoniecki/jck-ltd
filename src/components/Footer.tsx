'use client'
export default function Footer() {
  return (
    <footer className="py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-base font-black tracking-tight">
          <span style={{ color: '#F1F5F9' }}>JCK </span>
          <span className="text-cool-static">LTD</span>
        </span>
        <p className="text-xs order-last sm:order-none" style={{ color: '#1E293B' }}>
          © {new Date().getFullYear()} JCK LTD. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {['Services','About','Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs transition-colors duration-150"
              style={{ color: '#1E293B' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#64748B'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = '#1E293B'}>{l}</a>
          ))}
          <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
            className="text-xs transition-colors duration-150"
            style={{ color: '#1E293B' }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = '#6366F1'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = '#1E293B'}>LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  )
}
