import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();

  const branches = [
    {
      name: t('mainBranch'),
      address: language === 'ar' 
        ? '5 شارع طلعت حرب - وسط البلد - القاهرة'
        : '5 Talaat Harb St, Downtown, Cairo',
      phones: ['02-23953040', '02-23953041'],
      mapUrl: 'https://maps.app.goo.gl/F3KwLaCYj4HdxoPQ8',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
    },
    {
      name: t('nasrCityBranch'),
      address: language === 'ar'
        ? '38 مكرم عبيد بجوار الضرائب - مدينة نصر - القاهرة'
        : '38 Makram Ebeid, near Tax Authority, Nasr City, Cairo',
      phones: ['02-26709906', '02-22737908'],
      mapUrl: 'https://maps.app.goo.gl/8BFYkqpp9ipnPYru5',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
    },
    {
      name: t('alexandriaBranch'),
      address: language === 'ar'
        ? '8 طريق الحرية - عمارة النقل البحري - الدور الخامس - الإسكندرية'
        : '8 El Horreya Road, Maritime Transport Building, 5th Floor, Alexandria',
      phones: ['03-4836441', '03-4836442'],
      mapUrl: 'https://maps.app.goo.gl/D2qdgWuZLpTVC4br8',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069',
    },
    {
      name: t('fayoumBranch'),
      address: language === 'ar'
        ? 'شارع الحرية - برج المهندسين - الدور الرابع - الفيوم'
        : 'El Horreya Street, Engineers Tower, 4th Floor, Fayoum',
      phones: ['01004948147', '01005035978'],
      mapUrl: 'https://maps.app.goo.gl/NGYSnJeCyib5cYXX9',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-white/90">
              {language === 'ar'
                ? 'تواصل معنا في أي من فروعنا، نحن هنا لخدمتك'
                : 'Contact us at any of our branches, we are here to serve you'}
            </p>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {branches.map((branch, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-2 hover:border-accent/50"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={branch.image}
                    alt={branch.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{branch.name}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{branch.address}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div className="space-y-1">
                        {branch.phones.map((phone, phoneIndex) => (
                          <p key={phoneIndex} className="text-muted-foreground">
                            {phone}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-navy font-semibold"
                    asChild
                  >
                    <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                      {t('viewLocation')}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-r from-accent/10 via-gold/10 to-accent/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {language === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === 'ar'
                  ? 'للاستفسارات السريعة والدعم الفوري'
                  : 'For quick inquiries and immediate support'}
              </p>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold"
                asChild
              >
                <a
                  href="https://wa.me/+201281800751"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-2 rtl:mr-0 rtl:ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
