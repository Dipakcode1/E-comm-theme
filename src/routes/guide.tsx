import { createFileRoute } from '@tanstack/react-router'

import { StarterGuidePage } from '@/features/starter'

export const Route = createFileRoute('/guide')({
  component: StarterGuidePage,
})
