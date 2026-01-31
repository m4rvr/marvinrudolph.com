import type { IconSvgElement } from '@hugeicons/react'
import type { Theme } from '~/theme-context.tsx'
import { ComputerIcon, Moon02Icon, Sun03Icon } from '@hugeicons-pro/core-stroke-rounded'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from 'react-aria-components'
import { cn } from '~/lib/utils.ts'
import { useTheme } from '~/theme-context.tsx'

export interface ThemeToggleButtonProps {
  theme: Theme
}

const icons: Record<Theme, IconSvgElement> = {
  light: Sun03Icon,
  dark: Moon02Icon,
  system: ComputerIcon,
}

export function ThemeToggleButton(props: ThemeToggleButtonProps) {
  const { theme } = props
  const { theme: currentTheme, setTheme } = useTheme()

  return (
    <Button
      onPress={() => {
        setTheme(theme)
      }}
      className={
        cn('flex items-center justify-center shrink-0 size-7 cursor-pointer transition-colors text-neutral-600 rounded-[0.625rem] dark:text-neutral-500 outline-2 outline-transparent focus-visible:outline-accent', {
          'hover:text-neutral-900 dark:hover:text-neutral-100': currentTheme !== theme,
          'text-neutral-900 dark:text-neutral-100': currentTheme === theme,
        })
      }
      aria-label={`Switch to ${theme} theme`}
    >
      <HugeiconsIcon
        icon={icons[theme]}
        size={theme === 'light' ? '1.125rem' : '1rem'}
      />
    </Button>
  )
}
