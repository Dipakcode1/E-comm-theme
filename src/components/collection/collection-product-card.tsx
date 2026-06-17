import { Link } from '@tanstack/react-router'

import type { CollectionProduct } from '@/features/storefront/data/collection'
import { ROUTES } from '@/config/routes'

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`
}

type CollectionProductCardProps = {
  product: CollectionProduct
}

export function CollectionProductCard({ product }: CollectionProductCardProps) {
  return (
    <Link
      to={ROUTES.productDetail(product.id)}
      className="collection-product-card group block cursor-pointer"
    >
      <div className="relative mb-site-sm aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="collection-product-image h-full w-full object-cover transition-transform duration-500"
        />
        {product.badge === 'new' ? (
          <div className="absolute top-site-sm left-site-sm">
            <span className="border border-outline-variant bg-surface px-site-xs py-1 font-label-sm text-[10px] tracking-widest text-on-surface uppercase">
              New
            </span>
          </div>
        ) : null}
        {product.badge === 'sale' ? (
          <div className="absolute top-site-sm left-site-sm">
            <span className="bg-primary px-site-xs py-1 font-label-sm text-[10px] tracking-widest text-on-primary uppercase">
              Sale
            </span>
          </div>
        ) : null}
        <div className="collection-quick-view absolute bottom-site-sm left-1/2 w-[80%] -translate-x-1/2">
          <span className="block w-full border border-outline-variant bg-surface py-site-sm text-center font-label-md text-label-md text-on-surface shadow-sm transition-colors group-hover:border-primary">
            Quick View
          </span>
        </div>
      </div>

      <div className="space-y-1">
        <span className="font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase">
          {product.category}
        </span>
        <h3 className="font-body-md text-body-md font-bold text-on-surface transition-colors group-hover:text-primary">
          {product.name}
        </h3>
        {product.compareAtPrice ? (
          <p className="font-body-md text-body-md font-bold text-primary">
            <span className="mr-site-xs font-normal text-on-surface-variant line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
            {formatPrice(product.price)}
          </p>
        ) : (
          <p className="font-body-md text-body-md font-bold text-primary">
            {formatPrice(product.price)}
          </p>
        )}
      </div>
    </Link>
  )
}
