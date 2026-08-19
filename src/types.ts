export type CourseCategory = 'all' | 'dance' | 'music' | 'education' | 'creative' | 'wellness';

export interface Course {
  id: string;
  name: string;
  tamilName: string;
  category: CourseCategory;
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  imageUrl: string;
  targetAudience: string;
  duration: string;
  schedule: string;
  highlights: string[];
  syllabus: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  tamilTitle: string;
  category: 'dance' | 'music' | 'classes' | 'students' | 'events' | 'performances';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  date?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  tamilName?: string;
  role: string;
  course: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  tamilRole: string;
  experience: string;
  specialization: string;
  image: string;
  description: string;
}

export type PageView = 'home' | 'about' | 'classes' | 'gallery' | 'contact';

export interface EnquiryFormData {
  studentName: string;
  parentName?: string;
  phone: string;
  email?: string;
  courseInterest: string;
  ageGroup?: string;
  preferredTiming?: string;
  message?: string;
}
