

import About from "./About"
import HeroBanner from "./herobanner"
import HowItWorks from "./HowItWorks"



// bannerData.ts


const Heropage = () => {
  return (
    <div className=" max-w-6xl mx-auto  w-full flex flex-col gap-2 px-4 pt-4">
   
      <div className="">
            <HeroBanner />
      </div>
      <div className="flex pb-4">
       
       <About/>
      
     
      </div>
      <div className="flex pb-4">
       
       <HowItWorks/>
      
     
      </div>
    </div>
  )
}

export default Heropage
