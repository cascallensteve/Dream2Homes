import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAllAnimations } from '../utils/animations';

const PropertyListing = () => {
  const [formData, setFormData] = useState({
    userType: 'seller',
    fullName: '',
    email: '',
    phone: '',
    propertyAddress: '',
    contactMethod: 'email',
    propertyDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [submitMessage, setSubmitMessage] = useState('');

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80'
  ];

  useEffect(() => {
    initAllAnimations();
    
    // Change background image every 6 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset previous status
    setSubmitStatus(null);
    setSubmitMessage('');
    setIsSubmitting(true);

    try {
      // Send form data to Google Apps Script
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbyAXHRLepD3kpKc7dA9_8U2tKfY571SpROcL3ghPpwq0kfKwXl6k6QhGhaJ_3M-orYwUw/exec';
      
      // Create JSON payload that matches your Google Apps Script
      const jsonData = {
        userType: formData.userType,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        propertyAddress: formData.propertyAddress,
        contactMethod: formData.contactMethod,
        propertyDetails: formData.propertyDetails,
        formType: 'property-listing' // To differentiate from contact form
      };

      // Log the data being sent for debugging
      console.log('Sending property listing data:', jsonData);

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        mode: 'no-cors' // Required for Google Apps Script
      });

      console.log('Request sent successfully to Google Apps Script');

      // Since we're using no-cors mode, we can't read the response
      // But if we reach this point, the request was sent successfully
      setSubmitStatus('success');
      setSubmitMessage(
        formData.userType === 'seller' 
          ? 'Thank you! We\'ve received your property information. Our team will review your property and get back to you with a cash offer within 24 hours.'
          : 'Thank you! We\'ve received your buyer inquiry. Our team will contact you within 24 hours with available properties that match your criteria.'
      );
      
      // Reset form
      setFormData({
        userType: 'seller',
        fullName: '',
        email: '',
        phone: '',
        propertyAddress: '',
        contactMethod: 'email',
        propertyDetails: ''
      });
      
    } catch (error) {
      console.error('Error sending property listing:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error processing your request. Please try again or call us directly at (817) 653-9233.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Changing Background Images */}
        <div className="absolute inset-0">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img 
                src={image}
                alt="Property listing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-green-900/70 to-gray-900/80"></div>
            </div>
          ))}
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-green-500/10 rounded-full animate-pulse animate-delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-green-500/10 rounded-full animate-bounce animate-delay-700"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-600/20 border border-green-400/30 backdrop-blur-sm mb-8 animate-fade-in-up">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-300 font-medium">PROPERTY LISTING</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animate-delay-200">
            List Your Property
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Get Cash Offer in 24h
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-400">
            Connect with qualified buyers and get a fair cash offer for your property. No repairs, no commissions, no hassle.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12 animate-fade-in-up animate-delay-600">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">24h</div>
              <div className="text-gray-300">Cash Offer</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">7 Days</div>
              <div className="text-gray-300">Fastest Closing</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">0%</div>
              <div className="text-gray-300">Commission</div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listing Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 animate-fade-in-left">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get Your Cash Offer
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* User Type Selection */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <label className="block text-lg font-semibold text-gray-900 mb-4">
                    I am a <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="seller" 
                        checked={formData.userType === 'seller'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.userType === 'seller' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.userType === 'seller' 
                              ? 'border-green-500 bg-green-500' 
                              : 'border-gray-300'
                          }`}>
                            {formData.userType === 'seller' && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span className="font-medium text-gray-900">Property Seller</span>
                        </div>
                      </div>
                    </label>
                    <label className="relative">
                      <input 
                        type="radio" 
                        name="userType" 
                        value="buyer" 
                        checked={formData.userType === 'buyer'}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.userType === 'buyer' 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            formData.userType === 'buyer' 
                              ? 'border-green-500 bg-green-500' 
                              : 'border-gray-300'
                          }`}>
                            {formData.userType === 'buyer' && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span className="font-medium text-gray-900">Property Buyer</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(817) 653-9233"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Address <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="propertyAddress"
                    value={formData.propertyAddress}
                    onChange={handleChange}
                    placeholder="123 Main St, City, State 12345"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                {/* Contact Method */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="email" 
                        checked={formData.contactMethod === 'email'}
                        onChange={handleChange}
                        className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">Email</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="contactMethod" 
                        value="phone" 
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleChange}
                        className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">Phone</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tell us about your property (optional)
                  </label>
                  <textarea 
                    rows="4"
                    name="propertyDetails"
                    value={formData.propertyDetails}
                    onChange={handleChange}
                    placeholder="Property condition, timeline, any special circumstances..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                  ></textarea>
                </div>

                {/* Status Message */}
                {submitStatus && (
                  <div className={`p-6 rounded-2xl transition-all duration-300 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border-2 border-green-200' 
                      : 'bg-red-50 border-2 border-red-200'
                  }`}>
                    <div className="flex items-start">
                      {submitStatus === 'success' ? (
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      ) : (
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div className="ml-4">
                        <h3 className={`text-lg font-semibold mb-2 ${
                          submitStatus === 'success' ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {submitStatus === 'success' ? 'Success!' : 'Error'}
                        </h3>
                        <p className={`text-sm leading-relaxed ${
                          submitStatus === 'success' ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {submitMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-6 rounded-xl transition-all duration-300 text-lg flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:shadow-xl hover:-translate-y-1'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {formData.userType === 'seller' ? 'Processing Your Property...' : 'Processing Your Request...'}
                    </>
                  ) : (
                    formData.userType === 'seller' ? 'Get My Cash Offer' : 'Find Properties for Me'
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to receive communications from Dreams2Home. We respect your privacy and will never share your information.
                </p>
              </form>
            </div>

            {/* Contact Information & Features */}
            <div className="space-y-8 animate-fade-in-right">
              {/* Contact Information */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">(817) 653-9233</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">joshua.abuto@dreams2home.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                        <p>Saturday: 9:00 AM - 5:00 PM</p>
                        <p>Sunday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Urgent Assistance */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-3xl p-8 text-white">
                <h4 className="font-bold text-xl mb-4">Need to Sell Fast?</h4>
                <p className="text-red-100 mb-6">
                  If you're facing foreclosure, dealing with an inheritance, or need to relocate quickly, we can help. Call us now for immediate assistance.
                </p>
                <a 
                  href="tel:8176539233"
                  className="inline-block bg-white/20 hover:bg-white/30 backdrop-blur-sm text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 w-full"
                >
                  Call Now: (817) 653-9233
                </a>
              </div>

              {/* Process Steps */}
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h4 className="font-bold text-gray-900 mb-6">What Happens Next?</h4>
                <div className="space-y-4">
                  {[
                    { step: 1, title: "We review your property information" },
                    { step: 2, title: "We contact you within 24 hours" },
                    { step: 3, title: "We present you with a fair cash offer" },
                    { step: 4, title: "You choose your closing date" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Dreams2Home?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make selling your property simple, fast, and profitable with our comprehensive real estate solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fair Cash Offers</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide competitive cash offers based on current market conditions and your property's condition.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Closing</h3>
              <p className="text-gray-600 leading-relaxed">
                Close on your timeline - as fast as 7 days or whenever works best for you.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No Fees or Commissions</h3>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees, no commissions, no repairs needed. What we offer is what you get.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyListing;
