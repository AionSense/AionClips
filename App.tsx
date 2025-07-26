import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ComingSoon } from './components/ComingSoon';
import { LiquidCursor } from './components/LiquidCursor';
import { BackButton } from './components/BackButton';

// TikTok verification component
function TikTokVerification() {
  return (
    <div style={{ fontFamily: 'monospace', padding: '20px' }}>
      tiktok-developers-site-verification=AETqyH7LkoxihYCUU2qqhphJXxEe2Oc6
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-background">
      <LiquidCursor />
      <Navigation />
      {!isLandingPage && <BackButton />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/terms/tiktokAETqyH7LkoxihYCUU2qqhphJXxEe2Oc6.txt" element={<TikTokVerification />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}