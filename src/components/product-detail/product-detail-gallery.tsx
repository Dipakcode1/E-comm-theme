import { useState } from 'react'

import type { ProductDetail } from '@/features/storefront/data/product-detail'

type ProductDetailGalleryProps = {
  product: ProductDetail
}

export function ProductDetailGallery({ product }: ProductDetailGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const activeImage = product.images[activeImageIndex] ?? product.images[0]

  return (
    <div className="lg:col-span-7">
      <div className="group relative overflow-hidden rounded-lg bg-surface-container-low">
        <img
          src={activeImage?.src}
          alt={activeImage?.alt ?? product.name}
          className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge ? (
          <div className="absolute top-site-sm left-site-sm">
            <span className="rounded bg-primary px-site-sm py-site-base font-label-sm text-label-sm text-white uppercase">
              {product.badge}
            </span>
          </div>
        ) : null}
      </div>

      <div className="mt-site-sm flex gap-site-sm">
        {product.images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveImageIndex(index)}
            className={`h-24 w-24 overflow-hidden rounded-lg bg-surface-container-low p-site-base transition-opacity ${
              index === activeImageIndex
                ? 'border-2 border-primary'
                : 'hover:opacity-80'
            }`}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
