import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-black sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-20 lg:h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Logo size="medium" className="mr-3 lg:mr-4 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xl lg:text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Dreams2Home</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/services') 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Contact us
            </Link>
            <Link
              to="/property-listing"
              className={`text-base font-medium transition-colors duration-300 ${
                isActive('/property-listing') 
                  ? 'text-blue-400' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Property Listings
            </Link>
            
            {/* Green CTA Button */}
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              <span>Get Cash Offer</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-20 bg-gray-900/98 backdrop-blur-lg z-40 overflow-hidden">
            <div className="flex flex-col space-y-2 pt-8 pb-6 px-6 h-full">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`relative px-6 py-4 mx-2 rounded-xl text-lg font-medium transition-all duration-300 group overflow-hidden ${
                  isActive('/') 
                    ? 'text-blue-400 bg-gray-700/70' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`relative px-6 py-4 mx-2 rounded-xl text-lg font-medium transition-all duration-300 group overflow-hidden ${
                  isActive('/about') 
                    ? 'text-blue-400 bg-gray-700/70' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="relative z-10">About</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className={`relative px-6 py-4 mx-2 rounded-xl text-lg font-medium transition-all duration-300 group overflow-hidden ${
                  isActive('/services') 
                    ? 'text-blue-400 bg-gray-700/70' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="relative z-10">Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`relative px-6 py-4 mx-2 rounded-xl text-lg font-medium transition-all duration-300 group overflow-hidden ${
                  isActive('/contact') 
                    ? 'text-blue-400 bg-gray-700/70' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/property-listing"
                onClick={() => setIsOpen(false)}
                className={`relative px-6 py-4 mx-2 rounded-xl text-lg font-medium transition-all duration-300 group overflow-hidden ${
                  isActive('/property-listing') 
                    ? 'text-blue-400 bg-gray-700/70' 
                    : 'text-gray-200 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                <span className="relative z-10">Property Listings</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="mt-8 px-2">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-green-500 hover:bg-green-600 text-black px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 inline-flex items-center justify-center"
                >
                  <span>Get Cash Offer</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
