import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, GraduationCap, Phone, ArrowRight, Play, Award, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, ACADEMY_STATS } from '../data/coursesData';
import { PageView } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-gradient-to-b from-[#FFF1F7] via-[#FFFFFF] to-[#FFF1F7] text-[#0F2942] overflow-hidden pt-8 pb-16 lg:py-20 border-b border-pink-100">
      {/* Atmospheric Glowing Light Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#e71e92]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#831154]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Cultural Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF1F7] border border-[#e71e92]/30 shadow-xs backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#e71e92]" />
              <span className="font-sans text-xs uppercase tracking-widest text-[#e71e92] font-extrabold">
                Center of Performing Arts & Excellence
              </span>
            </motion.div>

            {/* Main Academy Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="font-sans text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-none">
                <span className="block text-[#e71e92] drop-shadow-xs">
                  ATOMZ ARTS
                </span>
                <span className="block text-[#e71e92] tracking-wider mt-1">
                  ACADEMY
                </span>
              </h1>

              {/* Tamil Identity Heading & Tagline */}
              <div className="pt-2 flex flex-wrap items-baseline gap-3">
                <h2 className="font-sans italic text-2xl sm:text-3xl text-[#e71e92] font-bold">
                  Heart of Arts
                </h2>
                <span className="text-[#e71e92]">•</span>
                <span className="font-tamil text-lg sm:text-xl font-bold text-slate-800 tracking-wide">
                  ஆட்டம்ஸ் ஆர்ட்ஸ் அகாடமி
                </span>
              </div>
            </motion.div>

            {/* Subtitle & Mission Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl"
            >
              <strong className="text-[#831154] font-bold">Nurturing Talent, Culture & Creativity Through Arts and Education.</strong> Where ancient South Indian classical traditions meet modern intellectual and creative skill development under one nurturing roof in Thiruvarur.
            </motion.p>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-slate-800 font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-[#e71e92] flex items-center justify-center shadow-xs">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span>
                <strong className="text-[#831154]">Puthu Theru, Thiruvarur, Tamil Nadu</strong> (புதுத்தெரு, திருவாரூர்)
              </span>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onNavigate('classes')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#e71e92] hover:bg-[#d11481] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-pink-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore 21+ Classes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-pink-50 border-2 border-[#e71e92] text-[#e71e92] font-bold text-sm sm:text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-[#e71e92]" />
                <span>Admissions 2026</span>
              </button>
            </motion.div>

            {/* Direct Helpline Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 bg-white p-3 rounded-2xl border border-pink-100 shadow-xs max-w-xl"
            >
              <span className="text-[#e71e92] font-bold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Helplines:
              </span>
              <div className="flex flex-wrap items-center gap-2 font-mono font-bold text-slate-900">
                {CONTACT_INFO.phoneNumbers.map((phone, i) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#e71e92] transition-colors whitespace-nowrap"
                  >
                    {phone}
                    {i < CONTACT_INFO.phoneNumbers.length - 1 && <span className="text-pink-300 ml-2">•</span>}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Frame with Bharatanatyam Art (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[375px]"
            >
              {/* Outer Magenta Arch Frame */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#831154] via-[#e71e92]/50 to-[#831154]/90 shadow-2xl border-2 border-white">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[9/16] w-full shadow-inner">
                  {/* Native High-Resolution Bharatanatyam Classical Dance Training Visual */}
                  <OptimizedImage
                    src="/bharatanatyam.webp"
                    fallbackSrc="/bharatanatyam.png"
                    alt="Bharatanatyam Classical Dance Training"
                    priority={true}
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                    containerClassName="w-full h-full"
                  />
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 p-2.5 sm:p-3 rounded-2xl bg-[#831154] border-2 border-white shadow-xl text-center z-20 text-white"
              >
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#e71e92] mx-auto" />
                <div className="text-[11px] sm:text-xs font-extrabold text-white mt-1">100% Practical</div>
                <div className="text-[9px] sm:text-[10px] text-pink-200 font-medium">Guru-Sishya Tradition</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-pink-100 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {ACADEMY_STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-pink-100 shadow-xs text-center sm:text-left space-y-0.5 hover:border-pink-300 transition-colors">
              <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#831154]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="font-tamil text-[11px] text-[#e71e92] font-semibold">
                {stat.tamilLabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
