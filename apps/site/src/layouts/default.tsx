import type { PropsWithChildren } from 'react'
import { Footer, ThemeToggle } from '~/components/index.tsx'

export function DefaultLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="max-w-screen-sm mx-auto px-6 z-10 pt-20 relative min-h-screen grid grid-rows-[1fr_auto]">
      <ThemeToggle />
      {children}
      <Footer />
    </div>
  )
}
