import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, TrendingUp, Leaf } from 'lucide-react';
import { PRODUCTS } from '../../config/products';
import { CATEGORIES } from '../../config/categories';
import { CATEGORY_STYLES } from '../../config/category-styles';
import { filterInSeason, getTopByDemand } from '../../lib/product-utils';
import { MainCategory } from '../../config/categories';

/**
 * Products Section - Category showcase with featured products
 * Displays hierarchical category system with top products and seasonal highlights
 */
export const ProductsSection = () => {
  const seasonalProducts = useMemo(() => filterInSeason(PRODUCTS), []);
  const topDemandProducts = useMemo(() => getTopByDemand(PRODUCTS, 12), []);

  return (
    <section className="py-24 bg-white space-y-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="badge-green w-fit mb-4">
              <TrendingUp size={14} /> Product Categories
            </div>
            <h2 className="text-4xl font-black tracking-tighter text-agri-earth-900">
              Products We Buy
            </h2>
            <p className="text-agri-earth-600 mt-2">
              Browse our complete range of fresh produce organized by category
            </p>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row">
            <Link to="/catalog" className="btn-primary text-sm px-5 py-2.5 w-fit">
              Browse Catalog <ChevronRight size={16} />
            </Link>
            <Link to="/market" className="btn-ghost text-sm px-5 py-2.5 w-fit">
              Market Prices <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Category Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {CATEGORIES.map((category, i) => {
            const style = CATEGORY_STYLES[category.name];
            const categoryProducts = PRODUCTS.filter((p) => p.category === category.name);
            const topProducts = categoryProducts.slice(0, 4);

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={`/catalog`}
                  onClick={(e) => {
                    // Could pass category state if needed
                  }}
                  className="card overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  {/* Header with background color */}
                  <div
                    className="p-6 text-white group-hover:brightness-110 transition"
                    style={{ backgroundColor: style.color }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="text-5xl mb-2">{category.emoji}</p>
                        <h3 className="text-xl font-black">{category.name}</h3>
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                        {categoryProducts.length}
                      </span>
                    </div>
                    <p className="text-sm opacity-90 line-clamp-2">{category.description}</p>
                  </div>

                  {/* Products List */}
                  <div className="p-6 space-y-3">
                    {topProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center justify-between text-sm group/item"
                      >
                        <div className="flex-1">
                          <p className="font-medium text-agri-earth-900 group-hover/item:text-agri-green-600 transition">
                            {product.emoji} {product.name}
                          </p>
                        </div>
                        <span className="text-agri-green-600 font-bold whitespace-nowrap ml-2">
                          ₹{product.basePrice}
                        </span>
                      </div>
                    ))}

                    {categoryProducts.length > 4 && (
                      <button className="w-full mt-4 pt-4 border-t border-agri-earth-200 text-agri-green-600 hover:text-agri-green-700 font-semibold text-sm flex items-center justify-center gap-1 group/btn">
                        View all {categoryProducts.length}
                        <ChevronRight
                          size={14}
                          className="group-hover/btn:translate-x-1 transition"
                        />
                      </button>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Seasonal Highlights */}
      {seasonalProducts.length > 0 && (
        <div className="bg-gradient-to-r from-agri-green-50 to-agri-earth-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-agri-green-600 rounded-lg">
                <Leaf className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-agri-earth-900">Now in Season</h3>
                <p className="text-agri-earth-600 text-sm">
                  {seasonalProducts.length} products available right now
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {seasonalProducts.slice(0, 8).map((product, i) => {
                const style = CATEGORY_STYLES[product.category];
                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="card overflow-hidden group"
                  >
                    <div
                      className="h-28 bg-cover bg-center relative overflow-hidden group-hover:brightness-110 transition"
                      style={{
                        backgroundImage: `url(${product.imageUrl})`,
                        backgroundColor: style.lightColor,
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-agri-earth-600 font-medium mb-1">
                        {product.subcategory}
                      </p>
                      <h4 className="font-bold text-agri-earth-900 mb-2">
                        {product.emoji} {product.name}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-black text-agri-green-600">
                          ₹{product.basePrice}/{product.unit}
                        </span>
                        <span
                          className="text-xs font-bold text-white px-2 py-1 rounded"
                          style={{ backgroundColor: style.color }}
                        >
                          {product.demand}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-agri-green-600 text-white rounded-lg hover:bg-agri-green-700 transition font-medium"
            >
              Explore All Seasonal Products <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      )}

      {/* Top Demand Products */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="text-3xl font-black text-agri-earth-900 mb-2">High-Demand Products</h3>
          <p className="text-agri-earth-600">
            Best-selling products with guaranteed buyback prices
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topDemandProducts.map((product, i) => {
            const style = CATEGORY_STYLES[product.category];
            return (
              <motion.div
                key={`demand-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-44 overflow-hidden bg-agri-earth-100">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute top-3 right-3 bg-agri-green-600 text-white text-[11px] font-bold px-2 py-1 rounded-full">
                    {product.priceChange}
                  </div>
                  <div
                    className="absolute bottom-3 left-3 text-white text-[10px] font-semibold px-2 py-1 rounded-full"
                    style={{ backgroundColor: style.color }}
                  >
                    {product.category}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-agri-earth-900">{product.name}</h4>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-black text-agri-green-600">
                      ₹{product.basePrice}/{product.unit}
                    </span>
                    <span
                      className="text-[10px] font-bold text-white px-2 py-1 rounded"
                      style={{ backgroundColor: style.color }}
                    >
                      {product.demand}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
