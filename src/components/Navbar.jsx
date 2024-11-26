import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Navbar = () => {

    return (
        <>
            <nav className='w-full py-[2vw] px-[0vw flex items-center justify-between z-[100] relative'>
                <img className='w-20 rounded-full' src="/public/Akash_bg_remove.png" alt="" />
                <div className='nav-part2 flex items-center gap-[1vw]'>
                    <h4><a className='text-#000000bb no-underline relative z-[9]' href="#">Work</a></h4>
                    <h4><a className='text-#000000bb no-underline relative z-[9]' href="#">Resume</a></h4>
                    <h4><a className='text-#000000bb no-underline relative z-[9]' href="#">Contact</a></h4>
                </div>
                <h3 className='hidden'>Menu</h3>
            </nav>
            <div className="center h-[65vh] w-full relative z-[2] flex items-end justify-between">
                <div id="left" className='w-[45%] h-full'>
                    <DotLottieReact className=''
                        src="https://lottie.host/8090e92f-86a9-49d6-8fd4-09742012061c/9DikWHkgly.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div id="right" className='w-[50%] relative z-[2] flex justify-center items-center h-full'>
                    <h1 className='text-[5vw] text-[#ECECEC]  leading-[7vw]'>Clean Code <br /> Sleek Designs, <br /> Real Results.</h1>
                </div>
            </div>
            <div className='hero-shape absolute z-[1] w-[46vw] h-[36vw] right-0 top-[20vh]'>
                <div id="hero-1"></div>
                <div id="hero-2"></div>
                <div id="hero-3"></div>
            </div>
            <div className='w-full h-[1px] bg-white mt-20'></div>
        </>
    )
}

export default Navbar
