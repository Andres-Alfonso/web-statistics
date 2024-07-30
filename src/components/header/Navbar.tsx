"use client";

import React from 'react';
import Link from 'next/link';
import { AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className='mr-2'>
                <img src="https://cdn-icons-png.flaticon.com/512/5127/5127691.png" alt="" width={45} height={45}/>
            </div>
            <Link href="/" className='text-3xl'>
                MiDashboard
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="/">
              Home
            </Link>
            <Link href="/statistics">
              Statics
            </Link>
            <Link href="/profile">
              Profile
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-900 hover:text-blue-500 focus:outline-none focus:text-blue-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
