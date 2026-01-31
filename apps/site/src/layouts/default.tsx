import type { PropsWithChildren } from 'react'
import { ThemeToggle } from '~/components/index.tsx'

export function DefaultLayout(props: PropsWithChildren) {
  const { children } = props

  return (
    <div className="max-w-screen-sm mx-auto px-6 pt-20 relative">
      <ThemeToggle />
      {children}
    </div>
  )
}
