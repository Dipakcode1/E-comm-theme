import { Link } from '@tanstack/react-router'

import { NAV_LINKS, ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

export function CartNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface">
      <div className="mx-auto flex w-full max-w-container-max items-center justify-between px-gutter py-4">
        <div className="flex items-center gap-site-lg">
          <Link
            to={ROUTES.home}
            className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
          >
            MINICOM
          </Link>
          <nav className="hidden items-center gap-site-md md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                className="font-label-md text-label-md text-secondary transition-colors duration-200 hover:text-primary"
              >
                {link.label === 'Shop' ? 'Shop All' : link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-site-sm">
          <Link
            to={ROUTES.login}
            className="p-2 text-secondary transition-colors hover:text-primary"
            aria-label="Account"
          >
            <MaterialIcon name="person" />
          </Link>
          <Link
            to={ROUTES.cart}
            className="relative p-2 font-semibold text-primary"
            aria-label="Shopping cart"
          >
            <MaterialIcon name="shopping_bag" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary" />
          </Link>
        </div>
      </div>
    </header>
  )
}
