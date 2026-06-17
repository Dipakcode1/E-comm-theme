import { HERO_IMAGE } from '@/features/storefront/data/products'

export function StorefrontHero() {
  return (
    <section className="hero-gradient overflow-hidden py-site-xl">
      <div className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-site-lg px-gutter md:grid-cols-2">
        <div className="space-y-site-md">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
            Limited Edition
          </span>
          <h1 className="font-display-lg text-display-lg text-on-background">
            Modern Essentials for Your Daily Routine.
          </h1>
          <p className="max-w-md font-body-lg text-body-lg text-secondary">
            Our New Arrivals collection focuses on high-quality materials and thoughtful design.
            Minimalist objects for a more organized life.
          </p>
          <div className="pt-site-sm">
            <button
              type="button"
              className="rounded-lg bg-primary-container px-site-lg py-site-sm font-label-md text-label-md text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              Explore Collection
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-surface-container-highest shadow-sm">
            <img
              src={HERO_IMAGE.src}
              alt={HERO_IMAGE.alt}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
