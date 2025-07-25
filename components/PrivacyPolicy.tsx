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
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">2. How We Use Information</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                We use collected information to provide our services, process payments, analyze performance, and improve user experience.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">3. Contact Information</h2>
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