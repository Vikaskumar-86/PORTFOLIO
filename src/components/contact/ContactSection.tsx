import emailjs from "@emailjs/browser";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from '../common/SectionHeading';
import { PERSONAL_INFO } from '../../utils/constants';
import { Mail, Phone, MapPin, Github, Linkedin, Send, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    emailjs
  .send(
    "service_ji9vmmc",
    "template_8bgrq0c",
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || "Portfolio Contact",
      message: formData.message,
    },
    "dq6KyjbiNSDTVjE5J"
  )
  .then(() => {
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  })
  .catch((error) => {
  console.error("EmailJS Error:", error);
  alert(JSON.stringify(error));
;
  })
  .finally(() => {
    setIsSubmitting(false);
  });

return;

    // Simulate EmailJS transmission with real fallbacks & instant confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1200);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Let's Connect"
          title="Contact Me"
          subtitle="Have a project in mind, an opportunity, or just want to connect? Send a message below or reach out via email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                Get In Touch <Sparkles className="w-5 h-5 text-amber-400" />
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                I am actively seeking software engineering internships, graduate developer roles, and open-source project collaborations.
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-2">
              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-blue-400 transition truncate block">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition"
                  title="Copy email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700 transition"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Box */}
              <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Connect Links */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <span className="text-xs font-semibold text-slate-400 block">Social Profiles:</span>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-slate-800 hover:bg-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition shadow-md"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-2xl bg-slate-800 hover:bg-blue-600 text-white font-semibold text-xs flex items-center justify-center gap-2 border border-slate-700 transition shadow-md"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6"
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Send a Direct Message
              </h3>
            </div>

            {submitSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Thank you! Your message has been sent successfully. Vikas will get back to you soon.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700/70 text-xs focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Vikas@example.com"
                    className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700/70 text-xs focus:outline-none focus:border-blue-500 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Inquiry / Job Opportunity / Hello"
                  className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700/70 text-xs focus:outline-none focus:border-blue-500 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700/70 text-xs focus:outline-none focus:border-blue-500 shadow-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-2xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
