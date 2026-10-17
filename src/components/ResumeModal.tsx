import React, { useEffect } from 'react';
import { RESUME_DATA } from '../data/portfolioData';
import { X, Printer, Mail, Phone, MapPin, ExternalLink, Linkedin, Check } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(RESUME_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn font-['Syne',sans-serif]">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#090B0E] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-6 z-10 flex flex-col max-h-[92vh]">
        
        {/* Top Control Header */}
        <div className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-white/10 bg-[#0c0f14] shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span className="text-sm font-bold text-white tracking-wide">
              Kenneth Uyiosa Eguakun — Résumé
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Copy Email"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Copy Email</span>
                </>
              )}
            </button>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer ml-1"
              aria-label="Close Résumé Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="overflow-y-auto px-5 sm:px-10 lg:px-14 py-8 sm:py-10 text-zinc-300 space-y-8 bg-[#090B0E]">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
              {RESUME_DATA.fullName}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-emerald-400 tracking-wide mb-4">
              {RESUME_DATA.titles.join('  /  ')}
            </p>

            {/* Contact Information Bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-[13px] text-zinc-400">
              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{RESUME_DATA.email}</span>
              </a>

              <a
                href={`tel:${RESUME_DATA.phone}`}
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{RESUME_DATA.phone}</span>
              </a>

              <div className="flex items-center gap-1.5 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{RESUME_DATA.location}</span>
              </div>

              <a
                href={RESUME_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Section: Personal Profile */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3">
              PERSONAL PROFILE
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {RESUME_DATA.personalProfile}
            </p>
          </div>

          {/* Section: Employment Experience */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-5">
              EMPLOYMENT EXPERIENCE
            </h2>

            <div className="space-y-6 sm:space-y-7">
              {RESUME_DATA.employment.map((item, idx) => (
                <div key={idx} className="border-l-2 border-emerald-400/30 pl-4 py-0.5 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white">
                        {item.role}
                      </h3>
                      <span className="text-zinc-600">|</span>
                      <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                        {item.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-400 font-mono">
                      <span>{item.period}</span>
                      <span className="text-zinc-600">·</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1 text-xs sm:text-[13px] text-zinc-300 font-normal leading-relaxed">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Core Skills */}
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-4">
              CORE SKILLS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
                  Design Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_DATA.coreSkills.design.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] text-zinc-300 font-normal"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
                  Tools &amp; Platform
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_DATA.coreSkills.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] text-zinc-300 font-normal"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wider">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {RESUME_DATA.coreSkills.soft.map((soft, sfIdx) => (
                    <span
                      key={sfIdx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-[11px] text-zinc-300 font-normal"
                    >
                      {soft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3">
                EDUCATION
              </h2>
              {RESUME_DATA.education.map((edu, eIdx) => (
                <div key={eIdx} className="space-y-1">
                  <div className="text-sm font-bold text-white">{edu.school}</div>
                  <div className="text-xs text-emerald-400 font-semibold">{edu.degree}</div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    {edu.period} · {edu.location}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3">
                CERTIFICATIONS
              </h2>
              <div className="space-y-2">
                {RESUME_DATA.certifications.map((cert, cIdx) => (
                  <div key={cIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Live Products & Links */}
          <div className="border-t border-white/10 pt-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3">
              LIVE PRODUCTS &amp; LINKS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.liveProducts.map((prod, pIdx) => (
                <a
                  key={pIdx}
                  href={prod.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-emerald-400/40 transition-all flex items-center justify-between group"
                >
                  <div>
                    <span className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors block">
                      {prod.name}
                    </span>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {prod.type}
                    </span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
