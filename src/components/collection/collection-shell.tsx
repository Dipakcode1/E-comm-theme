import { CollectionFilters } from './collection-filters'
import { CollectionFooter } from './collection-footer'
import { CollectionHeader } from './collection-header'
import { CollectionProductGrid } from './collection-product-grid'
import { StorefrontNavbar } from '@/components/storefront/storefront-navbar'

/** Our Collection page — filters sidebar, product grid, pagination. */
export function CollectionShell() {
  return (
    <div className="overflow-x-hidden bg-surface font-body-md text-on-surface antialiased">
      <StorefrontNavbar activeLink="collections" />
      <main className="mx-auto mb-site-xl mt-site-lg max-w-container-max px-gutter">
        <CollectionHeader />
        <div className="flex flex-col gap-site-lg md:flex-row">
          <CollectionFilters />
          <CollectionProductGrid />
        </div>
      </main>
      <CollectionFooter />
    </div>
  )
}
