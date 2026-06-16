import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

if (!process.env.WP_HS_PROJECT_ROOT?.trim()) {
  process.env.WP_HS_PROJECT_ROOT = resolve(dirname(fileURLToPath(import.meta.url)))
}

export { default } from '@woodsportal/hubspot-kit/vite/vite.config.monolith.mjs'
