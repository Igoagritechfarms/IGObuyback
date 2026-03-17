import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Sprout, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  Play, 
  Truck, 
  CreditCard, 
  BarChart3, 
  Quote, 
  ChevronRight,
  Leaf,
  Target,
  Eye,
  CheckCircle2,
  Menu,
  X,
  Phone
} from 'lucide-react';
import { MarketPriceGraph } from './components/MarketPriceGraph';
import { BuybackForm } from './components/BuybackForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoMissing, setIsLogoMissing] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {isLogoMissing ? (
          <div className="flex items-center gap-2">
            <div className="bg-agri-green-600 p-2 rounded-lg">
              <Sprout className="text-white" size={24} />
            </div>
            <span>IGO AGRITECH</span>
          </div>
        ) : (
          <a href="#" className="flex items-center" aria-label="IGO Agritech home">
            <img
              src="/logo.jpg"
              alt="IGO Agri Tech Farms"
              className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-12' : 'h-16'}`}
              onError={() => setIsLogoMissing(true)}
            />
          </a>
        )}
        
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Mission', 'Market', 'Buyback', 'Logistics'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold hover:text-agri-green-600 transition-colors">
              {item}
            </a>
          ))}
          <button className="btn-primary py-2 px-6 text-sm">Contact Us</button>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-agri-earth-200 p-6 space-y-4 shadow-xl"
        >
          {['About', 'Mission', 'Market', 'Buyback', 'Logistics'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="block text-lg font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full btn-primary">Contact Us</button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
        alt="Agriculture Background" 
        className="w-full h-full object-cover opacity-20"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-agri-earth-100 via-transparent to-agri-earth-100" />
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 bg-agri-green-100 text-agri-green-700 px-4 py-2 rounded-full text-sm font-bold">
          <ShieldCheck size={18} /> Trusted by 1000+ Farmers
        </div>
        <h1 className="text-6xl md:text-7xl font-black text-agri-earth-800 leading-[0.9] tracking-tighter">
          Empowering Farmers. <br />
          <span className="text-agri-green-600">Connecting Markets.</span>
        </h1>
        <p className="text-xl text-agri-earth-800/70 max-w-lg leading-relaxed">
          IGO Agritech Farms empowers farmers by ensuring guaranteed buyback of their produce at fair market prices. We bridge the gap with technology.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#sell" className="btn-primary flex items-center gap-2">
            Sell Your Product Now <ArrowRight size={20} />
          </a>
          <a href="#buy" className="btn-secondary">
            Buy Fresh Direct
          </a>
        </div>
        
        <div className="flex items-center gap-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-black text-agri-green-700">7 Days</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50">Fast Payment</div>
          </div>
          <div className="w-px h-12 bg-agri-earth-200" />
          <div className="text-center">
            <div className="text-3xl font-black text-agri-green-700">100%</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50">Transparency</div>
          </div>
          <div className="w-px h-12 bg-agri-earth-200" />
          <div className="text-center">
            <div className="text-3xl font-black text-agri-green-700">Direct</div>
            <div className="text-xs font-bold uppercase tracking-widest opacity-50">B2B & B2C</div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=1000" 
            alt="Farmer with crops"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-agri-green-600/10 mix-blend-overlay" />
        </div>
        
        {/* Floating Stats Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl z-20 max-w-[200px]"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-agri-green-100 p-2 rounded-lg text-agri-green-600">
              <Zap size={20} />
            </div>
            <div className="text-xs font-bold uppercase">Quick Sell</div>
          </div>
          <div className="text-sm font-medium text-agri-earth-800/70">Average processing time: 24h</div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-24 bg-white" id="mission">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="w-16 h-16 bg-agri-green-100 text-agri-green-600 rounded-2xl flex items-center justify-center">
            <Target size={32} />
          </div>
          <h3 className="text-3xl font-black tracking-tight">Our Mission</h3>
          <p className="text-agri-earth-800/70 leading-relaxed">
            Support farmers with guaranteed buyback, ensure fair pricing, and reduce middlemen to promote sustainable agriculture across India.
          </p>
          <ul className="space-y-3">
            {['7-Day Payments', 'Fair Pricing', 'Direct Access'].map(item => (
              <li key={item} className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 size={18} className="text-agri-green-600" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="w-16 h-16 bg-agri-green-100 text-agri-green-600 rounded-2xl flex items-center justify-center">
            <Eye size={32} />
          </div>
          <h3 className="text-3xl font-black tracking-tight">Our Vision</h3>
          <p className="text-agri-earth-800/70 leading-relaxed">
            Build India's most trusted farmer-first marketplace, enabling direct sales (B2B & B2C) while ensuring price stability and income security.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Cucumber', 'Mushroom', 'Microgreens', 'Vegetables'].map(tag => (
              <span key={tag} className="bg-agri-earth-100 px-3 py-1 rounded-full text-xs font-bold text-agri-green-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="w-16 h-16 bg-agri-green-100 text-agri-green-600 rounded-2xl flex items-center justify-center">
            <Leaf size={32} />
          </div>
          <h3 className="text-3xl font-black tracking-tight">Buyback Model</h3>
          <div className="space-y-4">
            {[
              { step: '01', text: 'Register & Upload Product' },
              { step: '02', text: 'Get Instant Fair Price' },
              { step: '03', text: 'Sell & Logistics Pickup' },
              { step: '04', text: 'Payment in 7 Days' },
            ].map(item => (
              <div key={item.step} className="flex items-center gap-4 group">
                <span className="text-2xl font-black text-agri-green-100 group-hover:text-agri-green-600 transition-colors">{item.step}</span>
                <span className="font-bold text-agri-earth-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const MarketSection = () => (
  <section className="py-24 bg-agri-earth-100" id="market">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Price Transparency</h2>
        <p className="text-agri-earth-800/70">Real-time market data to help you make informed decisions. We guarantee fair pricing based on current trends.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card p-8 rounded-[2rem]">
          <MarketPriceGraph />
        </div>
        
        <div className="space-y-6">
          <div className="glass-card p-6 rounded-2xl">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <BarChart3 size={20} className="text-agri-green-600" /> Demand Insights
            </h4>
            <div className="space-y-4">
              {[
                { label: 'Chennai', demand: 'High', product: 'Mushroom' },
                { label: 'Coimbatore', demand: 'Medium', product: 'Cucumber' },
                { label: 'Madurai', demand: 'High', product: 'Microgreens' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between p-3 bg-white rounded-xl border border-agri-earth-200">
                  <div>
                    <div className="text-sm font-bold">{item.label}</div>
                    <div className="text-xs opacity-50">{item.product}</div>
                  </div>
                  <span className={`text-[10px] font-black uppercase px-2 py-1 rounded-full ${item.demand === 'High' ? 'bg-red-100 text-red-600' : 'bg-agri-green-100 text-agri-green-600'}`}>
                    {item.demand} Demand
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-agri-green-600 p-8 rounded-[2rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold mb-2">How it Works</h4>
              <p className="text-white/80 text-sm mb-6">Watch our quick guide on how IGO Buyback empowers your farm.</p>
              <button className="w-16 h-16 bg-white text-agri-green-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                <Play fill="currentColor" size={24} />
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FormsSection = () => {
  const [activeTab, setActiveTab] = useState<'sell' | 'buy'>('sell');

  return (
    <section className="py-24 bg-white" id="buyback">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <div className="flex bg-agri-earth-100 p-1 rounded-2xl mb-8">
            <button 
              onClick={() => setActiveTab('sell')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'sell' ? 'bg-agri-green-600 text-white shadow-lg' : 'text-agri-earth-800'}`}
            >
              I am a Farmer (Sell)
            </button>
            <button 
              onClick={() => setActiveTab('buy')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${activeTab === 'buy' ? 'bg-agri-green-600 text-white shadow-lg' : 'text-agri-earth-800'}`}
            >
              I am a Buyer (Purchase)
            </button>
          </div>
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl font-black tracking-tighter mb-4">
              {activeTab === 'sell' ? 'Sell Your Harvest Directly' : 'Source Fresh from Farms'}
            </h2>
            <p className="text-agri-earth-800/70">
              {activeTab === 'sell' 
                ? 'Register your available quantity and get a guaranteed buyback price within minutes.' 
                : 'Get access to premium quality agricultural products directly from the source.'}
            </p>
          </div>
        </div>

        <div id={activeTab === 'sell' ? 'sell' : 'buy'}>
          <BuybackForm type={activeTab} />
        </div>
      </div>
    </section>
  );
};

const LogisticsSection = () => (
  <section className="py-24 bg-agri-earth-800 text-white overflow-hidden" id="logistics">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-bold text-agri-green-100">
            <Truck size={18} /> Logistics & Transport
          </div>
          <h2 className="text-5xl font-black tracking-tighter leading-tight">
            Seamless Farm-to-Market <br />
            <span className="text-agri-green-600">Supply Chain.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We handle the heavy lifting. From farm pickup to cold storage and delivery, our technology-driven logistics ensure freshness and speed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: <Truck />, title: 'Farm Pickup', desc: 'Direct pickup from your farm gate.' },
              { icon: <Zap />, title: 'Real-time Tracking', desc: 'Monitor your shipment live.' },
              { icon: <CreditCard />, title: 'Secure Payment', desc: 'Direct bank transfer in 7 days.' },
              { icon: <ShieldCheck />, title: 'Cold Storage', desc: 'Preserving freshness for longer.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-agri-green-600">{item.icon}</div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <div className="text-xs text-white/40">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
              alt="Logistics truck"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating UI Element */}
          <div className="absolute top-10 -right-10 glass-card p-6 rounded-2xl text-agri-earth-800 max-w-[240px]">
            <div className="text-xs font-black uppercase text-agri-green-600 mb-2">Live Tracking</div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-agri-green-600 rounded-full animate-pulse" />
              <div className="text-sm font-bold">Truck #4029 - In Transit</div>
            </div>
            <div className="mt-4 h-1 bg-agri-earth-200 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-agri-green-600" />
            </div>
            <div className="mt-2 text-[10px] opacity-50">ETA: 2h 45m to Chennai Hub</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black tracking-tighter">Voices of Trust</h2>
        <p className="text-agri-earth-800/70 mt-2">Join the community of successful farmers and satisfied buyers.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: 'Ramesh Kumar', role: 'Farmer, Madurai', text: 'IGO Agritech changed my life. I no longer worry about market fluctuations. The 7-day payment is a blessing.' },
          { name: 'Anitha Selvam', role: 'B2B Buyer, Chennai', text: 'The quality of microgreens we get directly from farmers through IGO is unmatched. Highly recommended for restaurants.' },
          { name: 'Senthil Nathan', role: 'Farmer, Coimbatore', text: 'Transparent pricing and pickup support make selling my cucumber harvest so easy. No more middlemen issues.' },
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl relative">
            <Quote className="absolute top-6 right-8 text-agri-green-100" size={40} />
            <p className="text-agri-earth-800/80 italic mb-6 leading-relaxed">"{item.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-agri-green-600 rounded-full flex items-center justify-center text-white font-bold">
                {item.name[0]}
              </div>
              <div>
                <div className="font-bold">{item.name}</div>
                <div className="text-xs opacity-50">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-agri-earth-100 pt-24 pb-12 border-t border-agri-earth-200">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-agri-green-600 p-2 rounded-lg">
              <Sprout className="text-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter text-agri-green-800">IGO AGRITECH</span>
          </div>
          <p className="text-sm text-agri-earth-800/60 leading-relaxed">
            Empowering farmers through technology and guaranteed market access. India's most trusted agriculture buyback platform.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-agri-green-600 transition-colors cursor-pointer">
              <Phone size={18} />
            </div>
            {/* Add more social icons as needed */}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-agri-earth-800/60">
            {['About Us', 'Buyback Program', 'Market Prices', 'Farmer Support', 'Contact'].map(item => (
              <li key={item} className="hover:text-agri-green-600 transition-colors cursor-pointer flex items-center gap-2">
                <ChevronRight size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Products</h4>
          <ul className="space-y-4 text-sm text-agri-earth-800/60">
            {['Cucumber', 'Mushroom', 'Microgreens', 'Organic Vegetables', 'Agri-Inputs'].map(item => (
              <li key={item} className="hover:text-agri-green-600 transition-colors cursor-pointer flex items-center gap-2">
                <ChevronRight size={14} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-agri-earth-800/60 mb-4">Get weekly market insights and farming tips.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="flex-1 bg-white border border-agri-earth-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-agri-green-600"
            />
            <button className="bg-agri-green-600 text-white p-2 rounded-xl">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-agri-earth-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-bold text-agri-earth-800/40 uppercase tracking-widest">
        <div>© 2026 IGO Agritech Farms. All Rights Reserved.</div>
        <div className="flex gap-8">
          <span className="cursor-pointer hover:text-agri-green-600">Privacy Policy</span>
          <span className="cursor-pointer hover:text-agri-green-600">Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="font-sans selection:bg-agri-green-100 selection:text-agri-green-800">
      <Navbar />
      <Hero />
      <Features />
      <MarketSection />
      <FormsSection />
      <LogisticsSection />
      <Testimonials />
      
      {/* Final CTA */}
      <section className="py-24 bg-agri-green-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-8">
            Ready to grow your farm income?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-agri-green-600 px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-transform">
              Join Buyback Program
            </button>
            <button className="bg-agri-green-800 text-white px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:scale-105 transition-transform">
              Contact Support
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
