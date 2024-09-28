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
      <div 
       style={{
        // backgroundImage: `url(${"/catpawprint.png"})`,
        // maskImage: 'url("/catpawprint.png")', // You'll need to create this mask image
        // WebkitMaskImage: 'url("/catpawprint.png")',
        // maskSize: 'cover',
        // WebkitMaskSize: 'cover'
      }}
      className="bg-yellow-500 hidden md:flex mx-2 border-2 border-black  flex-col md:flex-row border-b-[5px] pr-4 md:pr-16 pt-6 md:pt-8 pl-4 rounded-2xl z-20 w-full max-w-[1000px] h-[160px] md:h-[260px]">
        <div className="flex flex-col">
          <div className="text-lg md:text-3xl font-bold z-20">
            <div className='text-black text-shadow-white'>{text}</div>
          </div>
          <div className="text-black hidden md:block text-xs md:text-sm overflow-hidden mt-1 z-20">
          Stay updated on the latest news and developments. By joining us, you'll gain access to valuable insights and information about the fluctuating chart and strategic opportunities within the DBAS ecosystem. Be part of a community that offers not just tech but also a network of like-minded       </div>
          <div className="text-black md:hidden block text-xs md:text-xl overflow-hidden z-20">
            
          </div>
          <div className="flex gap-4 pt-2 md:pt-8">
            {/* Icons for desktop */}
            <div className=" flex gap-4">
              <div className="flex  border-black border-2 rounded-lg bg-black text-white text-sm md:text-2xl p-1  md:p-2">
                <CiMail />
              </div>
              <div className="flex gap-4 border-black border-2 rounded-lg bg-black text-white text-sm md:text-2xl p-1  md:p-2">
                <FaSquareXTwitter />
              </div>
              <div className="flex gap-4 border-black border-2 rounded-lg bg-black text-white text-sm md:text-2xl p-1  md:p-2">
                <FaDiscord />
              </div>
            </div>
          </div>
        </div>

        {/* Adjusted Image section for both mobile and desktop */}
        <div className="flex justify-end md:justify-center items-end md:mt-0">
          <Image src="/solocat.png" alt="raydium" width={800} height={800} className='w-[220px] h-[100px] md:w-[680px] md:h-[180px] lg:w-[1360px] lg:h-[360px]'/>
        </div>
      </div>

      {/* Icons for mobile */}
    

      <div 
       style={{
        // backgroundImage: `url(${"/catpawprint.png"})`,
        // maskImage: 'url("/catpawprint.png")', // You'll need to create this mask image
        // WebkitMaskImage: 'url("/catpawprint.png")',
        // maskSize: 'cover',
        // WebkitMaskSize: 'cover',
        // opacity: 0.1 // Set the opacity to be very low
      }}
      className="bg-yellow-500 md:hidden mx-2 border-2 border-black flex flex-row pr-4 pt-6 pl-4 rounded-2xl z-10 w-full max-w-[1000px] h-[200px] md:h-[260px]">
        
        {/* Left side - Text and Icons */}
        <div className="z-50 flex flex-col flex-1">
          <div className="text-lg md:text-3xl -mt-5 font-bold z-20">
            <div className='text-black text-shadow-white'>{text}</div>
          </div>
          
          {/* Text description */}
          <div className="text-black hidden md:block text-xs md:text-xl overflow-hidden z-20">
          Stay updated on the latest news and developments. By joining us, you'll gain access to valuable insights and information about the fluctuating chart and strategic opportunities within the DBAS ecosystem. Be part of a community that offers not just tech but also a network of like-minded      
          </div>
          <div className="text-black md:hidden block text-[10px] overflow-hidden z-20">
          Stay updated on the latest news and developments. By joining us, strategic opportunities within the DBAS ecosystem. Be part of a community that offers not just tech but also a network of like-minded      
          </div>
          
          {/* Icons */}
          <div className="flex gap-2 md:gap-4 pt-2 md:pt-8">
            <div className="flex border-black border-2 rounded-lg bg-black text-white text-sm md:text-2xl p-1 md:p-2">
              <CiMail />
            </div>
            <div className="flex gap-4 border-black border-2 rounded-lg bg-black text-white text-sm md:text-2xl p-1 md:p-2">
              <FaSquareXTwitter />
            </div>
            <div className="flex gap-4 border-black border-2 rounded-lg bg-black text-white text-sm md:text-2xl p-1 md:p-2">
              <FaDiscord />
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-end items-center">
          <Image src="/catrah.png" alt="raydium" width={800} height={800} className='w-[100px] h-[150px] md:w-[680px] md:h-[180px]'/>
        </div>
      </div>
    </div>
  );
}

