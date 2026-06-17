import { useState } from 'react'

import { INITIAL_CART_ITEMS, type CartLineItem } from '@/features/storefront/data/cart'

import { CartFooter } from './cart-footer'
import { CartHeader } from './cart-header'
import { CartItemsList } from './cart-items-list'
import { CartNavbar } from './cart-navbar'
import { CartOrderSummary } from './cart-order-summary'

/** Minicom shopping cart page. */
export function CartShell() {
  const [items, setItems] = useState<CartLineItem[]>(INITIAL_CART_ITEMS)

  function handleQuantityChange(id: string, quantity: number) {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item)),
    )
  }

  function handleRemove(id: string) {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased">
      <CartNavbar />
      <main className="mx-auto max-w-container-max px-gutter py-site-xl">
        <CartHeader />
        <div className="grid grid-cols-1 gap-site-xl lg:grid-cols-12">
          <CartItemsList
            items={items}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
          <CartOrderSummary items={items} />
        </div>
      </main>
      <CartFooter />
    </div>
  )
}
