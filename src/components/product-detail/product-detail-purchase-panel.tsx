import { useState } from 'react'

import type { ProductDetail } from '@/features/storefront/data/product-detail'
import { formatProductPrice } from '@/features/storefront/data/product-detail'

import { MaterialIcon } from '@/components/common/material-icon'

type ProductDetailPurchasePanelProps = {
  product: ProductDetail
}

function ProductRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5

  return (
    <div className="mb-site-md flex items-center gap-site-xs">
      <div className="flex text-primary">
        {Array.from({ length: fullStars }).map((_, index) => (
          <MaterialIcon key={`full-${index}`} name="star" filled />
        ))}
        {hasHalf ? <MaterialIcon name="star_half" /> : null}
      </div>
      <span className="font-label-md text-secondary">({reviewCount} Reviews)</span>
    </div>
  )
}

export function ProductDetailPurchasePanel({ product }: ProductDetailPurchasePanelProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.id ?? '')
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="flex flex-col lg:col-span-5">
      <div className="mb-site-sm">
        <h1 className="mb-site-base font-display-lg text-display-lg text-on-surface">{product.name}</h1>
        <ProductRating rating={product.rating} reviewCount={product.reviewCount} />
        <p className="font-headline-lg text-headline-lg text-primary">
          {formatProductPrice(product.price)}
        </p>
      </div>

      <div className="my-site-lg h-px w-full bg-outline-variant" />

      <div className="mb-site-lg">
        <h3 className="mb-site-sm font-label-sm text-label-sm tracking-widest text-secondary uppercase">
          Color Selection
        </h3>
        <div className="flex gap-site-md">
          {product.colors.map((color) => {
            const active = selectedColor === color.id
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => setSelectedColor(color.id)}
                className="group flex flex-col items-center gap-site-xs"
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 p-site-base transition-colors ${
                    active ? 'border-primary' : 'border-transparent hover:border-outline-variant'
                  }`}
                >
                  <div className={`h-full w-full rounded-full ${color.swatchClassName}`} />
                </div>
                <span
                  className={`font-label-sm ${active ? 'text-on-surface' : 'text-secondary group-hover:text-on-surface'}`}
                >
                  {color.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mb-site-xl flex flex-col gap-site-md">
        <div className="flex items-center gap-site-md">
          <div className="flex items-center rounded-lg border border-outline bg-white px-site-sm py-site-xs">
            <button
              type="button"
              onClick={() => setQuantity((value) => Math.max(1, value - 1))}
              className="text-on-surface-variant transition-colors hover:text-primary"
              aria-label="Decrease quantity"
            >
              <MaterialIcon name="remove" />
            </button>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(event) =>
                setQuantity(Math.max(1, Number(event.target.value) || 1))
              }
              className="w-12 border-none text-center font-body-md focus:ring-0"
            />
            <button
              type="button"
              onClick={() => setQuantity((value) => value + 1)}
              className="text-on-surface-variant transition-colors hover:text-primary"
              aria-label="Increase quantity"
            >
              <MaterialIcon name="add" />
            </button>
          </div>
          <button
            type="button"
            className="flex flex-1 items-center justify-center gap-site-sm rounded-lg bg-primary py-site-lg font-label-md text-white transition-all hover:bg-surface-tint active:scale-[0.98]"
          >
            <MaterialIcon name="shopping_bag" />
            Add to Cart
          </button>
        </div>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-site-sm rounded-lg border border-on-surface py-site-md font-label-md text-on-surface transition-all hover:bg-surface-container"
        >
          <MaterialIcon name="favorite" />
          Save to Wishlist
        </button>
      </div>

      <div className="grid grid-cols-2 gap-site-sm">
        <div className="flex items-center gap-site-sm rounded-lg bg-surface-container-low p-site-md">
          <MaterialIcon name="local_shipping" className="text-primary" />
          <div className="flex flex-col">
            <span className="font-label-sm text-on-surface">Free Shipping</span>
            <span className="text-[10px] text-secondary">Orders over $150</span>
          </div>
        </div>
        <div className="flex items-center gap-site-sm rounded-lg bg-surface-container-low p-site-md">
          <MaterialIcon name="verified_user" className="text-primary" />
          <div className="flex flex-col">
            <span className="font-label-sm text-on-surface">2 Year Warranty</span>
            <span className="text-[10px] text-secondary">Manufacturer guarantee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
