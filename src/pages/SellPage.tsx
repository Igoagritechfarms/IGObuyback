import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { BuybackForm } from '../components/BuybackForm';
import { PriceCalculator } from '../components/PriceCalculator';

export const SellPage = () => (
  <div className="pt-16 min-h-screen bg-agri-earth-50">
    <div className="bg-agri-green-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
          <div className="badge-green bg-white/20 text-white w-fit mb-4">For Farmers</div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
            Sell Your Harvest at the Best Price
          </h1>
          <p className="text-agri-green-100 text-lg mb-8">
            Register your produce and receive a guaranteed buyback price. We pick up from your farm and pay within 7 days.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            {['No middlemen', 'Free farm pickup', '7-day payment', 'WhatsApp support'].map(b => (
              <div key={b} className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
                <CheckCircle2 size={14} /> {b}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BuybackForm type="sell" />
        </div>
        <div className="space-y-6">
          <PriceCalculator />
          <div className="card p-5 bg-agri-earth-900 text-white border-0">
            <h4 className="font-bold mb-3">Need Help?</h4>
            <p className="text-agri-earth-400 text-sm mb-4">Our farm support team is available Mon–Sat, 8 AM to 6 PM.</p>
            <a href="tel:+919999999999" className="btn-primary w-full text-sm py-2.5">
              Call Us Now
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-full text-sm font-semibold hover:bg-[#1ebe5d] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
