import { createFileRoute } from '@tanstack/react-router'

import { AwashFarmers, lab, manufacturer, Neemfarmers, Processors, productHeader, Tulsifarmers } from '../../lib/hardcoded/sampleproducttwo';
import type { Farmer } from '../../types/producttype';
import TraceabilityChain from '../../components/sampleproduct/TraceabilityChain';
import ProductHeader from '../../components/sampleproduct/ProductHeader';


export const Route = createFileRoute('/product/sampleproduct')({
  component: RouteComponent,
})

function RouteComponent() {

  const farmersByHerb: { [key: string]: Farmer[] } = {
    "Tulsi": Tulsifarmers,
    "Neem": Neemfarmers,
    "Ashwagandha": AwashFarmers
  };
  return <div>
   
   <div className="max-w-5xl mx-auto mt-8">
      
      <ProductHeader header={productHeader} />
      <TraceabilityChain 
          farmersByHerb={farmersByHerb}
          processors={Processors}
          labTests={lab}
          manufacturer={manufacturer[0]}
        />
    </div>
  </div>
}
