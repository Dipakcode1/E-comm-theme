/**
 * Thin HubSpot module.js bootstrap — JS app loads from CDN via require_js in module.html.
 *
 * CSS imports are extracted to module.css by the HubSpot Vite build (same pattern as
 * digitalwoods.io-woodsportal-client-frontend). HubSpot CMS editor does not reliably
 * load external jsDelivr stylesheets from module.html.
 */
import '@/assets/css/main.prod.css'

declare global {
  interface Window {
    WoodsPortalHubSpotBootstrap?: { ready: true }
  }
}

window.WoodsPortalHubSpotBootstrap = { ready: true }
