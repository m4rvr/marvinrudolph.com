import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { DefaultLayout } from '~/layouts/index.tsx'

export const Route = createFileRoute('/imprint')({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: 'Imprint | Marvin Rudolph',
      },
    ],
  }),
})

function RouteComponent() {
  return (
    <DefaultLayout>
      <main>
        <motion.h1
          className="text-base font-medium mb-4 text-neutral-900 dark:text-neutral-100"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Imprint
        </motion.h1>
        <motion.ul
          className="leading-relaxed mb-4"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          <li>BoldMate Marvin Rudolph</li>
          <li>Einzelunternehmen (Sole Proprietorship)</li>
          <li>Wilhelmstr. 6</li>
          <li>76703 Kraichtal</li>
          <li>Germany</li>
        </motion.ul>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
        >
          <a
            href="mailto:hi@marvinrudolph.com"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            hi@marvinrudolph.com
          </a>
        </motion.p>
        <motion.p
          className="leading-relaxed"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.6 }}
        >
          We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
        </motion.p>
      </main>
    </DefaultLayout>
  )
}
