import { StatsCounter } from '../components/StatsCounter';
import { HeroSection } from '../components/sections/HeroSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { MarketSection } from '../components/sections/MarketSection';
import { FormsSection } from '../components/sections/FormsSection';
import { LogisticsSection } from '../components/sections/LogisticsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { PriceComparisonWidget } from '../components/PriceComparisonWidget';
import { CTASection } from '../components/sections/CTASection';

/**
 * Home Page - Composes all major sections
 * Refactored from 458 lines to 20 lines by extracting sections into separate components
 */
export const Home = () => (
  <>
    <HeroSection />
    <StatsCounter />
    <HowItWorksSection />
    <ProductsSection />
    <MarketSection />
    <FormsSection />
    <LogisticsSection />
    <TestimonialsSection />
    <div className="py-24 px-6 bg-gradient-to-b from-white to-agri-earth-50">
      <div className="max-w-4xl mx-auto">
        <PriceComparisonWidget />
      </div>
    </div>
    <CTASection />
  </>
);
