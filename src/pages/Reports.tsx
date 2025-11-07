import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Calendar } from 'lucide-react';

export default function Reports() {
  const { t, language } = useLanguage();

  const reports = [
    {
      title: language === 'ar' ? 'التقرير اليومي - نوفمبر 2025' : 'Daily Report - November 2025',
      date: '2025-11-06',
      url: 'https://therootsbh.com/pdf/6-11-2025.pdf',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
              {t('reportsTitle')}
            </h1>
            <p className="text-xl text-white/90">
              {language === 'ar'
                ? 'تقارير فنية يومية لمساعدتك في اتخاذ قرارات استثمارية مدروسة'
                : 'Daily technical reports to help you make informed investment decisions'}
            </p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {reports.map((report, index) => (
              <Card
                key={index}
                className="p-8 mb-6 hover:shadow-elegant transition-all duration-300 border-2 hover:border-accent/50"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{report.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{report.date}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-accent hover:bg-accent/90 text-navy font-semibold"
                    asChild
                  >
                    <a href={report.url} target="_blank" rel="noopener noreferrer" download>
                      <Download className="w-4 h-4 mr-2 rtl:mr-0 rtl:ml-2" />
                      {t('downloadReport')}
                    </a>
                  </Button>
                </div>
              </Card>
            ))}

            {/* Info Card */}
            <Card className="p-8 bg-muted/30 border-2 border-accent/20 mt-12">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {language === 'ar' ? 'تقارير محدثة يوميًا' : 'Daily Updated Reports'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'ar'
                    ? 'نقوم بنشر تقارير التحليل الفني يوميًا لمساعدتك على متابعة السوق واتخاذ قرارات مستنيرة. تحقق من هذه الصفحة بانتظام للحصول على أحدث التحليلات.'
                    : 'We publish technical analysis reports daily to help you track the market and make informed decisions. Check this page regularly for the latest analyses.'}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
