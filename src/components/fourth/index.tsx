import React from 'react';
import Image from 'next/image';
import { IoIosWarning } from "react-icons/io";
import SwapInterface from './SwapInterface';
import AddLiquidity from './AddLiq';
import StakeToMakeMoney from './stake';

const WarningBanner = () => (

    <h1 className='flex items-center text-2xl justify-center p-8'>
    <IoIosWarning className='text-red-600 text-3xl' />
    Warning! Holding without staking is risky. Solzio is a game—play wisely!<IoIosWarning className='text-red-600 text-3xl' />
    </h1>
  


);


const Fourth = () => (
  <div id="buy" className=" min-h-screen  bg-[url('/bg4.png')] bg-cover bg-center bg-opacity-50 overflow-hidden">
    <WarningBanner />
    <div className="container mx-auto p-4">
     
      <div className="grid grid-cols-1 769:grid-cols-2  1200:grid-cols-3 gap-4   ">
           <div className=" flex justify-center items-center">
           <SwapInterface className=' ' />
           </div>

       <div className='flex mb-4 md:pt-24 flex-col justify-center items-center'>

       <h1 className=" text-6xl text-center font-serif font-medium    py-4">Play Smart , <br className=' py-4' /> <span className='text-black text-stroke text-shadow-white text-bold font-semibold'>
               Stake
              </span> Wisely!</h1>
       
       
      <AddLiquidity />
       </div>
     
     <StakeToMakeMoney/>
      </div>
    </div>
  </div>
 
  
);

export default Fourth;