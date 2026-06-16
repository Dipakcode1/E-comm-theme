export type StarterPreviewValues = {
  title: string
  tagline: string
  showFeatureCards: boolean
  accentColor: string
  heroStyle: 'gradient' | 'minimal' | 'bold'
}

function normalizeHeroStyle(raw: unknown): StarterPreviewValues['heroStyle'] {
  const key = String(raw ?? 'gradient').toLowerCase()
  if (key === 'minimal' || key === 'bold') return key
  return 'gradient'
}

/** CONTENT-tab fields may live under a `content` group (fields.json) or flat legacy keys. */
function readContentField(module: Record<string, unknown>, key: string): unknown {
  const content = module.content
  if (content && typeof content === 'object' && key in (content as Record<string, unknown>)) {
    return (content as Record<string, unknown>)[key]
  }
  return module[key]
}

/** STYLE-tab fields may live under a `styles` group (fields.json) or flat legacy keys. */
function readStyleField(module: Record<string, unknown>, key: string): unknown {
  const styles = module.styles
  if (styles && typeof styles === 'object' && key in (styles as Record<string, unknown>)) {
    return (styles as Record<string, unknown>)[key]
  }
  return module[key]
}

export function mapStarterPreviewValues(module: Record<string, unknown>): StarterPreviewValues {
  const accent = readStyleField(module, 'accent_color') as { color?: string } | undefined

  return {
    title: String(readContentField(module, 'title') ?? 'My HubSpot Portal'),
    tagline: String(
      readContentField(module, 'tagline') ??
        'Customize this preview with Ctrl+Shift+Z, then replace this page with your portal app.',
    ),
    showFeatureCards: readContentField(module, 'show_feature_cards') !== false,
    accentColor: accent?.color ?? '#0091ae',
    heroStyle: normalizeHeroStyle(readStyleField(module, 'hero_style')),
  }
}

/** HubSpot module field blob on window (dev adapter + CMS runtime). */
export function readStarterModuleFields(): Record<string, unknown> {
  const win = window as Window & {
    __WPHS_DATA__?: Record<string, unknown>
    hubSpotData?: Record<string, unknown>
  }
  const blob = win.__WPHS_DATA__ ?? win.hubSpotData ?? {}
  const nested = blob.module
  if (nested && typeof nested === 'object') {
    return nested as Record<string, unknown>
  }
  return blob
}
