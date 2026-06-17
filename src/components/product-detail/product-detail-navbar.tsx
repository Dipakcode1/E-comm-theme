import { Link } from '@tanstack/react-router'

import { NAV_LINKS, ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

export function ProductDetailNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-outline-variant bg-surface">
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-gutter">
        <Link
          to={ROUTES.home}
          className="font-headline-md text-headline-md font-bold text-on-surface"
        >
          Minicom
        </Link>

        <div className="hidden items-center gap-site-lg md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className={
                link.id === 'shop'
                  ? 'cursor-pointer border-b-2 border-primary font-body-md text-body-md font-bold text-primary transition-colors'
                  : 'cursor-pointer font-body-md text-body-md text-on-surface-variant transition-colors hover:text-on-surface'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-site-md">
          <div className="hidden items-center rounded-full bg-surface-container px-site-sm py-site-xs sm:flex">
            <MaterialIcon name="search" className="mr-site-xs text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-32 border-none bg-transparent font-label-md focus:ring-0 lg:w-48"
            />
          </div>
          <div className="flex items-center gap-site-sm">
            <Link
              to={ROUTES.login}
              className="rounded-full p-site-base text-on-surface transition-colors hover:bg-surface-container-low"
              aria-label="Account"
            >
              <MaterialIcon name="person" />
            </Link>
            <Link
              to={ROUTES.cart}
              className="relative rounded-full p-site-base text-on-surface transition-colors hover:bg-surface-container-low"
              aria-label="Cart"
            >
              <MaterialIcon name="shopping_cart" />
              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                2
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
