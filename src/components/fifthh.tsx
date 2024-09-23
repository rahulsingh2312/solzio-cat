import React from 'react'
import Card from './ui/Card'
import Image from 'next/image'
import { CiMail } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Comm from './comm'

export default function fifthh() {
  return (
    <div className='bg-[#f6e9b5] max-w-[100vw] max-h-[1200px] bg-opacity-90 bg-cover bg-center bg-[url("/bg5.png")]'> 
   
   <div className=' flex text-6xl text-black p-8 justify-center items-center '> <h1 className='text-stroke-white text-shadow-white'>How to Buy?</h1></div>

   <div className='flex gap-12 p-12 justify-center items-center '>
       <div>
       <Card number='01' className='translate-y-<FaSquareXTwitter />
      6 rotate-[-7deg]' text="Create a wallet"/>
      <Image src="/arrow5.svg" alt="raydium" width={150} height={150} className='absolute translate-y-[50px] translate-x-[140px] rotate-[10deg]'/>
       </div>
      <div>
      <Image src="/arrow7.svg" alt="raydium" width={140} height={150} className='absolute translate-x-[160px] translate-y-[130px]   '/>
      <Card number='02 ' className='translate-y-48  rotate-[6deg] ' text="Get some Sol"/>
     
      </div>
      <div>

      <Card number='03' className='translate-y-6 rotate-[-4deg]' text="Go to Raydium!"/>
      <Image src="/arrow5.svg" alt="raydium" width={140} height={150} className='absolute translate-x-[160px] translate-y-[80px]   '/>
      </div>
      
      <Card number='04' className='translate-y-48 rotate-[7deg]' text="Get your Share"/>
   </div>
   


    <Comm number='' className='mt-80 pb-20 flex justify-center items-center' text="Join our Community"/>

  
      <div className='flex justify-between items-center pl-2 px-12  bg-black w-full h-[120px] text-white'>
          <Image src="/logo.png"  alt="raydium" width={100} height={100}/>
          <div className='flex gap-4'>
          <div className='flex gap-4 border-white border-2 rounded-3xl text-2xl p-2'>
         <CiMail />
          
          </div>
          
          <div className='flex gap-4 border-white border-2 rounded-3xl text-2xl  p-2'>
          <FaSquareXTwitter />

          
          </div>
          <div className='flex gap-4 border-white border-2 rounded-3xl text-2xl  p-2'>
          <FaLinkedin />
          
          </div>
          </div>
        
         
        
        </div>    

        
    </div>
  )
}
