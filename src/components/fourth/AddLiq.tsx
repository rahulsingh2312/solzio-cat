import React from 'react';
import WalletButton from '@/components/wallets/WalletButton';
const AddLiquidity = () => {
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
            <div>1,526 PONZIO</div>
          </div>
        </div>
        
        <div className=' pl-24 justify-center items-center'>
          <WalletButton/>

          </div>
      </div>
    </div>
  );
};

export default AddLiquidity;