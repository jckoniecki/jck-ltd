'use client'
import { motion } from 'framer-motion'

const services = [
  {
    icon: '⚡',
    title: 'Microsoft AI Enablement',
    positioning: 'Copilot. Azure AI. M365. Intune.',
    description: 'Deep deployment expertise across the full Microsoft AI stack. Not presentations — production implementations. Built on Kyndryl-scale delivery across Fortune 500 environments.',
    tags: ['Copilot', 'Azure AI', 'M365', 'Intune'],
  },
  {
    icon: '🗺️',
    title: 'Digital Workplace AI Strategy',
    positioning: 'How AI actually changes how people work.',
    description: "Enterprise AI strategy grounded in global deployment reality — not vendor promises. Built from leading Kyndryl's Digital Workplace practice across the world's most demanding organizations.",
    tags: ['Roadmap', 'Adoption', 'Change Management'],
  },
  {
    icon: '🛡️',
    title: 'AI Governance & Security',
    positioning: 'CISO-ready. Compliance-first.',
    description: 'Risk analysis, regulatory frameworks, and security protocols built for regulated industries. The hard-learned governance lessons from enterprise-scale AI rollouts — before they become your problem.',
    tags: ['Risk', 'Compliance', 'HIPAA', 'SOC2'],
  },
  {
    icon: '🔨',
    title: 'Founder Advisory',
    positioning: 'For builders integrating AI into product.',
    description: "I've shipped production AI — healthcare platforms, consumer apps, enterprise tools. For startups and scale-ups who need someone who understands both the technology and the enterprise buyer.",
    tags: ['Product AI', 'Enterprise Sales', 'Architecture'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            What JCK LTD delivers
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Advisory services built from doing, not theorizing. Every service reflects work I&apos;ve shipped at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-[#0A1628]/80 hover:border-blue-500/30 hover:bg-[#0F2040]/50 transition-all duration-300 cursor-default"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at top left, rgba(59,130,246,0.05), transparent 60%)' }}
              />
              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{service.positioning}</p>
                <p className="text-slate-400 leading-relaxed mb-5">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-400 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
