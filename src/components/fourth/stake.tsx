import React from 'react';
import WalletButton from '@/components/wallets/WalletButton';
const StakeToMakeMoney = () => {
  return (
    <div className="bg-yellow-200 px-4 rounded-lg max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4 bg-yellow-200 p-4  rounded-lg ">STAKE TO MAKE MONEY</h1>
      
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
        
        <div className="bg-white rounded-lg p-6 shadow-md border-2 border-black ">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">PENDING REWARDS</span>
            <div className="text-right">
              <div className="font-semibold">$0.00</div>
              <div className="text-sm text-gray-500">0.00 BMC</div>
            </div>
          </div>
          <div className=' pl-16 justify-center items-center'>
          <WalletButton/>

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
            
          <div className=' pl-16 justify-center items-center'>
          <WalletButton/>

          </div>

        </div>
      </div>
    </div>
  );
};

export default StakeToMakeMoney;