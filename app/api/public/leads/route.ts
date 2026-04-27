import { NextRequest, NextResponse } from 'next/server'

type WebLeadPayload = {
  source?: string
  website_locale?: string
  service_slug?: string | null
  customer?: {
    name?: string
    company?: string | null
    email?: string
    phone?: string | null
  }
  name?: string
  company?: string | null
  email?: string
  phone?: string | null
  message?: string
  meta?: {
    page_url?: string | null
    referrer?: string | null
    submitted_at?: string | null
    user_agent?: string | null
  }
  page_url?: string | null
  referrer?: string | null
  user_agent?: string | null
  website?: string | null
}

function safeJsonParse(text: string) {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID()

  try {
    const body = (await request.json()) as WebLeadPayload

    const HUB_API_URL = process.env.HUB_API_URL
    const LEADS_MODE = process.env.LEADS_MODE

    console.log('[WEB LEADS] Incoming request', {
      requestId,
      method: request.method,
      leadsMode: LEADS_MODE,
      hubApiUrl: HUB_API_URL,
    })

    console.log('[WEB LEADS] Raw payload', {
      requestId,
      payload: body,
    })

    if (LEADS_MODE !== 'hub' && LEADS_MODE !== 'log') {
      console.error('[WEB LEADS] Invalid LEADS_MODE', {
        requestId,
        leadsMode: LEADS_MODE,
      })

      return NextResponse.json(
          {
            success: false,
            error: 'Invalid LEADS_MODE. Expected "hub" or "log".',
            requestId,
          },
          { status: 500 }
        )
    }

    if (LEADS_MODE === 'log') {
      console.log('[WEB LEADS] Log mode payload', {
        requestId,
        payload: body,
      })

      return NextResponse.json(
        {
          success: true,
          requestId,
          forwarded: false,
          mode: 'log',
        },
        { status: 200 }
      )
    }

    if (!HUB_API_URL) {
      console.error('[WEB LEADS] Missing HUB_API_URL', {
        requestId,
      })

      return NextResponse.json(
        {
          success: false,
          error: 'Missing HUB_API_URL environment variable.',
          requestId,
        },
        { status: 500 }
      )
    }

    const hubPayload = {
      source: body.source ?? 'web_contact_form',
      website_locale: body.website_locale ?? 'cs',
      service_slug: body.service_slug ?? null,
      customer: {
        name: body.customer?.name ?? body.name ?? '',
        company: body.customer?.company ?? body.company ?? null,
        email: body.customer?.email ?? body.email ?? '',
        phone: body.customer?.phone ?? body.phone ?? null,
      },
      message: body.message ?? '',
      meta: {
        page_url: body.meta?.page_url ?? body.page_url ?? null,
        referrer: body.meta?.referrer ?? body.referrer ?? null,
        submitted_at: body.meta?.submitted_at ?? new Date().toISOString(),
        user_agent:
          body.meta?.user_agent ??
          body.user_agent ??
          request.headers.get('user-agent') ??
          null,
      },
      website: body.website ?? '',
    }

    console.log('[WEB LEADS] HUB payload', {
      requestId,
      hubPayload,
    })

    let hubResponse: Response

    try {
      hubResponse = await fetch(HUB_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-request-id': requestId,
          'x-forwarded-from': 'jspd-web',
        },
        body: JSON.stringify(hubPayload),
        cache: 'no-store',
      })
    } catch (fetchError) {
      console.error('[WEB LEADS] Fetch to HUB failed', {
        requestId,
        hubApiUrl: HUB_API_URL,
        error:
          fetchError instanceof Error
            ? {
                message: fetchError.message,
                stack: fetchError.stack,
              }
            : fetchError,
      })

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to reach Hub API.',
          requestId,
        },
        { status: 502 }
      )
    }

    const responseText = await hubResponse.text()
    const responseJson = safeJsonParse(responseText)

    console.log('[WEB LEADS] HUB response', {
      requestId,
      status: hubResponse.status,
      ok: hubResponse.ok,
      body: responseJson ?? responseText,
    })

    if (!hubResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          error: 'Hub API returned an error.',
          hubStatus: hubResponse.status,
          hubBody: responseJson ?? responseText,
          requestId,
        },
        { status: hubResponse.status }
      )
    }

    if (!responseJson) {
      return NextResponse.json(
        {
          success: false,
          error: 'Hub API returned non-JSON response.',
          hubStatus: hubResponse.status,
          hubBody: responseText,
          requestId,
        },
        { status: 502 }
      )
    }

    const hubConfirmedSuccess =
      hubResponse.ok &&
      (responseJson?.success === true || responseJson?.ok === true)

    if (!hubConfirmedSuccess) {
      return NextResponse.json(
        {
          success: false,
          error: 'Hub API did not confirm success.',
          hubStatus: hubResponse.status,
          hubBody: responseJson,
          requestId,
        },
        { status: 502 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        requestId,
        forwarded: true,
        hub: responseJson,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('[WEB LEADS] Unhandled route error', {
      requestId,
      error:
        error instanceof Error
          ? {
              message: error.message,
              stack: error.stack,
            }
          : error,
    })

    return NextResponse.json(
      {
        success: false,
        error: 'Invalid request or internal server error.',
        requestId,
      },
      { status: 500 }
    )
  }
}
