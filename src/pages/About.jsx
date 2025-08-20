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
            About Dreams2Home
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-fade-in-up animate-delay-300">
            Bridging the gap between property and opportunity
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p className="animate-fade-in-up animate-delay-200">
                At Dreams2Home, our mission is to bridge the gap between property and opportunity. We help clients unlock the true value of real estate — whether that's through a quick sale, a smart rental strategy, or comprehensive property support.
              </p>
              <p className="animate-fade-in-up animate-delay-400">
                We are a passionate team of real estate professionals with deep expertise in wholesaling, investment property, and property operations. With local market knowledge, innovative tools, and a client-first approach, we turn complex transactions into seamless experiences.
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
              Why Choose Dreams2Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              We offer local expertise with a national mindset, transparent communication at every step, and tailored solutions for homeowners, investors & renters. Full-spectrum services under one roof with a reputation built on trust, speed, and results.
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
                <h3 className="text-2xl font-bold text-gray-900">Local Expertise, National Mindset</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We combine deep local market knowledge with innovative tools and technologies to deliver solutions that work in today's competitive real estate environment.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl animate-fade-in-right">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Trust, Speed, and Results</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our reputation is built on delivering transparent communication, fast transactions, and results that exceed expectations. We turn complex real estate processes into seamless experiences.
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
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              We specialize in comprehensive real estate solutions that simplify complex processes and maximize opportunities for our clients across all areas of the market.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tailored Solutions</h3>
              <p className="text-gray-600">
                Customized real estate services that meet your unique goals, whether buying, selling, or investing.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent Process</h3>
              <p className="text-gray-600">
                Clear communication at every step ensures you're informed and confident throughout your transaction.
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up animate-delay-400">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full-Spectrum Service</h3>
              <p className="text-gray-600">
                From wholesaling to property management to short-term rentals - all services under one roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in-up">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Led by industry engineers with deep technical expertise and real estate acumen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Dorian */}
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl animate-fade-in-left">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dorian</h3>
              <p className="text-primary-600 font-semibold mb-4">Co-Founder & Strategy Director</p>
              <p className="text-gray-600 leading-relaxed">
                Industry engineer with extensive experience in system optimization and process automation. Joshua brings technical innovation to real estate operations, ensuring efficient and scalable solutions for all client needs.
              </p>
            </div>

            {/* Joshua */}
            <div className="text-center bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl animate-fade-in-right">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">J</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Joshua</h3>
              <p className="text-primary-600 font-semibold mb-4">Co-Founder & Engineering Lead</p>
              <p className="text-gray-600 leading-relaxed">
                Industry engineer specializing in strategic planning and market analysis. Dorian combines engineering precision with real estate expertise to deliver data-driven solutions and exceptional client outcomes.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Together, Dorian and Joshua leverage their engineering backgrounds to revolutionize real estate processes, bringing unprecedented efficiency, transparency, and innovation to every transaction.
            </p>
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
