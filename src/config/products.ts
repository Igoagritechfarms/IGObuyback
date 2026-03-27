/**
 * Centralized product configuration
 * Single source of truth for all product data across the application
 */

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  unit: 'kg' | 'bundles' | 'pieces';
  demand: 'Low' | 'Medium' | 'High' | 'Very High';
  season: string;
  imageUrl: string;
  priceChange: string; // e.g., '+5%'
  emoji?: string; // For calculator display
}

/**
 * All products available for buyback
 * Update prices here and they'll be consistent across the entire app
 */
export const PRODUCTS: Product[] = [
  {
    id: 'cucumber',
    name: 'Cucumber',
    basePrice: 28,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400&q=80',
    priceChange: '+5%',
    emoji: '🥒',
  },
  {
    id: 'oyster-mushroom',
    name: 'Oyster Mushroom',
    basePrice: 198,
    unit: 'kg',
    demand: 'Very High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&q=80',
    priceChange: '+12%',
    emoji: '🍄',
  },
  {
    id: 'microgreens',
    name: 'Microgreens',
    basePrice: 289,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1614350292382-c448d0110dfa?w=400&q=80',
    priceChange: '+8%',
    emoji: '🌱',
  },
  {
    id: 'button-mushroom',
    name: 'Button Mushroom',
    basePrice: 220,
    unit: 'kg',
    demand: 'Medium',
    season: 'Oct–Mar',
    imageUrl: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?w=400&q=80',
    priceChange: '+3%',
    emoji: '🍄',
  },
  {
    id: 'spinach',
    name: 'Spinach',
    basePrice: 35,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd19531?w=400&q=80',
    priceChange: '+2%',
    emoji: '🥬',
  },
  {
    id: 'tomato',
    name: 'Tomato',
    basePrice: 42,
    unit: 'kg',
    demand: 'High',
    season: 'Year Round',
    imageUrl: 'https://images.unsplash.com/photo-1592841622261-38c45f1015f6?w=400&q=80',
    priceChange: '+4%',
    emoji: '🍅',
  },
];

/**
 * Get product by ID
 */
export const getProductById = (id: string): Product | undefined => {
  return PRODUCTS.find((p) => p.id === id);
};

/**
 * Get all product names (for dropdowns, etc.)
 */
export const getProductNames = (): string[] => {
  return PRODUCTS.map((p) => p.name);
};

/**
 * Get product price formatted with unit
 */
export const getFormattedPrice = (productId: string): string => {
  const product = getProductById(productId);
  if (!product) return '';
  return `₹${product.basePrice}/${product.unit}`;
};

/**
 * Get high demand products (for marketing)
 */
export const getHighDemandProducts = (): Product[] => {
  return PRODUCTS.filter((p) => p.demand === 'High' || p.demand === 'Very High');
};
