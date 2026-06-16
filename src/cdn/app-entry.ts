/**
 * CDN application chunk — mounts after vendor.js (HubSpot require_js order).
 *
 * Build-time: main.prod.css → app.{buildId}.css (merged into module.css at post-build).
 * Runtime: skip JS CSS imports — HubSpot serves module.css on published pages.
 */
import '@/assets/css/main.prod.css'

import { resolvePortalApiEndpoint } from '@/portal/api-endpoint'
import { ensurePortalCdnStylesheetIfNeeded } from '@/portal/ensure-portal-cdn-stylesheet'
import { mountPortal } from '@/portal/mount-portal'

declare const __PORTAL_BUILD_ID__: string | undefined

declare global {
  interface Window {
    WoodsPortal?: {
      mount: typeof mountPortal
      version: string
      apiEndpoint: string
    }
  }
}

const buildId =
  typeof __PORTAL_BUILD_ID__ !== 'undefined' ? String(__PORTAL_BUILD_ID__) : 'dev'

window.WoodsPortal = {
  mount: mountPortal,
  version: buildId,
  apiEndpoint: resolvePortalApiEndpoint(),
}

async function autoMount() {
  if (!document.getElementById('app')) {
    return
  }
  await ensurePortalCdnStylesheetIfNeeded()
  await mountPortal({ skipRuntimeCss: true })
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    void autoMount()
  })
} else {
  void autoMount()
}
