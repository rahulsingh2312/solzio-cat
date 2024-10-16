'use client'; // This ensures the component is treated as a Client Component
import React, { useEffect, useState } from 'react';
import WalletButton from '@/components/wallets/WalletButton';
import { useWallet } from '../wallets/WalletContextProvider';
import { ethers, Signer } from 'ethers';
import {
  IUniswapV2PairAbi,
  univ2PairAddress,
  IStakeAbi,
  stakeContractAddress,
  uniRouterAddress,
  routerAddress,
  IUniswapV2RouterAbi

} from '../../common/contract/contract';
import { sign } from 'crypto';
import { env } from 'process';

const StakeToMakeMoney = () => {
  const { walletAddress } = useWallet();
  const [userLp, setUserLp] = useState<any>('0');
  const [getPendingRewards, setPendingRewards] = useState<string>('0');

  const fetchLp = async () => {
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const userLp = await univ2Pair.balanceOf(walletAddress);
    setUserLp(userLp);
  };

  const handleStakeDeposit = async () => {
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const stakeContract = new ethers.Contract(stakeContractAddress, IStakeAbi, signer);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi,signer);
    const lpApproveTx = await univ2Pair.approve(stakeContractAddress,userLp);
    const lpApproveTxReciept = await lpApproveTx.wait()
    const feeData = await provider.getFeeData();
    const depositTx = await stakeContract.deposit(userLp,signerAddress,{
          maxPriorityFeePerGas: feeData["maxPriorityFeePerGas"],
          maxFeePerGas: feeData["maxFeePerGas"],
          gasLimit: "3000000",
    });
    const depositTxReciept = await depositTx.wait();
  }

  const handleStakeWithdraw = async () => {
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const stakeContract = new ethers.Contract(stakeContractAddress, IStakeAbi, signer);
    const userInfo = await stakeContract.userInfo(signerAddress);
    const withdrawTx = await stakeContract.withdraw(userInfo.amount, signerAddress);
    const withdrawTxReciept = await withdrawTx.wait();
    const userInfoAfter = await stakeContract.userInfo(signerAddress);
  }

  const handleHarvestRewards = async () => {
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const stakeContract = new ethers.Contract(stakeContractAddress, IStakeAbi, signer);
    const harvestTx = await stakeContract.harvest(signerAddress);
    const harvestTxReciept = await harvestTx.wait()
  }

  const handleReinvestRewards = async () => {
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const stakeContract = new ethers.Contract(stakeContractAddress, IStakeAbi, signer);
    const uniRouter = new ethers.Contract(uniRouterAddress, IUniswapV2RouterAbi, provider);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const reserve = await univ2Pair.getReserves();
    const pendingRewards = await stakeContract.pendingRewards(signerAddress);
   
    const amountEthRequired = await uniRouter.quote(pendingRewards,reserve.reserve1, reserve.reserve0);
    const zero = ethers.utils.parseEther('0');
    const reinvestTx = await stakeContract.reinvest(zero,zero,{
      value: amountEthRequired
    })
    const reinvestTxReciept = await reinvestTx.wait();
  }
  const fetchPendingRewards = async () => {
     // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const stakeContract = new ethers.Contract(stakeContractAddress, IStakeAbi, signer);
    const pendingRewards = await stakeContract.pendingRewards(signerAddress);
    const reward = Number(ethers.utils.formatEther(pendingRewards)).toFixed(3);
    setPendingRewards(reward);
  }

  useEffect(() => {
    if (walletAddress) {
      fetchLp();
      fetchPendingRewards()
    }
  }, [walletAddress]);

  return (
    <div className="w-full md:ml-5 md:w-[460px] text-xl font-sans border-[#bd8400] bg-[#FFD87F] border-4 rounded-lg max-w-m flex-col justify-between items-center mb-4">
       
    <h1 className="text-2xl font-bold text-center pt-4 mb-4">3. STAKE TO EARN REWARDS</h1>
     <div className='bg-white p-5 border-[#bd8400] border-t-2 rounded-lg shadow-md w-full'>
      
      <div className="space-y-4">
      
        <div className="bg-white rounded-lg p-4 border-2 border-black shadow-md">
          
          <div className="flex justify-between gap-4 md:gap-32 items-center mb-2 border-black pb-4">
            <span className="font-semibold">MY STAKED LP</span>
            <div className="text-right">
              <div className="font-semibold">$0.00</div>
              <div className="text-lg text-gray-500">%0.00</div>
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
              <div className="text-lg text-gray-500">157,273.59 LP</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow-md border-2 border-black">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">PENDING REWARDS</span>
            <div className="text-right">
              <div className="text-lg text-gray-500">{getPendingRewards} DBAS</div>
            </div>
          </div>
          <div className='pl-[0px]  md:pl-0 justify-center items-center'>
          {walletAddress ? (
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleHarvestRewards()}
                  className="w-full text-center text-xl bg-yellow-300 py-2 rounded-full"
                >
                  Harest Rewards
                </button>
                <button
                  onClick={() => handleReinvestRewards()}
                  className="w-full text-center text-xl bg-yellow-500 py-2 rounded-full"
                >
                  Reinvest Rewards
                </button>
              </div>
            ) : (
              <div className='flex justify-center'>
                <WalletButton />
              </div>
            )}
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
            <div className='pl-[0px]  md:pl-0 justify-center items-center'>
            {walletAddress ? (
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleStakeDeposit()}
                  className="w-full text-center text-xl bg-yellow-300 py-2 rounded-full"
                >
                  Stake
                </button>
                <button
                  onClick={() => handleStakeWithdraw()}
                  className="w-full text-center text-xl bg-yellow-500 py-2 rounded-full"
                >
                  Withdraw
                </button>
              </div>
            ) : (
              <div className='flex justify-center'>
                <WalletButton />
              </div>
            )}
          </div>
        </div>
   
      </div>
    </div>
    </div>
  );
};

export default StakeToMakeMoney;