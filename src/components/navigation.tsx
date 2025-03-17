'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, User, Wrench, Phone, ArrowRight, Zap, Home } from "lucide-react";
import { getPath } from '../utils/path';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Handle menu toggle
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 shadow-lg">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link href={getPath('/')} className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">EK Web Design</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href={getPath('/about')} className="text-white/90 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href={getPath('/services')} className="text-white/90 hover:text-white transition-colors duration-300">
              Services
            </Link>
            <Link href={getPath('/contact')} className="text-white/90 hover:text-white transition-colors duration-300">
              Contact
            </Link>
            <Link
              href={getPath('/contact')}
              className="bg-white text-purple-600 font-medium py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-100 shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_20px_rgba(255,255,255,0.7)] animate-pulse-slow"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            type="button" 
            className="md:hidden inline-flex items-center p-2 text-white rounded-lg hover:bg-purple-800/30 focus:outline-none" 
            aria-controls="mobile-menu" 
            aria-expanded={isOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation Menu - Dropdown style */}
        {isOpen && (
          <div 
            className="md:hidden w-full mt-4 overflow-hidden"
          >
            <div className="bg-[#1a103a] shadow-xl border border-purple-900/30">
              <div className="p-4 space-y-3">
                <Link 
                  href={getPath('/about')} 
                  className="block px-4 py-3 text-white hover:bg-purple-800/30 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href={getPath('/services')} 
                  className="block px-4 py-3 text-white hover:bg-purple-800/30 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href={getPath('/contact')} 
                  className="block px-4 py-3 text-white hover:bg-purple-800/30 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                
                <div className="pt-3 mt-3 border-t border-purple-900/30">
                  <Link
                    href={getPath('/contact')}
                    className="flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Get Started
                  </Link>
                  
                  <div className="mt-4 flex items-center justify-center">
                    <p className="text-xs text-purple-300">Trusted by 100+ clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 