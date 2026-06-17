/** Route paths — keep in sync with `src/routes/` file routes. */
export const ROUTES = {
  home: '/',
  collections: '/collections',
  cart: '/cart',
  checkout: '/checkout',
  login: '/login',
  guide: '/guide',
  productDetail: (productId: string) => `/products/${productId}`,
} as const

export type NavLinkId = 'shop' | 'collections' | 'new-arrivals'

export const NAV_LINKS: ReadonlyArray<{
  id: NavLinkId
  label: string
  to: string
}> = [
  { id: 'shop', label: 'Shop', to: ROUTES.home },
  { id: 'collections', label: 'Collections', to: ROUTES.collections },
  { id: 'new-arrivals', label: 'New Arrivals', to: ROUTES.home },
]
