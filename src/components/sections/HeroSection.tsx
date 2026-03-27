import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { PriceCalculator } from '../PriceCalculator';

/**
 * Hero Section - Main landing section with value proposition
 */
export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-agri-earth-50">
    {/* Background pattern */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
        alt=""
        className="w-full h-full object-cover opacity-[0.07]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-agri-earth-50 via-agri-earth-50/95 to-agri-green-50/50" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8"
      >
        <div className="badge-green w-fit">
          <ShieldCheck size={14} /> Trusted by 1,200+ Farmers · Tamil Nadu
        </div>

        <h1 className="text-5xl md:text-6xl xl:text-7xl font-black text-agri-earth-900 leading-[0.95] tracking-tighter">
          Sell Direct.<br />
          <span className="text-agri-green-600">Get Paid Fast.</span><br />
          Grow More.
        </h1>

        <p className="text-lg text-agri-earth-500 max-w-md leading-relaxed">
          IGO Agritech guarantees buyback of your produce at fair market prices — with pickup, logistics, and payment in 7 days.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link to="/sell" className="btn-primary text-base px-8 py-3.5">
            Sell My Harvest <ArrowRight size={18} />
          </Link>
          <Link to="/buy" className="btn-secondary text-base px-8 py-3.5">
            Buy Fresh Produce
          </Link>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <div className="flex -space-x-2">
            {['R', 'S', 'A', 'M'].map((l, i) => (
              <div
                key={`avatar-${l}`}
                className="w-9 h-9 rounded-full bg-agri-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
              >
                {l}
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={`star-${i}`}
                  size={12}
                  fill="#16a34a"
                  className="text-agri-green-600"
                />
              ))}
              <span className="text-sm font-bold text-agri-earth-800 ml-1">4.9/5</span>
            </div>
            <div className="text-xs text-agri-earth-500">from 800+ farmer reviews</div>
          </div>
        </div>
      </motion.div>

      {/* Right side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="space-y-4"
      >
        {/* Price Calculator Card */}
        <PriceCalculator />

        {/* Quick Stats row */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { val: '7 Days', sub: 'Payment' },
            { val: '₹4.5Cr', sub: 'Paid Out' },
            { val: '100%', sub: 'Transparent' },
          ].map((s) => (
            <div key={`stat-${s.val}`} className="card p-3 text-center">
              <div className="font-black text-agri-green-600 text-lg">{s.val}</div>
              <div className="text-[11px] text-agri-earth-500 font-medium">{s.sub}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
