import { DEMO_PRODUCTS, demoProductImage } from './demo-products'

export type CheckoutLineItem = {
  id: string
  name: string
  variant: string
  price: number
  image: string
  imageAlt: string
}

export type ShippingMethodId = 'standard' | 'express'

export const CHECKOUT_COUNTRIES = ['United States', 'Canada', 'United Kingdom'] as const

export const CHECKOUT_SHIPPING_METHODS: ReadonlyArray<{
  id: ShippingMethodId
  label: string
  description: string
  price: number
  priceLabel: string
}> = [
  {
    id: 'standard',
    label: 'Standard Shipping',
    description: '3-5 business days',
    price: 0,
    priceLabel: 'FREE',
  },
  {
    id: 'express',
    label: 'Express Shipping',
    description: '1-2 business days',
    price: 15,
    priceLabel: '$15.00',
  },
]

/** Demo checkout summary — same two catalog products as the cart. */
export const CHECKOUT_ITEMS: CheckoutLineItem[] = DEMO_PRODUCTS.slice(0, 2).map((demo) => ({
  id: demo.id,
  name: demo.name,
  variant: demo.variant,
  price: demo.price,
  image: demoProductImage(demo.id, 400, 480),
  imageAlt: demo.imageAlt,
}))

export function formatCheckoutMoney(amount: number) {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
}

export function calculateCheckoutTotals(shippingMethod: ShippingMethodId) {
  const subtotal = CHECKOUT_ITEMS.reduce((sum, item) => sum + item.price, 0)
  const shipping =
    CHECKOUT_SHIPPING_METHODS.find((method) => method.id === shippingMethod)?.price ?? 0
  const tax = 0
  const total = subtotal + shipping + tax

  return { subtotal, shipping, tax, total }
}
