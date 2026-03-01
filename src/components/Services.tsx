'use client'
import { motion } from 'framer-motion'

const services = [
  {
    number: '01',
    title: 'Microsoft AI Enablement',
    sub: 'Copilot · Azure AI · Intune · M365',
    body: 'Deep deployment expertise across the full Microsoft AI stack. Built on Kyndryl-scale delivery across Fortune 500 environments. Not presentations — production implementations that stick.',
    wide: true,
  },
  {
    number: '02',
    title: 'Digital Workplace Strategy',
    sub: 'Roadmap · Adoption · Change',
    body: 'AI strategy grounded in global deployment reality. How generative AI actually changes how people work — not what vendors promise at the booth.',
    wide: false,
  },
  {
    number: '03',
    title: 'AI Governance & Risk',
    sub: 'Compliance · Security · Frameworks',
    body: 'CISO-ready governance frameworks for regulated industries. Risk analysis built from the hard-learned lessons of enterprise-scale rollouts.',
    wide: false,
  },
  {
    number: '04',
    title: 'Founder Advisory',
    sub: 'Product AI · Enterprise GTM · Architecture',
    body: 'For startups integrating AI into product and selling into enterprise. I\'ve shipped production AI in healthcare, consumer, and enterprise — I know what both sides of that table look like.',
    wide: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">Services</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
              What JCK LTD
              <br />
              <span className="text-gradient">delivers.</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm leading-relaxed">
            Advisory grounded in doing, not theorizing. Every service reflects work shipped at scale.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`gradient-border beam-container group p-8 cursor-default transition-all duration-300 ${
                s.wide ? 'md:col-span-2' : 'md:col-span-1'
              }`}
              style={{ '--beam-delay': `${i * 0.8}s` } as React.CSSProperties}
            >
              <div className="relative z-10">
                <span className="text-xs font-mono text-indigo-500/60 mb-5 block tracking-widest">{s.number}</span>
                <h3 className="text-xl font-bold text-white mb-1.5">{s.title}</h3>
                <p className="text-xs text-indigo-400/70 font-medium mb-4 tracking-wide">{s.sub}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
