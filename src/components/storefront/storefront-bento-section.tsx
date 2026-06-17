import { BENTO_FEATURE_IMAGE } from '@/features/storefront/data/products'

import { MaterialIcon } from '@/components/common/material-icon'

export function StorefrontBentoSection() {
  return (
    <section className="mx-auto max-w-container-max px-gutter py-site-xl">
      <div className="grid h-[600px] grid-cols-1 grid-rows-2 gap-site-sm md:h-[500px] md:grid-cols-3">
        <div className="group relative overflow-hidden rounded-xl bg-surface-container-low md:col-span-2 md:row-span-2">
          <img
            src={BENTO_FEATURE_IMAGE.src}
            alt={BENTO_FEATURE_IMAGE.alt}
            className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-background/80 to-transparent p-site-lg">
            <h3 className="mb-site-xs font-headline-lg text-headline-lg text-on-surface">
              The Essence of Quality
            </h3>
            <p className="mb-site-sm max-w-sm font-body-md text-body-md text-on-surface-variant">
              Discover the craftsmanship behind every piece in our signature series.
            </p>
            <a
              href="#"
              className="flex items-center gap-site-xs font-label-md text-label-md font-bold text-primary"
            >
              Learn More <MaterialIcon name="arrow_forward" size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-xl bg-primary-container p-site-lg text-on-primary">
          <MaterialIcon name="loyalty" size={40} />
          <div>
            <h4 className="mb-site-xs font-headline-md text-headline-md">Member Perks</h4>
            <p className="font-label-md text-label-md opacity-90">
              Enjoy free shipping on all orders over $100.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-xl bg-surface-container-highest p-site-lg text-center">
          <h4 className="mb-site-xs font-headline-md text-headline-md text-on-surface">Minicom+</h4>
          <p className="mb-site-md font-label-md text-label-md text-on-surface-variant">
            Early access to every drop.
          </p>
          <button
            type="button"
            className="rounded-lg border border-on-surface px-site-md py-site-xs font-label-md text-label-md transition-colors hover:bg-on-surface hover:text-surface"
          >
            Join Now
          </button>
        </div>
      </div>
    </section>
  )
}
