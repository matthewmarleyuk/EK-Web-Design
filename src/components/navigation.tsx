'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">EK Web Design</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/services" className="text-white/90 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white transition-colors duration-300">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-white text-purple-600 font-medium py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] animate-pulse-slow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-lg border border-white/20"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-purple-900/95 backdrop-blur-lg">
            <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
              <Link
                href="/about"
                className="text-2xl font-medium text-white/90 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-2xl font-medium text-white/90 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-2xl font-medium text-white/90 hover:text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-white text-purple-600 font-medium py-3 px-6 rounded-full transition-all duration-300 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] animate-pulse-slow"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 