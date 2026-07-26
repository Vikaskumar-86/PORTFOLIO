import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 pt-24">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-7xl font-black text-blue-600 dark:text-blue-400">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h2>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          The requested portfolio section could not be located. Head back to Vikas Kumar's home page.
        </p>
        <div className="pt-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
          >
            <Home className="w-4 h-4" /> Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};
