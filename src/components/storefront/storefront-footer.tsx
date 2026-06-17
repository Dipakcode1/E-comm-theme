import { FOOTER_LINKS } from '@/features/storefront/data/products'

export function StorefrontFooter() {
  return (
    <footer className="mt-site-xl w-full border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-site-sm px-gutter py-site-lg md:flex-row">
        <div className="flex flex-col items-center gap-site-md md:flex-row">
          <div className="font-headline-md text-headline-md font-bold text-on-surface">Minicom</div>
          <div className="flex gap-site-sm">
            {FOOTER_LINKS.map((label) => (
              <a
                key={label}
                href="#"
                className="font-label-sm text-label-sm text-secondary decoration-primary transition-all duration-200 hover:text-primary hover:underline"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="font-label-sm text-label-sm text-secondary">
          © {new Date().getFullYear()} Minicom. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
