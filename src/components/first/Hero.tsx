import Image from 'next/image';
import { MdContentCopy } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { useToast } from "@/hooks/use-toast"
import { useWallet } from '../wallets/WalletContextProvider';
import { ethers, Contract } from "ethers"; // Ensure you import Contract
import { contractAddress, contractABI } from '../../common/contract/contract'; // Adjust path as necessary

export default function Hero() {
  const { walletAddress } = useWallet();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [contract, setContract] = useState<Contract | null>(null); // Type state properly

  // Copy address to clipboard

  const copyAddress = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use clipboard API if available
      navigator.clipboard.writeText(address)
        .then(() => {
          setIsCopied(true);
          toast({
            variant: 'destructive',
            title: 'Address copied to clipboard! 🐱',
            className: 'bg-white text-black border-black border-2 border-b-4 border-solid text-3xl toast-top-center',
          });
          setTimeout(() => {
            setIsCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      // Fallback for mobile devices that do not support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.style.position = 'fixed';  // Avoid scrolling to bottom
      textArea.style.left = '-9999px';
      textArea.style.top = '-9999px';
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');  // Fallback for older browsers
        setIsCopied(true);
        toast({
          variant: 'destructive',
          title: 'Address copied to clipboard! 🐱',
          className: 'bg-white text-black border-black border-2 border-b-4 md:w-[40%] w-[90%] border-solid text-3xl toast-top-center',
        });
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      document.body.removeChild(textArea);
    }
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
            <Image
              width={100}
              height={100}
              alt='coin'
              src="/coin.svg"
              className="w-[100px] md:opacity-100 opacity-50 h-[56px] md:w-[160px] md:h-[90px] rotate-[-21.47deg] absolute top-0 right-[10%] md:right-[290px] transform translate-x-[50%] translate-y-[80%]"
            />

            <Image
              width={100}
              height={100}
              alt='coin'
              src="/coin.svg"
              className="w-[100px] md:opacity-100 opacity-50 h-[44px] md:w-[160px] md:h-[70px] rotate-[21.47deg] absolute top-4 md:top-8 right-[15%] md:right-[310px] transform translate-x-[10%] translate-y-[10%]"
            />

            <Image
              alt='bg'
              width={106}
              height={106}
              src="/coin.svg"
              className="w-[60px] md:opacity-100 opacity-50 h-[59px] md:w-[96px] md:h-[95px] rotate-[41.47deg] absolute -top-20 md:-top-30 left-1/4 transform -translate-x-1/2 translate-y-[80%]"
            />

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold mb-4 pt-8 sm:pt-12 md:pt-16">
             
              <span className='text-yellow-500 text-stroke-black text-shadow-black text-bold'>
              <Image className='absolute -top-1 left-1/3 transform -translate-x-1/3   h-[150px] w-[150px] z-10 md:transparent opacity-50' src="/whisk.png" alt="cat" width={100} height={100}/>
                The Purr-fect Coin
              </span>
              
              <br />
              <span className="text-black font-comic-neue-regular text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                for Crypto Enthusiasts
              </span>
            </h1>

            <h1 className="text-black/10 text-7xl sm:text-8xl md:text-9xl lg:text-[200px] xl:text-[250px]  absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-0 opacity-50 pt-[100px] sm:pt-[120px] md:pt-[140px] lg:pt-[160px] xl:pt-[180px]">
              $BMC
            </h1>


          </div>

        </div>

        <div className="relative">
          <Image
            width={1800}
            height={1800}
            alt='catbg'
            src="/imagee.png"


            className="rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start ">


          </div>
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

      className="w-[165px] sm:w-[165px] h-[60px] rounded-xl shadow border border-black hover:bg-[#dc4d4d] bg-[#f47372]">
        <div className="text-black text-lg sm:text-[22px] font-normal">
          Buy $BMC
        </div>
      </button>
    </div>

          </div>

        </div>
      </main>
    )
}