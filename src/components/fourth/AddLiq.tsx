'use client'; // This ensures the component is treated as a Client Component
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { useWallet } from '../wallets/WalletContextProvider'; // Adjust the import based on your actual path
import WalletButton from '@/components/wallets/CustomWalletConnect'; // Updated import
import {
  IUniswapV2PairAbi,
  univ2PairAddress,
  routerAddress,
  routerAbi,
  tokenContractAddress,
  IERC20Abi,
  uniRouterAddress,
  IUniswapV2RouterAbi
} from '../../common/contract/contract';
import { sign } from 'crypto';

const AddLiquidity = () => {
  const { walletAddress } = useWallet(); // Get wallet address from context
  const [getEthReserve, setEthReserve] = useState<string>('0');
  const [getSolzioReserve, setSolzioReserve] = useState<string>('0');
  const [getUserLp, setUserLp] = useState<string>('0');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  const getReserves = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const reserve = await univ2Pair.getReserves();
    setEthReserve(Number((ethers.utils.formatEther(reserve.reserve0))).toFixed(3))
    setSolzioReserve(Number((ethers.utils.formatEther(reserve.reserve1))).toFixed(3))
  };

  const fetchLp = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
    const userLp = Number((ethers.utils.formatEther(await univ2Pair.balanceOf(walletAddress)))).toFixed(3);
    setUserLp(userLp);
  };

  useEffect(() => {
    getReserves();
    if (walletAddress) {
      fetchLp();
    }
  }, [walletAddress]);

  const handleSubmitAddLiquidity = async (ethAmount, tokenAmount) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const signerAddress = await signer.getAddress();
    const router = new ethers.Contract(routerAddress, routerAbi, signer);
    const amountWETHDesired =  ethers.utils.parseEther(ethAmount)
    const amountPonzioDesired  = ethers.utils.parseEther(tokenAmount)
    const amountETHMin =  ethers.utils.parseEther('0')
    const amountPonzioMin =  ethers.utils.parseEther('0')
    const to =  signerAddress;
    const feeData = await provider.getFeeData();
    const tokenContract = new ethers.Contract(tokenContractAddress, IERC20Abi, signer);

    try {
      const tokenAprroveTx = await tokenContract.approve(routerAddress, amountPonzioDesired);
      const tokenAprroveTxReceipt = await tokenAprroveTx.wait();
      console.log("DBAS Approve Transaction successful with hash:", tokenAprroveTxReceipt);
      const addLiquidityTx = await router.updateSupplyAndAddLiquidity(amountWETHDesired, amountPonzioDesired, amountETHMin, amountPonzioMin, to, {
          value: amountWETHDesired,
          maxPriorityFeePerGas: feeData["maxPriorityFeePerGas"],
          maxFeePerGas: feeData["maxFeePerGas"],
          gasLimit: "3000000",
      })
      const addLiquidityTxReciept = await tokenAprroveTx.wait();
      console.log("LP Add successful with hash:", addLiquidityTxReciept);
    } catch (error) {
      console.error('Error adding liquidity:', error);
    }
  };

  const handleSubmitRemoveLiquidity = async (lpAmount) => {
    
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const uniRouter = new ethers.Contract(uniRouterAddress, IUniswapV2RouterAbi, signer);
    const feeData = await provider.getFeeData();
    const token = tokenContractAddress;
    const liquidity = ethers.utils.parseEther(lpAmount);
    const amountTokenMin = ethers.utils.parseEther('0');
    const amountETHMin = ethers.utils.parseEther('0');
    const to = await signer.getAddress()
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi,signer);

    try {
      const lpApproveTx = await univ2Pair.approve(uniRouterAddress,liquidity);
      const lpApproveTxReciept = await lpApproveTx.wait()
      const removeLiquidityTx = await uniRouter.removeLiquidityETH(token, liquidity, amountTokenMin, amountETHMin, to, deadline, {
        maxPriorityFeePerGas: feeData["maxPriorityFeePerGas"],
          maxFeePerGas: feeData["maxFeePerGas"],
          gasLimit: "3000000",
      });
      const removeLiquidityTxReciept = await removeLiquidityTx.wait()
      console.log("LP remove successful with hash:", removeLiquidityTxReciept);
        
    } catch (error) {
      console.error('Error removing liquidity:', error);
    }
  };

  const AddModal = ({ isOpen, onClose, title }) => {
    const [ethAmount, setEthAmount] = useState<string>('0');
    const [dbasTokenAmount, setDbasTokenAmount] = useState<string>('0');
    const [loading, setLoading] = useState(false);

    const handleInput = async (value) => {
      setEthAmount(value);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const uniRouter = new ethers.Contract(uniRouterAddress, IUniswapV2RouterAbi, provider);
      const univ2Pair = new ethers.Contract(univ2PairAddress, IUniswapV2PairAbi, provider);
      const reserve = await univ2Pair.getReserves();
      const ethInput = ethers.utils.parseEther(value);
      const amountOut = await uniRouter.quote(ethInput,reserve.reserve0, reserve.reserve1);
      const dbasAmount = Number(ethers.utils.formatEther(amountOut)).toFixed(3);
      setDbasTokenAmount(dbasAmount);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        await handleSubmitAddLiquidity(ethAmount, dbasTokenAmount); // Call the function
      } catch (error) {
        console.error('Transaction failed:', error);
      } finally {
        setLoading(false);
        onClose();
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#bd8400]">{title}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">ETH Amount</label>
              <input
                type="text"
                value={ethAmount}
                onChange={(e) => handleInput(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#bd8400]"
                placeholder="Enter ETH amount"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Token Amount</label>
              <div className="border border-gray-300 rounded-lg w-full p-3 bg-gray-100 text-gray-700">
                {dbasTokenAmount} DBAS {/* Display token amount */}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-[#bd8400] text-white py-2 px-4 rounded-lg hover:bg-[#cc9e1e] transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const RemoveModal = ({ isOpen, onClose, title }) => {
    const [lpAmount, setLpAmount] = useState<string>('0');
    const [dbasTokenAmount, setDbasTokenAmount] = useState<string>('0');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        await handleSubmitRemoveLiquidity(lpAmount); // Call the function
      } catch (error) {
        console.error('Transaction failed:', error);
      } finally {
        setLoading(false);
        onClose();
      }
    };

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center text-[#bd8400]">{title}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">LP Token Amount</label>
              <input
                type="text"
                value={lpAmount}
                onChange={(e) => setLpAmount(e.target.value)}
                className="border border-gray-300 rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#bd8400]"
                placeholder="Enter LP Token amount"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">Token Amount</label>
              <div className="border border-gray-300 rounded-lg w-full p-3 bg-gray-100 text-gray-700">
                {dbasTokenAmount} DBAS {/* Display token amount */}
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className={`bg-[#bd8400] text-white py-2 px-4 rounded-lg hover:bg-[#cc9e1e] transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="769:ml-20 1200:ml-0 mt-12 w-full md:w-[460px] text-xl font-sans border-[#bd8400] bg-[#FFD87F] border-4 rounded-lg max-w-m flex-col justify-between items-center mb-4">
      <h1 className="text-2xl font-bold text-center pt-4 mb-4">2. ADD LIQUIDITY</h1>
      <div className='bg-white p-5 border-[#bd8400] border-t-2 rounded-lg shadow-md w-full'>
        <div className="border-black border-2 p-6 rounded-xl">
          <div className="flex justify-between items-center px-4 mb-2">
            <span className="font-semibold pr-4 md:pr-24">MY LP TOKENS</span>
            <div className="text-right">
              <div className="font-semibold pl-4">{getUserLp} LP</div>
              <div className="text-sm text-black">$0.00</div>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">TOTAL RESERVES</span>
            <div className="text-right">
              <div className="font-semibold">{getEthReserve} ETH</div>
              <div>{getSolzioReserve} DBAS</div>
            </div>
          </div>
          <div className='pl-[70px] md:pl-24 justify-center items-center'>
            {walletAddress ? (
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="bg-green-500 text-white py-2 px-4 rounded"
                >
                  Add Liquidity
                </button>
                <button
                  onClick={() => setIsRemoveModalOpen(true)}
                  className="bg-red-500 text-white py-2 px-4 rounded"
                >
                  Remove Liquidity
                </button>
              </div>
            ) : (
              <WalletButton />
            )}
          </div>
        </div>
      </div>
      <AddModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Liquidity"
      />
      <RemoveModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
        title="Remove Liquidity"
      />
    </div>
  );
};

export default AddLiquidity;
