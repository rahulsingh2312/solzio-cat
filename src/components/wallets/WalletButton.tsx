"use client"
import { Button } from "../ui/button"
import { useEffect, useState } from "react"
import { useWallet } from "./WalletContextProvider" // Adjust the import based on your actual path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const CustomWalletConnect: React.FC = () => {
  const { connectWallet, disconnectWallet, walletAddress } = useWallet()
  const [label, setLabel] = useState("Connect Wallet")
  const [isConnecting, setIsConnecting] = useState(false)

  useEffect(() => {
    if (walletAddress) {
      setLabel("Connected 🐱")
    } else {
      setLabel("Connect Wallet")
    }
  }, [walletAddress])

  const handleConnect = async () => {
    setIsConnecting(true)
    await connectWallet()
    setIsConnecting(false)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="hover:bg-[#cc9e1e] bg-[#ffc43b] lg:block mr-4 border-[1px] border-black shadow-4xl rounded-l text-xl justify-center items-center"
          onClick={handleConnect}
          disabled={isConnecting}
        >
          {isConnecting ? "Connecting..." : label}
        </Button>
      </DropdownMenuTrigger>
      {walletAddress && (
        <DropdownMenuContent className="flex flex-col">
          <DropdownMenuItem asChild>
            <Button
              className="bg-white text-black border-2 border-black border-b-4 text-base text-destructive justify-start pl-4 pr-12 tracking-wider"
              onClick={disconnectWallet}
            >
              Disconnect
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}

export default CustomWalletConnect
