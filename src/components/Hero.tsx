'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Deep base */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow orbs — using CSS animation classes */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px] bg-indigo-600 animate-float-a pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[100px] bg-violet-600 animate-float-b pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05] blur-[80px] bg-cyan-500 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border border-indigo-500/30 bg-indigo-500/[0.08] text-indigo-300">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Global Director · Kyndryl · Enterprise AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-[-0.04em] leading-[0.92] mb-8"
        >
          <span className="text-white">Two speeds.</span>
          <br />
          <span className="text-gradient-warm">One advisor.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          By day, a senior enterprise technology leader at Kyndryl — managing Microsoft infrastructure at scale across the world&apos;s largest organizations. By night, a founder shipping AI that most of Silicon Valley ignores.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3.5 rounded-full font-bold text-white text-sm overflow-hidden transition-all duration-300 hover:scale-[1.03]"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          >
            <span className="relative z-10">Work With Me</span>
            <div className="absolute inset-0 bg-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full font-semibold text-sm text-gray-300 border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/[0.04] transition-all duration-300"
          >
            See Services
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.0 }}
          className="mt-20 flex flex-col items-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
