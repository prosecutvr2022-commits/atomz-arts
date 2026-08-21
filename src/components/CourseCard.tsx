import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Clock, ChevronRight, ArrowUpRight, GraduationCap } from 'lucide-react';
import { Course } from '../types';

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
      className="group relative flex flex-col bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#800080]/60 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Visual Image Header */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
        <img
          src={course.imageUrl}
          alt={course.name}
          referrerPolicy="no-referrer"
          onError={(e) => {
            if (course.id === 'bharatanatyam' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1lbzrLe0QiycGlPyoI_21pi9qJdNQGy-B') {
              e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1lbzrLe0QiycGlPyoI_21pi9qJdNQGy-B';
            } else if (course.id === 'keyboard' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1lZppaaUDPD7wmUwCnLE-1emjFPCsllKh') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1lZppaaUDPD7wmUwCnLE-1emjFPCsllKh';
              } else if (course.id === 'veena' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1pBBjHoQaeRGl1JAKNFsuGMmEjwcMntc1') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1pBBjHoQaeRGl1JAKNFsuGMmEjwcMntc1';
              } else if (course.id === 'nadaswaram-flute' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1uISaMXa2f_2ICs20AolbzP_r6c25Cp2f') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1uISaMXa2f_2ICs20AolbzP_r6c25Cp2f';
              } else if (course.id === 'drawing-painting' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1A-9CcMzqX9oeg7ciwiv4oRdk1fJA3RB6') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1A-9CcMzqX9oeg7ciwiv4oRdk1fJA3RB6';
              } else if (course.id === 'ari-embroidery' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1J0Wx875e9p901781VaPk-0T0jinKESb8') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1J0Wx875e9p901781VaPk-0T0jinKESb8';
              } else if (course.id === 'abacus' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1MQJLODTu2oYfmUziTlOj2XbWrd5AeyPk') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1MQJLODTu2oYfmUziTlOj2XbWrd5AeyPk';
              } else if (course.id === 'spoken-hindi' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1skU4h9p8ctKghH2QrjFwr_jlHA315UcJ') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1skU4h9p8ctKghH2QrjFwr_jlHA315UcJ';
              } else if (course.id === 'spoken-english' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1v7erFGEyIIcOYpqnCehjPUfgBXUgGS-m') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1v7erFGEyIIcOYpqnCehjPUfgBXUgGS-m';
              } else if (course.id === 'handwriting' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/19M0fpsFU79JDLxi8x9GEzSxKLYz_aRuX') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/19M0fpsFU79JDLxi8x9GEzSxKLYz_aRuX';
              } else if (course.id === 'carrom-board' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1qe3AtJJxbtu09JdS7-fnkRcu_np9Moss') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1qe3AtJJxbtu09JdS7-fnkRcu_np9Moss';
              } else if (course.id === 'tailoring' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1O4fmX_aDlNRna6nGzYAizkmz29GmaADW') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1O4fmX_aDlNRna6nGzYAizkmz29GmaADW';
              } else if (course.id === 'tuition-class-1-12' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1u05uZUPoWrX-A_JDa60X3TuHveIRvwJM') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1u05uZUPoWrX-A_JDa60X3TuHveIRvwJM';
              } else if (course.id === 'beautician-training' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1WDZH93ln5Nv1NZ407ZE8lj8ttaxVx7NT') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1WDZH93ln5Nv1NZ407ZE8lj8ttaxVx7NT';
              } else if (course.id === 'violin' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/1AN-Owo856dJtZMD6KKcrmuP6bxZN00K8') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/1AN-Owo856dJtZMD6KKcrmuP6bxZN00K8';
              } else if (course.id === 'western-dance' && e.currentTarget.src !== 'https://lh3.googleusercontent.com/d/14OBIkLtv7FKknQXpcpOgsCT_ewfhiOZ6') {
                e.currentTarget.src = 'https://lh3.googleusercontent.com/d/14OBIkLtv7FKknQXpcpOgsCT_ewfhiOZ6';
              }
          }}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 inset-x-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-[#800080] text-white shadow-md border border-purple-300/40">
            {course.categoryLabel}
          </span>

          {course.popular && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 shadow-md">
              <Sparkles className="w-3 h-3 text-slate-950" />
              Popular
            </span>
          )}
        </div>

        {/* Bottom overlay text on image: Tamil Title */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-tamil text-white font-bold text-sm drop-shadow-md">
            {course.tamilName}
          </p>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-cinzel text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#800080] transition-colors leading-snug">
            {course.name}
          </h3>

          <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed line-clamp-3">
            {course.shortDescription}
          </p>
        </div>

        {/* Key Attributes */}
        <div className="pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#800080] flex-shrink-0" />
            <span className="truncate">{course.targetAudience}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-purple-700 flex-shrink-0" />
            <span className="truncate">{course.schedule}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex items-center gap-2">
          <button
            onClick={() => onEnquire(course)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#800080] hover:bg-[#680068] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Enquire / Enroll</span>
          </button>

          {onViewDetails && (
            <button
              onClick={() => onViewDetails(course)}
              className="p-2.5 rounded-xl border border-purple-200 hover:border-[#800080] hover:bg-purple-50 text-slate-700 hover:text-[#800080] transition-colors cursor-pointer"
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
