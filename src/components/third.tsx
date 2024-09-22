import React from 'react';

export default function ResponsiveSolzioDashboard() {
  return (
    <div className="min-h-screen bg-[#fff4d8] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <h1 className="text-[#f3eace] text-8xl sm:text-9xl md:text-[250px] font-bold font-['Neuton'] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50">$SOLZIO</h1>

        <div className="relative z-10">
          <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl font-normal font-['Comic Neue'] leading-tight mb-8">Pounce on the price before it catnaps!</h2>

          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-2/3">
              {/* Placeholder for the chart component */}
              <div className="bg-gray-800 rounded-lg shadow-lg p-4 h-[500px]">
                <p className="text-white">Chart placeholder</p>
                {/* You would replace this with your actual chart component */}
              </div>
            </div>

            <div className="w-[381px] h-[402px] relative">
              <div className="h-[75px] left-[42px] top-[37px] absolute shadow justify-start items-center gap-9 inline-flex">
                <div className="relative">
                  <div className="absolute inset-x-0 bottom-8 h-8 bg-black rounded-b-[18px] transform translate-y-1"></div>
                  <div className="relative w-[297px] h-2[75px] px-[18px] py-[7.50px] bg-[#ed3b23] rounded-[18px] border-2 border-black justify-center items-center gap-[15px] flex">
                    <div className="text-white text-[39px] font-normal font-['Comic Neue']">$386,836.44</div>
                  </div>
                </div>
              </div>
              <div className="left-[115px] top-0 absolute text-black text-[26px] font-normal font-['Comic Neue']">Current Price</div>
              <div className="h-[61px] pl-12 left-0 top-[196px] absolute justify-start items-center gap-[21px] inline-flex">
                {['0h', '12m', '10s'].map((text, index) => (
                  <div key={index} className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-black rounded-b-xl transform translate-y-1"></div>
                    <div className="relative h-[61px] px-5 py-[13px] bg-[#ffc43b] rounded-xl border-2 border-black justify-center items-center gap-2.5 flex">
                      <div className="text-black text-3xl font-bold font-['Comic Neue']">{text}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="left-[106px] top-[159px] absolute text-black text-[26px] font-normal font-['Comic Neue']">Next Debase in</div>
              <div className="relative left-[38px] top-[341px] ">
               
                <div className="relative w-[304px] h-[61px] px-5 py-[13px] bg-black rounded-xl border-2 border-[#333] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-3xl font-normal font-['Comic Neue']">2.115964889526367</div>
                </div>
              </div>
              <div className="left-[124px] top-[304px] absolute text-black text-[26px] font-normal font-['Comic Neue']">Total Supply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}