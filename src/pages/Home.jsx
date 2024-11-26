import React from 'react'
import Navbar from '../components/Navbar'
import ProjectList from '../components/ProjectList'

const Home = () => {
  return (
    <div id='main' className='relative z-10'>
      <div id="page1" className='min-h-screen w-full bg-[#212121] relative overflow-hidden py-0 px-[2vw]'>
        <Navbar />
      </div>

      <div id='page2' className='min-h-screen w-full bg-[#212121] px-[2vw] relative'>
            <ProjectList />
      </div>
    </div>
  )
}

export default Home
