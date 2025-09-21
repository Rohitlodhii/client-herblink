import { createFileRoute } from '@tanstack/react-router'

import ChainTable from '../../components/chain/chaintable'

export const Route = createFileRoute('/chain/livechain')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
   
   <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Blockchain Herb Chain</h1>
      <ChainTable />
    </div>
  </div>
}
