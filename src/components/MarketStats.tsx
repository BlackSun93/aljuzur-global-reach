import { Card } from './ui/card';
import { TrendingUp, Users, DollarSign, Globe, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const MarketStats = () => {
  const { language } = useLanguage();

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: language === 'ar' ? 'عميل نشط' : 'Active Clients',
      trend: '+12.5%',
      positive: true,
    },
    {
      icon: DollarSign,
      value: '$2.5B+',
      label: language === 'ar' ? 'حجم التداول اليومي' : 'Daily Trading Volume',
      trend: '+8.3%',
      positive: true,
    },
    {
      icon: Globe,
      value: '15+',
      label: language === 'ar' ? 'سوق عالمي' : 'Global Markets',
      trend: '+3',
      positive: true,
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: language === 'ar' ? 'وقت التشغيل' : 'Platform Uptime',
      trend: '+0.1%',
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="p-6 border-2 border-accent/20 hover:border-accent/50 bg-gradient-to-br from-card via-card to-accent/5 hover-lift transition-all duration-300 animate-scale-in relative overflow-hidden group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                stat.positive ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-destructive/10 group-hover:bg-destructive/20'
              }`}>
                <stat.icon className={`w-6 h-6 ${stat.positive ? 'text-accent' : 'text-destructive'}`} />
              </div>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                stat.positive ? 'bg-accent/10 text-accent' : 'bg-destructive/10 text-destructive'
              }`}>
                {stat.positive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.trend}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
