import React from 'react';
import { FaExchangeAlt, FaCog } from 'react-icons/fa';

const WarningBanner = () => (
  <div className="bg-yellow-400 text-red-600 p-2 text-center font-bold">
    ⚠️ Warning! Holding without staking is risky. Solzio is a game—play wisely! ⚠️
  </div>
);

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-xl font-bold mb-4">{title}</h2>

    {children}
  </div>
);

const ConnectWalletButton = () => (
  <button className="w-full bg-black text-white py-2 rounded-md mt-4">
    Connect Wallet
  </button>
);

const SwapCard = () => (
  <Card title="BUY $SOLZIO">
    <div className="flex justify-between items-center mb-2">
      <span>Swap</span>
      <FaCog className="text-gray-500" />
    </div>
    <div className="bg-gray-100 rounded-md p-2 mb-2">
      <div className="flex justify-between">
        <input type="number" placeholder="0.00" className="bg-transparent w-full" />
        <select className="bg-black text-white rounded-full px-2">
          <option>ETH</option>
        </select>
      </div>
      <div className="text-right text-sm text-gray-500">Balance: 0.00 MAX</div>
    </div>
    <div className="flex justify-center my-2">
      <FaExchangeAlt className="bg-yellow-400 p-2 rounded-full text-3xl" />
    </div>
    <div className="bg-gray-100 rounded-md p-2 mb-2">
      <div className="flex justify-between">
        <input type="number" placeholder="0.00" className="bg-transparent w-full" />
        <select className="bg-black text-white rounded-full px-2">
          <option>PONZIO</option>
        </select>
      </div>
      <div className="text-right text-sm text-gray-500">Balance: 0.00</div>
    </div>
    <div className="flex justify-between text-sm mb-2">
      <span>Slippage Tolerance</span>
      <span>1.00%</span>
    </div>
    <div className="flex justify-between text-sm mb-4">
      <span>Minimum received</span>
      <span>0.00 PONZIO</span>
    </div>
    <ConnectWalletButton />
  </Card>
);

const AddLiquidityCard = () => (
  <Card title="ADD LIQUIDITY">
    <div className="flex justify-between mb-2">
      <span>MY LP TOKENS</span>
      <span>0.00 LP</span>
    </div>
    <div className="flex justify-between mb-4">
      <span>TOTAL RESERVES</span>
      <div className="text-right">
        <div>282.61 ETH</div>
        <div>1,526 PONZIO</div>
      </div>
    </div>
    <ConnectWalletButton />
  </Card>
);

const StakeCard = () => (
  <Card title="STAKE TO MAKE MONEY">
    <div className="bg-gray-100 rounded-md p-2 mb-4">
      <div className="flex justify-between mb-1">
        <span>MY STAKED LP</span>
        <span>$0.00</span>
      </div>
      <div className="text-right text-sm text-gray-500">0.00</div>
    </div>
    <div className="flex justify-between mb-2">
      <span>APR</span>
      <span className="text-green-500">609.10%</span>
    </div>
    <div className="flex justify-between mb-4">
      <span>TOTAL STAKED</span>
      <div className="text-right">
        <div>$1,133,046.48</div>
        <div className="text-sm text-gray-500">157,273.59 LP</div>
      </div>
    </div>
    <div className="bg-gray-100 rounded-md p-2 mb-4">
      <div className="flex justify-between mb-1">
        <span>PENDING REWARDS</span>
        <span>$0.00</span>
      </div>
      <div className="text-right text-sm text-gray-500">0.00 PONZIO</div>
    </div>
    <ConnectWalletButton />
    <div className="bg-gray-100 rounded-md p-2 mt-4">
      <div className="flex justify-between mb-1">
        <span>STAKED</span>
        <span>$0.00</span>
      </div>
      <div className="text-right text-sm text-gray-500">0.00 LP</div>
    </div>
    <ConnectWalletButton />
  </Card>
);

const SolzioInterface = () => (
  <div className="bg-yellow-300 min-h-screen">
    <WarningBanner />
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8">Play Smart, Stake Wisely!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SwapCard />
        <AddLiquidityCard />
        <StakeCard />
      </div>
    </div>
  </div>
);

export default SolzioInterface;