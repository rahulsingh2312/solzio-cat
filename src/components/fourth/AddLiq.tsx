import React from 'react';
import WalletButton from '@/components/wallets/WalletButton';
const AddLiquidity = () => {
  return (
 
        <div className=" w-[460px] text-xl font-sans border-[#bd8400] bg-[#FFD87F]  border-4  rounded-lg max-w-m flex-col justify-between items-center mb-4">

       
        <h1 className="text-2xl font-bold text-center pt-4 mb-4">2. ADD LIQUIDITY</h1>
         <div className=' bg-white p-5 border-[#bd8400] border-t-2  rounded-lg  shadow-md '>
         <div className=" border-black border-2 p-6 rounded-xl">
        <div className="flex justify-between items-center px-4 mb-2">
          <span className="font-semibold pr-24">MY LP TOKENS</span>
          <div className="text-right">
            <div className="font-semibold pl-4">0.00 LP</div>
            <div className="text-sm text-black">$0.00</div>
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
       
    </div>
    
  );
};

export default AddLiquidity;