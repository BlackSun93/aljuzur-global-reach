import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, BarChart3, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: t('tradingService'),
      description: t('tradingDescription'),
    },
    {
      icon: BarChart3,
      title: t('platformService'),
      description: t('platformDescription'),
    },
    {
      icon: FileText,
      title: t('analysisService'),
      description: t('analysisDescription'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                {t('heroTitle')}
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-accent font-semibold">
                {t('heroSubtitle')}
              </p>
              <p className="text-lg md:text-xl mb-10 text-white/80 max-w-2xl mx-auto">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-navy font-semibold text-lg px-8 py-6 shadow-glow"
                  asChild
                >
                  <a href="https://www.therootsbh.com/etrade/newlogin.aspx" target="_blank" rel="noopener noreferrer">
                    {t('startTrading')}
                    <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/about">
                    {t('learnMore')}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">{t('servicesTitle')}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">{t('aboutTitle')}</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('aboutDescription')}
                </p>
                <Button asChild className="bg-navy hover:bg-navy-light">
                  <Link to="/about">
                    {t('learnMore')}
                    <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
                  <img
                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=1973"
                    alt="Trading"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy-light to-navy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('ownershipTitle')}</h2>
          <p className="text-xl mb-4 text-accent font-semibold">{t('ownershipDescription')}</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-white/80">
            {t('ownershipDetail')}
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-navy font-semibold"
            asChild
          >
            <a
              href="https://www.boursakuwait.com.kw/ar/board-of-directors/bader-alkharafi"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('learnMore')}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
