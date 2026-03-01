'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const NetworkCanvas = dynamic(() => import('./NetworkCanvas'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden noise">
      {/* Warm dark background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 40%, #110C06 0%, #080A0F 55%, #050508 100%)' }} />

      {/* Subtle warm grid */}
      <div className="absolute inset-0 opacity-[0.018]" style={{
        backgroundImage: 'linear-gradient(rgba(245,158,11,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.8) 1px, transparent 1px)',
        backgroundSize: '72px 72px',
      }} />

      {/* Warm ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full opacity-[0.07] blur-[140px] animate-float-a pointer-events-none"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #D97706 50%, transparent 70%)' }} />
      <div className="absolute bottom-1/3 left-1/5 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] animate-float-b pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FB923C 0%, transparent 70%)' }} />

      {/* Main layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-7rem)]">

          {/* Left — text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full border text-xs font-semibold tracking-widest uppercase"
              style={{ borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.06)', color: '#FBBF24' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
              Enterprise AI Advisory · Kyndryl Global Director
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.035em] leading-[0.9] mb-6"
            >
              <span className="text-warm-gradient block">Two speeds.</span>
              <span className="text-amber-gradient block">One advisor.</span>
            </motion.h1>

            {/* Divider line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="origin-left h-px mb-6 max-w-xs"
              style={{ background: 'linear-gradient(90deg, #F59E0B, rgba(245,158,11,0.1))' }}
            />

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: '#A09080' }}
            >
              By day, managing Microsoft infrastructure at Fortune 500 scale at Kyndryl.
              By night, building AI for populations Silicon Valley ignores.
              An Ironman knows — you train for the finish line.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.44 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-amber px-8 py-3.5 text-sm">Work With Me →</a>
              <a href="#services" className="btn-ghost px-8 py-3.5 text-sm">See Services</a>
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-12 flex items-center gap-6 flex-wrap"
            >
              {[
                { n: '15+', label: 'Years enterprise tech' },
                { n: 'F500', label: 'Scale at Kyndryl' },
                { n: '3', label: 'AI products in production' },
              ].map(s => (
                <div key={s.n} className="flex items-center gap-2.5">
                  <span className="text-xl font-black text-amber-gradient">{s.n}</span>
                  <span className="text-xs" style={{ color: '#6B5E50' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — network canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full" style={{ height: '520px' }}>
              {/* Outer warm frame */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ border: '1px solid rgba(245,158,11,0.1)', background: 'rgba(15, 11, 7, 0.4)', backdropFilter: 'blur(2px)' }} />

              {/* Canvas */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <NetworkCanvas />
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-12 h-12"
                style={{ borderTop: '1.5px solid rgba(245,158,11,0.5)', borderLeft: '1.5px solid rgba(245,158,11,0.5)', borderRadius: '12px 0 0 0' }} />
              <div className="absolute bottom-0 right-0 w-12 h-12"
                style={{ borderBottom: '1.5px solid rgba(245,158,11,0.5)', borderRight: '1.5px solid rgba(245,158,11,0.5)', borderRadius: '0 0 12px 0' }} />

              {/* Floating info chips */}
              <div className="absolute top-6 right-6 px-3 py-2 rounded-xl text-xs font-semibold"
                style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.25)', color: '#FBBF24' }}>
                Enterprise Network
              </div>
              <div className="absolute bottom-6 left-6 px-3 py-2 rounded-xl text-xs font-medium"
                style={{ background: 'rgba(15,11,7,0.8)', border: '1px solid rgba(255,255,255,0.08)', color: '#8A7F72' }}>
                <span className="text-amber-400 mr-1.5">●</span>
                AI-Connected Infrastructure
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080A0F)' }} />
    </section>
  )
}
