import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src="/logo.png" alt="Rabeh" className="h-8 mr-3" />
          <span className="font-bold text-xl">Rabeh</span>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">About</a>
          </Link>
          <div className="relative group">
            <button className="text-gray-700 hover:text-gray-900">
              Opportunities
            </button>
            <div className="absolute left-0 hidden w-40 mt-2 bg-white border border-gray-200 rounded-md shadow-lg group-hover:block">
              <Link href="/opportunities/1" legacyBehavior>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Opportunity 1</a>
              </Link>
              <Link href="/opportunities/2" legacyBehavior>
                <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Opportunity 2</a>
              </Link>
            </div>
          </div>
          <Link href="/business" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Business</a>
          </Link>
          <Link href="/investor" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Investor</a>
          </Link>
          <Link href="/help" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Help</a>
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/sign-in" legacyBehavior>
            <a className="text-gray-700 hover:text-gray-900">Sign In</a>
          </Link>
          <Link href="/get-started" legacyBehavior>
            <a className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700">Get Started</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
