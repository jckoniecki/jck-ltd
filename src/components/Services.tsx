'use client'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Microsoft AI Enablement',
    sub: 'Copilot · Azure AI · Intune · M365',
    body: 'Deep deployment expertise across the full Microsoft AI stack — built on Kyndryl-scale delivery across Fortune 500 environments. Not presentations. Production implementations that stick.',
    wide: true,
    delay: '0s',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="4" width="14" height="14" rx="2" fill="#F59E0B" opacity="0.9"/>
        <rect x="22" y="4" width="14" height="14" rx="2" fill="#D97706" opacity="0.6"/>
        <rect x="4" y="22" width="14" height="14" rx="2" fill="#D97706" opacity="0.6"/>
        <rect x="22" y="22" width="14" height="14" rx="2" fill="#92400E" opacity="0.4"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Digital Workplace Strategy',
    sub: 'Roadmap · Adoption · Change',
    body: 'How AI actually changes how people work — not what vendors promise. Strategy grounded in global deployment reality from leading Kyndryl\'s Digital Workplace practice worldwide.',
    wide: false,
    delay: '0.8s',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="14" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4"/>
        <circle cx="20" cy="20" r="8" stroke="#FBBF24" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="20" cy="20" r="3" fill="#F59E0B"/>
        <line x1="20" y1="6" x2="20" y2="10" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="20" y1="30" x2="20" y2="34" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="6" y1="20" x2="10" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
        <line x1="30" y1="20" x2="34" y2="20" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Governance & Security',
    sub: 'Compliance · Risk · Frameworks',
    body: 'CISO-ready governance for regulated industries. Risk analysis built from the hard-learned lessons of enterprise-scale AI rollouts — before they become your problem.',
    wide: false,
    delay: '1.6s',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M20 4L6 10v10c0 8 6 14.5 14 16 8-1.5 14-8 14-16V10L20 4z" stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.08)" opacity="0.8"/>
        <path d="M14 20l4 4 8-8" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Founder Advisory',
    sub: 'Product AI · Enterprise GTM · Architecture',
    body: 'For startups integrating AI into product and selling into enterprise. I\'ve shipped production AI in healthcare, consumer, and enterprise. I know what both sides of that table look like.',
    wide: true,
    delay: '2.4s',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M8 32l8-20 8 14 5-8 5 14" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <circle cx="32" cy="10" r="4" fill="#F59E0B" opacity="0.3" stroke="#FBBF24" strokeWidth="1"/>
        <circle cx="32" cy="10" r="1.5" fill="#FBBF24"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="section-label">Services</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: '#F5F1E8' }}>
              What JCK LTD<br />
              <span className="text-amber-gradient">delivers.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: '#6B5E50' }}>
            Advisory grounded in doing, not theorizing. Every service reflects work shipped at enterprise scale.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className={`card-warm beam-card p-8 cursor-default ${s.wide ? 'md:col-span-2' : 'md:col-span-1'}`}
              style={{ '--delay': s.delay } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="mb-5">{s.icon}</div>

              {/* Number */}
              <span className="text-[10px] font-mono tracking-[0.2em] mb-3 block" style={{ color: 'rgba(245,158,11,0.4)' }}>
                {s.number}
              </span>

              <h3 className="text-lg font-bold mb-1.5" style={{ color: '#F5F1E8' }}>{s.title}</h3>
              <p className="text-xs font-semibold mb-4 tracking-wide" style={{ color: 'rgba(245,158,11,0.6)' }}>{s.sub}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#7A6E65' }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
