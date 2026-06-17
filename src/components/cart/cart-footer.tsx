const FOOTER_COLUMNS = [
  {
    title: 'Shop',
    links: ['All Products', 'New Arrivals', 'Best Sellers'],
  },
  {
    title: 'Support',
    links: ['Shipping & Returns', 'Contact Us', 'Warranty'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Privacy Policy', 'Terms of Service'],
  },
] as const

export function CartFooter() {
  return (
    <footer className="mt-site-xl border-t border-outline-variant bg-surface-container-low">
      <div className="mx-auto flex w-full max-w-container-max flex-col items-start justify-between gap-site-md px-gutter py-site-xl md:flex-row">
        <div className="flex flex-col gap-site-sm">
          <span className="font-headline-lg text-headline-lg font-bold text-on-surface">MINICOM</span>
          <p className="max-w-xs font-label-md text-label-md text-secondary">
            Curating the world&apos;s most essential technology and design tools for the modern
            creative professional.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-site-lg md:grid-cols-3">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-site-xs">
              <span className="font-label-md text-label-md font-bold text-on-surface uppercase">
                {column.title}
              </span>
              {column.links.map((label) => (
                <a
                  key={label}
                  href="#"
                  className="font-label-md text-label-md text-secondary decoration-primary underline-offset-4 transition-all hover:underline"
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-container-max border-t border-outline-variant px-gutter py-site-md text-center md:text-left">
        <span className="font-label-md text-label-md text-secondary">
          © {new Date().getFullYear()} MINICOM. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
