import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllAnimations } from '../utils/animations';

const Services = () => {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold opacity-90 animate-fade-in-up">
            Turning Dreams into Doors —<br />
            Real Estate Made Simple
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Wholesaling */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Wholesaling</h3>
              <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:text-blue-700">Get Cash Offer →</Link>
            </div>

            {/* Property Management */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Property Management</h3>
              <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:text-blue-700">Start Managing →</Link>
            </div>

            {/* Short-Term Rentals */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Short-Term Rentals</h3>
              <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:text-blue-700">Maximize ROI →</Link>
            </div>

            {/* Real Estate Solutions */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Real Estate Solutions</h3>
              <Link to="/contact" className="text-blue-600 font-semibold text-sm hover:text-blue-700">Get Started →</Link>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in-up">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 animate-fade-in-up animate-delay-200 max-w-3xl mx-auto">
              Ready to maximize your property's potential? Let's connect.
            </p>
          </div>

          {/* Three Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 animate-fade-in-up animate-delay-400">
            {/* Image 1 - Property Selling */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1753882946/people-office-work-day_mej1qi.webp"
                alt="Property selling consultation"
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Sell Your Property</h3>
                <p className="text-xs sm:text-sm text-white/90">Quick cash offers</p>
              </div>
            </div>

            {/* Image 2 - Property Management */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src="https://res.cloudinary.com/dqvsjtkqw/image/upload/v1754461246/clubhouse-tewksbury-usa_uxgvth.webp"
                alt="Property management services"
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Property Management</h3>
                <p className="text-xs sm:text-sm text-white/90">Professional management for maximum returns</p>
              </div>
            </div>

            {/* Image 3 - Investment Opportunities */}
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Real estate investment opportunities"
                className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2">Investment Opportunities</h3>
                <p className="text-xs sm:text-sm text-white/90">Exclusive off-market property deals</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white hover:bg-gray-100 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              <span className="group-hover:scale-105 transition-transform duration-300">Contact Us Today</span>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:gap-20">
            
            {/* Wholesaling */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Wholesaling
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Looking to sell your property fast or invest in real estate with built-in equity? Our expert team connects motivated sellers with serious buyers, offering quick closings and fair cash offers. We handle the legwork — you close the deal.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal for:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Distressed property owners</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Investors seeking off-market deals</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Landlords ready to exit</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Quick Cash Offers</h3>
                  <p className="text-gray-600 text-center">Fast closings with competitive offers for motivated sellers</p>
                </div>
              </div>
            </div>

            {/* Property Management */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left order-2 lg:order-1">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Peace of Mind Management</h3>
                  <p className="text-gray-600 text-center">Full-service property management that protects your investment</p>
                </div>
              </div>
              <div className="animate-fade-in-right order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Property Management
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Own a property but tired of managing tenants, maintenance, or rent collection? We offer full-service management that protects your asset and maximizes your return — all with transparent reporting and responsive service.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Services include:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Tenant screening & leasing</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Rent collection & accounting</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Maintenance coordination</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Compliance & inspections</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Short-Term Rentals */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Short-Term Rentals
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Turn your property into a high-earning asset. From listing optimization to guest communication and cleaning, we manage every detail to deliver 5-star stays — and strong monthly income.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Platforms we support:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Airbnb</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Vrbo</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Booking.com</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ideal for:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Vacation homes</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Secondary residences</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Investors seeking passive income</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-blue-50 p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">5-Star Experiences</h3>
                  <p className="text-gray-600 text-center">Complete management for maximum rental income and guest satisfaction</p>
                </div>
              </div>
            </div>

            {/* Real Estate Solutions */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left order-2 lg:order-1">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Complete Solutions</h3>
                  <p className="text-gray-600 text-center">Personalized real estate services for all your goals</p>
                </div>
              </div>
              <div className="animate-fade-in-right order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Real Estate Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're buying your first home, relocating, or looking to expand your investment portfolio, we offer personalized real estate services to meet your goals.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">We help with:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Home buying & selling</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Off-market acquisition</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Market analysis & strategy</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Investor consultation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
