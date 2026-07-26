import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { PERSONAL_INFO } from '../../utils/constants';
import { Code, Target, BookOpen, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get To Know Me"
          title="About Vikas Kumar"
          subtitle="Computer Science Engineering Student passionate about software engineering, AI innovations, and modern web architectures."
        />

        {/* Bio & Career Objective Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Professional Introduction Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-2xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Professional Introduction
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am currently pursuing my Amity University Rajasthan. My passion lies at the intersection of web development, artificial intelligence, and algorithmic efficiency.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether it's building interactive React applications with TypeScript, implementing OpenCV computer vision for safety alarm systems, or designing AI chatbot logic, I thrive on turning abstract concepts into practical, user-centric software.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Strong Problem Solver
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Clean Code Advocate
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Continuous Learner
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  Team Collaborator
                </div>
              </div>
            </div>
          </motion.div>

          {/* Career Objective Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-2">
                <div className="p-2.5 rounded-2xl bg-white/20 text-white backdrop-blur-md">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Career Objective
                </h3>
              </div>

              <blockquote className="text-blue-100 text-sm sm:text-base leading-relaxed italic border-l-2 border-blue-400 pl-4 py-1">
                "{PERSONAL_INFO.careerObjective}"
              </blockquote>
            </div>

            <div className="pt-6 border-t border-white/20 relative z-10 flex items-center justify-between text-xs text-blue-200">
              <span className="flex items-center gap-1.5 font-semibold">
                <BookOpen className="w-4 h-4 text-blue-300" /> Academic Distinction
              </span>
              <span className="font-mono bg-white/20 px-2.5 py-1 rounded-full text-white font-bold">
                CSE 2025-2029
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
