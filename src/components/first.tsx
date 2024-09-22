"use client"

import Head from 'next/head';
import Image from 'next/image';
import { MdContentCopy } from "react-icons/md";




export default function Home() {

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

      <header className="container mx-auto px-10 py-6 flex justify-between items-center">

        <div className="text-black">
          <Image 
            width={150} 
            height={100} 
            src="/logo.png" 
            className="pl-14 h-20" 
            alt="Solzio Cat" 
          />
        </div>

        <nav>


          <ul className="text-black text-2xl flex space-x-10">
            <li><a href="#" className="hover:text-amber-500 ">Home</a></li>
            <li><a href="#" className="hover:text-amber-500">About</a></li>
            <li><a href="#" className="hover:text-amber-500">Price</a></li>
            <li><a href="#" className="hover:text-amber-500">Buy</a></li>
          </ul>


        </nav>
        <button className='mt-1 shadow-xl mr'>
          <div className="w-[167px] h-11 px-3 py-[5px] bg-[#ffc43b] rounded-xl justify-center items-center gap-2.5 inline-flex ">
            <div className="text-black text-xl font-normal font-['Comic Neue'] ">Connect Wallet</div>
          </div>
        </button>

      </header>

      <main className="container mx-auto px-4 py-12 z-10 relative">

        <div className='text-center'>


          <div className="relative">

            <Image
              width={100}
              height={100}
              alt='coin'
              src="/coin.svg"

              className="w-[160px] h-[90px] rotate-[-21.47deg] absolute top-0 right-[290px] transform translate-x-[50%] translate-y-[80%]"
            />

<Image
              width={100}
              height={100}
              alt='coin'
              src="/coin.svg"

              className="w-[160px] h-[70px] rotate-[21.47deg] absolute top-8 right-[310px] transform translate-x-[10%] translate-y-[10%]"
            />



            <Image
              alt='bg'
              width={106}
              height={106}
              src="/coin.svg"
              className="w-[96px] h-[95px] rotate-[41.47deg] absolute -top-30 left-1/4 transform -translate-x-1/2  translate-y-[80%]" />

              
         


              
         

         


            <h1 className="text-7xl font-bold mb-4 pt-16">

              <span className='text-yellow-500   text-stroke-black text-shadow-black text-bold'>
                The Purr-fect Coin
              </span>


              <br />
              <span className="text-black font-comic-neue-regular">for Crypto Enthusiasts</span>

              </h1>



              <h1 className="text-black/10 text-8xl sm:text-9xl md:text-[250px] font-bold font-['Neuton'] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-50 pt-[180px]">$SOLZIO</h1>



           
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
            <div className="w-[340px] h-[60px] relative">
              <div className="w-[340px] h-[60px] left-0 top-0 absolute bg-[#fff7b9] rounded-xl shadow border border-black" />
              <div className="w-[30px] h-[30px] left-[296px] top-[15px] absolute">
                <div className="w-[23.75px] h-[23.75px] left-[3.12px] top-[3.12px] absolute">
                </div>
              </div>
              <div className="left-[14px] top-[18px] absolute text-black text-[22px] font-bold "> <span className='flex gap-4'>56SDQBD*********PX1PUMP <MdContentCopy className='cursor-pointer' onClick={copyAddress} /></span>
              </div>
            </div>


            <button className="relative w-[165px] h-[60px] rounded-xl shadow border border-black hover:bg-[#dc4d4d] bg-[#f47372]">
              <div className="absolute left-[18px] top-[18px] text-black text-[22px] font-normal">
                Buy $SOLZIO
              </div>
            </button>

          </div>

        </div>
      </main>
    </div>
  );
}