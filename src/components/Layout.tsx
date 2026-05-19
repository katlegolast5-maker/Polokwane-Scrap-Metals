import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, Instagram, Facebook, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CONTACT_INFO } from '@/config/prices';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Prices', path: '/metals-we-buy' },
    { name: 'Collection', path: '/collection' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-ebony text-paper border-x-[8px] md:border-[16px] border-ebony overflow-x-hidden">
      {/* Header Section */}
      <header className="flex items-center justify-between px-4 md:px-8 py-6 bg-ebony border-b-2 border-slate/20 sticky top-0 z-50">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="bg-brand text-white p-2 text-2xl font-black group-hover:scale-110 transition-transform">PSM</div>
          <div className="leading-none">
            <span className="block text-lg font-black tracking-tighter uppercase font-industrial text-paper">Polokwane</span>
            <span className="text-xs tracking-widest text-slate uppercase font-bold">Scrap Metals</span>
          </div>
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-black uppercase tracking-[0.2em] hover:text-brand transition-colors ${
                location.pathname === link.path ? 'text-brand' : 'text-paper'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-8 pl-4 border-l border-white/10">
            <div className="text-right hidden xl:block">
              <span className="block text-[10px] uppercase tracking-widest text-slate font-bold">Call Our Yard</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-lg font-black font-industrial">{CONTACT_INFO.phone}</a>
            </div>
            <Link to="/quote">
              <button className="bg-brand hover:bg-[#B55A1A] text-white px-8 py-4 font-black uppercase tracking-tighter rounded-none transition-all shadow-[4px_4px_0px_rgba(255,255,255,0.1)] active:translate-x-1 active:translate-y-1 active:shadow-none">
                Get Instant Quote
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          id="mobile-menu-toggle"
          className="lg:hidden text-paper p-2 border-2 border-paper/10" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-ebony pt-24 px-8 lg:hidden flex flex-col gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-4xl font-black uppercase tracking-tighter font-industrial ${
                  location.pathname === link.path ? 'text-brand' : 'text-paper'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" onClick={() => setIsMenuOpen(false)} className="mt-4">
              <Button className="w-full bg-brand text-white py-10 text-xl font-black uppercase tracking-widest rounded-none">
                Get Instant Quote
              </Button>
            </Link>
            <div className="mt-auto pb-12 flex flex-col gap-4 text-slate uppercase tracking-widest font-black text-xs">
              <p>Yard: {CONTACT_INFO.address}</p>
              <p>Tel: {CONTACT_INFO.phone}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow bg-paper text-ebony">
        {children}
      </main>

      {/* Micro Footer */}
      <footer className="bg-black text-slate py-4 px-4 md:px-8 flex flex-col md:justify-between items-center text-[9px] font-bold uppercase tracking-[0.2em] border-t-2 border-white/5 space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center text-center md:text-left gap-2 md:gap-0">
          <div className="flex items-center space-x-2">
            <span className="text-brand">●</span>
            <span>Yard: {CONTACT_INFO.address}</span>
          </div>
          <span className="text-forest">SABS Certified Weighbridge #44102</span>
          <span className="text-white/40">SARS: 1234567890</span>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12 items-center text-center md:text-left gap-2 md:gap-0">
          <span>Mon-Fri: {CONTACT_INFO.hours.weekdays}</span>
          <span>Sat: {CONTACT_INFO.hours.saturday}</span>
          <p className="text-white/20">© {new Date().getFullYear()} PSM Polokwane</p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3">
        <a 
          href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
          className="bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={32} />
        </a>
      </div>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1A1D21] border-t-2 border-[#D2691E] flex md:hidden h-20 shadow-[0_-10px_20px_rgba(0,0,0,0.3)]">
        <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 flex flex-col items-center justify-center gap-1 border-r border-white/10 active:bg-white/5">
          <Phone size={20} className="text-[#D2691E]" />
          <span className="text-[10px] uppercase font-bold tracking-tighter text-white">Call Now</span>
        </a>
        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex-1 flex flex-col items-center justify-center gap-1 border-r border-white/10 active:bg-white/5">
          <MessageCircle size={20} className="text-[#25D366]" />
          <span className="text-[10px] uppercase font-bold tracking-tighter text-white">WhatsApp</span>
        </a>
        <Link to="/quote" className="flex-[2] flex items-center justify-center bg-[#D2691E] active:bg-[#B85C1A] text-white gap-2 px-4 shadow-inner">
          <ChevronRight size={20} className="font-black" />
          <span className="text-[14px] uppercase font-black tracking-widest italic">Get Quote</span>
        </Link>
      </div>
    </div>
  );
}
