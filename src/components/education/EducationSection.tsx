import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { EDUCATION_DATA } from '../../utils/constants';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          title="Education Timeline"
          subtitle="Academic milestones, courseworks, and achievements in Computer Science & Engineering."
        />

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-blue-500/30 dark:border-blue-500/20 space-y-12">
          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-white dark:border-slate-900 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 ${
                item.current ? 'bg-blue-600 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
              }`}>
                <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-4">
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      {item.institution}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {item.degree}
                    </h3>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-mono">
                    {item.grade}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Coursework Tags */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-blue-500" /> Key Subjects & Coursework
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.coursework.map(c => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                {item.achievements.length > 0 && (
                  <div className="pt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500" /> Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
