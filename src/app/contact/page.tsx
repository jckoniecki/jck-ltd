import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — JCK LTD',
  description: "Start a conversation with Jim Koniecki. Enterprise AI advisory, Microsoft AI implementation, and Founder Advisory.",
}

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-24">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-start">

          {/* Left — context */}
          <div className="md:sticky md:top-28">
            <span className="label">Contact</span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[0.95] mb-5"
              style={{ color: '#F1F5F9' }}>
              Ready to<br />
              <span className="text-cool">move?</span>
            </h1>
            <p className="text-base leading-relaxed mb-10" style={{ color: '#64748B' }}>
              Tell me what you&apos;re working on. I&apos;ll tell you if I can help —
              and if I can&apos;t, I&apos;ll point you to someone who can.
            </p>

            {/* What to expect */}
            <div className="space-y-5 mb-10">
              {[
                { n: '01', label: 'You reach out', detail: 'Fill out the form or email directly. Brief is fine — I\'ll ask the right questions.' },
                { n: '02', label: 'I respond within 24h', detail: 'No automated sequences. A real reply from Jim.' },
                { n: '03', label: 'We talk', detail: 'A focused conversation about your situation. No sales pitch.' },
              ].map(s => (
                <div key={s.n} className="flex items-start gap-4">
                  <span className="text-xs font-mono mt-0.5 flex-shrink-0" style={{ color: 'rgba(99,102,241,0.45)' }}>{s.n}</span>
                  <div>
                    <p className="text-sm font-bold mb-0.5" style={{ color: '#CBD5E1' }}>{s.label}</p>
                    <p className="text-sm" style={{ color: '#475569' }}>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[11px] font-bold tracking-[0.14em] uppercase mb-3" style={{ color: '#334155' }}>Direct</p>
              <a href="mailto:jckoniecki@gmail.com"
                className="text-sm font-medium transition-opacity hover:opacity-75"
                style={{ color: '#6366F1' }}>
                jckoniecki@gmail.com
              </a>
              <div className="mt-3">
                <a href="https://www.linkedin.com/in/jimkonieck" target="_blank" rel="noopener noreferrer"
                  className="text-sm font-medium transition-opacity hover:opacity-75 flex items-center gap-1.5"
                  style={{ color: '#6366F1' }}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
