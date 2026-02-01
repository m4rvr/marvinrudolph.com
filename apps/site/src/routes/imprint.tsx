import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { DefaultLayout } from '~/layouts/index.tsx'

export const Route = createFileRoute('/imprint')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DefaultLayout>
      <main>
        <motion.h1
          className="text-base font-medium mb-4"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          Imprint
        </motion.h1>
        <motion.ul
          className="leading-relaxed text-neutral-500 dark:text-neutral-400 mb-4"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
        >
          <li className="font-medium">BoldMate Marvin Rudolph</li>
          <li>Einzelunternehmen (Sole Proprietorship)</li>
          <li>Wilhelmstr. 6</li>
          <li>76703 Kraichtal</li>
          <li>Germany</li>
        </motion.ul>
        <motion.p
          className="text-neutral-500 dark:text-neutral-400 mb-4"
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'none' }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: 0.4 }}
        >
          Email:
          {' '}
          <a href="mailto:hi@marvr.me" className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100">hi@marvr.me</a>
        </motion.p>
        <motion.p
          className="leading-relaxed text-neutral-500 dark:text-neutral-400"
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
