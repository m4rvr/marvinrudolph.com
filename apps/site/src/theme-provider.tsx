import type { PropsWithChildren } from 'react'
import type { UserTheme } from '~/theme-context.tsx'
// import { ScriptOnce } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { setCookie } from '@tanstack/react-start/server'
import { ThemeContext } from '~/theme-context.tsx'

/* const themeScript = `
(function() {
  const storedTheme = localStorage.getItem('theme') || 'system';
  const theme = ['light', 'dark', 'system'].includes(storedTheme) ? storedTheme : 'system';

  if (theme === 'system') {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  } else if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
})();` */

export interface ThemeProviderProps extends PropsWithChildren {
  theme: UserTheme
}

const setTheme = createServerFn({ method: 'POST' }).handler(() => {
  setCookie('theme', Math.random() > 0.5 ? 'light' : 'dark')
})

export function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props

  return (
    <ThemeContext value={{ theme: 'light', setTheme: () => {} }}>
      <button onClick={() => setTheme()}>Set theme</button>
      {children}
    </ThemeContext>
  )
}
