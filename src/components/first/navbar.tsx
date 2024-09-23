'use client'

import React, { useState } from 'react';
import Image from 'next/image';

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="hover:text-amber-500 block cursor-pointer py-2 lg:py-0">
      {children}
    </a>
  </li>
);

const ConnectWalletButton = () => (
  <button className="hidden lg:block mt-1 shadow-xl mr-4">
    <div className="w-[167px] h-11 px-3 py-[5px] bg-[#ffc43b] rounded-xl flex justify-center items-center">
      <div className="text-black text-xl font-normal">Connect Wallet</div>
    </div>
  </button>
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-yellow-300 lg:bg-transparent flex justify-between items-center px-2">
      <div className="text-black">
        <Image
          width={150}
          height={100}
          src="/logo.png"
          className="pl-14 h-20"
          alt="Solzio Cat"
        />
      </div>

      <button
        className="lg:hidden text-black text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`text-black text-2xl lg:flex lg:space-x-10 ${
        isMenuOpen ? 'block bg-yellow-300' : 'hidden'
      } lg:block`}>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Price</NavItem>
        <NavItem href="#">Buy</NavItem>
      </ul>

      <ConnectWalletButton />
    </nav>
  );
}