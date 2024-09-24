import React from 'react'
import Card from './ui/Card'
import Image from 'next/image'
import { CiMail } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Comm from './comm'

export default function Fifth() { 
  return (
    <div id="roadmap" className='bg-[#f6e9b5] max-w-full min-h-screen bg-opacity-90 bg-cover bg-center bg-[url("/bg5.png")] overflow-hidden'>
      <div className='flex text-4xl md:text-6xl text-black p-4 md:p-8 justify-center items-center'>
        <h1 className='text-stroke-white text-shadow-white text-center'>How to Buy?</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-12 p-4 md:p-12 justify-center items-center'>
        <div className='relative'>
          <Card number='01' className='md:translate-y-6 md:rotate-[-7deg]' text="Create a wallet"/>
          <Image src="/arrow5.svg" alt="raydium" width={150} height={150} className='hidden md:block absolute md:translate-y-[50px] md:translate-x-[140px] md:rotate-[10deg]'/>
        </div>
        <div className='relative'>
          <Image src="/arrow7.svg" alt="raydium" width={140} height={150} className='hidden md:block absolute md:translate-x-[160px] md:translate-y-[130px]'/>
          <Card number='02' className='md:translate-y-48 md:rotate-[6deg]' text="Get some Sol"/>
        </div>
        <div className='relative'>
          <Card number='03' className='md:translate-y-6 md:rotate-[-4deg]' text="Go to Raydium!"/>
          <Image src="/arrow5.svg" alt="raydium" width={140} height={150} className='hidden md:block absolute md:translate-x-[160px] md:translate-y-[80px]'/>
        </div>
        <Card number='04' className='md:translate-y-48 md:rotate-[7deg]' text="Get your Share"/>
      </div>
     
      <Comm number='' className='mt-20 md:mt-80 mb-10 md:mb-20 flex justify-center items-center ' text="Join our Community"/>
     
     
      <div className='flex flex-col md:flex-row justify-between items-center p-4 md:px-12 bg-black w-full min-h-[120px] text-white'>


        <Image src="/logo.png" alt="raydium" width={100} height={100} className='mb-4 md:mb-0'/>
        <div className='flex gap-4'>
          <div className='flex gap-4 border-white border-2 rounded-3xl text-xl md:text-2xl p-2'>
            <CiMail />
          </div>
          <div className='flex gap-4 border-white border-2 rounded-3xl text-xl md:text-2xl p-2'>
            <FaSquareXTwitter />
          </div>
          <div className='flex gap-4 border-white border-2 rounded-3xl text-xl md:text-2xl p-2'>
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}