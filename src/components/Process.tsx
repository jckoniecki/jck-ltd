'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    body: 'Understand your current state, real constraints, and what success actually looks like. No assumptions. No templates applied before listening.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'AI strategy and architecture built for your environment — not a repainted framework from the last engagement. Built to execute.',
  },
  {
    n: '03',
    title: 'Deploy',
    body: 'Hands-on implementation with knowledge transfer baked in. When we\'re done, you own it. That\'s the point.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">Process</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">How we work.</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-indigo-500/40 via-violet-500/20 to-indigo-500/40" />

          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative"
            >
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full border border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center mb-6 relative">
                <span className="text-lg font-black text-gradient">{step.n}</span>
                {i < steps.length - 1 && (
                  <div className="md:hidden absolute left-full top-1/2 w-full h-px bg-gradient-to-r from-indigo-500/30 to-transparent -translate-y-1/2" />
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
