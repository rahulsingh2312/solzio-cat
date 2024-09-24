"use client"
import { FaEthereum } from "react-icons/fa";
import React, { useState } from 'react';
import { Settings, ChevronDown } from 'lucide-react';
import { CgSwapVertical } from "react-icons/cg";
import { FaBitcoin } from "react-icons/fa";
import WalletButton from '@/components/wallets/WalletButton';

const SwapInterface = ({className}:{className : String}) => {
  const [ethAmount, setEthAmount] = useState('0.00');
  const [solzioAmount, setSolzioAmount] = useState('0.00');

  return (
    
    <div className={`font-sans border-[#bd8400] h-[518px] w-[360px] border-4 bg-[#FFD87F] rounded-lg max-w-m ${className}} md:w-[360px] md:h-[518px]`} >
      <h1 className="text-2xl font-bold text-center mb-4 pt-4">1. BUY $SOLZIO</h1>
      
      <div className="bg-white px-8 border-t-2 border-[#bd8400] rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Swap </h2>
          <Settings className="text-gray-500" />
        </div>
        
        <div className="border-2 border-black rounded-lg p-3 mb-2">
          <div className="flex justify-between mb-1 gap-12">
            <span className="text-black text-xl">You Pay</span>
            <span className="text-black pr-2">Balance: 0.00 MAX</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={ethAmount}
              onChange={(e) => setEthAmount(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="0.00"
            />
            <button className="flex items-center bg-black border-white text-white border-2 px-3 py-1 rounded-full">
              <span className="mr-1 border-1 rounded-xl border-white">
                <FaEthereum />
              </span>
              ETH
              <ChevronDown className="ml-1" />
            </button>
          </div>
          <div className="bg-yellow-400 items-center justify-center ml-[110px] absolute translate-y-[-50%] rounded-full md:translate-y-0">
            <CgSwapVertical className="w-10 h-10" />
          </div>
        </div>
        
        <div className="flex justify-center my-2"></div>
        
        <div className="border-2 border-black rounded-lg p-3 mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-black">You Receive</span>
            <span className="text-black pr-2">Balance: 0.00 MAX</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={solzioAmount}
              onChange={(e) => setSolzioAmount(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="0.00"
            />
            <button className="flex items-center border-white bg-black text-white border-2 px-3 py-1 rounded-full">
              <FaBitcoin className="mr-1" />
              SOLZIO
              <ChevronDown className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="border-2 border-black rounded-lg p-3 mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-gray-900 text-xl">Slippage Tolerance</span>
            <span>%1.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-900 text-xl">Minimum received</span>
            <span>0.00 PONZIO</span>
          </div>
        </div>
        
        <div className="pl-[70px] justify-center items-center">
          <WalletButton />
        </div>
      </div>
    </div>
  );
};

export default SwapInterface;