import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { CoursesHighlightTicker } from '../components/CoursesHighlightTicker';
import { WelcomeSection } from '../components/WelcomeSection';
import { FeaturedClassesSection } from '../components/FeaturedClassesSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { VisionSection } from '../components/VisionSection';
import { GalleryPreview } from '../components/GalleryPreview';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactCtaBanner } from '../components/ContactCtaBanner';
import { Course, GalleryItem, PageView } from '../types';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenEnquiry: (course?: Course) => void;
  onViewCourseDetails: (course: Course) => void;
  onSelectGalleryImage: (item: GalleryItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onViewCourseDetails,
  onSelectGalleryImage
}) => {
  return (
    <div className="space-y-0">
      <HeroSection onNavigate={onNavigate} onOpenEnquiry={() => onOpenEnquiry()} />
      <CoursesHighlightTicker onNavigate={onNavigate} />
      <WelcomeSection onNavigate={onNavigate} onOpenEnquiry={() => onOpenEnquiry()} />
      <FeaturedClassesSection
        onEnquire={onOpenEnquiry}
        onViewDetails={onViewCourseDetails}
        onNavigate={onNavigate}
      />
      <WhyChooseUs />
      <VisionSection onNavigate={onNavigate} onOpenEnquiry={() => onOpenEnquiry()} />
      <GalleryPreview onNavigate={onNavigate} onSelectImage={onSelectGalleryImage} />
      <TestimonialsSection />
      <ContactCtaBanner onOpenEnquiry={() => onOpenEnquiry()} />
    </div>
  );
};
