"use client"

import { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ContactFormSchema } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input" 
import { Textarea } from "@/components/ui/textarea"
import type { z } from "zod"

type ContactFormData = z.infer<typeof ContactFormSchema>

export function ContactForm() {
  const { 
    register, 
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema)
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string|null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true)
      setSubmitError(null)
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Submission failed')
      }

      setSubmitSuccess(true)
      reset()
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed')
    } finally {
      setIsLoading(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="text-center p-6 bg-green-50 rounded-lg">
        <p className="text-green-600 font-medium">
          {'Thank you for your message! I&lsquo;ll get back to you soon.'}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          {...register('name')}
          placeholder="Your name"
          disabled={isLoading}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          {...register('email')} 
          placeholder="Your email"
          type="email"
          disabled={isLoading}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Textarea
          {...register('message')}
          placeholder="Your message"
          rows={5}
          disabled={isLoading}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <p className="text-red-500 text-sm">{submitError}</p>
      )}

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}