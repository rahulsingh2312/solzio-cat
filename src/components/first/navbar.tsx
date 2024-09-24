'use client'

import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import CustomWalletConnect from '@/components/wallets/CustomWalletConnect'
import WalletButton from '@/components/wallets/WalletButton'

interface NavItemProps {
  href: string
  children: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <li>
    <a href={href} className="block cursor-pointer py-2 hover:text-amber-600 lg:py-0">
      {children}
    </a>
  </li>
)

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <nav className="flex flex-wrap items-center justify-between bg-yellow-400 px-2 pr-6 text-4xl font-bold lg:bg-transparent">
      <div className="flex items-center text-black">
        <Image
          src="/logo.png"
          width={150}
          height={100}
          className="h-18 w-32 pl-4 lg:h-20 lg:pl-14"
          alt="Solzio Cat"
          priority
        />
      </div>

      <button
        className="p-2 text-2xl text-black lg:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className="items-center justify-center pl-16 md:hidden">
        <WalletButton />
      </div>

      <div className={`w-full lg:block lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
        
        
      <ul className="mb-4 flex justify-between bg-yellow-400 px-4 pt-6 text-xl text-black lg:flex-row lg:space-x-10 lg:bg-transparent lg:text-2xl">
          {['Home', 'About', 'Price', 'Buy'].map((item) => (
            <NavItem key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavItem>
          ))}
        </ul>

        <ul className="mb-4 flex justify-between bg-yellow-400 px-4 pt-6 text-xl text-black lg:flex-row lg:space-x-10 lg:bg-transparent lg:text-2xl">
          {['', '', '', ''].map((item) => (
            <NavItem key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </NavItem>
          ))}
        </ul>
      </div>

      <div className={`w-full lg:block lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
        <CustomWalletConnect />
      </div>
    </nav>
  )
}

export default Navbar