
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { useRouter } from '@tanstack/react-router'

const HeroBanner = () => {

    const router = useRouter();

    const pushTo = ( r : string ) => {

        router.navigate({
            to : r
        })
    
    }

  return (
    <div className=''>
      <Carousel>
  <CarouselContent className=''>
    <CarouselItem onClick={()=>pushTo('/ppt')}>
        <img className='cursor-pointer' src='/banner1.png' />
    </CarouselItem>
    <CarouselItem onClick={()=>pushTo('/ppt')}>
        <img className='cursor-pointer' src='/banner3.png' />
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default HeroBanner
