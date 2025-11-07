import { Card } from './ui/card';
import { Shield, Zap, Award, HeadphonesIcon, TrendingUp, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const WhyChooseUs = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: language === 'ar' ? 'أمان متقدم' : 'Advanced Security',
      description: language === 'ar'
        ? 'حماية متعددة الطبقات لأموالك وبياناتك الشخصية'
        : 'Multi-layered protection for your funds and personal data',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'تنفيذ فوري' : 'Instant Execution',
      description: language === 'ar'
        ? 'تنفيذ صفقاتك بسرعة فائقة دون تأخير'
        : 'Execute your trades with lightning-fast speed',
      color: 'from-accent to-gold',
    },
    {
      icon: Award,
      title: language === 'ar' ? 'موثوقية عالية' : 'High Reliability',
      description: language === 'ar'
        ? 'أكثر من 25 عامًا من الخبرة في الأسواق المالية'
        : 'Over 25 years of experience in financial markets',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: HeadphonesIcon,
      title: language === 'ar' ? 'دعم 24/7' : '24/7 Support',
      description: language === 'ar'
        ? 'فريق دعم متاح على مدار الساعة لمساعدتك'
        : 'Support team available round the clock to assist you',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: TrendingUp,
      title: language === 'ar' ? 'أدوات احترافية' : 'Professional Tools',
      description: language === 'ar'
        ? 'أدوات تحليل متقدمة ومؤشرات فنية احترافية'
        : 'Advanced analysis tools and professional indicators',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Lock,
      title: language === 'ar' ? 'رقابة معتمدة' : 'Regulated',
      description: language === 'ar'
        ? 'مرخص ومنظم من قبل الهيئات المالية'
        : 'Licensed and regulated by financial authorities',
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground animate-fade-in-up">
          {language === 'ar' ? 'لماذا تختارنا؟' : 'Why Choose Us?'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === 'ar'
            ? 'نقدم لك أفضل تجربة تداول مع أعلى معايير الأمان والاحترافية'
            : 'We provide you with the best trading experience with the highest standards of security and professionalism'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-8 border-2 border-accent/20 hover:border-accent/50 hover-lift transition-all duration-500 animate-scale-in relative overflow-hidden group bg-gradient-to-br from-card via-card to-muted/20"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5`}></div>
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-6 relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                {/* Glow effect */}
                <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Corner decoration */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all duration-500"></div>
          </Card>
        ))}
      </div>
    </div>
  );
};
