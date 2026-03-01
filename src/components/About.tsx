'use client'
import { motion } from 'framer-motion'

const credentials = [
  { icon: '🏢', label: 'Global Director', detail: 'Digital Workplace Strategy, Kyndryl' },
  { icon: '🎤', label: 'Public Speaker', detail: 'Microsoft & Kyndryl Generative AI Summit, GDS Group' },
  { icon: '🏭', label: 'Previously IBM', detail: 'Pre-Kyndryl spinoff 2021 — enterprise tech at global scale' },
  { icon: '🏥', label: 'AI Product Founder', detail: 'Healthcare AI platform (CentricHealth) — production' },
  { icon: '🏅', label: 'Ironman Triathlete', detail: 'Can always find the finish line' },
  { icon: '🌐', label: 'Fortune 500 Scale', detail: 'Infrastructure across the world\'s largest organizations' },
]

function PhotoPlaceholder() {
  return (
    <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden"
      style={{ border: '1px solid rgba(245,158,11,0.2)', background: 'linear-gradient(160deg, #1A1208 0%, #0F0C07 60%, #0A0906 100%)' }}>

      {/* Geometric avatar illustration */}
      <svg viewBox="0 0 288 320" className="absolute inset-0 w-full h-full">
        {/* Background gradient */}
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#1A1208"/>
            <stop offset="100%" stopColor="#0A0906"/>
          </radialGradient>
          <radialGradient id="amberGlow" cx="50%" cy="35%" r="45%">
            <stop offset="0%" stopColor="rgba(245,158,11,0.12)"/>
            <stop offset="100%" stopColor="rgba(245,158,11,0)"/>
          </radialGradient>
          <linearGradient id="figureGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(245,158,11,0.25)"/>
            <stop offset="100%" stopColor="rgba(245,158,11,0.05)"/>
          </linearGradient>
        </defs>
        <rect width="288" height="320" fill="url(#bgGrad)"/>
        <rect width="288" height="320" fill="url(#amberGlow)"/>

        {/* Concentric rings behind figure */}
        <circle cx="144" cy="112" r="80" stroke="rgba(245,158,11,0.08)" strokeWidth="1" fill="none"/>
        <circle cx="144" cy="112" r="60" stroke="rgba(245,158,11,0.06)" strokeWidth="0.8" fill="none"/>

        {/* Head */}
        <circle cx="144" cy="100" r="38" fill="url(#figureGrad)"/>
        {/* Inner head highlight */}
        <circle cx="135" cy="90" r="12" fill="rgba(245,158,11,0.06)"/>

        {/* Shoulders / body */}
        <path d="M60 280 Q80 200 144 195 Q208 200 228 280 Z" fill="url(#figureGrad)"/>

        {/* Subtle face suggestion */}
        <circle cx="132" cy="96" r="4.5" fill="rgba(245,158,11,0.2)"/>
        <circle cx="156" cy="96" r="4.5" fill="rgba(245,158,11,0.2)"/>
        <path d="M132 115 Q144 124 156 115" stroke="rgba(245,158,11,0.2)" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* Name label */}
        <rect x="64" y="264" width="160" height="36" rx="8" fill="rgba(10,8,5,0.85)"/>
        <text x="144" y="285" textAnchor="middle" fill="rgba(245,158,11,0.7)" fontSize="10" fontWeight="700" fontFamily="system-ui" letterSpacing="2">JIM KONIECKI</text>
        <text x="144" y="297" textAnchor="middle" fill="rgba(107,94,80,0.8)" fontSize="8" fontFamily="system-ui" letterSpacing="1">Add photo · jimkonieck</text>
      </svg>

      {/* Scanline texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(245,158,11,0.3) 3px, rgba(245,158,11,0.3) 4px)',
      }} />

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
        background: 'linear-gradient(to top, rgba(10,9,6,0.9), transparent)',
      }} />
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, #080A0F 0%, #0B0805 45%, #080A0F 100%)',
    }}>
      {/* Ambient warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.035] blur-[140px] pointer-events-none"
        style={{ background: '#F59E0B' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* Left — photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.72 }}
            className="relative flex justify-center"
          >
            {/* Decorative SVG orbit rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ maxHeight: '400px' }}>
              <svg viewBox="0 0 380 380" className="w-full h-full opacity-[0.13]" style={{ maxWidth: '370px' }}>
                <circle cx="190" cy="190" r="174" stroke="#F59E0B" strokeWidth="0.6" strokeDasharray="3 9" fill="none"/>
                <circle cx="190" cy="190" r="134" stroke="#FBBF24" strokeWidth="0.5" strokeDasharray="2 7" fill="none"/>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => {
                  const r = (deg * Math.PI) / 180
                  return (
                    <g key={i}>
                      <circle cx={190 + 174 * Math.cos(r)} cy={190 + 174 * Math.sin(r)} r="3.5" fill="#F59E0B" opacity="0.75">
                        <animate attributeName="r" values="3.5;5.5;3.5" dur={`${2.5+i*0.3}s`} repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.75;0.3;0.75" dur={`${2.5+i*0.3}s`} repeatCount="indefinite"/>
                      </circle>
                      <line x1="190" y1="190" x2={190 + 174 * Math.cos(r)} y2={190 + 174 * Math.sin(r)}
                        stroke="#F59E0B" strokeWidth="0.4" opacity="0.2" strokeDasharray="3 5">
                        <animate attributeName="opacity" values="0.2;0.5;0.2" dur={`${3+i*0.4}s`} repeatCount="indefinite"/>
                      </line>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Photo + badges */}
            <div className="relative z-10">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-2xl blur-2xl opacity-15 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #F59E0B, #D97706)', transform: 'scale(0.88) translateY(12px)' }} />

              <PhotoPlaceholder />

              {/* Badge: Ironman */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -right-7 px-4 py-2.5 rounded-xl shadow-2xl"
                style={{ background: '#110E09', border: '1px solid rgba(245,158,11,0.18)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
              >
                <p className="text-[10px] mb-0.5" style={{ color: '#4D4035' }}>🏅 Ironman</p>
                <p className="text-sm font-bold" style={{ color: '#FBBF24' }}>Finisher</p>
              </motion.div>

              {/* Badge: Kyndryl */}
              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                className="absolute -top-5 -left-7 px-4 py-2.5 rounded-xl shadow-2xl"
                style={{ background: '#110E09', border: '1px solid rgba(245,158,11,0.18)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}
              >
                <p className="text-[10px] mb-0.5" style={{ color: '#4D4035' }}>Global Director</p>
                <p className="text-sm font-bold" style={{ color: '#F59E0B' }}>Kyndryl</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.72, delay: 0.1 }}
          >
            <span className="section-label">About Jim</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6" style={{ color: '#F5F1E8' }}>
              Built for enterprise.
              <br />
              <span className="text-amber-gradient">Wired to build.</span>
            </h2>

            <div className="space-y-4 text-sm leading-[1.85] mb-10" style={{ color: '#7A6E65' }}>
              <p>
                I&apos;ve spent the last several years building at two speeds simultaneously. By day, a senior enterprise technology leader at Kyndryl — managing complex Microsoft infrastructure deployments at scale across some of the world&apos;s largest organizations.
              </p>
              <p>
                By night, a founder building healthcare AI, consumer apps, and tools for populations that most of Silicon Valley ignores.
              </p>
              <p style={{ color: '#9A8A78' }}>
                An Ironman can always find the finish line. I know how to train, build the winning plan, and execute when it matters.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3 px-3.5 py-3 rounded-xl transition-all duration-250 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(245,158,11,0.18)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)'}
                >
                  <span className="text-sm mt-0.5 flex-shrink-0">{c.icon}</span>
                  <div>
                    <p className="text-xs font-bold mb-0.5" style={{ color: '#C4B59E' }}>{c.label}</p>
                    <p className="text-[11px] leading-snug" style={{ color: '#4D4035' }}>{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold group transition-opacity hover:opacity-75"
              style={{ color: '#F59E0B' }}>
              View full LinkedIn profile
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
