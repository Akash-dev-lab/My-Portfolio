import React, { useContext, useEffect } from 'react'
import { AppContext } from "../context/AppContext";

const Loader = () => {

  const { loaderAnimation } = useContext(AppContext);

  useEffect(() => {
    // Trigger any animation
    loaderAnimation();

    // Optionally, use LocomotiveScroll instance
    // if (scrollInstance) {
    //   scrollInstance.update();
    // }
  }, []);

  return (
    <>
      <div id="loader" className='fixed inset-0 bg-[#171717] top-0 z-[999] flex items-center justify-center transition-all ease-in duration-700'>
        <h1>PORTFOLIO</h1>
        <h1>THAT</h1>
        <h1>INSPIRE</h1>
      </div>
      <div id="fixed-image" className='h-[30vw] w-[24vw] rounded-[15px] fixed z-[99] left-1/2 top-[25%] hidden bg-cover bg-center'>

      </div>
    </>
  )
}

export default Loader
