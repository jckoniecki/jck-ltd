'use client'
import { motion } from 'framer-motion'

const credentials = [
  { label: 'Global Director', detail: 'Digital Workplace Strategy, Kyndryl' },
  { label: 'Enterprise AI Speaker', detail: 'Microsoft & Kyndryl Generative AI Summit' },
  { label: 'Fortune 500 Scale', detail: 'Infrastructure deployments across largest global orgs' },
  { label: 'AI Product Founder', detail: 'Healthcare AI · Consumer Apps · Enterprise Tools' },
  { label: 'Ironman Finisher', detail: 'Always find the finish line' },
  { label: 'Previously IBM', detail: 'Enterprise technology pre-Kyndryl spinoff 2021' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden">
      {/* Subtle glow behind section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] blur-[120px] bg-indigo-600 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — photo + floating stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-600/20 to-violet-600/10 blur-2xl" />
            </div>

            {/* Photo frame */}
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-white/10 relative"
                style={{ background: 'linear-gradient(135deg, #0d1117, #161b22)' }}>
                {/* Placeholder — replace with actual photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-6xl font-black text-white/10 tracking-tighter">JK</span>
                  <span className="text-xs text-gray-600 mt-2">Photo coming soon</span>
                </div>
                {/* Gradient overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0d1117] to-transparent" />
              </div>

              {/* Floating badge — Ironman */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-6 px-4 py-2.5 rounded-xl border border-white/10 bg-[#0d1117] shadow-2xl shadow-black/60"
              >
                <p className="text-xs text-gray-500 leading-none mb-0.5">🏅 Ironman</p>
                <p className="text-sm font-bold text-white leading-none">Finisher</p>
              </motion.div>

              {/* Floating badge — Kyndryl */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-4 -left-6 px-4 py-2.5 rounded-xl border border-indigo-500/20 bg-[#0d1117] shadow-2xl shadow-black/60"
              >
                <p className="text-xs text-gray-500 leading-none mb-0.5">Global Director</p>
                <p className="text-sm font-bold text-indigo-300 leading-none">Kyndryl</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-4">About Jim</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
              Built for enterprise.
              <br />
              <span className="text-gradient">Wired to ship.</span>
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed mb-10 text-[15px]">
              <p>
                I&apos;ve spent the last several years building at two speeds simultaneously. By day, I&apos;m a senior enterprise technology leader at Kyndryl — managing complex Microsoft infrastructure deployments at scale across some of the world&apos;s largest organizations.
              </p>
              <p>
                By night, I&apos;m a founder — building healthcare AI, consumer apps, and tools for populations that most of Silicon Valley ignores.
              </p>
              <p>
                An Ironman can always find the finish line. I know how to train, build the winning plan, and execute when it matters.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  className="px-4 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-indigo-500/20 transition-colors duration-300"
                >
                  <p className="text-xs font-semibold text-white mb-0.5">{c.label}</p>
                  <p className="text-xs text-gray-500 leading-snug">{c.detail}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/jimkonieck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors group"
            >
              View Full Profile on LinkedIn
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
