'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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

        {/* Mobile Navigation Menu - Slide from right */}
        <div 
          className={`md:hidden fixed inset-y-0 right-0 z-40 w-4/5 max-w-sm bg-gray-900 text-white opacity-100 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-5 border-b border-gray-700">
            <h2 className="text-xl font-medium text-white">NAVIGATION</h2>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-300"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="p-5">
            <div className="flex flex-col space-y-6">
              <Link
                href="/about"
                className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium text-white hover:text-gray-300 py-2 border-b border-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
            
            <div className="mt-10">
              <Link
                href="/contact"
                className="block w-full bg-purple-600 text-white font-medium py-3 px-6 rounded-md text-center transition-all duration-300 hover:bg-purple-700"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        
        {/* Overlay when menu is open */}
        <div 
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </nav>
  );
} 