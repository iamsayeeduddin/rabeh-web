'use client';
import Link from 'next/link';
import Logo from './Logo';
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary">
        <div className="flex justify-between items-center py-2 px-4 mx-auto w-[1440px] m-h-[88px] border-b border-opacity-0">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaYoutube className="text-white" />
            <FaInstagram className="text-white" />
            <FaLinkedin className="text-white" />
            <FaTimes className="text-white" />
            <FaFacebook className="text-white" />
          </div>
          {/* Country and Language Selectors */}
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
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/opportunities" className="text-gray-700 hover:text-gray-900">
              Opportunities
              <span className="ml-1">▼</span>
            </Link>
            <Link href="/business" className="text-gray-700 hover:text-gray-900">Business</Link>
            <Link href="/investor" className="text-gray-700 hover:text-gray-900">Investor</Link>
            <Link href="/help" className="text-gray-700 hover:text-gray-900">Help</Link>
          </div>
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link href="/sign-in" className="text-gray-700 hover:text-gray-900 border border-gray-700 rounded-md px-4 py-2" style={{ borderRadius: '8px' }}>Sign In</Link>
            <Link href="/get-started" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-light" style={{ borderRadius: '8px' }}>Get Started</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
