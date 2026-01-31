import type { ReactNode } from 'react'
import type { Theme } from '~/theme-context.tsx'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { getCookie } from '@tanstack/react-start/server'
import { DefaultCatchBoundary, NotFound } from '~/components/index.tsx'
import fontsCss from '~/styles/fonts.css?url'
import tailwindCss from '~/styles/tailwind.css?url'
import { ThemeProvider } from '~/theme-context.tsx'

const getTheme = createServerFn().handler(() => {
  const storedTheme = getCookie('theme') || 'system'

  if (['light', 'dark', 'system'].includes(storedTheme)) {
    return storedTheme as Theme
  }

  return 'system'
})

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Marvin Rudolph | Full-Stack Engineer' },
      { name: 'description', content: 'Experienced Full-Stack Engineer passionate about minimal design and animations. I love to build things that look great, feel smooth and are easy to use.' },
    ],
    links: [
      { rel: 'stylesheet', href: fontsCss },
      { rel: 'stylesheet', href: tailwindCss },
      { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
  loader: async () => {
    const theme = await getTheme()
    return { theme }
  },
})

function RootComponent() {
  const { theme } = Route.useLoaderData()
  return (
    <RootDocument>
      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>
    </RootDocument>
  )
}

interface RootDocumentProps {
  children: ReactNode
}

function RootDocument(props: Readonly<RootDocumentProps>) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-[radial-gradient(rgba(23,23,23,0.07)_1px,transparent_0)] bg-size-[1.5rem_1.5rem] bg-position-[-0.75rem_-0.75rem] after:fixed after:left-0 after:top-0 after:w-full after:h-full after:pointer-events-none after:bg-linear-to-b after:to-transparent after:from-white dark:bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_0)] dark:after:from-neutral-950">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
