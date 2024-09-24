"use client";

import Head from 'next/head';
import Image from 'next/image';
import { MdContentCopy } from "react-icons/md";

export default function Home() {
  const copyAddress = () => {
    navigator.clipboard.writeText('56SDQBD*********PX1PUMP');
    alert('Address copied to clipboard');
  };

  return (
    <div id="first" className="min-h-screen bg-gradient-to-b from-[#ffdd75d4] via-[#fef9c2ba] to-[#fef9c2ba]">
      <main className="container mx-auto px-4 py-12 relative">
        <div className='text-center'>
          <h1 className="text-7xl font-bold mb-4 pt-16">
            <span className='text-yellow-500 text-stroke-black text-shadow-black text-bold'>
              The Purr-fect Coin
            </span>
            <br />
            <span className="text-black">for Crypto Enthusiasts</span>
          </h1>
          <h1 className="text-black/10 text-8xl font-bold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-50 pt-[180px]">$SOLZIO</h1>
        </div>

        <div className="relative mb-8">
          <Image
            width={1800}
            height={1800}
            alt='catbg'
            src="/imagee.png"
            className="rounded-lg"
          />
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between max-w-md mx-auto mb-4'>
          <div className="flex items-center justify-between w-full bg-[#fff7b9] rounded-xl shadow border border-black p-4 mb-4 md:mb-0">
            <span className="text-black text-[22px] font-bold">
              56SDQBD*********PX1PUMP
            </span>
            <MdContentCopy className='cursor-pointer' onClick={copyAddress} />
          </div>

          <button className="w-full md:w-[200px] h-[60px] rounded-xl shadow border border-black hover:bg-[#dc4d4d] bg-[#f47372] flex items-center justify-center md:ml-4">
            <span className="text-black text-[22px] font-normal">
              Buy $BMC
            </span>
          </button>
        </div>
      </main>
    </div>
  );
}
