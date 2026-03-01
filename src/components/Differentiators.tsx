'use client'
import { motion } from 'framer-motion'

const items = [
  {
    icon: '🎯',
    title: 'Principal-Led',
    body: 'You work directly with senior expertise. No handoffs to junior consultants. No account managers. Jim, start to finish.',
  },
  {
    icon: '🔨',
    title: 'Builder Mentality',
    body: 'Ships real AI products in production — healthcare platforms, consumer apps, enterprise tools. Advisory grounded in what actually works.',
  },
  {
    icon: '💙',
    title: 'Microsoft-Native',
    body: 'Kyndryl-level deployment depth across M365, Azure AI, Intune, and Copilot. The Microsoft stack inside and out.',
  },
  {
    icon: '📊',
    title: 'Outcome-Focused',
    body: 'Measured in adoption rates and production deployments — not slide deck deliverables. The finish line is the only metric that matters.',
  },
]

export default function Differentiators() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">Why JCK LTD</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Different by design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-[#0A1628]/50 text-center hover:border-white/10 transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
