"use client";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import { BigNumber, ethers } from 'ethers'; // Import ethers
import { Settings, ChevronDown } from 'lucide-react';
import { CgSwapVertical } from "react-icons/cg";
import WalletButton from '@/components/wallets/WalletButton';
import { useWallet } from '../wallets/WalletContextProvider';
import Image from "next/image";
import {
  tokenContractAddress,
  routerAddress,
  routerAbi,
  IWETHAbi,
  ponzioCatAbi,
  IERC20Abi,
  IUniswapV2RouterAbi,
  univ2PairAddress, IUniswapV2PairAbi,
  uniRouterAddress,
  WETH_ADDRESS,
  ETH_ADDRESS

} from "@/common/contract/contract";

import { sign } from "crypto";

const SwapInterface = ({ className }: { className: string }) => {
  const { walletAddress } = useWallet();
  const [ethAmount, setEthAmount] = useState<string>('0.00');
  const [solzioAmount, setSolzioAmount] = useState<string>('0.00');
  const [ethBalance, setEthBalance] = useState<string>('0.00');
  const [solzioBalance, setSolzioBalance] = useState<string>('0.00');
  const [ethReserve,setEthReserve] = useState<string>('0');
  const [solzioReserve,setSolzioReserve] = useState<string>('0');

  // State for dropdowns
  const [selectedPayCurrency, setSelectedPayCurrency] = useState('ETH');
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState('DBAS');

  // State to manage dropdown visibility
  const [isPayDropdownOpen, setIsPayDropdownOpen] = useState(false);
  const [isReceiveDropdownOpen, setIsReceiveDropdownOpen] = useState(false);

  const currencies = [
    { name: 'ETH', icon: <FaEthereum /> },
    { name: 'DBAS', icon: <div className="rounded-full "><Image className=" rounded-full" src="/dbaslogo.webp" width={20} height={20} alt={""} /> </div> },
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
      const user = await signer.getAddress()

      const IUniswapV2RouterContract = new ethers.Contract(routerAddress, IUniswapV2RouterAbi, signer);
      const routerContract = new ethers.Contract(routerAddress, routerAbi, signer);
      const wethContract = new ethers.Contract(WETH_ADDRESS, IWETHAbi, signer);
      const tokenContract = new ethers.Contract(tokenContractAddress, IERC20Abi, signer)

      // Construct the path of the swap
      const path = [
        selectedPayCurrency === 'ETH' ? ETH_ADDRESS : tokenContractAddress, // ETH or token address
        selectedReceiveCurrency === 'DBAS' ? tokenContractAddress : ETH_ADDRESS, // DBAS or token address
      ];
      // const path = [ETH_ADDRESS, tokenContractAddress]
      // const path = [WETH_ADDRESS, tokenContractAddress]
      const feeData = await provider.getFeeData();
      const amountOutMin = ethers.utils.parseUnits("0", 18);
      const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

      let tx;
      if (selectedPayCurrency == 'ETH') {
        const amountIn = ethers.utils.parseEther(ethAmount);
        tx = await routerContract.swap(amountIn, amountOutMin, path, user, deadline, {
          value: amountIn,
          maxPriorityFeePerGas: feeData["maxPriorityFeePerGas"],
          maxFeePerGas: feeData["maxFeePerGas"],
          gasLimit: "3000000",
        });
        const receipt = await tx.wait();
      } else {
        const amountIn = ethers.utils.parseEther(solzioAmount);

        const tokenAprroveTx = await tokenContract.approve(routerAddress, amountIn);
        const tokenAprroveTxReceipt = await tokenAprroveTx.wait();

        const tx = await routerContract.swap(amountIn, amountOutMin, path, user, deadline, {
          maxPriorityFeePerGas: feeData["maxPriorityFeePerGas"],
          maxFeePerGas: feeData["maxFeePerGas"],
          gasLimit: "3000000",
        });
        const receipt = await tx.wait();
      }

      //check balance after swap
      const ponzioContract = new ethers.Contract(tokenContractAddress, ponzioCatAbi, provider);
      const userPonzioBalance = await ponzioContract.balanceOf(user);
    } catch (error) {
      console.error("Error swapping tokens:", error);
    }
  };
  
  const quote = async (value: string) => {
    if (!window.ethereum) throw new Error("Ethereum provider not found");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const user = await signer.getAddress()
    const uniRouter = new ethers.Contract(uniRouterAddress, IUniswapV2RouterAbi, provider);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const reserve = await univ2Pair.getReserves();

    if (selectedPayCurrency == 'ETH' && selectedReceiveCurrency == 'DBAS')  {
      setEthAmount(value)
      const amountIn = ethers.utils.parseEther(ethAmount);
      const amountOut = await uniRouter.quote(amountIn,reserve.reserve0, reserve.reserve1);
      setSolzioAmount(ethers.utils.formatEther(amountOut));
    } else {
      setSolzioAmount(value)
      const amountIn = ethers.utils.parseEther(solzioAmount);
      const amountOut = await uniRouter.quote(amountIn,reserve.reserve1, reserve.reserve0);
      setEthAmount(ethers.utils.formatEther(amountOut));
    }
  }

  const getUserBalances = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const user = await signer.getAddress()

    if (selectedPayCurrency == 'ETH' && selectedReceiveCurrency == 'DBAS') {
      const ethBal = Number((ethers.utils.formatUnits(await signer.getBalance(), 'ether'))).toFixed(3);
      setEthBalance(ethBal);
    } else if(selectedPayCurrency == 'DBAS' && selectedReceiveCurrency == 'ETH') {
      const ponzioContract = new ethers.Contract(tokenContractAddress, ponzioCatAbi, provider);
      const userPonzioBalance = await ponzioContract.balanceOf(user);
      const dbasBal = Number(ethers.utils.formatEther(userPonzioBalance.toString())).toFixed(3);
      setSolzioBalance(dbasBal)
    }
  }

  useEffect(() => {
    if (window.ethereum) {
      getUserBalances(); // Call the function as soon as the wallet is connected
    }
  }, [selectedPayCurrency]);

  return (
    <div className={`font-sans border-[#bd8400] h-[518px] w-[360px] border-4 bg-[#FFD87F] rounded-lg max-w-m ${className}`} >
      <h1 className="text-2xl font-bold text-center mb-4 pt-4">1. BUY $DBAS</h1>
  
      <div className="bg-white px-8 border-t-2 border-[#bd8400] rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold">Swap </h2>
        </div>
  
        <div className="border-2 border-black rounded-lg p-3 mb-2">
          <div className="flex justify-between mb-1 gap-12">
            <span className="text-black text-xl">You Pay</span>
            <span className="text-black pr-2">Balance: {
                selectedPayCurrency === 'ETH' ? ethBalance : solzioBalance
              } </span>
          </div>
          <div className="flex justify-between items-center">
            <input
              type="number"
              value={selectedPayCurrency === 'ETH' ? ethAmount : solzioAmount}
              onChange={(e) => quote(e.target.value)}
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
          </div>
          <div className="flex justify-between items-center">
            {selectedReceiveCurrency === 'DBAS' ? solzioAmount : ethAmount}
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
  
        {/* Conditional Rendering for SWAP Button or WalletButton */}
        {walletAddress ? (
          <button
            className="w-full text-center text-xl bg-yellow-400 py-2 rounded-full"
            onClick={handleSwap}
          >
            SWAP
          </button>
        ) : (
          <div className="flex justify-center">
            <WalletButton /> {/* Replace with your actual WalletButton component */}
          </div>
        )}
      </div>
    </div>
  );
}  

export default SwapInterface;
