import type { PropsWithChildren } from 'react'
import { ScriptOnce, useRouter } from '@tanstack/react-router'
import { createClientOnlyFn, createServerFn } from '@tanstack/react-start'
import { setCookie } from '@tanstack/react-start/server'
import { createContext, use, useCallback, useEffect } from 'react'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | null>(null)

const themeScript = `
(function() {
  const storedTheme = getTheme();
  const theme = storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'system';
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
  }

  function getTheme() {
    const match = document.cookie.match(/(?:^| )theme=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }
})();`

export interface ThemeProviderProps extends PropsWithChildren {
  theme: Theme
}

const storeTheme = createServerFn({ method: 'POST' })
  .inputValidator((data: { theme: Theme }) => data)
  .handler(({ data: { theme } }) => {
    setCookie('theme', theme, {
      maxAge: 60 * 60 * 24 * 365,
    })
  })

const getSystemTheme = createClientOnlyFn(() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return isDark ? 'dark' : 'light'
})

export function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme } = props
  const router = useRouter()

  useEffect(() => {
    if (typeof window === 'undefined' || theme !== 'system') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (event: MediaQueryListEvent) => {
      document.documentElement.classList.toggle('dark', event.matches)
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [theme])

  const setTheme = (theme: Theme) => {
    storeTheme({ data: { theme } }).then(() => router.invalidate())
    const isDark = theme === 'system' ? getSystemTheme() === 'dark' : theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark)
  }

  return (
    <ThemeContext value={{ theme, setTheme }}>
      <ScriptOnce>{themeScript}</ScriptOnce>
      {children}
    </ThemeContext>
  )
}

export function useTheme() {
  const context = use(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
