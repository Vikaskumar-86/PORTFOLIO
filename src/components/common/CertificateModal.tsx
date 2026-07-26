import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { Certificate } from '../../types/portfolio';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

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
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Certificate Credentials
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Graphic Card Preview */}
          <div className="p-6 space-y-6 text-slate-700 dark:text-slate-300">
            <div className="relative rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-900/50 bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950 p-8 text-center space-y-4 shadow-inner">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/30 shadow-md">
                <Award className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  {certificate.issuer}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">
                  {certificate.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Issued to <strong className="text-slate-800 dark:text-slate-200">Vikas Kumar</strong> • {certificate.date}
                </p>
              </div>

              <div className="pt-2 flex justify-center items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                <span>Credential ID:</span>
                <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold">
                  {certificate.credentialId}
                </span>
              </div>
            </div>

            {/* Skills validated */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5">
                Validated Competencies & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map(sk => (
                  <span
                    key={sk}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border dark:border-emerald-800/50 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/90 flex justify-end items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 transition"
            >
              Close
            </button>
            <a
              href={certificate.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition"
            >
              <ExternalLink className="w-4 h-4" /> Verify Official Credential
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
