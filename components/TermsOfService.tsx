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
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">2. Eligibility and Acceptance</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• You must be at least 18 years old to use the Services.</li>
                <li>• You agree to comply with all applicable laws and these Terms.</li>
                <li>• If you register on behalf of a company or organization, you represent that you have authority to bind that entity.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">3. Changes to Terms</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                We may modify these Terms at any time. We will post an updated version with a new "Last updated" date. Your continued use after changes means you accept the new Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">4. Services</h2>
              <p className="text-white/80 mb-4 leading-relaxed">We provide:</p>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• Real‑time video performance tracking across TikTok, YouTube, and Instagram</li>
                <li>• Automated payout calculation and distribution to content creators</li>
                <li>• A creator dashboard with analytics on campaign performance and earnings</li>
                <li>• Automated ingestion of video metrics via social media integrations</li>
                <li>• AI‑powered anomaly detection to flag fraudulent view patterns</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">5. Registration and Accounts</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• All users must register through our secure authentication service.</li>
                <li>• Required information: email (unique), full name, company affiliation, optional avatar URL, social media connection tokens.</li>
                <li>• Keep your credentials secure. You are responsible for all activity under your account.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">6. User Conduct and Content</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• You may submit only videos you own or have permission to use.</li>
                <li>• Prohibited activities include fraudulent view manipulation, gaming payout calculations, violating social platform terms, or any illegal activity.</li>
                <li>• We require a license to display video titles and thumbnails and collect performance metrics.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">7. Payment, Pricing, and Refunds</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• Sponsors fund campaigns on a per‑view rate model.</li>
                <li>• Creators and clippers receive payouts; there is no subscription fee.</li>
                <li>• Payments and refunds are processed via our chosen payment processor.</li>
                <li>• Unused campaign budget is refundable; payouts are final and non‑refundable.</li>
                <li>• Disputes may be submitted through our support channel.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">8. Intellectual Property</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• All Site code, analytics algorithms, UI design, and "AION Tracker" branding are owned by AionSense LLC.</li>
                <li>• User‑submitted content remains owned by the original creator.</li>
                <li>• Users receive a limited license to access and use the Services.</li>
                <li>• To request permission to use our IP, contact legal@aionclips.com.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">9. Suspension and Termination</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• We may suspend or terminate accounts for violations such as fraud, non‑payment, abuse, or legal requirements.</li>
                <li>• You may delete your account at any time by clicking the "Delete Account" button in your settings. Outstanding payouts will be processed before closure.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">10. Disclaimer of Warranties</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• Services are provided "as is" and "as available."</li>
                <li>• We do not guarantee continuous operation of third‑party platforms or absolute analytics accuracy.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">11. Limitation of Liability</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• To the maximum extent permitted by law, our total liability is capped at the fees paid by you in the 12 months prior to any claim.</li>
                <li>• We are not liable for indirect, incidental, or consequential damages, or for changes to third‑party platforms.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">12. Indemnification</h2>
              <p className="text-white/80 mb-6 leading-relaxed">
                You agree to indemnify and hold us harmless from any claims arising out of your use of the Services or violation of these Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">13. Governing Law and Dispute Resolution</h2>
              <ul className="text-white/80 mb-6 leading-relaxed space-y-3">
                <li>• These Terms are governed by the laws of the State of Texas, United States.</li>
                <li>• All disputes must be resolved by binding arbitration in Dallas, Texas, under then‑current arbitration rules chosen by the arbitrator.</li>
                <li>• Judicial remedies (small claims court) remain available for disputes below any required threshold.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl text-white mb-6 logo-gradient uppercase tracking-wider">14. Contact Information</h2>
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