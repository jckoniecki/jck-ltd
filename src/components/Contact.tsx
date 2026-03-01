'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus('success'); setForm({ name: '', company: '', email: '', message: '' }) }
      else setStatus('error')
    } catch { setStatus('error') }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-all duration-200 text-sm"

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 font-medium">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Ready to move?</h2>
          <p className="text-slate-400 text-lg">
            Tell me what you&apos;re working on. I&apos;ll tell you if I can help.
          </p>
        </motion.div>

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center p-12 rounded-2xl border border-green-500/20 bg-green-500/5"
          >
            <span className="text-4xl mb-4 block">✓</span>
            <h3 className="text-xl font-bold text-white mb-2">Message received.</h3>
            <p className="text-slate-400">I&apos;ll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input required className={inputClass} placeholder="Your name" value={form.name}
                onChange={e => setForm(p => ({...p, name: e.target.value}))} />
              <input className={inputClass} placeholder="Company (optional)" value={form.company}
                onChange={e => setForm(p => ({...p, company: e.target.value}))} />
            </div>
            <input required type="email" className={inputClass} placeholder="Email address" value={form.email}
              onChange={e => setForm(p => ({...p, email: e.target.value}))} />
            <textarea required rows={5} className={`${inputClass} resize-none`} placeholder="What are you working on?"
              value={form.message} onChange={e => setForm(p => ({...p, message: e.target.value}))} />

            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Email me directly: jckoniecki@gmail.com</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)' }}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message →'}
            </button>

            <p className="text-center text-slate-500 text-sm">
              Or email directly:{' '}
              <a href="mailto:jckoniecki@gmail.com" className="text-blue-400 hover:text-blue-300">
                jckoniecki@gmail.com
              </a>
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
