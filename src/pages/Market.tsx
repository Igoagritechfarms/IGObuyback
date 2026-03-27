import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, RefreshCw, MapPin } from 'lucide-react';
import { MarketPriceGraph } from '../components/MarketPriceGraph';
import { PriceCalculator } from '../components/PriceCalculator';

const PRODUCTS = [
  { name: 'Cucumber', price: 28, prev: 26, unit: 'kg', category: 'Vegetables', emoji: '🥒' },
  { name: 'Oyster Mushroom', price: 198, prev: 177, unit: 'kg', category: 'Mushroom', emoji: '🍄' },
  { name: 'Button Mushroom', price: 220, prev: 215, unit: 'kg', category: 'Mushroom', emoji: '🍄' },
  { name: 'Microgreens', price: 289, prev: 268, unit: 'kg', category: 'Greens', emoji: '🌱' },
  { name: 'Spinach', price: 35, prev: 36, unit: 'kg', category: 'Vegetables', emoji: '🥬' },
  { name: 'Tomato', price: 42, prev: 42, unit: 'kg', category: 'Vegetables', emoji: '🍅' },
  { name: 'Brinjal', price: 30, prev: 28, unit: 'kg', category: 'Vegetables', emoji: '🍆' },
  { name: 'Bitter Gourd', price: 38, prev: 40, unit: 'kg', category: 'Vegetables', emoji: '🥒' },
  { name: 'Lady Finger', price: 32, prev: 30, unit: 'kg', category: 'Vegetables', emoji: '🌿' },
];

export const Market = () => {
  const now = new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });

  return (
    <div className="pt-16 min-h-screen bg-agri-earth-50">
      {/* Header */}
      <div className="bg-white border-b border-agri-earth-100">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="badge-green w-fit mb-3"><TrendingUp size={14} /> Live Market Data</div>
              <h1 className="text-4xl font-black tracking-tighter text-agri-earth-900">IGO Market Dashboard</h1>
              <p className="text-agri-earth-500 mt-2 flex items-center gap-2 text-sm">
                <MapPin size={14} /> Tamil Nadu Region
                <span className="text-agri-earth-300">·</span>
                <RefreshCw size={13} /> Updated: {now}
              </p>
            </div>
            <a
              href="https://wa.me/919999999999?text=Subscribe%20to%20price%20alerts"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2.5 w-fit"
            >
              Get WhatsApp Price Alerts
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        {/* Price Table */}
        <div className="card overflow-hidden">
          <div className="p-6 border-b border-agri-earth-100">
            <h2 className="font-bold text-agri-earth-900">Today's Buyback Rates</h2>
            <p className="text-sm text-agri-earth-500">IGO guaranteed prices — no negotiation needed</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-agri-earth-50 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">Product</th>
                  <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">Category</th>
                  <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">IGO Rate</th>
                  <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">Change</th>
                  <th className="px-6 py-3 text-xs font-semibold text-agri-earth-500 uppercase tracking-wide">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-agri-earth-50">
                {PRODUCTS.map((p, i) => {
                  const change = p.price - p.prev;
                  const pct = ((change / p.prev) * 100).toFixed(1);
                  const isUp = change > 0;
                  const isDown = change < 0;
                  return (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="hover:bg-agri-green-50/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{p.emoji}</span>
                          <span className="font-semibold text-agri-earth-900">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="badge-green text-[11px]">{p.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-black text-agri-green-600">₹{p.price}/{p.unit}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-sm font-semibold ${isUp ? 'text-agri-green-600' : isDown ? 'text-red-500' : 'text-agri-earth-400'}`}>
                          {isUp ? '+' : ''}{change} ({isUp ? '+' : ''}{pct}%)
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {isUp && <TrendingUp size={18} className="text-agri-green-600" />}
                        {isDown && <TrendingDown size={18} className="text-red-500" />}
                        {!isUp && !isDown && <Minus size={18} className="text-agri-earth-400" />}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Chart + Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 card p-6 md:p-8">
            <h2 className="font-bold text-agri-earth-900 mb-6">6-Month Price Trends</h2>
            <MarketPriceGraph />
          </div>
          <PriceCalculator />
        </div>
      </div>
    </div>
  );
};
