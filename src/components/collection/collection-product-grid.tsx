import { COLLECTION_PRODUCTS } from '@/features/storefront/data/collection'

import { CollectionProductCard } from './collection-product-card'
import { CollectionPagination } from './collection-pagination'

export function CollectionProductGrid() {
  return (
    <div className="grow">
      <div className="grid grid-cols-1 gap-x-site-md gap-y-site-lg sm:grid-cols-2 lg:grid-cols-3">
        {COLLECTION_PRODUCTS.map((product) => (
          <CollectionProductCard key={product.id} product={product} />
        ))}
      </div>
      <CollectionPagination />
    </div>
  )
}
