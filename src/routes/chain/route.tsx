import { createFileRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../../components/shared/Navbar'

export const Route = createFileRoute('/chain')({
  component: ChainLayout,
})

function ChainLayout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
    </div>
  )
}