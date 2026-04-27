export type LeadsMode = 'log' | 'hub'

const DEFAULT_HUB_API_URL = 'https://hub.jspd.cz/api/public/leads'

export function getPublicLeadsConfig() {
  const rawMode = process.env.LEADS_MODE?.trim().toLowerCase()

  return {
    mode: rawMode === 'hub' ? ('hub' as const) : ('log' as const),
    hubApiUrl: process.env.HUB_API_URL?.trim() || DEFAULT_HUB_API_URL,
  }
}
