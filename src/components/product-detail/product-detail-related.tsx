import { Link } from '@tanstack/react-router'

import type { ProductDetail } from '@/features/storefront/data/product-detail'
import { formatProductPrice } from '@/features/storefront/data/product-detail'
import { ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

type ProductDetailRelatedProps = {
  product: ProductDetail
}

export function ProductDetailRelated({ product }: ProductDetailRelatedProps) {
  return (
    <section className="mt-site-xl">
      <div className="mb-site-lg flex items-end justify-between">
        <div>
          <h3 className="mb-site-base font-label-sm text-label-sm tracking-widest text-primary uppercase">
            Explore More
          </h3>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Related Products</h2>
        </div>
        <Link
          to={ROUTES.collections}
          className="group flex items-center gap-site-xs font-label-md text-on-surface transition-colors hover:text-primary"
        >
          View Collection
          <MaterialIcon
            name="arrow_forward"
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-site-md sm:grid-cols-2 lg:grid-cols-4">
        {product.relatedProducts.map((related) => (
          <Link
            key={related.id}
            to={ROUTES.productDetail(related.id)}
            className="group cursor-pointer"
          >
            <div className="relative mb-site-sm aspect-square overflow-hidden rounded-lg bg-surface-container-low">
              <img
                src={related.image}
                alt={related.imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-site-sm right-site-sm">
                <button
                  type="button"
                  onClick={(event) => event.preventDefault()}
                  className="rounded-full bg-white/80 p-site-xs shadow-sm backdrop-blur-md transition-colors hover:bg-white"
                  aria-label="Add to wishlist"
                >
                  <MaterialIcon name="favorite" size={20} />
                </button>
              </div>
            </div>
            <p className="mb-site-base font-label-sm tracking-wider text-secondary uppercase">
              {related.category}
            </p>
            <h4 className="font-body-md font-bold text-on-surface">{related.name}</h4>
            <p className="font-body-md text-on-surface-variant">
              {formatProductPrice(related.price)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
