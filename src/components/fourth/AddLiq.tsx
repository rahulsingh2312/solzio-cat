"use client";
import React, { useState, useEffect } from 'react';
import WalletButton from '@/components/wallets/WalletButton';
import { Button } from "../ui/button"; // Adjust the import if necessary
import { useToast } from "@/hooks/use-toast";
import { ethers, Contract } from "ethers";
import { contractAddress, contractABI } from '../../common/contract/contract'; // Adjust path as necessary
import { useWallet } from "../wallets/WalletContextProvider";

const AddLiquidity = () => {
  const { walletAddress } = useWallet();
  const { toast } = useToast();
  const [ethAmount, setEthAmount] = useState('0.00');
  const [bmcAmount, setBmcAmount] = useState('0.00');
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

  const addLiquidity = async () => {
    if (!contract || parseFloat(ethAmount) <= 0 || parseFloat(bmcAmount) <= 0) {
      toast({
        variant: 'destructive',
        title: 'Invalid Amounts',
        description: 'Please enter valid amounts for both ETH and BMC.',
      });
      return;
    }

    try {
      const tx = await contract.addLiquidity(
        ethers.utils.parseUnits(ethAmount, 'ether'),
        ethers.utils.parseUnits(bmcAmount, 'ether')
      );
      await tx.wait();

      toast({
        variant: 'default',
        title: 'Liquidity Added!',
        description: `Successfully added ${ethAmount} ETH and ${bmcAmount} BMC to the pool.`,
      });
      setEthAmount('0.00'); // Reset amounts after successful transaction
      setBmcAmount('0.00');
    } catch (error) {
      console.error('Adding liquidity failed:', error);
      const errorMessage = (error as Error).message || 'An unknown error occurred';
      toast({
        variant: 'destructive',
        title: 'Adding Liquidity Failed!',
        description: `${errorMessage}`,
      });
    }
  };

  return (
    <div className="bg-yellow-200 mt-8 border-2 border-black rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center pt-4 mb-4">ADD LIQUIDITY</h1>
      
      <div className="bg-white border-t-2 border-black rounded-lg p-4 shadow-md">
        <div className="flex justify-between items-center px-4 mb-2">
          <span className="font-semibold pr-24">MY LP TOKENS</span>
          <div className="text-right">
            <div className="font-semibold pl-4">0.00 LP</div>
            <div className="text-sm text-gray-500">$0.00</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">TOTAL RESERVES</span>
          <div className="text-right">
            <div className="font-semibold">282.61 ETH</div>
            <div>1,526 BMC</div>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <input
            type="number"
            value={ethAmount}
            onChange={(e) => setEthAmount(e.target.value)}
            className="mb-2 text-2xl bg-transparent outline-none text-right"
            placeholder="Amount of ETH"
          />
          <input
            type="number"
            value={bmcAmount}
            onChange={(e) => setBmcAmount(e.target.value)}
            className="mb-2 text-2xl bg-transparent outline-none text-right"
            placeholder="Amount of BMC"
          />
        </div>

       
        {/* Add Liquidity Button */}
        <div className='flex justify-center mb-4'>
          <Button
            className="inline-flex whitespace-nowrap rounded-md font-medium text-xl justify-center items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:bg-[#cc9e1e] bg-[#ffc43b] border-[1px] border-black shadow-4xl"
            onClick={addLiquidity}
          >
            Add Liquidity
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddLiquidity;
