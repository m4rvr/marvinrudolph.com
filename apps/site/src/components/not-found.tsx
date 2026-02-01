import { ArrowLeft02Icon } from '@hugeicons-pro/core-stroke-rounded'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { DefaultLayout } from '~/layouts'

export function NotFound() {
  return (
    <DefaultLayout>
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'none' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <h1 className="text-base font-medium mb-2 text-neutral-900 dark:text-neutral-100">404 Not Found :(</h1>
        <p className="mb-4">The page you are looking for doesn't exist</p>
        <Link to="/" className="font-medium transition-colors text-neutral-900 group inline-flex items-center gap-1 dark:text-neutral-100">
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size="1rem"
            strokeWidth={2}
            className="transition-transform group-hover:-translate-x-px"
          />
          Take me home
        </Link>
      </motion.div>
    </DefaultLayout>
  )
}
