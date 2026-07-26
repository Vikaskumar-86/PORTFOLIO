import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2, ArrowUp, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Vikas<span className="text-blue-500">.dev</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Computer Science Engineering student crafting performant web experiences, intelligent AI tools, and clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-blue-400 transition">About Me</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition">Featured Projects</a>
              </li>
              <li>
                <a href="#certificates" className="hover:text-blue-400 transition">Certifications</a>
              </li>
              <li>
                <a href="#education" className="hover:text-blue-400 transition">Academic Timeline</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400 transition truncate">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Connect & Social
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Feel free to connect on GitHub or LinkedIn for project collaborations!
            </p>
            <div className="flex gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 transition border border-slate-800"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 transition border border-slate-800"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-blue-600 transition border border-slate-800"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="flex items-center gap-1.5 text-slate-500">
            © {new Date().getFullYear()} Vikas Kumar. Built with React, TypeScript & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-blue-400 transition"
          >
            Back to Top <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
