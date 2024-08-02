'use client';
import Link from 'next/link';
import Logo from './Logo';
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary">
        <div className="flex justify-between items-center py-2 px-4 mx-auto w-[1440px] m-h-[88px] border-b border-opacity-0">
          <div className="flex space-x-4">
            <FaYoutube className="text-white" />
            <FaInstagram className="text-white" />
            <FaLinkedin className="text-white" />
            <FaTimes className="text-white" />
            <FaFacebook className="text-white" />
          </div>
          <div className="flex items-center space-x-4 text-white">
            <div className="relative inline-block">
              <select className="bg-primary text-white border-none rounded px-2 py-1">
                <option value="ksa">🇸🇦 KSA</option>
                <option value="usa">🇺🇸 USA</option>
              </select>
            </div>
            <div className="relative inline-block">
              <select className="bg-primary text-white border-none rounded px-2 py-1">
                <option value="en">EN</option>
                <option value="ar">AR</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow-md">
        <div className="flex items-center justify-between py-4 px-4 mx-auto w-[1440px] h-[88px]">
          <div className="flex items-center justify-start">
            <Logo />
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link href="/opportunities" className="text-gray-700 hover:text-primary">
              Opportunities
              <span className="ml-1">▼</span>
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-primary">Business</Link>
            <Link href="/investor" className="text-gray-700 hover:text-primary">Investor</Link>
            <Link href="/help" className="text-gray-700 hover:primary">Help</Link>
          </div>
          <div className="flex items-center space-x-4">
          <Link href="/sign-in" className="text-gray-700 hover:text-gray-900 border border-gray-700 rounded-lg px-4 py-2">Sign In</Link>
          <Link href="/get-started" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">Get Started</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
