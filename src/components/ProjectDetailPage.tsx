import React, { useEffect, useState, useRef } from 'react';
import { Project, PORTFOLIO_DATA, OFFICIAL_PROJECT_IMAGES } from '../data/portfolioData';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, Upload, ExternalLink, Globe, Check, Loader2 } from 'lucide-react';
import { compressImageFile, normalizeProjectId } from '../utils/imageHelper';

interface ProjectDetailPageProps {
  project: Project;
  customImage?: string;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  onUpdateImage?: (projectId: string, dataUrl: string) => void;
  onOpenResume?: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  customImage,
  onBack,
  onSelectProject,
  onUpdateImage,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  const canonicalId = normalizeProjectId(project.id);
  const rawCustom = customImage;
  const customImgValid = rawCustom && !rawCustom.startsWith('/src/') ? rawCustom : undefined;
  const officialFallback = OFFICIAL_PROJECT_IMAGES[canonicalId] || OFFICIAL_PROJECT_IMAGES[project.id] || project.image;
  const currentImage = customImgValid || officialFallback;

  // Find index of current project to allow Next / Previous navigation
  const currentIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.id === project.id);
  const nextProject =
    currentIndex >= 0 && currentIndex < PORTFOLIO_DATA.projects.length - 1
      ? PORTFOLIO_DATA.projects[currentIndex + 1]
      : PORTFOLIO_DATA.projects[0];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateImage) {
      setIsProcessing(true);
      const reader = new FileReader();
      reader.onload = (event) => {
        setIsProcessing(false);
        if (event.target?.result) {
          onUpdateImage(project.id, event.target.result as string);
        }
      };
      reader.onerror = () => setIsProcessing(false);
      reader.readAsDataURL(file);
    }
  };

  const handleCopyLink = () => {
    if (project.liveUrl) {
      navigator.clipboard.writeText(project.liveUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const getStatusBadge = () => {
    switch (project.liveStatus) {
      case 'store':
        return {
          label: 'Live on Google Play',
          dotColor: 'bg-emerald-400',
          textColor: 'text-emerald-300',
        };
      case 'live':
        return {
          label: 'Live in Production',
          dotColor: 'bg-emerald-400',
          textColor: 'text-emerald-300',
        };
      default:
        return {
          label: 'Live Platform / Preview',
          dotColor: 'bg-amber-400',
          textColor: 'text-amber-300',
        };
    }
  };

  const statusInfo = getStatusBadge();

  return (
    <div className="min-h-screen bg-[#030303] text-white font-['Syne',sans-serif] selection:bg-emerald-500/25 selection:text-emerald-300">
      
      {/* Top Sticky Navigation Bar */}
      <header className="sticky top-0 z-30 bg-[#030303]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Back button */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors py-2 px-3 -ml-3 rounded-lg hover:bg-white/[0.04] group cursor-pointer font-['Syne',sans-serif]"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Works</span>
          </button>

          {/* Right Header Action Group: Live Link + Inquire */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Live Project Button in Top Bar */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-bold text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-emerald-400/60 rounded-full transition-all flex items-center gap-1.5 shadow-sm active:scale-95 font-['Syne',sans-serif]"
                title={`Open ${project.title} live link`}
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Visit Live</span>
                <span className="sm:hidden">Live</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>
            )}

            {/* Contact / Inquire Action */}
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Inquiry%20regarding%20${encodeURIComponent(project.title)}`}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-full transition-all flex items-center gap-1.5 shadow-sm shadow-emerald-500/20 active:scale-95 font-['Syne',sans-serif]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </header>

      {/* Main Full Page Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Top Header Section with Wider & Bigger Screen on the Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-18">
          
          {/* Left Column: Title, Subtitle, and Clean Metadata Text */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Category and Year */}
            <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-semibold">
              <span className="text-emerald-400 font-['Syne',sans-serif]">{project.category}</span>
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400 font-mono">{project.year}</span>
            </div>

            {/* Project Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight mb-3 font-['Syne',sans-serif]">
              {project.title}
            </h1>

            {/* Subtitle description */}
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal mb-6 max-w-lg font-['Syne',sans-serif]">
              {project.subtitle}
            </p>

            {/* Role, Client, Timeline, and Live Link Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-1 max-w-xl border-t border-white/10 pt-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block leading-tight mb-1">Role</span>
                <span className="text-xs sm:text-sm font-bold text-white block font-['Syne',sans-serif]">{project.role}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block leading-tight mb-1">Client</span>
                <span className="text-xs sm:text-sm font-bold text-white block font-['Syne',sans-serif]">{project.client}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block leading-tight mb-1">Timeline</span>
                <span className="text-xs sm:text-sm font-bold text-white block font-['Syne',sans-serif]">{project.year}</span>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block leading-tight mb-1">Status</span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusInfo.dotColor} animate-pulse`} />
                  <span className={`text-xs font-bold ${statusInfo.textColor} truncate font-['Syne',sans-serif]`}>
                    {project.liveStatus === 'store' ? 'Play Store' : project.liveStatus === 'live' ? 'Live' : 'Preview'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Wider & Bigger Screen */}
          <div className="lg:col-span-7 w-full">
            <div className="relative group w-full aspect-[16/10] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0C10] shadow-2xl shadow-black/90">
              <img
                src={currentImage}
                alt={`${project.title} project showcase`}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
              
              {/* Change Picture button - clearly visible and reliable on desktop and mobile */}
              {onUpdateImage && (
                <>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isProcessing}
                    className={`absolute top-3 right-3 px-3.5 py-2 rounded-full bg-black/85 hover:bg-black backdrop-blur-md border border-emerald-500/40 hover:border-emerald-400 text-zinc-100 hover:text-white cursor-pointer transition-all opacity-95 hover:opacity-100 flex items-center gap-1.5 text-xs font-semibold z-20 shadow-xl font-['Syne',sans-serif] active:scale-95 group/btn ${
                      isProcessing ? 'opacity-70 pointer-events-none' : ''
                    }`}
                    title="Change picture for this project"
                  >
                    {isProcessing ? (
                      <Loader2 className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
                    ) : (
                      <Upload className="w-3.5 h-3.5 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                    )}
                    <span>{isProcessing ? 'Saving to Codebase...' : 'Change Picture'}</span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    disabled={isProcessing}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </>
              )}
            </div>
          </div>

        </div>

        {/* Narrative & Details Section */}
        <div className="mb-16 pt-8 border-t border-white/[0.08] space-y-12 w-full">
          
          {/* Project Overview */}
          <div className="w-full">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 font-['Syne',sans-serif]">
              PROJECT OVERVIEW
            </h2>
            <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal w-full font-['Syne',sans-serif]">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="w-full">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2 font-['Syne',sans-serif]">
              CHALLENGE &amp; SOLUTION
            </h2>
            <div className="space-y-3 w-full font-['Syne',sans-serif]">
              <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal w-full">
                <strong className="text-white font-bold font-['Syne',sans-serif]">The Challenge: </strong>
                {project.challenge}
              </p>
              <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal w-full">
                <strong className="text-white font-bold font-['Syne',sans-serif]">The Solution: </strong>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Deliverables (Key Variables) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-3 font-['Syne',sans-serif]">
              KEY DELIVERABLES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 text-sm text-slate-300 font-normal font-['Syne',sans-serif]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated Live Project Link Card */}
          {project.liveUrl && (
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-emerald-950/30 via-zinc-900/60 to-black border border-emerald-500/30 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] animate-pulse" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      {statusInfo.label}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    Experience {project.title} Live
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 font-mono break-all opacity-80">
                    {project.liveUrl}
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    onClick={handleCopyLink}
                    className="px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                    title="Copy Project Link"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <span>Copy Link</span>
                    )}
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 cursor-pointer"
                  >
                    <span>{project.liveLabel || 'Visit Live Project'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Target User Personas (User Personnel) */}
          {project.personas && project.personas.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4 font-['Syne',sans-serif]">
                TARGET USER PERSONAS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {project.personas.map((persona, idx) => (
                  <div key={idx} className="space-y-1.5 border-l-2 border-emerald-400/30 pl-4 py-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-base sm:text-lg font-bold text-white font-['Syne',sans-serif]">
                        {persona.name}
                      </span>
                      <span className="text-xs text-zinc-500 font-mono">·</span>
                      <span className="text-xs text-emerald-400 font-semibold font-['Syne',sans-serif]">
                        {persona.role}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed font-['Syne',sans-serif]">
                      <strong className="text-zinc-200 font-semibold font-['Syne',sans-serif]">Goal: </strong>
                      {persona.goal}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed font-['Syne',sans-serif]">
                      <strong className="text-zinc-300 font-semibold font-['Syne',sans-serif]">Pain Point: </strong>
                      {persona.painPoint}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags & Disciplines */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400 mb-3 font-['Syne',sans-serif]">
              TAGS &amp; DISCIPLINES
            </h2>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300 font-['Syne',sans-serif]">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-slate-300">
                  {tag}{idx < project.tags.length - 1 ? ' · ' : ''}
                </span>
              ))}
            </div>
          </div>

          {/* 'Have a similar project?' callout */}
          <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950/20 border border-emerald-500/25 max-w-xl">
            <h4 className="text-base font-bold text-white mb-1.5 font-['Syne',sans-serif]">Have a similar project?</h4>
            <p className="text-xs sm:text-sm text-slate-300 font-normal mb-4 leading-relaxed font-['Syne',sans-serif]">
              Let's discuss how we can build an impactful digital experience for your users.
            </p>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Project%20Inquiry%20from%20Portfolio`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors font-['Syne',sans-serif]"
            >
              <Mail className="w-4 h-4" />
              <span>Email Kenneth</span>
            </a>
          </div>

        </div>

        {/* Bottom Navigation: Next Project & Back to Works */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors cursor-pointer font-['Syne',sans-serif]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors group cursor-pointer font-['Syne',sans-serif]"
          >
            <span>Next Project: {nextProject.title}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </main>

      {/* Footer on Project Detail Page */}
      <footer className="border-t border-white/[0.08] py-8 text-xs text-zinc-500 bg-[#030303] font-['Syne',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 sm:gap-6">
            
            {/* Brand Mark & Copyright - Aligned cleanly on mobile, tablet, and desktop */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-left">
              <span className="text-zinc-200 font-bold font-['Syne',sans-serif] tracking-tight">
                Kenneth Uyiosa
              </span>
              <span className="text-zinc-700">·</span>
              <span className="text-zinc-400">Product Designer</span>
              <span className="text-zinc-700">·</span>
              <span className="text-zinc-500 font-mono">© {new Date().getFullYear()} All Rights Reserved</span>
            </div>

            {/* Clean Links - Aligned with neat horizontal rhythm */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-zinc-400 font-semibold font-['Syne',sans-serif] text-left">
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
    </div>
  );
};
