import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../../types/portfolio';
import { Code, Code2, Terminal, FileCode, Braces, Atom, Layout, Palette, Layers, Database, GitBranch } from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Code,
  Code2,
  Terminal,
  FileCode,
  Braces,
  Atom,
  Layout,
  Palette,
  Layers,
  Database,
  GitBranch
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const IconComponent = ICON_MAP[skill.iconName] || Code;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-3 group"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: skill.color }}
          >
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {skill.name}
            </h4>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
              {skill.category}
            </span>
          </div>
        </div>

        <span className="text-xs font-mono font-extrabold text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/50">
          {skill.level}%
        </span>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
        {skill.description}
      </p>

      {/* Animated Skill Progress Bar */}
      <div className="pt-1">
        <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-500 dark:to-cyan-400 shadow-[0_0_8px_rgba(37,99,235,0.6)]"
          />
        </div>
      </div>
    </motion.div>
  );
};
