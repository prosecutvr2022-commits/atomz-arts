import { GalleryItem, Testimonial, FacultyMember } from '../types';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All Showcase', tamilLabel: 'அனைத்தும்' },
  { id: 'dance', label: 'Classical Dance', tamilLabel: 'நடனம்' },
  { id: 'music', label: 'Music & Instruments', tamilLabel: 'இசை & வாத்தியங்கள்' },
  { id: 'classes', label: 'Classrooms & Crafts', tamilLabel: 'பயிற்சி & கைவினை' },
  { id: 'performances', label: 'Stage Shows', tamilLabel: 'மேடை நிகழ்வுகள்' },
  { id: 'events', label: 'Festivals & Awards', tamilLabel: 'கலை விழாக்கள்' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Bharatanatyam Arangetram Performance',
    tamilTitle: 'பரதநாட்டிய அரங்கேற்ற நிகழ்வு',
    category: 'dance',
    categoryLabel: 'Classical Dance',
    imageUrl: '/bharatanatyam.png',
    caption: 'Senior disciples presenting traditional Varnam with intense Abhinaya and footwork in classical silk costume.',
    date: 'Annual Cultural Festival',
    featured: true
  },
  {
    id: 'gal-2',
    title: 'Carnatic Music Recital & Vocal Concert',
    tamilTitle: 'கர்நாடக சங்கீத வாய்ப்பாட்டு கச்சேரி',
    category: 'music',
    categoryLabel: 'Music & Instruments',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    caption: 'Vocal ensemble performance accompanied by Violin and Mridangam during Navaratri Sangeetha Utsavam.',
    date: 'Kaveri Delta Isai Sangamam',
    featured: true
  },
  {
    id: 'gal-3',
    title: 'Violin & Veena Masterclasses',
    tamilTitle: 'வயலின் & வீணை இசை வகுப்பு',
    category: 'music',
    categoryLabel: 'Music & Instruments',
    imageUrl: 'https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=1200&auto=format&fit=crop',
    caption: 'Students receiving personalized guidance on microtone gamakas and bow velocity.',
    date: 'Weekly Studio Session'
  },
  {
    id: 'gal-4',
    title: 'Mridangam & Percussion Laya Workshop',
    tamilTitle: 'மிருதங்க லய பயிற்சி பட்டறை',
    category: 'music',
    categoryLabel: 'Music & Instruments',
    imageUrl: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1200&auto=format&fit=crop',
    caption: 'Young percussionists mastering intricate Adi tala korvais and tempo transitions.',
    date: 'Laya Sangamam'
  },
  {
    id: 'gal-5',
    title: 'Aari Embroidery & Bridal Blouse Craft',
    tamilTitle: 'ஆரி எம்பிராய்டரி கைவினை பயிற்சி',
    category: 'classes',
    categoryLabel: 'Vocational Craft',
    imageUrl: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Women artisans working on bridal zari motifs, stone embellishments, and Maggam frame designing.',
    date: 'Self-Employment Batch'
  },
  {
    id: 'gal-6',
    title: 'Junior Fine Arts & Canvas Painting Exhibition',
    tamilTitle: 'ஓவியக் கண்காட்சி & வண்ணங்கள்',
    category: 'classes',
    categoryLabel: 'Art & Drawing',
    imageUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop',
    caption: 'Student artwork gallery showcasing traditional temple art, water color paintings, and oil pastel landscapes.',
    date: 'Children Fine Art Expo',
    featured: true
  },
  {
    id: 'gal-7',
    title: 'Surya Namaskar & Yoga Mindfulness Camp',
    tamilTitle: 'யோகாசன மற்றும் பிராணாயாம பயிற்சி',
    category: 'students',
    categoryLabel: 'Health & Yoga',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    caption: 'Morning sunrise yoga batch focusing on flexibility, breath control, and student concentration.',
    date: 'International Yoga Day'
  },
  {
    id: 'gal-8',
    title: 'Abacus & Speed Math Championship',
    tamilTitle: 'அபாகஸ் வேகக் கணித போட்டி',
    category: 'events',
    categoryLabel: 'Academic Events',
    imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=1200&auto=format&fit=crop',
    caption: 'Young prodigies demonstrating lightning-speed mental arithmetic without paper or calculators.',
    date: 'State Talent Contest'
  },
  {
    id: 'gal-9',
    title: 'Western Dance & Contemporary Stage Show',
    tamilTitle: 'மேற்கத்திய நடன மேடை நிகழ்ச்சி',
    category: 'performances',
    categoryLabel: 'Performances',
    imageUrl: 'https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1200&auto=format&fit=crop',
    caption: 'High-octane choreography presentation by the Atomz Western Dance troupe at district youth fest.',
    date: 'Youth Cultural Fest',
    featured: true
  },
  {
    id: 'gal-10',
    title: 'Chess Tournament & Strategy Rounds',
    tamilTitle: 'செஸ் சதுரங்கப் போட்டி',
    category: 'events',
    categoryLabel: 'Chess & Mind Sports',
    imageUrl: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Students applying tactical forks and pin formations under timed tournament conditions.',
    date: 'Atomz Rapid Chess Open'
  },
  {
    id: 'gal-11',
    title: 'Tailoring & Boutique Garment Showcase',
    tamilTitle: 'தையல் கலை & ஆடை வடிவமைப்பு',
    category: 'classes',
    categoryLabel: 'Vocational Craft',
    imageUrl: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1200&auto=format&fit=crop',
    caption: 'Graduating students displaying custom-tailored designer blouses and ethnic wear creations.',
    date: 'Vocational Graduation'
  },
  {
    id: 'gal-12',
    title: 'Annual Grand Arts & Cultural Convocation',
    tamilTitle: 'வருடாந்திர கலை விழா & சான்றிதழ் வழங்கள்',
    category: 'events',
    categoryLabel: 'Academy Events',
    imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    caption: 'Dignitaries and senior Vidwans honoring students with diplomas and gold medals.',
    date: 'Atomz Kalai Sangamam',
    featured: true
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'S. Soundarya Lakshmi',
    tamilName: 'சௌந்தர்யா லக்ஷ்மி',
    role: 'Parent of Bharatanatyam Disciple',
    course: 'Bharatanatyam & Carnatic Vocal',
    quote: 'My daughter started learning Bharatanatyam at Atomz Arts Academy two years ago. The devotion, traditional discipline, and stage opportunities provided here in Thiruvarur are truly unmatched. Her confidence and posture have blossomed.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't-2',
    name: 'K. Rajasekaran',
    tamilName: 'ராஜசேகரன்',
    role: 'Parent of Abacus & Tuition Student',
    course: 'Abacus & Class 10 Tuition',
    quote: 'Atomz is not just an arts school, it is a complete temple of learning. My son improved his maths calculation speed drastically with Abacus and scored 96% in his 10th standard board exams thanks to the dedicated tuition teachers.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't-3',
    name: 'M. Meenakshi Priyadarshini',
    tamilName: 'மீனாட்சி பிரியதர்ஷினி',
    role: 'Boutique Owner & Aari Artisan',
    course: 'Aari Embroidery & Tailoring',
    quote: 'I joined the Aari embroidery and tailoring training with zero experience. Within 3 months of hands-on practice, I learned bridal blouse designing and have now opened my own home-based boutique earning independent income.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    rating: 5
  },
  {
    id: 't-4',
    name: 'V. Anandhakrishnan',
    tamilName: 'ஆனந்தகிருஷ்ணன்',
    role: 'Keyboard & Western Dance Student',
    course: 'Keyboard & Western Dance',
    quote: 'The music and dance mentors are remarkably patient and encouraging. I can now play complex chords and melodies on keyboard while also performing in state-level group dance events.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    rating: 5
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'f-1',
    name: 'Kalaimamani Dr. R. Sivakumar',
    role: 'Head of Classical Performing Arts',
    tamilRole: 'பரதநாட்டியம் முதன்மை ஆசான்',
    experience: '22+ Years in Natya Shastra',
    specialization: 'Bharatanatyam, Nattuvangam & Temple Choreography',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop',
    description: 'Renowned disciple of the Thanjavur tradition who has guided over 50 disciples through their formal Arangetrams across Tamil Nadu.'
  },
  {
    id: 'f-2',
    name: 'Vidushi G. Sharadha Devi',
    role: 'Carnatic Vocal & Veena Faculty',
    tamilRole: 'கர்நாடக சங்கீதம் & வீணை பேராசிரியை',
    experience: '18+ Years Concert & Teaching Experience',
    specialization: 'Sruti Voice Culture, Gamakas & Trinity Compositions',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    description: 'Grade A concert artist deeply committed to preserving the pure Kaveri Delta classical music tradition.'
  },
  {
    id: 'f-3',
    name: 'Vidwan T. Murugesan',
    role: 'Percussion & Laya Guru',
    tamilRole: 'மிருதங்கம் & தபேலா ஆசான்',
    experience: '16+ Years Rhythmic Pedagogy',
    specialization: 'Mridangam, Tabla, Drums & Tala Mathematics',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
    description: 'Master of intricate Korvais and Moharas with extensive concert accompaniment experience.'
  },
  {
    id: 'f-4',
    name: 'Mrs. Jayanthi Ravindran',
    role: 'Director of Vocational & Creative Arts',
    tamilRole: 'கைவினை மற்றும் சுயதொழில் பயிற்சி இயக்குனர்',
    experience: '15+ Years in Fashion & Fine Crafts',
    specialization: 'Aari Embroidery, Bridal Designing, Tailoring & Beautician',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop',
    description: 'Passionate trainer who has empowered hundreds of women with certified self-employment skills.'
  }
];
