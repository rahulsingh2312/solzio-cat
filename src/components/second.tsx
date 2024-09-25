import React from 'react';
import Image from 'next/image';

export default function ResponsiveSolzioLayout() {
  return (
    <div id='about' className="min-h-screen bg-[#ffdd75] bg-[url('/bg2.png')] bg-cover bg-center overflow-hidden">
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
            Every 4 days, $SOLZIO supply gets a catnip cut
            <span className="hidden md:inline">—way</span>
            <br className="md:hidden" />
            <span className="md:hidden">—way </span>
            faster than 
            <span className="text-orange-300 md:text-[#e07f46]"> Bitcoin's</span> sleepy 4-year cycle!
          </span>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between">
         
          <Image width={300} height={300} className="hidden md:block w-[200px] md:w-[400px] h-auto object-contain md:object-cover" src="/Photo_Cat.png" alt="SOLZIO illustration 1" />
          
          
          <div className="md:hidden flex justify-between w-full mb-4">
           
            <Image width={100} height={100} className="w-40 h-40 object-cover" src="/Photo_Cat.png" alt="SOLZIO cat 1" />
           
            <Image width={100} height={100} className="w-40 h-40 object-cover" src="/Photo_Cat2.png" alt="SOLZIO cat 2" />
          </div>
          
          <div className="w-full md:w-1/3 text-justify text-black/80 font-poppins py-8 md:py-0 text-lg md:text-xl px-4 md:px-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem, deleniti fugiat numquam et laboriosam dolorum ad odio sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem, deleniti fugiat numquam et laboriosam dolorum ad odio sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem, deleniti fugiat numquam et laboriosam dolorum ad odio sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem, deleniti fugiat numquam et laboriosam dolorum ad odio sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem.
          </div>
          
          <Image width={300} height={300} className="hidden md:block w-[200px] md:w-[400px] h-auto object-contain md:object-cover" src="/Photo_Cat2.png" alt="SOLZIO illustration 2" />
        </div>
      </div>
    </div>
  );
}