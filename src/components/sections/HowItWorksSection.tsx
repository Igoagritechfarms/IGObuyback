import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, CheckCircle2 } from 'lucide-react';

/**
 * How It Works Section - 5-step process with premium animations
 */
export const HowItWorksSection = () => {
  const steps = [
    {
      icon: '📝',
      title: 'Register',
      desc: 'Sign up as a farmer and list your available produce with quantity and expected harvest date.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: '💰',
      title: 'Get Price Quote',
      desc: 'Receive a guaranteed buyback price based on real-time market data within minutes.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: '🚚',
      title: 'We Pick Up',
      desc: 'Our logistics team arrives at your farm gate for pickup — no transport hassles for you.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: '✅',
      title: 'Quality Check',
      desc: 'Produce is inspected at our facility to confirm quality and finalize the amount.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: '🏦',
      title: 'Get Paid',
      desc: 'Payment is transferred directly to your bank account within 7 days. No delays.',
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-b from-white via-agri-earth-50 to-white overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 right-10 w-72 h-72 bg-agri-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="badge-green mx-auto w-fit mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Leaf size={14} />
            </motion.div>
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-agri-earth-900 mb-4">
            How IGO Buyback Works
          </h2>
          <p className="text-lg text-agri-earth-600 max-w-xl mx-auto font-medium">
            From harvest to payment in 5 simple steps. We handle everything in between.
          </p>
        </motion.div>

        {/* Steps container with animated connecting line */}
        <div className="relative">
          {/* Animated connecting lines */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#16a34a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <motion.polyline
              points="10%,60 30%,60 50%,60 70%,60 90%,60"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={`step-${i}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white to-agri-earth-50 rounded-2xl border border-agri-earth-100 shadow-sm group-hover:shadow-xl transition-shadow duration-300" />

                {/* Card content */}
                <div className="relative p-6 flex flex-col items-center text-center h-full">
                  {/* Icon container with gradient background */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-2xl text-3xl mb-4 bg-gradient-to-br ${step.color} text-white shadow-lg`}
                  >
                    {step.icon}
                    {/* Step number badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="absolute -top-3 -right-3 w-8 h-8 bg-agri-green-600 rounded-full flex items-center justify-center text-white text-xs font-black shadow-lg border-2 border-white"
                    >
                      {i + 1}
                    </motion.div>
                  </motion.div>

                  {/* Step title */}
                  <h3 className="font-black text-agri-earth-900 mb-2 text-lg">{step.title}</h3>

                  {/* Step description */}
                  <p className="text-sm text-agri-earth-600 leading-relaxed flex-grow">
                    {step.desc}
                  </p>

                  {/* Check icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 + 0.4 }}
                    className="mt-4"
                  >
                    <CheckCircle2 size={20} className="text-agri-green-600" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link to="/sell" className="btn-primary text-base px-10 py-4 inline-flex items-center gap-2 hover:shadow-xl transition-all hover:scale-105">
            Start Selling Now <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
