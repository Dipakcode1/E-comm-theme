import { useStarterPreview } from '../hooks/use-starter-preview'
import { STARTER_FEATURES, WOODSCLI_ABOUT } from '../content/woodscli-guide-content'

export function StarterHome() {
  const { title, tagline, showFeatureCards, accentColor, heroStyle } = useStarterPreview()

  return (
    <>
      <div style={{ ['--starter-accent' as string]: accentColor }}>
        <section
          className={
            heroStyle === 'minimal'
              ? 'px-6 py-14 sm:px-10 sm:py-16 bg-[var(--mc-bg-shell,#f5f8fa)] text-[var(--mc-text,#33475b)] border-b border-[var(--mc-border,#cbd6e2)]'
              : heroStyle === 'bold'
                ? 'px-6 py-14 sm:px-10 sm:py-16 bg-[#1c1c1f] text-white'
                : 'px-6 py-14 sm:px-10 sm:py-16 bg-gradient-to-br from-[var(--starter-accent,#0091ae)] to-[#ff7a59] text-white'
          }
        >
          <div className="mx-auto max-w-4xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
              {WOODSCLI_ABOUT.package} · local dev
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed opacity-90 sm:text-lg">{tagline}</p>
            <p className="mt-6 text-sm opacity-75">
              Module config overlay:{' '}
              <kbd className="rounded bg-black/10 px-1.5 py-0.5 font-mono text-xs">Ctrl+Shift+Z</kbd>
              {' · '}
              Mac: <kbd className="rounded bg-black/10 px-1.5 py-0.5 font-mono text-xs">⌃⇧Z</kbd>
            </p>
          </div>
        </section>
      </div>

      {showFeatureCards ? (
        <div className="mx-auto grid max-w-4xl gap-4 px-6 py-10 sm:grid-cols-3 sm:px-10">
          {STARTER_FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-[#cbd6e2] bg-white p-5 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-[#0091ae]">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#516f90]">{feature.body}</p>
            </article>
          ))}
        </div>
      ) : null}
    </>
  )
}
