import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { ContactFormSchema } from '@/lib/schemas'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = ContactFormSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data' },
        { status: 400 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error: resendError } = await resend.emails.send({
      from: 'contact@alorse.net',
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${result.data.name}`,
      text: result.data.message,
      replyTo: result.data.email
    })

    if (resendError) {
      console.error('Resend failed:', resendError)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    console.error('Contact form submission error:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    )
  }
}