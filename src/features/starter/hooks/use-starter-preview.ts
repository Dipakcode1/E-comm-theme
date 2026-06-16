import { useEffect, useState } from 'react'

import {
  mapStarterPreviewValues,
  readStarterModuleFields,
  type StarterPreviewValues,
} from './starter-preview-values'

/** Module field values for the starter preview (dev overlay + production window data). */
export function useStarterPreview(): StarterPreviewValues {
  const [values, setValues] = useState(() => mapStarterPreviewValues(readStarterModuleFields()))

  useEffect(() => {
    if (!import.meta.env.DEV) {
      return
    }

    let unsubscribe = () => {}

    void import('./use-starter-preview.dev').then(({ subscribeStarterPreview }) => {
      unsubscribe = subscribeStarterPreview(setValues)
    })

    return () => unsubscribe()
  }, [])

  return values
}

export type { StarterPreviewValues } from './starter-preview-values'
