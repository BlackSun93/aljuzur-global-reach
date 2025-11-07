import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { TrendingUp, BarChart3, FileText, ArrowRight, Sparkles, Play, Award, Shield, Zap, HeadphonesIcon, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MarketStats } from '@/components/MarketStats';

export default function Home() {
  const { t, language } = useLanguage();

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
    <div className="min-h-screen -mt-[206px] pt-[206px]">
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070')] bg-cover bg-center opacity-10"></div>

        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in-up">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <img
                  src={new URL('@/assets/logo.png', import.meta.url).href}
                  alt="The Roots Logo"
                  className="h-32 md:h-40 w-auto animate-glow drop-shadow-[0_0_40px_rgba(250,204,21,0.5)]"
                />
              </div>

              <p className="text-xl md:text-2xl mb-4 text-accent font-semibold">
                {t('heroSubtitle')}
              </p>

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
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-navy font-bold text-lg px-10 py-7 transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg"
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

      {/* Why Choose Us & Services - Compact Combined Section */}
      <section className="py-16 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Why Choose Us - Compact */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: Shield,
                title: language === 'ar' ? 'أمان متقدم' : 'Advanced Security',
                description: language === 'ar' ? 'حماية متعددة الطبقات لأموالك وبياناتك' : 'Multi-layered protection for your funds and data',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Zap,
                title: language === 'ar' ? 'تنفيذ فوري' : 'Instant Execution',
                description: language === 'ar' ? 'تنفيذ صفقاتك بسرعة فائقة' : 'Execute trades with lightning speed',
                color: 'from-accent to-gold'
              },
              {
                icon: Award,
                title: language === 'ar' ? 'موثوقية عالية' : 'High Reliability',
                description: language === 'ar' ? 'أكثر من 25 عامًا من الخبرة' : 'Over 25 years of experience',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: HeadphonesIcon,
                title: language === 'ar' ? 'دعم 24/7' : '24/7 Support',
                description: language === 'ar' ? 'فريق دعم متاح على مدار الساعة' : 'Support team available round the clock',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: TrendingUp,
                title: language === 'ar' ? 'أدوات احترافية' : 'Professional Tools',
                description: language === 'ar' ? 'أدوات تحليل متقدمة ومؤشرات فنية' : 'Advanced analysis tools and indicators',
                color: 'from-orange-500 to-orange-600'
              },
              {
                icon: Lock,
                title: language === 'ar' ? 'رقابة معتمدة' : 'Regulated',
                description: language === 'ar' ? 'مرخص من الهيئات المالية' : 'Licensed by financial authorities',
                color: 'from-red-500 to-red-600'
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-2 border-accent/20 hover:border-accent/50 hover-lift transition-all duration-300 animate-scale-in relative overflow-hidden group bg-gradient-to-br from-card to-muted/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-md mb-4 transform transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Services - Compact */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              {t('servicesTitle')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover-lift card-glow border-2 hover:border-accent/50 bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur-sm animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center mb-4 shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative">
                    <service.icon className="w-8 h-8 text-navy relative z-10" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent to-gold blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section - Compact */}
      <section className="py-16 bg-background relative overflow-hidden">
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
                    src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070"
                    alt="Egyptian Stock Exchange Trading"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-2xl font-bold drop-shadow-lg">{language === 'ar' ? 'البورصة المصرية' : 'Egyptian Stock Exchange'}</p>
                    <p className="text-sm mt-2 opacity-90">{language === 'ar' ? 'شريكك الموثوق في التداول' : 'Your Trusted Trading Partner'}</p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-16 bg-gradient-to-r from-navy via-navy-light to-navy text-white relative overflow-hidden">
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
