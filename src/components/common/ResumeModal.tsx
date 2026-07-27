import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, Printer, Check, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, PROJECTS_DATA, EDUCATION_DATA } from '../../utils/constants';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = React.useState(false);

  const handleDownload = () => {
    // Generate text/markdown formatted resume file download
    const resumeText = `
====================================================================
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}
====================================================================

CAREER OBJECTIVE:
${PERSONAL_INFO.careerObjective}

EDUCATION:
${EDUCATION_DATA.map(e => `- ${e.degree} | ${e.institution} (${e.period}) - Grade: ${e.grade}`).join('\n')}

TECHNICAL SKILLS:
- Languages: C, C++, Python, TypeScript, JavaScript
- Frontend & UI: React, HTML5, CSS3, Tailwind CSS
- Databases & Backend: SQL, PostgreSQL, REST APIs
- Tools & VCS: Git, GitHub, VS Code, Linux

FEATURED PROJECTS:
${PROJECTS_DATA.map(p => `* ${p.title} (${p.technologies.join(', ')})\n  ${p.description}`).join('\n\n')}

ACADEMIC HIGHLIGHTS & CERTIFICATIONS:
- Python for Data Science & AI (IBM)
- Full Stack Web Development with React (Meta)
- Problem Solving (Intermediate) (HackerRank)
- AI Foundations Associate (Oracle)

====================================================================
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  {PERSONAL_INFO.name}'s Resume
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  Computer Science Engineering Student • Academic Resume
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
                >
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition"
                >
                  {downloaded ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Downloaded
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" /> Download Resume
                    </>
                  )}
                </button>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 transition"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-800 dark:text-slate-200 text-sm leading-relaxed print:p-0">
              {/* Top Resume Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {PERSONAL_INFO.location} • {PERSONAL_INFO.email} • {PERSONAL_INFO.phone}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    LinkedIn <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Career Objective */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Career Objective
                </h4>
                <p className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/60 dark:border-slate-700/60 text-slate-700 dark:text-slate-300">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Education
                </h4>
                <div className="space-y-3">
                  {EDUCATION_DATA.map(edu => (
                    <div key={edu.id} className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800">
                      <div className="flex justify-between items-start flex-wrap gap-1">
                        <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-400">{edu.period}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-500 dark:text-slate-400 mt-1">
                        <span>{edu.institution}</span>
                        <span className="font-semibold text-emerald-600 dark:text-emerald-400">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                  <Code className="w-4 h-4" /> Technical Skills
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SKILLS_DATA.map(skill => (
                    <div key={skill.name} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-800/40 text-xs">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400 font-mono">{skill.level}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Projects */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3 flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Featured Projects
                </h4>
                <div className="space-y-3">
                  {PROJECTS_DATA.map(project => (
                    <div key={project.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800">
                      <div className="flex justify-between items-center">
                        <h5 className="font-bold text-slate-900 dark:text-white">{project.title}</h5>
                        <span className="text-xs font-mono text-blue-600 dark:text-blue-400">{project.category}</span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.map(tech => (
                          <span key={tech} className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-[10px] text-blue-700 dark:text-blue-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex justify-between items-center text-xs text-slate-500">
              <span>Verified Portfolio Resume • Vikas Kumar</span>
              <button
                onClick={handleDownload}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Download Copy (.txt)
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
