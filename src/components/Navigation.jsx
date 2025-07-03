import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 sm:h-28 md:h-36 lg:h-40 xl:h-44">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
                alt="Dream2 Home Logo" 
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 xl:h-40 xl:w-40 mr-4 sm:mr-5 md:mr-6 object-contain hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Dream2 Home</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/about') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-4 lg:px-6 xl:px-8 py-2 lg:py-3 rounded-lg font-medium lg:font-semibold text-sm lg:text-base transition-colors shadow-lg hover:shadow-xl"
            >
              Get My Offer
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:text-primary-600"
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
          <div className="lg:hidden pb-4 sm:pb-6">
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-md text-base sm:text-lg font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/contact') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-colors mx-3 text-center"
              >
                Get My Offer
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
