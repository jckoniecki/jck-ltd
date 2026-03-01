import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, company, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const key = process.env.RESEND_API_KEY

  if (key) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'JCK LTD <onboarding@resend.dev>',
        to: 'jckoniecki@gmail.com',
        subject: `New inquiry — ${name}${company ? ` · ${company}` : ''}`,
        html: `<h2>New Contact</h2><p><b>Name:</b> ${name}</p><p><b>Company:</b> ${company || 'N/A'}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message.replace(/\n/g, '<br>')}</p>`,
        reply_to: email,
      }),
    })
    if (!res.ok) return NextResponse.json({ error: 'Send failed' }, { status: 500 })
  } else {
    console.log('[Contact Form]', { name, company, email, message })
  }

  return NextResponse.json({ success: true })
}
