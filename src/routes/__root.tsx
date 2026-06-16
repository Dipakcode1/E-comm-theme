import { Outlet, createRootRoute } from '@tanstack/react-router'

import { StarterShell } from '@/components/layout/starter-shell'

function RootLayout() {
  return (
    <StarterShell>
      <Outlet />
    </StarterShell>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
})
