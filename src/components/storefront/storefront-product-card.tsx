import { Link } from '@tanstack/react-router'

import type { Product } from '@/features/storefront/data/products'
import { ROUTES } from '@/config/routes'

function formatPrice(amount: number) {
  return `$${amount.toFixed(2)}`
}

type StorefrontProductCardProps = {
  product: Product
}

export function StorefrontProductCard({ product }: StorefrontProductCardProps) {
  return (
    <div className="group">
      <Link to={ROUTES.productDetail(product.id)} className="block cursor-pointer">
        <div className="product-image-container relative mb-site-sm aspect-square overflow-hidden rounded-lg bg-surface-container-low transition-custom">
          <img
            src={product.image}
            alt={product.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500"
          />
          {product.badge === 'new' ? (
            <div className="absolute top-site-sm left-site-sm rounded bg-surface-container-highest px-site-xs py-[2px] text-[10px] font-bold tracking-tighter text-on-surface uppercase">
              New
            </div>
          ) : null}
          {product.badge === 'sale' ? (
            <div className="absolute top-site-sm left-site-sm rounded bg-tertiary-container px-site-xs py-[2px] text-[10px] font-bold tracking-tighter text-on-tertiary-container uppercase">
              Sale
            </div>
          ) : null}
        </div>

        <div className="space-y-site-xs">
          <div className="flex items-start justify-between">
            <div>
              <p className="font-label-sm text-label-sm text-secondary uppercase">{product.category}</p>
              <h3 className="font-body-md text-body-md font-bold text-on-surface">{product.name}</h3>
            </div>
            {product.compareAtPrice ? (
              <div className="text-right">
                <p className="font-body-md text-body-md font-bold text-primary">
                  {formatPrice(product.price)}
                </p>
                <p className="text-[10px] text-secondary line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              </div>
            ) : (
              <p className="font-body-md text-body-md font-bold text-primary">
                {formatPrice(product.price)}
              </p>
            )}
          </div>
        </div>
      </Link>

      <button
        type="button"
        className="mt-site-xs w-full rounded-lg border border-on-background py-site-sm font-label-md text-label-md transition-all group-hover:bg-on-background group-hover:text-surface"
      >
        Add to Cart
      </button>
    </div>
  )
}
