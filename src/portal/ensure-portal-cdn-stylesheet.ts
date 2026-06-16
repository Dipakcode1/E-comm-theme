declare global {
  interface Window {
    hubSpotData?: {
      assetBaseUrl?: string
      buildId?: string
      isInEditor?: boolean
    }
    hsInEditor?: boolean
  }
}

/** Resolve app.{buildId}.css on the CDN mirror (jsDelivr / custom base). */
export function portalCdnStylesheetUrl(): string | null {
  const base = window.hubSpotData?.assetBaseUrl?.replace(/\/$/, '')
  const buildId = window.hubSpotData?.buildId?.trim()
  if (!base || !buildId) {
    return null
  }
  return `${base}/app.${buildId}.css`
}

function isHubSpotCmsEditor(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return (
    window.hubSpotData?.isInEditor === true ||
    window.hsInEditor === true
  )
}

/** True when HubSpot already loaded merged module.css with dw-prefixed portal utilities. */
export function hasPrefixedPortalStylesLoaded(): boolean {
  if (typeof document === 'undefined') {
    return false
  }

  for (const link of document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')) {
    if (/module\.css/i.test(link.href)) {
      return true
    }
  }

  try {
    for (const sheet of document.styleSheets) {
      try {
        const rules = sheet.cssRules
        for (let i = 0; i < Math.min(rules.length, 100); i++) {
          const text = rules[i]?.cssText ?? ''
          if (text.includes('dw\\:') || text.includes('.dw:')) {
            return true
          }
        }
      } catch {
        // Cross-origin stylesheets are not readable.
      }
    }
  } catch {
    // ignore
  }

  return false
}

/** Editor-only fallback when module.css did not load (external CDN CSS blocked in iframe). */
export function needsPortalCdnStylesheetFallback(): boolean {
  if (!isHubSpotCmsEditor()) {
    return false
  }
  return !hasPrefixedPortalStylesLoaded()
}

function waitForStylesheet(link: HTMLLinkElement): Promise<void> {
  if (link.sheet) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    link.addEventListener('load', () => resolve(), { once: true })
    link.addEventListener('error', () => resolve(), { once: true })
  })
}

/** Inject CDN app.{buildId}.css when HubSpot editor preview skipped module.css. */
export async function ensurePortalCdnStylesheet(): Promise<void> {
  const href = portalCdnStylesheetUrl()
  if (!href) {
    return
  }

  const marker = 'data-portal-cdn-css'
  const existing = document.querySelector<HTMLLinkElement>(`link[${marker}]`)
  if (existing) {
    if (existing.href === href) {
      await waitForStylesheet(existing)
      return
    }
    existing.remove()
  }

  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = href
  link.crossOrigin = 'anonymous'
  link.setAttribute(marker, 'true')
  document.head.appendChild(link)
  await waitForStylesheet(link)
}

export async function ensurePortalCdnStylesheetIfNeeded(): Promise<void> {
  if (!needsPortalCdnStylesheetFallback()) {
    return
  }
  await ensurePortalCdnStylesheet()
}
