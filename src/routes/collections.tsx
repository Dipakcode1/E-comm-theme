import { createFileRoute } from '@tanstack/react-router'

import { CollectionShell } from '@/components'

export const Route = createFileRoute('/collections')({
  component: CollectionShell,
})
