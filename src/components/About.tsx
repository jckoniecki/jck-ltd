'use client'
import { motion } from 'framer-motion'

const highlights = [
  { label: 'Global Director', sub: 'Digital Workplace Strategy, Kyndryl' },
  { label: 'Enterprise AI Speaker', sub: 'Microsoft & Kyndryl Generative AI Summit' },
  { label: 'Ironman Triathlete', sub: 'Always find the finish line' },
  { label: 'AI Product Founder', sub: 'Healthcare AI, Consumer Apps, Enterprise Tools' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0A1628]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 opacity-70 blur-sm" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-blue-900 to-violet-900 flex items-center justify-center text-6xl font-bold text-white/30">
                  JK
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-[#0F2040] border border-white/10 text-sm font-medium text-white shadow-xl">
                🏅 Ironman Finisher
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">About</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Built for the enterprise.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Wired to build.</span>
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I&apos;ve spent the last several years building at two speeds simultaneously. By day, I&apos;m a senior enterprise technology leader at Kyndryl, managing complex Microsoft infrastructure deployments at scale across some of the largest organizations in the world.
              </p>
              <p>
                By night, I&apos;m a founder — building healthcare AI, consumer apps, and tools for populations that most of Silicon Valley ignores.
              </p>
              <p>
                An Ironman can always find the finish line. I know how to train, build the winning plan, and execute when it matters. That&apos;s what I bring to every client engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5"
                >
                  <p className="text-white font-semibold text-sm">{h.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{h.sub}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/jimkonieck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View LinkedIn Profile
              <span>↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
