import { createFileRoute } from '@tanstack/react-router'

import { CheckoutShell } from '@/components'

export const Route = createFileRoute('/checkout')({
  component: CheckoutShell,
})
