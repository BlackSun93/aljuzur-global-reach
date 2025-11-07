import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';
import { CompanyLocations } from '@/components/CompanyLocations';

export default function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Building2,
      title: language === 'ar' ? 'تأسست في مصر' : 'Established in Egypt',
      description: language === 'ar'
        ? 'شركة رائدة في تداول الأوراق المالية في البورصة المصرية'
        : 'Leading stock brokerage firm on the Egyptian Exchange',
    },
    {
      icon: Users,
      title: language === 'ar' ? 'فريق محترف' : 'Professional Team',
      description: language === 'ar'
        ? 'خبراء ذوو كفاءة عالية في الأسواق المالية'
        : 'Highly qualified experts in financial markets',
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'أحدث التقنيات' : 'Latest Technology',
      description: language === 'ar'
        ? 'منصات تداول حديثة وسريعة'
        : 'Modern and fast trading platforms',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'الموثوقية' : 'Trusted Partner',
      description: language === 'ar'
        ? 'عضو معتمد في البورصة المصرية'
        : 'Licensed member of the Egyptian Exchange',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              {t('aboutTitle')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">{t('ourMission')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('missionDescription')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070"
                  alt="Stock Market Trading"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">{language === 'ar' ? 'تداول احترافي' : 'Professional Trading'}</p>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070"
                  alt="Financial Analysis"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-bold text-lg">{language === 'ar' ? 'تحليل مالي' : 'Financial Analysis'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <CompanyLocations />

      {/* Ownership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="text-3xl font-bold mb-6 text-center text-foreground">{t('ownershipTitle')}</h2>
              <p className="text-xl text-center mb-4 text-accent font-semibold">
                {t('ownershipDescription')}
              </p>
              <p className="text-lg text-center text-muted-foreground leading-relaxed">
                {t('ownershipDetail')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
