import { Link } from '@tanstack/react-router'

import type { CartLineItem } from '@/features/storefront/data/cart'
import { ROUTES } from '@/config/routes'

import { CartLineItemRow } from './cart-line-item'
import { MaterialIcon } from '@/components/common/material-icon'

type CartItemsListProps = {
  items: CartLineItem[]
  onQuantityChange: (id: string, quantity: number) => void
  onRemove: (id: string) => void
}

export function CartItemsList({ items, onQuantityChange, onRemove }: CartItemsListProps) {
  return (
    <div className="space-y-site-md lg:col-span-8">
      {items.map((item) => (
        <CartLineItemRow
          key={item.id}
          item={item}
          onQuantityChange={onQuantityChange}
          onRemove={onRemove}
        />
      ))}

      <div className="pt-site-lg">
        <Link
          to={ROUTES.collections}
          className="inline-flex items-center gap-site-xs font-label-md text-label-md text-primary underline-offset-4 hover:underline"
        >
          <MaterialIcon name="arrow_back" size={20} />
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
