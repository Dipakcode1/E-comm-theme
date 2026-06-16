import { createFileRoute } from '@tanstack/react-router'

import { StarterHomePage } from '@/features/starter'

export const Route = createFileRoute('/')({
  component: StarterHomePage,
})
