import React from 'react';

interface TermsOfServiceProps {
  onNavigate?: (page: string) => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-24">
        <div className="mb-16 text-center">
          <h1 className="text-4xl sm:text-6xl text-white mb-6">
            TERMS OF <span className="logo-gradient">SERVICE</span>
          </h1>
          <p className="text-white/60 text-lg uppercase tracking-wider">Last updated: July 25, 2025</p>
        </div>

        <div className="glass-card p-12 rounded-3xl">
          <div className="prose prose-lg max-w-none text-white/90">
            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">1. Introduction</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                Welcome to Aionclips.com ("Site"), operated by AionSense LLC ("Company," "we," "us"). These Terms of Service ("Terms") govern your use of our video campaign analytics platform and related services ("Services"). By accessing or using the Site, you agree to these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">2. Eligibility</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">3. Contact Information</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                If you have questions about these Terms, email info@aionclips.com or mail us at:
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