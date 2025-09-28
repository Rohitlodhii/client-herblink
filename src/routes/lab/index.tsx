import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/shared/Navbar'
import LabRegisterForm from '../../components/lab/labregister'
import Footer from '../../components/shared/Footer'



export const Route = createFileRoute('/lab/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col'>
    <Navbar/>
    <div className='p-4 w-full flex items-center justify-center'>
      <LabRegisterForm/>
    </div>
    <Footer/>
  </div>
}
