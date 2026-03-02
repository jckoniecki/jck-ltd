import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { name, email, company, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    // Log to console for now — wire up Resend/SendGrid when ready
    console.log('[Contact Form]', { name, email, company, message, ts: new Date().toISOString() })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
