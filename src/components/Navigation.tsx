'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Services', 'About', 'Process', 'Contact']

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(3,5,14,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-0.5 flex-shrink-0">
          <span className="text-base font-black tracking-tight" style={{ color: '#F1F5F9' }}>JCK</span>
          <span className="text-base font-black tracking-tight text-cool-static"> LTD</span>
        </a>

        <nav className="hidden md:flex items-center">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="px-3.5 py-2 text-xs font-medium transition-colors duration-150 rounded-lg hover:bg-white/5"
              style={{ color: '#64748B' }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = '#F1F5F9'}
              onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748B'}
            >{l}</a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn-primary hidden sm:inline-flex text-xs px-5 py-2">
            Work With Me
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5" aria-label="Menu">
            <span className={`block w-4.5 h-0.5 bg-slate-400 transition-all duration-250 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ width: '18px' }} />
            <span className={`block h-0.5 bg-slate-400 transition-all duration-250 ${open ? 'opacity-0 scale-x-0' : ''}`} style={{ width: '18px' }} />
            <span className={`block w-4.5 h-0.5 bg-slate-400 transition-all duration-250 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ width: '18px' }} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden" style={{ background: 'rgba(3,5,14,0.97)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="px-5 py-4 flex flex-col gap-0.5">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm rounded-xl transition-all" style={{ color: '#64748B' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#F1F5F9'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = '#64748B'}
                >{l}</a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 justify-center text-sm py-3">Work With Me</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
