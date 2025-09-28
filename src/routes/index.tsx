import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../components/shared/Navbar'
import Heropage from '../components/shared/Heropage'
import FAQ from '../components/shared/faq'
import Footer from '../components/shared/Footer'
import HowItWorks from '../components/shared/HowItWorks'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Navbar/>
    <Heropage/>
    
    <FAQ/>
    <Footer/>
  </div>
}
