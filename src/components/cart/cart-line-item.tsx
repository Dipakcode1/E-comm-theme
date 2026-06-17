import { useState } from 'react'

import type { CartLineItem } from '@/features/storefront/data/cart'
import { formatCartMoney } from '@/features/storefront/data/cart'

import { MaterialIcon } from '@/components/common/material-icon'

type CartLineItemRowProps = {
  item: CartLineItem
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartLineItemRow({ item, onQuantityChange, onRemove }: CartLineItemRowProps) {
  const [quantityPulse, setQuantityPulse] = useState(false)

  function bumpQuantity(next: number) {
    onQuantityChange(item.id, next)
    setQuantityPulse(true)
    window.setTimeout(() => setQuantityPulse(false), 200)
  }

  return (
    <div className="group flex flex-col items-start gap-site-md border-b border-outline-variant py-site-md md:flex-row">
      <div className="aspect-square w-full overflow-hidden rounded bg-surface-container-low md:w-40">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex h-full flex-1 flex-col justify-between py-1">
        <div>
          <div className="flex items-start justify-between">
            <h3 className="font-headline-md text-headline-md text-on-surface">{item.name}</h3>
            <p className="font-body-md text-body-md font-bold text-on-surface">
              {formatCartMoney(item.price)}
            </p>
          </div>
          <p className="mt-1 font-label-md text-label-md text-secondary">{item.variant}</p>
        </div>

        <div className="mt-site-md flex items-center justify-between">
          <div className="flex items-center rounded border border-outline-variant bg-surface px-2">
            <button
              type="button"
              onClick={() => bumpQuantity(Math.max(1, item.quantity - 1))}
              className="p-2 text-secondary transition-colors hover:text-primary"
              aria-label="Decrease quantity"
            >
              <MaterialIcon name="remove" size={18} />
            </button>
            <span
              className={`px-4 font-body-md text-body-md transition-transform duration-200 ${
                quantityPulse ? 'scale-110 text-primary' : ''
              }`}
            >
              {item.quantity}
            </span>
            <button
              type="button"
              onClick={() => bumpQuantity(item.quantity + 1)}
              className="p-2 text-secondary transition-colors hover:text-primary"
              aria-label="Increase quantity"
            >
              <MaterialIcon name="add" size={18} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => onRemove(item.id)}
            className="flex items-center gap-1 font-label-md text-label-md text-secondary transition-colors hover:text-error"
          >
            <MaterialIcon name="delete" size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
