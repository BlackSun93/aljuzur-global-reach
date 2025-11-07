import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Building2, Users, TrendingUp, Award } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Building2,
      title: language === 'ar' ? 'تأسست عام 1995' : 'Established 1995',
      description: language === 'ar' 
        ? 'أكثر من 25 عامًا من الخبرة في السوق المصري'
        : 'Over 25 years of experience in the Egyptian market',
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
      title: language === 'ar' ? 'الموثوقية' : 'Reliability',
      description: language === 'ar'
        ? 'عضو في شركات BNK القابضة الكويتية'
        : 'Member of BNK Holding Kuwait',
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
              <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=2070"
                  alt="Trading Floor"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070"
                  alt="Analytics"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
