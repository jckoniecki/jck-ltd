'use client'
import { motion } from 'framer-motion'

const creds = [
  { icon: '🏢', label: 'Global Director', detail: 'Digital Workplace Strategy, Kyndryl' },
  { icon: '🎤', label: 'Public Speaker', detail: 'Microsoft & Kyndryl Gen AI Summit' },
  { icon: '🏭', label: 'Previously IBM', detail: 'Enterprise tech pre-Kyndryl spinoff 2021' },
  { icon: '🏥', label: 'AI Founder', detail: 'Healthcare AI platform — production' },
  { icon: '🏅', label: 'Ironman Triathlete', detail: 'Can always find the finish line' },
  { icon: '🌐', label: 'Fortune 500 Scale', detail: "World's largest organizations" },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #03050E 0%, #050810 50%, #03050E 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.04] blur-[120px] pointer-events-none"
        style={{ background: '#6366F1' }} />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65 }}
            className="relative flex justify-center"
          >
            {/* Orbit SVG */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ maxHeight: 380 }}>
              <svg viewBox="0 0 360 360" className="w-full h-full" style={{ maxWidth: 360, opacity: 0.1 }}>
                <circle cx="180" cy="180" r="168" stroke="#6366F1" strokeWidth="0.6" strokeDasharray="3 8" fill="none" />
                <circle cx="180" cy="180" r="128" stroke="#8B5CF6" strokeWidth="0.5" strokeDasharray="2 6" fill="none" />
                {[0,72,144,216,288].map((deg,i) => {
                  const rad = deg*Math.PI/180
                  return (
                    <circle key={i} cx={180+168*Math.cos(rad)} cy={180+168*Math.sin(rad)} r="3" fill="#6366F1" opacity="0.8">
                      <animate attributeName="opacity" values="0.8;0.2;0.8" dur={`${2.2+i*0.35}s`} repeatCount="indefinite" />
                    </circle>
                  )
                })}
              </svg>
            </div>

            <div className="relative z-10">
              {/* Glow */}
              <div className="absolute inset-0 rounded-xl blur-2xl opacity-12 pointer-events-none"
                style={{ background: 'linear-gradient(135deg,#6366F1,#8B5CF6)', transform: 'scale(0.86) translateY(14px)' }} />

              {/* Photo card */}
              <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(99,102,241,0.18)', background: 'linear-gradient(160deg, #0D1225 0%, #080D18 100%)' }}>
                <svg viewBox="0 0 256 288" className="absolute inset-0 w-full h-full">
                  <defs>
                    <radialGradient id="fg" cx="50%" cy="35%" r="50%">
                      <stop offset="0%" stopColor="rgba(99,102,241,0.18)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,0.03)" />
                    </radialGradient>
                    <linearGradient id="figG" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(129,140,248,0.3)" />
                      <stop offset="100%" stopColor="rgba(99,102,241,0.06)" />
                    </linearGradient>
                  </defs>
                  <rect width="256" height="288" fill="#080D18" />
                  <rect width="256" height="288" fill="url(#fg)" />
                  <circle cx="128" cy="96" r="36" fill="url(#figG)" />
                  <circle cx="119" cy="88" r="10" fill="rgba(129,140,248,0.08)" />
                  <path d="M52 260 Q72 188 128 183 Q184 188 204 260 Z" fill="url(#figG)" />
                  <circle cx="116" cy="91" r="4" fill="rgba(129,140,248,0.22)" />
                  <circle cx="140" cy="91" r="4" fill="rgba(129,140,248,0.22)" />
                  <path d="M116 109 Q128 117 140 109" stroke="rgba(129,140,248,0.2)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  <rect x="56" y="242" width="144" height="30" rx="7" fill="rgba(6,9,24,0.9)" />
                  <text x="128" y="260" textAnchor="middle" fill="rgba(99,102,241,0.7)" fontSize="9" fontWeight="700" fontFamily="system-ui" letterSpacing="1.5">JIM KONIECKI</text>
                  <text x="128" y="270" textAnchor="middle" fill="rgba(71,85,105,0.8)" fontSize="7.5" fontFamily="system-ui">Replace with photo</text>
                </svg>
                <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: 'linear-gradient(to top, rgba(8,13,24,0.9), transparent)' }} />
              </div>

              {/* Badges */}
              <motion.div
                animate={{ y: [0,-6,0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-5 px-3 py-2 rounded-xl shadow-xl"
                style={{ background: '#070B18', border: '1px solid rgba(99,102,241,0.18)' }}>
                <p className="text-[10px] mb-0.5" style={{ color: '#334155' }}>🏅 Ironman</p>
                <p className="text-xs font-bold" style={{ color: '#A5B4FC' }}>Finisher</p>
              </motion.div>
              <motion.div
                animate={{ y: [0,6,0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -top-4 -left-5 px-3 py-2 rounded-xl shadow-xl"
                style={{ background: '#070B18', border: '1px solid rgba(99,102,241,0.18)' }}>
                <p className="text-[10px] mb-0.5" style={{ color: '#334155' }}>Global Director</p>
                <p className="text-xs font-bold" style={{ color: '#6366F1' }}>Kyndryl</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            <span className="label">About Jim</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-5" style={{ color: '#F1F5F9' }}>
              Built for enterprise.<br />
              <span className="text-cool">Wired to build.</span>
            </h2>

            <div className="space-y-3.5 text-sm leading-[1.85] mb-8" style={{ color: '#64748B' }}>
              <p>By day, a senior enterprise technology leader at Kyndryl — managing complex Microsoft infrastructure deployments at scale across some of the world's largest organizations.</p>
              <p>By night, a founder building healthcare AI, consumer apps, and tools for populations most of Silicon Valley ignores.</p>
              <p style={{ color: '#475569' }}>An Ironman can always find the finish line. I know how to train, build the winning plan, and execute when it matters.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {creds.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-2.5 px-3 py-2.5 rounded-xl transition-colors duration-200 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.2)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <span className="text-sm flex-shrink-0 mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-[12px] font-semibold mb-0.5" style={{ color: '#CBD5E1' }}>{c.label}</p>
                    <p className="text-[11px] leading-snug" style={{ color: '#334155' }}>{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-75 transition-opacity"
              style={{ color: '#6366F1' }}>
              View LinkedIn profile
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
