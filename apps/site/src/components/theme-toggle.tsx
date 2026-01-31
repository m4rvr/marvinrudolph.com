import { motion } from 'motion/react'
import { ThemeToggleButton } from '~/components/index.tsx'
import { useTheme } from '~/theme-context.tsx'

export function ThemeToggle() {
  const { theme } = useTheme()

  return (
    <motion.div
      className="flex items-center gap-0.5 absolute top-6 right-6"
      initial={{ opacity: 0, filter: 'blur(5px)' }}
      animate={{ opacity: 1, filter: 'none' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 }}
    >
      <div
        className="rounded-[0.625rem] size-7 bg-neutral-900/5 pointer-events-none transition-transform -z-1 left-0 top-0 absolute dark:bg-white/8"
        style={{
          transform: `translateX(${theme === 'light' ? '0' : theme === 'dark' ? 'calc(100% + 0.125rem)' : 'calc(200% + 0.25rem)'})`,
        }}
      >
      </div>
      <ThemeToggleButton theme="light" />
      <ThemeToggleButton theme="dark" />
      <ThemeToggleButton theme="system" />
    </motion.div>
  )
}
