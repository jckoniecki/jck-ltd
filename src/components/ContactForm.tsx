'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '', message: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('loading')
    try {
      const r = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(r.ok ? 'success' : 'error')
      if (r.ok) setForm({ name: '', company: '', email: '', interest: '', message: '' })
    } catch { setStatus('error') }
  }

  const baseStyle = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    color: '#CBD5E1',
    fontSize: '0.875rem',
    padding: '11px 14px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.15s',
  }
  const onFocus = (e: React.FocusEvent) => (e.target as HTMLElement).style.borderColor = 'rgba(99,102,241,0.5)'
  const onBlur  = (e: React.FocusEvent) => (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)' }}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#818CF8" strokeWidth="2">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-2xl font-black mb-3" style={{ color: '#F1F5F9' }}>Message received.</h2>
        <p className="text-sm" style={{ color: '#475569' }}>I&apos;ll be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: '#475569' }}>Name *</label>
          <input required style={baseStyle} placeholder="Your name" value={form.name} onChange={set('name')} onFocus={onFocus} onBlur={onBlur} />
        </div>
        <div>
          <label className="block text-xs font-medium mb-1.5" style={{ color: '#475569' }}>Company</label>
          <input style={baseStyle} placeholder="Organization" value={form.company} onChange={set('company')} onFocus={onFocus} onBlur={onBlur} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: '#475569' }}>Email *</label>
        <input required type="email" style={baseStyle} placeholder="you@company.com" value={form.email} onChange={set('email')} onFocus={onFocus} onBlur={onBlur} />
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: '#475569' }}>I&apos;m interested in</label>
        <select style={{ ...baseStyle, cursor: 'pointer' }} value={form.interest} onChange={set('interest')} onFocus={onFocus} onBlur={onBlur}>
          <option value="" style={{ background: '#080D18' }}>Select a service (optional)</option>
          <option value="microsoft-ai" style={{ background: '#080D18' }}>Microsoft AI Enablement</option>
          <option value="workplace" style={{ background: '#080D18' }}>Digital Workplace Strategy</option>
          <option value="governance" style={{ background: '#080D18' }}>AI Governance & Security</option>
          <option value="founder" style={{ background: '#080D18' }}>Founder Advisory</option>
          <option value="other" style={{ background: '#080D18' }}>Other / Not sure yet</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-medium mb-1.5" style={{ color: '#475569' }}>What are you working on? *</label>
        <textarea required rows={6} style={{ ...baseStyle, resize: 'none' }}
          placeholder="Brief description of your situation, challenge, or goal. The more context you give, the better the conversation we'll have."
          value={form.message} onChange={set('message')}
          onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(99,102,241,0.5)'}
          onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.08)'}
        />
      </div>

      {status === 'error' && (
        <p className="text-xs" style={{ color: '#F87171' }}>
          Something went wrong. Email directly:{' '}
          <a href="mailto:jckoniecki@gmail.com" className="underline">jckoniecki@gmail.com</a>
        </p>
      )}

      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center py-3.5 disabled:opacity-50">
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>

      <p className="text-xs text-center" style={{ color: '#1E293B' }}>No spam. No automated sequences. Just a conversation.</p>
    </form>
  )
}
