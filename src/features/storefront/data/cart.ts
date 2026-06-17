import { DEMO_PRODUCTS, demoProductImage } from './demo-products'

export type CartLineItem = {
  id: string
  name: string
  price: number
  variant: string
  image: string
  imageAlt: string
  quantity: number
}

export const CART_SHIPPING = 15
export const CART_TAX_RATE = 0.08

/** Demo cart items — first two catalog products. */
export const INITIAL_CART_ITEMS: CartLineItem[] = DEMO_PRODUCTS.slice(0, 2).map((demo) => ({
  id: demo.id,
  name: demo.name,
  price: demo.price,
  variant: demo.variant,
  image: demoProductImage(demo.id, 500, 500),
  imageAlt: demo.imageAlt,
  quantity: 1,
}))

export function formatCartMoney(amount: number) {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function calculateCartTotals(items: CartLineItem[]) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = items.length > 0 ? CART_SHIPPING : 0
  const tax = subtotal * CART_TAX_RATE
  const total = subtotal + shipping + tax

  return { subtotal, shipping, tax, total }
}
