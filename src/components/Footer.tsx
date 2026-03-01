'use client'
export default function Footer() {
  return (
    <footer className="py-10" style={{ borderTop: '1px solid rgba(245,158,11,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xl font-black tracking-tighter">
          <span style={{ color: '#F5F1E8' }}>JCK </span>
          <span className="text-amber-gradient">LTD</span>
        </span>
        <p className="text-xs" style={{ color: '#3D3328' }}>© {new Date().getFullYear()} JCK LTD. All rights reserved.</p>
        <div className="flex items-center gap-5">
          {['Services', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs transition-colors"
              style={{ color: '#3D3328' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#7A6E65'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = '#3D3328'}>
              {l}
            </a>
          ))}
          <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
            className="text-xs transition-colors"
            style={{ color: '#3D3328' }}
            onMouseEnter={e => (e.target as HTMLElement).style.color = '#F59E0B'}
            onMouseLeave={e => (e.target as HTMLElement).style.color = '#3D3328'}>
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
