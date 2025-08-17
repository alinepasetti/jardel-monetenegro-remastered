import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroSectionProps {
  onSeeProjectsClick: () => void;
  onHireByStageClick: () => void;
}

export function HeroSection({ onSeeProjectsClick, onHireByStageClick }: HeroSectionProps) {
  const [currentText, setCurrentText] = useState(0);
  const { t } = useLanguage();
  const overlayTexts = ["SCRIPT", "FOOTAGE", "EDITING", "ANIMATION", "SUBTITLES"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % overlayTexts.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Placeholder Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-gray-400 text-2xl md:text-4xl lg:text-6xl font-light tracking-wider">
            VIDEO REEL PLACEHOLDER
          </div>
        </div>
      </div>
      
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1440px] mx-auto px-4 md:px-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6 md:mb-8 leading-tight font-medium">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 leading-relaxed max-w-3xl">
                {t('hero.subtitle')}
              </p>
              
              {/* Animated overlay text */}
              <div className="mb-8 md:mb-12 h-20 md:h-32 flex items-center">
                <div className="text-4xl md:text-6xl lg:text-8xl text-slate-600 opacity-80 transition-all duration-700 font-light tracking-wider">
                  {overlayTexts[currentText]}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onSeeProjectsClick}
                  className="bg-slate-600 text-white px-8 py-4 text-lg hover:bg-slate-700 transition-all duration-200 hover:shadow-lg hover:shadow-slate-600/25 cursor-pointer"
                >
                  {t('hero.cta.projects')}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={onHireByStageClick}
                  className="border-2 border-white text-[rgba(24,24,24,1)] px-8 py-4 text-lg hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {t('hero.cta.stages')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}