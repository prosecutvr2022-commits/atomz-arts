import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'horizontal' | 'full' | 'crest' | 'wordmark';
  showTagline?: boolean;
  lightMode?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'horizontal',
  showTagline = true,
  lightMode = false
}) => {
  // Scaling dimensions
  const scaleMap = {
    sm: {
      shield: 'w-8 h-10 sm:w-9 sm:h-11',
      title: 'text-sm sm:text-base',
      badge: 'text-[9px] sm:text-[10px] px-1.5 py-0.5',
      tagline: 'text-[9px] sm:text-[10px]',
      gap: 'gap-1.5 sm:gap-2.5'
    },
    md: {
      shield: 'w-10 h-12 sm:w-12 sm:h-14',
      title: 'text-base sm:text-xl',
      badge: 'text-[10px] sm:text-xs px-2 py-0.5',
      tagline: 'text-[10px] sm:text-xs',
      gap: 'gap-2 sm:gap-3'
    },
    lg: {
      shield: 'w-14 h-16 sm:w-16 sm:h-20',
      title: 'text-xl sm:text-2xl',
      badge: 'text-xs sm:text-sm px-2.5 py-1',
      tagline: 'text-xs sm:text-sm',
      gap: 'gap-3 sm:gap-4'
    },
    xl: {
      shield: 'w-20 h-24 sm:w-24 sm:h-28',
      title: 'text-2xl sm:text-3xl',
      badge: 'text-sm sm:text-base px-3 py-1',
      tagline: 'text-sm sm:text-base',
      gap: 'gap-3 sm:gap-4'
    },
    '2xl': {
      shield: 'w-28 h-32 sm:w-36 sm:h-40',
      title: 'text-3xl sm:text-4xl',
      badge: 'text-base sm:text-lg px-4 py-1.5',
      tagline: 'text-base sm:text-lg',
      gap: 'gap-4 sm:gap-5'
    }
  };

  const currentScale = scaleMap[size];

  /* Detailed Vector Shield Crest Component matching the uploaded image */
  const ShieldCrest = ({ className = 'w-full h-full' }: { className?: string }) => (
    <svg viewBox="0 0 240 280" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldScrewGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF"/>
          <stop offset="40%" stopColor="#D8DDE3"/>
          <stop offset="70%" stopColor="#8A95A5"/>
          <stop offset="100%" stopColor="#5B6575"/>
        </linearGradient>

        <linearGradient id="shieldPlateGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC"/>
          <stop offset="60%" stopColor="#E2E8F0"/>
          <stop offset="100%" stopColor="#CBD5E1"/>
        </linearGradient>

        <linearGradient id="sYellow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFE600"/>
          <stop offset="100%" stopColor="#FFC700"/>
        </linearGradient>
        <linearGradient id="sOrange" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF8A00"/>
          <stop offset="100%" stopColor="#FF5500"/>
        </linearGradient>
        <linearGradient id="sPink" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF007A"/>
          <stop offset="100%" stopColor="#D9006C"/>
        </linearGradient>
        <linearGradient id="sBlue" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00E5FF"/>
          <stop offset="100%" stopColor="#0088FF"/>
        </linearGradient>

        <path id="shieldArchPath" d="M 28 54 Q 120 30 212 54" fill="none"/>
      </defs>

      {/* Outer Shield Plate with top notch center peak */}
      <path
        d="M 120 8 L 136 10 L 136 18 L 220 24 L 224 32 L 224 116 C 224 196, 180 246, 120 270 C 60 246, 16 196, 16 116 L 16 32 L 20 24 L 104 18 L 104 10 Z"
        fill="url(#shieldPlateGrad)"
        stroke="#101538"
        strokeWidth="5"
        strokeLinejoin="round"
      />

      {/* Screw Left */}
      <g transform="translate(28, 34)">
        <circle cx="0" cy="0" r="6" fill="url(#shieldScrewGrad)" stroke="#475569" strokeWidth="1.2"/>
        <circle cx="0" cy="0" r="4" fill="none" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.6"/>
        <line x1="-3" y1="-2" x2="3" y2="2" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* Screw Right */}
      <g transform="translate(212, 34)">
        <circle cx="0" cy="0" r="6" fill="url(#shieldScrewGrad)" stroke="#475569" strokeWidth="1.2"/>
        <circle cx="0" cy="0" r="4" fill="none" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.6"/>
        <line x1="-2" y1="-2" x2="2" y2="2" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
      </g>

      {/* Arched ATOMZ in Shield Header */}
      <text fontFamily="'Arial Black', 'Impact', sans-serif" fontSize="26" fontWeight="900" fill="#101538" letterSpacing="3.5">
        <textPath href="#shieldArchPath" startOffset="50%" textAnchor="middle">
          ATOMZ
        </textPath>
      </text>

      {/* Inner Shield White Container */}
      <path
        d="M 28 62 L 212 62 L 212 120 C 212 192, 172 236, 120 258 C 68 236, 28 192, 28 120 Z"
        fill="#FFFFFF"
        stroke="#101538"
        strokeWidth="6.5"
        strokeLinejoin="miter"
      />

      {/* Q1: Top-Left (Yoga Silhouette on Navy) */}
      <path d="M 30 64 L 116 64 L 116 138 L 30 138 Z" fill="#101538" />
      <g transform="translate(73, 101) scale(0.65)">
        <circle cx="0" cy="-28" r="5.5" fill="#FFFFFF"/>
        <path d="M 0 -44 L -4 -35 C -3 -33, 0 -32, 0 -32 C 0 -32, 3 -33, 4 -35 Z" fill="#FFFFFF"/>
        <path d="M -4 -35 C -12 -30, -14 -18, -12 -12 L -7 -10 C -9 -16, -7 -25, 0 -32 C 7 -25, 9 -16, 7 -10 L 12 -12 C 14 -18, 12 -30, 4 -35 Z" fill="#FFFFFF"/>
        <path d="M -6 -11 L 6 -11 L 8 4 L -8 4 Z" fill="#FFFFFF"/>
        <path d="M -22 18 C -22 10, -12 6, -8 4 L 8 4 C 12 6, 22 10, 22 18 C 22 22, -22 22, -22 18 Z" fill="#FFFFFF"/>
        <path d="M -18 25 C -10 27, 10 27, 18 25 C 20 28, -20 28, -18 25 Z" fill="#FFFFFF"/>
      </g>

      {/* Q2: Top-Right (Open Book on White) */}
      <g transform="translate(164, 101) scale(0.7)">
        <path d="M -3 14 C -14 10, -28 10, -38 15 L -38 -12 C -28 -17, -14 -17, -3 -13 Z" fill="#101538"/>
        <path d="M 3 14 C 14 10, 28 10, 38 15 L 38 -12 C 28 -17, 14 -17, 3 -13 Z" fill="#101538"/>
        <path d="M -4 -8 C -14 -12, -26 -12, -34 -8" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M -4 -2 C -14 -6, -26 -6, -34 -2" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M -4 4 C -14 0, -26 0, -34 4" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M 4 -8 C 14 -12, 26 -12, 34 -8" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M 4 -2 C 14 -6, 26 -6, 34 -2" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M 4 4 C 14 0, 26 0, 34 4" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M -3 -13 L 0 -11 L 3 -13 L 3 17 L 0 19 L -3 17 Z" fill="#101538"/>
      </g>

      {/* Q3: Bottom-Left (Bharatanatyam Dancer on White) */}
      <g transform="translate(74, 188) scale(0.65)">
        <circle cx="-1" cy="-34" r="5" fill="#101538"/>
        <path d="M -3 -41 C 0 -43, 4 -43, 6 -39 C 4 -37, 2 -37, -3 -41 Z" fill="#101538"/>
        <path d="M -5 -33 C -10 -28, -10 -15, -7 -5 L -5 -5 C -8 -15, -7 -28, -3 -33 Z" fill="#101538"/>
        <path d="M -2 -27 C -6 -32, -10 -38, -6 -44 C -4 -46, 0 -44, 0 -40 C -1 -35, 2 -30, 2 -27 Z" fill="#101538"/>
        <path d="M 3 -27 C 9 -25, 14 -20, 16 -12 L 12 -11 C 10 -17, 6 -22, 1 -24 Z" fill="#101538"/>
        <path d="M -4 -27 L 4 -27 L 6 -12 L -6 -12 Z" fill="#101538"/>
        <path d="M -6 -12 L 6 -12 L 14 4 C 15 12, 12 18, 9 22 L 3 22 C 6 17, 8 11, 4 4 L 0 4 C -4 11, -2 17, 1 22 L -5 22 C -8 18, -11 12, -10 4 Z" fill="#101538"/>
        <path d="M -8 -4 C 0 8, 0 8, 8 -4 L 11 2 C 0 16, 0 16, -11 2 Z" fill="#101538"/>
        <ellipse cx="6" cy="23" rx="4" ry="2" fill="#101538"/>
        <ellipse cx="-2" cy="23" rx="4" ry="2" fill="#101538"/>
      </g>

      {/* Q4: Bottom-Right (Karate Kick on Navy) */}
      <path d="M 124 140 L 210 140 L 210 186 C 190 222, 156 246, 124 255 Z" fill="#101538" />
      <g transform="translate(162, 186) scale(0.63)">
        <circle cx="-16" cy="-14" r="5" fill="#FFFFFF"/>
        <path d="M -15 -8 L -9 -6 L -7 2 L -12 1 Z" fill="#FFFFFF"/>
        <path d="M -17 -7 L -22 -4 L -20 3 L -16 1 Z" fill="#FFFFFF"/>
        <path d="M -19 -8 L -10 -6 L -7 8 L -18 6 Z" fill="#FFFFFF"/>
        <path d="M -13 6 C -11 11, -8 16, -6 20 L -8 21 C -11 17, -14 11, -15 6 Z" fill="#FFFFFF"/>
        <path d="M -16 6 L -14 18 L -12 30 L -18 30 L -20 18 Z" fill="#FFFFFF"/>
        <path d="M -18 30 L -9 30 L -9 33 L -21 33 Z" fill="#FFFFFF"/>
        <path d="M -9 3 L 8 -10 L 26 -22 L 30 -16 L 14 -4 L -8 8 Z" fill="#FFFFFF"/>
        <path d="M 26 -22 L 34 -25 L 36 -19 L 29 -16 Z" fill="#FFFFFF"/>
      </g>

      {/* Dividers */}
      <line x1="120" y1="62" x2="120" y2="258" stroke="#101538" strokeWidth="6.5"/>
      <line x1="28" y1="140" x2="212" y2="140" stroke="#101538" strokeWidth="6.5"/>

      {/* Rainbow Swoop */}
      <g>
        <path d="M 54 196 C 65 151, 95 101, 145 104 C 168 106, 190 122, 206 134"
              fill="none" stroke="url(#sYellow)" strokeWidth="4.2" strokeLinecap="round"/>
        <path d="M 57 199 C 68 154, 97 106, 144 109 C 166 111, 187 125, 203 137"
              fill="none" stroke="url(#sOrange)" strokeWidth="4.2" strokeLinecap="round"/>
        <path d="M 60 202 C 71 157, 99 111, 143 114 C 164 116, 184 128, 200 140"
              fill="none" stroke="url(#sPink)" strokeWidth="4.2" strokeLinecap="round"/>
        <path d="M 63 205 C 74 160, 101 116, 142 119 C 162 121, 181 131, 197 143"
              fill="none" stroke="url(#sBlue)" strokeWidth="4.2" strokeLinecap="round"/>
      </g>
    </svg>
  );

  /* 3D Realistic Globe Icon */
  const GlobeO = ({ className = 'w-4 h-4 sm:w-5 sm:h-5 inline-block' }: { className?: string }) => (
    <span className={`relative inline-flex items-center justify-center align-middle mx-0.5 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <defs>
          <radialGradient id="globeSphere" cx="35%" cy="32%" r="68%">
            <stop offset="0%" stopColor="#70D6FF"/>
            <stop offset="35%" stopColor="#0096C7"/>
            <stop offset="70%" stopColor="#0077B6"/>
            <stop offset="90%" stopColor="#03045E"/>
            <stop offset="100%" stopColor="#021430"/>
          </radialGradient>
          <linearGradient id="globeShine" x1="0%" y1="0%" x2="50%" y2="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#BEE9E8" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
          </linearGradient>
          <clipPath id="globeCut">
            <circle cx="50" cy="50" r="48"/>
          </clipPath>
        </defs>

        <circle cx="50" cy="50" r="48" fill="url(#globeSphere)" />
        
        {/* Continents */}
        <g clipPath="url(#globeCut)">
          <path d="M 42 42 C 46 34, 52 26, 60 28 C 66 30, 72 36, 70 44 C 68 52, 58 64, 50 66 C 46 64, 44 54, 42 42 Z" fill="#E0F2FE" opacity="0.85"/>
          <path d="M 54 30 C 64 18, 78 16, 86 26 C 90 34, 86 46, 76 48 C 68 48, 62 38, 54 30 Z" fill="#BAE6FD" opacity="0.8"/>
          <circle cx="66" cy="62" r="3.5" fill="#E0F2FE" opacity="0.9"/>
          <circle cx="74" cy="66" r="4.5" fill="#E0F2FE" opacity="0.9"/>
          <circle cx="82" cy="70" r="3" fill="#E0F2FE" opacity="0.9"/>
          <path d="M 72 74 C 78 70, 88 72, 92 78 C 90 86, 80 90, 74 84 Z" fill="#E0F2FE" opacity="0.85"/>
          <path d="M 28 40 C 34 34, 40 34, 42 40 C 42 46, 36 50, 30 52 Z" fill="#BAE6FD" opacity="0.75"/>
          <path d="M 14 60 Q 40 74 70 56 Q 84 46 94 54" fill="none" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.5" strokeLinecap="round"/>
        </g>
        
        <ellipse cx="38" cy="36" rx="28" ry="18" fill="url(#globeShine)" transform="rotate(-25 38 36)"/>
        <circle cx="50" cy="50" r="48" fill="none" stroke="#60A5FA" strokeWidth="1.5" opacity="0.6"/>
      </svg>
    </span>
  );

  /* Variant: Shield Crest Only */
  if (variant === 'crest') {
    return (
      <div className={`relative ${currentScale.shield} flex-shrink-0 select-none ${className}`}>
        <ShieldCrest />
      </div>
    );
  }

  /* Variant: Full Vertical Stack Logo (Shield + Wordmark + Red Bar + Heart of Arts script) */
  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        {/* Shield Crest */}
        <div className={`relative ${currentScale.shield} flex-shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-lg`}>
          <ShieldCrest />
        </div>

        {/* ATOMZ with 3D Globe */}
        <div className="mt-3 flex items-center justify-center font-black tracking-wider leading-none">
          <span className={`font-cinzel font-black tracking-wider ${currentScale.title} ${lightMode ? 'text-[#800080]' : 'text-white'}`}>
            AT
          </span>
          <GlobeO className={size === '2xl' ? 'w-8 h-8 sm:w-10 sm:h-10 mx-1' : size === 'xl' ? 'w-6 h-6 sm:w-8 sm:h-8 mx-1' : 'w-5 h-5 sm:w-6 sm:h-6 mx-0.5'} />
          <span className={`font-cinzel font-black tracking-wider ${currentScale.title} ${lightMode ? 'text-[#800080]' : 'text-white'}`}>
            MZ
          </span>
        </div>

        {/* Red Bar: Arts Academy */}
        <div className="mt-1.5 inline-block">
          <div className={`bg-[#E51E25] text-white font-black tracking-widest uppercase rounded shadow-md border border-[#B3151B] ${currentScale.badge}`}>
            Arts Academy
          </div>
        </div>

        {/* Script Slogan: Heart of Arts..... */}
        {showTagline && (
          <div className="mt-1 flex items-center gap-1.5 justify-center">
            <span className={`font-serif italic font-bold tracking-wide ${currentScale.tagline} ${lightMode ? 'text-[#800080]' : 'text-purple-200'}`}>
              Heart of Arts . . . . .
            </span>
          </div>
        )}
      </div>
    );
  }

  /* Variant: Horizontal Layout (Navbar, headers, mobile top bars) */
  return (
    <div className={`flex items-center ${currentScale.gap} select-none ${className}`}>
      {/* Official Shield Crest */}
      <div className={`relative ${currentScale.shield} flex-shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-md`}>
        <ShieldCrest />
      </div>

      {/* Brand Identity Wordmark */}
      <div className="flex flex-col text-left min-w-0">
        {/* Top: ATOMZ with Globe */}
        <div className="flex items-center leading-none">
          <span
            className={`font-cinzel font-black tracking-tight ${currentScale.title} ${
              lightMode
                ? 'text-[#800080]'
                : 'text-white'
            }`}
          >
            AT
          </span>
          <GlobeO
            className={
              size === 'sm'
                ? 'w-3.5 h-3.5 sm:w-4 sm:h-4 mx-0.5'
                : size === 'lg'
                ? 'w-5 h-5 sm:w-6 sm:h-6 mx-0.5'
                : size === 'xl'
                ? 'w-7 h-7 sm:w-8 sm:h-8 mx-1'
                : 'w-4 h-4 sm:w-5 sm:h-5 mx-0.5'
            }
          />
          <span
            className={`font-cinzel font-black tracking-tight ${currentScale.title} ${
              lightMode
                ? 'text-[#800080]'
                : 'text-white'
            }`}
          >
            MZ
          </span>

          {/* Red Arts Academy Pill */}
          <div className="ml-1.5 sm:ml-2">
            <span
              className={`bg-[#E51E25] text-white font-extrabold tracking-wider uppercase rounded shadow-sm border border-[#B3151B] whitespace-nowrap ${currentScale.badge}`}
            >
              Arts Academy
            </span>
          </div>
        </div>

        {/* Subtitle / Script Tagline */}
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5 flex-wrap leading-tight">
            <span
              className={`font-serif italic font-bold tracking-wide ${currentScale.tagline} ${
                lightMode ? 'text-[#800080]' : 'text-purple-200'
              }`}
            >
              Heart of Arts . . . . .
            </span>
            <span className="hidden sm:inline text-[9px] text-[#800080]/60">•</span>
            <span
              className={`hidden sm:inline font-tamil text-[10px] sm:text-[11px] font-semibold tracking-normal ${
                lightMode ? 'text-slate-600' : 'text-purple-100'
              }`}
            >
              ஆட்டம்ஸ் ஆர்ட்ஸ் அகாடமி
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
