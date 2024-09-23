import React, { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);



  return (
    <div>
      
      <nav className='bg-yellow-300 lg:bg-transparent flex justify-between items-center px-2'>

<div className="text-black">
  <Image
    width={150}
    height={100}
    src="/logo.png"
    className="pl-14 h-20"
    alt="Solzio Cat"
  />
</div>

<div className="lg:hidden">

  <button className="text-black text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
    ☰
  </button>

</div>


<ul className={`text-black text-2xl lg:flex lg:space-x-10 ${isMenuOpen ? 'block bg-yellow-300 ' : 'hidden'} lg:block`}>
 
  <li><a href="#" className="hover:text-amber-500 block cursor-pointer py-2 lg:py-0">Home</a></li>
  <li><a href="#" className="hover:text-amber-500 block cursor-pointer py-2 lg:py-0">About</a></li>
  <li><a href="#" className="hover:text-amber-500 block cursor-pointer py-2 lg:py-0">Price</a></li>
  <li><a href="#" className="hover:text-amber-500 block cursor-pointer py-2 lg:py-0">Buy</a></li>

</ul>


<button className='mt-1 shadow-xl mr hidden lg:block'>
  <div className="w-[167px] h-11 px-3 py-[5px] bg-[#ffc43b] rounded-xl justify-center items-center gap-2.5 inline-flex ">
    <div className="text-black text-xl font-normal font-['Comic Neue'] ">Connect Wallet</div>
  </div>
</button>


</nav>
    </div>
  )
}
