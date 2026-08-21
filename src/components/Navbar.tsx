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
      <div className="bg-[#800080] text-white text-xs py-1.5 px-3 sm:px-4 border-b border-purple-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs min-w-0">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300"></span>
            </span>
            <span className="font-semibold text-white truncate">
              Admissions Open 2026 • 21+ Arts, Music & Skill Courses
            </span>
            <span className="hidden md:inline text-purple-200">•</span>
            <span className="hidden md:inline font-tamil text-amber-200 whitespace-nowrap">
              புதுத்தெரு, திருவாரூர்
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs flex-shrink-0">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-white hover:text-amber-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-mono font-bold">{CONTACT_INFO.primaryPhone}</span>
            </a>
            <span className="hidden sm:inline text-purple-300">|</span>
            <span className="hidden lg:inline text-purple-100 font-mono">
              {CONTACT_INFO.phoneNumbers.slice(1, 3).join(' • ')}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-purple-100 py-2 sm:py-2.5'
            : 'bg-white border-b border-purple-100 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-none cursor-pointer min-w-0 flex-shrink"
          >
            <Logo size="md" lightMode={true} />
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
                      ? 'text-[#800080] bg-[#FAF5FC] border border-purple-200 shadow-xs'
                      : 'text-slate-700 hover:text-[#800080] hover:bg-purple-50/60'
                  }`}
                >
                  <span className="tracking-wide font-bold">{link.label}</span>
                  <span
                    className={`font-tamil text-[10px] ${
                      isActive ? 'text-[#800080] font-bold' : 'text-slate-500'
                    }`}
                  >
                    {link.tamilLabel}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 w-6 h-0.5 bg-[#800080] rounded-full"
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
              className="w-10 h-10 rounded-xl bg-[#800080] text-white shadow-md flex items-center justify-center hover:bg-[#680068] active:scale-95 transition-all flex-shrink-0 cursor-pointer"
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
              className="lg:hidden absolute top-full inset-x-0 z-50 bg-white border-b-2 border-purple-200 shadow-2xl overflow-hidden"
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
                            ? 'bg-[#800080] text-white font-bold shadow-md'
                            : 'text-slate-800 hover:bg-purple-50'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="text-base font-bold">{link.label}</span>
                          <span className={`font-tamil text-xs ${isActive ? 'text-purple-200' : 'text-slate-500'}`}>
                            {link.tamilLabel}
                          </span>
                        </div>
                        <ChevronRight className={`w-5 h-5 ${isActive ? 'text-white' : 'text-[#800080]'}`} />
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Phone Directory Card */}
                <div className="p-3.5 bg-[#FAF5FC] border border-purple-200 rounded-2xl space-y-2.5">
                  <div className="flex items-center justify-between text-[#800080] text-xs font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#800080]" />
                      <span>Admissions & Helplines</span>
                    </div>
                    <span className="text-[10px] text-slate-500 font-normal">Thiruvarur</span>
                  </div>
                  <div className="flex flex-col gap-2 text-xs">
                    {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center justify-between px-3 py-2 rounded-lg bg-white border border-purple-100 text-slate-900 font-mono hover:bg-purple-50 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-[#800080]" />
                          <span className="text-xs font-bold">{phone}</span>
                        </div>
                        <span className="text-[10px] text-[#800080] font-bold">
                          {idx === 0 ? 'Primary' : `Line 0${idx + 1}`}
                        </span>
                      </a>
                    ))}
                  </div>
                  <p className="text-[11px] text-slate-600 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#800080] flex-shrink-0" />
                    <span className="truncate">Puthu Theru, Thiruvarur (புதுத்தெரு)</span>
                  </p>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 rounded-xl bg-[#800080] hover:bg-[#680068] text-white font-extrabold text-sm text-center shadow-lg uppercase tracking-wider cursor-pointer active:scale-98 transition-all"
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
