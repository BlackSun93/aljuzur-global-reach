import { useEffect, useRef } from 'react';

export const StockTicker = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: 'FOREXCOM:XAUUSD', title: 'Gold' },
        { proName: 'FX_IDC:USDEGP', title: 'USD/EGP' },
        { proName: 'EGX:EGX30', title: 'EGX 30' },
        { proName: 'EGX70EWI', title: 'EGX 70' },
        { proName: 'EGX:ETEL', title: 'المصرية للاتصالات' },
        { proName: 'EGX:ORWE', title: 'أوراسكوم' },
        { proName: 'EGX:TMGH', title: 'طلعت مصطفى' },
        { proName: 'EGX:HRHO', title: 'هيرميس' },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: 'adaptive',
      colorTheme: 'dark',
      locale: 'en',
    });

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full bg-navy border-b border-navy-light">
      <div ref={containerRef} className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};
