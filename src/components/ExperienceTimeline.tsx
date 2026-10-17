import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Briefcase, GraduationCap, Download, Check, Copy, Award } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyResumeText = () => {
    const text = `
UYIOSA CHEM — SENIOR PRODUCT DESIGNER & UI/UX ARCHITECT
Email: ${PORTFOLIO_DATA.profile.email}
Location: ${PORTFOLIO_DATA.profile.location}

SUMMARY:
${PORTFOLIO_DATA.profile.bio}

EXPERIENCE:
${PORTFOLIO_DATA.experience.map(e => `
* ${e.role} — ${e.company} (${e.period})
  ${e.description}
  Key Achievements:
  ${e.achievements.map(a => `  - ${a}`).join('\n')}
  Skills: ${e.skills.join(', ')}
`).join('\n')}

EDUCATION:
${PORTFOLIO_DATA.education.map(ed => `* ${ed.degree} — ${ed.institution} (${ed.year}) [${ed.honors}]`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section id="experience" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            <span>Career History & Resume</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">2019 — 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display text-balance">
            Professional Experience & Proven Track Record
          </h2>
          <p className="text-base text-slate-400 mt-2 max-w-2xl">
            A chronological progression of product design leadership, enterprise system design, and high-growth venture launches.
          </p>
        </div>

        {/* Resume Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyResumeText}
            className="px-4 py-2 text-xs font-medium rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.08] hover:text-white transition-all flex items-center gap-2"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Resume Copied!' : 'Copy Plaintext Resume'}</span>
          </button>

          <button
            onClick={handlePrintResume}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all flex items-center gap-2 shadow-sm shadow-emerald-500/20"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Print / PDF Resume</span>
          </button>
        </div>
      </div>

      {/* Grid: 2 Columns (Left: Experience Timeline, Right: Skills & Education) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        
        {/* Left Column: Work History (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2.5 pb-2 text-sm font-semibold text-white">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Work Experience</span>
          </div>

          <div className="space-y-6">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-[#10131B] border border-white/[0.08] hover:border-emerald-500/20 transition-all"
              >
                {/* Meta Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="text-xs text-emerald-400 font-medium">
                      {exp.company} <span className="text-slate-500">·</span> {exp.location}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    {exp.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Achievements Bulleted */}
                <div className="space-y-2 mb-5">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Unboxed Skills Line */}
                <div className="pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-500 font-medium">Key Focus:</span>
                  {exp.skills.map((skill, si) => (
                    <React.Fragment key={skill}>
                      <span className="text-slate-300">{skill}</span>
                      {si < exp.skills.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Skills Matrix & Education (5 cols) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* Skills Matrix */}
          <div>
            <div className="flex items-center gap-2.5 pb-2 text-sm font-semibold text-white mb-4">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Core Skills & Tooling</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#10131B] border border-white/[0.08] space-y-6">
              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Product & UX Design
                </h4>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-200">
                  {PORTFOLIO_DATA.skillsMatrix.productDesign.map((s, i) => (
                    <React.Fragment key={s}>
                      <span>{s}</span>
                      {i < PORTFOLIO_DATA.skillsMatrix.productDesign.length - 1 && (
                        <span className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Research & Strategy
                </h4>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-200">
                  {PORTFOLIO_DATA.skillsMatrix.research.map((s, i) => (
                    <React.Fragment key={s}>
                      <span>{s}</span>
                      {i < PORTFOLIO_DATA.skillsMatrix.research.length - 1 && (
                        <span className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Software & Tools
                </h4>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-200">
                  {PORTFOLIO_DATA.skillsMatrix.tools.map((s, i) => (
                    <React.Fragment key={s}>
                      <span>{s}</span>
                      {i < PORTFOLIO_DATA.skillsMatrix.tools.length - 1 && (
                        <span className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Industry Verticals
                </h4>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-slate-200">
                  {PORTFOLIO_DATA.skillsMatrix.domains.map((s, i) => (
                    <React.Fragment key={s}>
                      <span>{s}</span>
                      {i < PORTFOLIO_DATA.skillsMatrix.domains.length - 1 && (
                        <span className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2.5 pb-2 text-sm font-semibold text-white mb-4">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>Education & Certifications</span>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#10131B] border border-white/[0.08]"
                >
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-mono mb-1">
                    <span>{edu.year}</span>
                    <span className="text-slate-400">{edu.honors}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
