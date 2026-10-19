import React from 'react';
import portraitImg from '../assets/images/kenneth-portrait.png';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  customAvatar?: string;
  onUploadAvatar?: (dataUrl: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ customAvatar, onUploadAvatar }) => {
  const avatarSrc = customAvatar || portraitImg;

  return (
    <section className="relative w-full bg-[#030303] text-white overflow-hidden flex flex-col justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] lg:min-h-[740px] lg:max-h-[1000px] border-b border-white/[0.06] pb-10 sm:pb-12 lg:pb-0">
      
      {/* =========================================================================
          BACKGROUND ATMOSPHERE & AMBIENT LIGHTING
          ========================================================================= */}
      
      {/* 1. Subtle Left Dot Matrix Grid (matches reference texture on dark canvas) */}
      <div
        className="absolute left-0 top-1/6 w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] pointer-events-none select-none opacity-20 z-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.45) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 75%)',
        }}
      />

      {/* 2. Soft Ambient Lime / Olive Glow & Curved Studio Light Arc (Lower-Right) */}
      <div className="absolute -right-24 sm:-right-12 bottom-0 w-[500px] sm:w-[700px] lg:w-[850px] h-[450px] sm:h-[600px] lg:h-[700px] pointer-events-none select-none z-0 overflow-hidden">
        {/* Diffuse atmospheric glow */}
        <div className="absolute right-0 bottom-0 w-full h-full rounded-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(34,197,94,0.14)_0%,rgba(163,230,53,0.07)_35%,transparent_70%)] blur-3xl" />
        
        {/* Cinematic curved luminous arc sweeping behind subject */}
        <svg
          className="absolute right-0 bottom-0 w-full h-full opacity-65"
          viewBox="0 0 700 700"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 120 700 C 260 520 440 380 700 320"
            stroke="url(#cinematicGlowGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="blur-[0.5px]"
          />
          <path
            d="M 160 700 C 290 540 460 410 700 360"
            stroke="url(#cinematicGlowGradSoft)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="cinematicGlowGrad" x1="120" y1="700" x2="700" y2="320" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="35%" stopColor="#34D399" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#A3E635" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#FACC15" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EAB308" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cinematicGlowGradSoft" x1="160" y1="700" x2="700" y2="360" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
              <stop offset="50%" stopColor="#84CC16" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#A3E635" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          MAIN HERO COMPOSITION (Oversized Typography + Layered Portrait + Intro)
          ========================================================================= */}
      <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">

        {/* --- LAYER 1: OVERSIZED NAME & TITLE (z-10, sits BEHIND portrait) --- */}
        <div className="absolute inset-x-0 top-[6%] sm:top-[7%] lg:top-[9%] z-10 flex flex-col items-center pointer-events-none select-none px-2 sm:px-4">
          
          {/* Giant Oversized Name: "KENNETH" */}
          <h1
            className="w-full text-center text-white uppercase font-['Syne',sans-serif] font-bold tracking-[0.05em] sm:tracking-[0.07em] leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(2.6rem, 13.2vw, 12.5rem)',
              textShadow: '0 4px 30px rgba(0,0,0,0.5)',
            }}
          >
            KENNETH
          </h1>

          {/* Professional Title: "PRODUCT DESIGNER" flanking across the hero */}
          <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-3 sm:px-8 lg:px-14 mt-1 sm:mt-2 lg:mt-3">
            <span
              className="text-white/80 uppercase font-['Syne',sans-serif] font-medium tracking-[0.2em] sm:tracking-[0.28em] leading-none whitespace-nowrap"
              style={{ fontSize: 'clamp(0.8rem, 3vw, 2.6rem)' }}
            >
              PRODUCT
            </span>
            <span
              className="text-white/80 uppercase font-['Syne',sans-serif] font-medium tracking-[0.2em] sm:tracking-[0.28em] leading-none whitespace-nowrap"
              style={{ fontSize: 'clamp(0.8rem, 3vw, 2.6rem)' }}
            >
              DESIGNER
            </span>
          </div>

        </div>

        {/* --- LAYER 2: TRANSPARENT PORTRAIT (z-20, sits IN FRONT of typography) --- */}
        <div className="relative z-20 flex justify-center items-end w-full pointer-events-none mt-16 sm:mt-20 lg:mt-24">
          <div className="relative w-[300px] sm:w-[420px] md:w-[480px] lg:w-[580px] xl:w-[640px] max-w-full">
            
            {/* The transparent PNG portrait with smooth bottom gradient fade */}
            <img
              src={avatarSrc}
              alt="Kenneth - Product Designer"
              className="w-full h-auto max-h-[42vh] sm:max-h-[52vh] lg:max-h-none object-contain object-bottom select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 98%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 98%)',
              }}
              referrerPolicy="no-referrer"
            />

            {/* Seamless gradient overlay blending bottom of torso into canvas floor */}
            <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 lg:h-32 bg-gradient-to-t from-[#030303] via-[#030303]/70 to-transparent pointer-events-none" />

            {/* Change Avatar Button */}
            {onUploadAvatar && (
              <label
                className="absolute bottom-6 right-2 sm:right-6 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400 text-zinc-300 hover:text-white cursor-pointer transition-all opacity-85 sm:opacity-0 sm:group-hover:opacity-100 flex items-center gap-1.5 text-xs font-semibold z-30 shadow-lg pointer-events-auto"
                title="Change portrait photo"
              >
                <span>Change Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (event) => {
                        if (event.target?.result) {
                          onUploadAvatar(event.target.result as string);
                        }
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            )}
          </div>
        </div>

        {/* --- LAYER 3: LEFT-SIDE INTRODUCTION & CTA (Center-aligned on mobile and tablet, left-aligned on desktop) --- */}
        <div className="relative lg:absolute lg:left-6 xl:left-12 lg:top-[calc(33%+115px)] xl:top-[calc(31%+115px)] lg:bottom-auto z-30 flex flex-col items-center text-center lg:items-start lg:text-left max-w-[340px] sm:max-w-md lg:max-w-[340px] xl:max-w-[370px] mt-6 sm:mt-8 lg:mt-0 px-4 sm:px-0 mx-auto lg:mx-0 pointer-events-auto">
          
          {/* Availability Pill Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md mb-3 sm:mb-3.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.95)] animate-pulse shrink-0" />
            <span className="text-xs text-zinc-300 font-normal tracking-wide whitespace-nowrap">
              Open to Remote Opportunities
            </span>
          </div>

          {/* Introduction Text */}
          <p className="text-xs sm:text-sm lg:text-[14.5px] text-zinc-300 font-normal leading-relaxed mb-4 sm:mb-5 max-w-sm sm:max-w-md lg:max-w-none">
            Hey there! I’m Kenneth, a Product Designer creating intuitive digital experiences that connect user needs with business goals.
          </p>

          {/* Solid White Pill CTA Button */}
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Project%20Inquiry%20-%20Kenneth`}
            className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-zinc-200 text-black font-['Syne',sans-serif] font-bold text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-white/5 active:scale-95 inline-flex items-center justify-center cursor-pointer tracking-tight"
          >
            <span>Schedule a Call</span>
          </a>

        </div>

      </div>

    </section>
  );
};
