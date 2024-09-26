"use client";
import React, { useState, useEffect } from 'react';
import WalletButton from '@/components/wallets/WalletButton';
import { Button } from "../ui/button"; // Adjust the import if necessary
import { useToast } from "@/hooks/use-toast";
import { ethers, Contract } from "ethers";
import { contractAddress, contractABI } from '../../common/contract/contract'; // Adjust path as necessary
import { useWallet } from "../wallets/WalletContextProvider";

const StakeToMakeMoney = () => {
  const { walletAddress } = useWallet();
  const { toast } = useToast();
  const [amountToStake, setAmountToStake] = useState('0.00');
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

  const stakeTokens = async () => {
    if (!contract || parseFloat(amountToStake) <= 0) {
      toast({
        variant: 'destructive',
        title: 'Invalid Staking Amount',
        description: 'Please enter a valid amount to stake.',
      });
      return;
    }

    try {
      const tx = await contract.stake(ethers.utils.parseUnits(amountToStake, 'ether'));
      await tx.wait();
      
      toast({
        variant: 'default',
        title: 'Staking Successful!',
        description: `Successfully staked ${amountToStake} BMC.`,
      });
      setAmountToStake('0.00'); // Reset amount after successful staking
    } catch (error) {
      console.error('Staking failed:', error);
      const errorMessage = (error as Error).message || 'An unknown error occurred';
      toast({
        variant: 'destructive',
        title: 'Staking Failed!',
        description: `${errorMessage}`,
      });
    }
  };

  return (
    <div className="bg-yellow-200 px-4 rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 bg-yellow-200 p-4 rounded-lg">STAKE TO MAKE MONEY</h1>
      
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border-2 border-black shadow-md">
          <div className="flex justify-between gap-32 items-center mb-2 border-b-2 border-black pb-4">
            <span className="font-semibold">MY STAKED LP</span>
            <div className="text-right">
              <div className="font-semibold">$0.00</div>
              <div className="text-sm text-gray-500">%0.00</div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">APR</span>
            <span className="font-semibold">%605.10</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">TOTAL STAKED</span>
            <div className="text-right">
              <div className="font-semibold">$1,133,046.48</div>
              <div className="text-sm text-gray-500">157,273.59 LP</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md border-2 border-black">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">PENDING REWARDS</span>
            <div className="text-right">
              <div className="font-semibold">$0.00</div>
              <div className="text-sm text-gray-500">0.00 BMC</div>
            </div>
          </div>
          <div className='pl-16 justify-center items-center'>
            <WalletButton />
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border-2 border-black mb-2 shadow-md">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">STAKED</span>
            <div className="text-right">
              <div className="font-semibold">$0.00</div>
              <div className="text-sm text-gray-500">0.00 LP</div>
            </div>
          </div>
          <div className='pl-16 justify-center items-center'>
            <WalletButton />
          </div>
        </div>

        {/* Input for Amount to Stake */}
        <div className="bg-white rounded-lg p-4 border-2 border-black mb-2 shadow-md">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Amount to Stake</span>
            <input
              type="number"
              value={amountToStake}
              onChange={(e) => setAmountToStake(e.target.value)}
              className="text-2xl bg-transparent w-1/2 outline-none text-right"
              placeholder="0.00"
            />
          </div>
        </div>

        {/* Stake Button Section */}
        <div className='flex justify-center'>
          <Button
            className="inline-flex whitespace-nowrap rounded-md font-medium text-xl justify-center items-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 hover:bg-[#cc9e1e] bg-[#ffc43b] border-[1px] border-black shadow-4xl"
            onClick={stakeTokens}
          >
            Stake Tokens
          </Button>
        </div>

      </div>
    </div>
  );
};

export default StakeToMakeMoney;
