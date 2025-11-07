import { useEffect, useRef } from 'react';

export const MarketChartHeader = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: 'EGX:EGX30',
      width: '100%',
      height: '100%',
      locale: 'en',
      dateRange: '1D',
      colorTheme: 'dark',
      isTransparent: false,
      autosize: true,
      largeChartUrl: '',
    });

    chartRef.current.appendChild(script);

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full bg-navy border-b border-accent/20 shadow-lg">
      <div ref={chartRef} className="tradingview-widget-container" style={{ height: '80px' }}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};
