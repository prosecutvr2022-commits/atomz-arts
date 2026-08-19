import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Phone, MessageCircle, GraduationCap, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/coursesData';

interface ContactCtaBannerProps {
  onOpenEnquiry: () => void;
}

export const ContactCtaBanner: React.FC<ContactCtaBannerProps> = ({ onOpenEnquiry }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `🙏 Vanakkam Atomz Arts Academy! I want to enroll for a class. Please share details.`
    );
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative py-20 bg-[#120B16] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#851424]/40 via-[#160E1A] to-[#163866]/40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 z-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#851424] border border-[#D4AF37]/40 text-amber-200 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Admissions Open For 2026 Batches</span>
        </div>

        <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFF7E8] tracking-tight">
          Begin Your Artistic Journey With Us
        </h2>

        <p className="font-playfair italic text-xl text-amber-300">
          Discover your talent, develop your skills and experience the joy of learning at Atomz Arts Academy.
        </p>

        <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
          Join our supportive community of passionate learners in Thiruvarur. All age groups from children to working adults are warmly welcome.
        </p>

        {/* 4 Helplines Display */}
        <div className="pt-2">
          <p className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-2">
            Call Any of Our Direct Academy Helplines:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {CONTACT_INFO.phoneNumbers.map(phone => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#851424] border border-amber-500/30 text-white font-mono text-sm font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{phone}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full gold-gradient-bg text-slate-950 font-extrabold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Join Our Classes</span>
          </button>

          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm sm:text-base shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
