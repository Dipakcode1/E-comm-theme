import { MODULE_CONFIG_CHANGED } from '@/dev/module-config/schema/types'
import { getModuleFieldValues } from '@/dev/module-config/runtime/module-config-runtime'

import {
  mapStarterPreviewValues,
  type StarterPreviewValues,
} from './starter-preview-values'

/** Dev-only: refresh when module-config overlay applies changes. */
export function subscribeStarterPreview(
  onChange: (values: StarterPreviewValues) => void,
): () => void {
  const refresh = () => onChange(mapStarterPreviewValues(getModuleFieldValues()))

  refresh()
  window.addEventListener(MODULE_CONFIG_CHANGED, refresh)
  return () => window.removeEventListener(MODULE_CONFIG_CHANGED, refresh)
}
