import { StarterShell } from '@/components/layout/starter-shell'

import { StarterGuidePage } from './starter-guide-page'
import { StarterHome } from './starter-home'

/** Single-page starter when `wp init --router none` (no TanStack Router). */
export function StarterSinglePage() {
  return (
    <StarterShell showNav={false}>
      <StarterHome />
      <div className="mx-auto max-w-4xl px-6 sm:px-10">
        <hr className="my-10 border-[#cbd6e2]" />
      </div>
      <StarterGuidePage />
    </StarterShell>
  )
}
