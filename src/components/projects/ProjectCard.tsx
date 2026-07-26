import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Play, Sparkles } from 'lucide-react';
import { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelectProject: (p: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelectProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-xl hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
    >
      <div className="space-y-4">
        {/* Thumbnail Preview Image Container */}
        <div className="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-slate-950">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Category Pill Tag */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-600/90 text-white backdrop-blur-md shadow-md">
            <Sparkles className="w-3 h-3 text-amber-300" />
            {project.category}
          </div>

          {/* Quick Interactive Overlay Button */}
          {project.hasInteractiveDemo && (
            <button
              onClick={() => onSelectProject(project)}
              className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-slate-950/80 hover:bg-blue-600 backdrop-blur-md border border-white/20 transition flex items-center gap-1.5 shadow-lg"
            >
              <Play className="w-3.5 h-3.5 fill-current text-amber-400" /> Interactive Demo
            </button>
          )}
        </div>

        {/* Title and Subtitle */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition flex items-center justify-center gap-1.5"
        >
          <Github className="w-4 h-4" /> Code Repository
        </a>

        <button
          onClick={() => onSelectProject(project)}
          className="flex-1 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </button>
      </div>
    </motion.div>
  );
};
