import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-8">
              <img 
                src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
                alt="Dream2 Home Logo" 
                className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 xl:h-36 xl:w-36 mr-5 sm:mr-6 md:mr-8 object-contain"
              />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Dream2 Home</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              We buy houses directly from homeowners with quick closings, no fees, and fair cash offers. 
              Your trusted partner in fast, hassle-free property sales.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+18176539233" className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Call (817) 653-9233
              </a>
              <Link to="/contact" className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Get Offer
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Get Cash Offer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18176539233" className="hover:text-white transition-colors">
                  (817) 653-9233
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@dreams2home.com" className="hover:text-white transition-colors">
                  info@dreams2home.com
                </a>
              </li>
              <li className="text-sm">
                Monday - Friday: 8AM - 7PM<br />
                Saturday: 9AM - 5PM<br />
                Sunday: By appointment
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Dream2 Home. All rights reserved.</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>Licensed Real Estate Professionals</p>
              <span className="hidden md:block">•</span>
              <p>We are not licensed agents or brokers</p>
              <span className="hidden md:block">•</span>
              <p>Equal Housing Opportunity</p>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center">
              <strong>Disclaimer:</strong> Dream2 Home is a real estate investment company. We are not licensed real estate agents or brokers. 
              We buy properties directly and do not list properties for sale. This website is for informational purposes only and does not constitute 
              an offer to purchase any specific property. All property purchases are subject to inspection and final approval.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
