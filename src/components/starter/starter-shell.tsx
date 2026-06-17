import type { ReactNode } from 'react'

import { StarterNav } from './starter-nav'

export function StarterShell({
  children,
  showNav = true,
}: {
  children: ReactNode
  showNav?: boolean
}) {
  return (
    <div className="min-h-screen bg-[#eaf0f6] text-[#33475b]">
      {showNav ? <StarterNav /> : null}
      {children}
    </div>
  )
}
