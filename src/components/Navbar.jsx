'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src={logo} alt="Rabeh Logo" width={100} height={40} />
        </div>
        
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          <Link href="/opportunities" className="text-white hover:text-gray-200">Opportunities</Link>
          <Link href="/business" className="text-white hover:text-gray-200">Business</Link>
          <Link href="/investor" className="text-white hover:text-gray-200">Investor</Link>
          <Link href="/help" className="text-white hover:text-gray-200">Help</Link>
        </div>
        
        <div className="flex items-center space-x-2">
          <Link href="/signin" className="text-white hover:text-gray-200">Sign In</Link>
          <Link href="/get-started" className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-200">
            Get Started
          </Link>
          <select className="bg-purple-600 text-white border border-white rounded px-2 py-1">
            <option value="ksa">KSA</option>
            <option value="en">EN</option>
          </select>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="/" className="block text-white py-2">Home</Link>
          <Link href="/about" className="block text-white py-2">About</Link>
          <Link href="/opportunities" className="block text-white py-2">Opportunities</Link>
          <Link href="/business" className="block text-white py-2">Business</Link>
          <Link href="/investor" className="block text-white py-2">Investor</Link>
          <Link href="/help" className="block text-white py-2">Help</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;