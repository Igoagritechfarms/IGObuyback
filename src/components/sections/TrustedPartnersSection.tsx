import { motion } from 'motion/react';
import { Award, Users, ShoppingBag } from 'lucide-react';

/* ══════════════════════════════════════════════════════
   Faithful inline SVG brand logos — pixel-accurate
   ══════════════════════════════════════════════════════ */

/** Farmers Factory — green circle with stylised F + hoe */
const FarmerFactoryLogo = () => (
  <svg viewBox="0 0 260 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-56 h-20">
    {/* Green circle */}
    <circle cx="50" cy="50" r="44" fill="#2E8B57"/>

    {/* Hoe handle — diagonal brown stick */}
    <line x1="28" y1="16" x2="58" y2="88" stroke="#6B3020" strokeWidth="6" strokeLinecap="round"/>
    {/* Hoe head */}
    <path d="M15 10 L33 18 L27 32 L9 24 Z" fill="#8B6914"/>
    <line x1="27" y1="32" x2="33" y2="20" stroke="#c0c0c0" strokeWidth="2"/>

    {/* Upper flag/leaf — white */}
    <path d="M32 20 Q50 14 62 28 Q70 40 58 47 Q46 52 36 40 Z" fill="white"/>
    {/* Middle leaf — light green */}
    <path d="M34 50 Q52 44 64 60 Q70 73 55 78 Q41 81 34 66 Z" fill="#6DD16E"/>
    {/* Water drop — white */}
    <path d="M43 80 Q48 90 43 97 Q38 104 34 97 Q30 90 35 80 Z" fill="white"/>
    <circle cx="36" cy="97" r="3.5" fill="#6DD16E"/>

    {/* FARMERS FACTORY text */}
    <text x="106" y="42" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#1B5E20" letterSpacing="0.5">FARMERS</text>
    <text x="106" y="67" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="#1B5E20" letterSpacing="0.5">FACTORY</text>
    {/* FPO badge */}
    <rect x="106" y="74" width="68" height="18" rx="5" fill="#16a34a"/>
    <text x="140" y="87" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="700" fill="white" letterSpacing="1.5">FPO NETWORK</text>
  </svg>
);

/** Zepto — purple with "zepto" + yellow lightning bolt */
const ZeptoLogo = () => (
  <svg viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-11">
    <rect width="130" height="48" rx="8" fill="#5B21B6"/>
    <text x="12" y="33" fontFamily="Arial Black, sans-serif" fontSize="25" fontWeight="900" fill="white" letterSpacing="-0.5">zepto</text>
    {/* Lightning bolt */}
    <path d="M112 7 L105 24 L111 24 L104 41 L120 21 L113 21 L119 7Z" fill="#FCD34D"/>
  </svg>
);

/** Blinkit — yellow bg, "blinkit" dark, green lightning */
const BlinkitLogo = () => (
  <svg viewBox="0 0 130 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-11">
    <rect width="130" height="48" rx="8" fill="#F8D90C"/>
    <text x="10" y="33" fontFamily="Arial Black, sans-serif" fontSize="24" fontWeight="900" fill="#1C1C1C">blinkit</text>
    {/* Green lightning bolt — Blinkit brand */}
    <path d="M114 6 L107 22 L113 22 L106 42 L122 20 L115 20 L121 6Z" fill="#0D9B1E"/>
  </svg>
);

/** Instamart — orange rounded square, location pin S, "instamart" */
const InstamrtLogo = () => (
  <svg viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    {/* Orange rounded square */}
    <rect width="110" height="110" rx="22" fill="#FC4A1A"/>
    {/* Location pin shape */}
    <path d="M55 18 C38 18 25 31 25 48 C25 68 55 92 55 92 C55 92 85 68 85 48 C85 31 72 18 55 18Z" fill="white" opacity="0.95"/>
    {/* S letter inside pin */}
    <path d="M46 38 Q46 32 55 32 Q64 32 64 39 Q64 45 55 48 Q46 51 46 58 Q46 66 55 66 Q64 66 64 59" stroke="#FC4A1A" strokeWidth="5" strokeLinecap="round" fill="none"/>
  </svg>
);

/** bigbasket — white bg, bb monogram (red+green), "bigbasket", "A TATA Enterprise" */
const BigBasketLogo = () => (
  <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-14">
    <rect width="160" height="60" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
    {/* bb monogram box */}
    <rect x="6" y="6" width="48" height="48" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1"/>
    {/* red/orange b */}
    <text x="9" y="42" fontFamily="Arial Black, sans-serif" fontSize="34" fontWeight="900" fill="#E53935">b</text>
    {/* green b */}
    <text x="28" y="42" fontFamily="Arial Black, sans-serif" fontSize="34" fontWeight="900" fill="#4CAF50">b</text>
    {/* bigbasket text */}
    <text x="62" y="30" fontFamily="Arial Black, sans-serif" fontSize="16" fontWeight="900" fill="#1a1a2e">bigbasket</text>
    {/* A TATA Enterprise */}
    <text x="62" y="48" fontFamily="Arial, sans-serif" fontSize="9.5" fill="#888">A </text>
    <text x="73" y="48" fontFamily="Arial Black, sans-serif" fontSize="9.5" fontWeight="900" fill="#E53935">TATA</text>
    <text x="102" y="48" fontFamily="Arial, sans-serif" fontSize="9.5" fill="#888"> Enterprise</text>
  </svg>
);

/** DMart — cream bg, green D with building, "Mart", "Daily Savings Daily Discounts" */
const DMartLogo = () => (
  <svg viewBox="0 0 150 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-14">
    <rect width="150" height="60" rx="6" fill="#F5EDD8"/>
    {/* D shape with inner building */}
    <text x="8" y="44" fontFamily="Times New Roman, serif" fontSize="46" fontWeight="900" fill="#1B6B1B">D</text>
    {/* Star/asterisk inside D */}
    <text x="19" y="28" fontFamily="Arial, sans-serif" fontSize="12" fill="#1B6B1B">✦</text>
    {/* Mart text */}
    <text x="42" y="36" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#1B6B1B">Mart</text>
    {/* Underline */}
    <line x1="8" y1="48" x2="142" y2="48" stroke="#1B6B1B" strokeWidth="1.5"/>
    {/* Tagline */}
    <text x="75" y="57" fontFamily="Arial, sans-serif" fontSize="7.5" fill="#1B6B1B" textAnchor="middle" letterSpacing="0.3">Daily Savings  Daily Discounts</text>
  </svg>
);

/** TAJ — cream bg, gold serif TAJ, ornate snowflake above J */
const TajLogo = () => (
  <svg viewBox="0 0 130 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-20">
    <rect width="130" height="80" rx="6" fill="#F5EDD8"/>
    {/* TAJ text — large gold serif */}
    <text x="15" y="65" fontFamily="Georgia, 'Times New Roman', serif" fontSize="52" fontWeight="700" fill="#8B6914" letterSpacing="4">TAJ</text>
    {/* Ornate snowflake/geometric above J */}
    <g transform="translate(93, 14)">
      {/* 8-pointed snowflake */}
      <line x1="0" y1="-12" x2="0" y2="12" stroke="#8B6914" strokeWidth="1.8"/>
      <line x1="-12" y1="0" x2="12" y2="0" stroke="#8B6914" strokeWidth="1.8"/>
      <line x1="-8.5" y1="-8.5" x2="8.5" y2="8.5" stroke="#8B6914" strokeWidth="1.4"/>
      <line x1="8.5" y1="-8.5" x2="-8.5" y2="8.5" stroke="#8B6914" strokeWidth="1.4"/>
      {/* Center hexagon */}
      <polygon points="0,-6 5.2,-3 5.2,3 0,6 -5.2,3 -5.2,-3" fill="#8B6914" opacity="0.3"/>
      <circle cx="0" cy="0" r="3" fill="#8B6914"/>
      {/* Tip diamonds */}
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const x = Math.cos(rad) * 12;
        const y = Math.sin(rad) * 12;
        return <circle key={i} cx={x} cy={y} r="1.8" fill="#8B6914"/>;
      })}
    </g>
  </svg>
);

/* ══════════════════════════════════════════════════════
   Partner data — FARMERS FACTORY FIRST
   ══════════════════════════════════════════════════════ */
const PARTNERS = [
  { name: 'Zepto',           Logo: ZeptoLogo,      tagline: 'Quick commerce'     },
  { name: 'Blinkit',         Logo: BlinkitLogo,    tagline: '10-min delivery'    },
  { name: 'Swiggy Instamart',Logo: InstamrtLogo,   tagline: 'Grocery delivery'   },
  { name: 'bigbasket',       Logo: BigBasketLogo,  tagline: 'Online grocery'     },
  { name: 'DMart',           Logo: DMartLogo,      tagline: 'Retail chain'       },
  { name: 'TAJ',             Logo: TajLogo,        tagline: 'Royal hospitality'  },
];

/* ══════════════════════════════════════════════════════
   Section
   ══════════════════════════════════════════════════════ */
export const TrustedPartnersSection = () => (
  <section className="py-20 bg-gray-950 text-white overflow-hidden relative" id="partners">
    {/* Glow */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-green-600/5 rounded-full blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto px-6">

      {/* ── Section Header ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/30 rounded-full text-lime-400 text-sm font-semibold mb-4">
          <Award size={15} />
          Our Buyer Partners
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
          Our Buyer Partners &amp;{' '}
          <span className="text-lime-400">Royal Brands</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base">
          Your produce reaches India's top retailers, quick-commerce platforms, and luxury hotel chains — directly, transparently.
        </p>
      </motion.div>

      {/* ── FARMERS FACTORY — MAIN FEATURED FIRST ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 rounded-3xl bg-gradient-to-r from-green-900/70 via-green-800/60 to-green-900/70 border border-green-600/40 p-8 flex flex-col md:flex-row items-center gap-8"
      >
        {/* Badge */}
        <div className="shrink-0 flex flex-col items-center gap-3">
          <span className="text-xs font-black text-lime-400 uppercase tracking-widest bg-lime-500/15 border border-lime-500/30 px-4 py-1.5 rounded-full">
            ⭐ Main Partner — India's Farmer Network
          </span>
          {/* Farmers Factory Logo */}
          <div className="bg-white rounded-2xl px-6 py-4 shadow-xl">
            <FarmerFactoryLogo />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Farmers Factory</h3>
          <p className="text-green-300 text-base font-medium mb-4">
            Direct farmer collective partnership · FPO network integration
          </p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
            IGOBuyback's primary farmer-network partner. Together we bring 1,200+ small and marginal farmers into a transparent, fair-price buyback system — zero middlemen, on-time payment, grade-based pricing.
          </p>
          {/* Stat pills */}
          <div className="flex flex-wrap gap-3 mt-5 justify-center md:justify-start">
            {[
              { icon: <Users size={14}/>, val: '1,200+', sub: 'Partner Farmers India-wide' },
              { icon: <ShoppingBag size={14}/>, val: 'FPO', sub: 'Network integration' },
              { icon: '🌾', val: '26', sub: 'Crop verticals' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 bg-green-900/50 border border-green-700/50 rounded-xl px-4 py-2">
                <span className="text-lime-400">{s.icon}</span>
                <div>
                  <p className="text-sm font-black text-lime-400 leading-none">{s.val}</p>
                  <p className="text-xs text-gray-400 leading-none mt-0.5">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── 6 Buyer Partners Grid ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
        {PARTNERS.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ scale: 1.06, y: -5 }}
            className="flex flex-col items-center gap-3 p-5 bg-white/5 border border-white/8 rounded-2xl hover:bg-white/10 hover:border-lime-500/30 transition-all cursor-default"
          >
            <div className="flex items-center justify-center h-16">
              <p.Logo />
            </div>
            <div className="text-center">
              <p className="text-xs font-bold text-white">{p.name}</p>
              <p className="text-[11px] text-gray-500 mt-0.5">{p.tagline}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Bottom note ── */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-600"
      >
        Partnered with trusted F&amp;B buyers, retailers, and farmer networks for consistent, large-volume market demand across India.
      </motion.p>
    </div>
  </section>
);
