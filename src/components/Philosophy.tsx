'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, #0D0A05 0%, #110C06 40%, #0D0A05 100%)',
        borderTop: '1px solid rgba(245,158,11,0.08)',
        borderBottom: '1px solid rgba(245,158,11,0.08)',
      }} />

      {/* Warm radial glow — left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{ background: '#F59E0B' }} />

      {/* Giant decorative quote mark */}
      <div className="absolute top-8 left-8 md:left-16 select-none pointer-events-none opacity-[0.04]"
        style={{ fontSize: '280px', lineHeight: 1, fontFamily: 'Georgia, serif', color: '#F59E0B' }}>
        &ldquo;
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-20 items-start">

          {/* Vertical amber rule */}
          <div className="hidden md:block">
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={inView ? { scaleY: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="origin-top w-px h-40 mt-2"
              style={{ background: 'linear-gradient(to bottom, #F59E0B, rgba(245,158,11,0.1))' }}
            />
          </div>

          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="section-label mb-6"
            >
              Philosophy
            </motion.p>

            <motion.blockquote
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] mb-8"
              style={{ color: '#F5F1E8' }}
            >
              The enterprise has no shortage
              <br className="hidden md:block" />
              {' '}of advisors.{' '}
              <span className="text-amber-gradient">
                Most of them have never
                <br className="hidden md:block" />
                {' '}shipped anything.
              </span>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-10" style={{ background: 'rgba(245,158,11,0.4)' }} />
              <p className="text-sm font-semibold tracking-wider" style={{ color: '#6B5E50' }}>
                JIM KONIECKI · JCK LTD
              </p>
            </motion.div>

            {/* Three supporting statements */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {[
                {
                  heading: 'Accountability',
                  body: "I don't sell roadmaps. I help build what's at the end of them.",
                },
                {
                  heading: 'Velocity',
                  body: 'Enterprise rigor at startup speed. Built from years of operating both simultaneously.',
                },
                {
                  heading: 'Ownership',
                  body: 'When we\'re done, you own it. No dependency. No retainer to maintain what I built.',
                },
              ].map((item, i) => (
                <div key={item.heading} className="relative pl-4"
                  style={{ borderLeft: '1.5px solid rgba(245,158,11,0.2)' }}>
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  >
                    <p className="text-xs font-bold mb-2 text-amber-gradient tracking-widest uppercase">{item.heading}</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#6B5E50' }}>{item.body}</p>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
