'use client'
import { useState, useEffect } from 'react'

import SwapBox from '@/components/Swap'



const Home: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])


  return (
    <div className={`transition-opacity duration-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>


      <div className="text-center sm:mt-[70px] lg:mt-[20px]">
        <h1 className='text-[25px] lg:text-[35px] font-[900] handwriting'>
          A DEX FOR EVERY
        </h1>
        <h1 className='text-[25px] lg:text-[35px] font-[900] handwriting'>
          ZAMA TESTER
        </h1>


        <div className="p-1 border z-10 mt-[-10px] sm:mt-[-20px] border-[#fff] bg-[#fff] w-fit m-auto rounded-lg font-[Roboto] -rotate-6">
          <div
            className="border border-[#f8a007] bg-[#f8a007] text-[12px] text-white font-extrabold rounded-lg p-1 
               transform transition-transform duration-300 ease-in-out 
               hover:rotate-6 hover:scale-105 animate-pulse shadow-md"
          >
            <p>TEST PHASE1</p>
          </div>
        </div>


      </div>
      <SwapBox />
    </div>
  )
}

export default Home
