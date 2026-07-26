import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, FileText, Code2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './ThemeToggle';
import { ThemeMode } from '../../types/portfolio';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '/', sectionId: 'home' },
  { label: 'About', href: '/about', sectionId: 'about' },
  { label: 'Skills', href: '/skills', sectionId: 'skills' },
  { label: 'Projects', href: '/projects', sectionId: 'projects' },
  { label: 'Certificates', href: '/certificates', sectionId: 'certificates' },
  { label: 'Education', href: '/education', sectionId: 'education' },
  { label: 'Contact', href: '/contact', sectionId: 'contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string, href: string) => {
    setMobileMenuOpen(false);

    // If on main page, smooth scroll to section
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    // Else navigate to specific page route
    navigate(href);
  };

  return (
   <header
     className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
         isScrolled
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60 shadow-lg shadow-slate-900/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <NavLink
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Vikas<span className="text-blue-600 dark:text-blue-400">.dev</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium block -mt-1">
                CSE Engineering
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/50 p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-md">
            {NAV_ITEMS.map(item => {
              const isActive = location.pathname === item.href;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.sectionId, item.href)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              onClick={onOpenResume}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </button>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {NAV_ITEMS.map(item => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.sectionId, item.href)}
              className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 transition"
                >
                  {item.label}
                </button>
              ))}

<div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                 }}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 shadow-md shadow-blue-500/20"
                >
                  <FileText className="w-4 h-4" /> Download Resume
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
