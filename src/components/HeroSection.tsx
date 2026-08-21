import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, GraduationCap, Phone, ArrowRight, Play, Award, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO, ACADEMY_STATS } from '../data/coursesData';
import { PageView } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-gradient-to-b from-[#FAF5FC] via-[#FFFFFF] to-[#FAF5FC] text-[#181124] overflow-hidden pt-8 pb-16 lg:py-20 border-b border-purple-100">
      {/* Background Soft Purple Mandala Motifs */}
      <div className="absolute inset-0 bg-mandala-pattern opacity-40 pointer-events-none" />

      {/* Atmospheric Glowing Light Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#800080]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#800080]/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Cultural Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF5FC] border border-[#800080]/30 shadow-xs backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-[#800080]" />
              <span className="font-cinzel text-xs uppercase tracking-widest text-[#800080] font-bold">
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
              <h1 className="font-cinzel text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-none">
                <span className="block text-[#800080] drop-shadow-xs">
                  ATOMZ ARTS
                </span>
                <span className="block text-[#181124] tracking-wider mt-1">
                  ACADEMY
                </span>
              </h1>

              {/* Tamil Identity Heading & Tagline */}
              <div className="pt-2 flex flex-wrap items-baseline gap-3">
                <h2 className="font-playfair italic text-2xl sm:text-3xl text-[#800080] font-bold">
                  Heart of Arts
                </h2>
                <span className="text-[#800080]">•</span>
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
              <strong className="text-slate-900 font-bold">Nurturing Talent, Culture & Creativity Through Arts and Education.</strong> Where ancient South Indian classical traditions meet modern intellectual and creative skill development under one nurturing roof in Thiruvarur.
            </motion.p>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-sm text-slate-800 font-medium"
            >
              <div className="w-7 h-7 rounded-full bg-[#800080] flex items-center justify-center shadow-xs">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <span>
                <strong className="text-slate-900">Puthu Theru, Thiruvarur, Tamil Nadu</strong> (புதுத்தெரு, திருவாரூர்)
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
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#800080] hover:bg-[#680068] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-purple-900/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore 21+ Classes</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-purple-50 border-2 border-[#800080] text-[#800080] font-bold text-sm sm:text-base shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-[#800080]" />
                <span>Admissions 2026</span>
              </button>
            </motion.div>

            {/* Direct Helpline Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-600 bg-white p-3 rounded-2xl border border-purple-100 shadow-xs max-w-xl"
            >
              <span className="text-[#800080] font-bold flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" />
                Helplines:
              </span>
              <div className="flex flex-wrap items-center gap-2 font-mono font-bold text-slate-900">
                {CONTACT_INFO.phoneNumbers.map((phone, i) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="hover:text-[#800080] transition-colors whitespace-nowrap"
                  >
                    {phone}
                    {i < CONTACT_INFO.phoneNumbers.length - 1 && <span className="text-purple-300 ml-2">•</span>}
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
              {/* Outer Purple Arch Frame */}
              <div className="relative rounded-3xl p-2.5 sm:p-3 bg-gradient-to-b from-[#800080] via-[#A81CA8]/40 to-[#800080]/80 shadow-2xl border-2 border-white">
                <div className="relative rounded-2xl overflow-hidden bg-slate-100 aspect-[9/16] w-full shadow-inner">
                  {/* Native High-Resolution Bharatanatyam Classical Dance Training Visual */}
                  <img
                    src="/bharatanatyam.png"
                    alt="Bharatanatyam Classical Dance Training"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1lbzrLe0QiycGlPyoI_21pi9qJdNQGy-B';
                    }}
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Badge Top Right */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-2 sm:-top-4 sm:-right-3 p-2.5 sm:p-3 rounded-2xl bg-[#800080] border-2 border-white shadow-xl text-center z-20 text-white"
              >
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 mx-auto" />
                <div className="text-[11px] sm:text-xs font-extrabold text-white mt-1">100% Practical</div>
                <div className="text-[9px] sm:text-[10px] text-purple-200 font-medium">Guru-Sishya Tradition</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-purple-100 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {ACADEMY_STATS.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white border border-purple-100 shadow-xs text-center sm:text-left space-y-0.5 hover:border-purple-300 transition-colors">
              <div className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#800080]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">
                {stat.label}
              </div>
              <div className="font-tamil text-[11px] text-[#800080] font-semibold">
                {stat.tamilLabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
