import { CreditCard, ShieldCheck, Truck, Zap } from 'lucide-react';

/**
 * Logistics Section - Farm-to-market supply chain
 */
export const LogisticsSection = () => {
  const features = [
    { icon: <Truck size={20} />, title: 'Farm Pickup', desc: 'Direct from your gate' },
    { icon: <Zap size={20} />, title: 'Live Tracking', desc: 'Real-time GPS updates' },
    { icon: <CreditCard size={20} />, title: '7-Day Payment', desc: 'Bank transfer direct' },
    { icon: <ShieldCheck size={20} />, title: 'Cold Storage', desc: 'Quality preserved' },
  ];

  return (
    <section className="py-24 bg-agri-earth-900 text-white overflow-hidden" id="logistics">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="badge-green w-fit bg-white/10 text-agri-green-300">
              <Truck size={14} /> Farm-to-Market Logistics
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
              We Handle the <br />
              <span className="text-agri-green-400">Entire Supply Chain.</span>
            </h2>
            <p className="text-agri-earth-400 leading-relaxed">
              From farm pickup to cold storage and final delivery — our technology-driven logistics
              ensure your produce reaches the market fresh and fast.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={`feature-${i}`}
                  className="flex gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="text-agri-green-400 shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-sm">{f.title}</div>
                    <div className="text-xs text-agri-earth-500">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
                alt="Logistics"
                className="w-full h-80 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 glass-card p-5 rounded-2xl text-agri-earth-800 max-w-[220px]">
              <div className="text-xs font-black uppercase text-agri-green-600 mb-2 flex items-center gap-1">
                <div className="w-1.5 h-1.5 bg-agri-green-500 rounded-full animate-pulse" /> Live
                Tracking
              </div>
              <div className="text-sm font-bold mb-2">Truck #TN-4029</div>
              <div className="h-1.5 bg-agri-earth-200 rounded-full overflow-hidden">
                <div className="w-2/3 h-full bg-agri-green-500 rounded-full" />
              </div>
              <div className="text-[11px] text-agri-earth-500 mt-2">ETA: 2h 45m · Chennai Hub</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
