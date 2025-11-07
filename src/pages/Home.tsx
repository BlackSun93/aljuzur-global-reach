import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, BarChart3, FileText, ArrowRight, Sparkles, Play, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarketStats } from '@/components/MarketStats';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { MarketDashboard } from '@/components/MarketDashboard';
import { TradingChart } from '@/components/TradingChart';
import { Testimonials } from '@/components/Testimonials';
import { useState } from 'react';

export default function Home() {
  const { t } = useLanguage();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

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
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070')] bg-cover bg-center opacity-10"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-6 animate-scale-in backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {t('heroSubtitle')}
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 text-white drop-shadow-[0_0_40px_rgba(250,204,21,0.4)] leading-tight">
                <span className="inline-block animate-glow">{t('heroTitle')}</span>
              </h1>

              <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t('heroDescription')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-navy font-bold text-lg px-10 py-7 shadow-glow transition-all duration-300 hover:scale-105 hover:shadow-[0_0_60px_rgba(250,204,21,0.6)] group relative overflow-hidden"
                  asChild
                >
                  <a href="https://www.therootsbh.com/etrade/newlogin.aspx" target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10">{t('startTrading')}</span>
                    <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-gold to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-navy font-bold text-lg px-10 py-7 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
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

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[120px]"></div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Market Stats Section - NEW */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <MarketStats />
        </div>
      </section>

      {/* Why Choose Us Section - NEW */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <WhyChooseUs />
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground animate-fade-in-up">
              {t('servicesTitle')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive trading solutions tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 hover-lift card-glow border-2 hover:border-accent/50 bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm animate-scale-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-gold rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative">
                    <service.icon className="w-10 h-10 text-navy relative z-10" />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent to-gold blur-xl opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Dashboard Section - NEW */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <MarketDashboard />
        </div>
      </section>

      {/* Trading Chart Section - NEW */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <TradingChart />
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/30">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      {/* About Preview Section - Enhanced */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent mb-6 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-semibold">About Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                  {t('aboutTitle')}
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t('aboutDescription')}
                </p>
                <Button asChild className="bg-navy hover:bg-navy-light group">
                  <Link to="/about">
                    {t('learnMore')}
                    <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-elegant transform transition-transform duration-500 hover:scale-105 hover:rotate-2 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?q=80&w=1973"
                    alt="Trading"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-2xl">
                      <Play className="w-8 h-8 text-navy ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-24 bg-gradient-to-r from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.05)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent mb-6 backdrop-blur-sm">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Trusted Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('ownershipTitle')}</h2>
            <p className="text-2xl mb-4 text-accent font-semibold">{t('ownershipDescription')}</p>
            <p className="text-lg mb-10 max-w-3xl mx-auto text-white/90 leading-relaxed">
              {t('ownershipDetail')}
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-navy font-bold px-10 py-7 group relative overflow-hidden"
              asChild
            >
              <a
                href="https://www.boursakuwait.com.kw/ar/board-of-directors/bader-alkharafi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10">{t('learnMore')}</span>
                <ArrowRight className="ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-gold to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
