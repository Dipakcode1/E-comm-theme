/**
 * WoodsPortal REST base URL — baked from .env.stg / .env.prod at CDN build time.
 * Referenced from app-entry so verify-cdn-api-endpoint.mjs can refuse wrong-tier publishes.
 */
export function resolvePortalApiEndpoint(): string {
  const raw = import.meta.env.VITE_PUBLIC_REST_API_ENDPOINT
  if (typeof raw !== 'string' || !raw.trim()) {
    return ''
  }
  return raw.replace(/\/$/, '')
}
