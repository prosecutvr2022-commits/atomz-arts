import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { CourseDetailModal } from './components/CourseDetailModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { QuickContactFab } from './components/QuickContactFab';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ClassesPage } from './pages/ClassesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { Course, GalleryItem, PageView } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForEnquiry, setSelectedCourseForEnquiry] = useState<Course | null>(null);
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Handle page navigation with smooth scroll to top
  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Enquiry Modal
  const handleOpenEnquiry = (course?: Course) => {
    setSelectedCourseForEnquiry(course || null);
    setIsEnquiryModalOpen(true);
  };

  // Open Course Details Modal
  const handleViewCourseDetails = (course: Course) => {
    setSelectedCourseForDetail(course);
  };

  // Switch from Course Details to Enquiry Modal
  const handleEnquireFromDetail = (course: Course) => {
    setSelectedCourseForDetail(null);
    handleOpenEnquiry(course);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 font-outfit antialiased overflow-x-hidden w-full max-w-full selection:bg-[#600000] selection:text-[#FFF1B8]">
      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Dynamic Page View */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
            onViewCourseDetails={handleViewCourseDetails}
            onSelectGalleryImage={setSelectedGalleryItem}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry()}
          />
        )}

        {currentPage === 'classes' && (
          <ClassesPage
            onEnquire={handleOpenEnquiry}
            onViewDetails={handleViewCourseDetails}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onSelectImage={setSelectedGalleryItem}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onSelectCourse={handleViewCourseDetails}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Floating Quick Action Contacts (Phone helplines & WhatsApp) */}
      <QuickContactFab onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Admission / Trial Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => {
          setIsEnquiryModalOpen(false);
          setSelectedCourseForEnquiry(null);
        }}
        preselectedCourse={selectedCourseForEnquiry}
      />

      {/* Full Course Syllabus & Details Modal */}
      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onEnquire={handleEnquireFromDetail}
      />

      {/* Full-Screen Gallery Image Lightbox */}
      <ImageLightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />
    </div>
  );
}
