import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Leaf } from 'lucide-react';

/**
 * How It Works Section - 5-step process
 */
export const HowItWorksSection = () => {
  const steps = [
    {
      icon: '📝',
      title: 'Register',
      desc: 'Sign up as a farmer and list your available produce with quantity and expected harvest date.',
    },
    {
      icon: '💰',
      title: 'Get Price Quote',
      desc: 'Receive a guaranteed buyback price based on real-time market data within minutes.',
    },
    {
      icon: '🚚',
      title: 'We Pick Up',
      desc: 'Our logistics team arrives at your farm gate for pickup — no transport hassles for you.',
    },
    {
      icon: '✅',
      title: 'Quality Check',
      desc: 'Produce is inspected at our facility to confirm quality and finalize the amount.',
    },
    {
      icon: '🏦',
      title: 'Get Paid',
      desc: 'Payment is transferred directly to your bank account within 7 days. No delays.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-agri-earth-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="badge-green mx-auto w-fit mb-4">
            <Leaf size={14} /> Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-agri-earth-900 mb-4">
            How IGO Buyback Works
          </h2>
          <p className="text-lg text-agri-earth-500 max-w-xl mx-auto">
            From harvest to payment in 5 simple steps. We handle everything in between.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[12%] right-[12%] h-0.5 bg-agri-earth-200" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={`step-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-agri-earth-200 rounded-2xl text-2xl mb-4 shadow-sm">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-agri-green-600 rounded-full flex items-center justify-center text-white text-[10px] font-black">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-bold text-agri-earth-900 mb-2">{step.title}</h3>
                <p className="text-sm text-agri-earth-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/sell" className="btn-primary text-base px-8 py-3.5">
            Start Selling Now <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
