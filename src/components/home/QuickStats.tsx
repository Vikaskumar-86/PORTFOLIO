import React from 'react';
import { motion } from 'motion/react';
import { STATS } from '../../utils/constants';

export const QuickStats: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-800/80 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
          >
            <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 group-hover:scale-105 transition-transform duration-200">
              {stat.value}
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
              {stat.label}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              {stat.subtext}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
