import type { PropsWithChildren } from 'react'
import { ArrowLeft02Icon } from '@hugeicons-pro/core-stroke-rounded'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useLocation } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Footer, ThemeToggle } from '~/components/index.tsx'

export function DefaultLayout(props: PropsWithChildren) {
  const { children } = props
  const location = useLocation()

  return (
    <div className="max-w-screen-sm mx-auto px-6 z-10 pt-20 relative min-h-dvh grid grid-rows-[1fr_auto]">
      {location.pathname !== '/' && (
        <motion.div
          className="absolute top-6 left-6"
          initial={{ opacity: 0, x: -10, filter: 'blur(5px)' }}
          animate={{ opacity: 1, x: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          <Link
            to="/"
            className="font-medium text-xs py-1.5 group inline-flex items-center gap-1 -translate-x-0.75"
          >
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size="1rem"
              className="transition-transform group-hover:-translate-x-px"
            />
            Back
          </Link>
        </motion.div>
      )}
      <ThemeToggle />
      {children}
      <Footer />
    </div>
  )
}
