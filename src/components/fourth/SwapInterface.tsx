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
    <div className={`bg-yellow-200 h-[548px] w-[300px] border-2 border-black rounded-lg max-w-m ${className}`} >
 
      <h1 className="text-2xl font-bold text-center mb-4 pt-4">BUY $SOLZIO</h1>
      
      <div className="bg-white border-t-2 border-black rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Swap </h2>
          <Settings className="text-gray-500" />
        </div>
        
        <div className="bg-gray-100 border-2 border-black rounded-lg p-3 mb-2">
          <div className="flex justify-between mb-1 gap-12">
            <span className="text-gray-500">You Pay</span>
            <span className="text-gray-500">Balance: 0.00 MAX</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={ethAmount}
              onChange={(e) => setEthAmount(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="0.00"
            />
            <button className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full">
            <FaEthereum />
            ETH
              <ChevronDown className="ml-1" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center my-2">
          <div className="bg-yellow-300  p-2 rounded-full ">
          <CgSwapVertical className="w-10 h-10" />

          </div>
        </div>
        
        <div className="bg-gray-100 border-2 border-black rounded-lg p-3 mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-gray-500">You Receive</span>
            <span className="text-gray-500">Balance: 0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={solzioAmount}
              onChange={(e) => setSolzioAmount(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="0.00"
            />
            <button className="flex items-center  bg-gray-200 border-black border-2  px-3 py-1 rounded-full">
            <FaBitcoin className="mr-1  " />
            PONZIO
              <ChevronDown className="ml-1" />
            </button>
          </div>
        </div>
        
              <div className="bg-gray-100 border-2 border-black  rounded-lg p-3 mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-gray-500">Slippage Tolerance</span>
            <span>%1.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Minimum received</span>
            <span>0.00 PONZIO</span>
          </div>
        </div>
        
        <div className=' pl-16 justify-center items-center'>
          <WalletButton/>

          </div>
      </div>
    </div>
  );
};

export default SwapInterface;