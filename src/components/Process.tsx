'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    body: 'Understand your current state, real constraints, and what success actually looks like. No assumptions. No templates applied before listening.',
    icon: '🔍',
  },
  {
    n: '02',
    title: 'Design',
    body: 'AI strategy and architecture built for your environment — not a repainted framework from the last engagement.',
    icon: '📐',
  },
  {
    n: '03',
    title: 'Deploy',
    body: 'Hands-on implementation with knowledge transfer baked in. When we\'re done, you own it. That\'s the point.',
    icon: '🚀',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-label">Process</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#F5F1E8' }}>How we work.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector */}
          <div className="hidden md:block absolute top-10 left-[22%] right-[22%] h-px"
            style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.5), rgba(245,158,11,0.15), rgba(245,158,11,0.5))' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
            >
              {/* Number circle */}
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.12), rgba(245,158,11,0.03))', border: '1px solid rgba(245,158,11,0.25)' }}>
                <span className="text-2xl font-black text-amber-gradient">{step.n}</span>
                {/* Outer glow */}
                <div className="absolute inset-0 rounded-full blur-xl opacity-20"
                  style={{ background: '#F59E0B' }} />
              </div>

              <div className="text-2xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#D4C5B0' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5C4F42' }}>{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
