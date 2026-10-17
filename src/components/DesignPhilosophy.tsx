import React from 'react';

export const DesignPhilosophy: React.FC = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & User Research',
      desc: 'Deep-diving into user pain points, business objectives, and competitive landscapes. Conducting qualitative interviews, heuristic audits, and persona mapping to clearly define the right problem before creating any solutions.',
    },
    {
      step: '02',
      title: 'Information Architecture & UX Flows',
      desc: 'Structuring intuitive user journeys, system workflows, and structural wireframes. Mapping edge cases, navigational hierarchies, and mental models to eliminate friction and ensure every interaction feels natural and obvious.',
    },
    {
      step: '03',
      title: 'UI Design & Design Systems',
      desc: 'Crafting high-fidelity, accessible interfaces using scalable design tokens, modular components, and deliberate typography. Designing cohesive responsive layouts with polished micro-interactions that elevate brand credibility.',
    },
    {
      step: '04',
      title: 'Interactive Prototyping & Usability Testing',
      desc: 'Building clickable prototypes to test critical flows with actual stakeholders and target users. Validating hypotheses early, gathering actionable behavioral feedback, and iterating rapidly before committing engineering resources.',
    },
    {
      step: '05',
      title: 'Developer Handoff & Launch QA',
      desc: 'Delivering meticulous component specs, responsive token documentation, and asset guidelines. Collaborating directly with engineers throughout development, code reviews, and quality assurance to guarantee pixel-perfect production delivery.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/[0.04] font-['Syne',sans-serif]">
      {/* Header - Center Aligned */}
      <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
          <span className="text-xs font-bold text-emerald-400 tracking-[0.2em] uppercase font-['Syne',sans-serif]">
            DESIGN PROCESS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Syne',sans-serif]">
          How I Work
        </h2>
        <p className="text-xs sm:text-[13px] text-zinc-400 mt-2.5 font-normal max-w-lg mx-auto leading-relaxed font-['Syne',sans-serif]">
          A disciplined, user-centered framework bridging business goals with seamless, delightful digital craft.
        </p>
      </div>

      {/* 5 Process Steps: Clean 2-column layout across all viewports with adjusted sizing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 lg:gap-x-24 gap-y-10 sm:gap-y-12 max-w-6xl mx-auto">
        {processSteps.map((item) => (
          <div key={item.step} className="flex flex-col group">
            {/* Number: 10px bigger and bolder */}
            <span className="text-emerald-400 font-mono text-2xl sm:text-3xl font-black mb-2 tracking-wider drop-shadow-[0_0_12px_rgba(52,211,153,0.25)]">
              {item.step}
            </span>

            {/* Title: reduced by 4-5px */}
            <h3 className="text-[16px] sm:text-[17px] font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors font-['Syne',sans-serif]">
              {item.title}
            </h3>

            {/* Paragraph text: reduced by ~2px */}
            <p className="text-xs sm:text-[13px] text-zinc-400 leading-relaxed font-normal font-['Syne',sans-serif]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
