import React, { useEffect } from 'react';
import { initAllAnimations } from '../utils/animations';

const Terms = () => {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animate-delay-200">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none animate-fade-in-up animate-delay-400">
          
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using Dreams2Home's website and services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-gray-700 mb-4">
              Dreams2Home provides real estate services including property sales, property management, and investment opportunities in the Dallas-Fort Worth Metroplex area.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Services Provided</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Estate Services</h3>
                <p className="text-gray-700">
                  Dreams2Home offers comprehensive real estate services including but not limited to property sales, acquisitions, property management, and investment consulting.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Property Management</h3>
                <p className="text-gray-700">
                  We provide full-service property management including tenant screening, rent collection, maintenance coordination, and property oversight.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Investment Opportunities</h3>
                <p className="text-gray-700">
                  We connect investors with off-market property deals and wholesale opportunities in the Dallas-Fort Worth area.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Responsibilities</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">By using our services, you agree to:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Provide accurate and complete information when requested</li>
                <li>• Maintain the confidentiality of any account information</li>
                <li>• Use our services for lawful purposes only</li>
                <li>• Respect all applicable real estate laws and regulations</li>
                <li>• Not misuse or attempt to manipulate our platform or services</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Dreams2Home shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-700 mb-4">
              Real estate investments carry inherent risks, and past performance does not guarantee future results. All investment decisions should be made based on your own due diligence and financial situation.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services, to understand our practices.
            </p>
            <p className="text-gray-700 mb-4">
              We collect and process personal information in accordance with applicable data protection laws and our Privacy Policy.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Professional Standards</h2>
            <p className="text-gray-700 mb-4">
              Dreams2Home operates under the highest professional standards and adheres to all applicable real estate laws and regulations in Texas.
            </p>
            <p className="text-gray-700 mb-4">
              Our team consists of licensed professionals committed to providing transparent, ethical, and effective real estate solutions.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Modifications to Terms</h2>
            <p className="text-gray-700 mb-4">
              Dreams2Home reserves the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
            </p>
            <p className="text-gray-700 mb-4">
              Your continued use of our services after any such changes constitutes your acceptance of the new Terms of Service.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Contact Information</h2>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:info@dreams2home.com" className="text-primary-600 hover:text-primary-700">info@dreams2home.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:8176539233" className="text-primary-600 hover:text-primary-700">(817) 653-9233</a></p>
                <p><strong>Location:</strong> Dallas-Fort Worth Metroplex, Texas</p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Terms;
