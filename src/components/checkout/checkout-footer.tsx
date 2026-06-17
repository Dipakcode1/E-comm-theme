import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/config/routes'

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: ['New Arrivals', 'Best Sellers', 'Collections'],
  },
  {
    title: 'Support',
    links: ['Shipping & Returns', 'Privacy Policy', 'Terms of Service', 'Contact'],
  },
] as const

export function CheckoutFooter() {
  return (
    <footer className="mt-site-xl border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-start justify-between gap-site-md px-gutter py-site-xl md:flex-row">
        <div className="space-y-site-sm">
          <Link
            to={ROUTES.home}
            className="font-headline-lg text-headline-lg font-bold text-on-surface"
          >
            MINICOM
          </Link>
          <p className="max-w-xs font-label-md text-label-md text-secondary">
            Curating essential items for the modern lifestyle. Quality over quantity, always.
          </p>
        </div>

        <div className="flex flex-wrap gap-site-xl">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="space-y-site-sm">
              <p className="font-label-md text-label-md font-bold tracking-widest text-on-surface uppercase">
                {column.title}
              </p>
              <ul className="space-y-site-xs font-label-md text-label-md text-secondary">
                {column.links.map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="decoration-primary underline-offset-4 hover:underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-container-max border-t border-outline-variant/30 px-gutter py-site-md">
        <p className="text-center font-label-md text-label-md text-secondary md:text-left">
          © {new Date().getFullYear()} MINICOM. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
