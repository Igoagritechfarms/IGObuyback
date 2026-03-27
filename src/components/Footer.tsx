import { Link } from 'react-router-dom';
import { Sprout, Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-agri-earth-900 text-white">
    <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-agri-green-600 rounded-xl flex items-center justify-center">
              <Sprout size={18} className="text-white" />
            </div>
            <span className="font-black text-lg tracking-tight">IGO AGRITECH</span>
          </div>
          <p className="text-agri-earth-400 text-sm leading-relaxed">
            Empowering farmers through guaranteed buyback, fair pricing, and technology-driven logistics across Tamil Nadu.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <Facebook size={16} />, href: '#' },
              { icon: <Instagram size={16} />, href: '#' },
              { icon: <Youtube size={16} />, href: '#' },
            ].map((s, i) => (
              <a key={i} href={s.href} className="w-9 h-9 bg-white/10 hover:bg-agri-green-600 rounded-xl flex items-center justify-center transition-colors">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-agri-earth-400">Platform</h4>
          <ul className="space-y-3">
            {[
              { label: 'Sell Your Harvest', to: '/sell' },
              { label: 'Buy Fresh Produce', to: '/buy' },
              { label: 'Market Prices', to: '/market' },
              { label: 'Buyback Programs', to: '/#how-it-works' },
              { label: 'Contact Us', to: '/contact' },
            ].map(l => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-colors flex items-center gap-2">
                  <ArrowRight size={12} /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-agri-earth-400">Products</h4>
          <ul className="space-y-3">
            {['Cucumber', 'Oyster Mushroom', 'Microgreens', 'Button Mushroom', 'Exotic Vegetables', 'Agri-Inputs'].map(p => (
              <li key={p} className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-colors flex items-center gap-2 cursor-pointer">
                <ArrowRight size={12} /> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-5 text-sm uppercase tracking-widest text-agri-earth-400">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-agri-green-500 mt-0.5 shrink-0" />
              <span className="text-sm text-agri-earth-400">IGO Agritech Farms, Tamil Nadu, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-agri-green-500 shrink-0" />
              <a href="tel:+919999999999" className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-colors">+91 99999 99999</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-agri-green-500 shrink-0" />
              <a href="mailto:info@igoagritech.com" className="text-sm text-agri-earth-400 hover:text-agri-green-400 transition-colors">info@igoagritech.com</a>
            </li>
          </ul>
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors w-fit"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-agri-earth-500">
        <span>© 2026 IGO Agritech Farms. All Rights Reserved.</span>
        <div className="flex gap-6">
          <span className="hover:text-agri-green-400 transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-agri-green-400 transition-colors cursor-pointer">Terms of Service</span>
          <span className="hover:text-agri-green-400 transition-colors cursor-pointer">Sitemap</span>
        </div>
      </div>
    </div>
  </footer>
);
