import { Card } from './ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const CompanyLocations = () => {
  const { language } = useLanguage();

  const locations = [
    {
      city: language === 'ar' ? 'القاهرة - وسط البلد' : 'Cairo Downtown',
      address: language === 'ar' ? '5 شارع طلعت حرب، الدور 3 (أمام عمر أفندي)' : '5 Talaat Harb St., 3rd Floor (in front of Omar Effendi)',
      area: 'Downtown Cairo',
    },
    {
      city: language === 'ar' ? 'الإسكندرية' : 'Alexandria',
      address: language === 'ar' ? '8 شارع أحمد عرابي، المنشية' : '8 Ahmed Orabi St., El Mansheya',
      area: 'Alexandria',
    },
    {
      city: language === 'ar' ? 'المعادي' : 'Maadi',
      address: language === 'ar' ? '148 أ شارع النصر، المعادي الجديدة' : '148 A Al Nasr St., New Maadi',
      area: 'Maadi, Cairo',
    },
    {
      city: language === 'ar' ? 'المقطم' : 'Mokattam',
      address: language === 'ar' ? 'المقطم، القاهرة' : 'Mokattam, Cairo',
      area: 'Mokattam',
    },
    {
      city: language === 'ar' ? 'مدينة نصر' : 'Nasr City',
      address: language === 'ar' ? '38 شارع مكرم عبيد' : '38 Makram Ebaid St.',
      area: 'Nasr City, Cairo',
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {language === 'ar' ? 'فروعنا' : 'Our Locations'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {language === 'ar'
              ? 'نتواجد في أهم المناطق لخدمتكم بشكل أفضل'
              : 'We are located in key areas to serve you better'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-accent/20 hover:border-accent/50 hover-lift transition-all duration-300 animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-accent transition-colors">
                    {location.city}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{location.address}</p>
                  <p className="text-xs text-muted-foreground/70">{location.area}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 border-2 border-accent/30">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{language === 'ar' ? 'اتصل بنا' : 'Call Us'}</p>
                  <a href="tel:+20123456789" className="font-semibold text-foreground hover:text-accent transition-colors">
                    +20 123 456 789
                  </a>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">{language === 'ar' ? 'راسلنا' : 'Email Us'}</p>
                  <a href="mailto:info@theroots.com" className="font-semibold text-foreground hover:text-accent transition-colors">
                    info@theroots.com
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
