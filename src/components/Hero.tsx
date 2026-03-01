'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const NetworkCanvas = dynamic(() => import('./NetworkCanvas'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 65% 40%, #130E07 0%, #090B10 50%, #060709 100%)',
      }} />

      {/* Noise grain */}
      <div className="absolute inset-0 opacity-[0.022] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Warm amber grid — very subtle */}
      <div className="absolute inset-0 opacity-[0.018] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(245,158,11,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,1) 1px, transparent 1px)',
        backgroundSize: '88px 88px',
      }} />

      {/* Ambient glows */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[160px] animate-float-a pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #D97706 60%, transparent 80%)' }} />
      <div className="absolute bottom-1/4 left-1/6 w-[450px] h-[450px] rounded-full opacity-[0.04] blur-[120px] animate-float-b pointer-events-none"
        style={{ background: '#FB923C' }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-12">
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_540px] gap-10 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">

          {/* ── Left: Text ── */}
          <div className="py-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase"
              style={{ border: '1px solid rgba(245,158,11,0.28)', background: 'rgba(245,158,11,0.06)', color: '#FBBF24' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
              Enterprise AI · Kyndryl Global Director
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.16 }}
              className="font-black tracking-[-0.035em] leading-[0.88] mb-5"
              style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}
            >
              <span className="block text-warm-gradient">Two speeds.</span>
              <span className="block text-amber-gradient">One advisor.</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.38 }}
              className="origin-left h-px mb-7 max-w-[260px]"
              style={{ background: 'linear-gradient(90deg, #F59E0B, rgba(245,158,11,0.08))' }}
            />

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="leading-relaxed mb-10 max-w-[480px]"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)', color: '#8A7A6A', lineHeight: 1.75 }}
            >
              By day, managing Microsoft infrastructure at Fortune 500 scale at Kyndryl.
              By night, building AI for populations Silicon Valley ignores.
              An Ironman knows — you train for the finish line.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="flex flex-wrap gap-3 mb-14"
            >
              <a href="#contact" className="btn-amber px-7 py-3.5 text-[13px]">Work With Me →</a>
              <a href="#services" className="btn-ghost px-7 py-3.5 text-[13px]">See Services</a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { n: '15+', label: 'Yrs enterprise tech' },
                { n: 'F500', label: 'Scale at Kyndryl' },
                { n: '3', label: 'AI products shipped' },
                { n: '🏅', label: 'Ironman finisher' },
              ].map(s => (
                <div key={s.n} className="flex flex-col gap-0.5">
                  <span className="text-2xl font-black text-amber-gradient leading-none">{s.n}</span>
                  <span className="text-[11px] font-medium" style={{ color: '#4D4035' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Network Canvas ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <div className="relative" style={{ height: '580px' }}>
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at center, #F59E0B, transparent 70%)', transform: 'scale(0.85) translateY(20px)' }} />

              {/* Frame */}
              <div className="absolute inset-0 rounded-3xl" style={{
                border: '1px solid rgba(245,158,11,0.14)',
                background: 'rgba(12, 9, 5, 0.6)',
                backdropFilter: 'blur(4px)',
              }} />

              {/* Canvas */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <NetworkCanvas />
              </div>

              {/* Corner bracket TL */}
              <div className="absolute top-0 left-0 w-10 h-10" style={{
                borderTop: '1.5px solid rgba(245,158,11,0.55)',
                borderLeft: '1.5px solid rgba(245,158,11,0.55)',
                borderRadius: '12px 0 0 0',
              }} />
              {/* Corner bracket BR */}
              <div className="absolute bottom-0 right-0 w-10 h-10" style={{
                borderBottom: '1.5px solid rgba(245,158,11,0.55)',
                borderRight: '1.5px solid rgba(245,158,11,0.55)',
                borderRadius: '0 0 12px 0',
              }} />
              {/* Corner bracket TR */}
              <div className="absolute top-0 right-0 w-6 h-6" style={{
                borderTop: '1px solid rgba(245,158,11,0.25)',
                borderRight: '1px solid rgba(245,158,11,0.25)',
                borderRadius: '0 12px 0 0',
              }} />
              {/* Corner bracket BL */}
              <div className="absolute bottom-0 left-0 w-6 h-6" style={{
                borderBottom: '1px solid rgba(245,158,11,0.25)',
                borderLeft: '1px solid rgba(245,158,11,0.25)',
                borderRadius: '0 0 0 12px',
              }} />

              {/* Chip: Enterprise Network */}
              <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold" style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.22)',
                color: '#FBBF24',
              }}>
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
                Enterprise Network
              </div>

              {/* Chip: Bottom left */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-1.5 rounded-lg text-[11px]" style={{
                background: 'rgba(10,8,5,0.85)',
                border: '1px solid rgba(255,255,255,0.07)',
                color: '#6B5E50',
              }}>
                AI-Connected Infrastructure
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080A0F)' }} />
    </section>
  )
}
