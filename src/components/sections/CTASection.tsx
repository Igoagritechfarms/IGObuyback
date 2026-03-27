import { Link } from 'react-router-dom';

/**
 * CTA Section - Final call-to-action
 */
export const CTASection = () => (
  <section className="py-24 bg-agri-green-600 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
        Ready to grow your farm income?
      </h2>
      <p className="text-agri-green-100 text-lg mb-10">
        Join 1,200+ farmers already earning more with IGO Agritech's guaranteed buyback program.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/sell"
          className="bg-white text-agri-green-700 font-bold px-8 py-4 rounded-full text-base hover:bg-agri-green-50 transition-colors shadow-xl"
        >
          Register as Farmer
        </Link>
        <Link
          to="/contact"
          className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-white/10 transition-colors"
        >
          Talk to Our Team
        </Link>
      </div>
    </div>
  </section>
);
