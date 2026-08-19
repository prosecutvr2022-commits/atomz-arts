import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/galleryData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4EFE6] text-slate-900 border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#851424]/10 border border-[#851424]/20 text-[#851424] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>Student & Parent Stories</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1926] tracking-tight">
            Voices of Our Academy Community
          </h2>

          <p className="font-tamil text-base text-[#851424] font-semibold">
            மாணவர்கள் மற்றும் பெற்றோர்களின் நற்சான்றுகள்
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-[#D4AF37]/30 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#851424]/20" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-cinzel text-xs font-bold text-slate-900">{t.name}</h4>
                  <p className="text-[11px] text-[#851424] font-semibold">{t.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
