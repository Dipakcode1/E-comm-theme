import { FOOTER_LINKS } from '@/features/storefront/data/products'

import { MaterialIcon } from '@/components/common/material-icon'

export function ProductDetailFooter() {
  return (
    <footer className="mt-site-xl w-full border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-site-sm px-gutter py-site-lg md:flex-row">
        <div className="flex flex-col items-center gap-site-xs md:items-start">
          <div className="font-headline-md text-headline-md font-bold text-on-surface">Minicom</div>
          <p className="font-label-sm text-label-sm text-secondary">
            © {new Date().getFullYear()} Minicom. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-site-md">
          {FOOTER_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="font-label-sm text-label-sm text-secondary decoration-primary transition-all hover:text-primary hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="flex gap-site-md">
          <button type="button" className="text-secondary transition-colors hover:text-primary">
            <MaterialIcon name="language" />
          </button>
          <button type="button" className="text-secondary transition-colors hover:text-primary">
            <MaterialIcon name="share" />
          </button>
        </div>
      </div>
    </footer>
  )
}
