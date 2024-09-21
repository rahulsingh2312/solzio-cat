"use client"

import Head from 'next/head';
import Image from 'next/image';
import { MdContentCopy } from "react-icons/md";




export default function Home() {
  return (
    <div className="min-h-screen bg-[#fef9c2ba]">
      <Head>
        <title>Solzio Cat - The Purr-fect Coin for Crypto Enthusiasts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto px-10 py-6 flex justify-between items-center">
       
        <div className="text-2xl  text-black">

          
          <img src="/logo.png" className='pl-14 h-20 ' alt="Solzio Cat" /></div>
       
        <nav>

        <ul className="text-black text-xl flex space-x-10">
            <li><a href="#" className="hover:text-amber-600 ">Home</a></li>
            <li><a href="#" className="hover:text-amber-600">About</a></li>
            <li><a href="#" className="hover:text-amber-600">Price</a></li>
            <li><a href="#" className="hover:text-amber-600">Buy</a></li>
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
               
             <img 
  src="/coin.svg" 
  className="w-[160px] h-[90px] rotate-[-41.47deg] absolute top-0 right-[290px] transform translate-x-[50%] translate-y-[80%]" 
/>


              
               <img 

             src="/coin.svg" 
            className="w-[96px] h-[95px] rotate-[41.47deg] absolute -top-30 left-1/4 transform -translate-x-1/2  translate-y-[80%]"/>
               
               
               <h1 className="text-7xl font-bold mb-4 pt-16">
           
              <span className='text-yellow-500   text-stroke-black text-shadow-black text-bold'>
                The Purr-fect Coin
              </span>

             
              <br />
              <span className="text-black ">for Crypto Enthusiasts</span>

             

            
  
              <h1 className="text-black/10 text-8xl sm:text-9xl md:text-[250px] font-bold font-['Neuton'] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-50 pt-[180px]">$SOLZIO</h1>

            
             
            </h1>
            </div>

           </div>

        <div className="relative">
          <img
            src="/imagee.png"
          
            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-12">
            {/* <h1 className="text-6xl font-bold mb-4">
              The Purr-fect Coin
              <br />
              for Crypto Enthusiasts
            </h1> */}
          
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
        <div className="left-[14px] top-[18px] absolute text-black text-[22px] font-bold "> <span className='flex gap-4'>56SDQBD*********PX1PUMP <MdContentCopy className='cursor-pointer' /></span> 
        </div>
    </div>


    <button className="w-[165px] h-[60px] relative">
        <div className="w-[165px] h-[60px] left-0 top-0 absolute bg-[#f47372] rounded-xl shadow border border-black" />
        <div className="left-[18px] top-[18px] absolute text-black text-[22px] font-normal ">Buy $SOLZIO</div>
    </button>
     </div>
      
</div>
      </main>
    </div>
  );
}