import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Compass, CheckCircle2, Award, Users } from 'lucide-react';
import { PageView } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface WelcomeSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  return (
    <section className="relative py-20 bg-white text-slate-800 border-b border-pink-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Collage with Cultural & Modern Learning (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative mx-auto max-w-md lg:max-w-none"
            >
              {/* Primary Image: Dance & Music Harmony */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-pink-50">
                <OptimizedImage
                  src="/welcome-arts.webp"
                  fallbackSrc="/welcome-arts.png"
                  alt="Traditional Arts and Modern Learning at Atomz Academy"
                  className="w-full h-80 sm:h-96 object-cover"
                  containerClassName="w-full h-80 sm:h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#831154]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-pink-200">
                    Kaveri Delta Legacy
                  </span>
                  <h4 className="font-sans text-lg font-bold">Thiruvarur Classical Heritage</h4>
                </div>
              </div>

              {/* Floating Overlap Card: Cultural Meeting Modern */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-5 right-2 sm:-bottom-6 sm:-right-6 w-44 sm:w-56 p-3 sm:p-4 rounded-2xl bg-white border border-pink-200 shadow-xl"
              >
                <div className="flex items-center gap-2 text-[#e71e92]">
                  <Award className="w-5 h-5 text-[#e71e92]" />
                  <span className="font-sans text-xs font-bold uppercase">All Under One Roof</span>
                </div>
                <p className="text-xs text-slate-600 mt-1 font-medium">
                  21+ Arts, Music, Academics & Vocational Crafts in Thiruvarur.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Narrative Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#e71e92]">
                <Sparkles className="w-4 h-4 text-[#e71e92]" />
                <span>Nurturing The Soul of Arts</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#831154] tracking-tight leading-tight">
                Welcome to <span className="text-[#e71e92]">Atomz Arts Academy</span>
              </h2>

              <p className="font-tamil text-base sm:text-lg text-[#e71e92] font-semibold">
                கலை, பண்பாடு, கல்வி மற்றும் படைப்பாற்றலை வளர்க்கும் கலைக்கூடம்
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base text-slate-700 leading-relaxed font-normal"
            >
              At <strong>Atomz Arts Academy</strong>, we believe every individual possesses innate creativity waiting to be awakened. Located in <strong>Puthu Theru, Thiruvarur</strong>, our academy is a vibrant sanctuary where traditional Tamil classical arts seamlessly blend with modern intellectual and vocational skill development.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-slate-600 leading-relaxed"
            >
              Whether mastering the intricate footwork of <em>Bharatanatyam</em>, exploring the divine gamakas of the <em>Saraswati Veena</em> and <em>Carnatic Vocal</em>, achieving academic breakthroughs with <em>Tuition and Abacus</em>, or establishing financial independence through <em>Aari Embroidery and Tailoring</em> — Atomz Arts Academy provides comprehensive, compassionate mentorship for all ages.
            </motion.p>

            {/* Value Pillars List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
            >
              {[
                'Traditional Guru-Sishya Pedagogy with Individual Care',
                'Comprehensive 21+ Courses for Children, Teens & Adults',
                'Stage Opportunities, Arangetrams & Certified Diplomas',
                'Empowering Women with Self-Employment Craft Skills'
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#e71e92] flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-full bg-[#e71e92] hover:bg-[#d11481] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                Learn More About Our Heritage
              </button>

              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-full border-2 border-[#831154] text-[#831154] hover:bg-pink-50 font-bold text-sm transition-all cursor-pointer"
              >
                Book a Free Trial Session
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
