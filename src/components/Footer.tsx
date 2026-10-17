import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] py-8 sm:py-10 text-xs text-zinc-500 bg-[#030303] font-['Syne',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-5 sm:gap-6 text-center lg:text-left">
          
          {/* Brand Mark & Copyright - Center aligned on mobile & tablet, left aligned on desktop */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-center lg:text-left">
            <span className="text-zinc-200 font-bold font-['Syne',sans-serif] tracking-tight">
              Kenneth Uyiosa
            </span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-400">Product Designer</span>
            <span className="text-zinc-700">·</span>
            <span className="text-zinc-500 font-mono">© {currentYear} All Rights Reserved</span>
          </div>

          {/* Clean Links - Center aligned on mobile & tablet, right aligned on desktop */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-5 gap-y-2 text-zinc-400 font-semibold font-['Syne',sans-serif] text-center lg:text-left">
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="text-emerald-400 hover:text-emerald-300 font-mono transition-colors"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>
            <span className="text-zinc-700 hidden sm:inline">·</span>
            <a
              href={PORTFOLIO_DATA.profile.behanceLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Behance
            </a>
            <a
              href={PORTFOLIO_DATA.profile.dribbbleLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              Dribbble
            </a>
            <a
              href={PORTFOLIO_DATA.profile.linkedinLink}
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
