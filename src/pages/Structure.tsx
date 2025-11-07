import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';

export default function Structure() {
  const { t, language } = useLanguage();

  const team = [
    {
      name: language === 'ar' ? 'السيد احمد ابو زيد' : 'Mr Ahmed Abu Zeid',
      position: t('chairman'),
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
    },
    {
      name: language === 'ar' ? 'علي عزت' : 'Ali Ezzat',
      position: t('viceChairman'),
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    },
    {
      name: language === 'ar' ? 'محمد ابو النجا' : 'Mohamed Abu El-Naga',
      position: t('managingDirector'),
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    },
    {
      name: language === 'ar' ? 'هيثم يسري' : 'Haitham Yousry',
      position: t('internalAuditor'),
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    },
    {
      name: language === 'ar' ? 'محمد فايز' : 'Mohamed Fayez',
      position: t('financialManager'),
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    },
    {
      name: language === 'ar' ? 'محمد زناتي' : 'Mohamed Zanaty',
      position: t('tradingManager'),
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    },
    {
      name: language === 'ar' ? 'أحمد أيوب' : 'Ahmed Ayoub',
      position: t('operationsManager'),
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
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
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-accent/20 shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
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
