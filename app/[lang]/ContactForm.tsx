'use client'

import { useState } from 'react'
import { buildLeadPayload, isValidEmail } from '@/lib/leads'

type ContactFormProps = {
  lang: string
  serviceSlug: string | null
  t: {
    nameLabel: string
    companyLabel: string
    emailFieldLabel: string
    phoneFieldLabel: string
    messageLabel: string
    submit: string
    sending: string
    successMessage: string
    genericError: string
    nameRequired: string
    emailRequired: string
    emailInvalid: string
    messageRequired: string
  }
}

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  message: string
  website: string
}

export default function ContactForm({ lang, serviceSlug, t }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    website: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }))
    setSuccess('')
    setError('')
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!form.name.trim()) {
      setError(t.nameRequired)
      return
    }

    if (!form.email.trim()) {
      setError(t.emailRequired)
      return
    }

    if (!isValidEmail(form.email.trim())) {
      setError(t.emailInvalid)
      return
    }

    if (!form.message.trim()) {
      setError(t.messageRequired)
      return
    }

    setLoading(true)
    setSuccess('')
    setError('')

    try {
      const payload = buildLeadPayload({
        locale: lang,
        serviceSlug,
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
        website: form.website,
        meta: {
          pageUrl: window.location.href,
          referrer: document.referrer || null,
          submittedAt: new Date().toISOString(),
          userAgent: navigator.userAgent,
        },
      })

      const res = await fetch('/api/public/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await res.json()

      const isSuccess =
        res.ok && (data?.success === true || data?.ok === true)

      if (!isSuccess) {
        throw new Error(data?.error || data?.message || t.genericError)
      }

      setSuccess(t.successMessage)
      setForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        website: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : t.genericError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          width: 1,
          height: 1,
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField('website', e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="formRow">
        <div>
          <label htmlFor="name">{t.nameLabel}</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div>
          <label htmlFor="company">{t.companyLabel}</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={(e) => updateField('company', e.target.value)}
            disabled={loading}
          />
        </div>
      </div>

      <div className="formRow">
        <div>
          <label htmlFor="email">{t.emailFieldLabel}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            disabled={loading}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">{t.phoneFieldLabel}</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message">{t.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          disabled={loading}
          required
        />
      </div>

      {success ? <p style={{ color: 'green', marginTop: 12 }}>{success}</p> : null}
      {error ? <p style={{ color: 'red', marginTop: 12 }}>{error}</p> : null}

      <button type="submit" className="btnPrimary" disabled={loading}>
        {loading ? t.sending : t.submit}
      </button>
    </form>
  )
}
