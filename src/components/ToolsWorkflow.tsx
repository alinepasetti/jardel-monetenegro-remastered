import { Card } from './ui/card';
import { 
  Monitor, 
  Palette, 
  Volume2, 
  Camera, 
  Layers, 
  Zap,
  Edit,
  FileImage
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const software = [
  { name: "Premiere Pro", category: "Editing", icon: Edit },
  { name: "After Effects", category: "Motion Graphics", icon: Zap },
  { name: "DaVinci Resolve", category: "Color Grading", icon: Palette },
  { name: "Ableton Live", category: "Audio", icon: Volume2 },
  { name: "Cinema 4D", category: "3D", icon: Layers },
  { name: "Photoshop", category: "Design", icon: FileImage },
];

const processStages = [
  { nameKey: "tools.stage.1", descriptionKey: "tools.stage.1.desc" },
  { nameKey: "tools.stage.2", descriptionKey: "tools.stage.2.desc" },
  { nameKey: "tools.stage.3", descriptionKey: "tools.stage.3.desc" },
  { nameKey: "tools.stage.4", descriptionKey: "tools.stage.4.desc" },
];

export function ToolsWorkflow() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="tools-workflow">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">{t('tools.title')}</h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            {t('tools.subtitle')}
          </p>
        </div>

        {/* Software Grid */}
        <div className="mb-16 md:mb-20">
          <h3 className="text-2xl md:text-3xl font-medium mb-8 md:mb-12 text-center">{t('tools.software')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {software.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl border-2 border-gray-200 flex items-center justify-center mx-auto mb-4 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 group-hover:-translate-y-1">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-gray-600 group-hover:text-slate-600 transition-colors duration-300" />
                  </div>
                  <div className="font-medium mb-1 text-sm md:text-base group-hover:text-slate-600 transition-colors duration-200">{tool.name}</div>
                  <div className="text-xs md:text-sm text-gray-500">{tool.category}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Diagram */}
        <Card className="p-6 md:p-12 bg-white border-2 border-gray-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-2xl md:text-3xl font-medium mb-8 md:mb-12 text-center">{t('tools.process')}</h3>
          
          {/* Desktop Process */}
          <div className="hidden md:block relative">
            <div className="flex items-center justify-between">
              {processStages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center relative">
                  {/* Stage Circle */}
                  <div className="bg-black text-white rounded-full w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center mb-6 relative z-10 hover:bg-slate-600 transition-colors duration-300">
                    <span className="font-medium text-lg lg:text-xl">{index + 1}</span>
                  </div>
                  
                  {/* Stage Info */}
                  <div className="text-center max-w-32">
                    <div className="font-medium mb-2 text-lg">{t(stage.nameKey)}</div>
                    <div className="text-sm text-gray-600">{t(stage.descriptionKey)}</div>
                  </div>
                  
                  {/* Arrow */}
                  {index < processStages.length - 1 && (
                    <div className="absolute top-8 lg:top-10 left-full w-24 lg:w-32 flex items-center justify-center">
                      <div className="w-16 lg:w-24 h-0.5 bg-gray-300"></div>
                      <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Process */}
          <div className="md:hidden space-y-6">
            {processStages.map((stage, index) => (
              <div key={index} className="flex items-center space-x-4">
                {/* Stage Circle */}
                <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <span className="font-medium">{index + 1}</span>
                </div>
                
                {/* Stage Info */}
                <div>
                  <div className="font-medium mb-1">{t(stage.nameKey)}</div>
                  <div className="text-sm text-gray-600">{t(stage.descriptionKey)}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}