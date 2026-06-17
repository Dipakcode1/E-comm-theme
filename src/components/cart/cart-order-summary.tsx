import { Link } from '@tanstack/react-router'

import { calculateCartTotals, formatCartMoney, type CartLineItem } from '@/features/storefront/data/cart'
import { ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

type CartOrderSummaryProps = {
  items: CartLineItem[]
}

export function CartOrderSummary({ items }: CartOrderSummaryProps) {
  const { subtotal, shipping, tax, total } = calculateCartTotals(items)

  return (
    <div className="lg:col-span-4">
      <div className="sticky top-24 rounded bg-surface-container-low p-site-md shadow-sm">
        <h2 className="mb-site-md font-headline-md text-headline-md text-on-surface">Order Summary</h2>

        <div className="space-y-site-sm">
          <div className="flex justify-between font-body-md text-body-md">
            <span className="text-secondary">Subtotal</span>
            <span className="text-on-surface">{formatCartMoney(subtotal)}</span>
          </div>
          <div className="flex justify-between font-body-md text-body-md">
            <span className="text-secondary">Estimated Shipping</span>
            <span className="text-on-surface">{formatCartMoney(shipping)}</span>
          </div>
          <div className="flex justify-between font-body-md text-body-md">
            <span className="text-secondary">Estimated Tax</span>
            <span className="text-on-surface">{formatCartMoney(tax)}</span>
          </div>
          <div className="mt-site-sm border-t border-outline-variant pt-site-sm">
            <div className="flex items-center justify-between">
              <span className="font-headline-md text-headline-md text-on-surface">Total</span>
              <span className="font-headline-md text-headline-md text-primary">
                {formatCartMoney(total)}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-site-lg space-y-site-sm">
          <Link
            to={ROUTES.checkout}
            className="block w-full rounded bg-primary-container py-4 text-center font-label-md text-label-md tracking-wider text-on-primary uppercase transition-colors duration-300 hover:bg-primary"
          >
            Proceed to Checkout
          </Link>
          <p className="px-4 text-center font-label-sm text-label-sm text-secondary">
            Shipping and taxes calculated at checkout
          </p>
        </div>

        <div className="mt-site-md flex justify-center gap-site-sm opacity-50 grayscale transition-all hover:grayscale-0">
          <MaterialIcon name="credit_card" />
          <MaterialIcon name="payments" />
          <MaterialIcon name="account_balance" />
        </div>
      </div>

      <div className="mt-site-md flex items-start gap-site-sm rounded border border-outline-variant p-site-md">
        <MaterialIcon name="local_shipping" className="text-primary" />
        <div>
          <h4 className="font-label-md text-label-md text-on-surface">Free Priority Shipping</h4>
          <p className="font-label-sm text-label-sm text-secondary">
            On all orders over $2,000 for elite members.
          </p>
        </div>
      </div>
    </div>
  )
}
