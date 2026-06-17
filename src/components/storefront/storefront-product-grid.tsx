import { PRODUCTS } from '@/features/storefront/data/products'

import { MaterialIcon } from '@/components/common/material-icon'
import { StorefrontProductCard } from './storefront-product-card'

export function StorefrontProductGrid() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-site-xl">
      <div className="mb-site-lg flex items-center justify-between">
        <h2 className="font-headline-lg text-headline-lg text-on-surface">Selected Products</h2>
        <div className="flex gap-site-xs">
          <button
            type="button"
            className="rounded-lg border border-outline-variant p-site-xs transition-colors hover:bg-surface-container-low"
            aria-label="Filter products"
          >
            <MaterialIcon name="tune" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-site-md sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <StorefrontProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
