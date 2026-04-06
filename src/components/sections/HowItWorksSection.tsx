import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  UserPlus, IndianRupee, ShieldCheck, Banknote, Truck,
  ArrowRight, Leaf,
} from 'lucide-react';

/* ────────────────────────────────────────────────
   Step data — 5 nodes placed around the circle
──────────────────────────────────────────────── */
const STEPS = [
  {
    id: 1,
    icon: UserPlus,
    title: 'Register',
    shortDesc: 'Sign up & list produce',
    fullDesc: 'Farmers register first and submit their produce details — crop type, quantity, and harvest availability. Our agri-experts guide you through every step of onboarding.',
    deg: 270, // top
    tag1: 'Fast', tag2: 'Guided', tag3: 'Free',
  },
  {
    id: 2,
    icon: IndianRupee,
    title: 'Price Quote',
    shortDesc: 'Get a buyback quote',
    fullDesc: 'Our team reviews your produce details and shares a transparent, competitive buyback quote — based on real-time market conditions and produce grade.',
    deg: 342, // top-right
    tag1: 'Transparent', tag2: 'Live Rates', tag3: 'Fair',
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: 'Quality Check',
    shortDesc: 'Verified acceptance',
    fullDesc: 'Quality is carefully assessed based on freshness, grade, and our acceptance standards. Only Grade A & B certified produce is accepted — ensuring fair value for your effort.',
    deg: 54, // right
    tag1: 'Certified', tag2: 'Grade A&B', tag3: 'Verified',
  },
  {
    id: 4,
    icon: Banknote,
    title: 'Get Paid',
    shortDesc: 'Secure timely payment',
    fullDesc: 'Once your produce is approved, payment is processed securely and sent directly to your bank account — within 7 working days, every time. No delays, no deductions.',
    deg: 126, // bottom-right
    tag1: 'Secure', tag2: '7-Day Pay', tag3: 'Direct',
  },
  {
    id: 5,
    icon: Truck,
    title: 'We Pickup',
    shortDesc: 'Farm-gate logistics',
    fullDesc: 'Our logistics team arranges pickup directly from your farm gate or nearest collection point. No need to travel — we come to you and handle transportation end-to-end.',
    deg: 198, // bottom-left
    tag1: 'Farm Gate', tag2: 'Zero Travel', tag3: 'End-to-End',
  },
];

/* ─── polar-to-Cartesian helper ─── */
const polar = (cx: number, cy: number, r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
};

/* ─── SVG arc path helper ─── */
const arcPath = (cx: number, cy: number, r: number, startDeg: number, endDeg: number) => {
  const st = polar(cx, cy, r, startDeg);
  const en = polar(cx, cy, r, endDeg);
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${st.x} ${st.y} A ${r} ${r} 0 ${large} 1 ${en.x} ${en.y}`;
};

const CX = 250, CY = 250, RADIUS = 150, NODE_R = 28;
const AUTO_ROTATE_MS = 5000;

/* Brand greens */
const GREEN_600 = '#16a34a';
const GREEN_700 = '#15803d';
const GREEN_200 = '#bbf7d0';
const GREEN_100 = '#dcfce7';
const GREEN_50  = '#f0fdf4';

export const HowItWorksSection = () => {
  const [active, setActive] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoRotate = useCallback((fromId: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActive((prev) => {
        const currentId = prev ?? fromId;
        const currentIdx = STEPS.findIndex((s) => s.id === currentId);
        const nextIdx = (currentIdx + 1) % STEPS.length;
        return STEPS[nextIdx]!.id;
      });
    }, AUTO_ROTATE_MS);
  }, []);

  // Start auto-rotate on mount from step 1
  useEffect(() => {
    setActive(1);
    startAutoRotate(1);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [startAutoRotate]);

  const handleStepClick = useCallback((id: number, isActive: boolean) => {
    const nextId = isActive ? null : id;
    setActive(nextId);
    if (nextId !== null) startAutoRotate(nextId);
  }, [startAutoRotate]);

  const activeStep = STEPS.find((s) => s.id === active);

  return (
    <section
      id="how-it-works"
      className="relative py-24 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)' }}
    >
      {/* Subtle grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hiw-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#16a34a" strokeWidth="0.5" strokeDasharray="2 2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hiw-grid)" />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.18) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(22,163,74,0.10) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border border-green-200 rounded-full text-[11px] font-bold uppercase tracking-widest bg-green-50 shadow-sm"
            style={{ color: GREEN_700 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Leaf size={12} style={{ color: GREEN_600 }} />
            </motion.div>
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto font-medium leading-relaxed">
            A seamless, circular lifecycle. From your farm to our facilities — transparent, efficient, farmer-first.
          </p>
        </motion.div>

        {/* LAYOUT */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-20">
          
          {/* SVG CIRCLE DIAGRAM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative shrink-0 w-full max-w-[400px] sm:max-w-[500px] lg:w-[500px]"
          >
            <svg
              viewBox="0 0 500 500"
              className="w-full h-auto overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glow filter for active node */}
                <filter id="glow-active" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feFlood floodColor="#16a34a" floodOpacity="0.35" result="color" />
                  <feComposite in="color" in2="blur" operator="in" result="shadow" />
                  <feMerge>
                    <feMergeNode in="shadow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="shadow-sm" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="3" stdDeviation="5" floodColor="#16a34a" floodOpacity="0.08" />
                </filter>
                <filter id="hub-shadow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#15803d" floodOpacity="0.25" />
                </filter>

                {/* Green arrow marker */}
                <marker id="greenArrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 Z" fill="#86efac" />
                </marker>
              </defs>

              {/* Background circle track */}
              <circle
                cx={CX} cy={CY} r={RADIUS}
                fill="none"
                stroke={GREEN_100}
                strokeWidth="3"
              />

              {/* Green arcs between steps */}
              {STEPS.map((step, i) => {
                const next = STEPS[(i + 1) % STEPS.length];
                const gapDeg = 24;
                return (
                  <motion.path
                    key={`arc-${i}`}
                    d={arcPath(CX, CY, RADIUS, step.deg + gapDeg, (next!).deg - gapDeg)}
                    fill="none"
                    stroke={GREEN_200}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    markerEnd="url(#greenArrow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
                  />
                );
              })}

              {/* Center Logo Hub — green filled */}
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <circle cx={CX} cy={CY} r={58} fill={GREEN_700} filter="url(#hub-shadow)" />
                <circle cx={CX} cy={CY} r={50} fill={GREEN_600} stroke={GREEN_700} strokeWidth="1.5" />
                <text x={CX} y={CY - 5} textAnchor="middle" fontSize="13" fontWeight="800" fill="#ffffff"
                  letterSpacing="0.12em" fontFamily="system-ui, sans-serif">
                  IGO
                </text>
                <text x={CX} y={CY + 10} textAnchor="middle" fontSize="9" fontWeight="600" fill={GREEN_200}
                  letterSpacing="0.06em" fontFamily="system-ui, sans-serif">
                  FARM
                </text>
              </motion.g>

              {/* Step Nodes */}
              {STEPS.map((step, i) => {
                const pos = polar(CX, CY, RADIUS, step.deg);
                const isActive = active === step.id;

                return (
                  <motion.g
                    key={step.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStepClick(step.id, isActive)}
                  >
                    {/* Invisible click hotspot */}
                    <circle cx={pos.x} cy={pos.y} r={NODE_R + 16} fill="transparent" />

                    {/* Outer pulse ring when active */}
                    <motion.circle
                      cx={pos.x} cy={pos.y}
                      r={NODE_R + 8}
                      fill="none"
                      stroke={GREEN_600}
                      strokeWidth="1.5"
                      animate={{
                        opacity: isActive ? [0.6, 0.2, 0.6] : 0,
                        scale: isActive ? [1, 1.12, 1] : 0.8,
                      }}
                      transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
                    />

                    {/* Node circle — green when active, white when inactive */}
                    <motion.circle
                      cx={pos.x} cy={pos.y}
                      r={NODE_R}
                      fill={isActive ? GREEN_600 : '#ffffff'}
                      stroke={isActive ? GREEN_700 : '#d1d5db'}
                      strokeWidth={isActive ? '2.5' : '1.5'}
                      filter={isActive ? 'url(#glow-active)' : 'url(#shadow-sm)'}
                      animate={{ scale: isActive ? 1.08 : 1 }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ duration: 0.25, type: 'spring', stiffness: 300 }}
                    />

                    {/* Icon — white when active, dark green when inactive */}
                    <g
                      transform={`translate(${pos.x - 10}, ${pos.y - 10})`}
                      opacity={isActive ? 1 : 0.65}
                      color={isActive ? '#ffffff' : GREEN_700}
                    >
                      <step.icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                    </g>

                    {/* Step Number Badge */}
                    <circle
                      cx={pos.x + NODE_R * 0.7}
                      cy={pos.y - NODE_R * 0.7}
                      r="9"
                      fill={isActive ? GREEN_700 : GREEN_50}
                      stroke={isActive ? GREEN_600 : GREEN_200}
                      strokeWidth="1.5"
                    />
                    <text
                      x={pos.x + NODE_R * 0.7}
                      y={pos.y - NODE_R * 0.7 + 3.5}
                      textAnchor="middle"
                      fontSize="9"
                      fontWeight="700"
                      fill={isActive ? '#ffffff' : GREEN_700}
                      fontFamily="system-ui, sans-serif"
                    >
                      {step.id}
                    </text>

                    {/* Label outside the circle */}
                    {(() => {
                      const labelR = RADIUS + 55;
                      const lp = polar(CX, CY, labelR, step.deg);
                      return (
                        <g className="hidden sm:block">
                          <text
                            x={lp.x} y={lp.y}
                            textAnchor="middle"
                            fontSize="11"
                            fontWeight={isActive ? '800' : '500'}
                            fill={isActive ? GREEN_700 : '#9ca3af'}
                            fontFamily="system-ui, sans-serif"
                          >
                            {step.title}
                          </text>
                        </g>
                      );
                    })()}
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>

          {/* DETAIL PANEL */}
          <div className="flex-1 w-full max-w-sm lg:mt-10">
            <AnimatePresence mode="wait">
              {activeStep ? (
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35 }}
                  className="relative overflow-hidden rounded-[2rem] border shadow-[0_8px_32px_rgba(22,163,74,0.12)] bg-white"
                  style={{ borderColor: GREEN_200 }}
                >
                  {/* Green accent top bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[2rem]"
                    style={{ background: `linear-gradient(90deg, ${GREEN_700} 0%, ${GREEN_600} 100%)` }} />

                  {/* Subtle green tint bg at top */}
                  <div className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
                    style={{ background: 'linear-gradient(180deg, #f0fdf4 0%, transparent 100%)' }} />

                  <div className="relative p-7">
                    {/* Icon circle */}
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                      style={{ background: GREEN_50, border: `1.5px solid ${GREEN_200}` }}>
                      <activeStep.icon size={20} strokeWidth={2} style={{ color: GREEN_700 }} />
                    </div>

                    {/* Step label */}
                    <div className="text-[10px] font-black uppercase tracking-widest mb-1.5"
                      style={{ color: GREEN_600 }}>
                      Step 0{activeStep.id}
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl font-black tracking-tight mb-3" style={{ color: '#14532d' }}>
                      {activeStep.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed text-sm font-medium">
                      {activeStep.fullDesc}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex gap-2 flex-wrap">
                      {[activeStep.tag1, activeStep.tag2, activeStep.tag3].map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                          style={{ background: GREEN_50, border: `1px solid ${GREEN_200}`, color: GREEN_700 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="prompt"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-[2rem] p-10 text-center border border-dashed bg-green-50/40"
                  style={{ borderColor: GREEN_200 }}
                >
                  <p className="font-medium text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
                    Select a phase from the cycle <br className="hidden lg:block" /> to view details.
                  </p>
                  <div className="flex flex-col gap-2">
                    {STEPS.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setActive(s.id)}
                        className="text-left px-4 py-3 rounded-xl hover:bg-green-100 text-sm font-semibold text-gray-500 transition-colors tracking-tight flex justify-between items-center"
                      >
                        <span>{s.id}. {s.title}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Step progress dots */}
            {activeStep && (
              <div className="flex justify-center gap-2 mt-4">
                {STEPS.map(s => (
                  <motion.button
                    key={s.id}
                    onClick={() => handleStepClick(s.id, active === s.id)}
                    animate={{ width: active === s.id ? 24 : 8 }}
                    className="h-2 rounded-full transition-colors duration-300"
                    style={{ backgroundColor: active === s.id ? GREEN_600 : GREEN_200 }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 lg:mt-28 text-center"
        >
          <p className="text-sm text-gray-500 mb-6 font-medium">
            Experience the future of commodity trading.
          </p>
          <Link
            to="/sell"
            className="group relative inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-full overflow-hidden transition-transform hover:scale-[1.02] shadow-lg"
            style={{ background: `linear-gradient(135deg, ${GREEN_700} 0%, ${GREEN_600} 100%)`, boxShadow: `0 8px 24px rgba(22,163,74,0.30)` }}
          >
            <span className="relative z-10 text-sm tracking-wide">Enter the Cycle</span>
            <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(135deg, #14532d 0%, ${GREEN_700} 100%)` }} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
