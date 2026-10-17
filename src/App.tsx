import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  // Custom uploaded/swapped images by key (persisted in localStorage)
  const [customImages, setCustomImages] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('uyiosa_portfolio_custom_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const findProject = (projectId: string) => {
    return (
      PORTFOLIO_DATA.projects.find(
        (p) =>
          p.id === projectId ||
          (projectId === 'eliza' && p.id === 'helizah') ||
          (projectId === 'beastream' && p.id === 'beatstream')
      ) || null
    );
  };

  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    // Check initial URL hash for direct deep-linking
    const hash = window.location.hash;
    if (hash.startsWith('#project/')) {
      const projectId = hash.replace('#project/', '');
      return findProject(projectId);
    }
    return null;
  });

  const [activeSection, setActiveSection] = useState<string>('works');

  // Allow uploading custom avatar or project image
  const handleUploadImage = (key: string, dataUrl: string) => {
    const updated = { ...customImages, [key]: dataUrl };
    setCustomImages(updated);
    try {
      localStorage.setItem('uyiosa_portfolio_custom_images', JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not persist image to localStorage', e);
    }
  };

  const handleUploadAvatar = (dataUrl: string) => {
    handleUploadImage('avatar', dataUrl);
  };

  // Handle URL hash changes (browser back/forward button navigation)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        const found = findProject(projectId);
        if (found) {
          setSelectedProject(found);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        setSelectedProject(null);
      }
    };

    window.addEventListener('popstate', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('popstate', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Open full page for project
  const handleOpenProjectPage = (project: Project) => {
    setSelectedProject(project);
    window.history.pushState(null, '', `#project/${project.id}`);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Back from project page to portfolio
  const handleBackToPortfolio = () => {
    setSelectedProject(null);
    window.history.pushState(null, '', '#works');
    setTimeout(() => {
      const worksEl = document.getElementById('works');
      if (worksEl) {
        worksEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  // Direct section navigation from Navbar (Projects -> #works, Process -> #process)
  const handleNavigateSection = (sectionId: string) => {
    if (selectedProject) {
      setSelectedProject(null);
      window.history.pushState(null, '', `#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Home navigation from UKM brand mark
  const handleNavigateHome = () => {
    if (selectedProject) {
      setSelectedProject(null);
      window.history.pushState(null, '', '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Scroll spy for active navbar section
  useEffect(() => {
    if (selectedProject) return; // Do not run on detail page

    const handleScroll = () => {
      const sections = ['works', 'process'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  return (
    <>
      {/* Universal High-Fidelity Résumé Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* If a project is selected, render the dedicated Full Page Project View */}
      {selectedProject ? (
        <ProjectDetailPage
          project={selectedProject}
          customImage={customImages[selectedProject.id]}
          onBack={handleBackToPortfolio}
          onSelectProject={(nextP) => {
            setSelectedProject(nextP);
            window.history.pushState(null, '', `#project/${nextP.id}`);
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
          onUpdateImage={handleUploadImage}
          onOpenResume={() => setIsResumeOpen(true)}
        />
      ) : (
        /* Main 3-Section Portfolio: Hero, Works (2nd section), Design Process (3rd section) + Footer */
        <div className="min-h-screen bg-[#030303] text-[#F1F3F9] font-['Syne',sans-serif] antialiased selection:bg-emerald-500/25 selection:text-emerald-300 flex flex-col justify-between">
          {/* Top Navbar */}
          <Navbar
            activeSection={activeSection}
            onNavigateSection={handleNavigateSection}
            onNavigateHome={handleNavigateHome}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          <main className="flex-1">
            {/* 1. Hero Section */}
            <Hero
              customAvatar={customImages['avatar']}
              onUploadAvatar={handleUploadAvatar}
            />

            {/* 2. What I've Been Working On (Projects) */}
            <ProjectGrid
              customImages={customImages}
              onSelectProject={handleOpenProjectPage}
              onUpdateImage={handleUploadImage}
              onOpenResume={() => setIsResumeOpen(true)}
            />

            {/* 3. Design Process ("How I Work") */}
            <DesignPhilosophy />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
