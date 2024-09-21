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
            
            <div className="w-full md:w-1/3 bg-white rounded-lg shadow-lg p-6">
              <div className="mb-8">
                <h3 className="text-center text-2xl font-normal font-['Comic Neue'] mb-2">Current Price</h3>
                <div className="bg-[#ed3b23] rounded-lg shadow-lg p-4">
                  <p className="text-white text-3xl font-normal font-['Comic Neue'] text-center">$386,836.44</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-center text-2xl font-normal font-['Comic Neue'] mb-2">Next Debase in</h3>
                <div className="flex justify-between">
                  <div className="bg-[#ffc43b] rounded-lg shadow border border-black p-3">
                    <p className="text-black text-2xl font-bold font-['Comic Neue']">0h</p>
                  </div>
                  <div className="bg-[#ffc43b] rounded-lg shadow border border-black p-3">
                    <p className="text-black text-2xl font-bold font-['Comic Neue']">12m</p>
                  </div>
                  <div className="bg-[#ffc43b] rounded-lg shadow border border-black p-3">
                    <p className="text-black text-2xl font-bold font-['Comic Neue']">10s</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-center text-2xl font-normal font-['Comic Neue'] mb-2">Total Supply</h3>
                <div className="bg-black rounded-lg shadow p-4">
                  <p className="text-white text-2xl font-normal font-['Comic Neue'] text-center">2.115964889526367</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}