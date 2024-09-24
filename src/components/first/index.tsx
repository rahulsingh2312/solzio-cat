"use client"
import Navbar from './navbar';
import Hero from './Hero';

export default function Home() {



  return (
    <div id="home" className="min-h-screen bg-gradient-to-b from-[#ffdd75d4] via-[#fef9c2ba] to-[#fef9c2ba]">

      <Navbar />
      <Hero />
     
    </div>
  );
}