'use client'

import React, { useState } from 'react'
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

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <nav className="relative bg-yellow-400 px-2 pr-6 text-4xl font-bold lg:bg-transparent">
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center justify-between lg:w-auto lg:justify-start lg:gap-x-4">
          <div className="flex items-center text-black">
            <Image
              src="/logo.png"
              width={150}
              height={100}
              className="h-18 w-28 pl-4 lg:w-40 lg:pl-14"
              alt="Solzio Cat"
              priority
            />
          </div>
          <button
            className="text-2xl text-black lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex space-x-10 text-2xl text-black">
            {['Home', 'About', 'Price', 'Buy'].map((item) => (
              <NavItem key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavItem>
            ))}
          </ul>
        </div>
        
        <div className="hidden lg:block">
          <CustomWalletConnect />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 top-full z-50 w-full bg-yellow-400 px-4 py-4 lg:hidden">
          <ul className="mb-4 space-y-2 text-xl text-black">
            {['Home', 'About', 'Price', 'Buy'].map((item) => (
              <NavItem key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </NavItem>
            ))}
          </ul>
          <div className="mb-4">
            <WalletButton />
          </div>
          <CustomWalletConnect />
        </div>
      )}
    </nav>
  )
}

export default Navbar