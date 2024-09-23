import React from 'react';
import { FaExchangeAlt, FaCog } from 'react-icons/fa';
import Image from 'next/image';
import { IoIosWarning } from "react-icons/io";



const WarningBanner = () => (

    <h1 className='flex items-center text-2xl justify-center p-8'>
    <IoIosWarning className='text-red-600 text-3xl' />
    Warning! Holding without staking is risky. Solzio is a game—play wisely!<IoIosWarning className='text-red-600 text-3xl' />
    </h1>
  


);


const Fourth = () => (
  <div className=" min-h-screen  bg-[url('/bg4.png')] bg-cover bg-center bg-opacity-50 overflow-hidden">
    <WarningBanner />
    <div className="container mx-auto p-4">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
      <Image width={1000} height={1000} className="w-full md:w-full lg:w-[800px] xl:w-[1000px] h-auto object-contain md:object-cover" src="/four1.svg" alt="solzio" />
       <div className='flex flex-col justify-center items-center'>
      
       <h1 className=" text-6xl text-center font-serif   py-4">Play Smart <br className=' py-4' /> <span className='text-white text-stroke-black text-shadow-black text-bold font-semibold'>
               Stake
              </span> Wisely!</h1>
       
       
       <Image width={1000} height={1000} className="w-full md:w-full lg:w-[800px] xl:w-[1000px] h-auto object-contain md:object-cover" src="/four2.svg" alt="solzio" />
       </div>
     
      
      <Image width={1000} height={1000} className="w-full md:w-full lg:w-[800px] xl:w-[1000px] h-auto object-contain md:object-cover" src="/four3.svg" alt="solzio" />
      </div>
    </div>
  </div>
 
  
);

export default Fourth;