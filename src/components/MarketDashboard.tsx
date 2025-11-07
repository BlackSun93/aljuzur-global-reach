import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

export const MarketDashboard = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: 'dark',
      dateRange: '12M',
      showChart: true,
      locale: 'en',
      width: '100%',
      height: '100%',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: true,
      showFloatingTooltip: true,
      plotLineColorGrowing: 'rgba(250, 204, 21, 1)',
      plotLineColorFalling: 'rgba(239, 68, 68, 1)',
      gridLineColor: 'rgba(240, 243, 250, 0.06)',
      scaleFontColor: 'rgba(209, 212, 220, 1)',
      belowLineFillColorGrowing: 'rgba(250, 204, 21, 0.12)',
      belowLineFillColorFalling: 'rgba(239, 68, 68, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(250, 204, 21, 0)',
      belowLineFillColorFallingBottom: 'rgba(239, 68, 68, 0)',
      symbolActiveColor: 'rgba(250, 204, 21, 0.12)',
      tabs: [
        {
          title: 'Indices',
          symbols: [
            { s: 'FOREXCOM:SPXUSD', d: 'S&P 500' },
            { s: 'FOREXCOM:NSXUSD', d: 'US 100' },
            { s: 'FOREXCOM:DJI', d: 'Dow 30' },
            { s: 'INDEX:NKY', d: 'Nikkei 225' },
            { s: 'EGX:EGX30', d: 'EGX 30' },
          ],
        },
        {
          title: 'Forex',
          symbols: [
            { s: 'FX:EURUSD', d: 'EUR to USD' },
            { s: 'FX:GBPUSD', d: 'GBP to USD' },
            { s: 'FX:USDJPY', d: 'USD to JPY' },
            { s: 'FX_IDC:USDEGP', d: 'USD to EGP' },
          ],
        },
        {
          title: 'Commodities',
          symbols: [
            { s: 'FOREXCOM:XAUUSD', d: 'Gold' },
            { s: 'FOREXCOM:XAGUSD', d: 'Silver' },
            { s: 'TVC:USOIL', d: 'Oil' },
          ],
        },
        {
          title: 'Crypto',
          symbols: [
            { s: 'BINANCE:BTCUSD', d: 'Bitcoin' },
            { s: 'BINANCE:ETHUSD', d: 'Ethereum' },
            { s: 'BINANCE:BNBUSD', d: 'Binance Coin' },
          ],
        },
      ],
    });

    widgetRef.current.appendChild(script);

    return () => {
      if (widgetRef.current) {
        widgetRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-accent to-gold rounded-xl flex items-center justify-center shadow-lg">
          <Activity className="w-6 h-6 text-navy" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">Live Market Overview</h3>
          <p className="text-muted-foreground">Real-time market data and charts</p>
        </div>
      </div>

      <Card className="overflow-hidden border-2 border-accent/20 hover:border-accent/40 transition-all duration-300 shadow-xl hover:shadow-2xl">
        <div ref={widgetRef} className="tradingview-widget-container" style={{ height: '500px' }}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </Card>
    </div>
  );
};
