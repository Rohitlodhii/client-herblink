import { createFileRoute } from '@tanstack/react-router'
import ComplaintForm from '../../components/sampleproduct/ComplaintForm'

export const Route = createFileRoute('/product/complaint')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ComplaintForm/>
  </div>
}




