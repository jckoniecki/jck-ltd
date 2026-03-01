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
    } catch {
      setStatus('error')
    }
  }

  const base = 'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all duration-200'

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-indigo-400 mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">Ready to move?</h2>
          <p className="text-gray-500">Tell me what you&apos;re working on. I&apos;ll tell you if I can help.</p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-12 text-center rounded-2xl border border-green-500/20 bg-green-500/5"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message received.</h3>
            <p className="text-gray-500 text-sm">I&apos;ll be in touch within 24 hours.</p>
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
              <input required className={base} placeholder="Your name" value={form.name} onChange={set('name')} />
              <input className={base} placeholder="Company (optional)" value={form.company} onChange={set('company')} />
            </div>
            <input required type="email" className={base} placeholder="Email address" value={form.email} onChange={set('email')} />
            <textarea
              required
              rows={5}
              className={`${base} resize-none`}
              placeholder="What are you working on?"
              value={form.message}
              onChange={set('message')}
            />

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Email directly:{' '}
                <a href="mailto:jckoniecki@gmail.com" className="underline">jckoniecki@gmail.com</a>
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90 disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            <p className="text-center text-gray-600 text-xs pt-1">
              Or reach out directly:{' '}
              <a href="mailto:jckoniecki@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                jckoniecki@gmail.com
              </a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
