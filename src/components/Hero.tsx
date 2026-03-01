'use client'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const NetworkCanvas = dynamic(() => import('./NetworkCanvas'), { ssr: false })

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 60% 35%, #06091A 0%, #03050E 60%, #020409 100%)' }} />

      {/* Cool grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.07) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.07) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
        opacity: 0.5,
        maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 75%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, transparent 75%)',
      }} />

      {/* Glows */}
      <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] rounded-full pointer-events-none animate-float-a"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-1/3 left-1/5 w-[400px] h-[400px] rounded-full pointer-events-none animate-float-b"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(70px)' }} />

      {/* Layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-10">
        <div className="grid lg:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">

          {/* Text */}
          <div className="py-6 lg:py-10">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="inline-flex items-center gap-2 mb-8 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase"
              style={{ border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.07)', color: '#A5B4FC' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-dot flex-shrink-0" />
              Enterprise AI · Kyndryl Global Director
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="font-black tracking-[-0.032em] leading-[0.9] mb-5"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            >
              <span className="block" style={{ color: '#F1F5F9' }}>Two speeds.</span>
              <span className="block text-cool">One advisor.</span>
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="origin-left h-px mb-6 max-w-[200px]"
              style={{ background: 'linear-gradient(90deg, #6366F1, rgba(99,102,241,0.06))' }}
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="text-sm sm:text-base leading-[1.8] mb-9 max-w-md"
              style={{ color: '#64748B' }}
            >
              By day, managing Microsoft infrastructure at Fortune 500 scale at Kyndryl.
              By night, building AI for populations Silicon Valley ignores.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a href="#contact" className="btn-primary">Work With Me →</a>
              <a href="#services" className="btn-ghost">See Services</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-sm sm:max-w-none"
            >
              {[
                { n: '15+', label: 'Years enterprise' },
                { n: 'F500', label: 'Scale at Kyndryl' },
                { n: '3', label: 'AI products live' },
                { n: '🏅', label: 'Ironman finisher' },
              ].map(s => (
                <div key={s.n} className="flex flex-col gap-0.5">
                  <span className="text-xl font-black text-cool-static leading-none">{s.n}</span>
                  <span className="text-[11px]" style={{ color: '#334155' }}>{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Canvas — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="hidden lg:block"
          >
            <div className="relative" style={{ height: '520px' }}>
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                border: '1px solid rgba(99,102,241,0.15)',
                background: 'rgba(6,9,26,0.55)',
                backdropFilter: 'blur(4px)',
              }} />
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <NetworkCanvas />
              </div>
              {/* Corners */}
              {[
                'top-0 left-0 border-t border-l rounded-tl-xl',
                'bottom-0 right-0 border-b border-r rounded-br-xl',
              ].map((cls, i) => (
                <div key={i} className={`absolute w-8 h-8 ${cls}`} style={{ borderColor: 'rgba(99,102,241,0.45)' }} />
              ))}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[11px] font-semibold"
                style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#A5B4FC' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse-dot" />
                Enterprise Network
              </div>
              <div className="absolute bottom-4 left-4 px-2.5 py-1.5 rounded-lg text-[11px]"
                style={{ background: 'rgba(3,5,14,0.8)', border: '1px solid rgba(255,255,255,0.06)', color: '#475569' }}>
                AI-Connected Infrastructure
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #03050E)' }} />
    </section>
  )
}
