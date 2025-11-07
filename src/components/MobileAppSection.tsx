import { Card } from './ui/card';
import { Smartphone, Download, TrendingUp, Bell, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const MobileAppSection = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'تداول فوري' : 'Instant Trading',
      description: language === 'ar' ? 'تداول في أي وقت ومن أي مكان' : 'Trade anytime, anywhere',
    },
    {
      icon: Bell,
      title: language === 'ar' ? 'تنبيهات فورية' : 'Real-time Alerts',
      description: language === 'ar' ? 'احصل على إشعارات فورية للأسعار' : 'Get instant price notifications',
    },
    {
      icon: Shield,
      title: language === 'ar' ? 'آمن تماماً' : 'Fully Secure',
      description: language === 'ar' ? 'حماية متقدمة لحسابك' : 'Advanced account protection',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'سريع وسهل' : 'Fast & Easy',
      description: language === 'ar' ? 'واجهة بسيطة وسهلة الاستخدام' : 'Simple and user-friendly interface',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text & Buttons */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent mb-6 backdrop-blur-sm">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-semibold">
                  {language === 'ar' ? 'التطبيق المحمول' : 'Mobile App'}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {language === 'ar' ? 'تداول في أي مكان' : 'Trade On The Go'}
              </h2>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {language === 'ar'
                  ? 'حمّل تطبيق الجذور للتداول وابدأ الاستثمار من هاتفك المحمول بكل سهولة وأمان'
                  : 'Download The Roots trading app and start investing from your mobile device with ease and security'}
              </p>

              {/* App Store Badges */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
                <a
                  href="https://apps.apple.com/eg/app/the-roots/id1511134748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-white/70">{language === 'ar' ? 'حمّله من' : 'Download on the'}</p>
                      <p className="text-sm font-bold">App Store</p>
                    </div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.therootsbh.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs text-white/70">{language === 'ar' ? 'متاح على' : 'GET IT ON'}</p>
                      <p className="text-sm font-bold">Google Play</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side - Phone Mockup & Features */}
            <div className="order-1 md:order-2">
              {/* Phone Mockup Visual */}
              <div className="relative max-w-sm mx-auto">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-accent to-gold p-1 rounded-[3rem] shadow-2xl">
                    <div className="bg-navy rounded-[2.8rem] p-6">
                      <div className="space-y-4">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm animate-scale-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/20 to-gold/20 flex items-center justify-center flex-shrink-0">
                              <feature.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-1">{feature.title}</h4>
                              <p className="text-xs text-white/60">{feature.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Glow Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-3xl rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
