"use client";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { Settings, ChevronDown } from 'lucide-react';
import { CgSwapVertical } from "react-icons/cg";
import { Button } from "../ui/button";
import { useWallet } from "../wallets/WalletContextProvider";
import { ethers, Contract } from "ethers";
import { contractAddress, contractABI } from '../../common/contract/contract'; // Adjust path as necessary
import { useToast } from "@/hooks/use-toast";

const SwapInterface = ({ className }: { className: string }) => {
  const { walletAddress } = useWallet();
  const { toast } = useToast();
  const [ethAmount, setEthAmount] = useState('0.00');
  const [solzioAmount, setSolzioAmount] = useState('0.00');
  const [contract, setContract] = useState<Contract | null>(null);

  // Initialize the contract
  useEffect(() => {
    const initContract = async () => {
      if (window.ethereum && walletAddress) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance);
      }
    };

    initContract();
  }, [walletAddress]);

  // Function to buy tokens
  const buyTokens = async () => {
    if (!contract) {
      console.error('please connect your wallet properly...');
      toast({
        variant: 'destructive',
        title: 'Connection Failed',
      });
      return;
    }

    try {
      //Contract call
      // const tx = await contract.buy({ value: ethers.utils.parseEther(ethAmount) });
      // await tx.wait();
      toast({
        variant: 'default',
        title: 'Transaction successful!',
        description: `Bought ${ethAmount} ETH worth of $SOLZIO.`,
      });
    } catch (error) {
      console.error('Transaction failed:', error);
      const errorMessage = (error as Error).message || 'An unknown error occurred';
      toast({
        variant: 'destructive',
        title: 'Transaction failed!',
        description: `${errorMessage}`,
      });
    }
  };

  // Dropdown and other states
  const [selectedPayCurrency, setSelectedPayCurrency] = useState('ETH');
  const [selectedReceiveCurrency, setSelectedReceiveCurrency] = useState('BMC');
  const [isPayDropdownOpen, setIsPayDropdownOpen] = useState(false);
  const [isReceiveDropdownOpen, setIsReceiveDropdownOpen] = useState(false);

  const currencies = [
    { name: 'ETH', icon: <FaEthereum /> },
    { name: 'BMC', icon: <FaBitcoin /> },
  ];

  const handlePayCurrencySelect = (currency: string) => {
    setSelectedPayCurrency(currency);
    setIsPayDropdownOpen(false);
  };

  const handleReceiveCurrencySelect = (currency: string) => {
    setSelectedReceiveCurrency(currency);
    setIsReceiveDropdownOpen(false);
  };

  const handleSwap = () => {
    const tempCurrency = selectedPayCurrency;
    setSelectedPayCurrency(selectedReceiveCurrency);
    setSelectedReceiveCurrency(tempCurrency);

    const tempAmount = ethAmount;
    setEthAmount(solzioAmount);
    setSolzioAmount(tempAmount);
  };

  return (
    <div className={`bg-yellow-200 h-[548px] w-[300px] border-2 border-black rounded-lg max-w-m ${className}`}>
      <h1 className="text-2xl font-bold text-center mb-4 pt-4">BUY $BMC</h1>
      
      <div className="bg-white border-t-2 border-black rounded-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Swap </h2>
          <Settings className="text-gray-500" />
        </div>
        
        {/* You Pay Section */}
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
            <div className="relative">
              <button 
                className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full"
                onClick={() => setIsPayDropdownOpen(prev => !prev)}
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
            <div className="relative">
              <button 
                className="flex items-center bg-gray-200 border-black border-2 px-3 py-1 rounded-full"
                onClick={() => setIsReceiveDropdownOpen(prev => !prev)}
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
            <span className="text-gray-500">Slippage Tolerance</span>
            <span>%1.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Minimum received</span>
            <span>0.00 BMC</span>
          </div>
        </div>
        
        {/* Buy Token Button */}
        <div className='flex justify-center'>
  <Button
    className="inline-flex whitespace-nowrap rounded-md font-medium text-xl justify-center items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:bg-[#cc9e1e] bg-[#ffc43b] border-[1px] border-black shadow-4xl"
    onClick={buyTokens}
  >
    Buy $BMC 
  </Button>
</div>

      </div>
    </div>
  );
};

export default SwapInterface;
