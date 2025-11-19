'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0a0e27] border-b border-slate-800/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            LOL<span className="text-blue-400">PROS</span>.GG
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/ladders" className="text-gray-400 hover:text-white transition">
              Ladders
            </Link>
            <Link href="/search" className="text-gray-400 hover:text-white transition">
              Search
            </Link>
            <Link href="/live-game" className="text-gray-400 hover:text-white transition">
              Live Game
            </Link>
            <Link href="/leagues" className="text-gray-400 hover:text-white transition">
              Leagues
            </Link>
            <Link href="/multi" className="text-gray-400 hover:text-white transition">
              Multi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link href="/ladders" className="block text-gray-400 hover:text-white py-2">
              Ladders
            </Link>
            <Link href="/search" className="block text-gray-400 hover:text-white py-2">
              Search
            </Link>
            <Link href="/live-game" className="block text-gray-400 hover:text-white py-2">
              Live Game
            </Link>
            <Link href="/leagues" className="block text-gray-400 hover:text-white py-2">
              Leagues
            </Link>
            <Link href="/multi" className="block text-gray-400 hover:text-white py-2">
              Multi
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
