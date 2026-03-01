'use client'
import { motion } from 'framer-motion'

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" style={{ color: '#6366F1' }}>
    <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const items = [
  {
    icon: <Icon d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />,
    title: 'Principal-Led',
    body: 'You work directly with Jim — start to finish. No handoffs. No account managers. No junior staff doing the real work.',
  },
  {
    icon: <Icon d="M3 17l3-7 4 5 3-4 4 6" />,
    title: 'Builder Mentality',
    body: 'Ships real AI in production — healthcare, consumer, enterprise. Advisory grounded in what actually works when code meets users.',
  },
  {
    icon: <Icon d="M3 3h5v5H3zM12 3h5v5h-5zM3 12h5v5H3zM12 12h5v5h-5z" />,
    title: 'Microsoft-Native',
    body: "Kyndryl-level depth across M365, Azure AI, Intune, and Copilot. The Microsoft stack from the inside.",
  },
  {
    icon: <Icon d="M10 2l2.5 7.5H20l-6 4.4 2.3 7.1L10 17l-6.3 4 2.3-7.1L0 9.5h7.5z" />,
    title: 'Outcome-Focused',
    body: 'Measured in adoption rates and deployments — not slide deck counts. The finish line is the only metric.',
  },
]

export default function Differentiators() {
  return (
    <section className="py-20 md:py-24" style={{ background: '#050810', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="label">Why JCK LTD</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#F1F5F9' }}>
            Different by design.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="p-5 rounded-xl cursor-default transition-all duration-250 group"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(99,102,241,0.2)'; el.style.background = 'rgba(99,102,241,0.03)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.05)'; el.style.background = 'rgba(255,255,255,0.02)' }}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}>
                {item.icon}
              </div>
              <h3 className="text-[13px] font-bold mb-1.5" style={{ color: '#CBD5E1' }}>{item.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#334155' }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
