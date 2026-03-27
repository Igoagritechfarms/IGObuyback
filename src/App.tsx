import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { I18nProvider } from './lib/i18n';
import { NotificationProvider } from './lib/notification-context';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MarketTicker } from './components/MarketTicker';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { Market } from './pages/Market';
import { SellPage } from './pages/SellPage';
import { BuyPage } from './pages/BuyPage';
import { Enroll } from './pages/Enroll';
import { Contact } from './pages/Contact';

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      <MarketTicker />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/market" element={<PageWrapper><Market /></PageWrapper>} />
          <Route path="/sell" element={<PageWrapper><SellPage /></PageWrapper>} />
          <Route path="/buy" element={<PageWrapper><BuyPage /></PageWrapper>} />
          <Route path="/enroll" element={<PageWrapper><Enroll /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <NotificationProvider>
        <I18nProvider>
          <Router>
            <AppRoutes />
          </Router>
        </I18nProvider>
      </NotificationProvider>
    </ErrorBoundary>
  );
}
