export type LeadPayload = {
  source: 'jspd-cleaning-web'
  website_locale: string
  service_slug: string | null
  customer: {
    name: string
    company: string | null
    email: string
    phone: string | null
  }
  message: string
  meta: {
    page_url: string | null
    referrer: string | null
    submitted_at: string
    user_agent: string | null
  }
  website: string
}

export type LeadPayloadInput = {
  locale: string
  serviceSlug?: string | null
  name: string
  company: string
  email: string
  phone: string
  message: string
  website?: string
  meta?: {
    pageUrl?: string | null
    referrer?: string | null
    submittedAt?: string
    userAgent?: string | null
  }
}

export function buildLeadPayload(input: LeadPayloadInput): LeadPayload {
  return {
    source: 'jspd-cleaning-web',
    website_locale: input.locale.trim(),
    service_slug: input.serviceSlug?.trim() || null,
    customer: {
      name: input.name.trim(),
      company: input.company.trim() || null,
      email: input.email.trim(),
      phone: input.phone.trim() || null,
    },
    message: input.message.trim(),
    meta: {
      page_url: input.meta?.pageUrl?.trim() || null,
      referrer: input.meta?.referrer?.trim() || null,
      submitted_at: input.meta?.submittedAt?.trim() || new Date().toISOString(),
      user_agent: input.meta?.userAgent?.trim() || null,
    },
    website: input.website?.trim() || '',
  }
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function validateLeadPayload(payload: LeadPayload): string | null {
  if (!payload.website_locale.trim()) {
    return 'Missing website locale.'
  }

  if (!payload.customer.name.trim()) {
    return 'Missing customer name.'
  }

  if (!payload.customer.email.trim()) {
    return 'Missing customer email.'
  }

  if (!isValidEmail(payload.customer.email.trim())) {
    return 'Invalid customer email.'
  }

  if (!payload.message.trim()) {
    return 'Missing message.'
  }

  if (!payload.meta.submitted_at.trim()) {
    return 'Missing submission timestamp.'
  }

  return null
}
