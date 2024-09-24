'use client'
import CustomWalletConnect from '@/components/wallets/CustomWalletConnect'
import React, { useState } from 'react';
import Image from 'next/image';
const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="hover:text-amber-800 block cursor-pointer py-2 lg:py-0">
      {children}
    </a>
  </li>
);



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-yellow-400 pr-6 text-4xl font-bold lg:bg-transparent flex flex-wrap justify-between items-center px-2">
      <div className="text-black flex items-center">
        <Image
          width={150}
          height={100}
          src="/logo.png"
          className="pl-4 lg:pl-14 h-18 w-32 lg:h-20"
          alt="Solzio Cat"
        />
      </div>

      <button
        className="lg:hidden text-black text-2xl p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <div className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <ul className="text-black text-xl lg:text-2xl flex justify-between pt-6 px-4 mb-4 lg:flex-row lg:space-x-10 bg-yellow-400 lg:bg-transparent">
          <NavItem href="#">Home</NavItem>
          <NavItem href="#">About</NavItem>
          <NavItem href="#">Price</NavItem>
          <NavItem href="#">Buy</NavItem>
        </ul>
      </div>

      <div className={`w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
      <CustomWalletConnect />
      </div>
    </nav>
  );
}