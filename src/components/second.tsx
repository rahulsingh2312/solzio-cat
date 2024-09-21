import React from 'react'

export default function ResponsiveSolzioLayout() {
  return (

    <div className="min-h-screen bg-[#ffdd75] bg-[url('/bg2.png')] bg-cover bg-center ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative mb-8">

          <h1 className="text-center text-4xl md:text-5xl leading-tight">
            <span className="text-black">Coins </span>
            <span className='text-white/80  text-stroke-black text-shadow-black text-bold'>
                dissappear
              </span>
            <span className="text-black"> like catnaps!</span>
          </h1>
          <img className="w-24 h-24 absolute -top-8 -left-4 md:left-0" src="" alt="Coin icon" />
        </div>


        <div className="w-[1131px] text-center"><span className=" text-black text-[46px] font-bold  leading-[62.10px]">Every 4 days, $SOLZIO supply gets a catnip cut—way faster than </span><span className="text-[#dc590f] text-[46px]  leading-[62.10px]">Bitcoin's</span><span className="text-black text-[46px]  leading-[62.10px]"> sleepy 4-year cycle!</span></div>

        <div className="flex flex-col md:flex-row  items-center px-0 ">
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