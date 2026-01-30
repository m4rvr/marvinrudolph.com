import { createContext, use } from 'react'

export type UserTheme = 'light' | 'dark' | 'system'
export type Theme = Exclude<UserTheme, 'system'>

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

export function useTheme() {
  const context = use(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
