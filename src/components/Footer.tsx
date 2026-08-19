import React from 'react';
import { Phone, MapPin, Mail, Clock, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO, ALL_COURSES } from '../data/coursesData';
import { PageView, Course } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectCourse?: (course: Course) => void;
  onOpenEnquiry?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCourse, onOpenEnquiry }) => {
  const topCourses = ALL_COURSES.slice(0, 8);

  return (
    <footer className="relative bg-[#0F0A14] text-slate-300 border-t-2 border-[#D4AF37]/40 overflow-hidden">
      {/* Decorative Golden Arch Pattern Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#851424] via-[#D4AF37] to-[#163866]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4">
            <Logo size="lg" />
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-light">
              <strong>Atomz Arts Academy (Heart of Arts)</strong> is a premier multidisciplinary cultural and educational academy in Thiruvarur, Tamil Nadu. Dedicated to preserving ancient South Indian traditions while cultivating contemporary creative and academic excellence.
            </p>
            <div className="pt-2 font-tamil text-amber-300/90 text-xs leading-relaxed border-l-2 border-[#D4AF37] pl-3">
              கலை, கலாச்சாரம், இசை, நடனம், கல்வி மற்றும் கைவினை பயிற்சிகளின் சங்கமம்.
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-base font-bold text-[#FFE898] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#851424] border border-[#D4AF37]"></span>
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { id: 'home' as PageView, label: 'Home / முகப்பு' },
                { id: 'about' as PageView, label: 'About Us / அகாடமி பற்றி' },
                { id: 'classes' as PageView, label: 'Our 21+ Classes / பயிற்சிகள்' },
                { id: 'gallery' as PageView, label: 'Visual Gallery / புகைப்படங்கள்' },
                { id: 'contact' as PageView, label: 'Contact & Admissions / தொடர்புக்கு' }
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-base font-bold text-[#FFE898] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#163866] border border-[#D4AF37]"></span>
              Featured Disciplines
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {topCourses.map(course => (
                <li key={course.id}>
                  <button
                    onClick={() => {
                      if (onSelectCourse) onSelectCourse(course);
                      onNavigate('classes');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FFE898] transition-colors text-left flex items-baseline gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#D4AF37]">•</span>
                    <span className="font-medium text-slate-200">{course.name}</span>
                    <span className="font-tamil text-[11px] text-amber-300/80">({course.tamilName})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Official Contact & Location */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-base font-bold text-[#FFE898] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#851424] border border-[#D4AF37]"></span>
              Academy Contact
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Atomz Arts Academy</p>
                  <p className="text-slate-400">Puthu Theru, Thiruvarur, Tamil Nadu</p>
                  <p className="font-tamil text-[11px] text-amber-300/80">புதுத்தெரு, திருவாரூர்.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Call for Admissions:</p>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1 font-mono text-amber-300 font-bold mt-1">
                    {CONTACT_INFO.phoneNumbers.map(phone => (
                      <a key={phone} href={`tel:${phone}`} className="hover:underline">
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <p className="text-slate-300">{CONTACT_INFO.workingHours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 <strong>Atomz Arts Academy</strong>. All Rights Reserved. Nurturing Talent & Culture.
          </p>
          <div className="flex items-center gap-4 text-amber-200/80">
            <span>Puthu Theru, Thiruvarur</span>
            <span>•</span>
            <span>Heart of Arts</span>
            <span>•</span>
            <span className="font-tamil">ஆட்டம்ஸ் ஆர்ட்ஸ் அகாடமி</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
