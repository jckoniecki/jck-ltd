'use client'
import { motion } from 'framer-motion'

const items = [
  {
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle cx="16" cy="10" r="5" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.1)"/>
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Principal-Led',
    body: 'You work directly with Jim — start to finish. No handoffs. No account managers. No junior staff doing the real work.',
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <polyline points="4,24 12,14 18,20 28,8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="8" r="2.5" fill="#F59E0B" opacity="0.8"/>
      </svg>
    ),
    title: 'Builder Mentality',
    body: 'Ships real AI in production — healthcare platforms, consumer apps, enterprise tools. Advisory grounded in what actually works.',
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect x="4" y="4" width="10" height="10" rx="1.5" fill="#F59E0B" opacity="0.8"/>
        <rect x="18" y="4" width="10" height="10" rx="1.5" fill="#F59E0B" opacity="0.5"/>
        <rect x="4" y="18" width="10" height="10" rx="1.5" fill="#F59E0B" opacity="0.5"/>
        <rect x="18" y="18" width="10" height="10" rx="1.5" fill="#F59E0B" opacity="0.3"/>
      </svg>
    ),
    title: 'Microsoft-Native',
    body: 'Kyndryl-level depth across M365, Azure AI, Intune, and Copilot. The Microsoft stack from the inside — not from a certification course.',
  },
  {
    svg: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path d="M16 4l3 9h9l-7 5 3 9-8-6-8 6 3-9-7-5h9z" stroke="#F59E0B" strokeWidth="1.4" strokeLinejoin="round" fill="rgba(245,158,11,0.1)"/>
      </svg>
    ),
    title: 'Outcome-Focused',
    body: 'Measured in adoption rates and production deployments — not slide deck deliverables. The finish line is the only metric.',
  },
]

export default function Differentiators() {
  return (
    <section className="py-20 md:py-24 relative" style={{ background: 'linear-gradient(180deg, #080A0F, #0A0806, #080A0F)', borderTop: '1px solid rgba(245,158,11,0.06)', borderBottom: '1px solid rgba(245,158,11,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="section-label">Why JCK LTD</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#F5F1E8' }}>
            Different by design.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="p-6 rounded-2xl transition-all duration-300 group cursor-default"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.2)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.03)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)'
              }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.15)' }}>
                {item.svg}
              </div>
              <h3 className="text-sm font-bold mb-2" style={{ color: '#D4C5B0' }}>{item.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5C4F42' }}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
