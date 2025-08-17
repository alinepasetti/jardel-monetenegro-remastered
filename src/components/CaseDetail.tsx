import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

interface CaseDetailProps {
  projectId: number;
  onBack: () => void;
}

const projectDetails = {
  1: {
    title: {
      en: "Corporate Brand Story",
      pt: "História da Marca Corporativa"
    },
    description: {
      en: "A comprehensive brand story video that showcases the company's values and mission through compelling visual storytelling.",
      pt: "Um vídeo abrangente da história da marca que mostra os valores e missão da empresa através de narrativa visual convincente."
    },
    youtubeVideoId: "dQw4w9WgXcQ", // Example YouTube video ID
    process: {
      en: "Multi-stage production process involving script development, professional filming, and post-production.",
      pt: "Processo de produção multi-etapa envolvendo desenvolvimento de roteiro, filmagem profissional e pós-produção."
    },
    software: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Ableton Live"],
    tags: [
      { en: "Script", pt: "Roteiro" },
      { en: "Editing", pt: "Edição" },
      { en: "Motion Graphics", pt: "Motion Graphics" }
    ]
  },
  2: {
    title: {
      en: "Product Launch Campaign",
      pt: "Campanha de Lançamento de Produto"
    },
    description: {
      en: "Dynamic product showcase video featuring AI-generated imagery and professional motion graphics for maximum impact.",
      pt: "Vídeo dinâmico de apresentação de produto com imagens geradas por IA e motion graphics profissionais para máximo impacto."
    },
    youtubeVideoId: "jNQXAC9IVRw", // Example YouTube video ID
    // No process property - this will hide the process section
    software: ["Premiere Pro", "After Effects", "Midjourney", "Ableton Live"],
    tags: [
      { en: "AI Generation", pt: "Geração IA" },
      { en: "Motion Graphics", pt: "Motion Graphics" },
      { en: "Product Launch", pt: "Lançamento de Produto" }
    ]
  },
  3: {
    title: {
      en: "Documentary Series",
      pt: "Série Documental"
    },
    description: {
      en: "Multi-episode documentary series with comprehensive post-production workflow including color grading and multi-language subtitles.",
      pt: "Série documental de múltiplos episódios com workflow abrangente de pós-produção incluindo correção de cor e legendas multilíngues."
    },
    youtubeVideoId: "M7lc1UVf-VE", // Example YouTube video ID
    process: {
      en: "Extensive pre-production planning, location shooting, interview setup, and comprehensive post-production including color grading and subtitle creation.",
      pt: "Planejamento extensivo de pré-produção, filmagem em locação, configuração de entrevistas e pós-produção abrangente incluindo correção de cor e criação de legendas."
    },
    software: ["Premiere Pro", "DaVinci Resolve", "Audition", "Subtitle Edit"],
    tags: [
      { en: "Documentary", pt: "Documentário" },
      { en: "Color Grading", pt: "Correção de Cor" },
      { en: "Subtitles", pt: "Legendas" }
    ]
  }
};

export function CaseDetail({ projectId, onBack }: CaseDetailProps) {
  const { t, currentLanguage } = useLanguage();
  const project = projectDetails[projectId as keyof typeof projectDetails] || projectDetails[1];

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&modestbranding=1`;
  };

  return (
    <div className="pt-8">
      <div className="mx-4 md:mx-20">
        <div className="mb-8">
          <Button 
            variant="outline" 
            onClick={onBack}
            className="mb-4 cursor-pointer"
          >
            ← {t('caseDetail.backToProjects')}
          </Button>
          <h1 className="text-2xl md:text-4xl mb-4">
            {typeof project.title === 'object' ? project.title[currentLanguage] : project.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Video Section */}
          <div className="lg:col-span-8">
            {/* YouTube Video Embed */}
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-8">
              {project.youtubeVideoId ? (
                <iframe
                  src={getEmbedUrl(project.youtubeVideoId)}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-600 text-xl">{t('caseDetail.videoPlaceholder')}</span>
                </div>
              )}
            </div>
            
            {/* Project Description */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl mb-4">{t('caseDetail.projectOverview')}</h2>
              <p className="text-gray-700 leading-relaxed">
                {typeof project.description === 'object' ? project.description[currentLanguage] : project.description}
              </p>
            </div>

            {/* Process Section - Only show if process exists */}
            {'process' in project && project.process && (
              <div className="mb-8">
                <h2 className="text-xl md:text-2xl mb-4">{t('caseDetail.process')}</h2>
                <div className="bg-gray-100 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    {typeof project.process === 'object' ? project.process[currentLanguage] : project.process}
                  </p>
                  <div className="text-sm text-gray-500">
                    {t('caseDetail.processNote')}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Software Used */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="mb-4">{t('caseDetail.softwareUsed')}</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.software.map((software, index) => (
                  <div key={index} className="bg-gray-100 rounded-lg p-3 text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded mx-auto mb-2"></div>
                    <div className="text-sm">{software}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Tags */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="mb-4">{t('caseDetail.projectTags')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                    {typeof tag === 'object' ? tag[currentLanguage] : tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="mb-4">{t('caseDetail.interestedCTA')}</h3>
              <Button className="w-full bg-black text-white hover:bg-gray-800 cursor-pointer">
                {t('caseDetail.wantSimilar')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}