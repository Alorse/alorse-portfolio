import { NextResponse } from 'next/server'
import { Resend } from 'resend'

type ContactFormData = {
  name: string
  email: string
  message: string
}

type EmailResponse = {
  success: boolean
  message: string
  serviceUsed: 'resend' | 'formspree'
}

const validateInput = (data: ContactFormData): string | null => {
  if (!data.name || data.name.trim().length < 2) {
    return 'Name must be at least 2 characters'
  }
  
  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return 'Valid email is required'
  }

  if (!data.message || data.message.trim().length < 10) {
    return 'Message must be at least 10 characters'
  }

  return null
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json()
    const validationError = validateInput(data)
    
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      )
    }

    let result: EmailResponse | null = null
    
    // Try Resend first
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        
        await resend.emails.send({
          from: 'contact@yourdomain.com',
          to: process.env.CONTACT_EMAIL || 'your@email.com',
          subject: `New contact from ${data.name}`,
          text: data.message,
          replyTo: data.email
        })

        result = {
          success: true,
          message: 'Message sent successfully via Resend',
          serviceUsed: 'resend'
        }
      } catch (error) {
        console.error('Resend failed:', error)
      }
    }

    // Fallback to Formspree if Resend failed or isn't configured
    if (!result && process.env.FORMSPREE_URL) {
      try {
        const formspreeResponse = await fetch(process.env.FORMSPREE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })

        if (formspreeResponse.ok) {
          result = {
            success: true,
            message: 'Message sent successfully via Formspree',
            serviceUsed: 'formspree'
          }
        }
      } catch (error) {
        console.error('Formspree failed:', error)
      }
    }

    if (!result) {
      throw new Error('Unable to send message')
    }

    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}