import type { ReactNode } from 'react'

export function SectionCard({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <section
      className={`rounded-lg border border-[#cbd6e2] bg-white p-6 shadow-sm ${className}`}
    >
      <h2 className="text-base font-semibold text-[#33475b]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}
