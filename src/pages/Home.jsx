import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { initAllAnimations } from '../utils/animations';
import Typed from 'typed.js';

const Home = () => {
  const [activeTab, setActiveTab] = useState('sellers');
  const typedRef = useRef(null);

  useEffect(() => {
    initAllAnimations();
    
    // Initialize Typed.js
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          'We connect sellers with buyers',
          'We connect buyers with opportunities',
          'We connect dreams with reality'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <div className="min-h-screen scroll-smooth transition-all duration-300 ease-in-out">
      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-primary-900 pt-20"
      >
        <div
          className="absolute inset-0 w-full h-full z-0 animate-pulse"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 83, 45, 0.6), rgba(20, 83, 45, 0.6)), url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="relative z-10 w-full">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-20 h-20 bg-primary-500/10 rounded-full animate-pulse animate-delay-300"></div>
            <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary-500/10 rounded-full animate-bounce animate-delay-700"></div>
            <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-primary-500/10 rounded-full animate-float animate-delay-1000"></div>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Animated Content */}
              <div className="space-y-6 lg:space-y-8 animate-fade-in-left">
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="hero-text text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-400 leading-tight">
                    Dreams2Home
                  </h1>
                  <div className="hero-text animate-fade-in-up animate-delay-300">
                    <div className="relative inline-block">
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 text-primary-100 font-medium">
                        <span className="relative">
                          Turning Dreams into Doors — Real Estate Made Simple
                    {/* Curved underline */}
                    <svg 
                            className="absolute -bottom-1 left-0 w-full h-3 lg:h-4 animate-pulse" 
                      viewBox="0 0 200 16" 
                      preserveAspectRatio="none"
                    >
                      <path 
                        d="M0,12 Q100,0 200,12" 
                        stroke="url(#heroGradient)" 
                              strokeWidth="2" 
                        fill="none"
                      />
                      <defs>
                        <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#22c55e" />
                                    <stop offset="50%" stopColor="#4ade80" />
                                    <stop offset="100%" stopColor="#22c55e" />
                        </linearGradient>
                      </defs>
                    </svg>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>



                {/* CTA Button */}
                <div className="animate-fade-in-up animate-delay-700">
                  <Link
                    to="/about"
                        className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-3 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                  >
                    <span className="group-hover:scale-105 transition-transform duration-300">Learn More</span>
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
              </div>
            </div>
            
              {/* Right Side - Phone Number Card */}
              <div className="flex justify-center lg:justify-end animate-fade-in-right">
                <div className="hero-text bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20 hover-lift animate-morph max-w-sm">
                  <div className="text-center space-y-3 lg:space-y-4">
                                      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center animate-heartbeat mx-auto">
                  <svg className="w-10 h-10 lg:w-12 lg:h-12 text-primary-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                    <div>
                      <div className="text-base lg:text-lg font-semibold text-primary-200 hover:text-primary-300">Free Consultation</div>
                      <a href="tel:8176539233" className="text-xl lg:text-3xl font-bold text-glow text-primary-200/80 hover:text-primary-300 transition-colors cursor-pointer">(817) 653-9233</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Typed.js Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-500/20 rounded-full animate-pulse animate-delay-500"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-500/20 rounded-full animate-bounce animate-delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 sm:mb-10 lg:mb-12 animate-fade-in-up">
              The Perfect Match
            </h2>
            <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center justify-center">
              <span 
                ref={typedRef}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-400 leading-relaxed"
              ></span>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in-up animate-delay-500 px-2 sm:px-0 mt-6 sm:mt-8">
              At Dreams2Home, we believe everyone deserves access to smart, simple, and profitable real estate solutions. Explore. Invest. Stay. Manage. We handle it all — professionally and personally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-700">
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                <span className="text-sm md:text-base">Direct Connections</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse animate-delay-200"></div>
                <span className="text-sm md:text-base">Fast Transactions</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse animate-delay-400"></div>
                <span className="text-sm md:text-base">Maximum Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Sellers/Buyers Section - 3D Enhanced */}
      <section className="py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 text-white relative overflow-hidden transition-all duration-500">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gray-600/10 rounded-full blur-xl animate-float transform-gpu"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-700/10 rounded-full blur-xl animate-pulse animate-delay-500 transform-gpu"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gray-500/10 rounded-full blur-lg animate-bounce animate-delay-1000 transform-gpu"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Toggle Selector with 3D effect */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-2 sm:p-3 border border-gray-600/50 shadow-2xl stable-transform hover:scale-105 transition-transform duration-300 w-full max-w-lg sm:max-w-none sm:w-auto" style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <button 
                  onClick={() => setActiveTab('sellers')}
                  className={`px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 stable-transform text-sm sm:text-base ${
                    activeTab === 'sellers' 
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 scale-105' 
                      : 'text-gray-300 hover:bg-gray-600/50 hover:text-white hover:scale-105'
                  }`}
                  style={{
                    boxShadow: activeTab === 'sellers' ? '0 10px 25px -5px rgba(34, 197, 94, 0.5)' : 'none'
                  }}
                >
                  Property Sellers
                </button>
                <button 
                  onClick={() => setActiveTab('buyers')}
                  className={`px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 stable-transform text-sm sm:text-base ${
                    activeTab === 'buyers' 
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 scale-105' 
                      : 'text-gray-300 hover:bg-gray-600/50 hover:text-white hover:scale-105'
                  }`}
                  style={{
                    boxShadow: activeTab === 'buyers' ? '0 10px 25px -5px rgba(34, 197, 94, 0.5)' : 'none'
                  }}
                >
                  Property Buyers
                </button>
                <button 
                  onClick={() => setActiveTab('management')}
                  className={`px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 stable-transform text-sm sm:text-base ${
                    activeTab === 'management' 
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/25 scale-105' 
                      : 'text-gray-300 hover:bg-gray-600/50 hover:text-white hover:scale-105'
                  }`}
                  style={{
                    boxShadow: activeTab === 'management' ? '0 10px 25px -5px rgba(34, 197, 94, 0.5)' : 'none'
                  }}
                >
                  Property Management
                </button>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content for Property Sellers */}
            {activeTab === 'sellers' && (
              <>
                {/* Left Content - Sellers with 3D cards */}
                <div className="space-y-10 animate-fade-in">
                  <div className="transform-gpu hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                      For Property Sellers
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Get maximum value when you sell smart
                    </p>
                  </div>

                  {/* Feature 1 - 3D Card */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 transform-gpu hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Get Your Best Offer, Set Your Terms.</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Connect with multiple cash buyers and get competitive offers. You control the timeline and closing terms that work best for your situation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Primary accent line with 3D effect */}
                  <div className="w-2 h-20 bg-gradient-to-b from-primary-500 to-primary-600 ml-7 rounded-full shadow-lg shadow-primary-500/25"></div>

                  {/* Feature 2 - 3D Card */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 transform-gpu hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a4 4 0 118 0v4m-8 0h8a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Streamlined Process, Maximum Results.</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Our engineering-powered approach ensures efficient transactions with professional expertise and transparent communication throughout the entire process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image - Sellers with enhanced 3D effect */}
                <div className="flex justify-center lg:justify-end animate-fade-in">
                  <div className="relative transform-gpu hover:scale-105 transition-transform duration-500">
                    <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary-500/50 p-3 backdrop-blur-sm shadow-2xl"
                         style={{
                           background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(147, 51, 234, 0.1))',
                           boxShadow: '0 25px 50px -12px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                         }}>
                      <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                        <img 
                          src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1753882946/people-office-work-day_mej1qi.webp"
                          alt="Happy property seller"
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full animate-bounce opacity-80 shadow-lg shadow-primary-500/25"></div>
                    <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-br from-primary-300 to-primary-400 rounded-full animate-float opacity-70 shadow-lg shadow-primary-300/25"></div>
                  </div>
                </div>
              </>
            )}

            {/* Content for Property Buyers */}
            {activeTab === 'buyers' && (
              <>
                {/* Left Content - Buyers with 3D cards */}
                <div className="space-y-10 animate-fade-in">
                  <div className="transform-gpu hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                      For Property Buyers
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Find exclusive deals when you invest smart
                    </p>
                  </div>

                  {/* Feature 1 - 3D Card */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 transform-gpu hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Access Exclusive Off-Market Properties.</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Get first access to properties before they hit the MLS. Find motivated sellers and wholesale deals not available to the general public.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Primary accent line with 3D effect */}
                  <div className="w-2 h-20 bg-gradient-to-b from-primary-500 to-primary-600 ml-7 rounded-full shadow-lg shadow-primary-500/25"></div>

                  {/* Feature 2 - 3D Card */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 transform-gpu hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Fast closings with verified deals.</h3>
                        <p className="text-gray-300 leading-relaxed">
                          All properties are pre-screened and verified. Close faster with motivated sellers who want quick, cash transactions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image - Property Buyers */}
                <div className="flex justify-center lg:justify-end animate-fade-in">
                  <div className="relative transform-gpu hover:scale-105 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-400/30 shadow-2xl">
                      <img 
                        src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1755234568/african-female-signing-proof-delivery-while-receiving-parcel-from-courier_jixqkw.jpg"
                        alt="Professional woman signing delivery documents"
                        className="w-full h-80 lg:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg animate-bounce opacity-80 shadow-lg"></div>
                  </div>
                </div>
              </>
            )}

            {/* Content for Property Management */}
            {activeTab === 'management' && (
              <>
                {/* Left Content - Property Management */}
                <div className="space-y-10 animate-fade-in">
                  <div className="transform-gpu hover:scale-105 transition-transform duration-300">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                      Property Management
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Maximize your rental income with professional management
                    </p>
                  </div>

                  {/* Feature 1 - 3D Card */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 transform-gpu hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Full-Service Management.</h3>
                        <p className="text-gray-300 leading-relaxed">
                          From tenant screening to maintenance coordination, we handle every aspect of your property management needs with professional expertise.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Primary accent line with 3D effect */}
                  <div className="w-2 h-20 bg-gradient-to-b from-primary-500 to-primary-600 ml-7 rounded-full shadow-lg shadow-primary-500/25"></div>

                  {/* Feature 2 - 3D Card */}
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl transform-gpu hover:scale-105 hover:-translate-y-2 transition-all duration-300"
                       style={{
                         boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                       }}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/25 transform-gpu hover:rotate-12 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-primary-300">Maximize ROI.</h3>
                        <p className="text-gray-300 leading-relaxed">
                          Our data-driven approach ensures optimal rental pricing and occupancy rates for maximum returns on your investment properties.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Image - Property Management */}
                <div className="flex justify-center lg:justify-end animate-fade-in">
                  <div className="relative transform-gpu hover:scale-105 transition-transform duration-500">
                    <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-400/30 shadow-2xl">
                      <img 
                        src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1755192318/portrait-african-young-businessman-businesswoman-looking-digital-tablet_1_xyx5tq.jpg"
                        alt="Property management professional"
                        className="w-full h-80 lg:h-96 object-cover rounded-xl hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg animate-bounce opacity-80 shadow-lg"></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Get to Know Us Section - Green CTA */}
      <section className="py-16 bg-gradient-to-r from-green-400 to-green-500 relative overflow-hidden transition-all duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get to Know Us and
                <br />
                <span className="text-gray-800">Start Your Journey</span>
              </h2>
              <p className="text-xl text-gray-800 mb-8 font-medium">
                Connect with our team & discover how we can help you achieve your real estate goals
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
              >
                <span className="group-hover:scale-105 transition-transform duration-300">Contact Us Today</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                {/* Circular container with increased size */}
                <div className="w-96 h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full border-8 border-white/20 shadow-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80"
                    alt="Happy Dreams2Home team member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Gradient overlay below the image */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-16 bg-gradient-to-t from-green-600/20 to-transparent rounded-full blur-xl"></div>
                
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-green-400 rounded-full animate-bounce opacity-80 shadow-lg"></div>
                <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white rounded-full animate-float opacity-90 shadow-lg"></div>
                <div className="absolute top-1/4 -left-10 w-12 h-12 bg-green-300 rounded-full animate-pulse opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float"></div>
      </section>

      {/* Best Real Estate Business Section - Full Page Redesign */}
      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-primary-900 to-gray-800 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full animate-float blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-400/10 rounded-full animate-pulse animate-delay-500 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-primary-300/10 rounded-full animate-bounce animate-delay-1000 blur-2xl"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rounded-full animate-float animate-delay-1500 blur-xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center px-6 py-3 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full text-primary-300 text-sm font-medium mb-8 animate-fade-in">
                <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 animate-pulse"></span>
                #1 Real Estate Solutions Provider
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight animate-fade-in-up">
                Best Real Estate
                <span className="block bg-gradient-to-r from-primary-400 via-white to-primary-400 bg-clip-text text-transparent animate-pulse">
                  Business
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
                At Dreams2Home, our mission is to bridge the gap between property and opportunity. We help clients unlock the true value of real estate — whether that's through a quick sale, a smart rental strategy, or comprehensive property support.
              </p>
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left Side - Features */}
              <div className="space-y-8 animate-fade-in-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Feature Card 1 */}
                  <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Innovative Technology</h3>
                        <p className="text-gray-300 leading-relaxed">Cutting-edge solutions and AI-powered tools for modern real estate needs</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 2 */}
                  <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Personalized Service</h3>
                        <p className="text-gray-300 leading-relaxed">Tailored solutions and dedicated support for every client's unique needs</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 3 */}
                  <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Fast Transactions</h3>
                        <p className="text-gray-300 leading-relaxed">Streamlined processes for quick and efficient property transactions</p>
                      </div>
                    </div>
                  </div>

                  {/* Feature Card 4 */}
                  <div className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">Trusted Partnerships</h3>
                        <p className="text-gray-300 leading-relaxed">Building long-lasting relationships with transparency and integrity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Feature Image */}
              <div className="space-y-8 animate-fade-in-right">
                {/* Feature Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img 
                      src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1753882946/people-office-work-day_mej1qi.webp"
                      alt="Real estate professionals at work"
                      className="w-80 h-60 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="text-center p-8 bg-gradient-to-r from-primary-600/20 to-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-gray-300 mb-6">Join hundreds of satisfied clients who trust us with their real estate needs</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-3 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                    >
                      <span className="group-hover:scale-105 transition-transform duration-300">Get Started Today</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <Link
                      to="/about"
                      className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-3 py-4 rounded-full font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Features Row */}
            <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up animate-delay-500">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Secure Transactions</h3>
                <p className="text-gray-300">Bank-level security for all your real estate transactions</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animate-delay-200">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Market Analytics</h3>
                <p className="text-gray-300">Data-driven insights to make informed decisions</p>
              </div>
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse animate-delay-400">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Customer Love</h3>
                <p className="text-gray-300">Rated 5-stars by thousands of satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;