import { LoginFooter } from './login-footer'
import { LoginForm } from './login-form'
import { LoginHeader } from './login-header'

/** Minicom sign-in page — focused transactional layout without main storefront nav. */
export function LoginShell() {
  return (
    <div className="flex min-h-screen flex-col bg-surface font-body-md text-on-surface antialiased">
      <LoginHeader />
      <main className="flex grow items-center justify-center px-gutter pb-site-xl">
        <LoginForm />
      </main>
      <LoginFooter />
    </div>
  )
}
