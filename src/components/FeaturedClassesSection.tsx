import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { CourseCard } from './CourseCard';
import { ALL_COURSES, CATEGORY_FILTERS } from '../data/coursesData';
import { Course, CourseCategory, PageView } from '../types';

interface FeaturedClassesSectionProps {
  onEnquire: (course: Course) => void;
  onViewDetails: (course: Course) => void;
  onNavigate: (page: PageView) => void;
}

export const FeaturedClassesSection: React.FC<FeaturedClassesSectionProps> = ({
  onEnquire,
  onViewDetails,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = ALL_COURSES.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch =
      course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tamilName.includes(searchQuery) ||
      course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-[#FAF5FC] text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-purple-100 border border-purple-200 text-[#800080] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#800080]" />
            <span>Curriculum & Disciplines</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Classes & Training
          </h2>

          <p className="font-tamil text-base sm:text-lg text-[#800080] font-semibold">
            பயிற்றுவிக்கப்படும் 21+ சிறப்பு பயிற்சி வகுப்புகள்
          </p>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Discover our rich range of classical performing arts, vocal & instrumental music, school tuitions, language fluency, mental cognitive sports, and vocational craft programs.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORY_FILTERS.map(filter => {
              const isActive = selectedCategory === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id as CourseCategory)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#800080] text-white shadow-md border border-purple-300'
                      : 'bg-white hover:bg-purple-50 text-slate-700 border border-purple-200'
                  }`}
                >
                  <span>{filter.label}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search course or கலை..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-purple-200 text-sm focus:outline-none focus:border-[#800080] focus:ring-2 focus:ring-[#800080]/10 shadow-xs text-slate-900"
            />
          </div>
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
          <div className="text-center py-16 bg-white rounded-2xl border border-purple-200 p-8 space-y-3">
            <p className="text-slate-600 text-sm">
              No classes matched your search term "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-5 py-2 rounded-xl bg-[#800080] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* View All Classes CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => {
              onNavigate('classes');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#800080] hover:bg-[#680068] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-purple-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <BookOpen className="w-5 h-5" />
            <span>Explore Complete 21+ Courses Directory with Syllabus</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
