import { Link } from '@tanstack/react-router'

import { ROUTES } from '@/config/routes'

import { StarterHome } from './starter-home'

export function StarterHomePage() {
  return (
    <>
      <StarterHome />
      <div className="mx-auto max-w-4xl px-6 pb-10 sm:px-10">
        <Link
          to={ROUTES.guide}
          className="inline-flex items-center rounded-md bg-[#0091ae] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#007a8c]"
        >
          Open developer guide →
        </Link>
      </div>
    </>
  )
}
