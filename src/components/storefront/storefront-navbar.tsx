import { useEffect, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'

import { NAV_LINKS, ROUTES, type NavLinkId } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

type StorefrontNavbarProps = {
  activeLink?: NavLinkId
}

function isLinkActive(linkId: NavLinkId, pathname: string, activeLink?: NavLinkId) {
  if (activeLink) {
    return linkId === activeLink
  }
  if (linkId === 'collections') {
    return pathname === ROUTES.collections
  }
  if (linkId === 'shop' || linkId === 'new-arrivals') {
    return pathname === ROUTES.home
  }
  return false
}

export function StorefrontNavbar({ activeLink }: StorefrontNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-outline-variant bg-surface transition-colors ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between px-gutter">
        <div className="flex items-center gap-site-xl">
          <Link
            to={ROUTES.home}
            className="font-headline-md text-headline-md font-bold text-on-surface"
          >
            Minicom
          </Link>

          <nav className="hidden items-center gap-site-lg md:flex">
            {NAV_LINKS.map((link) => {
              const active = isLinkActive(link.id, pathname, activeLink)
              return (
                <Link
                  key={link.id}
                  to={link.to}
                  className={
                    active
                      ? 'border-b-2 border-primary font-label-md text-label-md font-bold text-primary transition-colors'
                      : 'font-label-md text-label-md text-on-surface-variant transition-colors hover:text-on-surface'
                  }
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-site-sm">
          <div
            className={`hidden items-center rounded-lg border border-outline-variant bg-surface-container-low px-site-sm py-site-xs transition-all lg:flex ${
              searchFocused ? 'border-primary ring-1 ring-primary' : ''
            }`}
          >
            <MaterialIcon name="search" className="mr-site-xs text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-48 border-none bg-transparent font-body-md text-body-md text-on-surface focus:ring-0 focus:outline-none"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
          </div>
          <Link
            to={ROUTES.cart}
            className="cursor-pointer rounded-lg p-site-xs transition-colors hover:bg-surface-container-low"
            aria-label="Shopping cart"
          >
            <MaterialIcon name="shopping_cart" />
          </Link>
          <Link
            to={ROUTES.login}
            className="cursor-pointer rounded-lg p-site-xs transition-colors hover:bg-surface-container-low"
            aria-label="Account"
          >
            <MaterialIcon name="person" />
          </Link>
          <button
            type="button"
            className="cursor-pointer p-site-xs md:hidden"
            aria-label="Open menu"
          >
            <MaterialIcon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}
