'use client'; // This ensures the component is treated as a Client Component
import React, { useEffect, useState } from 'react';
import WalletButton from '@/components/wallets/WalletButton';
import { ethers } from 'ethers';
import {
  ponzioCatAbi, tokenContractAddress, IUniswapV2PairAbi, 
  routerAbi,
  routerAddress,
  univ2PairAddress
} from '../../common/contract/contract';
const AddLiquidity = () => {
  const [getEthReserve, setEthReserve] = useState<any>(0);

  const getReserves = async() =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const reserve = await univ2Pair.getReserves();
    const ethReserve = (reserve.reserve0.toString())/10e17
    console.log("ethReserve",ethReserve)
    setEthReserve(ethReserve);
  }
  useEffect(() => {
    getReserves()
  }, []);
  return (
        <div className="769:ml-20 1200:ml-0  mt-12 w-full md:w-[460px] text-xl font-sans border-[#bd8400] bg-[#FFD87F] border-4 rounded-lg max-w-m flex-col justify-between items-center mb-4">
       
        <h1 className="text-2xl font-bold text-center pt-4 mb-4">2. ADD LIQUIDITY</h1>
         <div className='bg-white p-5 border-[#bd8400] border-t-2 rounded-lg shadow-md w-full'>
         <div className="border-black border-2 p-6 rounded-xl">
        <div className="flex justify-between items-center px-4 mb-2">
          <span className="font-semibold pr-4 md:pr-24">MY LP TOKENS</span>
          <div className="text-right">
            <div className="font-semibold pl-4">0.00 LP</div>
            <div className="text-sm text-black">$0.00</div>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <span className="font-semibold">TOTAL RESERVES</span>
          <div className="text-right">
            <div className="font-semibold">{getEthReserve} ETH</div>
            <div>1,526 DBAS</div>
          </div>
        </div>
        
        <div className='pl-[70px]  md:pl-24 justify-center items-center'>
          <WalletButton/>
          </div>
      </div>
         </div>
       
    </div>
    
  );
};

export default AddLiquidity;