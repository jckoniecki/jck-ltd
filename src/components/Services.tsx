'use client'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Microsoft AI Enablement',
    sub: 'Copilot · Azure AI · Intune · M365',
    body: 'Deep deployment expertise across the full Microsoft AI stack — built on Kyndryl-scale delivery across Fortune 500 environments. Not presentations. Production implementations that stick.',
    wide: true,
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <rect x="3" y="3" width="17" height="17" rx="2.5" fill="#F59E0B" opacity="0.85"/>
        <rect x="24" y="3" width="17" height="17" rx="2.5" fill="#F59E0B" opacity="0.45"/>
        <rect x="3" y="24" width="17" height="17" rx="2.5" fill="#F59E0B" opacity="0.45"/>
        <rect x="24" y="24" width="17" height="17" rx="2.5" fill="#F59E0B" opacity="0.2"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Digital Workplace Strategy',
    sub: 'Roadmap · Adoption · Change',
    body: 'AI strategy grounded in global deployment reality. How generative AI actually changes how people work — not what vendors promise at the booth.',
    wide: false,
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <circle cx="22" cy="22" r="17" stroke="#F59E0B" strokeWidth="1.2" opacity="0.3"/>
        <circle cx="22" cy="22" r="11" stroke="#FBBF24" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="22" cy="22" r="5" stroke="#F59E0B" strokeWidth="1.5" opacity="0.8" fill="rgba(245,158,11,0.12)"/>
        <circle cx="22" cy="22" r="2" fill="#F59E0B"/>
        {[[22,5],[22,39],[5,22],[39,22]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="1.8" fill="#F59E0B" opacity="0.5"/>
        ))}
      </svg>
    ),
  },
  {
    number: '03',
    title: 'AI Governance & Security',
    sub: 'Compliance · Risk · Frameworks',
    body: 'CISO-ready governance for regulated industries. Risk analysis built from the hard-learned lessons of enterprise-scale AI rollouts — before they become your problem.',
    wide: false,
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <path d="M22 4L5 11v12c0 10 7.5 18.5 17 20 9.5-1.5 17-10 17-20V11L22 4z"
          stroke="#F59E0B" strokeWidth="1.5" fill="rgba(245,158,11,0.07)" opacity="0.8"/>
        <path d="M15 22l5 5 9-9" stroke="#FBBF24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Founder Advisory',
    sub: 'Product AI · Enterprise GTM · Architecture',
    body: "For startups integrating AI into product and selling into enterprise. I've shipped production AI in healthcare, consumer, and enterprise. I know what both sides of that table look like.",
    wide: true,
    icon: (
      <svg viewBox="0 0 44 44" fill="none" className="w-11 h-11">
        <path d="M6 34l10-22 10 16 6-10 6 16" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <circle cx="36" cy="12" r="5" fill="rgba(245,158,11,0.15)" stroke="#FBBF24" strokeWidth="1.2"/>
        <circle cx="36" cy="12" r="2" fill="#F59E0B"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div>
            <span className="section-label">Services</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: '#F5F1E8' }}>
              What JCK LTD<br />
              <span className="text-amber-gradient">delivers.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: '#5C4F42' }}>
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
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className={`group relative p-8 rounded-2xl cursor-default transition-all duration-300 ${s.wide ? 'md:col-span-2' : 'md:col-span-1'}`}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(245,158,11,0.22)'
                el.style.background = 'rgba(245,158,11,0.025)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = 'rgba(255,255,255,0.06)'
                el.style.background = 'rgba(255,255,255,0.02)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(245,158,11,0.5), transparent)' }} />

              {/* Icon */}
              <div className="mb-5">{s.icon}</div>

              <p className="text-[10px] font-mono tracking-[0.2em] mb-3" style={{ color: 'rgba(245,158,11,0.35)' }}>{s.number}</p>
              <h3 className="text-lg font-bold mb-1.5" style={{ color: '#E8DDD0' }}>{s.title}</h3>
              <p className="text-xs font-semibold mb-4 tracking-wide" style={{ color: 'rgba(245,158,11,0.55)' }}>{s.sub}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#6B5E50' }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
