import { useState } from 'react'

import {
  COLLECTION_CATEGORIES,
  COLLECTION_COLOR_SWATCHES,
} from '@/features/storefront/data/collection'

export function CollectionFilters() {
  const [selectedCategory, setSelectedCategory] = useState<string>(COLLECTION_CATEGORIES[0])
  const [priceMax, setPriceMax] = useState(1000)

  return (
    <aside className="w-full shrink-0 md:w-64">
      <div className="sticky top-28 space-y-site-lg">
        <section>
          <h3 className="mb-site-sm border-b border-outline-variant pb-site-base font-label-md text-label-md tracking-widest text-on-surface uppercase">
            Category
          </h3>
          <ul className="space-y-site-xs">
            {COLLECTION_CATEGORIES.map((category) => (
              <li key={category}>
                <label className="group flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="h-4 w-4 rounded-sm border-outline-variant bg-surface text-primary transition-all focus:ring-primary"
                  />
                  <span className="ml-site-sm font-body-md text-body-md text-on-surface-variant transition-colors group-hover:text-primary">
                    {category}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="mb-site-sm border-b border-outline-variant pb-site-base font-label-md text-label-md tracking-widest text-on-surface uppercase">
            Price Range
          </h3>
          <div className="mt-site-md px-site-xs">
            <input
              type="range"
              min={0}
              max={1000}
              step={50}
              value={priceMax}
              onChange={(event) => setPriceMax(Number(event.target.value))}
              className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-surface-container-high accent-primary"
            />
            <div className="mt-site-sm flex justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span>$0</span>
              <span>$1,000+</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-site-sm border-b border-outline-variant pb-site-base font-label-md text-label-md tracking-widest text-on-surface uppercase">
            Color Palette
          </h3>
          <div className="flex flex-wrap gap-site-xs">
            {COLLECTION_COLOR_SWATCHES.map((swatch) => (
              <button
                key={swatch.id}
                type="button"
                aria-label={`Filter by ${swatch.id}`}
                className={`h-8 w-8 rounded-full border border-outline-variant ring-offset-2 transition-all hover:ring-2 hover:ring-primary ${swatch.className}`}
              />
            ))}
          </div>
        </section>

        <button
          type="button"
          onClick={() => {
            setSelectedCategory(COLLECTION_CATEGORIES[0])
            setPriceMax(1000)
          }}
          className="w-full border border-outline py-site-xs font-label-md text-label-md text-on-surface transition-all duration-200 hover:bg-on-surface hover:text-surface"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  )
}
