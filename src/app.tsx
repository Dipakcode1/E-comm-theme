import { RouterProvider } from '@tanstack/react-router'

import { router } from '@/integrations/tanstack-router/router'

/** Root app shell — same pattern as woodsportal-client-frontend `App`. */
export function App() {
  return <RouterProvider router={router} />
}
