import { createFileRoute } from '@tanstack/react-router'
import { Intro } from '~/components/index.tsx'
import { DefaultLayout } from '~/layouts/index.tsx'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <DefaultLayout>
      <Intro />
    </DefaultLayout>
  )
}
