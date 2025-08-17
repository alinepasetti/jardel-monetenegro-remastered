import { useState } from 'react';
import { 
  FileText, 
  Camera, 
  Sparkles, 
  Scissors, 
  Palette, 
  Headphones, 
  Zap, 
  Globe 
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PipelineStage {
  id: number;
  nameKey: string;
  descriptionKey: string;
  icon: React.ComponentType<{ className?: string }>;
}

const stages: PipelineStage[] = [
  { 
    id: 1, 
    nameKey: "stage.1.name",
    descriptionKey: "stage.1.description",
    icon: FileText
  },
  { 
    id: 2, 
    nameKey: "stage.2.name",
    descriptionKey: "stage.2.description",
    icon: Camera
  },
  { 
    id: 3, 
    nameKey: "stage.3.name",
    descriptionKey: "stage.3.description",
    icon: Sparkles
  },
  { 
    id: 4, 
    nameKey: "stage.4.name",
    descriptionKey: "stage.4.description",
    icon: Scissors
  },
  { 
    id: 5, 
    nameKey: "stage.5.name",
    descriptionKey: "stage.5.description",
    icon: Palette
  },
  { 
    id: 6, 
    nameKey: "stage.6.name",
    descriptionKey: "stage.6.description",
    icon: Headphones
  },
  { 
    id: 7, 
    nameKey: "stage.7.name",
    descriptionKey: "stage.7.description",
    icon: Zap
  },
  { 
    id: 8, 
    nameKey: "stage.8.name",
    descriptionKey: "stage.8.description",
    icon: Globe
  },
];

interface InteractivePipelineProps {
  onStageFilter: (stageId: number | null) => void;
  selectedStage: number | null;
}

export function InteractivePipeline({ onStageFilter, selectedStage }: InteractivePipelineProps) {
  const { t } = useLanguage();
  
  const handleSeeProjects = (stage: PipelineStage) => {
    // Trigger the stage filter and scroll to Featured Projects section
    onStageFilter(stage.id);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="interactive-pipeline">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">{t('pipeline.title')}</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            {t('pipeline.subtitle')}
          </p>
        </div>

        {/* Pipeline Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stages.map((stage) => {
            const IconComponent = stage.icon;
            return (
              <div 
                key={stage.id}
                className={`bg-white rounded-xl p-6 md:p-8 text-center border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer group ${
                  selectedStage === stage.id 
                    ? 'border-slate-600 shadow-xl -translate-y-1' 
                    : 'border-gray-200 hover:border-slate-300'
                }`}
                onClick={() => handleSeeProjects(stage)}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 transition-all duration-300 ${
                  selectedStage === stage.id 
                    ? 'bg-slate-600 text-white' 
                    : 'bg-gray-100 text-gray-600 group-hover:bg-slate-100 group-hover:text-slate-600'
                }`}>
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                </div>
                
                <h3 className="text-lg md:text-xl font-medium mb-3 md:mb-4">{t(stage.nameKey)}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{t(stage.descriptionKey)}</p>
                <div className={`text-sm md:text-base font-medium transition-colors ${
                  selectedStage === stage.id
                    ? 'text-slate-600'
                    : 'text-gray-500 group-hover:text-slate-600'
                }`}>
                  {t('pipeline.cta')}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}