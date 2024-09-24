import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import Image from 'next/image';
interface CardProps {
  text: string;
  className?: string;
  number: string; // New prop for the transparent number
}

export default function Comm({ text, className = '', number }: CardProps) {
  return (
    <div className={`relative ${className}`}>
    
   

      
      <div className="bg-yellow-500 border-2  border-black flex  border-b-[5px] pb-12 pr-16 pt-8 pl-4 md:w-[1000px] md:h-[260px] w-[660px] h-[260px] rounded-2xl z-20  ">

       
       
       <div className='flex flex-col gap-4'>
       <div className="text-2xl md:text-3xl font-bold  z-20">  <div className='text-black text-shadow-white'>{text}</div><div 
        className=" z-20 pt-5 text-black text-sm md:text-xl">Join our community and become part of the BaseMillionCat family, where every member contributes to our shared vision of success. Together, we’ll purr our way to new heights, fostering connections and creating opportunities for all! </div>
         
       
        
        </div>
       
        <div className=' hidden md:flex gap-4 pt-0'>
           <div className='flex gap-4 border-black border-2 rounded-lg bg-black text-white text-2xl p-2'>
              <CiMail />
          
             </div>
          
                <div className='flex gap-4 border-black border-2 rounded-lg bg-black text-white text-2xl  p-2'>
             <FaSquareXTwitter />
             </div>

            <div className='flex gap-4 border-black border-2 rounded-lg bg-black text-white text-2xl  p-2'>
          <FaDiscord />

          </div>
  
        </div>
       </div>
       <div className='flex justify-center items-center pb-[90px]'>
            <Image src="/solocat.png" alt="raydium" width={800} height={800} className=' w-[1360px] h-[360px] md:w-[480px] md:h-[180px] '/>
        </div>   
      </div>
      <div>        
        </div>  
    </div>
  );
}
