import { createFileRoute } from '@tanstack/react-router'
import SignInCTA from '../../components/shared/signincta'

export const Route = createFileRoute('/processor/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SignInCTA orgName='Processor' redirectTo='/processor/login' />
  </div>
}
