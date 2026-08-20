import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Calendar, Tag } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative max-w-4xl w-full bg-[#180F1E] border border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#600000] text-white flex items-center justify-center border border-[#D4AF37]/40 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-h-[60vh] sm:max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (item.imageUrl === '/drawing-painting.png' || item.id === 'gal-6') {
                  e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1A-9CcMzqX9oeg7ciwiv4oRdk1fJA3RB6';
                }
              }}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Details Bar */}
          <div className="p-6 sm:p-8 bg-[#160E1A] border-t border-[#D4AF37]/30 text-white space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#600000] text-[#FFF1B8] border border-[#D4AF37]/40 text-xs font-bold font-cinzel">
                  {item.categoryLabel}
                </span>
                {item.date && (
                  <span className="text-xs text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    {item.date}
                  </span>
                )}
              </div>
              <span className="text-xs text-amber-300 font-serif italic">
                Atomz Arts Academy, Thiruvarur
              </span>
            </div>

            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                {item.title}
              </h3>
              <p className="font-tamil text-base sm:text-lg text-amber-300 font-bold mt-0.5">
                {item.tamilTitle}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {item.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
