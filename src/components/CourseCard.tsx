import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Clock, ChevronRight, ArrowUpRight, GraduationCap } from 'lucide-react';
import { Course } from '../types';
import { OptimizedImage } from './OptimizedImage';

interface CourseCardProps {
  course: Course;
  onEnquire: (course: Course) => void;
  onViewDetails?: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onEnquire,
  onViewDetails
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#e71e92]/60 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Visual Image Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <OptimizedImage
          src={course.imageUrl}
          alt={course.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          containerClassName="w-full h-full"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#831154] text-white shadow-md border border-pink-300/40">
            {course.categoryLabel}
          </span>

          {course.popular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#e71e92] text-white shadow-md">
              <Sparkles className="w-3 h-3 text-white" />
              Popular
            </span>
          )}
        </div>

        {/* Bottom overlay text on image: Tamil Title */}
        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
          <p className="font-tamil text-white font-bold text-sm drop-shadow-md">
            {course.tamilName}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-sans text-lg sm:text-xl font-bold text-[#831154] group-hover:text-[#e71e92] transition-colors leading-snug">
            {course.name}
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
            {course.shortDescription}
          </p>
        </div>

        {/* Key Attributes */}
        <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#e71e92] flex-shrink-0" />
            <span className="truncate">{course.targetAudience}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#831154] flex-shrink-0" />
            <span className="truncate">{course.schedule}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onEnquire(course)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#e71e92] hover:bg-[#d11481] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Enquire / Enroll</span>
          </button>

          {onViewDetails && (
            <button
              onClick={() => onViewDetails(course)}
              className="p-2.5 rounded-xl border border-pink-200 hover:border-[#e71e92] hover:bg-pink-50 text-slate-700 hover:text-[#e71e92] transition-colors cursor-pointer"
              title="View full course syllabus & details"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
