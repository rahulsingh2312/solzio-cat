import React from 'react';
import Image from 'next/image';

export default function ResponsiveSolzioLayout() {
  return (
    <div id='about' className="min-h-screen bg-[#ffdd75] bg-[url('/bg2.webp')] bg-cover bg-center overflow-hidden">
      <div className="max-w-full mx-auto px-0 md:px-4 py-8">
        <div className="relative mb-8 px-4">
          <h1 className="text-center text-2xl md:text-5xl leading-tight">
            <span className="text-black">Coins </span>
            <span className='text-white/80 text-stroke-black text-shadow-black font-bold'>
              disappear
            </span>
            <span className="text-black"> like catnaps!</span>
          </h1>
        </div>
        
        <div className="text-center mb-8 px-4">
          <span className="text-white text-xl md:text-4xl font-bold leading-relaxed text-shadow-black">
          Empowering strategic players to navigate the 
            <span className="hidden md:inline"> ups </span>
            <br className="md:hidden" />
            <span className="md:hidden">—ups </span>
            and downs of 
            <span className="text-orange-300 md:text-[#e07f46]">  DBAS's</span>  fluctuating chart
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
         
          <Image width={300} height={300} className="hidden md:block w-[200px] md:w-[400px] h-auto object-contain md:object-cover" src="/Photo_Cat.webp" alt="SOLZIO illustration 1" />
          
          
          <div className="md:hidden flex justify-between w-full mb-4">
           
            <Image width={100} height={100} className="w-40 h-40 object-cover" src="/Photo_Cat.webp" alt="SOLZIO cat 1" />
           
            <Image width={100} height={100} className="w-40 h-40 object-cover" src="/Photo_Cat2.webp" alt="SOLZIO cat 2" />
          </div>
          
          <div className="w-full md:w-1/3 text-justify text-black/80 font-poppins py-8 md:py-0 text-lg md:text-xl px-4 md:px-6">
          Welcome to the world of $DBAS, where the chart holds the promise of exponential growth! Our innovative tokenomics ensure that every week the token supply is randomly reduced, sparking demand and driving prices upward. As a holder, you’ll enjoy lucrative rewards, including insane APY   just for staking. Join us as we redefine the tokenomics landscape. Embark on an adventure that offers not just profits, but a community of true believers. Get ready to seize opportunities like never before! </div>          
          <Image width={300} height={300} className="hidden md:block w-[200px] md:w-[400px] h-auto object-contain md:object-cover" src="/Photo_Cat2.webp" alt="SOLZIO illustration 2" />
        </div>
      </div>
    </div>
  );
}