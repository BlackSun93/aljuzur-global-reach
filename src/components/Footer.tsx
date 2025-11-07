import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: language === 'ar' ? 'من نحن' : 'About Us', path: '/about' },
      { name: language === 'ar' ? 'هيكلنا' : 'Structure', path: '/structure' },
      { name: language === 'ar' ? 'التقارير' : 'Reports', path: '/reports' },
      { name: language === 'ar' ? 'اتصل بنا' : 'Contact', path: '/contact' },
    ],
    services: [
      { name: language === 'ar' ? 'خدمات التداول' : 'Trading Services', path: '/' },
      { name: language === 'ar' ? 'منصة التداول' : 'Trading Platform', path: '/' },
      { name: language === 'ar' ? 'التحليلات' : 'Market Analysis', path: '/' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(250,204,21,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(250,204,21,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={new URL('@/assets/logo.png', import.meta.url).href}
                  alt="The Roots Logo"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/70 mb-6 leading-relaxed max-w-md">
                {language === 'ar'
                  ? 'شركة الجذور للوساطة المالية - رائدة في عالم الأسواق المالية منذ 1995. نقدم خدمات تداول احترافية وموثوقة.'
                  : 'The Roots Financial Brokerage - Leading in financial markets since 1995. We provide professional and reliable trading services.'}
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="tel:+20123456789" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span dir="ltr">+20 123 456 789</span>
                </a>
                <a href="mailto:info@theroots.com" className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>info@theroots.com</span>
                </a>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span>{language === 'ar' ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-accent">
                {language === 'ar' ? 'الشركة' : 'Company'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-accent">
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} {language === 'ar' ? 'الجذور' : 'The Roots'}. {t('allRightsReserved')}
              <span className="mx-2">|</span>
              <span className="text-white/40">
                {language === 'ar' ? 'مرخصة من قبل الهيئة المصرية للرقابة المالية' : 'Licensed by Egyptian Financial Supervisory Authority'}
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                >
                  <social.icon className="w-5 h-5 text-white/70 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
