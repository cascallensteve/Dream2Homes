import React, { useEffect } from 'react';
import { initAllAnimations } from '../utils/animations';

const Privacy = () => {
  useEffect(() => {
    initAllAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up animate-delay-200">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none animate-fade-in-up animate-delay-400">
          
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Dreams2Home collects information you provide directly to us when you use our services, contact us, or engage with our real estate platform.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information includes:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contact information (name, email, phone number)</li>
                <li>• Property information and preferences</li>
                <li>• Financial information relevant to real estate transactions</li>
                <li>• Communication preferences and history</li>
                <li>• Location data when using our services</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Estate Services</h3>
                <p className="text-gray-700">
                  We use your information to provide property sales, management, and investment services tailored to your needs and preferences.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Communication</h3>
                <p className="text-gray-700">
                  To contact you about your property inquiries, market updates, and relevant real estate opportunities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Service Improvement</h3>
                <p className="text-gray-700">
                  To analyze usage patterns and improve our services, website functionality, and customer experience.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              Dreams2Home does not sell, trade, or rent your personal information to third parties without your explicit consent.
            </p>
            
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">We may share your information:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• With service providers who assist in our operations</li>
                <li>• When required by law or legal process</li>
                <li>• With your consent for specific transactions</li>
                <li>• To protect our rights and the safety of others</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="text-gray-700 mb-4">
              Our security measures include encryption, access controls, and regular security assessments to ensure your data remains protected.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
            <p className="text-gray-700 mb-4">
              Real estate transaction records may be retained for extended periods as required by applicable regulations and business practices.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Your Rights and Choices</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">You have the right to:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Access and update your personal information</li>
                <li>• Request deletion of your personal data</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Request information about data processing</li>
                <li>• File complaints with supervisory authorities</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic.
            </p>
            <p className="text-gray-700 mb-4">
              You can control cookie settings through your browser preferences, though some features may not function properly if cookies are disabled.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our website may contain links to third-party services or integrate with external platforms. We are not responsible for the privacy practices of these third parties.
            </p>
            <p className="text-gray-700 mb-4">
              We encourage you to review the privacy policies of any third-party services you access through our platform.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Policy Updates</h2>
            <p className="text-gray-700 mb-4">
              Dreams2Home may update this Privacy Policy from time to time. We will notify you of any material changes via email or prominent notice on our website.
            </p>
            <p className="text-gray-700 mb-4">
              Your continued use of our services after policy updates constitutes acceptance of the revised Privacy Policy.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-200">
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:info@dreams2home.com" className="text-primary-600 hover:text-primary-700">info@dreams2home.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:8176539233" className="text-primary-600 hover:text-primary-700">(817) 653-9233</a></p>
                <p><strong>Location:</strong> Dallas-Fort Worth Metroplex, Texas</p>
              </div>
              <p className="text-gray-700 mt-4">
                We are committed to resolving any privacy concerns promptly and transparently.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Privacy;
