'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading')
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name: '', company: '', email: '', message: '' })
    } catch { setStatus('error') }
  }

  const inp = "w-full px-3.5 py-2.5 rounded-xl text-sm transition-colors duration-150 outline-none placeholder-slate-600"
  const inpStyle = { background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#CBD5E1' }
  const focus = (e: React.FocusEvent) => (e.target as HTMLElement).style.borderColor = 'rgba(99,102,241,0.45)'
  const blur  = (e: React.FocusEvent) => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.05] blur-[100px] pointer-events-none"
        style={{ background: '#6366F1' }} />

      <div className="max-w-md mx-auto px-5 sm:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <span className="label">Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-3" style={{ color: '#F1F5F9' }}>Ready to move?</h2>
          <p className="text-sm" style={{ color: '#475569' }}>Tell me what you&apos;re working on. I&apos;ll tell you if I can help.</p>
        </motion.div>

        {status === 'success' ? (
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center rounded-2xl"
            style={{ border: '1px solid rgba(99,102,241,0.2)', background: 'rgba(99,102,241,0.05)' }}>
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" stroke="#818CF8" strokeWidth="2">
                <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-1.5" style={{ color: '#F1F5F9' }}>Message received.</h3>
            <p className="text-sm" style={{ color: '#475569' }}>I&apos;ll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.5 }}
            onSubmit={submit}
            className="space-y-2.5"
          >
            <div className="grid grid-cols-2 gap-2.5">
              <input required className={inp} style={inpStyle} placeholder="Your name" value={form.name} onChange={set('name')} onFocus={focus} onBlur={blur} />
              <input className={inp} style={inpStyle} placeholder="Company" value={form.company} onChange={set('company')} onFocus={focus} onBlur={blur} />
            </div>
            <input required type="email" className={inp} style={inpStyle} placeholder="Email address" value={form.email} onChange={set('email')} onFocus={focus} onBlur={blur} />
            <textarea required rows={5} className={`${inp} resize-none`} style={inpStyle} placeholder="What are you working on?" value={form.message} onChange={set('message')}
              onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(99,102,241,0.45)'}
              onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.07)'} />

            {status === 'error' && (
              <p className="text-xs text-center" style={{ color: '#F87171' }}>
                Something went wrong — email <a href="mailto:jckoniecki@gmail.com" className="underline">jckoniecki@gmail.com</a>
              </p>
            )}

            <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center py-3 disabled:opacity-50">
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>
            <p className="text-center text-xs pt-0.5" style={{ color: '#1E293B' }}>
              Direct: <a href="mailto:jckoniecki@gmail.com" style={{ color: '#6366F1' }} className="hover:opacity-75 transition-opacity">jckoniecki@gmail.com</a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
