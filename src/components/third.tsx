import React from 'react';
import Image from 'next/image';

const PriceBox = ({ value, label }: { value: string, label: string }) => (
  <div className="relative mb-8">
    <div className="absolute inset-x-0 bottom-8 h-8 bg-black rounded-b-[18px] transform translate-y-1" />
    <div className="relative w-full px-4 py-2 bg-[#ed3b23] rounded-[18px] border-2 border-black flex justify-center items-center">
      <div className="text-white text-2xl sm:text-3xl md:text-4xl">{value}</div>
    </div>
    <div className="text-center text-black text-xl mt-2">{label}</div>
  </div>
);

const PriceBox2 = ({ value, label }: { value: string, label: string }) => (
  <div className="relative mb-8">
    <div className="absolute inset-x-0 bottom-8 h-8 bg-slate-500 border-2 border-black rounded-b-[18px] transform translate-y-1" />
    <div className="relative w-full px-4 py-2 bg-black rounded-[18px] border-2 border-black flex justify-center items-center">
      <div className="text-white text-2xl sm:text-3xl md:text-3xl">{value}</div>
    </div>
    <div className="text-center text-black text-xl mt-2">{label}</div>
  </div>
);

const TimerBox = ({ value }: { value: string }) => (
  <div className="relative">
    <div className="absolute inset-x-0 bottom-0 h-4 bg-black rounded-b-xl transform translate-y-1" />
    <div className="relative h-[61px] px-5 py-[13px] bg-[#ffc43b] rounded-xl border-2 border-black flex justify-center items-center">
      <div className="text-black text-3xl">{value}</div>
    </div>
  </div>
);

export default function ResponsiveSolzioDashboard() {
  return (
    <div id="price" className="min-h-screen bg-[#fff4d8] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <h1 className="text-[#f3eace] text-8xl sm:text-9xl md:text-[250px] font-bold font-['Neuton'] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50">
          $SOLZIO
        </h1>
        
        <div className="relative z-10">
          <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl leading-tight mb-8">
            Pounce on the price before it catnaps!
          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-2/3">
              <Image src="/body.svg" alt="chart" width={800} height={800} className="object-contain" />
            </div>
            
            <div className="w-full md:w-1/3 max-w-[381px] pt-24 p-6">
              <PriceBox value="$386,836.44" label="Current Price" />
              
              <div className="mb-8">
                <div className="flex justify-center items-center gap-4">
                  {['0h', '12m', '10s'].map((text, index) => (
                    <TimerBox key={index} value={text} />
                  ))}
                </div>
                <div className="text-center text-black text-xl mt-2">Next Debase in</div>
              </div>
              
              <PriceBox2 value="2.115964889526367" label="Total Supply" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}