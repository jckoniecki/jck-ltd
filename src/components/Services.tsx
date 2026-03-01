'use client'
import { motion } from 'framer-motion'

// Small, refined line icons — 20px
const Icon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" style={{ color: '#6366F1' }}>
    <path d={d} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {d2 && <path d={d2} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />}
  </svg>
)

const services = [
  {
    n: '01', wide: true,
    icon: <Icon d="M3 3h5v5H3zM12 3h5v5h-5zM3 12h5v5H3zM12 12h5v5h-5z" />,
    title: 'Microsoft AI Enablement',
    sub: 'Copilot · Azure AI · Intune · M365',
    body: "Deep deployment expertise across the full Microsoft AI stack — built on Kyndryl-scale delivery across Fortune 500 environments. Not presentations. Production implementations that stick.",
  },
  {
    n: '02', wide: false,
    icon: <Icon d="M10 2a8 8 0 100 16A8 8 0 0010 2z" d2="M10 6v4l3 3" />,
    title: 'Digital Workplace',
    sub: 'Roadmap · Adoption · Change',
    body: "How AI actually changes how people work — not what vendors promise. Strategy grounded in global deployment reality from leading Kyndryl's Digital Workplace practice.",
  },
  {
    n: '03', wide: false,
    icon: <Icon d="M10 2l7 3.5v4.5c0 4-3 7.5-7 8.5C7 17.5 3 14 3 10V5.5L10 2z" d2="M7 10l2 2 4-4" />,
    title: 'AI Governance',
    sub: 'Compliance · Risk · Frameworks',
    body: "CISO-ready governance for regulated industries. Risk analysis built from enterprise-scale AI rollouts — before they become your problem.",
  },
  {
    n: '04', wide: true,
    icon: <Icon d="M3 17l4-10 4 7 3-5 3 8" d2="M17 5a2 2 0 100-4 2 2 0 000 4" />,
    title: 'Founder Advisory',
    sub: 'Product AI · Enterprise GTM · Architecture',
    body: "For startups integrating AI into product and selling into enterprise. I've shipped production AI in healthcare, consumer, and enterprise. I know what both sides of that table look like.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="label">Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight" style={{ color: '#F1F5F9' }}>
              What JCK LTD <span className="text-cool">delivers.</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed sm:max-w-[220px] sm:text-right" style={{ color: '#334155' }}>
            Every service reflects work shipped at enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`card p-6 cursor-default ${s.wide ? 'md:col-span-2' : ''}`}
              style={{ '--delay': `${i * 0.9}s` } as React.CSSProperties}
            >
              {/* Top accent line on hover via CSS */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg,transparent,rgba(99,102,241,0.5),transparent)' }} />

              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg" style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.12)' }}>
                  {s.icon}
                </div>
                <span className="text-[10px] font-mono tracking-[0.2em]" style={{ color: 'rgba(99,102,241,0.4)' }}>{s.n}</span>
              </div>

              <h3 className="text-[15px] font-bold mb-1" style={{ color: '#E2E8F0' }}>{s.title}</h3>
              <p className="text-[11px] font-semibold mb-3 tracking-wide" style={{ color: 'rgba(99,102,241,0.55)' }}>{s.sub}</p>
              <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
