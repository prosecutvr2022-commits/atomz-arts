import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Eye, Filter, Image as ImageIcon } from 'lucide-react';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../data/galleryData';
import { GalleryItem } from '../types';

interface GalleryPageProps {
  onSelectImage: (item: GalleryItem) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onSelectImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = GALLERY_ITEMS.filter(item => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });

  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-[#600000] text-white border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="absolute inset-0 bg-dark-mandala opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-amber-200 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Academy Gallery & Moments</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Performances, Arangetrams & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1B8] to-[#D4AF37]">Classroom Memories</span>
          </h1>

          <p className="font-tamil text-xl sm:text-2xl text-amber-200 font-bold max-w-2xl mx-auto">
            எங்கள் மாணவர்களின் அரங்கேற்றங்கள், இசை கச்சேரிகள் மற்றும் கலை பயிலரங்குகள்
          </p>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Witness the vibrant energy of our students mastering ancient dance poses, tuning intricate ragas on the veena, excelling in chess, creating aari couture, and shining on stage.
          </p>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {GALLERY_CATEGORIES.map(category => {
            const isActive = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#600000] text-white shadow-md border border-[#D4AF37]/50'
                    : 'bg-white hover:bg-amber-50 text-slate-700 border border-slate-200'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => onSelectImage(item)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-[#D4AF37]/30 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (item.imageUrl === '/drawing-painting.png' || item.id === 'gal-6') {
                      e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1A-9CcMzqX9oeg7ciwiv4oRdk1fJA3RB6';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all" />

                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-[#600000] text-amber-200 border border-[#D4AF37]/30 shadow">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-amber-300" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-cinzel text-base font-bold text-[#FFF7E8]">
                    {item.title}
                  </h3>
                  <p className="font-tamil text-amber-300 text-xs font-semibold">
                    {item.tamilTitle}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white">
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
