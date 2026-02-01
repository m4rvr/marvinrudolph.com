import { GithubIcon, Mail01Icon, NewTwitterIcon, WavingHand01Icon } from '@hugeicons-pro/core-stroke-rounded'
import { HugeiconsIcon } from '@hugeicons/react'
import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Intro } from '~/components/index.tsx'
import { DefaultLayout } from '~/layouts/index.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DefaultLayout>
      <Intro />
      <main>
        <motion.h2
          className="font-medium mb-6 text-neutral-900 dark:text-neutral-100"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.5 }}
        >
          Let's connect! :)
        </motion.h2>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
        >
          <a
            href="https://github.com/m4rvr"
            className="transition-colors inline-flex items-center gap-1.5 font-medium group hover:text-neutral-900 dark:hover:text-neutral-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HugeiconsIcon
              icon={GithubIcon}
              size="1rem"
              strokeWidth={2}
              className="group-hover:animate-wiggle-fast"
            />
            GitHub
          </a>
          <a
            href="https://x.com/marvr_"
            className="transition-colors inline-flex items-center gap-1.5 font-medium group hover:text-neutral-900 dark:hover:text-neutral-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HugeiconsIcon
              icon={NewTwitterIcon}
              size="1rem"
              strokeWidth={2}
              className="group-hover:animate-wiggle-fast"
            />
            X (Twitter)
          </a>
          <a
            href="mailto:hi@marvinrudolph.com"
            className="transition-colors inline-flex items-center gap-1.5 font-medium group hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            <HugeiconsIcon
              icon={Mail01Icon}
              size="1rem"
              strokeWidth={2}
              className="group-hover:animate-wiggle-fast"
            />
            Email
          </a>
        </motion.div>
      </main>
    </DefaultLayout>
  )
}
