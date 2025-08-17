import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

interface Service {
  id: number;
  title: { en: string; pt: string };
  description: { en: string; pt: string };
  features: { en: string; pt: string }[];
  process: { en: string; pt: string }[];
  pricing?: { en: string; pt: string };
  timeline?: { en: string; pt: string };
}

const services: Service[] = [
  {
    id: 1,
    title: {
      en: "Full Production",
      pt: "Produção Completa"
    },
    description: {
      en: "Complete end-to-end video production from initial concept to final delivery. Perfect for businesses who want a hands-off approach with professional results.",
      pt: "Produção de vídeo completa do conceito inicial à entrega final. Perfeito para empresas que querem uma abordagem sem preocupações com resultados profissionais."
    },
    features: [
      { en: "Concept development & scriptwriting", pt: "Desenvolvimento de conceito e roteirização" },
      { en: "Professional filming with cinema-grade equipment", pt: "Filmagem profissional com equipamentos cinematográficos" },
      { en: "Complete post-production workflow", pt: "Fluxo completo de pós-produção" },
      { en: "Motion graphics & animation", pt: "Motion graphics e animação" },
      { en: "Professional audio design & mixing", pt: "Design de áudio profissional e mixagem" },
      { en: "Color grading & visual enhancement", pt: "Correção de cor e aprimoramento visual" },
      { en: "Multiple format delivery", pt: "Entrega em múltiplos formatos" }
    ],
    process: [
      { en: "Discovery call & brief development", pt: "Chamada de descoberta e desenvolvimento do briefing" },
      { en: "Script writing & storyboarding", pt: "Escrita de roteiro e storyboard" },
      { en: "Pre-production planning", pt: "Planejamento de pré-produção" },
      { en: "Professional filming day(s)", pt: "Dia(s) de filmagem profissional" },
      { en: "Post-production & editing", pt: "Pós-produção e edição" },
      { en: "Revisions & final approval", pt: "Revisões e aprovação final" },
      { en: "Delivery in all required formats", pt: "Entrega em todos os formatos necessários" }
    ],
    pricing: { en: "Starting from $5,000", pt: "A partir de $5.000" },
    timeline: { en: "3-6 weeks", pt: "3-6 semanas" }
  },
  {
    id: 2,
    title: {
      en: "Editing & Post-Production",
      pt: "Edição e Pós-Produção"
    },
    description: {
      en: "Professional editing and post-production services for your existing footage. Transform raw content into polished, engaging videos.",
      pt: "Serviços profissionais de edição e pós-produção para suas filmagens existentes. Transforme conteúdo bruto em vídeos polidos e envolventes."
    },
    features: [
      { en: "Professional video editing", pt: "Edição profissional de vídeo" },
      { en: "Advanced color grading with DaVinci Resolve", pt: "Correção de cor avançada com DaVinci Resolve" },
      { en: "Audio mixing & sound design", pt: "Mixagem de áudio e design sonoro" },
      { en: "Motion graphics integration", pt: "Integração de motion graphics" },
      { en: "Visual effects & compositing", pt: "Efeitos visuais e compositing" },
      { en: "Multi-format export", pt: "Exportação em múltiplos formatos" },
      { en: "Revision rounds included", pt: "Rodadas de revisão incluídas" }
    ],
    process: [
      { en: "Footage review & organization", pt: "Revisão e organização das filmagens" },
      { en: "Rough cut creation", pt: "Criação do corte inicial" },
      { en: "Advanced editing & effects", pt: "Edição avançada e efeitos" },
      { en: "Color grading & audio mixing", pt: "Correção de cor e mixagem de áudio" },
      { en: "Client review & revisions", pt: "Revisão do cliente e correções" },
      { en: "Final delivery", pt: "Entrega final" }
    ],
    pricing: { en: "Starting from $2,000", pt: "A partir de $2.000" },
    timeline: { en: "1-3 weeks", pt: "1-3 semanas" }
  },
  {
    id: 3,
    title: {
      en: "Motion Graphics & Animation",
      pt: "Motion Graphics e Animação"
    },
    description: {
      en: "Custom motion graphics and animations to enhance your video content. From simple logo animations to complex explainer videos.",
      pt: "Motion graphics e animações personalizadas para aprimorar seu conteúdo de vídeo. De animações simples de logo a vídeos explicativos complexos."
    },
    features: [
      { en: "Custom 2D animation & motion graphics", pt: "Animação 2D personalizada e motion graphics" },
      { en: "Logo animation & brand elements", pt: "Animação de logo e elementos de marca" },
      { en: "Infographic animations", pt: "Animações de infográficos" },
      { en: "Title sequences & lower thirds", pt: "Sequências de título e lower thirds" },
      { en: "Character animation", pt: "Animação de personagens" },
      { en: "Visual effects & compositing", pt: "Efeitos visuais e compositing" },
      { en: "Multiple resolution outputs", pt: "Saídas em múltiplas resoluções" }
    ],
    process: [
      { en: "Style frame development", pt: "Desenvolvimento de quadros de estilo" },
      { en: "Storyboard creation", pt: "Criação de storyboard" },
      { en: "Animation production", pt: "Produção da animação" },
      { en: "Review & refinement", pt: "Revisão e refinamento" },
      { en: "Final animation delivery", pt: "Entrega da animação final" }
    ]
    // No pricing or timeline - these will be hidden
  },
  {
    id: 4,
    title: {
      en: "Translation & Subtitles",
      pt: "Tradução e Legendas"
    },
    description: {
      en: "Multi-language subtitles and translation services to reach global audiences. Professional linguists ensure cultural accuracy.",
      pt: "Serviços de legendas e tradução multilíngues para alcançar audiências globais. Linguistas profissionais garantem precisão cultural."
    },
    features: [
      { en: "Professional subtitle creation", pt: "Criação profissional de legendas" },
      { en: "Multi-language translation", pt: "Tradução multilíngue" },
      { en: "Cultural localization", pt: "Localização cultural" },
      { en: "Closed captions for accessibility", pt: "Legendas fechadas para acessibilidade" },
      { en: "Multiple subtitle formats", pt: "Múltiplos formatos de legenda" },
      { en: "Quality assurance review", pt: "Revisão de garantia de qualidade" },
      { en: "Fast turnaround times", pt: "Tempos de entrega rápidos" }
    ],
    process: [
      { en: "Language requirements assessment", pt: "Avaliação de requisitos de idioma" },
      { en: "Professional translation", pt: "Tradução profissional" },
      { en: "Subtitle timing & formatting", pt: "Timing e formatação de legendas" },
      { en: "Cultural localization review", pt: "Revisão de localização cultural" },
      { en: "Quality control & delivery", pt: "Controle de qualidade e entrega" }
    ],
    pricing: { en: "Starting from $500", pt: "A partir de $500" },
    timeline: { en: "3-7 days", pt: "3-7 dias" }
  },
];

const faqs = [
  {
    question: {
      en: "What's included in the Full Production package?",
      pt: "O que está incluído no pacote de Produção Completa?"
    },
    answer: {
      en: "Everything from initial concept to final delivery - scriptwriting, filming, editing, motion graphics, audio design, and color grading.",
      pt: "Tudo do conceito inicial à entrega final - roteirização, filmagem, edição, motion graphics, design de áudio e correção de cor."
    }
  },
  {
    question: {
      en: "Can I combine multiple services?",
      pt: "Posso combinar múltiplos serviços?"
    },
    answer: {
      en: "Absolutely! We often combine services like Motion Graphics with Editing & Post-Production for comprehensive solutions.",
      pt: "Absolutamente! Frequentemente combinamos serviços como Motion Graphics com Edição e Pós-Produção para soluções abrangentes."
    }
  },
  {
    question: {
      en: "Do you work with international clients?",
      pt: "Vocês trabalham com clientes internacionais?"
    },
    answer: {
      en: "Yes, we work with clients worldwide and offer remote collaboration tools for seamless project management.",
      pt: "Sim, trabalhamos com clientes mundialmente e oferecemos ferramentas de colaboração remota para gerenciamento de projeto sem interrupções."
    }
  },
  {
    question: {
      en: "What if I need revisions?",
      pt: "E se eu precisar de revisões?"
    },
    answer: {
      en: "All packages include revision rounds. Additional revisions can be accommodated based on project scope.",
      pt: "Todos os pacotes incluem rodadas de revisão. Revisões adicionais podem ser acomodadas baseadas no escopo do projeto."
    }
  }
];

export function ServicesPage() {
  const { t, currentLanguage } = useLanguage();
  
  return (
    <div className="pt-8">
      <div className="mx-4 md:mx-20">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl mb-6">{t('services.title')}</h1>
          <p className="text-gray-600 md:text-xl max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </section>

        {/* Services Grid - Fixed for mobile: grid-cols-1 on mobile, grid-cols-2 on lg+ */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {services.map((service) => (
              <Card key={service.id} className="p-6 md:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl mb-4">{service.title[currentLanguage]}</h3>
                  <p className="text-gray-600 mb-6">{service.description[currentLanguage]}</p>
                  
                  {/* Conditional pricing and timeline display */}
                  {(service.pricing || service.timeline) && (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mb-6">
                      {service.pricing && (
                        <div>
                          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                            {service.pricing[currentLanguage]}
                          </Badge>
                        </div>
                      )}
                      {service.timeline && (
                        <div className="text-sm text-gray-600">
                          {t('services.timeline')}: {service.timeline[currentLanguage]}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h4 className="mb-3">{t('services.whatsIncluded')}</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 5).map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 bg-black rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        {feature[currentLanguage]}
                      </li>
                    ))}
                    {service.features.length > 5 && (
                      <li className="text-gray-500 text-sm">
                        + {service.features.length - 5} {t('services.moreFeatures')}
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="mb-3">{t('services.ourProcess')}</h4>
                  <div className="space-y-2">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-center text-gray-600 text-sm">
                        <span className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3 text-xs">
                          {index + 1}
                        </span>
                        {step[currentLanguage]}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 cursor-pointer">
                    {t('services.getQuote')} {service.title[currentLanguage]}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section - Fixed for mobile: grid-cols-1 on mobile, grid-cols-2 on md+ */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl mb-4">{t('services.faqTitle')}</h2>
            <p className="text-gray-600">{t('services.faqSubtitle')}</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h4 className="mb-3">{faq.question[currentLanguage]}</h4>
                  <p className="text-gray-600">{faq.answer[currentLanguage]}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA - Fixed for mobile: buttons wrap in column on small screens */}
        <section className="text-center mb-16">
          <Card className="p-8 md:p-12 bg-gray-50">
            <h2 className="text-2xl md:text-3xl mb-4">{t('services.readyTitle')}</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('services.readySubtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 cursor-pointer">
                {t('services.scheduleConsultation')}
              </Button>
              <Button variant="outline" className="px-8 cursor-pointer">
                {t('services.viewPortfolio')}
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}