import React, { useState, useRef, useEffect } from 'react';
import { Project, PORTFOLIO_DATA, OFFICIAL_PROJECT_IMAGES, tizelaImg } from '../data/portfolioData';
import { ArrowUpRight, Pause, Play, ExternalLink } from 'lucide-react';
import { normalizeProjectId } from '../utils/imageHelper';

interface ProjectGridProps {
  customImages?: Record<string, string>;
  onSelectProject: (project: Project) => void;
  onUpdateImage?: (key: string, dataUrl: string) => void;
  onOpenResume?: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  customImages,
  onSelectProject,
  onOpenResume,
}) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(true); // user-controlled scroll/play
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const listContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Projects worked on by Kenneth, with Tizela as the first project
  const projectItems = [
    {
      id: 'tizela',
      title: 'Tizela',
      tag: 'SHIPPED',
      year: '2024',
      shortDesc: 'Book accommodations, rent vehicles & embark on boat cruises',
    },
    {
      id: 'circle',
      title: 'Circle',
      tag: 'COMMISSIONED',
      year: '2024',
      shortDesc: 'Form groups with daily, weekly, or monthly contribution cycles',
    },
    {
      id: 'examcrush',
      title: 'Exam Crush',
      tag: 'IN DEVELOPMENT',
      year: '2025',
      shortDesc: 'AI mobile app converting course materials into games & quizzes',
    },
    {
      id: 'helizah',
      title: 'Helizah',
      tag: 'IN DEVELOPMENT',
      year: '2026',
      shortDesc: "Women's fashion e-commerce & admin logistics dashboard",
    },
    {
      id: 'digiverse',
      title: 'DigiVerse',
      tag: 'COMMISSIONED',
      year: '2026',
      shortDesc: 'Comprehensive agency platform of 5 interconnected websites',
    },
    {
      id: 'beatstream',
      title: 'BeatStream',
      tag: 'IN DEVELOPMENT',
      year: '2024',
      shortDesc: 'Music streaming, live concerts & artist performance hub',
    },
    {
      id: 'primedial',
      title: 'Primedial',
      tag: 'SHIPPED',
      year: '2025',
      shortDesc: 'Innovative surveying, mapping & geospatial services platform',
    },
    {
      id: 'globatrybe',
      title: 'Globatrybe',
      tag: 'COMMISSIONED',
      year: '2025',
      shortDesc: 'Software solutions for banking, fintech & financial markets',
    },
  ];

  // Active project data and image resolution
  const activeItem = projectItems[activeProjectIndex] || projectItems[0];
  const activeFullProject =
    PORTFOLIO_DATA.projects.find((p) => p.id === activeItem.id) || PORTFOLIO_DATA.projects[0];

  const canonicalId = normalizeProjectId(activeItem.id);
  const rawCustom = customImages?.[activeItem.id] || customImages?.[canonicalId];
  const customImgValid = rawCustom && !rawCustom.startsWith('/src/') ? rawCustom : undefined;

  const officialFallback =
    OFFICIAL_PROJECT_IMAGES[canonicalId] ||
    OFFICIAL_PROJECT_IMAGES[activeItem.id] ||
    activeFullProject?.image ||
    tizelaImg;

  const currentDisplayImage = customImgValid || officialFallback;

  // Smooth crossfade trigger when project index changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 220);
    return () => clearTimeout(timer);
  }, [activeProjectIndex]);

  // Optional auto-rotation if user clicks play button
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % projectItems.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, projectItems.length]);

  // Scroll detection within the project list container
  const handleListScroll = () => {
    if (!listContainerRef.current) return;
    const container = listContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const targetY = containerRect.top + containerRect.height * 0.35;

    let closestIndex = activeProjectIndex;
    let minDistance = Infinity;

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const distance = Math.abs(itemCenter - targetY);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeProjectIndex) {
      setActiveProjectIndex(closestIndex);
    }
  };

  // Window scroll detection for mobile/tablet screens so picture changes as user scrolls down
  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.innerWidth >= 1024) return; // on desktop, the scrollable list container handles it

      const viewportCenter = window.innerHeight * 0.45;
      let closestIndex = activeProjectIndex;
      let minDistance = Infinity;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const itemCenter = rect.top + rect.height / 2;
          const distance = Math.abs(itemCenter - viewportCenter);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== activeProjectIndex) {
        setActiveProjectIndex(closestIndex);
      }
    };

    window.addEventListener('scroll', handleWindowScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, [activeProjectIndex]);

  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenResume) {
      onOpenResume();
    } else {
      window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=Resume%20Request%20-%20Kenneth`;
    }
  };

  return (
    <section id="works" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08] font-['Syne',sans-serif]">
      
      {/* Distinctive Section Header with Syne + Manrope Typography */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shrink-0 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white font-['Syne',sans-serif]">
              WHAT I'VE BEEN WORKING ON
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pl-4 font-['Syne',sans-serif]">
            Product architecture, user interfaces &amp; scalable digital systems
          </p>
        </div>

        {/* Download résumé */}
        <a
          href="#resume"
          onClick={handleDownloadResume}
          className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 group self-start sm:self-auto font-['Syne',sans-serif]"
        >
          <span>Download résumé</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* 2-Column Layout: Picture on the LEFT (changes as you scroll) · Project List on the RIGHT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Dynamic Project Preview Screen (Sticky on Desktop) */}
        <div className="lg:col-span-6 flex flex-col lg:sticky lg:top-24">
          
          {/* Rounded Display Window showing currently active project image */}
          <div 
            onClick={() => onSelectProject(activeFullProject)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] min-h-[340px] sm:min-h-[400px] rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0A0C10] shadow-2xl group cursor-pointer transition-all duration-300 hover:border-emerald-500/40"
            title={`View case study for ${activeItem.title}`}
          >
            {/* The project's detail picture with smooth cross-fade */}
            <img
              key={activeItem.id}
              src={currentDisplayImage}
              alt={`${activeItem.title} Preview`}
              className={`w-full h-full object-cover object-center select-none transition-all duration-300 ${
                isTransitioning ? 'opacity-85 scale-[1.01]' : 'opacity-100 scale-100'
              } group-hover:scale-[1.02]`}
            />

            {/* Subtle gradient vignette overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

            {/* Top-Right Tag Indicator */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-white flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                {activeItem.tag}
              </span>
            </div>

            {/* Hover overlay hint */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-['Syne',sans-serif] font-bold text-sm tracking-wide">
              <span>Explore Case Study</span>
              <ExternalLink className="w-4 h-4 text-emerald-400" />
            </div>

            {/* Bottom-right Dark Circular Pause / Play Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsPaused(!isPaused);
              }}
              className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/90 hover:text-white cursor-pointer hover:bg-black/90 transition-all active:scale-95 z-10"
              aria-label={isPaused ? 'Auto Play Slideshow' : 'Pause Slideshow'}
              title={isPaused ? 'Auto Play Slideshow' : 'Pause Slideshow'}
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5 text-white" />
              ) : (
                <Pause className="w-3.5 h-3.5 fill-current text-white" />
              )}
            </button>
          </div>

          {/* Under-Image Dynamic Caption synced to current project */}
          <div className="flex items-center justify-between text-xs sm:text-sm mt-3 px-1 text-slate-300 font-normal font-['Syne',sans-serif]">
            <div className="flex items-center gap-2 truncate">
              <strong className="text-white font-bold font-['Syne',sans-serif] text-sm">
                {activeItem.title}
              </strong>
              <span className="text-zinc-500">·</span>
              <span className="text-slate-300 truncate text-xs sm:text-[13px]">
                {activeFullProject.category || activeItem.shortDesc}
              </span>
            </div>
            <span className="text-emerald-400 font-mono text-xs shrink-0 ml-3 font-semibold">
              {activeItem.year}
            </span>
          </div>
        </div>

        {/* Right Column: Scrollable Project List (changes the left picture on scroll & hover) */}
        <div className="lg:col-span-6 flex flex-col">
          
          {/* Scrollable Container with custom sleek scrollbar */}
          <div 
            ref={listContainerRef}
            onScroll={handleListScroll}
            className="overflow-y-auto overscroll-contain pr-2 divide-y divide-white/[0.08] border-t border-b border-white/[0.08] scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent max-h-[520px]"
          >
            {projectItems.map((item, index) => {
              const fullProject = PORTFOLIO_DATA.projects.find((p) => p.id === item.id);
              const isActive = activeProjectIndex === index;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    itemRefs.current[index] = el;
                  }}
                  onClick={() => {
                    if (fullProject) onSelectProject(fullProject);
                  }}
                  onMouseEnter={() => setActiveProjectIndex(index)}
                  className={`group py-4 px-3.5 cursor-pointer rounded-xl transition-all duration-200 ${
                    isActive 
                      ? 'bg-white/[0.06] border-l-2 border-emerald-400 pl-4 shadow-sm' 
                      : 'hover:bg-white/[0.03] border-l-2 border-transparent'
                  }`}
                >
                  {/* Top row: Title on left · Tag & Year grouped together on right */}
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`text-base sm:text-lg font-bold font-['Syne',sans-serif] tracking-tight transition-colors truncate ${
                      isActive ? 'text-emerald-400' : 'text-white group-hover:text-emerald-400'
                    }`}>
                      {item.title}
                    </h3>

                    {/* Right side: Status Tag and Year */}
                    <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
                      <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider ${
                        isActive ? 'text-emerald-300' : 'text-zinc-400 group-hover:text-zinc-300'
                      }`}>
                        {item.tag}
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-zinc-400">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Bottom row: Short description using Manrope font */}
                  <p className="text-xs sm:text-[13px] sm:text-sm text-zinc-300 mt-1 line-clamp-1 font-normal font-['Syne',sans-serif] leading-relaxed group-hover:text-zinc-100 transition-colors">
                    {item.shortDesc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Under-list subtle indicator */}
          <div className="pt-3 px-3 flex items-center justify-between text-xs text-zinc-400 font-['Syne',sans-serif]">
            <span className="text-slate-300 font-normal">
              Scroll or hover items to switch preview picture
            </span>
            <span className="font-mono text-zinc-400">
              {activeProjectIndex + 1} of {projectItems.length}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
