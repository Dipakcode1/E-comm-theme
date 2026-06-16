import {
  createBrowserHistory,
  createHashHistory,
  createRouter,
} from '@tanstack/react-router'

import { ROUTER_HISTORY } from '@/config/router'
import { routeTree } from '@/routeTree.gen'

const history = ROUTER_HISTORY === 'hash' ? createHashHistory() : createBrowserHistory()

export const router = createRouter({
  routeTree,
  history,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
