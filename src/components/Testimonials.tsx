import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      {/* Header */}
      <div className="max-w-xl mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wider uppercase mb-3">
          <span>Client & Leadership Endorsements</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-400 font-normal">Direct Feedback</span>
        </div>

        <h2 className="text-3xl font-extrabold text-white tracking-tight font-display text-balance">
          Trusted by founders, product heads, and engineering directors.
        </h2>
      </div>

      {/* Testimonials 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.testimonials.map((t, idx) => (
          <div
            key={idx}
            className="p-7 rounded-2xl bg-[#10131B] border border-white/[0.08] flex flex-col justify-between"
          >
            <div>
              <Quote className="w-6 h-6 text-emerald-400/50 mb-4" />
              <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-300 font-bold text-xs flex items-center justify-center font-mono">
                {t.avatar}
              </div>
              <div>
                <div className="text-sm font-bold text-white font-display">
                  {t.name}
                </div>
                <div className="text-xs text-slate-400">
                  {t.role}, <span className="text-slate-300">{t.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
