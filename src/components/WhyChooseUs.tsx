import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, BookOpen, Scissors, Users, ShieldCheck, HeartHandshake } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Layers,
      title: 'Wide Range of 21+ Courses',
      tamil: '21+ சிறப்பு பயிற்சிகள்',
      desc: 'Performing arts, classical vocal & instruments, school tuitions, language mastery, and vocational crafts under one roof.'
    },
    {
      icon: BookOpen,
      title: 'Traditional & Modern Learning',
      tamil: 'மரபு & நவீனக் கல்வி',
      desc: 'Authentic Guru-Sishya classical foundation paired with contemporary syllabus, modern audio gear, and exam methodologies.'
    },
    {
      icon: Scissors,
      title: 'Creative Skill Development',
      tamil: 'சுயதொழில் & கைவினை கலை',
      desc: 'Aari bridal embroidery, boutique tailoring, fine arts drawing, and certified beautician training empowering financial independence.'
    },
    {
      icon: HeartHandshake,
      title: 'Supportive Learning Environment',
      tamil: 'அக்கறையுள்ள ஆசான்கள்',
      desc: 'Experienced Vidwans and dedicated faculty providing individual attention, small batch sizes, and patient mentorship.'
    },
    {
      icon: Users,
      title: 'For Children, Teens & Adults',
      tamil: 'அனைத்து வயதினருக்கும்',
      desc: 'Customized training batches for kids (starting age 4), school & college students, working professionals, and homemakers.'
    },
    {
      icon: ShieldCheck,
      title: 'Culture & Excellence Together',
      tamil: 'கலை மற்றும் ஒழுக்கம்',
      desc: 'Stage performance opportunities, annual cultural festivals, certified diplomas, and formal Arangetram guidance in Thiruvarur.'
    }
  ];

  return (
    <section className="py-20 bg-[#FAF7F2] text-slate-900 border-b border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#851424]/10 border border-[#851424]/20 text-[#851424] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>The Atomz Advantage</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1926] tracking-tight">
            Why Choose Atomz Arts Academy?
          </h2>

          <p className="font-tamil text-base sm:text-lg text-[#851424] font-semibold">
            ஏன் ஆட்டம்ஸ் ஆர்ட்ஸ் அகாடமியை தேர்வு செய்ய வேண்டும்?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group p-6 rounded-2xl bg-white border border-[#D4AF37]/30 hover:border-[#851424] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#851424] to-[#4A0A12] flex items-center justify-center text-amber-300 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-slate-900 group-hover:text-[#851424] transition-colors">
                      {point.title}
                    </h3>
                    <p className="font-tamil text-xs text-[#851424] font-semibold mt-0.5">
                      {point.tamil}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-amber-700 font-bold">
                  <span>Certified Training</span>
                  <span className="font-cinzel">0{index + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
