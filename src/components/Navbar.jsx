"use client";
import Link from "next/link";
import Logo from "./Logo";
import { FaYoutube, FaInstagram, FaLinkedin, FaTimes, FaFacebook } from "react-icons/fa";
import useFonts from "@/utils/useFonts";

const Navbar = () => {
  const fonts = useFonts();
  return (
    <>
      <nav className="bg-primary">
        <div className="flex justify-between items-center py-2 px-4 mx-auto w-[1440px] m-h-[88px] border-b border-opacity-0">
          <div className="flex space-x-4 text-white">
            <Link href="https://www.instagram.com/rabehfinance/" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://www.facebook.com/RABEHclub" target="_blank">
              <FaFacebook />
            </Link>
            <Link href="https://www.linkedin.com/company/rabeh-ksa/" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://x.com/RabehFinance" target="_blank">
              <FaYoutube />
            </Link>
            <Link href="https://x.com/RabehFinance" target="_blank">
              <FaTimes />
            </Link>
          </div>
          <div className={"flex items-center space-x-4 text-white " + fonts.spaceG.className}>
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
          <div className="flex items-center justify-start space-x-6">
            <Link href="/">
              <Logo />
            </Link>
            <div className={"hidden md:flex space-x-6 text-sm text-[#2C303B] " + fonts.inter.className}>
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary">
                About
              </Link>
              <Link href="/opportunities" className="text-gray-700 hover:text-primary flex items-center justify-center">
                Opportunities
                {/* <span className="ml-2   ">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#3A404E" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span> */}
              </Link>
              <Link href="/business" className="text-gray-700 hover:text-primary">
                Business
              </Link>
              <Link href="/investor" className="text-gray-700 hover:text-primary">
                Investor
              </Link>
              <Link href="/help" className="text-gray-700 hover:text-primary">
                Help
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary">
                Contact Us
              </Link>
              <Link href="/careers" className="text-gray-700 hover:text-primary">
                Careers
              </Link>
            </div>
          </div>
          <div className={"flex items-center space-x-4 font-medium text-sm " + fonts.spaceG.className}>
            <Link href="/under-construction" className="text-gray-700 hover:text-gray-900 rounded-lg px-4 py-2">
              Sign In
            </Link>
            <Link href="/under-construction" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-light">
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
