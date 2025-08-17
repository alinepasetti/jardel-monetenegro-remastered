import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from '../contexts/LanguageContext';

export function FinalCTA() {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-gray-50" id="contact">
      <div className="max-w-[1440px] mx-auto px-4 md:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">{t('contact.title')}</h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <Card className="p-8 md:p-12 bg-white border-2 border-gray-200 hover:border-slate-300 transition-all duration-300 hover:shadow-xl">
            <form className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-3 text-black font-medium">{t('contact.name')} {t('contact.required')}</label>
                  <Input 
                    placeholder={t('contact.name')} 
                    className="h-12 border-gray-300 focus:border-slate-600 focus:ring-slate-600/20"
                  />
                </div>
                <div>
                  <label className="block mb-3 text-black font-medium">{t('contact.email')} {t('contact.required')}</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="h-12 border-gray-300 focus:border-slate-600 focus:ring-slate-600/20"
                  />
                </div>
              </div>
              
              <div>
                <label className="block mb-3 text-black font-medium">{t('contact.service')} {t('contact.required')}</label>
                <Select>
                  <SelectTrigger className="h-12 border-gray-300 focus:border-slate-600 focus:ring-slate-600/20">
                    <SelectValue placeholder={t('contact.service.placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-production">{t('contact.service.full')}</SelectItem>
                    <SelectItem value="editing-post">{t('contact.service.editing')}</SelectItem>
                    <SelectItem value="animation">{t('contact.service.animation')}</SelectItem>
                    <SelectItem value="subtitles">{t('contact.service.subtitles')}</SelectItem>
                    <SelectItem value="color-grading">{t('contact.service.grading')}</SelectItem>
                    <SelectItem value="ai-content">{t('contact.service.ai')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block mb-3 text-black font-medium">{t('contact.details')} {t('contact.required')}</label>
                <Textarea 
                  placeholder={t('contact.details.placeholder')}
                  rows={6}
                  className="resize-none border-gray-300 focus:border-slate-600 focus:ring-slate-600/20"
                />
              </div>
              
              <div className="text-center pt-4">
                <Button 
                  className="bg-slate-600 text-white hover:bg-slate-700 px-12 py-4 h-14 text-lg transition-all duration-200 hover:shadow-lg hover:shadow-slate-600/25 cursor-pointer"
                  size="lg"
                >
                  {t('contact.submit')}
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  {t('contact.response')}
                </p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}