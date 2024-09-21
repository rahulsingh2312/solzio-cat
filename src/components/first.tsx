import Head from 'next/head';
import Image from 'next/image';
import { MdContentCopy } from "react-icons/md";




export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-100">
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

      <main className="container mx-auto px-4 py-12">

           <div className='text-center'>
            
            <h1 className="text-6xl font-bold mb-4 ">
              <span className='text-yellow-500  text-stroke-black text-shadow-black text-bold'>
                The Purr-fect Coin
              </span>


              <br />
              <span className="text-black ">for Crypto Enthusiasts</span>
             
            </h1>

           </div>



        <div className="relative">
          <img
            src="/image.png"
          
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
        <div className="left-[14px] top-[18px] absolute text-black text-[22px] font-bold font-['Comic Neue']"> <span className='flex gap-4'>56SDQBD*********PX1PUMP <MdContentCopy className='cursor-pointer' /></span> 
        </div>
    </div>


    <button className="w-[165px] h-[60px] relative">
        <div className="w-[165px] h-[60px] left-0 top-0 absolute bg-[#f47372] rounded-xl shadow border border-black" />
        <div className="left-[18px] top-[18px] absolute text-black text-[22px] font-normal font-['Comic Neue']">Buy $SOLZIO</div>
    </button>
     </div>
      
</div>
      </main>
    </div>
  );
}