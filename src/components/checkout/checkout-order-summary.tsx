import { useState } from 'react'

import {
  CHECKOUT_ITEMS,
  formatCheckoutMoney,
} from '@/features/storefront/data/checkout'

import { MaterialIcon } from '@/components/common/material-icon'

export function CheckoutOrderSummary() {
  const [discountCode, setDiscountCode] = useState('')
  const subtotal = CHECKOUT_ITEMS.reduce((sum, item) => sum + item.price, 0)

  return (
    <aside className="h-fit space-y-site-md lg:sticky lg:top-32">
      <div className="space-y-site-md border border-outline-variant/30 bg-surface-container-low p-site-md">
        <h3 className="border-b border-outline-variant pb-site-sm font-headline-md text-headline-md text-on-surface">
          Order Summary
        </h3>

        <div className="space-y-site-md">
          {CHECKOUT_ITEMS.map((item) => (
            <div key={item.id} className="flex gap-site-md">
              <div className="h-24 w-20 overflow-hidden bg-surface-container-highest">
                <img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between py-1">
                <div>
                  <p className="font-body-md text-body-md font-bold text-on-surface">{item.name}</p>
                  <p className="font-label-md text-label-md text-secondary">{item.variant}</p>
                </div>
                <p className="font-body-md text-body-md text-on-surface">
                  {formatCheckoutMoney(item.price)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-outline-variant pt-site-md">
          <div className="flex gap-site-xs">
            <input
              type="text"
              value={discountCode}
              onChange={(event) => setDiscountCode(event.target.value)}
              placeholder="Gift card or discount code"
              className="checkout-input flex-1 border border-outline-variant bg-surface px-site-sm py-site-xs text-sm transition-all focus:border-on-surface"
            />
            <button
              type="button"
              className="bg-secondary px-site-md font-label-md text-label-md text-on-secondary uppercase"
            >
              Apply
            </button>
          </div>
        </div>

        <div className="space-y-site-xs pt-site-md">
          <div className="flex justify-between font-label-md text-label-md text-secondary">
            <span>Subtotal</span>
            <span>{formatCheckoutMoney(subtotal)}</span>
          </div>
          <div className="flex justify-between font-label-md text-label-md text-secondary">
            <span>Shipping</span>
            <span>Calculated at next step</span>
          </div>
          <div className="flex justify-between font-label-md text-label-md text-secondary">
            <span>Estimated Taxes</span>
            <span>$0.00</span>
          </div>
          <div className="mt-site-sm flex justify-between border-t border-outline-variant pt-site-sm font-headline-md text-headline-md text-on-surface">
            <span>Total</span>
            <div className="flex items-center gap-site-xs">
              <span className="font-label-md text-label-md font-normal text-secondary">USD</span>
              <span>{formatCheckoutMoney(subtotal)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-site-md border border-outline-variant bg-surface p-site-md">
        <MaterialIcon name="local_shipping" className="text-primary" />
        <div>
          <p className="font-label-md text-label-md font-bold text-on-surface">Sustainable Shipping</p>
          <p className="font-label-sm text-label-sm text-secondary">
            We use 100% recycled packaging and carbon-neutral delivery methods for every order.
          </p>
        </div>
      </div>
    </aside>
  )
}
