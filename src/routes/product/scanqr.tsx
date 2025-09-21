import { createFileRoute, useRouter } from '@tanstack/react-router'
import QRCodeScanner from '../../components/sampleproduct/Scanqr'

export const Route = createFileRoute('/product/scanqr')({
  component: RouteComponent,
})

function RouteComponent() {

  const router = useRouter();

  return <div>
    <QRCodeScanner onScanComplete={() => router.navigate({ to : '/product/sampleproduct'})}/>
  </div>
}
