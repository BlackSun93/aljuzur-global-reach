import { Card } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Testimonials = () => {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: language === 'ar' ? 'أحمد محمود' : 'Ahmed Mahmoud',
      role: language === 'ar' ? 'مستثمر محترف' : 'Professional Investor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: language === 'ar'
        ? 'أفضل منصة تداول استخدمتها على الإطلاق. خدمة ممتازة وسرعة في التنفيذ.'
        : 'The best trading platform I have ever used. Excellent service and fast execution.',
    },
    {
      name: language === 'ar' ? 'سارة علي' : 'Sarah Ali',
      role: language === 'ar' ? 'متداولة يومية' : 'Day Trader',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: language === 'ar'
        ? 'دعم فني رائع ومنصة سهلة الاستخدام. أنصح بها بشدة!'
        : 'Amazing technical support and user-friendly platform. Highly recommended!',
    },
    {
      name: language === 'ar' ? 'محمد حسن' : 'Mohamed Hassan',
      role: language === 'ar' ? 'محلل مالي' : 'Financial Analyst',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: language === 'ar'
        ? 'أدوات تحليل متقدمة وأسعار تنافسية. تجربة تداول احترافية.'
        : 'Advanced analysis tools and competitive prices. Professional trading experience.',
    },
    {
      name: language === 'ar' ? 'فاطمة خالد' : 'Fatima Khaled',
      role: language === 'ar' ? 'مستثمرة' : 'Investor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: language === 'ar'
        ? 'شركة موثوقة مع سجل حافل. استثماراتي في أيد أمينة.'
        : 'Trustworthy company with proven track record. My investments are in safe hands.',
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-foreground animate-fade-in-up">
          {language === 'ar' ? 'ماذا يقول عملاؤنا' : 'What Our Clients Say'}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {language === 'ar'
            ? 'آراء عملائنا الكرام حول خدماتنا'
            : 'Testimonials from our valued clients about our services'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="p-6 border-2 border-accent/20 hover:border-accent/50 hover-lift transition-all duration-300 animate-scale-in relative overflow-hidden group bg-gradient-to-br from-card via-card to-accent/5"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Quote decoration */}
            <div className="absolute -top-2 -right-2 w-20 h-20 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
            <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20 group-hover:text-accent/40 transition-colors duration-300" />

            <div className="relative z-10">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-accent/30 group-hover:ring-accent/60 transition-all duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-card flex items-center justify-center">
                    <Star className="w-3 h-3 text-navy fill-navy" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
