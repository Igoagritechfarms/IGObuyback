import { StatsCounter } from '../components/StatsCounter';
import { HeroSection } from '../components/sections/HeroSection';
import { HowItWorksSection } from '../components/sections/HowItWorksSection';
import { ProductsSection } from '../components/sections/ProductsSection';
import { MarketSection } from '../components/sections/MarketSection';
import { FormsSection } from '../components/sections/FormsSection';
import { LogisticsSection } from '../components/sections/LogisticsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
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
    <CTASection />
  </>
);
