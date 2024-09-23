import Image from 'next/image'
import { MdContentCopy } from 'react-icons/md'

export default function Hero() {


 const copyAddress = () => {
    navigator.clipboard.writeText('56SDQBD*********PX1PUMP');
    alert('Address copied to clipboard');
 }; 

    return (
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
    )
}