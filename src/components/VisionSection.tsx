import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Award, Music, BookOpen } from 'lucide-react';
import { PageView } from '../types';

interface VisionSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <section className="relative py-20 bg-[#680068] text-white border-b border-purple-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-[#800080] text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-4 h-4 text-[#800080]" />
              <span>Vision & Cultural Commitment</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Preserving Tradition. <br />
              <span className="text-purple-200">
                Inspiring Creativity.
              </span> <br />
              Building Talent.
            </h2>

            <p className="font-tamil text-lg text-purple-200 font-semibold">
              பாரம்பரியத்தை போற்றுவோம் • படைப்பாற்றலை வளர்ப்போம் • திறமைகளை உருவாக்குவோம்
            </p>

            <p className="text-purple-100 text-sm sm:text-base leading-relaxed font-normal">
              Thiruvarur has historically been the epicenter of South Indian devotional and classical music, the cradle of great composers and dancers. Atomz Arts Academy honors this sacred soil by instilling disciplined artistic mastery and 21st-century educational confidence into every learner.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/10 border border-purple-300/30">
                <div className="font-cinzel text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-purple-200 font-medium mt-1">Dedicated Mentorship</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 border border-purple-300/30">
                <div className="font-cinzel text-2xl font-bold text-white">21+</div>
                <div className="text-xs text-purple-200 font-medium mt-1">Courses Under One Roof</div>
              </div>
              <div className="p-4 rounded-xl bg-white/10 border border-purple-300/30">
                <div className="font-cinzel text-2xl font-bold text-white">All Ages</div>
                <div className="text-xs text-purple-200 font-medium mt-1">Children to Adults</div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-full bg-white hover:bg-purple-50 text-[#800080] font-bold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                Read Our Story & Faculty
              </button>
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-full border-2 border-white hover:bg-white/15 text-white font-bold text-sm transition-all cursor-pointer"
              >
                Enroll for Admissions 2026
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-3 bg-purple-900/60 shadow-2xl border border-purple-400/40">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop"
                  alt="Carnatic and Classical Arts in Thiruvarur"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
