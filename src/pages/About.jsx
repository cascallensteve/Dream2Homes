import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllAnimations } from '../utils/animations';

const About = () => {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full animate-pulse"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Dreams 2 Home
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up animate-delay-300">
            Transforming real estate with engineering precision and modern innovation
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="animate-fade-in-up animate-delay-200">
                At Dreams 2 Home, our mission is simple: to transform you into a 21st-century landlord. Say goodbye to paperwork, hassle, and outdated processes. We bring a modern, hands-off approach to property management, so your investment works for you—even while you sleep.
              </p>
              <p className="animate-fade-in-up animate-delay-400">
                As certified industry professionals with an engineering background, we bring best practices from the world of engineering into real estate. Our systems are built for efficiency, precision, and ease. We specialize in helping landlords evolve from tired, manual routines into streamlined, automated success.
              </p>
              <p className="animate-fade-in-up animate-delay-600">
                From maintenance and tenant relations to bookkeeping and strategy, we handle it all. You tell us your goals—we design, implement, and execute your vision with care and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              At Dreams 2 Home, our vision is to redefine what it means to be a landlord and real estate owner in the modern world. We aim to merge the precision of engineering, the innovation of technology, and the heart of community into one seamless real estate experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl animate-fade-in-left">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Innovation Creates Freedom</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                By integrating advanced systems and automation from the tech and engineering world, we believe landlords should spend less time on day-to-day management and more time enjoying the freedom their investments were meant to provide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl animate-fade-in-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Drives Legacy</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We're not just in real estate to build portfolios—we're here to build stronger neighborhoods, empower local ownership, and create lasting value in the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              To revolutionize property management through engineering-driven solutions, making real estate investment accessible, efficient, and profitable for everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simplify</h3>
              <p className="text-gray-600">
                We simplify complex real estate processes through automation and smart technology.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accelerate</h3>
              <p className="text-gray-600">
                We accelerate your success with proven strategies and rapid implementation.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-400">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Maximize</h3>
              <p className="text-gray-600">
                We maximize your returns through strategic optimization and continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
            Ready to Transform Your Real Estate?
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up animate-delay-200">
            Join hundreds of satisfied clients who trust us with their property investments.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            <span className="group-hover:scale-105 transition-transform duration-300">Get Started Today</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
