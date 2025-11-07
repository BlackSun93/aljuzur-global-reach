import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-white/60">
              © {currentYear} {language === 'ar' ? 'الجذور' : 'The Roots'}. {t('allRightsReserved')}
            </p>
          </div>
          <div className="text-2xl font-bold">
            <span className="text-accent">{language === 'ar' ? 'الجذور' : 'THE ROOTS'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
