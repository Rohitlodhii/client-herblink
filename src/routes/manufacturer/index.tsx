import { createFileRoute } from '@tanstack/react-router'
import SignInCTA from '../../components/shared/signincta'

export const Route = createFileRoute('/manufacturer/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SignInCTA orgName='Manufacturer' redirectTo='/manufacturer/login' />
  </div>
}
