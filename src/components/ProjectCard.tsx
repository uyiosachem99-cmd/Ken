import React from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  customImage?: string;
  isFeatured?: boolean;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  customImage,
  isFeatured = false,
  onSelect,
}) => {
  const imageSrc = customImage || project.image;

  return (
    <div
      onClick={() => onSelect(project)}
      className={`group relative rounded-2xl overflow-hidden bg-[#10131B] border border-white/[0.08] hover:border-emerald-500/40 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-emerald-950/30 ${
        isFeatured ? 'md:col-span-2 md:row-span-2' : 'col-span-1'
      }`}
    >
      {/* Media Container - Razor sharp crystal clear picture */}
      <div className={`relative overflow-hidden w-full bg-[#0A0C12] ${isFeatured ? 'h-72 sm:h-96' : 'h-56 sm:h-64'}`}>
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Contrast Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10131B] via-transparent to-black/20" />

        {/* Year Top Right */}
        <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300">
          <span>{project.year}</span>
        </div>

        {/* Hover Action Indicator */}
        <div className="absolute bottom-4 right-4 z-10 w-9 h-9 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg shadow-emerald-500/30">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          {/* Unboxed Metadata Line with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
            <span className="text-emerald-400 font-medium">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors font-display mb-2 text-balance">
            {project.title}
          </h3>

          {/* Subtitle / summary */}
          <p className="text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Metrics Row (Quantitative proof) */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-bold text-white font-mono tabular-nums">{m.value}</span>
                <span className="text-[11px] text-slate-400">{m.label}</span>
              </div>
            ))}
          </div>

          <span className="text-xs font-semibold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0">
            Case Study
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
