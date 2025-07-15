import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Dream2 Home
          </h1>
          <p className="text-xl md:text-2xl text-primary-100">
            Your trusted partner in fast, fair property sales
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Dream2 Home is a specialized real estate wholesaling company that bridges the gap between motivated sellers and qualified cash buyers. We've been serving our community for over 5 years, facilitating hundreds of off-market transactions that benefit both sellers and investors.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by real estate professionals who recognized the inefficiencies in traditional real estate sales, we've built our reputation on creating win-win opportunities. Our team combines decades of real estate experience with an extensive network of cash buyers, enabling us to facilitate quick, profitable transactions without the complications of MLS listings.
              </p>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Licensed real estate professionals</span>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">A+ Better Business Bureau rating</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Locally owned and operated</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Track Record</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-primary-800 mb-2">5+</div>
                    <div className="text-gray-600">Years in Business</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-800 mb-2">500+</div>
                    <div className="text-gray-600">Deals Facilitated</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-800 mb-2">$10M+</div>
                    <div className="text-gray-600">Paid to Homeowners</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary-800 mb-2">98%</div>
                    <div className="text-gray-600">Customer Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another house-buying company. Here's what makes us different.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Direct Buyer Network</h3>
              <p className="text-gray-600">
                Our extensive network of pre-qualified cash buyers ensures quick transactions. We connect sellers directly with investors, eliminating traditional real estate bottlenecks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Off-Market Opportunities</h3>
              <p className="text-gray-600">
                Access exclusive off-market deals that never hit the MLS. Our wholesaling model creates opportunities for both sellers and buyers that traditional real estate can't match.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Local Expertise</h3>
              <p className="text-gray-600">
                We know the local market inside and out. Our offers are based on accurate, current market data and neighborhood knowledge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Buy As-Is Condition</h3>
              <p className="text-gray-600">
                No need to spend money on repairs, cleaning, or staging. We buy houses in any condition, from move-in ready to major fixer-uppers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Transparent Communication</h3>
              <p className="text-gray-600">
                We believe in honest, straightforward communication. No high-pressure tactics, no hidden surprises - just clear, honest business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Focused</h3>
              <p className="text-gray-600">
                We're invested in our community's success. We renovate and improve properties, helping to strengthen neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Off-Market Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Off-Market Sales?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skip the MLS and traditional listing process. Here are the advantages of selling directly to us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy & Discretion</h3>
                    <p className="text-gray-600">Your sale stays private. No public listings, no strangers walking through your home.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Speed & Certainty</h3>
                    <p className="text-gray-600">Close in days, not months. No financing contingencies or deals falling through.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Preparation Required</h3>
                    <p className="text-gray-600">No staging, deep cleaning, or expensive repairs. We buy your house exactly as it is.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Better Deals for Sellers</h3>
                    <p className="text-gray-600">No realtor commissions means more money in your pocket. We can often offer competitive prices.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Traditional Sale vs. Dream2 Home</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-primary-400">
                  <span>Time to Close</span>
                  <div className="text-right">
                    <div className="text-sm text-primary-200">Traditional: 30-60 days</div>
                    <div className="font-semibold">Dream2 Home: 7 days</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-400">
                  <span>Fees & Commissions</span>
                  <div className="text-right">
                    <div className="text-sm text-primary-200">Traditional: 6-10%</div>
                    <div className="font-semibold">Dream2 Home: $0</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary-400">
                  <span>Repairs Needed</span>
                  <div className="text-right">
                    <div className="text-sm text-primary-200">Traditional: Usually</div>
                    <div className="font-semibold">Dream2 Home: None</div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Certainty of Sale</span>
                  <div className="text-right">
                    <div className="text-sm text-primary-200">Traditional: 60-70%</div>
                    <div className="font-semibold">Dream2 Home: 98%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-accent-100">
            See why hundreds of homeowners have chosen Dream2 Home for their property sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-accent-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Your Free Offer
            </Link>
            <a
              href="tel:+18176539233"
              className="border-2 border-white hover:bg-white hover:text-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Call (817) 653-9233
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
