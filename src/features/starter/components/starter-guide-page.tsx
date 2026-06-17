import { SectionCard } from '@/components/common'

import {
  DEV_WORKFLOW,
  PROJECT_LAYOUT,
  WOODSCLI_ABOUT,
  WOODSCLI_COMMANDS,
} from '../content/woodscli-guide-content'

export function StarterGuidePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-6 py-10 sm:px-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Developer guide</h1>
        <p className="mt-2 text-sm leading-relaxed text-[#516f90]">
          Commands, project layout, and workflow for this WoodsCLI module. Routes live in{' '}
          <code className="font-mono text-xs">src/routes/</code> and delegate to{' '}
          <code className="font-mono text-xs">src/features/</code>.
        </p>
      </div>

      <SectionCard title="About WoodsCLI">
        <p className="text-sm leading-relaxed text-[#516f90]">{WOODSCLI_ABOUT.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-[#516f90]">{WOODSCLI_ABOUT.docsHint}</p>
      </SectionCard>

      <SectionCard title="Essential commands">
        <ul className="divide-y divide-[#eaf0f6]">
          {WOODSCLI_COMMANDS.map(({ cmd, desc }) => (
            <li key={cmd} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:gap-4">
              <code className="shrink-0 rounded bg-[#eaf0f6] px-2 py-1 font-mono text-xs text-[#0091ae]">
                {cmd}
              </code>
              <span className="text-sm leading-relaxed text-[#516f90]">{desc}</span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Project layout">
        <ul className="space-y-3">
          {PROJECT_LAYOUT.map(({ path, note }) => (
            <li key={path} className="text-sm leading-relaxed">
              <code className="rounded bg-[#eaf0f6] px-1.5 py-0.5 font-mono text-xs text-[#33475b]">
                {path}
              </code>
              <span className="mt-1 block text-[#516f90] sm:mt-0 sm:inline sm:before:content-['—_']">
                {note}
              </span>
            </li>
          ))}
        </ul>
      </SectionCard>

      <SectionCard title="Developer workflow">
        <ol className="space-y-4">
          {DEV_WORKFLOW.map(({ title: stepTitle, body }) => (
            <li key={stepTitle}>
              <h3 className="text-sm font-medium text-[#33475b]">{stepTitle}</h3>
              <p className="mt-1 text-sm leading-relaxed text-[#516f90]">{body}</p>
            </li>
          ))}
        </ol>
      </SectionCard>

      <SectionCard title="Routing">
        <p className="text-sm leading-relaxed text-[#516f90]">
          This starter uses the same TanStack Router setup as{' '}
          <code className="font-mono text-xs">woodsportal-client-frontend</code>: file routes under{' '}
          <code className="font-mono text-xs">src/routes/</code>,{' '}
          <code className="font-mono text-xs">src/app.tsx</code> with{' '}
          <code className="font-mono text-xs">RouterProvider</code>, and{' '}
          <strong>hash history</strong> by default (
          <code className="font-mono text-xs">src/config/router.ts</code>) so routes work inside
          HubSpot CMS embeds. Run <code className="font-mono text-xs">wp init</code> again on a new
          folder to choose browser history or no router. Add{' '}
          <code className="font-mono text-xs">src/routes/about.tsx</code> and restart{' '}
          <code className="font-mono text-xs">wp dev</code> to regenerate{' '}
          <code className="font-mono text-xs">routeTree.gen.ts</code>.
        </p>
      </SectionCard>

      <SectionCard title="Customize this preview">
        <p className="text-sm leading-relaxed text-[#516f90]">
          Edit <code className="font-mono text-xs">public/fields.json</code> to add module fields,
          then adjust <code className="font-mono text-xs">src/features/starter/</code> to bind them.
          Replace the starter feature with your own under{' '}
          <code className="font-mono text-xs">src/features/</code> when you outgrow the demo.
        </p>
      </SectionCard>
    </main>
  )
}
