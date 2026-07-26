import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { ThemeMode } from '../../types/portfolio';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle, className = '' }) => {
  return (
    <button
      id="theme-toggle-btn"
      onClick={onToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-xl transition-all duration-300
        bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-blue-400 
        hover:bg-slate-200 dark:hover:bg-slate-700 hover:scale-105 active:scale-95
        border border-slate-200 dark:border-slate-700/60 shadow-sm ${className}`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
