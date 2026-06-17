import { Link } from '@tanstack/react-router'
import { useState } from 'react'

import {
  CHECKOUT_COUNTRIES,
  CHECKOUT_SHIPPING_METHODS,
  calculateCheckoutTotals,
  formatCheckoutMoney,
  type ShippingMethodId,
} from '@/features/storefront/data/checkout'
import { ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

const inputClassName =
  'checkout-input w-full border border-outline-variant bg-surface-container-lowest px-site-sm py-site-md transition-all duration-300 focus:border-on-surface'

type CheckoutPayButtonProps = {
  shippingMethod: ShippingMethodId
}

function CheckoutPayButton({ shippingMethod }: CheckoutPayButtonProps) {
  const { total } = calculateCheckoutTotals(shippingMethod)

  return (
    <div className="pt-site-md">
      <button
        type="button"
        className="w-full bg-primary-container py-site-lg font-body-md text-body-md font-bold tracking-wider text-on-primary uppercase transition-all duration-300 hover:bg-primary"
      >
        Pay Now — {formatCheckoutMoney(total)}
      </button>
      <p className="mt-site-sm flex items-center justify-center gap-site-xs text-center font-label-md text-label-md text-secondary">
        <MaterialIcon name="verified_user" size={16} />
        Your transaction is secure and encrypted
      </p>
    </div>
  )
}

export function CheckoutForm() {
  const [newsletter, setNewsletter] = useState(false)
  const [shippingMethod, setShippingMethod] = useState<ShippingMethodId>('standard')

  return (
    <div className="space-y-site-xl">
      <section>
        <div className="mb-site-md flex items-center justify-between">
          <h2 className="font-headline-md text-headline-md text-on-surface">Contact Information</h2>
          <span className="font-label-md text-label-md text-secondary">
            Already have an account?{' '}
            <Link to={ROUTES.login} className="text-primary underline">
              Log in
            </Link>
          </span>
        </div>
        <div className="space-y-site-sm">
          <input type="email" placeholder="Email address" className={inputClassName} />
          <div className="flex items-center gap-site-xs">
            <input
              id="newsletter"
              type="checkbox"
              checked={newsletter}
              onChange={(event) => setNewsletter(event.target.checked)}
              className="rounded-none border-outline-variant text-primary focus:ring-0"
            />
            <label htmlFor="newsletter" className="font-label-md text-label-md text-secondary">
              Email me with news and offers
            </label>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-site-md font-headline-md text-headline-md text-on-surface">
          Shipping Address
        </h2>
        <div className="grid grid-cols-1 gap-site-sm md:grid-cols-2">
          <input type="text" placeholder="First name" className={inputClassName} />
          <input type="text" placeholder="Last name" className={inputClassName} />
          <input type="text" placeholder="Address" className={`${inputClassName} md:col-span-2`} />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className={`${inputClassName} md:col-span-2`}
          />
          <input type="text" placeholder="City" className={inputClassName} />
          <select className={`${inputClassName} appearance-none text-secondary`} defaultValue="">
            {CHECKOUT_COUNTRIES.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          <input type="text" placeholder="State / Province" className={inputClassName} />
          <input type="text" placeholder="ZIP / Postal code" className={inputClassName} />
        </div>
      </section>

      <section>
        <h2 className="mb-site-md font-headline-md text-headline-md text-on-surface">
          Shipping Method
        </h2>
        <div className="border border-outline-variant bg-surface-container-lowest">
          {CHECKOUT_SHIPPING_METHODS.map((method, index) => (
            <label
              key={method.id}
              className={`group flex cursor-pointer items-center justify-between p-site-md transition-colors hover:bg-surface-container-low ${
                index < CHECKOUT_SHIPPING_METHODS.length - 1
                  ? 'border-b border-outline-variant'
                  : ''
              }`}
            >
              <div className="flex items-center gap-site-sm">
                <input
                  type="radio"
                  name="shipping"
                  checked={shippingMethod === method.id}
                  onChange={() => setShippingMethod(method.id)}
                  className="text-primary focus:ring-0"
                />
                <div>
                  <p className="font-body-md text-body-md text-on-surface">{method.label}</p>
                  <p className="font-label-md text-label-md text-secondary">{method.description}</p>
                </div>
              </div>
              <span className="font-label-md text-label-md font-bold text-on-surface">
                {method.priceLabel}
              </span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-site-md font-headline-md text-headline-md text-on-surface">Payment</h2>
        <div className="border border-outline-variant bg-surface-container-lowest">
          <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-low p-site-md">
            <span className="font-body-md text-body-md font-medium text-on-surface">Credit Card</span>
            <div className="flex gap-site-xs opacity-60">
              <MaterialIcon name="credit_card" size={20} />
            </div>
          </div>
          <div className="space-y-site-sm p-site-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Card number"
                className="checkout-input w-full border border-outline-variant bg-surface px-site-sm py-site-md transition-all focus:border-on-surface"
              />
              <MaterialIcon
                name="lock"
                className="absolute top-1/2 right-site-sm -translate-y-1/2 text-secondary"
              />
            </div>
            <div className="grid grid-cols-2 gap-site-sm">
              <input
                type="text"
                placeholder="Expiration date (MM/YY)"
                className="checkout-input border border-outline-variant bg-surface px-site-sm py-site-md transition-all focus:border-on-surface"
              />
              <input
                type="text"
                placeholder="Security code"
                className="checkout-input border border-outline-variant bg-surface px-site-sm py-site-md transition-all focus:border-on-surface"
              />
            </div>
            <input
              type="text"
              placeholder="Name on card"
              className="checkout-input w-full border border-outline-variant bg-surface px-site-sm py-site-md transition-all focus:border-on-surface"
            />
          </div>
        </div>
      </section>

      <CheckoutPayButton shippingMethod={shippingMethod} />
    </div>
  )
}
