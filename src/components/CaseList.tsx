import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

interface Project {
  id: number;
  titleKey: string;
  image: string;
  video?: string; // New field for video/GIF
  tagKeys: string[];
  stageIds: number[];
  category: string;
}

interface PipelineStage {
  id: number;
  nameKey: string;
}

const stages: PipelineStage[] = [
  { id: 1, nameKey: "stage.1.name" },
  { id: 2, nameKey: "stage.2.name" },
  { id: 3, nameKey: "stage.3.name" },
  { id: 4, nameKey: "stage.4.name" },
  { id: 5, nameKey: "stage.5.name" },
  { id: 6, nameKey: "stage.6.name" },
  { id: 7, nameKey: "stage.7.name" },
  { id: 8, nameKey: "stage.8.name" },
];

const projects: Project[] = [
  {
    id: 1,
    titleKey: "project.1.title",
    image: "https://images.unsplash.com/photo-1683091531464-9ba39df38605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwdmlkZW8lMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc1NTA5MTI3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://cdn.pixabay.com/video/2021/08/04/84473-587710942_large.mp4",
    tagKeys: ["tag.commercial", "tag.branding", "tag.narrative"],
    stageIds: [1, 4, 7],
    category: "Commercial"
  },
  {
    id: 2,
    titleKey: "project.2.title",
    image: "https://images.unsplash.com/photo-1631387019069-2ff599943f9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHN0b3J5dGVsbGluZ3xlbnwxfHx8fDE3NTUxOTg1NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://cdn.pixabay.com/video/2023/04/25/160016-821830893_large.mp4",
    tagKeys: ["tag.product", "tag.marketing", "tag.launch"],
    stageIds: [2, 5, 8],
    category: "Marketing"
  },
  {
    id: 3,
    titleKey: "project.3.title",
    image: "https://images.unsplash.com/photo-1717501219599-653a991b25f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBkaWdpdGFsfGVufDF8fHx8MTc1NTE1NTEzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://cdn.pixabay.com/video/2022/12/06/142011-776736555_large.mp4",
    tagKeys: ["tag.education", "tag.ai", "tag.series"],
    stageIds: [3, 6, 8],
    category: "Educational"
  },
  {
    id: 4,
    titleKey: "project.4.title",
    image: "https://images.unsplash.com/photo-1740174459682-4dd3f72e2512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3NTUxOTY5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://cdn.pixabay.com/video/2021/07/25/81834-571097306_large.mp4",
    tagKeys: ["tag.music", "tag.creative", "tag.performance"],
    stageIds: [2, 4, 5],
    category: "Entertainment"
  },
  {
    id: 5,
    titleKey: "project.5.title",
    image: "https://images.unsplash.com/photo-1753442360604-0003d4ecacca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBzdHVkaW98ZW58MXx8fHwxNzU1MTk4NTY5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://cdn.pixabay.com/video/2022/04/18/114034-702631846_large.mp4",
    tagKeys: ["tag.documentary", "tag.storytelling", "tag.real"],
    stageIds: [1, 2, 6],
    category: "Documentary"
  },
  {
    id: 6,
    titleKey: "project.6.title",
    image: "https://images.unsplash.com/photo-1638472358951-1ff43bca22a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMGdyYWRpbmclMjBjaW5lbWF8ZW58MXx8fHwxNzU1MTk4NTc1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://cdn.pixabay.com/video/2021/08/09/85059-588794468_large.mp4",
    tagKeys: ["tag.animation", "tag.explainer", "tag.educational"],
    stageIds: [1, 7, 6],
    category: "Animation"
  },
];

interface CaseListProps {
  selectedStage: number | null;
  onProjectClick: (projectId: number) => void;
}

export function CaseList({ selectedStage, onProjectClick }: CaseListProps) {
  const { t } = useLanguage();
  const filteredProjects = selectedStage 
    ? projects.filter(project => project.stageIds.includes(selectedStage))
    : projects;

  const handleStageClick = (stageId: number | null) => {
    window.dispatchEvent(new CustomEvent('stageFilter', { detail: stageId }));
  };

  const handleDropdownChange = (value: string) => {
    const stageId = value === 'all' ? null : parseInt(value);
    handleStageClick(stageId);
  };

  const getProjectsCountText = (count: number) => {
    return count === 1 ? t('projects.count') : t('projects.count.plural');
  };

  const getSelectValue = () => {
    return selectedStage === null ? 'all' : selectedStage.toString();
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="case-list">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">{t('projects.title')}</h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 md:mb-12 max-w-3xl">
            {t('projects.subtitle')}
          </p>
          
          {/* Mobile Dropdown Filter */}
          <div className="md:hidden mb-8">
            <Select value={getSelectValue()} onValueChange={handleDropdownChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('projects.all')}</SelectItem>
                {stages.map((stage) => (
                  <SelectItem key={stage.id} value={stage.id.toString()}>
                    {t(stage.nameKey)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Horizontal Category Filters */}
          <div className="hidden md:flex flex-wrap gap-3 mb-8">
            <Button
              variant={selectedStage === null ? "default" : "outline"}
              onClick={() => handleStageClick(null)}
              className={`transition-all duration-200 cursor-pointer ${
                selectedStage === null 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'hover:bg-gray-50 hover:text-black hover:border-slate-300'
              }`}
            >
              {t('projects.all')}
            </Button>
            {stages.map((stage) => (
              <Button
                key={stage.id}
                variant={selectedStage === stage.id ? "default" : "outline"}
                onClick={() => handleStageClick(stage.id)}
                className={`transition-all duration-200 cursor-pointer ${
                  selectedStage === stage.id 
                    ? 'bg-slate-600 text-white hover:bg-slate-700' 
                    : 'hover:bg-gray-50 hover:text-black hover:border-slate-300'
                }`}
              >
                {t(stage.nameKey)}
              </Button>
            ))}
          </div>
          
          {selectedStage && (
            <div className="mb-6 md:mb-8">
              <p className="text-gray-600 text-lg">
                {t('projects.showing')}{' '}
                <span className="font-medium text-slate-600">
                  {t(stages.find(s => s.id === selectedStage)?.nameKey || '')}
                </span>
                {' '}({filteredProjects.length} {getProjectsCountText(filteredProjects.length)})
              </p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="cursor-pointer hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200 hover:border-slate-300 hover:-translate-y-2 group overflow-hidden"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                {project.video ? (
                  <video
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      filter: 'grayscale(20%) contrast(1.1) brightness(0.95)',
                    }}
                  >
                    <source src={project.video} type="video/mp4" />
                    {/* Fallback to image if video fails to load */}
                    <ImageWithFallback
                      src={project.image}
                      alt={t(project.titleKey)}
                      className="w-full h-full object-cover"
                      style={{
                        filter: 'grayscale(20%) contrast(1.1) brightness(0.95)',
                      }}
                    />
                  </video>
                ) : (
                  <ImageWithFallback
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                    style={{
                      filter: 'grayscale(20%) contrast(1.1) brightness(0.95)',
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3 group-hover:text-slate-600 transition-colors duration-200">
                  {t(project.titleKey)}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tagKeys.map((tagKey, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-700 hover:bg-slate-100 hover:text-slate-700 transition-colors duration-200"
                    >
                      {t(tagKey)}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 md:py-24">
            <div className="text-gray-400 text-2xl md:text-3xl font-medium mb-4">{t('projects.empty.title')}</div>
            <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
              {t('projects.empty.subtitle')}
            </p>
            <Button 
              variant="outline"
              onClick={() => handleStageClick(null)}
              className="hover:bg-slate-50 hover:border-slate-300 hover:text-slate-600 cursor-pointer"
            >
              {t('projects.empty.cta')}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}