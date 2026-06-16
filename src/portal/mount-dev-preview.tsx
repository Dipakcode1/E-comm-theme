import { mountGreenfieldDev } from '../../.wphs/.kit-bootstrap-greenfield.tsx'

import { App } from '@/app'

/** Local dev: module-config overlay + routed starter preview. */
export async function mountDevPreview() {
  await mountGreenfieldDev({ preview: <App /> })
}
