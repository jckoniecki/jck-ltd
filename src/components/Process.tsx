'use client'
import { motion } from 'framer-motion'

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: '#6366F1' }}>
    <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const steps = [
  {
    n: '01', title: 'Discovery',
    icon: <Icon d="M9 3a6 6 0 100 12A6 6 0 009 3zM17 17l-3.5-3.5M6.5 9h5M9 6.5v5" />,
    body: 'Understand your current state, real constraints, and what success actually looks like. No assumptions. No templates applied before listening.',
  },
  {
    n: '02', title: 'Design',
    icon: <Icon d="M3 17L10 3l3.5 8.5M5.5 12h7M14 7h3v3M17 10l-3 3" />,
    body: 'AI strategy and architecture built for your environment — not a repainted framework from the last engagement. Built to execute.',
  },
  {
    n: '03', title: 'Deploy',
    icon: <Icon d="M10 2.5v8M6.5 7l3.5 3.5L13.5 7M4 14.5h12M4 17.5h12" />,
    body: "Hands-on implementation with knowledge transfer baked in. When we're done, you own it. That's the point.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="label">Process</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#F1F5F9' }}>
            How we work.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10 relative">
          {/* Connector */}
          <div className="hidden md:block absolute top-[18px] left-[22%] right-[22%] h-px"
            style={{ background: 'linear-gradient(90deg,rgba(99,102,241,0.4),rgba(99,102,241,0.1),rgba(99,102,241,0.4))' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Icon circle */}
              <div className="relative w-9 h-9 rounded-full flex items-center justify-center mb-5"
                style={{ background: 'rgba(99,102,241,0.07)', border: '1px solid rgba(99,102,241,0.22)' }}>
                {step.icon}
              </div>

              <p className="text-2xl font-black mb-2.5 text-cool-static">{step.n}</p>
              <h3 className="text-base font-bold mb-2" style={{ color: '#CBD5E1' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
