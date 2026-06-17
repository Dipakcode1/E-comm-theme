import { CheckoutFooter } from './checkout-footer'
import { CheckoutForm } from './checkout-form'
import { CheckoutNavbar } from './checkout-navbar'
import { CheckoutOrderSummary } from './checkout-order-summary'

/** Minicom checkout page. */
export function CheckoutShell() {
  return (
    <div className="bg-surface text-on-surface">
      <CheckoutNavbar />
      <main className="mx-auto max-w-container-max px-gutter py-site-xl">
        <div className="checkout-grid">
          <CheckoutForm />
          <CheckoutOrderSummary />
        </div>
      </main>
      <CheckoutFooter />
    </div>
  )
}
