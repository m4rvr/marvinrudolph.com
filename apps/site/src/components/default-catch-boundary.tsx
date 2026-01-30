import type { ErrorComponentProps } from '@tanstack/react-router'
import { ErrorComponent } from '@tanstack/react-router'

export interface DefaultCatchBoundaryProps extends ErrorComponentProps {}

export function DefaultCatchBoundary(props: DefaultCatchBoundaryProps) {
  const { error } = props

  return (
    <ErrorComponent error={error} />
  )
}
