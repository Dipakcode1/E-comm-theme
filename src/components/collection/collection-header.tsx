import { Link } from '@tanstack/react-router'

import { COLLECTION_SORT_OPTIONS } from '@/features/storefront/data/collection'
import { ROUTES } from '@/config/routes'

import { MaterialIcon } from '@/components/common/material-icon'

export function CollectionHeader() {
  return (
    <div className="mb-site-lg flex flex-col justify-between gap-site-md md:flex-row md:items-end">
      <div>
        <nav className="mb-site-xs flex items-center gap-site-base font-label-sm text-label-sm text-on-surface-variant">
          <Link to={ROUTES.home} className="hover:text-primary">
            Home
          </Link>
          <MaterialIcon name="chevron_right" size={14} />
          <span>Collections</span>
        </nav>
        <h1 className="font-display-lg text-headline-lg-mobile text-on-surface md:text-display-lg">
          Our Collection
        </h1>
        <p className="mt-site-xs max-w-xl text-on-surface-variant">
          Curated essentials for the modern lifestyle, focusing on minimalist aesthetics and
          professional efficiency.
        </p>
      </div>

      <div className="flex items-center gap-site-sm self-end md:self-auto">
        <span className="hidden font-label-sm text-label-sm tracking-wider text-on-surface-variant uppercase md:inline">
          Sort by
        </span>
        <select
          className="cursor-pointer appearance-none rounded-lg border border-outline-variant bg-surface py-site-xs pr-10 pl-site-sm font-body-md text-body-md outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          defaultValue={COLLECTION_SORT_OPTIONS[0]}
        >
          {COLLECTION_SORT_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
