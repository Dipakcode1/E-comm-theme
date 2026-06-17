import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/config/routes'

export function LoginHeader() {
  return (
    <header className="flex w-full justify-center px-gutter py-site-xl">
      <Link
        to={ROUTES.home}
        className="font-headline-md text-headline-md font-bold tracking-tighter text-on-surface"
      >
        MINICOM
      </Link>
    </header>
  )
}
