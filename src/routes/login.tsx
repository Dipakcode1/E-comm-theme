import { createFileRoute } from '@tanstack/react-router'

import { LoginShell } from '@/components'

export const Route = createFileRoute('/login')({
  component: LoginShell,
})
