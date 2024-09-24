
"use client"
import { Button } from "../ui/button"
import { Loader2, Wallet as WalletIcon } from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react"
import { useLayoutEffect, useState } from "react"
import { useWalletModal } from "@solana/wallet-adapter-react-ui"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const CustomWalletConnect: React.FC = () => {
  const { setVisible } = useWalletModal()
  const { connecting, connected, disconnect, disconnecting } = useWallet()
  const [label, setLabel] = useState("Connect Wallet")

  useLayoutEffect(() => {
    if (connecting) setLabel("Connecting...")
  }, [connecting])

  useLayoutEffect(() => {
    if (disconnecting) setLabel("Disconnecting..")
  }, [disconnecting])

  useLayoutEffect(() => {
    if (connected) setLabel("Connected ")
    else setLabel('Connect Wallet')
  }, [connected])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
     
           <Button className="  hover:bg-slate-800 border-b-2 border-slate-700 text-white font-light  bg-black lg:block   mr-4  border-[1px]  shadow-4xl rounded-l text-xl pb-3 lg:pb-3 justify-center items-center  "  onClick={() => setVisible(true)}  disabled={label === 'Connecting...'} >
      {label === 'Connecting...' }
      {label}
  
  </Button>
      </DropdownMenuTrigger>
      {connected && (
        <DropdownMenuContent className="flex flex-col ">
          <DropdownMenuItem asChild>
            <Button  className=" bg-white text-black border-2 border-black  border-b-4 text-base text-destructive justify-start pl-4 pr-12 tracking-wider" onClick={() => disconnect()}>
              Disconnect
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  )
}

export default CustomWalletConnect
  