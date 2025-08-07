import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Get Started Button */}
        <div className="flex justify-center mb-8">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-4 bg-gray-800 hover:bg-gray-700 border-2 border-blue-500 hover:border-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">Get Started today</span>
            
            {/* Plus icon */}
            <div className="relative z-10 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-400 group-hover:rotate-90 transition-all duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            <p>All Rights Reserved,© 2024, Dreams2Home.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a href="https://www.facebook.com/share/16HYiipyNw/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/dreams2homellc?igsh=MTF4Nzh0eTBvajMzdg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297L3.323 14.1c-.49-.49-.814-1.224-.814-1.96 0-.735.325-1.469.814-1.96l1.803-1.591c.875-.807 2.026-1.297 3.323-1.297 1.297 0 2.448.49 3.323 1.297l1.803 1.591c.49.49.814 1.224.814 1.96 0 .735-.325 1.469-.814 1.96l-1.803 1.591c-.875.807-2.026 1.297-3.323 1.297z"/>
              </svg>
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center space-x-8 text-sm">
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
