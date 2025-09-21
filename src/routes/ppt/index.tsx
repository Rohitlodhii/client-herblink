import { createFileRoute } from '@tanstack/react-router'
import Navbar from '../../components/shared/Navbar'



export const Route = createFileRoute('/ppt/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col'>
    <Navbar/>
    <div className='p-4 w-full flex items-center justify-center'>
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQiTUDqktfudi7pKgdjeVXcrB46Q_mExf8e3_dCATgPMleUIvGCEohDTm3tROmjnG4FLoKn95BFO_PV/pubembed?start=true&loop=true&delayms=3000" frameBorder="0" width="960" height="569" ></iframe>
    </div>
  </div>
}
