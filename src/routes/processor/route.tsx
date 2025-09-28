import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'



export const Route = createFileRoute('/processor')({
  component: ChainLayout,
})

function ChainLayout() {
  return (
    <div className=''>
      <Navbar />
     
      <main >
        <Outlet /> 
      </main>
      <Footer/>
    </div>
  )
}