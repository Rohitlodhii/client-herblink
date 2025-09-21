import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/shared/Navbar'
import Heropage from '../components/shared/Heropage'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar/>
    <Heropage/>
  </div>
}
