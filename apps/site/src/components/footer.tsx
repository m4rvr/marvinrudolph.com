import { Link } from '@tanstack/react-router'

export function Footer() {
  return (
    <footer className="py-6 text-xs text-neutral-400 dark:text-neutral-600 flex items-center justify-between gap-4 font-medium">
      <div>
        &copy;&nbsp;
        {new Date().getFullYear()}
        {' '}
        Marvin Rudolph
      </div>
      <nav className="flex items-center gap-4">
        <a
          href="mailto:hi@marvinrudolph.com"
          className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          Contact
        </a>
        <Link
          to="/imprint"
          className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          Imprint
        </Link>
      </nav>
    </footer>
  )
}
