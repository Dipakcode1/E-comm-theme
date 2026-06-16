import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/config/routes'

export function StarterNav() {
  return (
    <header className="border-b border-[#cbd6e2] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-6 py-3 sm:px-10">
        <span className="text-sm font-semibold text-[#0091ae]">WoodsCLI starter</span>
        <nav className="flex gap-4 text-sm font-medium">
          <Link
            to={ROUTES.home}
            className="text-[#516f90] hover:text-[#0091ae] [&.active]:text-[#0091ae]"
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to={ROUTES.guide}
            className="text-[#516f90] hover:text-[#0091ae] [&.active]:text-[#0091ae]"
          >
            Developer guide
          </Link>
        </nav>
      </div>
    </header>
  )
}
