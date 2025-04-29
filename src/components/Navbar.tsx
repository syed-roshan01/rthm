'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa6';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 200); // Adjust this timeout for how long you want the dropdown to stay visible
  };

  return (
    <>
      {/* Navbar Styles */}
      <style jsx>{`
        .dropdown {
          position: relative;
          display: inline-block;
        }

        .dropdown-content {
          display: ${isDropdownVisible ? 'block' : 'none'};
          position: absolute;
          background-color: #ffffff;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          padding: 12px 16px;
          z-index: 1;
          opacity: ${isDropdownVisible ? '1' : '0'};
          transition: opacity 0.3s ease;
        }

        .dropdown:hover .dropdown-content {
          display: block;
          opacity: 1;
        }
      `}</style>

      <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-2 px-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-black">RTHM</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-black font-medium">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <Link href="/about" className="hover:text-gray-700">About Us</Link>

            {/* Services Dropdown */}
            <div 
              className="dropdown relative group"
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}
            >
              {/* Hoverable Services button */}
              <div className="flex items-center space-x-1 text-black hover:text-gray-700 cursor-pointer">
                <span>Services</span>
                <FaChevronDown className="text-sm mt-0.5" />
              </div>

              {/* Dropdown Menu (Hidden by default) */}
              <div className="dropdown-content absolute left-0 mt-2 flex-col bg-white shadow-lg rounded-md w-40 z-10">
              <Link href="/services/education" className="px-4 py-2 hover:bg-gray-100">Education</Link>
              </div>
            </div>

            <Link href="/contact" className="hover:text-gray-700">Contact Us</Link>
          </div>

          {/* Login Button - Link to login page */}
          <div className="hidden md:flex">
            <Link href="/login">
              <button
                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-900"
              >
                Login / Register
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <Link href="/" className="block p-4 border-b hover:bg-gray-100">Home</Link>
            <Link href="/about" className="block p-4 border-b hover:bg-gray-100">About Us</Link>
            <Link href="/services/education" className="block p-4 border-b hover:bg-gray-100">Education</Link>
            <Link href="/contact" className="block p-4 border-b hover:bg-gray-100">Contact Us</Link>
            <Link href="/login">
              <button
                onClick={() => setMenuOpen(false)}
                className="block w-full p-4 bg-black text-white hover:bg-gray-900 text-left"
              >
                Login / Register
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
