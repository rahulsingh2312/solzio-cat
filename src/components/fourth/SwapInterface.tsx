"use client";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import React, { useState } from 'react';
import { Settings, ChevronDown } from 'lucide-react';
import { CgSwapVertical } from "react-icons/cg";
import WalletButton from '@/components/wallets/WalletButton';

const SwapInterface = ({ className }: { className: string }) => {
  const [ethAmount, setEthAmount] = useState('0.00');
  const [solzioAmount, setSolzioAmount] = useState('0.00');

  // State for dropdowns
  const [selectedPayCurrency, setSelectedPayCurrency] = useState('ETH');
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState('DBAS');

  // State to manage dropdown visibility
  const [isPayDropdownOpen, setIsPayDropdownOpen] = useState(false);
  const [isReceiveDropdownOpen, setIsReceiveDropdownOpen] = useState(false);

  const currencies = [
    { name: 'ETH', icon: <FaEthereum /> },
    { name: 'DBAS', icon: <FaBitcoin /> },
    // Add more currencies as needed
  ];

  const handlePayCurrencySelect = (currency: string) => {
    setSelectedPayCurrency(currency);
    setIsPayDropdownOpen(false); // Close dropdown
  };

  const handleReceiveCurrencySelect = (currency: string) => {
    setSelectedReceiveCurrency(currency);
    setIsReceiveDropdownOpen(false); // Close dropdown
  };

  // Function to handle swapping currencies
  const handleSwap = () => {
    // Swap the selected currencies
    const tempCurrency = selectedPayCurrency;
    setSelectedPayCurrency(selectedReceiveCurrency);
    setSelectedReceiveCurrency(tempCurrency);
    
    // You might want to swap the amounts as well, depending on your use case
    const tempAmount = ethAmount;
    setEthAmount(solzioAmount);
    setSolzioAmount(tempAmount);

    console.log(ethAmount, solzioAmount)
  };

  return (
    <div className={`font-sans border-[#bd8400] h-[518px] w-[360px] border-4 bg-[#FFD87F] rounded-lg max-w-m ${className}} md:w-[360px] md:h-[518px]`} >
    <h1 className="text-2xl font-bold text-center mb-4 pt-4">1. BUY $DBAS</h1>
    
      
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
            <div className="relative">
              <button 
                className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full"
                onClick={() => setIsPayDropdownOpen(prev => !prev)} // Toggle dropdown
              >
                {currencies.find(c => c.name === selectedPayCurrency)?.icon}
                {selectedPayCurrency}
                <ChevronDown className="ml-1" />
              </button>
              {isPayDropdownOpen && (
                <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {currencies.map(currency => (
                    <div
                      key={currency.name}
                      onClick={() => handlePayCurrencySelect(currency.name)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {currency.icon}
                      <span className="ml-2">{currency.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Swap Button */}
        <div className="flex justify-center my-2 cursor-pointer" onClick={handleSwap}>
          <div className="bg-yellow-300 p-2 rounded-full">
            <CgSwapVertical className="w-10 h-10" />
          </div>
        </div>
        
        {/* You Receive Section */}
        <div className="bg-gray-100 border-2 border-black rounded-lg p-3 mb-4">
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
            <div className="relative">
              <button 
                className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full"
                onClick={() => setIsReceiveDropdownOpen(prev => !prev)} // Toggle dropdown
              >
                {currencies.find(c => c.name === selectedReceiveCurrency)?.icon}
                {selectedReceiveCurrency}
                <ChevronDown className="ml-1" />
              </button>
              {isReceiveDropdownOpen && (
                <div className="absolute z-10 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
                  {currencies.map(currency => (
                    <div
                      key={currency.name}
                      onClick={() => handleReceiveCurrencySelect(currency.name)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {currency.icon}
                      <span className="ml-2">{currency.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Slippage Tolerance Section */}
        <div className="bg-gray-100 border-2 border-black rounded-lg p-3 mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-gray-900 text-sm">Slippage Tolerance</span>
            <span>%1.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Minimum received</span>
            <span>0.00 DBAS</span>
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
