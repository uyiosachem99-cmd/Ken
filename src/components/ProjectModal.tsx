import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  customImage?: string;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  customImage,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'prototype' | 'decisions'>('overview');
  const [prototypeStep, setPrototypeStep] = useState(0);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentImage = customImage || project.image;

  const prototypeScreens = [
    { title: 'Screen 1: Discovery & Entry Flow', desc: 'Frictionless biometric onboarding with zero-latency verification.' },
    { title: 'Screen 2: Real-time Telemetry Dashboard', desc: 'Dynamic cashflow and node graph visualization with instant filter telemetry.' },
    { title: 'Screen 3: Transaction & Execution Modal', desc: 'One-thumb execution drawer with cryptographically signed verification.' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl bg-[#0D0F17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#08090D]/90 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-xs text-slate-300">{project.client} ({project.year})</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Header Title & Summary */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mb-3 text-balance">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Primary Visual Stage Container - Crystal Clear 4K Mockup */}
          <div className="relative rounded-xl overflow-hidden bg-[#07080D] border border-white/10 aspect-video max-h-[460px] group shadow-2xl">
            <img
              src={currentImage}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* KPI Metrics Strip */}
          <div className="grid grid-cols-3 gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-white font-display font-mono tabular-nums">
                  {m.value}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">{m.label}</span>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-white/[0.08] pb-1">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-1 ${
                activeTab === 'overview'
                  ? 'border-emerald-400 text-white'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Case Study Overview
            </button>
            <button
              onClick={() => setActiveTab('decisions')}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-1 ${
                activeTab === 'decisions'
                  ? 'border-emerald-400 text-white'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Key Design Decisions
            </button>
            <button
              onClick={() => setActiveTab('prototype')}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-1 ${
                activeTab === 'prototype'
                  ? 'border-emerald-400 text-white'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              Interactive Simulator
            </button>
          </div>

          {/* Tab Content 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#10131B] border border-white/[0.06]">
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#10131B] border border-white/[0.06]">
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                    The Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-3">Project Deliverables & Artifacts</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 2: Design Decisions */}
          {activeTab === 'decisions' && (
            <div className="space-y-4">
              {project.designDecisions.map((dec, i) => (
                <div key={i} className="p-5 rounded-xl bg-[#10131B] border border-white/[0.06]">
                  <h4 className="text-base font-semibold text-white font-display mb-1 flex items-center gap-2">
                    <span className="text-emerald-400 font-mono text-xs">0{i + 1}.</span>
                    <span>{dec.title}</span>
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed pl-6">
                    {dec.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 3: Prototype Simulator */}
          {activeTab === 'prototype' && (
            <div className="p-6 rounded-xl bg-[#10131B] border border-white/[0.06] text-center">
              <h4 className="text-base font-bold text-white mb-2 font-display">
                Interactive Clickable Prototype Walkthrough
              </h4>
              <p className="text-xs text-slate-400 mb-6 max-w-lg mx-auto">
                Step through the core user journey crafted for {project.title}.
              </p>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-[#08090D] border border-white/10 mb-4 text-left shadow-lg">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-xs">
                  <span className="font-mono text-emerald-400">Step {prototypeStep + 1} of 3</span>
                  <span className="text-slate-400">Core Experience</span>
                </div>
                <h5 className="text-sm font-semibold text-white mb-1">
                  {prototypeScreens[prototypeStep].title}
                </h5>
                <p className="text-xs text-slate-300 mb-4">
                  {prototypeScreens[prototypeStep].desc}
                </p>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={() => setPrototypeStep((prev) => (prev > 0 ? prev - 1 : 2))}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white rounded bg-white/5"
                  >
                    Previous State
                  </button>
                  <button
                    onClick={() => setPrototypeStep((prev) => (prev < 2 ? prev + 1 : 0))}
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded transition-colors shadow-sm shadow-emerald-500/20"
                  >
                    Next Screen Flow →
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#08090D] flex items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Role: <span className="text-white font-medium">{project.role}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-white/5 rounded-lg transition-colors"
            >
              Close Viewer
            </button>
            <a
              href="#contact"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm shadow-emerald-500/20"
            >
              Inquire About Similar Work
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
