import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, X, ChevronUp, MapPin, Sparkles } from 'lucide-react';
import { CONTACT_INFO } from '../data/coursesData';

export const QuickContactFab: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 Vanakkam Atomz Arts Academy! I am interested in joining a course. Please share admission details.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3">
      {/* Expanded Phone Number Directory Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="w-[calc(100vw-24px)] max-w-xs sm:w-80 bg-white border border-purple-200 rounded-2xl shadow-2xl p-3.5 sm:p-4 text-slate-900 space-y-3"
          >
            <div className="flex items-center justify-between pb-2 border-b border-purple-100">
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#800080]" />
                <span className="font-cinzel text-xs font-bold tracking-wider text-[#800080] uppercase">
                  Direct Academy Helplines
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[11px] text-slate-600 font-normal">
              Tap any number below to call directly for instant admissions & inquiries:
            </p>

            <div className="space-y-1.5">
              {CONTACT_INFO.phoneNumbers.map((phone, idx) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50/50 hover:bg-[#800080] border border-purple-200 text-slate-900 hover:text-white font-mono text-sm font-bold transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#800080] group-hover:text-white" />
                    <span>{phone}</span>
                  </div>
                  <span className="text-[10px] text-[#800080] group-hover:text-purple-100 uppercase font-sans font-semibold">
                    {idx === 0 ? '1st Contact' : idx === 1 ? '2nd Contact' : '3rd Contact'}
                  </span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-purple-100 flex items-center justify-between text-[11px] text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#800080]" />
                Puthu Theru, Thiruvarur
              </span>
              <span className="text-emerald-600 font-semibold">Open 7 AM - 8:30 PM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2.5">
        {/* WhatsApp Fast Button */}
        <button
          onClick={handleWhatsApp}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg hover:shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Chat with Atomz Arts Academy on WhatsApp"
          aria-label="WhatsApp Admission Chat"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="absolute right-full mr-3 hidden sm:group-hover:inline-block px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md">
            Chat on WhatsApp
          </span>
        </button>

        {/* Call Helplines Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#800080] hover:bg-[#680068] border-2 border-white text-white shadow-xl hover:shadow-purple-900/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="View 4 Direct Helpline Numbers"
          aria-label="Call Academy"
        >
          {isOpen ? <ChevronUp className="w-6 h-6 text-white" /> : <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />}
          <span className="absolute right-full mr-3 hidden sm:group-hover:inline-block px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-md">
            Call Helplines (4 Numbers)
          </span>
        </button>
      </div>
    </div>
  );
};
