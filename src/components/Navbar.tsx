import React, { useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigateSection?: (section: string) => void;
  onNavigateHome?: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigateSection,
  onNavigateHome,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projects', id: 'works' },
    { label: 'Process', id: 'process' },
  ];

  const handleBrandClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#030303]/90 backdrop-blur-md border-b border-white/[0.08] font-['Syne',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Left: Just UK in green, distinctive Outfit font, no button or icon */}
          <button
            onClick={handleBrandClick}
            className="group select-none text-left cursor-pointer p-0 bg-transparent border-0 outline-none flex items-center"
            aria-label="UK - Home"
          >
            <span className="text-2xl sm:text-[28px] font-black font-['Outfit',sans-serif] tracking-tight bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(52,211,153,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(52,211,153,0.8)] group-hover:scale-105 transition-all duration-200">
              UK
            </span>
          </button>

          {/* Center Navigation: Just Projects and Process */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-sm text-zinc-300 font-bold font-['Syne',sans-serif]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`hover:text-white transition-colors relative py-1 tracking-wide cursor-pointer text-sm ${
                    isActive ? 'text-white font-extrabold' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: View Résumé Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-zinc-200 hover:text-white border border-white/20 hover:border-emerald-400/60 rounded-full bg-white/[0.03] hover:bg-white/[0.08] hover:shadow-[0_0_15px_rgba(52,211,153,0.15)] transition-all duration-200 tracking-wide font-['Syne',sans-serif] flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>View Résumé</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.08] flex flex-col gap-2 bg-[#030303]/95">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="w-full text-left px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-['Syne',sans-serif] font-bold"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenResume) onOpenResume();
              }}
              className="w-full text-left px-3 py-2 text-sm text-emerald-400 hover:text-emerald-300 hover:bg-white/5 rounded-lg transition-colors font-['Syne',sans-serif] font-bold flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>View Résumé Document</span>
            </button>
          </div>
        )}

      </div>
    </header>
  );
};
