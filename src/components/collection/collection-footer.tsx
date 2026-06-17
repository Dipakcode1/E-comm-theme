import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: ['Collections', 'New Arrivals', 'Sale'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Policies'],
  },
  {
    title: 'Support',
    links: ['Shipping', 'Returns', 'FAQ'],
  },
] as const

export function CollectionFooter() {
  return (
    <footer className="mt-site-xl w-full border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex max-w-container-max flex-col items-start justify-between gap-site-sm px-gutter py-site-lg md:flex-row md:items-center">
        <div className="space-y-site-xs">
          <Link
            to={ROUTES.home}
            className="font-headline-md text-headline-md font-bold text-on-surface"
          >
            Minicom
          </Link>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Elevating the everyday through essentialism.
          </p>
          <div className="mt-site-md flex gap-site-sm">
            {(['public', 'mail', 'share'] as const).map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-on-surface-variant transition-colors hover:text-primary"
                aria-label={icon}
              >
                <MaterialIcon name={icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-site-lg">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-site-xs">
              <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                {column.title}
              </span>
              {column.links.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="font-label-sm text-label-sm text-secondary decoration-primary transition-all hover:text-primary hover:underline"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-site-xs border-t border-outline-variant px-gutter py-site-sm md:flex-row">
        <span className="font-label-sm text-label-sm text-secondary">
          © {new Date().getFullYear()} Minicom. All rights reserved.
        </span>
        <div className="flex gap-site-md">
          <span className="font-label-sm text-label-sm text-on-surface-variant">Privacy Policy</span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
