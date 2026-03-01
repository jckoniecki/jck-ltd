'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#050810 0%,#080D1A 50%,#050810 100%)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[90px] pointer-events-none"
        style={{ background: '#6366F1' }} />

      {/* Decorative quote mark */}
      <div className="absolute top-6 left-6 sm:left-12 select-none pointer-events-none opacity-[0.03]"
        style={{ fontSize: '200px', lineHeight: 1, fontFamily: 'Georgia,serif', color: '#6366F1' }}>&ldquo;</div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[28px_1fr] gap-8 md:gap-16 items-start">
          {/* Vertical rule */}
          <div className="hidden md:block">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={inView ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: 0.75 }}
              className="origin-top w-px h-36 mt-1"
              style={{ background: 'linear-gradient(to bottom,#6366F1,rgba(99,102,241,0.06))' }}
            />
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 }} className="label">Philosophy</motion.span>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-[1.15] mb-6"
              style={{ color: '#F1F5F9' }}
            >
              The enterprise has no shortage of advisors.{' '}
              <span className="text-cool">Most of them have never shipped anything.</span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.38 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="h-px w-8" style={{ background: 'rgba(99,102,241,0.4)' }} />
              <p className="text-xs font-bold tracking-[0.16em] uppercase" style={{ color: '#334155' }}>
                Jim Koniecki · JCK LTD
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="grid sm:grid-cols-3 gap-5 sm:gap-8"
            >
              {[
                { h: 'Accountability', b: "I don't sell roadmaps. I help build what's at the end of them." },
                { h: 'Velocity', b: 'Enterprise rigor at startup speed. Built from years operating both simultaneously.' },
                { h: 'Ownership', b: "When we're done, you own it. No dependency. No retainer to maintain what I built." },
              ].map((item, i) => (
                <motion.div
                  key={item.h}
                  initial={{ opacity: 0, x: -6 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.1 }}
                  className="pl-4"
                  style={{ borderLeft: '1.5px solid rgba(99,102,241,0.2)' }}
                >
                  <p className="text-xs font-bold mb-1.5 text-cool-static tracking-wider uppercase">{item.h}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item.b}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
