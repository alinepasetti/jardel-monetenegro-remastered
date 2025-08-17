import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'From Script to Screen: Complete, Creative Video Production',
    'hero.subtitle': 'End-to-end production or individual stages tailored to your needs.',
    'hero.cta.projects': 'See Full Projects',
    'hero.cta.stages': 'Hire by Stage',
    
    // Interactive Pipeline
    'pipeline.title': 'Our Production Pipeline',
    'pipeline.subtitle': 'We handle every stage of video production with professional expertise and cutting-edge tools',
    'pipeline.cta': 'See Projects →',
    
    // Pipeline Stages
    'stage.1.name': 'Script & Storytelling',
    'stage.1.description': 'Concept development and narrative creation',
    'stage.2.name': 'Footage Capture',
    'stage.2.description': 'Professional filming and video capture',
    'stage.3.name': 'AI Image Generation',
    'stage.3.description': 'AI-powered visual content creation',
    'stage.4.name': 'Editing & Assembly',
    'stage.4.description': 'Video editing and post-production',
    'stage.5.name': 'Color Grading',
    'stage.5.description': 'Professional color correction and grading',
    'stage.6.name': 'Audio & Music',
    'stage.6.description': 'Music production and audio design',
    'stage.7.name': 'Motion Graphics',
    'stage.7.description': 'Animation and visual effects',
    'stage.8.name': 'Multi-language Subtitles',
    'stage.8.description': 'Translation and subtitle services',
    
    // Featured Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Explore our portfolio across different production stages and creative approaches',
    'projects.all': 'All Projects',
    'projects.showing': 'Showing projects featuring',
    'projects.count': 'project',
    'projects.count.plural': 'projects',
    'projects.empty.title': 'No projects found',
    'projects.empty.subtitle': 'No projects match the selected category. Try selecting a different filter.',
    'projects.empty.cta': 'Show All Projects',
    
    // Tools & Workflow
    'tools.title': 'Tools & Workflow',
    'tools.subtitle': 'Professional software and streamlined processes for exceptional results',
    'tools.software': 'Software We Use',
    'tools.process': 'Our Production Process',
    'tools.stage.1': 'Pre-Production',
    'tools.stage.1.desc': 'Script & Planning',
    'tools.stage.2': 'Production',
    'tools.stage.2.desc': 'Filming & Capture',
    'tools.stage.3': 'Post-Production',
    'tools.stage.3.desc': 'Editing & Effects',
    'tools.stage.4': 'Delivery',
    'tools.stage.4.desc': 'Final Output',
    
    // Contact Form
    'contact.title': 'Ready to Get Started?',
    'contact.subtitle': 'Tell us about your project and we\'ll get back to you within 24 hours with a custom proposal.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.service': 'Service Type',
    'contact.service.placeholder': 'Select the service you need',
    'contact.service.full': 'Full Production',
    'contact.service.editing': 'Editing/Post only',
    'contact.service.animation': 'Animation only',
    'contact.service.subtitles': 'Subtitles/Translation only',
    'contact.service.grading': 'Color Grading only',
    'contact.service.ai': 'AI Content Generation',
    'contact.details': 'Project Details',
    'contact.details.placeholder': 'Tell us about your project: What type of video do you need? What\'s your timeline? What\'s your budget range? Any specific requirements or style preferences?',
    'contact.submit': 'Send Project Details',
    'contact.response': 'We\'ll respond within 24 hours with a detailed proposal and timeline.',
    'contact.required': '*',
    
    // Project Tags
    'tag.commercial': 'Commercial',
    'tag.branding': 'Branding',
    'tag.narrative': 'Narrative',
    'tag.product': 'Product',
    'tag.marketing': 'Marketing',
    'tag.launch': 'Launch',
    'tag.education': 'Education',
    'tag.ai': 'AI',
    'tag.series': 'Series',
    'tag.music': 'Music',
    'tag.creative': 'Creative',
    'tag.performance': 'Performance',
    'tag.documentary': 'Documentary',
    'tag.storytelling': 'Storytelling',
    'tag.real': 'Real',
    'tag.animation': 'Animation',
    'tag.explainer': 'Explainer',
    'tag.educational': 'Educational',
    
    // Project Titles
    'project.1.title': 'Corporate Brand Story',
    'project.2.title': 'Product Launch Campaign',
    'project.3.title': 'Educational Series',
    'project.4.title': 'Music Video Production',
    'project.5.title': 'Documentary Short',
    'project.6.title': 'Animation Explainer',
    
    // Case Detail Page
    'caseDetail.backToProjects': 'Back to Projects',
    'caseDetail.projectOverview': 'Project Overview',
    'caseDetail.process': 'Process',
    'caseDetail.processNote': 'V2 will include before/after media comparisons and detailed process breakdown',
    'caseDetail.softwareUsed': 'Software Used',
    'caseDetail.projectTags': 'Project Tags',
    'caseDetail.interestedCTA': 'Interested in Similar Work?',
    'caseDetail.wantSimilar': 'I want something similar',
    'caseDetail.videoPlaceholder': 'Project Video Placeholder',
    
    // Services Page
    'services.title': 'Our Services',
    'services.subtitle': 'Professional video production services designed to meet your specific needs. From concept to completion, we deliver exceptional results.',
    'services.timeline': 'Timeline',
    'services.whatsIncluded': 'What\'s Included:',
    'services.moreFeatures': 'more features',
    'services.ourProcess': 'Our Process:',
    'services.getQuote': 'Get Quote for',
    'services.faqTitle': 'Frequently Asked Questions',
    'services.faqSubtitle': 'Common questions about our services and process',
    'services.readyTitle': 'Ready to Start Your Project?',
    'services.readySubtitle': 'Every project is unique. Let\'s discuss your specific needs and create a custom solution that fits your budget and timeline.',
    'services.scheduleConsultation': 'Schedule Consultation',
    'services.viewPortfolio': 'View Portfolio',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.services': 'Serviços',
    'nav.portfolio': 'Portfólio',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Do Roteiro à Tela: Produção de Vídeo Completa e Criativa',
    'hero.subtitle': 'Produção completa ou etapas individuais sob medida para suas necessidades.',
    'hero.cta.projects': 'Ver Projetos Completos',
    'hero.cta.stages': 'Contratar por Etapa',
    
    // Interactive Pipeline
    'pipeline.title': 'Nosso Pipeline de Produção',
    'pipeline.subtitle': 'Cuidamos de cada etapa da produção de vídeo com expertise profissional e ferramentas de ponta',
    'pipeline.cta': 'Ver Projetos →',
    
    // Pipeline Stages
    'stage.1.name': 'Roteiro e Narrativa',
    'stage.1.description': 'Desenvolvimento de conceito e criação narrativa',
    'stage.2.name': 'Captura de Imagens',
    'stage.2.description': 'Filmagem profissional e captura de vídeo',
    'stage.3.name': 'Geração de Imagem IA',
    'stage.3.description': 'Criação de conteúdo visual com inteligência artificial',
    'stage.4.name': 'Edição e Montagem',
    'stage.4.description': 'Edição de vídeo e pós-produção',
    'stage.5.name': 'Correção de Cor',
    'stage.5.description': 'Correção e gradação de cor profissional',
    'stage.6.name': 'Áudio e Música',
    'stage.6.description': 'Produção musical e design de áudio',
    'stage.7.name': 'Motion Graphics',
    'stage.7.description': 'Animação e efeitos visuais',
    'stage.8.name': 'Legendas Multilíngues',
    'stage.8.description': 'Serviços de tradução e legendagem',
    
    // Featured Projects
    'projects.title': 'Projetos em Destaque',
    'projects.subtitle': 'Explore nosso portfólio em diferentes etapas de produção e abordagens criativas',
    'projects.all': 'Todos os Projetos',
    'projects.showing': 'Mostrando projetos com',
    'projects.count': 'projeto',
    'projects.count.plural': 'projetos',
    'projects.empty.title': 'Nenhum projeto encontrado',
    'projects.empty.subtitle': 'Nenhum projeto corresponde à categoria selecionada. Tente selecionar um filtro diferente.',
    'projects.empty.cta': 'Mostrar Todos os Projetos',
    
    // Tools & Workflow
    'tools.title': 'Ferramentas e Fluxo de Trabalho',
    'tools.subtitle': 'Software profissional e processos simplificados para resultados excepcionais',
    'tools.software': 'Software que Utilizamos',
    'tools.process': 'Nosso Processo de Produção',
    'tools.stage.1': 'Pré-Produção',
    'tools.stage.1.desc': 'Roteiro e Planejamento',
    'tools.stage.2': 'Produção',
    'tools.stage.2.desc': 'Filmagem e Captura',
    'tools.stage.3': 'Pós-Produção',
    'tools.stage.3.desc': 'Edição e Efeitos',
    'tools.stage.4': 'Entrega',
    'tools.stage.4.desc': 'Resultado Final',
    
    // Contact Form
    'contact.title': 'Pronto para Começar?',
    'contact.subtitle': 'Conte-nos sobre seu projeto e retornaremos em até 24 horas com uma proposta personalizada.',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.service': 'Tipo de Serviço',
    'contact.service.placeholder': 'Selecione o serviço que você precisa',
    'contact.service.full': 'Produção Completa',
    'contact.service.editing': 'Apenas Edição/Pós',
    'contact.service.animation': 'Apenas Animação',
    'contact.service.subtitles': 'Apenas Legendas/Tradução',
    'contact.service.grading': 'Apenas Correção de Cor',
    'contact.service.ai': 'Geração de Conteúdo IA',
    'contact.details': 'Detalhes do Projeto',
    'contact.details.placeholder': 'Conte-nos sobre seu projeto: Que tipo de vídeo você precisa? Qual é seu cronograma? Qual é sua faixa de orçamento? Algum requisito específico ou preferência de estilo?',
    'contact.submit': 'Enviar Detalhes do Projeto',
    'contact.response': 'Responderemos em até 24 horas com uma proposta detalhada e cronograma.',
    'contact.required': '*',
    
    // Project Tags
    'tag.commercial': 'Comercial',
    'tag.branding': 'Branding',
    'tag.narrative': 'Narrativa',
    'tag.product': 'Produto',
    'tag.marketing': 'Marketing',
    'tag.launch': 'Lançamento',
    'tag.education': 'Educação',
    'tag.ai': 'IA',
    'tag.series': 'Série',
    'tag.music': 'Música',
    'tag.creative': 'Criativo',
    'tag.performance': 'Performance',
    'tag.documentary': 'Documentário',
    'tag.storytelling': 'Narrativa',
    'tag.real': 'Real',
    'tag.animation': 'Animação',
    'tag.explainer': 'Explicativo',
    'tag.educational': 'Educacional',
    
    // Project Titles
    'project.1.title': 'História da Marca Corporativa',
    'project.2.title': 'Campanha de Lançamento de Produto',
    'project.3.title': 'Série Educacional',
    'project.4.title': 'Produção de Videoclipe',
    'project.5.title': 'Documentário Curto',
    'project.6.title': 'Animação Explicativa',
    
    // Case Detail Page
    'caseDetail.backToProjects': 'Voltar aos Projetos',
    'caseDetail.projectOverview': 'Visão Geral do Projeto',
    'caseDetail.process': 'Processo',
    'caseDetail.processNote': 'A versão 2 incluirá comparações de mídia antes/depois e detalhamento completo do processo',
    'caseDetail.softwareUsed': 'Software Utilizado',
    'caseDetail.projectTags': 'Tags do Projeto',
    'caseDetail.interestedCTA': 'Interessado em Trabalho Similar?',
    'caseDetail.wantSimilar': 'Quero algo similar',
    'caseDetail.videoPlaceholder': 'Placeholder do Vídeo do Projeto',
    
    // Services Page
    'services.title': 'Nossos Serviços',
    'services.subtitle': 'Serviços profissionais de produção de vídeo projetados para atender suas necessidades específicas. Do conceito à conclusão, entregamos resultados excepcionais.',
    'services.timeline': 'Cronograma',
    'services.whatsIncluded': 'O que está Incluído:',
    'services.moreFeatures': 'mais recursos',
    'services.ourProcess': 'Nosso Processo:',
    'services.getQuote': 'Orçamento para',
    'services.faqTitle': 'Perguntas Frequentes',
    'services.faqSubtitle': 'Perguntas comuns sobre nossos serviços e processo',
    'services.readyTitle': 'Pronto para Começar seu Projeto?',
    'services.readySubtitle': 'Cada projeto é único. Vamos discutir suas necessidades específicas e criar uma solução personalizada que se adeque ao seu orçamento e cronograma.',
    'services.scheduleConsultation': 'Agendar Consultoria',
    'services.viewPortfolio': 'Ver Portfólio',
  }
};

// Detect browser language
const getBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0] || 'en';
    return browserLang.startsWith('pt') ? 'pt' : 'en';
  }
  return 'en';
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, then browser language
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
        return savedLang;
      }
    }
    return getBrowserLanguage();
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, currentLanguage: language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}