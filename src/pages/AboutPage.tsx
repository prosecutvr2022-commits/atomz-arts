import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart, Compass, CheckCircle2, Award, Users, BookOpen, Music, ShieldCheck, MapPin } from 'lucide-react';
import { PageView } from '../types';
import { CONTACT_INFO, ACADEMY_STATS } from '../data/coursesData';
import { Logo } from '../components/Logo';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const values = [
    {
      title: 'Guru-Sishya Heritage',
      tamil: 'குரு-சீடர் மரபு',
      desc: 'Preserving the sacred classical pedagogical transmission where personal care and authentic tradition take center stage.'
    },
    {
      title: 'Inclusive Artistic Growth',
      tamil: 'அனைவருக்குமான கலை',
      desc: 'From 4-year-old beginners to working professionals and homemakers, art is a lifelong joy open to everyone.'
    },
    {
      title: 'Stage & Certification Focus',
      tamil: 'மேடை & சான்றிதழ் வழிகாட்டல்',
      desc: 'Providing students with regular stage arangetrams, temple festival concerts, and government-recognized diploma certifications.'
    },
    {
      title: 'Women Empowerment',
      tamil: 'பெண்கள் சுயசார்பு',
      desc: 'Empowering women with professional bridal Aari embroidery, fashion tailoring, and salon artistry for financial independence.'
    }
  ];

  const facultyHighlights = [
    {
      name: 'Bharatanatyam & Stage Arts',
      tamil: 'பரதநாட்டிய ஆசான்கள்',
      exp: 'Kalakshetra & Thanjavur Tradition',
      desc: 'Expert dance teachers focusing on Adavus, Abhinaya, Nattuvangam, Mudras, and Salangai Pooja preparation.'
    },
    {
      name: 'Carnatic Vocal & Instruments',
      tamil: 'இசை & வாத்திய வித்வான்கள்',
      exp: 'Kaveri Delta Musical Lineage',
      desc: 'Master Vidwans training students in Sruthi, Raga Lakshana, Gamakas, and Sahitya Bhava for Veena, Violin, and Mridangam.'
    },
    {
      name: 'Academic Mentors & Languages',
      tamil: 'கல்வி & மொழி ஆசிரியர்கள்',
      exp: 'School Board & Competitive Exams',
      desc: 'Dedicated subject experts for State Board / CBSE syllabus (Std 1-12) plus Hindi Prachar Sabha & Spoken English fluency.'
    },
    {
      name: 'Vocational & Design Mentors',
      tamil: 'கைவினை & அழகுகலை பயிற்றுநர்கள்',
      exp: 'Certified Industry Artisans',
      desc: 'Professional designers guiding students step-by-step through bridal Aari works, modern blouse tailoring, and skin/hair care.'
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-slate-900">
      {/* Header Banner */}
      <section className="relative py-20 bg-[#600000] text-white border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="absolute inset-0 bg-dark-mandala opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-amber-200 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Legacy of Thiruvarur Classical Arts</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-cinzel text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1B8] to-[#D4AF37]">Atomz Arts Academy</span>
          </motion.h1>

          <p className="font-tamil text-xl sm:text-2xl text-amber-200 font-bold max-w-2xl mx-auto">
            கலை, பண்பாடு, கல்வி மற்றும் வாழ்வியல் திறன்களை வளர்க்கும் திருவாரூரின் முதன்மை மையம்
          </p>

          <p className="text-slate-200 text-base max-w-3xl mx-auto font-light leading-relaxed pt-2">
            Atomz Arts Academy was founded in Thiruvarur with a singular sacred mission: to kindle artistic brilliance, preserve rich Tamil cultural traditions, and foster 21st-century academic and vocational excellence under one nurturing sanctuary.
          </p>
        </div>
      </section>

      {/* Story & Legacy Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#600000]">
              <Compass className="w-4 h-4 text-[#D4AF37]" />
              <span>Our Roots & Sacred Soil</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] leading-tight">
              Rooted in the Musical & Cultural Cradle of Thiruvarur
            </h2>

            <p className="text-slate-700 leading-relaxed">
              Thiruvarur is historically known as the sanctum of the Trinity of Carnatic Music — Sri Tyagaraja, Sri Muthuswami Dikshitar, and Sri Syama Sastri — and the seat of the majestic Thyagaraja Temple and Azhi Ther car festival. 
            </p>

            <p className="text-slate-700 leading-relaxed">
              Atomz Arts Academy draws inspiration from this rich soil. We understand that classical arts are not just hobbies, but spiritual disciplines that cultivate focus, emotional equilibrium, rhythm, and self-confidence.
            </p>

            <div className="p-6 rounded-2xl bg-[#002366] text-white shadow-lg space-y-3">
              <h3 className="font-cinzel text-lg font-bold text-[#D4AF37]">
                The Academy Philosophy
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                "Every child is born with an inherent spark. By combining disciplined classical training with compassionate teaching and modern cognitive exercises, we build confident, culturally anchored citizens."
              </p>
            </div>

            {/* Official Academy Seal Showcase */}
            <div className="p-4 rounded-2xl bg-white border border-[#D4AF37]/50 shadow-md flex items-center gap-4">
              <div className="w-14 h-16 sm:w-16 sm:h-20 flex-shrink-0">
                <Logo size="lg" variant="crest" />
              </div>
              <div className="min-w-0">
                <h4 className="font-cinzel text-sm font-bold text-[#600000]">Official Academy Seal</h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  Incorporates Yoga (Padmasana), Academic Tuitions, Bharatanatyam, Martial Arts, and our Global Arts vision.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-3 bg-gradient-to-b from-[#D4AF37]/50 via-[#600000]/40 to-[#002366]/40 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=900&auto=format&fit=crop"
                alt="Classical Indian Fine Arts and Learning"
                referrerPolicy="no-referrer"
                className="w-full h-96 object-cover rounded-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/75 backdrop-blur-md text-white border border-[#D4AF37]/40">
                <div className="font-cinzel text-sm font-bold text-amber-300">Puthu Theru, Thiruvarur</div>
                <div className="text-xs text-slate-300">Serving students across Thiruvarur and Kaveri Delta districts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-[#FAF7F2] border-y border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#600000]">
              Our Guiding Pillars
            </span>
            <h2 className="font-cinzel text-3xl font-extrabold text-slate-900">
              Core Values of Atomz Academy
            </h2>
            <p className="font-tamil text-sm text-[#600000] font-semibold">
              எங்கள் வழிகாட்டும் நற்பண்புகள்
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-[#600000]/10 hover:border-[#D4AF37] shadow-sm hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#600000] text-[#D4AF37] flex items-center justify-center font-cinzel font-bold text-sm mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-cinzel text-base font-bold text-slate-900 mb-1">{v.title}</h3>
                <p className="font-tamil text-xs text-[#600000] font-semibold mb-2">{v.tamil}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty & Pedagogy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="font-cinzel text-xs font-bold uppercase tracking-widest text-[#600000]">
            Dedicated Faculty
          </span>
          <h2 className="font-cinzel text-3xl font-extrabold text-slate-900">
            Our Mentors & Masters
          </h2>
          <p className="font-tamil text-sm text-[#600000] font-semibold">
            அனுபவமிக்க ஆசான்கள் மற்றும் வழிகாட்டிகள்
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyHighlights.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#600000] shadow-sm space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-[#600000]/10 text-[#600000] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-cinzel text-sm font-bold text-slate-900">{f.name}</h3>
                <p className="font-tamil text-xs text-[#600000] font-semibold">{f.tamil}</p>
              </div>
              <div className="text-[11px] font-bold text-[#002366] bg-blue-50 px-2.5 py-1 rounded-md inline-block">
                {f.exp}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-[#600000] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="font-cinzel text-3xl sm:text-4xl font-extrabold text-white">
            Experience the Joy of Learning at Atomz
          </h2>
          <p className="text-slate-200 text-sm sm:text-base">
            Enroll your children or yourself today. Classes are available with flexible weekday and weekend morning/evening slots.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('classes')}
              className="px-7 py-3 rounded-full gold-gradient-bg text-slate-950 font-bold text-sm shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              Explore 21+ Courses
            </button>
            <button
              onClick={onOpenEnquiry}
              className="px-7 py-3 rounded-full border border-white/40 hover:bg-white/10 text-white font-bold text-sm transition-all cursor-pointer"
            >
              Contact Admissions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
