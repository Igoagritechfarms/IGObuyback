import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  Zap,
  Leaf,
  TrendingUp,
  CheckCircle2,
  Truck,
  Clock,
} from 'lucide-react';

/**
 * Hero Section - Complete redesign with visual showcase and better UX
 * Removed Price Calculator in favor of powerful visual elements
 */
export const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Enhanced gradient background */}
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-agri-earth-50 via-white to-agri-green-50" />
      {/* Animated background elements */}
      <motion.div
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-96 h-96 bg-agri-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -bottom-32 -left-40 w-96 h-96 bg-agri-earth-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="badge-green w-fit"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="inline-block"
            >
              <ShieldCheck size={14} />
            </motion.div>
            Trusted by 1,200+ Farmers · Tamil Nadu
          </motion.div>

          {/* Main headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black text-agri-earth-900 leading-[0.95] tracking-tighter"
            >
              Fair Prices.<br />
              <span className="bg-gradient-to-r from-agri-green-600 to-agri-green-500 bg-clip-text text-transparent">
                Fast Payment.
              </span>
              <br />Zero Middlemen.
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-agri-earth-600 max-w-2xl leading-relaxed font-medium"
          >
            Sell your harvest directly to buyers at guaranteed fair prices. Get paid within 7 days with free pickup and logistics. No negotiations, no middlemen.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              to="/sell"
              className="btn-primary text-base px-8 py-4 hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2"
            >
              Start Selling <ArrowRight size={18} />
            </Link>
            <Link
              to="/catalog"
              className="btn-secondary text-base px-8 py-4 hover:shadow-lg transition-all hover:scale-105 flex items-center gap-2"
            >
              Browse Products <Leaf size={18} />
            </Link>
          </motion.div>

          {/* Key Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-agri-earth-200"
          >
            {[
              { icon: <Clock size={20} />, title: '7 Days', sub: 'Payment' },
              { icon: <CheckCircle2 size={20} />, title: 'Fair Prices', sub: 'Guaranteed' },
              { icon: <Truck size={20} />, title: 'Free Pickup', sub: 'Logistics' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="space-y-2"
              >
                <div className="w-10 h-10 rounded-lg bg-agri-green-100 flex items-center justify-center text-agri-green-600">
                  {item.icon}
                </div>
                <p className="font-bold text-agri-earth-900">{item.title}</p>
                <p className="text-sm text-agri-earth-600">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {['🌾', '🥕', '🍅', '🌱'].map((emoji, i) => (
                <motion.div
                  key={`avatar-${i}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="w-10 h-10 rounded-full bg-agri-green-600 border-3 border-white flex items-center justify-center text-base font-bold"
                >
                  {emoji}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={`star-${i}`} size={16} fill="#16a34a" className="text-agri-green-600" />
                ))}
                <span className="font-bold text-agri-earth-900">4.9/5</span>
              </div>
              <p className="text-xs text-agri-earth-600 font-medium">800+ verified farmer reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Main Showcase Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-agri-green-600/20 to-agri-earth-200/20 rounded-3xl blur-2xl" />
            <div className="relative card overflow-hidden bg-gradient-to-br from-white to-agri-green-50 p-8">
              <div className="space-y-6">
                {/* Stats Section */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-agri-earth-900">Trusted by Farmers</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '₹4.5 Cr', label: 'Paid Out' },
                      { value: '1,200+', label: 'Farmers' },
                      { value: '24/7', label: 'Support' },
                      { value: '7 Days', label: 'Payment' },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="bg-gradient-to-br from-agri-green-50 to-agri-earth-50 rounded-lg p-4 text-center border border-agri-green-200"
                      >
                        <p className="text-2xl font-black text-agri-green-600">{stat.value}</p>
                        <p className="text-xs font-semibold text-agri-earth-600 mt-1">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* How It Works Quick */}
                <div className="space-y-3 pt-4 border-t border-agri-earth-200">
                  <p className="text-sm font-bold text-agri-earth-900">Simple Process</p>
                  {[
                    { step: '1', text: 'Register your farm' },
                    { step: '2', text: 'List your harvest' },
                    { step: '3', text: 'Get fair price guarantee' },
                    { step: '4', text: 'Free pickup & payment in 7 days' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-agri-green-600 text-white text-xs font-bold flex items-center justify-center">
                        {item.step}
                      </div>
                      <span className="text-sm text-agri-earth-700 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Categories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="card p-6"
          >
            <p className="text-sm font-bold text-agri-earth-900 mb-3">We Buy From</p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { emoji: '🥬', label: 'Vegetables' },
                { emoji: '🍎', label: 'Fruits' },
                { emoji: '🌾', label: 'Grains' },
              ].map((cat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-lg bg-gradient-to-br from-agri-green-50 to-white border border-agri-green-200 cursor-pointer hover:shadow-md transition-all"
                >
                  <p className="text-2xl mb-1">{cat.emoji}</p>
                  <p className="text-xs font-semibold text-agri-earth-700">{cat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);
