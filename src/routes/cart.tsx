import { createFileRoute } from '@tanstack/react-router'

import { CartShell } from '@/components'

export const Route = createFileRoute('/cart')({
  component: CartShell,
})
