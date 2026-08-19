import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Clock, Users, Sparkles, BookOpen, GraduationCap, Phone, MessageCircle } from 'lucide-react';
import { Course } from '../types';
import { CONTACT_INFO } from '../data/coursesData';

interface CourseDetailModalProps {
  course: Course | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  isOpen,
  onClose,
  onEnquire
}) => {
  if (!isOpen || !course) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-3xl bg-[#FAF7F2] border border-[#D4AF37]/50 rounded-2xl shadow-2xl overflow-hidden my-8"
        >
          {/* Hero Header with Course Image */}
          <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
            <img
              src={course.imageUrl}
              alt={course.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140E17] via-[#140E17]/60 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-all cursor-pointer"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Content */}
            <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
              <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-[#851424] text-amber-200 border border-[#D4AF37]/30">
                {course.categoryLabel}
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#FFF7E8]">
                {course.name}
              </h2>
              <p className="font-tamil text-amber-300 text-sm font-semibold">
                {course.tamilName}
              </p>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
            {/* Overview */}
            <div>
              <h4 className="font-cinzel text-sm font-bold text-[#851424] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                Course Overview
              </h4>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Users className="w-4 h-4 text-[#851424] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Eligibility:</strong>
                  <span className="text-slate-600">{course.targetAudience}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-[#0E2A47] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Duration:</strong>
                  <span className="text-slate-600">{course.duration}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-slate-900">Schedule:</strong>
                  <span className="text-slate-600">{course.schedule}</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {course.highlights && course.highlights.length > 0 && (
              <div>
                <h4 className="font-cinzel text-sm font-bold text-[#851424] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-[#D4AF37]" />
                  Key Highlights & Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-200 text-xs sm:text-sm text-slate-800">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Syllabus Overview */}
            {course.syllabus && course.syllabus.length > 0 && (
              <div>
                <h4 className="font-cinzel text-sm font-bold text-[#851424] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  Curriculum & Learning Stages
                </h4>
                <ol className="space-y-2">
                  {course.syllabus.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#851424] text-white text-[11px] font-bold flex items-center justify-center">
                        {index + 1}
                      </span>
                      <span className="pt-0.5">{topic}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {/* Modal Footer CTA */}
          <div className="p-4 sm:p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs text-slate-600">
              <span>Have questions? Call </span>
              <strong className="text-slate-900">{CONTACT_INFO.primaryPhone}</strong>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onEnquire(course);
                }}
                className="px-6 py-2.5 rounded-xl gold-gradient-bg text-slate-950 font-bold text-sm shadow-md hover:brightness-105 transition-all cursor-pointer flex items-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Apply for this Course</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
