import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Sparkles, Filter, CheckCircle2, ArrowRight, Clock, Award, Users, BookOpen } from 'lucide-react';
import { CourseCard } from '../components/CourseCard';
import { ALL_COURSES, CATEGORY_FILTERS } from '../data/coursesData';
import { Course, CourseCategory, PageView } from '../types';

interface ClassesPageProps {
  onEnquire: (course: Course) => void;
  onViewDetails: (course: Course) => void;
  onNavigate: (page: PageView) => void;
}

export const ClassesPage: React.FC<ClassesPageProps> = ({
  onEnquire,
  onViewDetails,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      course.name.toLowerCase().includes(query) ||
      course.tamilName.toLowerCase().includes(query) ||
      course.shortDescription.toLowerCase().includes(query) ||
      course.categoryLabel.toLowerCase().includes(query) ||
      course.syllabus.some(s => s.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FAF9F6] text-slate-900 min-h-screen">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-[#600000] text-white border-b border-[#D4AF37]/30 overflow-hidden">
        <div className="absolute inset-0 bg-dark-mandala opacity-25 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 border border-[#D4AF37]/50 text-amber-200 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Comprehensive 21+ Academy Curriculum</span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Our Courses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1B8] to-[#D4AF37]">Training Programs</span>
          </h1>

          <p className="font-tamil text-xl sm:text-2xl text-amber-200 font-bold max-w-2xl mx-auto">
            பரதநாட்டியம், கர்நாடக இசை, டியூஷன் முதல் ஆரி வேலைப்பாடுகள் வரை
          </p>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl mx-auto font-light leading-relaxed">
            Choose from classical performing arts, vocal and instrument training, school syllabus tuitions, language mastery, cognitive memory sports, and professional craft certifications.
          </p>
        </div>
      </section>

      {/* Main Course Listing Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Controls & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORY_FILTERS.map(filter => {
              const isActive = selectedCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id as CourseCategory)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#600000] text-white shadow-md border border-[#D4AF37]/50'
                      : 'bg-slate-50 hover:bg-amber-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by course name, instrument or கலை..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm focus:outline-none focus:border-[#600000] focus:ring-2 focus:ring-[#600000]/10"
            />
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-slate-600 mb-6 px-1">
          <span>
            Showing <strong>{filteredCourses.length}</strong> of {ALL_COURSES.length} courses
          </span>
          <span className="text-amber-800 font-semibold">
            ✦ All courses have flexible batch timings
          </span>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <CourseCard
                key={course.id}
                course={course}
                onEnquire={onEnquire}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-cinzel text-lg font-bold text-slate-800">
              No matching courses found
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We couldn't find any courses matching "{searchQuery}". Try selecting another category or resetting the search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#600000] text-white text-xs font-bold hover:bg-[#800000] transition-colors"
            >
              Show All Courses
            </button>
          </div>
        )}

        {/* FAQ or Guidelines banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#002366] text-white space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-[#D4AF37]">Batch Timings</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Morning batches (6:30 AM – 9:00 AM) and Evening batches (4:00 PM – 8:30 PM). Special Saturday & Sunday intensive sessions available.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-[#D4AF37]">Exams & Diplomas</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Regular grade examinations through certified music/dance universities and institutions, plus annual performance certificates.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-cinzel text-sm font-bold text-[#D4AF37]">Trial Sessions</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                We offer free assessment and demo sessions to help students find their natural passion and talent before final enrollment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
