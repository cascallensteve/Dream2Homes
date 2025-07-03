import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initScrollAnimations, animateCounters } from '../utils/animations';

const Home = () => {
  useEffect(() => {
    initScrollAnimations();
    animateCounters();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent-500 rounded-full opacity-10 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-400 rounded-full opacity-10 animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full opacity-5 animate-bounce-slow"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Large Hero Logo */}
          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in">
            <img 
              src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
              alt="Dream2 Home Logo" 
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 xl:h-64 xl:w-64 2xl:h-72 2xl:w-72 mx-auto object-contain hover:scale-110 transition-transform duration-500 animate-pulse-slow"
            />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight animate-fade-in-delay">
          Connect Sellers with Buyers
          <span className="text-accent-300"> Off-Market Deals</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-8 sm:mb-10 md:mb-12 max-w-5xl mx-auto text-primary-100 animate-fade-in-delay px-2 sm:px-4 md:px-6">
          <span className="font-bold text-white">Dream2 Home</span> is a wholesaling company that connects property sellers with cash buyers for off-market deals. Skip the MLS, avoid realtor fees, and close fast with our direct buyer network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center animate-fade-in stagger-3">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-lg md:rounded-xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover-glow w-full sm:w-auto text-center"
            >
              Get My Cash Offer
            </Link>
            <a
              href="tel:+1234567890"
              className="border-2 md:border-3 border-white hover:bg-white hover:text-primary-800 text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-lg md:rounded-xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 hover-scale w-full sm:w-auto text-center"
            >
              Call (123) 456-7890
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose Dream2 Home?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto px-4">
              We make selling your house simple, fast, and profitable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            <div className="text-center group hover:bg-primary-50 p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl transition-all duration-300 animate-on-scroll hover-lift stagger-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 animate-float">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Direct Buyer Network</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">We connect you directly with our network of cash buyers. No MLS listing required, no realtor fees.</p>
            </div>

            <div className="text-center group hover:bg-primary-50 p-6 rounded-xl transition-all duration-300 animate-on-scroll hover-lift stagger-2">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Off-Market Deals</h3>
              <p className="text-gray-600">Access exclusive off-market opportunities. Connect with motivated sellers and qualified cash buyers.</p>
            </div>

            <div className="text-center group hover:bg-primary-50 p-6 rounded-xl transition-all duration-300 animate-on-scroll hover-lift stagger-3">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 animate-float">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Cash Offers</h3>
              <p className="text-gray-600">Get competitive cash offers from our verified buyer network. Fast closings with no financing contingencies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our simple 3-step process gets you cash for your house quickly.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-2xl font-bold text-white">1</span>
                <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <svg className="w-16 h-8 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Submit Your Property</h3>
              <p className="text-gray-600">Fill out our simple form with your property details. Takes less than 2 minutes.</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                <span className="text-2xl font-bold text-white">2</span>
                <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <svg className="w-16 h-8 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Get Your Cash Offer</h3>
              <p className="text-gray-600">We'll analyze your property and present you with a fair, no-obligation cash offer within 24 hours.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Close & Get Paid</h3>
              <p className="text-gray-600">Choose your closing date. We handle all the paperwork and you get cash in hand.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block hover-glow"
            >
              Start The Process Now
            </Link>
          </div>
        </div>
      </section>

      {/* Company Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl transform rotate-6 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80"
                alt="Modern house representing Dream2 Home services"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-6 -left-6 bg-white rounded-xl p-3 shadow-lg z-20">
                <img 
                  src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
                  alt="Dream2 Home Logo" 
                  className="h-16 w-16 sm:h-20 sm:w-20 object-contain animate-float"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent-500 rounded-xl p-4 shadow-lg z-20">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">24hrs</div>
                  <div className="text-sm">Quick Response</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Dream2 Home, we specialize in real estate wholesaling - connecting motivated sellers with qualified cash buyers for off-market deals. We streamline the process, eliminate the middleman, and create win-win opportunities for both parties.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our extensive network of cash buyers allows us to provide immediate solutions for property sellers while offering investors access to exclusive off-market opportunities. No MLS listings, no lengthy processes - just direct, efficient transactions.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-gray-900">Trusted by 500+ sellers and buyers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50 relative overflow-hidden">
        {/* Background Logo Elements */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
            alt="Dream2 Home Logo Background" 
            className="absolute top-10 left-10 h-32 w-32 object-contain animate-float"
          />
          <img 
            src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
            alt="Dream2 Home Logo Background" 
            className="absolute bottom-10 right-10 h-40 w-40 object-contain animate-pulse-slow"
          />
          <img 
            src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
            alt="Dream2 Home Logo Background" 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-48 object-contain animate-bounce-slow"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for themselves - proven results in real estate wholesaling.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary-800 mb-2 counter" data-target="500">0</div>
              <div className="text-primary-600 font-medium">Deals Closed</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary-800 mb-2 counter" data-target="7">0</div>
              <div className="text-primary-600 font-medium">Days Average Close</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary-800 mb-2 counter" data-target="98">0</div>
              <div className="text-primary-600 font-medium">Satisfaction Rate %</div>
            </div>
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary-800 mb-2">$0</div>
              <div className="text-primary-600 font-medium">Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real people who chose Dream2 Home for their property transactions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Client testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Mike Johnson</h4>
                  <p className="text-gray-600">Property Seller</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Dream2 Home made selling my inherited property so easy. They connected me with a cash buyer in just 5 days. No repairs, no hassle, just a fair deal."
              </p>
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-primary-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b6e8c87c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Client testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Sarah Davis</h4>
                  <p className="text-gray-600">Real Estate Investor</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "As an investor, I love working with Dream2 Home. They consistently bring me quality off-market deals that I can't find anywhere else."
              </p>
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt="Client testimonial"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Robert Chen</h4>
                  <p className="text-gray-600">Homeowner</p>
                </div>
              </div>
              <p className="text-gray-700 italic mb-4">
                "Facing foreclosure was stressful, but Dream2 Home helped me find a solution quickly. Their network of buyers saved my credit score."
              </p>
              <div className="flex text-yellow-400">
                {"★".repeat(5)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Visualization Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Connecting the Right People
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our wholesaling process brings together motivated sellers and qualified cash buyers, creating opportunities that benefit everyone involved.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Evaluation</h3>
                    <p className="text-gray-600">We assess your property's value and market potential within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Buyer Matching</h3>
                    <p className="text-gray-600">We connect you with the right cash buyers from our extensive network.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Deal Facilitation</h3>
                    <p className="text-gray-600">We facilitate the transaction to ensure a smooth, profitable outcome for all parties.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500 to-primary-500 rounded-3xl transform -rotate-6 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Real estate professionals working"
                className="relative z-10 rounded-3xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -left-4 bg-primary-600 rounded-xl p-4 shadow-lg z-20">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Connections Made</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent-300 rounded-full opacity-10 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary-300 rounded-full opacity-10 animate-bounce-slow"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          {/* CTA Logo */}
          <div className="mb-6 animate-scale-in">
            <img 
              src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1751526333/Blue_and_Green_Simple_Financial_Logo-removebg-preview_m4z4o7.png" 
              alt="Dream2 Home Logo" 
              className="h-20 w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 mx-auto object-contain animate-bounce-slow opacity-90"
            />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Connect with Cash Buyers?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-primary-100 max-w-3xl mx-auto animate-fade-in-delay">
            Join our network of sellers and buyers. Get your property in front of qualified cash investors today - no MLS required.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Link
              to="/contact"
              className="bg-accent-500 hover:bg-accent-600 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover-glow"
            >
              🏠 Get Connected Now
            </Link>
            <a
              href="tel:+1234567890"
              className="border-3 border-white hover:bg-white hover:text-primary-800 text-white px-10 py-5 rounded-xl font-bold text-xl transition-all duration-300 backdrop-blur-sm bg-white/10 hover-scale"
            >
              📞 Call (123) 456-7890
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-8 text-primary-200">
            <div className="text-center">
              <div className="text-2xl font-bold">24hrs</div>
              <div className="text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm">Upfront Fees</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
