import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Play, Code, Sparkles } from 'lucide-react';
import { Project } from '../../types/portfolio';
import { InteractiveChatbotDemo } from './InteractiveChatbotDemo';
import { InteractiveAlarmDemo } from './InteractiveAlarmDemo';
import { InteractiveStudentDemo } from './InteractiveStudentDemo';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'details' | 'demo'>('details');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10"
        >
          {/* Header Banner */}
          <div className="relative h-48 sm:h-60 overflow-hidden bg-slate-900 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-md transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/80 backdrop-blur-md text-blue-100 border border-blue-400/30">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold mt-1.5">{project.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300">{project.subtitle}</p>
            </div>
          </div>

          {/* Navigation Tabs if interactive demo is available */}
          {project.hasInteractiveDemo && (
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 px-6 pt-2">
              <button
                onClick={() => setActiveTab('details')}
                className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
                  activeTab === 'details'
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <Code className="w-4 h-4" /> Overview & Specs
              </button>
              <button
                onClick={() => setActiveTab('demo')}
                className={`pb-2.5 px-4 text-xs font-bold border-b-2 transition flex items-center gap-1.5 ${
                  activeTab === 'demo'
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-500" /> Interactive Live Demo Simulator
              </button>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-700 dark:text-slate-300 text-sm">
            {activeTab === 'details' || !project.hasInteractiveDemo ? (
              <>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                    Project Overview
                  </h4>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
                    Key Features & Functionality
                  </h4>
                  <div className="grid gap-2">
                    {project.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-medium text-slate-800 dark:text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 dark:border dark:border-blue-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-2">
                {project.id === 'ai-job-finder' && <InteractiveChatbotDemo />}
                {project.id === 'intrusion-alarm' && <InteractiveAlarmDemo />}
                {project.id === 'student-management' && <InteractiveStudentDemo />}
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex flex-wrap justify-between items-center gap-3">
            <div className="flex gap-2">
              {project.hasInteractiveDemo && (
                <button
                  onClick={() => setActiveTab(activeTab === 'details' ? 'demo' : 'details')}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5" /> {activeTab === 'details' ? 'Test Simulator' : 'View Specs'}
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition"
              >
                <Github className="w-4 h-4" /> GitHub Repository
              </a>
              <a
                href={project.liveDemoUrl}
                onClick={e => {
                  if (project.hasInteractiveDemo) {
                    e.preventDefault();
                    setActiveTab('demo');
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
