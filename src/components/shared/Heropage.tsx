import AboutHerbLink from "./About"
import HeroBanner from "./herobanner"



// bannerData.ts


const Heropage = () => {
  return (
    <div className=" h-screen max-w-6xl mx-auto  w-full flex flex-col gap-2 px-4 pt-4">
   
      <div className="">
            <HeroBanner />
      </div>
      <div className="flex pb-4">
       
       <AboutHerbLink/>
      </div>
    </div>
  )
}

export default Heropage
