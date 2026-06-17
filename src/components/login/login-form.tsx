import { useState, type FormEvent } from 'react'

import { MaterialIcon } from '@/components/common/material-icon'

const SUPPORT_LINKS = ['Privacy Policy', 'Terms of Service', 'Help'] as const

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
  }

  return (
    <div className="w-full max-w-[440px]">
      <div className="login-card rounded-lg p-site-lg shadow-sm md:p-site-xl">
        <div className="mb-site-lg">
          <h2 className="mb-site-xs font-headline-lg text-headline-lg text-on-surface">Sign In</h2>
          <p className="font-body-md text-body-md text-secondary">
            Welcome back. Enter your details to continue.
          </p>
        </div>

        <form className="space-y-site-md" onSubmit={handleSubmit}>
          <div className="space-y-site-xs">
            <label
              htmlFor="email"
              className="font-label-sm text-label-sm tracking-wider text-secondary uppercase"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="name@example.com"
              className="input-focus-ring w-full border border-outline-variant bg-white px-site-sm py-site-sm font-body-md text-body-md text-on-surface transition-all duration-200"
            />
          </div>

          <div className="space-y-site-xs">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="font-label-sm text-label-sm tracking-wider text-secondary uppercase"
              >
                Password
              </label>
              <a
                href="#"
                className="font-label-md text-label-md text-primary underline-offset-4 transition-all hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                className="input-focus-ring w-full border border-outline-variant bg-white px-site-sm py-site-sm pr-10 font-body-md text-body-md text-on-surface transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute top-1/2 right-site-sm -translate-y-1/2 text-secondary transition-colors hover:text-on-surface"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <MaterialIcon
                  name={showPassword ? 'visibility_off' : 'visibility'}
                  size={20}
                />
              </button>
            </div>
          </div>

          <div className="pt-site-base">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-primary-container py-site-sm font-label-md text-label-md text-on-primary transition-opacity duration-200 hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-site-xs">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>

        <div className="relative my-site-lg">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-outline-variant" />
          </div>
          <div className="relative flex justify-center font-label-sm uppercase">
            <span className="bg-white px-site-sm font-label-sm text-secondary">New to Minicom?</span>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block w-full rounded-lg border border-on-surface py-site-sm font-label-md text-label-md text-on-surface transition-all duration-300 hover:bg-on-surface hover:text-white"
          >
            Create account
          </a>
        </div>
      </div>

      <div className="mt-site-md flex justify-center gap-site-md">
        {SUPPORT_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            className="font-label-sm text-label-sm text-secondary transition-colors hover:text-on-surface"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}
