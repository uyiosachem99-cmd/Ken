import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Send, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [projectType, setProjectType] = useState('New Product Design');
  const [budget, setBudget] = useState('$1,000 — $3,000');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Inquiry] ${projectType} - ${clientName || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hi Uyiosa,\n\nI came across your portfolio and would like to discuss a potential project.\n\nProject Type: ${projectType}\nEstimated Budget: ${budget}\nMy Email: ${clientEmail}\n\nProject Overview:\n${message}\n\nBest regards,\n${clientName}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Contact Copy & Direct Actions (5 cols) */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
            <span>Start a Project</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-400 font-normal">Direct Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display mb-4 text-balance">
            Let's build something exceptional together.
          </h2>

          <p className="text-base text-slate-300 leading-relaxed mb-8">
            Whether you have an early-stage concept that requires architectural UI/UX discovery or an existing flagship platform ready for a complete redesign, I am open to discussing high-impact opportunities.
          </p>

          {/* Quick Email Card */}
          <div className="p-5 rounded-2xl bg-[#10131B] border border-white/[0.08] mb-6">
            <span className="text-xs text-slate-400 mb-1 block">Direct Email Address:</span>
            <div className="flex items-center justify-between gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="text-base font-bold text-white hover:text-emerald-400 transition-colors font-mono truncate"
              >
                {PORTFOLIO_DATA.profile.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-medium flex items-center gap-1.5 shrink-0"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Availability note */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
            <span>{PORTFOLIO_DATA.profile.availability}</span>
          </div>

          {/* Social Profiles (Clean Behance, Dribbble, LinkedIn) */}
          <div className="space-y-2 text-xs text-slate-400">
            <span className="text-slate-500 font-medium block mb-2">Connected Platforms:</span>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={PORTFOLIO_DATA.profile.behanceLink}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>Behance Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.dribbbleLink}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>Dribbble Shots</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedinLink}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-emerald-500/40 text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Project Inquiry Interactive Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#10131B] border border-white/[0.08] rounded-2xl p-7 sm:p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white font-display mb-2">
            Project Inquiry Form
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Fill in your project parameters below to initiate an inquiry or schedule an introductory design review.
          </p>

          {submitted ? (
            <div className="p-8 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white font-display">Inquiry Prepared!</h4>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                Your email client has been opened with your inquiry formatted directly for <span className="text-emerald-400 font-mono">{PORTFOLIO_DATA.profile.email}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs text-slate-400 hover:text-white underline"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Project Type Picker */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  What kind of project are you planning?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['New Product Design', 'Enterprise SaaS UI', 'Design System Architecture', 'Mobile iOS/Android App', 'Design Audit & Redesign', 'Fractional Lead'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`p-2.5 text-xs rounded-lg border text-left transition-all ${
                        projectType === type
                          ? 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300 font-medium'
                          : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Updated Budget Range ($500-$1000, $1000-$3000, $3000-$5000) */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">
                  Estimated Investment Range (USD)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['$500 — $1,000', '$1,000 — $3,000', '$3,000 — $5,000'].map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`p-2.5 text-xs rounded-lg border text-center font-mono transition-all ${
                        budget === tier
                          ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-semibold'
                          : 'bg-white/[0.02] border-white/[0.06] text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name / Organization
                  </label>
                  <input
                    type="text"
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins (Acme AI)"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Project Brief & High-Level Requirements
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of your product, target audience, timeline, or requirements..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-600 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-500/20"
              >
                <span>Send Project Inquiry</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          )}

        </div>

      </div>
    </section>
  );
};
