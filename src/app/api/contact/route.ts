import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, company, email, message } = body

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }

  const resendKey = process.env.RESEND_API_KEY

  if (resendKey) {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'JCK LTD Website <onboarding@resend.dev>',
        to: 'jckoniecki@gmail.com',
        subject: `New inquiry from ${name}${company ? ` at ${company}` : ''}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: email,
      }),
    })
    if (!res.ok) return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  } else {
    console.log('Contact form (no RESEND_API_KEY):', { name, company, email, message })
  }

  return NextResponse.json({ success: true })
}
