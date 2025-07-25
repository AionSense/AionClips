import React from 'react';

interface PrivacyPolicyProps {
  onNavigate?: (page: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-6xl text-white mb-6">
            PRIVACY <span className="logo-gradient">POLICY</span>
          </h1>
          <p className="text-white/60 text-lg uppercase tracking-wider">Effective date: July 25, 2025</p>
        </div>

        <div className="glass-card p-12 rounded-3xl">
          <div className="prose prose-lg max-w-none text-white/90">
            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">1. Information We Collect</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• Identity data: name, email, user ID</li>
                <li>• Financial data: payout amounts, payment account details</li>
                <li>• Social media data: platform usernames, access tokens, video IDs</li>
                <li>• Analytics data: video performance metrics, engagement figures</li>
                <li>• Technical data: IP address, session information, usage logs</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">2. How We Collect Information</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• User registration and profile forms</li>
                <li>• Integrations with social media platforms for video metrics</li>
                <li>• Automated data collection processes</li>
                <li>• System logs and monitoring</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">3. How We Use Information</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• To provide and improve the Services and dashboard features</li>
                <li>• To calculate and distribute payouts</li>
                <li>• To detect and prevent fraud via anomaly analysis</li>
                <li>• To monitor system performance and optimize operations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">4. Information Sharing</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• With our hosting and infrastructure providers for operation and security</li>
                <li>• With payment processors for transaction handling</li>
                <li>• With social media platforms to retrieve video metrics</li>
                <li>• We do not share personal data for advertising or marketing purposes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">5. Cookies and Tracking</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• Authentication cookies for user sessions</li>
                <li>• Server‑side caching for performance</li>
                <li>• System monitoring and logging</li>
                <li>• No use of third‑party analytics pixels</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">6. Data Retention</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• User accounts: retained until deletion is requested</li>
                <li>• Video metrics and payment records: retained for 7 years for tax and audit</li>
                <li>• System logs: retained per our monitoring policy</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">7. Security Measures</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                We employ industry‑standard measures such as encryption at rest and in transit, access controls, secure credential storage, and regular security audits to protect your data.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">8. Your Data Rights</h2>
              <p className="text-white/80 mb-4 leading-relaxed">You may:</p>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• Access and view your data via your dashboard</li>
                <li>• Correct your profile information at any time</li>
                <li>• Request deletion by using the "Delete Account" button</li>
                <li>• Export your data through the account settings</li>
                <li>• Object to non‑essential analytics processing</li>
              </ul>
              <p className="text-white/80 mb-6 leading-relaxed">
                To exercise these rights, email privacy@aionclips.com.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">9. International Data Transfers</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                All personal data is processed in the United States. By using the Services, you consent to transfer of your data to the US.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">10. Children's Privacy</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Our Services are intended for users 18 or older. We do not knowingly collect data from minors under 18 and will delete any such data if discovered.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">11. Changes to This Policy</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                We may update this Privacy Policy. Changes take effect when we post the new version with an updated "Effective date."
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">12. Contact Information</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                For privacy inquiries, email privacy@aionclips.com or write to:
              </p>
              <div className="text-white/80 mb-6 leading-relaxed pl-4">
                <p>AionSense LLC</p>
                <p>539 West Commerce Street, Suite 6978</p>
                <p>Dallas, Texas 75208</p>
                <p>United States</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 