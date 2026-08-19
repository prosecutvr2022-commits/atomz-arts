import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Sparkles, Tag, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  items,
  onClose,
  onSelect
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, item, items]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all backdrop-blur-sm cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white transition-all backdrop-blur-sm cursor-pointer shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black text-white transition-all backdrop-blur-sm cursor-pointer shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image & Details Container */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col bg-[#140E17] border border-[#D4AF37]/40 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Main Visual */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[65vh] overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain mx-auto select-none"
            />
            {/* Subtle Gradient vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#140E17] via-transparent to-transparent opacity-80" />
          </div>

          {/* Metadata Footer */}
          <div className="p-5 sm:p-6 bg-[#140E17] border-t border-[#D4AF37]/30 text-white space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#851424] text-amber-200 border border-[#D4AF37]/40">
                  <Tag className="w-3 h-3" />
                  {item.categoryLabel}
                </span>
                {item.date && (
                  <span className="inline-flex items-center gap-1 text-xs text-slate-400">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    {item.date}
                  </span>
                )}
              </div>

              <span className="text-xs text-amber-300 font-mono">
                {currentIndex + 1} / {items.length}
              </span>
            </div>

            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#FFF7E8]">
                {item.title}
              </h3>
              <p className="font-tamil text-amber-300 text-sm font-medium mt-0.5">
                {item.tamilTitle}
              </p>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
              {item.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
