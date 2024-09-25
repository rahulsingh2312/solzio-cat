import React from 'react';

interface CardProps {
  text: string;
  className?: string;
  number: string; 
  description: string;// New prop for the transparent number
}

export default function Card({ text, className = '', number, description }: CardProps) {
  return (
    <div className={`relative ${className}`}>
    
   

      <div className="bg-white border-2 border-black flex justify-center items-center border-b-[5px] pb-12 pr-16 pt-8 pl-4 w-[300px] h-[180px] rounded-lg z-20">
        <div className="absolute top-0 right-4 text-slate-300 text-9xl font-bold z-10">{number}</div>
        <div className="text-3xl pt-4 font-bold z-20 ">
          <div  className="text-3xl pt-4 font-bold z-20 truncate whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
          </div>
           <div className="text-base z-20 pt-5">       {description} </div></div>
       
      </div>
    </div>
  );
}
