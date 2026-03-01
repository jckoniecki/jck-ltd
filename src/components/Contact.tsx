'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', company: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  const inputStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(245,158,11,0.12)',
    borderRadius: '12px',
    color: '#D4C5B0',
    fontSize: '0.875rem',
    padding: '12px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      {/* Warm ambient glow behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: '#F59E0B' }} />

      <div className="max-w-lg mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ color: '#F5F1E8' }}>
            Ready to move?
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: '#6B5E50' }}>
            Tell me what you&apos;re working on. I&apos;ll tell you if I can help.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-14 text-center rounded-2xl"
            style={{ border: '1px solid rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.04)' }}
          >
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.3)' }}>
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F5F1E8' }}>Message received.</h3>
            <p className="text-sm" style={{ color: '#6B5E50' }}>I&apos;ll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            onSubmit={submit}
            className="space-y-3"
          >
            <div className="grid sm:grid-cols-2 gap-3">
              <input required style={inputStyle} placeholder="Your name" value={form.name} onChange={set('name')}
                onFocus={e => e.target.style.borderColor = 'rgba(245,158,11,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(245,158,11,0.12)'} />
              <input style={inputStyle} placeholder="Company (optional)" value={form.company} onChange={set('company')}
                onFocus={e => e.target.style.borderColor = 'rgba(245,158,11,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(245,158,11,0.12)'} />
            </div>
            <input required type="email" style={inputStyle} placeholder="Email address" value={form.email} onChange={set('email')}
              onFocus={e => e.target.style.borderColor = 'rgba(245,158,11,0.4)'}
              onBlur={e => e.target.style.borderColor = 'rgba(245,158,11,0.12)'} />
            <textarea required rows={5} style={{ ...inputStyle, resize: 'none' }}
              placeholder="What are you working on?" value={form.message} onChange={set('message')}
              onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(245,158,11,0.4)'}
              onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(245,158,11,0.12)'} />

            {status === 'error' && (
              <p className="text-sm text-center" style={{ color: '#EF4444' }}>
                Something went wrong — email directly:{' '}
                <a href="mailto:jckoniecki@gmail.com" className="underline">jckoniecki@gmail.com</a>
              </p>
            )}

            <button type="submit" disabled={status === 'loading'}
              className="btn-amber w-full py-3.5 text-sm disabled:opacity-50">
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            <p className="text-center text-xs pt-1" style={{ color: '#4A3F35' }}>
              Or reach out directly:{' '}
              <a href="mailto:jckoniecki@gmail.com" style={{ color: '#F59E0B' }} className="hover:opacity-80 transition-opacity">
                jckoniecki@gmail.com
              </a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
