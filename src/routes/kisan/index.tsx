import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/shared/Navbar'
import KisanLandingPage from '../../components/kisan/landing'

export const Route = createFileRoute('/kisan/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar/>
    <div className='bg-primary/80 h-12 w-full flex items-center justify-center text-2xl'>
      Kisan Portal
    </div>
    <KisanLandingPage/>
  </div>
}
