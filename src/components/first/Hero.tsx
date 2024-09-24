import Image from 'next/image';
import { MdContentCopy } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useToast } from "@/hooks/use-toast"
import { useWallet } from '../wallets/WalletContextProvider';
import { ethers, Contract } from "ethers"; // Ensure you import Contract
import { contractAddress, contractABI } from '../../common/contract/contract'; // Adjust path as necessary
import error from 'next/error';

export default function Hero() {
  const { walletAddress } = useWallet();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [contract, setContract] = useState<Contract | null>(null); // Type state properly

  // Copy address to clipboard

  const copyAddress = () => {
    navigator.clipboard.writeText(contractAddress);
    setIsCopied(true);
    toast({
      variant: 'destructive',
      title: 'Address copied to clipboard ! 🐱',
      className: 'bg-white text-black border-black border-2 border-b-4 border-solid text-3xl',
    });
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Set up the contract instance
  useEffect(() => {
    const initContract = async () => {
      if (window.ethereum && walletAddress) {
        console.log(window.ethereum, walletAddress, "haha")
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractInstance = new ethers.Contract(contractAddress, contractABI, signer);
        setContract(contractInstance); // Now this will not cause a type error
      }
    };

    initContract();
  }, [walletAddress]);

  // Buy function
  const buyTokens = async () => {
    if (!contract) {
      console.error('Contract not initialized.');
      return;
    }

    try {
      console.log(window.ethereum)
      // const tx = await contract.buy({ value: ethers.utils.parseEther("0.1") }); // Set amount as needed
      // await tx.wait();
    } catch (error) {
      console.error('Transaction failed:', error);
      toast({
        variant: 'destructive',
        title: 'Transaction failed!',
        // description: `${error.message}`,
      });
    }
  };

  return (
    <main className="container mx-auto px-4 py-12 z-10 relative">
      <div className='text-center'>
        <div className="relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-4 pt-8 sm:pt-12 md:pt-16">
            <span className='text-yellow-500 text-stroke-black text-shadow-black text-bold'>
              The Purr-fect Coin
            </span>
            <br />
            <span className="text-black font-comic-neue-regular text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
              for Crypto Enthusiasts
            </span>
          </h1>
        </div>

        <div className='pt-0 flex justify-center items-center'>
          <div className="h-[60px] justify-start items-center gap-4 inline-flex">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="mt-20 sm:mt-0 w-[345px] h-[50px] rounded-xl shadow border border-black bg-yellow-200 flex items-center justify-between px-4 py-2">
                <h1 className="text-black text-[23px] font-normal justify-center items-center">
                  {contractAddress}
                </h1>
                <button
                  onClick={copyAddress}
                  className="text-black text-xl font-normal justify-center items-center px-4 py-2 transition-all duration-200"
                >
                  {isCopied ? <FaCheckCircle className="text-green-900 text-2xl" /> : <MdContentCopy className="text-black text-2xl" />}
                </button>
              </div>
              
              <button 
                onClick={buyTokens} 
                className="w-[165px] sm:w-[165px] h-[60px] rounded-xl shadow border border-black hover:bg-[#dc4d4d] bg-[#f47372]"
              >
                <div className="text-black text-lg sm:text-[22px] font-normal">
                  Buy $SOLZIO
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
