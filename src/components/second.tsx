import React from 'react'

export default function ResponsiveSolzioLayout() {
  return (
    <div className="min-h-screen bg-[#fad889] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">
          <h1 className="text-center text-4xl md:text-5xl font-bold font-['Comic Neue'] leading-tight">
            <span className="text-black">Coins </span>
            <span className="text-[#fce3b1]">disappear</span>
            <span className="text-black"> like catnaps!</span>
          </h1>
          <img className="w-24 h-24 absolute -top-8 -left-4 md:left-0" src="" alt="Coin icon" />
        </div>


        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl lg:text-4xl font-bold font-['Comic Neue'] leading-snug">
            <span className="text-black">Every 4 days, $SOLZIO supply gets a catnip cut—way faster than </span>
            <span className="text-[#dc590f]">Bitcoin's</span>
            <span className="text-black"> sleepy 4-year cycle!</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center ">
          <img className="pl-0 w-full md:w-1/3 h-auto " src="/Photo_Cat.png" alt="SOLZIO illustration 1" />
          
          <div className="w-full md:w-1/3 text-justify text-black/80 text-lg font-normal font-['Poppins']">

            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem, deleniti fugiat numquam et laboriosam dolorum ad odio sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ullam ipsum rerum autem, deleniti fugiat numquam et laboriosam dolorum ad odio sit.
          </div>
          
          <img className="pr-0 w-full md:w-1/3 h-auto " src="/Photo_Cat2.png" alt="SOLZIO illustration 2" />
        </div>
      </div>
    </div>
  )
}