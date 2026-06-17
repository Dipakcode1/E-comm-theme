import { MaterialIcon } from '@/components/common/material-icon'

export function LoginFooter() {
  return (
    <footer className="w-full border-t border-outline-variant px-gutter py-site-md">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-site-sm md:flex-row">
        <span className="font-label-md text-label-md text-secondary">
          © {new Date().getFullYear()} MINICOM. All rights reserved.
        </span>
        <div className="flex items-center gap-site-md">
          <MaterialIcon
            name="language"
            className="cursor-pointer text-secondary transition-colors hover:text-on-surface"
          />
          <span className="font-label-md text-label-md text-secondary">United States (USD)</span>
        </div>
      </div>
    </footer>
  )
}
