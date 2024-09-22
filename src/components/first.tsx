"use client"

import Head from 'next/head';
import Image from 'next/image';
import { MdContentCopy } from "react-icons/md";
import { useState } from 'react';



export default function Home() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const copyAddress = () => {
    navigator.clipboard.writeText('56SDQBD*********PX1PUMP');
    alert('Address copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffdd75d4] via-[#fef9c2ba] to-[#fef9c2ba]">
      <Head>
        <title>Solzio Cat - The Purr-fect Coin for Crypto Enthusiasts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="">



        <nav className='bg-yellow-300 lg:bg-transparent flex justify-between items-center px-2'>

          <div className="text-black">
            <Image
              width={150}
              height={100}
              src="/logo.png"
              className="pl-14 h-20"
              alt="Solzio Cat"
            />
          </div>

          <div className="lg:hidden">

            <button className="text-black text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </button>

          </div>


          <ul className={`text-black text-2xl lg:flex lg:space-x-10 ${isMenuOpen ? 'block bg-yellow-300' : 'hidden'} lg:block`}>
            <li><a href="#" className="hover:text-amber-500 block py-2 lg:py-0">Home</a></li>
            <li><a href="#" className="hover:text-amber-500 block py-2 lg:py-0">About</a></li>
            <li><a href="#" className="hover:text-amber-500 block py-2 lg:py-0">Price</a></li>
            <li><a href="#" className="hover:text-amber-500 block py-2 lg:py-0">Buy</a></li>
          </ul>


          <button className='mt-1 shadow-xl mr hidden lg:block'>
            <div className="w-[167px] h-11 px-3 py-[5px] bg-[#ffc43b] rounded-xl justify-center items-center gap-2.5 inline-flex ">
              <div className="text-black text-xl font-normal font-['Comic Neue'] ">Connect Wallet</div>
            </div>
          </button>


        </nav>


      </header>

      <main className="container mx-auto px-4 py-12 z-10 relative">

        <div className='text-center'>


          <div className="relative">
            <Image
              width={100}
              height={100}
              alt='coin'
              src="/coin.svg"
              className="w-[100px] h-[56px] md:w-[160px] md:h-[90px] rotate-[-21.47deg] absolute top-0 right-[10%] md:right-[290px] transform translate-x-[50%] translate-y-[80%]"
            />

            <Image
              width={100}
              height={100}
              alt='coin'
              src="/coin.svg"
              className="w-[100px] h-[44px] md:w-[160px] md:h-[70px] rotate-[21.47deg] absolute top-4 md:top-8 right-[15%] md:right-[310px] transform translate-x-[10%] translate-y-[10%]"
            />

            <Image
              alt='bg'
              width={106}
              height={106}
              src="/coin.svg"
              className="w-[60px] h-[59px] md:w-[96px] md:h-[95px] rotate-[41.47deg] absolute -top-20 md:-top-30 left-1/4 transform -translate-x-1/2 translate-y-[80%]"
            />

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-4 pt-8 sm:pt-12 md:pt-16">
              <span className='text-yellow-500 text-stroke-black text-shadow-black text-bold'>
                The Purr-fect Coin
              </span>
              <br />
              <span className="text-black font-comic-neue-regular text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                for Crypto Enthusiasts
              </span>
            </h1>

            <h1 className="text-black/10 text-7xl sm:text-8xl md:text-9xl lg:text-[200px] xl:text-[250px] font-bold font-['Neuton'] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-50 pt-[100px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px] xl:pt-[180px]">
              $SOLZIO
            </h1>


          </div>

        </div>

        <div className="relative">
          <Image
            width={1800}
            height={1800}
            alt='catbg'
            src="/imagee.png"


            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start ">


          </div>
        </div>
        <div className='pt-0 flex justify-center items-center'>
          
          <div className="h-[60px] justify-start items-center gap-4 inline-flex">
            
         
          <div className="flex flex-col sm:flex-row gap-4 items-center">
      <div className="w-full sm:w-[340px] h-[60px] relative">
        <div className="w-full sm:w-[340px] h-[60px] absolute bg-[#fff7b9] rounded-xl shadow border border-black" />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <MdContentCopy className="w-6 h-6 cursor-pointer" onClick={copyAddress} />
        </div>
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-lg sm:text-[22px] font-bold truncate pr-12">
          56SDQBD*********PX1PUMP
        </div>
      </div>
      <button className="w-full sm:w-[165px] h-[60px] rounded-xl shadow border border-black hover:bg-[#dc4d4d] bg-[#f47372]">
        <div className="text-black text-lg sm:text-[22px] font-normal">
          Buy $SOLZIO
        </div>
      </button>
    </div>

          </div>

        </div>
      </main>
    </div>
  );
}