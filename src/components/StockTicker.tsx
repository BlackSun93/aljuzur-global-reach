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
        { proName: 'EGX:EGX30', title: 'EGX 30 Index' },
        { proName: 'EGX70EWI', title: 'EGX 70 Index' },
        { proName: 'EGX:COMI', title: 'Commercial International Bank' },
        { proName: 'EGX:ETEL', title: 'Telecom Egypt' },
        { proName: 'EGX:HRHO', title: 'EFG Hermes' },
        { proName: 'EGX:TMGH', title: 'Talaat Moustafa Group' },
        { proName: 'EGX:ORWE', title: 'Orascom Construction' },
        { proName: 'EGX:EKHO', title: 'El Kahera Housing' },
        { proName: 'FX_IDC:USDEGP', title: 'USD/EGP' },
        { proName: 'FOREXCOM:XAUUSD', title: 'Gold' },
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
    <div className="w-full bg-navy border-b-2 border-accent/30 shadow-lg relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-gold/5 to-accent/5 animate-shimmer"></div>
      <div ref={containerRef} className="tradingview-widget-container min-h-[46px] relative z-10">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};
