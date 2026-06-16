/** Static WoodsCLI developer reference — shown on the wp init starter pages. */

export const WOODSCLI_COMMANDS = [
  {
    cmd: 'wp dev',
    desc: 'Local Vite preview + module-config overlay (this page). Alias: wp local.',
  },
  {
    cmd: 'wp doctor',
    desc: 'Validate Node, deps, .wphs/, index.html, fields.json, and HubSpot CLI setup.',
  },
  {
    cmd: 'wp build --tier prod',
    desc: 'Production build (CDN bundle and/or HubSpot module, per projectType).',
  },
  {
    cmd: 'wp deploy --tier prod',
    desc: 'Build, publish CDN artifacts, and upload the module to HubSpot.',
  },
  {
    cmd: 'wp setup',
    desc: 'Copy hubspot.config.yml, .env.*, and vite shims from kit templates.',
  },
  {
    cmd: 'wp migrate --yes',
    desc: 'Move legacy .dev/ or woodsportal.hs.json to .wphs/ + woodscli.json.',
  },
] as const

export const PROJECT_LAYOUT = [
  { path: 'woodscli.json', note: 'Project config — module paths, entries, dev.adapter' },
  { path: 'public/fields.json', note: 'HubSpot module field schema (Content / Styles tabs)' },
  { path: '.wphs/', note: 'Local workspace — config, fixtures, kit symlinks (gitignore most)' },
  { path: 'wphs.adapter.ts', note: 'Syncs module field values → window.__WPHS_DATA__ in dev' },
  { path: 'src/config/router.ts', note: 'Hash vs browser history — set by wp init (hash = client-frontend)' },
  { path: 'src/routes/', note: 'TanStack Router file routes (thin — delegate to features/)' },
  { path: 'src/app.tsx', note: 'RouterProvider shell — same role as woodsportal-client-frontend App' },
  { path: 'src/features/starter/', note: 'Starter demo UI — replace with your portal features' },
  { path: 'src/portal/', note: 'Dev vs production mount (mount-dev-preview, mount-portal)' },
  { path: 'src/integrations/', note: 'Third-party wiring (TanStack Router, SDK, etc.)' },
  { path: 'src/hubspot/', note: 'HubSpot runtime types and dev fixtures' },
  { path: 'src/main.tsx', note: 'Dev entry — mounts overlay + routed preview' },
  { path: 'hubspot.config.yml', note: 'HubSpot CLI portal + PAT (copy from .example)' },
] as const

export const DEV_WORKFLOW = [
  {
    title: '1 · Edit module fields',
    body: 'Press Ctrl+Shift+Z (Mac ⌃⇧Z) to open the HubSpot-style Content / Styles panel. Changes apply to the preview after you click Apply changes.',
  },
  {
    title: '2 · Iterate in src/',
    body: 'Add features under src/features/, shared UI under src/components/, and wire HubSpot data via wphs.adapter.ts and public/fields.json.',
  },
  {
    title: '3 · Connect HubSpot',
    body: 'Copy hubspot.config.yml.example → hubspot.config.yml, add a personal access key, then wp upload or wp watch for CMS sync.',
  },
  {
    title: '4 · Ship',
    body: 'Hybrid CDN: wp deploy. Monolith: wp build --hubspot-only then wp upload.',
  },
] as const

export const WOODSCLI_ABOUT = {
  package: '@woodsportal/hubspot-kit',
  tagline:
    'WoodsCLI is WoodsPortal’s dev kit for HubSpot CMS modules and themes — Vite local preview, fields.json editing, CDN + module build pipelines, and HubSpot CLI integration.',
  docsHint:
    'Full command list and guides ship in node_modules/@woodsportal/hubspot-kit/docs/ (CLI-REFERENCE.md, MODULES.md, HUBSPOT-CLI-SETUP.md).',
} as const

export const STARTER_FEATURES = [
  {
    title: 'Module fields',
    body: 'Content and Styles tabs mirror HubSpot’s module editor. Apply changes to refresh this preview.',
  },
  {
    title: 'Local persistence',
    body: 'Saved values land in .wphs/config/module-config.local.json — safe to gitignore.',
  },
  {
    title: 'Ship when ready',
    body: 'Run wp build and wp deploy when your module is ready for HubSpot.',
  },
] as const
