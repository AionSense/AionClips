import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingPage } from './components/LandingPage';
import { TermsOfService } from './components/TermsOfService';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { ComingSoon } from './components/ComingSoon';
import { LiquidCursor } from './components/LiquidCursor';
import { BackButton } from './components/BackButton';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'terms':
        return <TermsOfService onNavigate={setCurrentPage} />;
      case 'privacy':
        return <PrivacyPolicy onNavigate={setCurrentPage} />;
      case 'coming-soon':
        return <ComingSoon onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <LiquidCursor />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage !== 'landing' && <BackButton onNavigate={setCurrentPage} />}
      {renderPage()}
    </div>
  );
}