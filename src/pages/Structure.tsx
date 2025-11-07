import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function Structure() {
  const { t, language } = useLanguage();

  const team = [
    {
      name: language === 'ar' ? 'احمد ابو زيد' : 'Ahmed Abu Zeid',
      position: t('chairman'),
    },
    {
      name: language === 'ar' ? 'علي عزت' : 'Ali Ezzat',
      position: t('viceChairman'),
    },
    {
      name: language === 'ar' ? 'محمد ابو النجا' : 'Mohamed Abu El-Naga',
      position: t('managingDirector'),
    },
    {
      name: language === 'ar' ? 'هيثم يسري' : 'Haitham Yousry',
      position: t('internalAuditor'),
    },
    {
      name: language === 'ar' ? 'محمد فايز' : 'Mohamed Fayez',
      position: t('financialManager'),
    },
    {
      name: language === 'ar' ? 'محمد زناتي' : 'Mohamed Zanaty',
      position: t('tradingManager'),
    },
    {
      name: language === 'ar' ? 'أحمد أيوب' : 'Ahmed Ayoub',
      position: t('operationsManager'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              {t('teamTitle')}
            </h1>
            <p className="text-xl text-white/90">
              {language === 'ar' 
                ? 'فريق من الخبراء المتخصصين لخدمتكم'
                : 'A team of specialized experts at your service'}
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-gold rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{member.name}</h3>
                  <p className="text-accent font-semibold">{member.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              {language === 'ar' ? 'هيكل تنظيمي محترف' : 'Professional Organization'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {language === 'ar'
                ? 'يتكون فريقنا من محترفين ذوي خبرة عالية في مجال الأسواق المالية، يعملون معًا لتقديم أفضل الخدمات لعملائنا وضمان نجاح استثماراتهم.'
                : 'Our team consists of highly experienced professionals in the field of financial markets, working together to provide the best services to our clients and ensure the success of their investments.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
