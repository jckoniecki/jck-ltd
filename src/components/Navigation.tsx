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
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-2xl' : ''
      }`}
      style={{
        background: scrolled ? 'rgba(8, 10, 15, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(245,158,11,0.08)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1">
          <span className="text-xl font-black tracking-tighter" style={{ color: '#F5F1E8' }}>JCK </span>
          <span className="text-xl font-black tracking-tighter text-amber-gradient">LTD</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="px-4 py-2 text-sm rounded-lg transition-all duration-200"
              style={{ color: '#7A6E65' }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#F5F1E8'; (e.target as HTMLElement).style.background = 'rgba(245,158,11,0.05)' }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = '#7A6E65'; (e.target as HTMLElement).style.background = 'transparent' }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
          style={{ border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B', background: 'rgba(245,158,11,0.05)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.5)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.3)' }}
        >
          Work With Me
          <span>→</span>
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5">
          <span className={`w-5 h-0.5 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ background: '#7A6E65' }} />
          <span className={`w-5 h-0.5 transition-all duration-300 ${open ? 'opacity-0' : ''}`} style={{ background: '#7A6E65' }} />
          <span className={`w-5 h-0.5 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ background: '#7A6E65' }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden backdrop-blur-2xl"
            style={{ background: 'rgba(8,10,15,0.95)', borderBottom: '1px solid rgba(245,158,11,0.08)' }}>
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm transition-all"
                  style={{ color: '#7A6E65' }}>
                  {l}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 text-center text-sm font-semibold rounded-full"
                style={{ border: '1px solid rgba(245,158,11,0.3)', color: '#F59E0B', background: 'rgba(245,158,11,0.05)' }}>
                Work With Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
