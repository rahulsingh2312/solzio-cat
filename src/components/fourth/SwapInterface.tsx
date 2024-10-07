"use client";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import React, { useState } from 'react';
import { ethers } from 'ethers'; // Import ethers
import { Settings, ChevronDown } from 'lucide-react';
import { CgSwapVertical } from "react-icons/cg";
import WalletButton from '@/components/wallets/WalletButton';
import Image from "next/image";
import { routerAbi, tokenContractAddress, routerAddress } from "@/common/contract/contract";

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
    { name: 'DBAS', icon: <div className="rounded-full "><Image className=" rounded-full" src="/dbaslogo.webp" width={20} height={20} alt={""} /> </div>},
  ];

  const handlePayCurrencySelect = (currency: string) => {
    setSelectedPayCurrency(currency);
    setIsPayDropdownOpen(false);
  };

  const handleReceiveCurrencySelect = (currency: string) => {
    setSelectedReceiveCurrency(currency);
    setIsReceiveDropdownOpen(false);
  };

  // Function to handle swapping currencies
  const handleSwapCurrencies = () => {
    const tempCurrency = selectedPayCurrency;
    setSelectedPayCurrency(selectedReceiveCurrency);
    setSelectedReceiveCurrency(tempCurrency);

    const tempAmount = ethAmount;
    setEthAmount('0');
    setSolzioAmount('0');
  };

  // Swap Functionality using ethers.js
  const handleSwap = async () => {
    try {
      // Check if Ethereum provider is available
      if (!window.ethereum) throw new Error("Ethereum provider not found");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const routerContract = new ethers.Contract(routerAddress, routerAbi, signer);

      // Construct the path of the swap
      const path = [
        selectedPayCurrency === 'ETH' ? ethers.constants.AddressZero : "ETH_CONTRACT_ADDRESS", // ETH or token address
        selectedReceiveCurrency === 'DBAS' ? "DBAS_CONTRACT_ADDRESS" : tokenContractAddress , // DBAS or token address
      ];

      // Request the transaction and await confirmation
      // const swapTx = await routerContract.swap(
      //   ethers.utils.parseUnits(ethAmount, 18), // amountIn
      //   ethers.utils.parseUnits("0.00", 18), // amountOutMin, set to zero for now
      //   path,
      //   signer.getAddress(), // Receiver address
      //   Math.floor(Date.now() / 1000) + 60 * 20 // Deadline: 20 minutes from now
      // );

      // // Wait for transaction to be mined
      // await swapTx.wait();
      console.log("ethAmount:",ethAmount, "solzioAmount:",solzioAmount)
      console.log("Swap completed successfully!");
      alert("Swap completed successfully!");
    } catch (error) {
      console.error("Error swapping tokens:", error);
      alert(`Error swapping tokens: ${error.message}`);
    }
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
              value={selectedPayCurrency =='ETH'? ethAmount: solzioAmount}
              onChange={(e) => selectedPayCurrency =='ETH'? setEthAmount(e.target.value): setSolzioAmount(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="0.00"
            />
            <div className="relative">
              <button
                className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full"
                onClick={() => setIsPayDropdownOpen(prev => !prev)} // Toggle dropdown
              >
                {currencies.find(c => c.name === selectedPayCurrency)?.icon}
                <span className="ml-2"> {selectedPayCurrency}</span>
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
        <div className="flex justify-center my-2 cursor-pointer" onClick={handleSwapCurrencies}>
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
              value={selectedReceiveCurrency =='DBAS'? solzioAmount: ethAmount}
              onChange={(e) => selectedReceiveCurrency =='DBAS'? setSolzioAmount(e.target.value): setEthAmount(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="0.00"
            />
            <div className="relative">
              <button
                className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full"
                onClick={() => setIsReceiveDropdownOpen(prev => !prev)} // Toggle dropdown
              >
                {currencies.find(c => c.name === selectedReceiveCurrency)?.icon}
                <span className="ml-2"> {selectedReceiveCurrency}</span>
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
            <span className="text-black">Slippage Tolerance</span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value="1"
              className="text-2xl bg-transparent w-1/2 outline-none"
              placeholder="1.0%"
            />
          </div>
        </div>

        {/* Swap Button */}
        <button
          className="w-full text-center text-xl bg-yellow-400 py-2 rounded-full"
          onClick={handleSwap}
        >
          SWAP
        </button>
      </div>
    </div>
  );
};

export default SwapInterface;
