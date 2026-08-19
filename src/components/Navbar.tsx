import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sparkles, MapPin, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO } from '../data/coursesData';
import { PageView } from '../types';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageView; label: string; tamilLabel: string }[] = [
    { id: 'home', label: 'Home', tamilLabel: 'முகப்பு' },
    { id: 'about', label: 'About Us', tamilLabel: 'எங்களைப் பற்றி' },
    { id: 'classes', label: 'Our Classes', tamilLabel: 'பயிற்சி வகுப்புகள்' },
    { id: 'gallery', label: 'Gallery', tamilLabel: 'புகைப்படங்கள்' },
    { id: 'contact', label: 'Contact Us', tamilLabel: 'தொடர்புக்கு' }
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement & Helpline Strip */}
      <div className="bg-[#120B16] text-amber-200/90 text-xs py-1.5 px-3 sm:px-4 border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs min-w-0">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="font-medium text-amber-100 truncate">
              Admissions Open • 21+ Arts, Music & Skill Courses
            </span>
            <span className="hidden md:inline text-amber-500/80">•</span>
            <span className="hidden md:inline font-tamil text-amber-300 whitespace-nowrap">
              புதுத்தெரு, திருவாரூர்
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs flex-shrink-0">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono font-bold">{CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden lg:inline text-slate-300">
              {CONTACT_INFO.phoneNumbers.slice(1, 3).join(' • ')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#160E1A]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/30 py-2 sm:py-2.5'
            : 'bg-[#1C1221] border-b border-[#D4AF37]/20 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer min-w-0 flex-shrink"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
            {navLinks.map(link => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex flex-col items-center cursor-pointer ${
                    isActive
                      ? 'text-[#FFE898] bg-[#851424]/60 border border-[#D4AF37]/40 shadow-sm'
                      : 'text-slate-200 hover:text-amber-200 hover:bg-white/5'
                  }`}
                >
                  <span className="tracking-wide">{link.label}</span>
                  <span
                    className={`font-tamil text-[10px] ${
                      isActive ? 'text-amber-300' : 'text-slate-400'
                    }`}
                  >
                    {link.tamilLabel}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 w-6 h-0.5 bg-[#D4AF37] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Menu Toggle Button */}
          <div className="flex items-center flex-shrink-0 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-[#851424] text-[#FFE898] border border-[#D4AF37]/60 shadow-lg flex items-center justify-center hover:bg-[#6b0f1a] active:scale-95 transition-all flex-shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Rendered absolute below sticky header) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden absolute top-full inset-x-0 z-50 bg-[#160E1A] border-b-2 border-[#D4AF37]/50 shadow-2xl overflow-hidden"
            >
              <div className="px-4 py-5 space-y-3 max-h-[calc(100vh-80px)] overflow-y-auto">
                <div className="space-y-1">
                  {navLinks.map(link => {
                    const isActive = currentPage === link.id;
                    return (
                      <button
                        key={link.id}
                        onClick={() => handleNavClick(link.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all cursor-pointer ${
                          isActive
                            ? 'bg-[#851424] text-white border border-[#D4AF37]/50 font-bold shadow-md'
                            : 'text-slate-200 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-semibold">{link.label}</span>
                          <span className="font-tamil text-xs text-amber-300">
                            {link.tamilLabel}
                          </span>
                        </div>
                        <ChevronRight className="w-5 h-5 text-amber-400" />
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Phone Directory Card */}
                <div className="p-3.5 bg-black/50 border border-amber-500/30 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between text-amber-300 text-xs font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                      <span>Admissions & Helplines</span>
                    </div>
                    <span className="text-[10px] text-amber-400/80 font-normal">Thiruvarur</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-white/10 text-white font-mono hover:bg-[#851424] transition-colors"
                      >
                        <Phone className="w-3 h-3 text-[#D4AF37]" />
                        <span className="text-[11px] font-bold">{phone}</span>
                      </a>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate">Puthu Theru, Thiruvarur (புதுத்தெரு)</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 rounded-xl gold-gradient-bg text-slate-950 font-extrabold text-sm text-center shadow-lg uppercase tracking-wider cursor-pointer active:scale-98 transition-all"
                >
                  Enroll for a Class Today
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
