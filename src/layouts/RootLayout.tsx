import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { BackToTop } from '../components/common/BackToTop';
import { ResumeModal } from '../components/common/ResumeModal';
import { useDarkMode } from '../hooks/useDarkMode';

export const RootLayout: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 font-sans ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Global Navigation Header */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-1">
        <Outlet context={{ onOpenResume: () => setIsResumeOpen(true) }} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back To Top Control */}
      <BackToTop />

      {/* Resume View / Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};
