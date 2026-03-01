'use client'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    body: 'Understand your current state, real constraints, and what success actually looks like. No assumptions.',
  },
  {
    number: '02',
    title: 'Design',
    body: "AI strategy and architecture built for your environment — not a templated framework repainted with your logo.",
  },
  {
    number: '03',
    title: 'Deploy',
    body: "Hands-on implementation with knowledge transfer. You own it when we're done. That's the point.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#0A1628]/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">How we work</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
