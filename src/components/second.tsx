import React from 'react'
import Image from 'next/image'

export default function ResponsiveSolzioLayout() {
  return (
    <div id="about" className="min-h-screen bg-[#ffdd75] bg-[url('/bg2.png')] bg-cover bg-center overflow-hidden">
      <div className="max-w-full mx-auto px-0 py-8">
        <div className="relative mb-8 px-4">
          <h1 className="text-center text-3xl md:text-5xl leading-tight">
            <span className="text-black">Coins </span>
            <span className='text-white/80 text-stroke-black text-shadow-black text-bold'>
              dissappear
            </span>
            <span className="text-black"> like catnaps!</span>
          </h1>
        </div>
        

        
        <div className="text-center px-4 mb-8">
          <span className="text-white text-2xl md:text-4xl font-bold leading-relaxed  text-shadow-black ">
            Every 4 days, $BMC supply gets a catnip cut—way 
            <br />
            faster than 
            <span className="md:text-[#e07f46] text-2xl text-orange-300   "> Bitcoin's</span> sleepy 4-year cycle!
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Image width={300} height={300} className="hidden md:block w-[200px] md:w-[400px] h-auto object-contain md:object-cover" src="/Photo_Cat.png" alt="SOLZIO illustration 1" />
          
          <div className="w-full md:w-1/3 text-justify text-black/80   font-poppins py-8 md:py-0 text-md p-6  md:text-xl">
          Welcome to the world of BaseMillionCat, where every token holds the promise of exponential growth! Our innovative tokenomics ensure that every four days, half of the BaseMillionCat supply is slashed, igniting demand and driving prices skyward. As a holder, you’ll enjoy lucrative rewards, including an additional 13.37% in tokens just for staking. Join us as we redefine the meme coin landscape. Embark on an adventure that promises not just profits, but a community of true believers. Get ready to pounce on opportunities like never before!
          </div>
          
          <Image width={300} height={300} className="hidden md:block w-[200px] md:w-[400px] h-auto object-contain md:object-cover" src="/Photo_Cat2.png" alt="SOLZIO illustration 2" />
        </div>
      </div>
    </div>
  )
}