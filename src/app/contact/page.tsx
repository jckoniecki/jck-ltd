'use client'
import { useState } from 'react'
import type { FormEvent } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main style={{ paddingTop: 68 }}>
      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0A1F44, #1A3F7A)', padding: 'clamp(3rem,7vw,5rem) 0' }}>
        <div className="container">
          <span className="label" style={{ color: '#9FC2E8' }}>Contact JCK LTD</span>
          <h1 style={{ color: 'white', fontSize: 'clamp(1.8rem,4vw,2.8rem)', marginBottom: '1rem' }}>
            Start the Conversation
          </h1>
          <p style={{ color: '#9FC2E8', fontSize: '1rem', lineHeight: 1.7, maxWidth: 480, fontWeight: 300 }}>
            Ready to explore how AI can transform your enterprise? Get in touch with Jim directly.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section section-light">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '3rem', alignItems: 'start' }}>

            {/* Info */}
            <div>
              <span className="label">Get In Touch</span>
              <h2 style={{ fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', marginBottom: '1.25rem' }}>
                Let&apos;s Build Something Transformative
              </h2>
              <p style={{ color: '#444', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2rem' }}>
                Whether you&apos;re looking to accelerate AI adoption, strengthen governance,
                or secure your AI infrastructure — JCK LTD is ready to partner with you.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { label: 'Email', value: 'jckoniecki@gmail.com', href: 'mailto:jckoniecki@gmail.com' },
                  { label: 'LinkedIn', value: 'linkedin.com/in/jimkonieck', href: 'https://www.linkedin.com/in/jimkonieck' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem 1.25rem', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 8 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#6A8FE3', flexShrink: 0 }} />
                    <div>
                      <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6A8FE3', fontWeight: 700, marginBottom: 2 }}>{item.label}</div>
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: '0.9rem', color: '#0A1F44', fontWeight: 600 }}>
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#F2F5F9', borderRadius: 10, borderLeft: '3px solid #6A8FE3' }}>
                <p style={{ fontSize: '0.875rem', color: '#444', lineHeight: 1.7, fontStyle: 'italic' }}>
                  &ldquo;Every AI transformation begins with a conversation.
                  Let&apos;s start with yours.&rdquo;
                </p>
                <p style={{ fontSize: '0.8rem', color: '#6A8FE3', fontWeight: 700, marginTop: '0.75rem' }}>— Jim Koniecki</p>
              </div>
            </div>

            {/* Form */}
            {status === 'sent' ? (
              <div style={{ background: '#F0F7FF', border: '1px solid #9FC2E8', borderRadius: 12, padding: '3rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <h3 style={{ marginBottom: '0.75rem' }}>Message Received</h3>
                <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>
                  Thanks for reaching out. Jim will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: 'white', border: '1px solid #E2E8F0', borderRadius: 12, padding: '2rem' }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Jim Smith', required: true },
                  { id: 'email', label: 'Work Email', type: 'email', placeholder: 'jim@company.com', required: true },
                  { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp', required: false },
                ].map(field => (
                  <div key={field.id} style={{ marginBottom: '1.25rem' }}>
                    <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0A1F44', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
                      {field.label}{field.required && ' *'}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      value={form[field.id as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.id]: e.target.value }))}
                      style={{
                        width: '100%', padding: '0.65rem 0.9rem',
                        border: '1px solid #E2E8F0', borderRadius: 7,
                        fontSize: '0.9rem', color: '#111', fontFamily: 'var(--font-open-sans)',
                        outline: 'none', transition: 'border-color 0.2s',
                        background: '#FAFBFC',
                      }}
                      onFocus={e => e.target.style.borderColor = '#6A8FE3'}
                      onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#0A1F44', marginBottom: '0.4rem', letterSpacing: '0.05em' }}>
                    How Can We Help? *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Tell us about your AI goals and challenges..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{
                      width: '100%', padding: '0.65rem 0.9rem',
                      border: '1px solid #E2E8F0', borderRadius: 7,
                      fontSize: '0.9rem', color: '#111', fontFamily: 'var(--font-open-sans)',
                      outline: 'none', resize: 'vertical', transition: 'border-color 0.2s',
                      background: '#FAFBFC',
                    }}
                    onFocus={e => e.target.style.borderColor = '#6A8FE3'}
                    onBlur={e => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
                {status === 'error' && (
                  <p style={{ fontSize: '0.85rem', color: '#c0392b', marginBottom: '1rem' }}>
                    Something went wrong. Email jckoniecki@gmail.com directly.
                  </p>
                )}
                <button type="submit" disabled={status === 'sending'} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}>
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
