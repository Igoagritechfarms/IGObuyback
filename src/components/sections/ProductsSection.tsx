import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, TrendingUp } from 'lucide-react';
import { PRODUCTS } from '../../config/products';

/**
 * Products Section - Featured products with buyback prices
 */
export const ProductsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="badge-green w-fit mb-4">
              <TrendingUp size={14} /> Live Rates
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-agri-earth-900">
              Products We Buy
            </h2>
          </div>
          <Link to="/market" className="btn-ghost text-sm">
            View All Market Prices <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={`product-${product.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card overflow-hidden group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-agri-green-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">
                  {product.priceChange} ↑
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-agri-earth-900">{product.name}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xl font-black text-agri-green-600">
                    ₹{product.basePrice}/{product.unit}
                  </span>
                  <span
                    className={`badge-${
                      product.demand === 'Very High' || product.demand === 'High' ? 'green' : 'amber'
                    } text-[10px]`}
                  >
                    {product.demand} Demand
                  </span>
                </div>
                <div className="text-xs text-agri-earth-400 mt-1">Season: {product.season}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
