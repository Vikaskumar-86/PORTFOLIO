import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, RefreshCw, Briefcase, CheckCircle2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  jobs?: Array<{ title: string; company: string; location: string; matchScore: number; tags: string[] }>;
}

export const InteractiveChatbotDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hello! I am Vikas's AI Job Finder Assistant. What role or skill sets are you looking to explore today? Try typing 'Frontend Developer', 'Python ML', or 'Software Engineer'."
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = "";
      let foundJobs = undefined;

      const lower = userText.toLowerCase();
      if (lower.includes('python') || lower.includes('ml') || lower.includes('ai') || lower.includes('data')) {
        replyText = "Great interest in AI & Python! Based on current market trends and Vikas's experience, here are top matching opportunities:";
        foundJobs = [
          { title: 'AI Software Engineer Intern', company: 'NeuralTech Systems', location: 'Remote / India', matchScore: 96, tags: ['Python', 'OpenCV', 'PyTorch', 'REST API'] },
          { title: 'Junior Data Scientist & Automation', company: 'DataFlex Analytics', location: 'Hybrid', matchScore: 91, tags: ['Python', 'SQL', 'Pandas', 'Scikit-learn'] }
        ];
      } else if (lower.includes('frontend') || lower.includes('react') || lower.includes('web') || lower.includes('typescript')) {
        replyText = "Fantastic! Here are top React & TypeScript frontend developer roles matching your search:";
        foundJobs = [
          { title: 'Frontend Developer (React + TS)', company: 'CloudScale Interactive', location: 'Remote', matchScore: 98, tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Motion'] },
          { title: 'UI Engineer & Web Specialist', company: 'NextGen Solutions', location: 'Bangalore / Remote', matchScore: 93, tags: ['React', 'JavaScript', 'HTML5/CSS3', 'Figma'] }
        ];
      } else if (lower.includes('student') || lower.includes('intern') || lower.includes('c++')) {
        replyText = "Here are entry-level Software Development Engineer (SDE) Intern roles for Computer Science students:";
        foundJobs = [
          { title: 'SDE Intern (Computer Science)', company: 'Apex Global Software', location: 'India', matchScore: 95, tags: ['C++', 'Data Structures', 'SQL', 'Git'] },
          { title: 'Graduate Engineer Trainee', company: 'TechCore Labs', location: 'Onsite / Hybrid', matchScore: 89, tags: ['Problem Solving', 'Python', 'OOPs', 'DB'] }
        ];
      } else {
        replyText = `Searching jobs matching "${userText}"... Here are recommended tech opportunities that align with Computer Science Engineering profiles:`;
        foundJobs = [
          { title: 'Full Stack Web Engineer', company: 'Vanguard Software', location: 'Remote', matchScore: 94, tags: ['React', 'TypeScript', 'Express', 'SQL'] },
          { title: 'Software Developer - Entry Level', company: 'InnoTech Labs', location: 'India', matchScore: 88, tags: ['C++', 'Python', 'Problem Solving'] }
        ];
      }

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: replyText,
          jobs: foundJobs
        }
      ]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuickTag = (tagText: string) => {
    setInput(tagText);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col h-[480px]">
      {/* Simulator Header */}
      <div className="p-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
              AI Job Finder Chatbot <Sparkles className="w-3 h-3 text-amber-400" />
            </h4>
            <p className="text-[10px] text-slate-400">Live AI Assistant Simulator • Powered by Gemini NLP logic</p>
          </div>
        </div>

        <button
          onClick={() => setMessages([{ id: '1', sender: 'ai', text: "Chat reset. Ask me for job roles like 'Python ML', 'React Developer', or 'SDE Intern'!" }])}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          title="Reset conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-7 h-7 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/40 mt-1">
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}

            <div className={`max-w-[82%] space-y-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
              <div
                className={`p-3 rounded-2xl inline-block ${
                  msg.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-tl-none'
                }`}
              >
                {msg.text}
              </div>

              {/* Job Cards payload */}
              {msg.jobs && (
                <div className="grid gap-2 mt-2">
                  {msg.jobs.map((job, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-950/80 rounded-xl border border-blue-900/50 hover:border-blue-500/50 transition text-left space-y-1.5"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-bold text-blue-300 text-xs flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-blue-400" />
                            {job.title}
                          </h5>
                          <p className="text-[10px] text-slate-400">{job.company} • {job.location}</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {job.matchScore}% Match
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {job.tags.map(t => (
                          <span key={t} className="px-1.5 py-0.5 rounded bg-slate-800 text-[9px] text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {msg.sender === 'user' && (
              <div className="w-7 h-7 rounded-full bg-indigo-600/30 text-indigo-300 flex items-center justify-center shrink-0 border border-indigo-500/40 mt-1">
                <User className="w-3.5 h-3.5" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-400 text-[11px] italic">
            <Bot className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
            AI is analyzing matching jobs...
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompts */}
      <div className="px-3 py-1.5 bg-slate-950 border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[10px] no-scrollbar">
        <span className="text-slate-500 shrink-0 self-center">Try:</span>
        {['Frontend React', 'Python ML', 'C++ SDE Intern'].map(tag => (
          <button
            key={tag}
            onClick={() => handleQuickTag(tag)}
            className="px-2 py-1 rounded-md bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition shrink-0"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Input Bar */}
      <form onSubmit={handleSend} className="p-2 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type job role, technology, or skills..."
          className="flex-1 bg-slate-900 text-white placeholder-slate-500 text-xs px-3 py-2 rounded-xl border border-slate-800 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white transition shadow-md shadow-blue-600/30"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
