import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <div id="scroll-progress-bar" className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200/20 dark:bg-slate-800/20">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
