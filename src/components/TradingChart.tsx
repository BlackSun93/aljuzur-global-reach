import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { BarChart3 } from 'lucide-react';

export const TradingChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'EGX:EGX30',
      interval: 'D',
      timezone: 'Africa/Cairo',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      backgroundColor: 'rgba(19, 23, 34, 1)',
      gridColor: 'rgba(240, 243, 250, 0.06)',
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: true,
      calendar: false,
      support_host: 'https://www.tradingview.com',
    });

    chartRef.current.appendChild(script);

    return () => {
      if (chartRef.current) {
        chartRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center shadow-lg">
          <BarChart3 className="w-6 h-6 text-navy" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Advanced Trading Chart</h3>
          <p className="text-muted-foreground">Professional charting tools with technical analysis</p>
        </div>
      </div>

      <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
        <div ref={chartRef} className="tradingview-widget-container" style={{ height: '600px' }}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Card>
    </div>
  );
};
