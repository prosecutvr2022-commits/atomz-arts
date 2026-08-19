import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Eye, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';
import { GalleryItem, PageView } from '../types';

interface GalleryPreviewProps {
  onNavigate: (page: PageView) => void;
  onSelectImage: (item: GalleryItem) => void;
}

export const GalleryPreview: React.FC<GalleryPreviewProps> = ({ onNavigate, onSelectImage }) => {
  const featured = GALLERY_ITEMS.filter(item => item.featured).slice(0, 6);

  return (
    <section className="py-20 bg-[#FAF7F2] text-slate-900 border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#851424]/10 border border-[#851424]/20 text-[#851424] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Moments of Grace & Excellence</span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1E1926]">
              Visual Showcase & Performances
            </h2>
            <p className="font-tamil text-base text-[#851424] font-semibold">
              அரங்கேற்றம், இசை கச்சேரி மற்றும் பயிலரங்க நிகழ்வுகள்
            </p>
          </div>

          <button
            onClick={() => {
              onNavigate('gallery');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#851424] hover:bg-[#6b0f1a] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>View Full Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Masonry / Grid Gallery Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => onSelectImage(item)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md cursor-pointer border border-[#D4AF37]/40"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all" />

              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#851424] text-amber-200 border border-[#D4AF37]/30 shadow">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#FFF7E8] line-clamp-1">
                  {item.title}
                </h3>
                <p className="font-tamil text-amber-300 text-xs font-semibold">
                  {item.tamilTitle}
                </p>
                <p className="text-[11px] text-slate-300 line-clamp-1 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4 text-amber-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
