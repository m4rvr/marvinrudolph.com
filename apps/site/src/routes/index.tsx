import { createFileRoute } from '@tanstack/react-router'
import { Intro } from '~/components/index.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="max-w-screen-sm mx-auto px-4 pt-20">
      <Intro />
      <div className="flex items-center">
        <button>Light</button>
        <button>Dark</button>
        <button>System</button>
      </div>
    </div>
  )
}
