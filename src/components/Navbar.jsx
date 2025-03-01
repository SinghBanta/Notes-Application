import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
      {/* Animated border line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-75 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-red-500/50 to-red-600/50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 py-5">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Logo and Nav Section */}
          <div className="flex items-center justify-between flex-1">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-md animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400/40 to-red-500/40 rounded-full blur-lg animate-ping"></div>
                  <img
                    src="https://img.icons8.com/ios/452/brain.png"
                    alt="logo"
                    className="relative w-8 h-8 md:w-9 md:h-9 filter invert"
                  />
                </div>
                <span className="text-xl md:text-2xl font-extrabold text-white">
                  Second<span className="text-red-500">Brain</span>
                </span>
              </div>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Features
                </a>
                <a href="#about" className="text-gray-300 hover:text-white font-medium transition-colors">
                  About
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white font-medium transition-colors">
                  Pricing
                </a>
                <a href="#faq" className="text-gray-300 hover:text-white font-medium transition-colors">
                  FAQ
                </a>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-gray-400 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col items-center gap-4 py-4 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2`}>
            <a href="#features" className="w-full text-center py-2 text-gray-300 hover:text-white font-medium transition-colors">
              Features
            </a>
            <a href="#about" className="w-full text-center py-2 text-gray-300 hover:text-white font-medium transition-colors">
              About
            </a>
            <a href="#pricing" className="w-full text-center py-2 text-gray-300 hover:text-white font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="w-full text-center py-2 text-gray-300 hover:text-white font-medium transition-colors">
              FAQ
            </a>
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col w-full gap-3 px-4 pt-4 border-t border-gray-800">
              <a href="/login" className="w-full">
                <button className="w-full py-2 text-gray-300 hover:text-white transition-colors border border-gray-700 rounded-lg">
                  Sign In
                </button>
              </a>
              <a href="/signup" className="w-full">
                <button className="w-full relative py-2 overflow-hidden group rounded-lg bg-gradient-to-r from-red-600 to-red-500">
                  <span className="relative text-white font-medium">
                    Register
                  </span>
                </button>
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a href="/login">
              <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Sign In
              </button>
            </a>
            <a href="/signup">
              <button className="relative px-4 py-2 overflow-hidden group rounded-lg">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-red-600 to-red-500 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative text-red-500 group-hover:text-white font-medium">
                  Register
                </span>
              </button>
            </a>
            <a href="/login">
              <span className="border-2 border-red-500 rounded-lg text-white p-2.5 text-sm">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;