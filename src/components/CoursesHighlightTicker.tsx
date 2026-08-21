import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Music, BookOpen, Scissors, HeartPulse, Flame, Feather } from 'lucide-react';
import { PageView } from '../types';

interface CoursesHighlightTickerProps {
  onNavigate: (page: PageView) => void;
}

export const CoursesHighlightTicker: React.FC<CoursesHighlightTickerProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: 'Performing Arts',
      tamil: 'நடனக்கலை',
      icon: Sparkles,
      color: 'from-[#851424] to-[#4A0A12]',
      items: 'Bharatanatyam • Western Dance • Stage Choreography'
    },
    {
      title: 'Classical & Modern Music',
      tamil: 'இசை & வாத்தியங்கள்',
      icon: Music,
      color: 'from-[#163866] to-[#0A1B33]',
      items: 'Carnatic Vocal • Violin • Keyboard • Guitar • Mridangam • Tabla • Drums • Veena • Nadaswaram • Flute'
    },
    {
      title: 'Academic & Cognitive Skills',
      tamil: 'கல்வி & பயிற்சிகள்',
      icon: BookOpen,
      color: 'from-[#851424] to-[#163866]',
      items: 'Tuition (Std 1-12) • Spoken English • Spoken Hindi • Handwriting • Abacus • Chess • Carrom'
    },
    {
      title: 'Creative & Vocational Skills',
      tamil: 'கைவினை & தொழில்',
      icon: Scissors,
      color: 'from-[#78350F] to-[#451A03]',
      items: 'Drawing & Painting • Tailoring • Aari Embroidery Works • Beautician Training'
    },
    {
      title: 'Health & Mindfulness',
      tamil: 'யோகா & நலம்',
      icon: HeartPulse,
      color: 'from-[#065F46] to-[#022C22]',
      items: 'Traditional Yoga • Surya Namaskar • Pranayama & Breathwork'
    }
  ];

  return (
    <div className="relative bg-[#FAF5FC] py-10 border-b border-purple-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div>
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#800080]">
              Multi-Disciplinary Disciplines
            </span>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Explore Our Core Academy Pillars
            </h3>
          </div>

          <button
            onClick={() => onNavigate('classes')}
            className="text-xs sm:text-sm font-bold text-[#800080] hover:text-[#580058] underline underline-offset-4 transition-colors cursor-pointer"
          >
            View Complete 21+ Course Syllabus →
          </button>
        </div>

        {/* 5 Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                onClick={() => onNavigate('classes')}
                className="group p-4 rounded-2xl bg-white hover:bg-[#FAF5FC] border border-purple-100 hover:border-[#800080] shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#800080] p-0.5 shadow-xs">
                    <div className="w-full h-full rounded-[10px] bg-[#800080] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-slate-900 group-hover:text-[#800080] transition-colors">
                      {cat.title}
                    </h4>
                    <p className="font-tamil text-[11px] text-[#800080] font-semibold">
                      {cat.tamil}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-slate-600 font-normal leading-relaxed">
                  {cat.items}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
