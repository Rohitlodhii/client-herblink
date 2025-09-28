import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../../components/shared/Navbar'
import Footer from '../../components/shared/Footer'



export const Route = createFileRoute('/manufacturer')({
  component: ChainLayout,
})

function ChainLayout() {
  return (
    <div className=''>
      <Navbar />
     
      <main >
        <Outlet /> {/* This renders the child routes */}
      </main>

      <Footer/>
    </div>
  )
}