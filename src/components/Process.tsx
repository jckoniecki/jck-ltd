'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    body: "Understand your current state, real constraints, and what success actually looks like. No assumptions. No templates applied before listening.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="14" cy="14" r="8" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.08)"/>
        <line x1="20" y1="20" x2="27" y2="27" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="17" y2="14" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        <line x1="14" y1="11" x2="14" y2="17" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Design',
    body: "AI strategy and architecture built for your environment — not a repainted framework from the last engagement. Built to execute.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <polygon points="16,4 28,28 4,28" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.07)" strokeLinejoin="round"/>
        <circle cx="16" cy="17" r="3" stroke="#FBBF24" strokeWidth="1.2" fill="rgba(251,191,36,0.15)"/>
        <line x1="16" y1="4" x2="16" y2="14" stroke="#F59E0B" strokeWidth="1" strokeDasharray="2 3" opacity="0.5"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Deploy',
    body: "Hands-on implementation with knowledge transfer baked in. When we're done, you own it. That's the point.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 3 C16 3 24 8 24 17 C24 22 20.4 27 16 29 C11.6 27 8 22 8 17 C8 8 16 3 16 3Z"
          stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.08)"/>
        <path d="M13 17l2.5 2.5 4-5" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="16" y1="3" x2="16" y2="0" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <circle cx="16" cy="1" r="1" fill="#F59E0B" opacity="0.6"/>
      </svg>
    ),
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Process</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#F5F1E8' }}>
            How we work.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[22px] left-[22%] right-[22%] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.4), rgba(245,158,11,0.1), rgba(245,158,11,0.4))' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.13 }}
            >
              {/* Icon circle */}
              <div className="relative w-11 h-11 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'rgba(245,158,11,0.07)', border: '1px solid rgba(245,158,11,0.22)' }}>
                {step.icon}
                {/* Soft glow */}
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 pointer-events-none"
                  style={{ background: '#F59E0B' }} />
              </div>

              <p className="text-3xl font-black mb-3 text-amber-gradient">{step.n}</p>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#D4C5B0' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C4F42' }}>{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
