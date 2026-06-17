import { StorefrontBentoSection } from './storefront-bento-section'
import { StorefrontFooter } from './storefront-footer'
import { StorefrontHero } from './storefront-hero'
import { StorefrontNavbar } from './storefront-navbar'
import { StorefrontProductGrid } from './storefront-product-grid'

/** Minicom storefront home layout — navbar, main sections, footer. */
export function StorefrontShell() {
  return (
    <div className="text-on-surface">
      <StorefrontNavbar activeLink="new-arrivals" />
      <main>
        <StorefrontHero />
        <StorefrontProductGrid />
        <StorefrontBentoSection />
      </main>
      <StorefrontFooter />
    </div>
  )
}
