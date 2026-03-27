import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  decimals?: number;
}

const Counter = ({ value, suffix = '', prefix = '', label, decimals = 0 }: StatProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(decimals)));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, value, decimals]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-black text-agri-green-600 tabular-nums">
        {prefix}{count.toLocaleString('en-IN')}{suffix}
      </div>
      <div className="text-sm text-agri-earth-500 mt-2 font-medium">{label}</div>
    </motion.div>
  );
};

export const StatsCounter = () => (
  <section className="py-16 bg-white border-y border-agri-earth-100">
    <div className="max-w-5xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-agri-earth-100">
        <Counter value={1200} suffix="+" label="Registered Farmers" />
        <Counter value={7} suffix=" Days" label="Payment Guarantee" />
        <Counter value={98} suffix="%" label="Farmer Satisfaction" />
        <Counter value={4.5} suffix="Cr+" prefix="₹" decimals={1} label="Total Payouts" />
      </div>
    </div>
  </section>
);
