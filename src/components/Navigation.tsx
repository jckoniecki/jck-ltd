'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(3,5,14,0.92)' : 'rgba(3,5,14,0.6)',
        backdropFilter: 'blur(20px) saturate(160%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5 flex-shrink-0 group">
          <span className="text-[15px] font-black tracking-tight transition-opacity group-hover:opacity-80" style={{ color: '#F1F5F9' }}>JCK</span>
          <span className="text-[15px] font-black tracking-tight text-cool-static transition-opacity group-hover:opacity-80"> LTD</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {links.map(({ label, href }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="relative px-3.5 py-2 text-xs font-medium rounded-lg transition-colors duration-150"
                style={{ color: active ? '#F1F5F9' : '#475569' }}
                onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = '#94A3B8' }}
                onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = '#475569' }}
              >
                {label}
                {active && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg"
                    style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.18)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden sm:inline-flex text-xs px-5 py-2">
            Work With Me
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`block h-0.5 bg-slate-400 transition-all duration-250 origin-center ${open ? 'rotate-45 translate-y-2' : ''}`} style={{ width: 18 }} />
            <span className={`block h-0.5 bg-slate-400 transition-all duration-250 ${open ? 'opacity-0' : ''}`} style={{ width: 18 }} />
            <span className={`block h-0.5 bg-slate-400 transition-all duration-250 origin-center ${open ? '-rotate-45 -translate-y-2' : ''}`} style={{ width: 18 }} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(3,5,14,0.98)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {links.map(({ label, href }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    className="px-4 py-3 text-sm rounded-xl transition-all"
                    style={{
                      color: active ? '#A5B4FC' : '#475569',
                      background: active ? 'rgba(99,102,241,0.08)' : 'transparent',
                    }}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link href="/contact" className="btn-primary mt-3 justify-center text-sm py-3">
                Work With Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
