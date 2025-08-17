import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { InteractivePipeline } from './components/InteractivePipeline';
import { CaseList } from './components/CaseList';
import { ToolsWorkflow } from './components/ToolsWorkflow';
import { FinalCTA } from './components/FinalCTA';
import { CaseDetail } from './components/CaseDetail';
import { ServicesPage } from './components/ServicesPage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

type Page = 'home' | 'services' | 'case-detail';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  // Listen for stage filter events from CaseList component
  useEffect(() => {
    const handleStageFilter = (event: CustomEvent) => {
      setSelectedStage(event.detail);
    };

    window.addEventListener('stageFilter', handleStageFilter as EventListener);
    
    return () => {
      window.removeEventListener('stageFilter', handleStageFilter as EventListener);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSeeProjectsClick = () => {
    scrollToSection('case-list');
  };

  const handleHireByStageClick = () => {
    scrollToSection('interactive-pipeline');
  };

  const handleStageFilter = (stageId: number | null) => {
    setSelectedStage(stageId);
    if (stageId) {
      scrollToSection('case-list');
    }
  };

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentPage('case-detail');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  const handleContactClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => scrollToSection('contact'), 100);
    } else {
      scrollToSection('contact');
    }
  };

  const handlePortfolioClick = () => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => scrollToSection('case-list'), 100);
    } else {
      scrollToSection('case-list');
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const handleMobileContactClick = () => {
    handleContactClick();
    setIsMobileMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'case-detail':
        return (
          <CaseDetail 
            projectId={selectedProject || 1} 
            onBack={handleBackToHome}
          />
        );
      default:
        return (
          <>
            <HeroSection 
              onSeeProjectsClick={handleSeeProjectsClick}
              onHireByStageClick={handleHireByStageClick}
            />
            <InteractivePipeline 
              onStageFilter={handleStageFilter}
              selectedStage={selectedStage}
            />
            <CaseList 
              selectedStage={selectedStage}
              onProjectClick={handleProjectClick}
            />
            <ToolsWorkflow />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Layout>
        {/* Update navigation to work with state */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-[1440px] mx-auto px-4 md:px-20">
            <div className="flex items-center justify-between h-16">
              <button 
                onClick={() => {setCurrentPage('home'); setIsMobileMenuOpen(false);}}
                className="text-xl font-medium hover:text-slate-600 transition-colors cursor-pointer"
              >
                Jardel Montenegro
              </button>
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className={`hover:text-slate-600 transition-colors cursor-pointer ${currentPage === 'home' ? 'text-black' : 'text-gray-600'}`}
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => setCurrentPage('services')}
                  className={`hover:text-slate-600 transition-colors cursor-pointer ${currentPage === 'services' ? 'text-black' : 'text-gray-600'}`}
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={handlePortfolioClick}
                  className="text-gray-600 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {t('nav.portfolio')}
                </button>
                <button 
                  onClick={handleContactClick}
                  className="text-gray-600 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </button>
                <LanguageSwitcher />
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center space-x-2">
                <LanguageSwitcher />
                <button 
                  className="p-2 cursor-pointer" 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Full-screen Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="fixed inset-0 bg-white">
              <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`text-2xl font-medium transition-colors cursor-pointer ${currentPage === 'home' ? 'text-black' : 'text-gray-600 hover:text-slate-600'}`}
                >
                  {t('nav.home')}
                </button>
                <button 
                  onClick={() => handleNavClick('services')}
                  className={`text-2xl font-medium transition-colors cursor-pointer ${currentPage === 'services' ? 'text-black' : 'text-gray-600 hover:text-slate-600'}`}
                >
                  {t('nav.services')}
                </button>
                <button 
                  onClick={handlePortfolioClick}
                  className="text-2xl font-medium text-gray-600 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {t('nav.portfolio')}
                </button>
                <button 
                  onClick={handleMobileContactClick}
                  className="text-2xl font-medium text-gray-600 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </div>
          </div>
        )}
        
        <main className="pt-16">
          {renderPage()}
        </main>
      </Layout>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}