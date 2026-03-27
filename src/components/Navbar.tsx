import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Menu, X } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { useI18n } from '../lib/i18n';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLogoMissing, setIsLogoMissing] = useState(false);
  const location = useLocation();
  const { t } = useI18n();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: t('nav_home'), to: '/' },
    { label: t('nav_market'), to: '/market' },
    { label: 'Enroll (Mandi)', to: '/enroll' },
    { label: t('nav_contact'), to: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsMobileOpen(false); }, [location]);

  const navBg = isHome
    ? isScrolled ? 'bg-white shadow-sm border-b border-agri-earth-100' : 'bg-transparent'
    : 'bg-white border-b border-agri-earth-100';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          {isLogoMissing ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-agri-green-600 rounded-lg flex items-center justify-center">
                <Sprout className="text-white" size={18} />
              </div>
              <span className="font-black text-agri-green-800 tracking-tight">IGO AGRITECH</span>
            </div>
          ) : (
            <img
              src="/logo.jpg"
              alt="IGO Agritech"
              className="h-10 w-auto object-contain"
              onError={() => setIsLogoMissing(true)}
            />
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap ${
                location.pathname === link.to
                  ? 'text-agri-green-700 bg-agri-green-50'
                  : 'text-agri-earth-600 hover:text-agri-green-700 hover:bg-agri-green-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Link to="/sell" className="btn-secondary py-2 px-4 text-sm">{t('nav_sell')}</Link>
          <Link to="/enroll" className="btn-primary py-2 px-4 text-sm">Join Mandi</Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-xl text-agri-earth-600 hover:bg-agri-earth-100 transition-colors"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-agri-earth-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-agri-earth-700 hover:bg-agri-green-50 hover:text-agri-green-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <LanguageToggle />
              </div>
              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link to="/sell" className="btn-secondary py-2.5 text-sm">{t('nav_sell')}</Link>
                <Link to="/enroll" className="btn-primary py-2.5 text-sm">Join Mandi</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
