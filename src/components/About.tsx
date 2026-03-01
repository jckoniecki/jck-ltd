'use client'
import { motion } from 'framer-motion'

const credentials = [
  { icon: '🏢', label: 'Global Director', detail: 'Digital Workplace Strategy, Kyndryl' },
  { icon: '🎤', label: 'Public Speaker', detail: 'Microsoft & Kyndryl Generative AI Summit, GDS Group' },
  { icon: '🏭', label: 'Previously IBM', detail: 'Enterprise technology pre-Kyndryl spinoff, 2021' },
  { icon: '🏥', label: 'Healthcare AI Founder', detail: 'CentricHealth — prevention-first AI platform' },
  { icon: '🏅', label: 'Ironman Triathlete', detail: 'Always find the finish line' },
  { icon: '🌐', label: 'Fortune 500 Scale', detail: 'Infrastructure across the world\'s largest organizations' },
]

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #080A0F 0%, #0D0905 50%, #080A0F 100%)' }}>

      {/* Warm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.04] blur-[150px] pointer-events-none"
        style={{ background: '#F59E0B' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            {/* Decorative SVG rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg viewBox="0 0 400 400" className="w-full h-full opacity-[0.15]" style={{ maxWidth: '380px' }}>
                {/* Outer ring */}
                <circle cx="200" cy="200" r="180" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="4 8" fill="none" />
                {/* Middle ring */}
                <circle cx="200" cy="200" r="140" stroke="#FBBF24" strokeWidth="0.5" strokeDasharray="2 6" fill="none" />
                {/* Inner ring */}
                <circle cx="200" cy="200" r="100" stroke="#D97706" strokeWidth="0.5" fill="none" />

                {/* Nodes on outer ring */}
                {[0, 72, 144, 216, 288].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const x = 200 + 180 * Math.cos(rad)
                  const y = 200 + 180 * Math.sin(rad)
                  return (
                    <circle key={i} cx={x} cy={y} r="4" fill="#F59E0B" opacity="0.7">
                      <animate attributeName="r" values="4;6;4" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.7;0.3;0.7" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                  )
                })}

                {/* Lines from center to nodes */}
                {[0, 72, 144, 216, 288].map((deg, i) => {
                  const rad = (deg * Math.PI) / 180
                  const x = 200 + 180 * Math.cos(rad)
                  const y = 200 + 180 * Math.sin(rad)
                  return (
                    <line key={i} x1="200" y1="200" x2={x} y2={y}
                      stroke="#F59E0B" strokeWidth="0.5" opacity="0.3"
                      strokeDasharray="4 6">
                      <animate attributeName="opacity" values="0.3;0.6;0.3" dur={`${3 + i * 0.5}s`} repeatCount="indefinite" />
                    </line>
                  )
                })}
              </svg>
            </div>

            {/* Photo card */}
            <div className="relative z-10">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', transform: 'scale(0.9) translateY(10px)' }} />

              {/* Photo frame */}
              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(245,158,11,0.25)', background: 'linear-gradient(160deg, #1A1208, #0D0B08)' }}>

                {/* Placeholder gradient — replace with real photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="text-7xl font-black tracking-tighter"
                    style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.06))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    JK
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full" style={{ color: '#5C4F42', border: '1px solid rgba(245,158,11,0.12)', background: 'rgba(245,158,11,0.04)' }}>
                    Headshot coming soon
                  </span>
                </div>

                {/* Warm gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5"
                  style={{ background: 'linear-gradient(to top, #0D0B08, transparent)' }} />

                {/* Scan line effect */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                  style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(245,158,11,0.5) 2px, rgba(245,158,11,0.5) 3px)', backgroundSize: '100% 4px' }} />
              </div>

              {/* Floating badge — Ironman */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-8 px-4 py-3 rounded-xl shadow-2xl"
                style={{ background: '#110E09', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              >
                <p className="text-xs mb-0.5" style={{ color: '#5C4F42' }}>🏅 Ironman</p>
                <p className="text-sm font-bold" style={{ color: '#FBBF24' }}>Finisher</p>
              </motion.div>

              {/* Floating badge — Kyndryl */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -left-8 px-4 py-3 rounded-xl shadow-2xl"
                style={{ background: '#110E09', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
              >
                <p className="text-xs mb-0.5" style={{ color: '#5C4F42' }}>Global Director</p>
                <p className="text-sm font-bold" style={{ color: '#F59E0B' }}>Kyndryl</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="section-label">About Jim</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6" style={{ color: '#F5F1E8' }}>
              Built for enterprise.
              <br />
              <span className="text-amber-gradient">Wired to build.</span>
            </h2>

            <div className="space-y-4 text-sm leading-relaxed mb-10" style={{ color: '#7A6E65' }}>
              <p>
                I&apos;ve spent the last several years building at two speeds simultaneously. By day, a senior enterprise technology leader at Kyndryl — managing complex Microsoft infrastructure deployments at scale across some of the world&apos;s largest organizations.
              </p>
              <p>
                By night, a founder — building healthcare AI, consumer apps, and tools for populations that most of Silicon Valley ignores.
              </p>
              <p style={{ color: '#9A8A78' }}>
                An Ironman can always find the finish line. I know how to train, build the winning plan, and execute when it matters. That&apos;s what I bring to every engagement.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.06 }}
                  className="flex items-start gap-3 px-4 py-3 rounded-xl transition-all duration-300 hover:border-amber-500/20 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="text-base flex-shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#D4C5B0' }}>{c.label}</p>
                    <p className="text-xs leading-snug" style={{ color: '#5C4F42' }}>{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="https://www.linkedin.com/in/jimkonieck"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-all group"
              style={{ color: '#F59E0B' }}
            >
              View full LinkedIn profile
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
