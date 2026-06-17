import { createFileRoute } from '@tanstack/react-router'

import { StorefrontShell } from '@/components'

export const Route = createFileRoute('/')({
  component: StorefrontShell,
})
