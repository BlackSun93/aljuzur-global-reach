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
        { proName: 'NASDAQ:AAPL', title: 'Apple' },
        { proName: 'NASDAQ:MSFT', title: 'Microsoft' },
        { proName: 'NASDAQ:GOOGL', title: 'Google' },
        { proName: 'NASDAQ:TSLA', title: 'Tesla' },
        { proName: 'EGX:ETEL', title: 'المصرية للاتصالات' },
        { proName: 'EGX:ORWE', title: 'أوراسكوم' },
        { proName: 'EGX:TMGH', title: 'طلعت مصطفى' },
        { proName: 'EGX:HRHO', title: 'هيرميس' },
        { proName: 'BINANCE:BTCUSD', title: 'Bitcoin' },
        { proName: 'BINANCE:ETHUSD', title: 'Ethereum' },
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
