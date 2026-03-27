import { useCallback, useRef, useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { useMarketRates } from '../hooks/useMarketRates';
import { SkeletonTicker } from './Skeletons';

type TickerItem = {
  name: string;
  price: number;
  prev: number;
  unit: string;
  category: string;
};

interface TickerCardProps {
  item: TickerItem;
}

const TickerCard = ({ item }: TickerCardProps) => {
  const change = item.price - item.prev;
  const isUp = change > 0;
  const isDown = change < 0;

  return (
    <div className="flex items-center gap-3 px-5 py-2 border-r border-white/10 shrink-0">
      <div>
        <span className="text-xs text-white/50 font-medium">{item.category}</span>
        <div className="text-sm font-bold text-white">{item.name}</div>
      </div>
      <div className="text-right">
        <div className="text-sm font-black text-agri-green-300">₹{item.price}/{item.unit}</div>
        <div className={`text-[11px] flex items-center gap-0.5 font-semibold ${isUp ? 'text-agri-green-400' : isDown ? 'text-red-400' : 'text-white/40'}`}>
          {isUp && <TrendingUp size={10} />}
          {isDown && <TrendingDown size={10} />}
          {!isUp && !isDown && <Minus size={10} />}
          {isUp ? '+' : ''}{change}
        </div>
      </div>
    </div>
  );
};

export const MarketTicker = () => {
  const { rates, isLoading } = useMarketRates();
  const { t } = useI18n();
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);

  // Convert market prices to ticker format
  const tickerItems: TickerItem[] = rates.map((r) => ({
    name: r.name,
    price: r.price,
    prev: r.prev_price || r.price,
    unit: r.unit,
    category: r.category || 'General',
  }));

  // Duplicate items for seamless infinite scroll
  const items = [...tickerItems, ...tickerItems];

  useEffect(() => {
    let animationId: number;
    const speed = 40; // pixels per second (tuned for readability)
    let lastTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      if (isPaused || !trackRef.current) {
        lastTime = performance.now();
        return;
      }

      const now = performance.now();
      const delta = (now - lastTime) / 1000;
      lastTime = now;

      const track = trackRef.current;
      const contentWidth = track.offsetWidth;
      const halfWidth = contentWidth / 2;

      let nextOffset = offsetRef.current + speed * delta;
      if (halfWidth > 0) {
        nextOffset %= halfWidth;
      }
      offsetRef.current = nextOffset;
      track.style.transform = `translateX(-${nextOffset}px)`;
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  if (isLoading) {
    return (
      <div className="bg-agri-earth-900 border-b border-white/10 overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-2">
          {[...Array(5)].map((_, i) => (
            <SkeletonTicker key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-agri-earth-900 border-b border-white/10 overflow-hidden">
      <div className="flex items-center">
        {/* Label */}
        <div className="shrink-0 flex items-center gap-2 px-4 py-2 bg-agri-green-600 z-10">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-xs font-black text-white uppercase tracking-widest whitespace-nowrap">{t('ticker_label')}</span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1">
          <div
            ref={trackRef}
            className="flex"
            style={{
              transform: `translateX(-${offsetRef.current}px)`,
              transition: 'none',
              willChange: 'transform',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {items.map((item, i) => (
              <TickerCard
                key={`ticker-${item.name}-${i}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
