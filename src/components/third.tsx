'use client'; // This ensures the component is treated as a Client Component
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ethers } from 'ethers';
import {
  ponzioCatAbi, tokenContractAddress, IUniswapV2PairAbi, 
  routerAbi,
  routerAddress,
  univ2PairAddress
} from '../common/contract/contract';

// Define your contract's ABI and address


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
  const [totalSupply, setTotalSupply] = useState<string>('0');
  const [currentPrice, setCurrentPrice] = useState<string>('0');
  const [getHour, setHour] = useState<number>(0);
  const [getMinute, setMinute] = useState<number>(0);
  const [getSecond, setSecond] = useState<number>(0);

  // Function to fetch total supply from the contract
  const fetchTotalSupply = async () => {
    try {
      // Set up ethers provider (Metamask, Infura, or any other provider)
       // @ts-ignore
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenContractAddress, ponzioCatAbi, provider);
      
      // Call the totalSupply function
      const supply = await contract.totalSupply();
      
      // Format the supply value (assuming it needs to be converted from wei)
      setTotalSupply(ethers.utils.formatUnits(supply, 18)); // Adjust the decimals if needed
    } catch (error) {
      console.error("Error fetching total supply:", error);
    }
  };

  const fetchCurrentPrice = async () =>{
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const reserve = await univ2Pair.getReserves();
    // const reserve1 = new ethers.BigNumber(reserve.reserve0);
    const etherScanProvider = new ethers.providers.EtherscanProvider("homestead","71H5MYFEP5ZA8XDYVT1W6D3MCIACKDCB8Y")
    const etherPrice = await etherScanProvider.getEtherPrice();
    const tokenPrice = (((reserve.reserve0)/(reserve.reserve1))*etherPrice).toFixed(5);
    setCurrentPrice(tokenPrice);
  }

  const timeRemainingForDebase = async () =>{
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(tokenContractAddress, ponzioCatAbi, provider);
    const deployedTime = (await contract.DEPLOYED_TIME()).toString();
    console.log("deployedTime", deployedTime)
    const currentTimeStamp = Math.floor((Date.now()/1000));
    console.log("currentTimeStamp", currentTimeStamp)
    const nextDebaseIn = 2058-((currentTimeStamp - deployedTime)% 2058);
    convertSeconds(nextDebaseIn);
  }

  const convertSeconds = (seconds: number) => {
    const hours = Math.floor(seconds / 3600); // 1 hour = 3600 seconds
    const minutes = Math.floor((seconds % 3600) / 60); // Remaining minutes
    const remainingSeconds = seconds % 60; // Remaining seconds
    setHour(hours);
    setMinute(minutes);
    setSecond(remainingSeconds)
  };

  useEffect(() => {
    fetchTotalSupply();
    fetchCurrentPrice();
    timeRemainingForDebase();
  }, []); // Fetch when component mounts

  return (
    <div id="price" className="min-h-screen bg-[#fff4d8] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <h1 className="text-[#f3eace] text-8xl sm:text-9xl md:text-[250px] font-bold font-['Neuton'] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-50">
          $DBAS
        </h1>
        
        <div className="relative z-10">
          <h2 className="text-center text-black text-2xl sm:text-3xl md:text-4xl leading-tight mb-8">
          Watch the chart and time the perfect entry before $DBAS gets too Debased!

          </h2>
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="w-full md:w-2/3">
            <iframe id="dextools-widget" title="DEXTools Trading Chart" className="w-full h-[500px] rounded-lg shadow-2xl" src="https://www.dextools.io/widget-chart/en/ether/pe-light/0x90908e414d3525e33733d320798b5681508255ea?theme=dark&amp;chartType=1&amp;chartResolution=30&amp;drawingToolbars=false"></iframe>
              {/* <Image src="/Body.svg" alt="chart" width={800} height={800} className="object-contain" /> */}
            </div>
            
            <div className="w-full md:w-1/3 max-w-[381px] flex flex-col items-center justify-center pt-24 p-8">
              <PriceBox value={`$${currentPrice}`} label="Current Price" />
              
              <div className="mb-8">
                <div className="flex justify-center items-center gap-4">
                  {[`${getHour}`, `${getMinute}`, `${getSecond}`].map((text, index) => (
                    <TimerBox key={index} value={text} />
                  ))}
                </div>
                <div className="text-center text-black text-xl mt-2">Next Debase in</div>
              </div>
              
              <PriceBox2 value={totalSupply} label="Total Supply" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
