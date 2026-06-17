import { MaterialIcon } from '@/components/common/material-icon'

const PAGES = [1, 2, 3] as const

export function CollectionPagination() {
  return (
    <div className="mt-site-xl flex items-center justify-center gap-site-sm">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:text-primary"
        aria-label="Previous page"
      >
        <MaterialIcon name="chevron_left" />
      </button>
      {PAGES.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === 1
              ? 'flex h-10 w-10 items-center justify-center border border-primary bg-primary font-bold text-on-primary'
              : 'flex h-10 w-10 items-center justify-center border border-outline-variant text-on-surface transition-all hover:border-primary'
          }
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:text-primary"
        aria-label="Next page"
      >
        <MaterialIcon name="chevron_right" />
      </button>
    </div>
  )
}
