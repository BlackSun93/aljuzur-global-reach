import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    structure: 'Team Structure',
    reports: 'Reports',
    contact: 'Contact Us',
    
    // Hero Section
    heroTitle: 'The Roots',
    heroSubtitle: 'Brokerage Firm',
    heroDescription: 'Your trusted partner in the Egyptian stock market with over 25 years of experience',
    startTrading: 'Start Trading',
    learnMore: 'Learn More',
    
    // About
    aboutTitle: 'About The Roots',
    aboutDescription: 'At the heart of the growing financial market, The Roots Brokerage stands out as a trusted investment partner with experience and strategic vision that meets investors\' aspirations for growth and stability.',
    ourMission: 'Our Mission',
    missionDescription: 'We strive to be the solid foundation for your investments by providing distinguished financial brokerage services, supported by a team of highly qualified experts and the latest technological systems.',
    
    // Ownership
    ownershipTitle: 'Ownership',
    ownershipDescription: 'The owner is Mr. Bader Al-Kharafi with 100% ownership',
    ownershipDetail: 'Mr. Bader Nasser Al-Kharafi has over twenty years of experience in the financial, banking, industrial, and telecommunications sectors.',
    
    // Services
    servicesTitle: 'Our Services',
    tradingService: 'Stock Trading',
    tradingDescription: 'Buy and sell stocks with ease',
    platformService: 'Trading Platform',
    platformDescription: 'Advanced web and mobile trading platform',
    analysisService: 'Technical Analysis',
    analysisDescription: 'Daily reports and market insights',
    
    // Team
    teamTitle: 'Our Team',
    chairman: 'Chairman of the Board',
    viceChairman: 'Vice Chairman',
    managingDirector: 'Managing Director',
    internalAuditor: 'Internal Auditor',
    financialManager: 'Financial Manager',
    tradingManager: 'Trading Manager',
    operationsManager: 'Operations Manager',
    
    // Reports
    reportsTitle: 'Daily Technical Analysis Reports',
    downloadReport: 'Download Report',
    
    // Contact
    contactTitle: 'Contact Us',
    mainBranch: 'Main Branch',
    nasrCityBranch: 'Nasr City Branch',
    alexandriaBranch: 'Alexandria Branch',
    fayoumBranch: 'Fayoum Branch',
    viewLocation: 'View Location',
    
    // Footer
    allRightsReserved: 'All Rights Reserved',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'عن الشركة',
    structure: 'الهيكل التنظيمي',
    reports: 'التقارير',
    contact: 'تواصل معنا',
    
    // Hero Section
    heroTitle: 'الجذور',
    heroSubtitle: 'لتداول الأوراق المالية',
    heroDescription: 'شريكك الموثوق في سوق الأوراق المالية المصرية مع خبرة تزيد عن 25 عامًا',
    startTrading: 'ابدأ التداول',
    learnMore: 'اعرف المزيد',
    
    // About
    aboutTitle: 'عن شركة الجذور',
    aboutDescription: 'في قلب سوق المال المتنامي، تبرز شركة الجذور لتداول الأوراق المالية كشريك استثماري موثوق يتمتع بخبرة ورؤية استراتيجية تُلبي تطلعات المستثمرين نحو النمو والاستقرار.',
    ourMission: 'رؤيتنا',
    missionDescription: 'نسعى لأن نكون الجذر الراسخ لاستثماراتكم، بتقديم خدمات وساطة مالية متميزة، مدعومة بفريق من الخبراء ذوي الكفاءة العالية، وأحدث الأنظمة التكنولوجية.',
    
    // Ownership
    ownershipTitle: 'الملكية',
    ownershipDescription: 'المالك هو السيد بدر الخرافي بنسبة 100%',
    ownershipDetail: 'لدى السيد/ بدر ناصر الخرافي خبرة تمتد لأكثر من عشرين عامًا في القطاع المالي والمصرفي والصناعي، بالإضافة إلى قطاع الاتصالات.',
    
    // Services
    servicesTitle: 'خدماتنا',
    tradingService: 'تداول الأسهم',
    tradingDescription: 'شراء وبيع الأسهم بسهولة',
    platformService: 'منصة التداول',
    platformDescription: 'منصة تداول متقدمة عبر الويب والموبايل',
    analysisService: 'التحليل الفني',
    analysisDescription: 'تقارير يومية ورؤى السوق',
    
    // Team
    teamTitle: 'فريق العمل',
    chairman: 'رئيس مجلس الإدارة',
    viceChairman: 'نائب رئيس مجلس الإدارة',
    managingDirector: 'العضو المنتدب',
    internalAuditor: 'المراقب الداخلي',
    financialManager: 'المدير المالي',
    tradingManager: 'مدير التداول',
    operationsManager: 'مدير العمليات',
    
    // Reports
    reportsTitle: 'التقرير اليومي للتحليل الفني',
    downloadReport: 'تحميل التقرير',
    
    // Contact
    contactTitle: 'تواصل معنا',
    mainBranch: 'الفرع الرئيسي',
    nasrCityBranch: 'فرع مدينة نصر',
    alexandriaBranch: 'فرع الإسكندرية',
    fayoumBranch: 'فرع الفيوم',
    viewLocation: 'عرض الموقع',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
