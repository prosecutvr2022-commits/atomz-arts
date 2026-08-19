import React, { useState } from 'react';

interface BharatanatyamPosterProps {
  className?: string;
  alt?: string;
}

export const BharatanatyamPoster: React.FC<BharatanatyamPosterProps> = ({
  className = 'w-full h-full',
  alt = 'Bharatanatyam Classical Dance Training at Atomz Arts Academy'
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#140A07] select-none ${className}`}>
      {!imageError ? (
        <img
          src="/bharatanatyam.png"
          alt={alt}
          referrerPolicy="no-referrer"
          onError={() => {
            // If local path fails, try direct Google Drive CDN before SVG fallback
            const img = new Image();
            img.src = 'https://lh3.googleusercontent.com/d/1180ilh5XvAc3DVAk7EwUb8DDRd0kDxge';
            img.onload = () => {
              const el = document.getElementById('bharatanatyam-poster-img') as HTMLImageElement;
              if (el) el.src = img.src;
            };
            img.onerror = () => {
              setImageError(true);
            };
          }}
          id="bharatanatyam-poster-img"
          className="w-full h-full object-cover object-top"
        />
      ) : (
        <svg
          viewBox="0 0 540 960"
          className="w-full h-full object-cover object-top"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="posterBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#120805" />
              <stop offset="30%" stopColor="#25140C" />
              <stop offset="60%" stopColor="#301A11" />
              <stop offset="85%" stopColor="#22120A" />
              <stop offset="100%" stopColor="#120805" />
            </linearGradient>
            <linearGradient id="posterFloor" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3A2012" />
              <stop offset="20%" stopColor="#4D2D1B" />
              <stop offset="60%" stopColor="#391E11" />
              <stop offset="100%" stopColor="#180B06" />
            </linearGradient>
            <linearGradient id="posterPillar" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#140905" />
              <stop offset="30%" stopColor="#2E170C" />
              <stop offset="65%" stopColor="#442312" />
              <stop offset="85%" stopColor="#281309" />
              <stop offset="100%" stopColor="#0F0603" />
            </linearGradient>
            <linearGradient id="posterGoldText" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4C2" />
              <stop offset="30%" stopColor="#E5BE53" />
              <stop offset="60%" stopColor="#D4AF37" />
              <stop offset="85%" stopColor="#F5D77F" />
              <stop offset="100%" stopColor="#9E7310" />
            </linearGradient>
            <linearGradient id="posterGoldZari" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFECA2" />
              <stop offset="35%" stopColor="#D4AF37" />
              <stop offset="70%" stopColor="#B38715" />
              <stop offset="100%" stopColor="#6C4E07" />
            </linearGradient>
            <linearGradient id="posterWineSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#750E24" />
              <stop offset="30%" stopColor="#580A1A" />
              <stop offset="70%" stopColor="#430713" />
              <stop offset="100%" stopColor="#25030A" />
            </linearGradient>
            <linearGradient id="posterEmeraldSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1C7E45" />
              <stop offset="40%" stopColor="#10572D" />
              <stop offset="80%" stopColor="#0A3C1E" />
              <stop offset="100%" stopColor="#041B0D" />
            </linearGradient>
            <linearGradient id="posterMagentaSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9E1B5A" />
              <stop offset="40%" stopColor="#780F41" />
              <stop offset="80%" stopColor="#52092B" />
              <stop offset="100%" stopColor="#2E0317" />
            </linearGradient>
            <linearGradient id="posterPeacockSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1A6888" />
              <stop offset="40%" stopColor="#104760" />
              <stop offset="80%" stopColor="#092C3D" />
              <stop offset="100%" stopColor="#04151E" />
            </linearGradient>
            <linearGradient id="posterOrangeSilk" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E66A1F" />
              <stop offset="40%" stopColor="#B84B0B" />
              <stop offset="80%" stopColor="#7E3005" />
              <stop offset="100%" stopColor="#421701" />
            </linearGradient>
            <radialGradient id="posterLampGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFF8E0" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#FFC837" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#FF7A00" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FF7A00" stopOpacity="0" />
            </radialGradient>
            <filter id="posterGoldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="posterSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.75" />
            </filter>
          </defs>

          <rect x="0" y="0" width="540" height="960" fill="url(#posterBg)" />
          <rect x="0" y="0" width="65" height="740" fill="url(#posterPillar)" />
          <g fill="#180B06" stroke="#4A2818" strokeWidth="1.2">
            <rect x="0" y="0" width="70" height="35" fill="url(#posterPillar)" />
            <rect x="0" y="70" width="70" height="28" />
            <rect x="0" y="105" width="70" height="15" />
            <path d="M 0 120 L 80 120 L 65 145 L 0 145 Z" fill="url(#posterPillar)" />
            <rect x="0" y="240" width="68" height="16" />
            <rect x="0" y="440" width="68" height="16" />
            <rect x="0" y="640" width="68" height="16" />
          </g>

          <path
            d="M 54 140 C 62 220, 58 380, 52 560"
            stroke="#FF7A00"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          <path
            d="M 54 140 C 62 220, 58 380, 52 560"
            stroke="#FFD000"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="6 4"
            fill="none"
            opacity="0.9"
          />

          <g transform="translate(145, 95)">
            <line x1="0" y1="-70" x2="0" y2="0" stroke="#B38715" strokeWidth="2" />
            <path d="M -10 0 L 10 0 L 14 18 C 16 28, -16 28, -14 18 Z" fill="url(#posterGoldZari)" />
            <circle cx="0" cy="28" r="3.5" fill="#FFECA2" />
          </g>
          <g transform="translate(90, 165)">
            <line x1="0" y1="-80" x2="0" y2="0" stroke="#B38715" strokeWidth="2" />
            <path d="M -13 0 L 13 0 L 18 24 C 20 38, -20 38, -18 24 Z" fill="url(#posterGoldZari)" />
            <circle cx="0" cy="38" r="4.5" fill="#FFECA2" />
          </g>

          <g transform="translate(125, 290) scale(0.65)" opacity="0.85">
            <rect x="-10" y="-10" width="130" height="150" rx="8" fill="#1A0D07" stroke="#7A521D" strokeWidth="3" />
            <path
              d="M 55 10 C 68 10, 85 22, 85 35 C 98 35, 110 52, 110 65 C 110 78, 98 95, 85 95 C 85 108, 68 120, 55 120 C 42 120, 25 108, 25 95 C 12 95, 0 78, 0 65 C 0 52, 12 35, 25 35 C 25 22, 42 10, 55 10 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2"
            />
            <circle cx="55" cy="45" r="5" fill="#D4AF37" />
            <path
              d="M 55 50 L 55 72 M 55 56 L 42 62 M 55 58 L 68 50 M 55 72 L 45 92 M 55 72 L 65 85"
              stroke="#D4AF37"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <text x="55" y="112" fontFamily="serif" fontSize="11" fontWeight="bold" fill="#D4AF37" textAnchor="middle" letterSpacing="2">
              ATOMZ
            </text>
            <text x="55" y="124" fontFamily="serif" fontSize="8" fill="#D4AF37" textAnchor="middle" letterSpacing="1">
              ARTS ACADEMY
            </text>
          </g>

          <g transform="translate(68, 410)">
            <circle cx="0" cy="0" r="45" fill="url(#posterLampGlow)" />
            <path d="M 0 -18 C -3 -12, -1 -6, 0 -4 C 1 -6, 3 -12, 0 -18 Z" fill="#FFF8E0" filter="url(#posterGoldGlow)" />
            <ellipse cx="0" cy="-4" rx="14" ry="4" fill="url(#posterGoldZari)" />
            <rect x="-3" y="-4" width="6" height="110" fill="url(#posterGoldZari)" />
            <circle cx="0" cy="30" r="7" fill="url(#posterGoldZari)" />
            <circle cx="0" cy="70" r="8" fill="url(#posterGoldZari)" />
            <path d="M -20 110 C -20 95, 20 95, 20 110 Z" fill="url(#posterGoldZari)" />
          </g>

          <rect x="0" y="690" width="540" height="270" fill="url(#posterFloor)" />
          <g stroke="#180B05" strokeWidth="1.5" opacity="0.5">
            <line x1="0" y1="690" x2="540" y2="690" stroke="#D4AF37" strokeWidth="1.5" opacity="0.3" />
            <line x1="0" y1="745" x2="540" y2="745" />
            <line x1="0" y1="805" x2="540" y2="805" />
            <line x1="0" y1="875" x2="540" y2="875" />
            <line x1="0" y1="945" x2="540" y2="945" />
          </g>

          <g transform="translate(0, 10)">
            <g transform="translate(378, 92) scale(0.65)" filter="url(#posterGoldGlow)">
              <path
                d="M 55 15 C 68 15, 82 25, 82 36 C 93 36, 103 50, 103 62 C 103 74, 93 88, 82 88 C 82 99, 68 109, 55 109 C 42 109, 28 99, 28 88 C 17 88, 7 74, 7 62 C 7 50, 17 36, 28 36 C 28 25, 42 15, 55 15 Z"
                fill="none"
                stroke="url(#posterGoldText)"
                strokeWidth="2.5"
              />
              <circle cx="55" cy="46" r="4.5" fill="url(#posterGoldText)" />
              <path
                d="M 55 51 L 55 70 M 55 57 L 44 62 M 55 58 L 66 51 M 55 70 L 46 88 M 55 70 L 64 82"
                stroke="url(#posterGoldText)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>

            <text
              x="378"
              y="142"
              fontFamily="'Cinzel', 'Trajan Pro', Georgia, serif"
              fontSize="18"
              fontWeight="700"
              letterSpacing="5.5"
              textAnchor="middle"
              fill="url(#posterGoldText)"
            >
              ATOMZ
            </text>
            <text
              x="378"
              y="156"
              fontFamily="'Cinzel', Georgia, serif"
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="3.5"
              textAnchor="middle"
              fill="url(#posterGoldText)"
            >
              ARTS ACADEMY
            </text>

            <text
              x="378"
              y="222"
              fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
              fontSize="37"
              fontWeight="800"
              letterSpacing="3"
              textAnchor="middle"
              fill="url(#posterGoldText)"
              filter="url(#posterGoldGlow)"
            >
              BHARATANATYAM
            </text>

            <text
              x="378"
              y="260"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="22"
              fontWeight="600"
              letterSpacing="1.2"
              textAnchor="middle"
              fill="#FFFFFF"
            >
              Classical Dance Training
            </text>

            <g transform="translate(378, 298)">
              <line x1="-125" y1="0" x2="-80" y2="0" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
              <polygon points="-80,-3 -75,0 -80,3 -85,0" fill="#D4AF37" />
              <line x1="-75" y1="0" x2="-60" y2="0" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />

              <text
                x="0"
                y="4"
                fontFamily="'Playfair Display', Georgia, serif"
                fontSize="17"
                fontWeight="bold"
                letterSpacing="1.5"
                textAnchor="middle"
                fill="url(#posterGoldText)"
              >
                Hearts of Arts
              </text>

              <line x1="60" y1="0" x2="75" y2="0" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
              <polygon points="80,-3 75,0 80,3 85,0" fill="#D4AF37" />
              <line x1="80" y1="0" x2="125" y2="0" stroke="#D4AF37" strokeWidth="1.2" opacity="0.8" />
            </g>
          </g>

          <g transform="translate(268, 485)" filter="url(#posterSoftShadow)">
            <ellipse cx="0" cy="275" rx="50" ry="16" fill="#0A0402" opacity="0.8" />

            <circle cx="0" cy="-145" r="23" fill="#2E1408" />
            <ellipse cx="0" cy="-147" rx="21" ry="23" fill="#140602" />
            <circle cx="0" cy="-160" r="3.5" fill="#FFECA2" />
            <line x1="0" y1="-160" x2="0" y2="-147" stroke="#FFECA2" strokeWidth="2" />
            <circle cx="-13" cy="-154" r="4.5" fill="#FFECA2" />
            <circle cx="13" cy="-154" r="4.5" fill="#E2E8F0" />
            <path d="M -20 -152 C -24 -172, 24 -172, 20 -152" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path d="M -18 -155 C -22 -170, 22 -170, 18 -155" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round" />

            <ellipse cx="5" cy="-140" rx="15" ry="17" fill="#D89E6E" />
            <circle cx="2" cy="-142" r="2.2" fill="#750E24" />
            <path d="M -13 -135 L -17 -126 L -9 -126 Z" fill="#FFECA2" />
            <path d="M 17 -135 L 13 -126 L 21 -126 Z" fill="#FFECA2" />

            <path d="M -8 -124 L 8 -124 L 11 -108 L -11 -108 Z" fill="#D89E6E" />
            <path d="M -26 -108 L 26 -108 L 30 -55 L -30 -55 Z" fill="url(#posterWineSilk)" />

            <path d="M -18 -108 C -18 -90, 18 -90, 18 -108" stroke="#FFECA2" strokeWidth="5" fill="none" />
            <circle cx="0" cy="-90" r="4.5" fill="#9E1B5A" />
            <path d="M -22 -108 C -22 -62, 22 -62, 22 -108" stroke="#FFECA2" strokeWidth="4" fill="none" />
            <circle cx="0" cy="-62" r="6.5" fill="#FFECA2" />

            <rect x="-26" y="-55" width="52" height="11" rx="3" fill="url(#posterGoldZari)" stroke="#8A630A" strokeWidth="1.5" />

            <path d="M -26 -102 C -48 -88, -58 -115, -44 -142" stroke="url(#posterWineSilk)" strokeWidth="13" fill="none" strokeLinecap="round" />
            <path d="M -44 -142 L -36 -160" stroke="#D89E6E" strokeWidth="11" strokeLinecap="round" />
            <rect x="-48" y="-120" width="8" height="5" rx="1" fill="#FFECA2" />
            <rect x="-43" y="-148" width="6" height="8" rx="1" fill="#FFECA2" />
            <circle cx="-32" cy="-166" r="6" fill="#D89E6E" />
            <circle cx="-32" cy="-166" r="3.5" fill="#C5162D" />

            <path d="M 26 -102 C 48 -88, 56 -62, 45 -40" stroke="url(#posterWineSilk)" strokeWidth="13" fill="none" strokeLinecap="round" />
            <path d="M 45 -40 L 34 -24" stroke="#D89E6E" strokeWidth="11" strokeLinecap="round" />
            <rect x="44" y="-56" width="8" height="5" rx="1" fill="#FFECA2" />
            <rect x="38" y="-32" width="6" height="8" rx="1" fill="#FFECA2" />
            <circle cx="30" cy="-16" r="5.5" fill="#D89E6E" />
            <circle cx="30" cy="-16" r="3" fill="#C5162D" />

            <path d="M -26 -44 L 26 -44 L 38 135 L -38 135 Z" fill="url(#posterWineSilk)" />
            <path d="M -26 -108 L 20 -55 L 28 -44 L -22 -44 Z" fill="url(#posterGoldZari)" />
            <path d="M -24 -44 L 24 -44 L 34 120 L -34 120 Z" fill="url(#posterGoldZari)" />
            <g stroke="#8A630A" strokeWidth="1.8">
              <line x1="-18" y1="-44" x2="-28" y2="120" />
              <line x1="-9" y1="-44" x2="-14" y2="120" />
              <line x1="0" y1="-44" x2="0" y2="120" />
              <line x1="9" y1="-44" x2="14" y2="120" />
              <line x1="18" y1="-44" x2="28" y2="120" />
            </g>
            <rect x="-38" y="120" width="76" height="20" fill="url(#posterGoldZari)" stroke="#6C4E07" strokeWidth="1.5" />

            <rect x="-20" y="140" width="15" height="105" rx="5" fill="#D89E6E" />
            <rect x="-22" y="225" width="19" height="15" rx="2" fill="#750E24" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="-17" cy="232" r="2.5" fill="#FFECA2" />
            <circle cx="-12" cy="232" r="2.5" fill="#FFECA2" />
            <circle cx="-7" cy="232" r="2.5" fill="#FFECA2" />
            <ellipse cx="-12" cy="252" rx="13" ry="8" fill="#D89E6E" />
            <path d="M -25 254 C -25 245, 1 245, 1 254" stroke="#C5162D" strokeWidth="2.5" fill="none" />

            <path d="M 7 140 L 24 190 L 18 240" stroke="#D89E6E" strokeWidth="15" strokeLinecap="round" fill="none" />
            <rect x="10" y="225" width="19" height="15" rx="2" fill="#750E24" stroke="#D4AF37" strokeWidth="1.5" />
            <circle cx="15" cy="232" r="2.5" fill="#FFECA2" />
            <circle cx="20" cy="232" r="2.5" fill="#FFECA2" />
            <circle cx="25" cy="232" r="2.5" fill="#FFECA2" />
            <ellipse cx="20" cy="252" rx="13" ry="8" fill="#D89E6E" />
            <path d="M 7 254 C 7 245, 33 245, 33 254" stroke="#C5162D" strokeWidth="2.5" fill="none" />
          </g>

          <g transform="translate(145, 740) scale(0.95)" filter="url(#posterSoftShadow)">
            <ellipse cx="0" cy="55" rx="65" ry="18" fill="#0A0402" opacity="0.7" />
            <circle cx="0" cy="-35" r="16" fill="#2E1408" />
            <path d="M -13 -38 C -15 -50, 15 -50, 13 -38" stroke="#FFF" strokeWidth="5" fill="none" />
            <path d="M -18 -18 L 18 -18 L 24 20 L -24 20 Z" fill="url(#posterWineSilk)" />
            <path d="M -11 -18 C -11 -4, 11 -4, 11 -18" stroke="#FFECA2" strokeWidth="4" fill="none" />
            <path d="M -18 -16 C -32 -5, -14 14, 0 12 C 14 14, 32 -5, 18 -16" stroke="url(#posterWineSilk)" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M -56 50 C -56 22, 56 22, 56 50 Z" fill="url(#posterOrangeSilk)" />
            <path d="M -48 35 L 0 55 L 48 35" stroke="#FFECA2" strokeWidth="3" fill="none" />
            <path d="M -30 25 L 0 55 L 30 25" stroke="#FFECA2" strokeWidth="3" fill="none" />
            <rect x="-56" y="48" width="112" height="12" fill="url(#posterGoldZari)" />
          </g>

          <g transform="translate(305, 715) scale(0.92)" filter="url(#posterSoftShadow)">
            <ellipse cx="0" cy="55" rx="60" ry="18" fill="#0A0402" opacity="0.7" />
            <circle cx="0" cy="-35" r="16" fill="#2E1408" />
            <path d="M -13 -38 C -15 -50, 15 -50, 13 -38" stroke="#FFF" strokeWidth="5" fill="none" />
            <path d="M -18 -18 L 18 -18 L 24 20 L -24 20 Z" fill="url(#posterMagentaSilk)" />
            <path d="M -11 -18 C -11 -4, 11 -4, 11 -18" stroke="#FFECA2" strokeWidth="4" fill="none" />
            <path d="M -18 -16 C -32 -5, -14 14, 0 12 C 14 14, 32 -5, 18 -16" stroke="url(#posterMagentaSilk)" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M -54 50 C -54 22, 54 22, 54 50 Z" fill="url(#posterEmeraldSilk)" />
            <path d="M -45 35 L 0 55 L 45 35" stroke="#FFECA2" strokeWidth="3" fill="none" />
            <path d="M -28 25 L 0 55 L 28 25" stroke="#FFECA2" strokeWidth="3" fill="none" />
            <rect x="-54" y="48" width="108" height="12" fill="url(#posterGoldZari)" />
          </g>

          <g transform="translate(445, 770) scale(0.92)" filter="url(#posterSoftShadow)">
            <ellipse cx="0" cy="55" rx="60" ry="18" fill="#0A0402" opacity="0.7" />
            <circle cx="0" cy="-35" r="16" fill="#2E1408" />
            <path d="M -13 -38 C -15 -50, 15 -50, 13 -38" stroke="#FFF" strokeWidth="5" fill="none" />
            <path d="M -18 -18 L 18 -18 L 24 20 L -24 20 Z" fill="url(#posterOrangeSilk)" />
            <path d="M -11 -18 C -11 -4, 11 -4, 11 -18" stroke="#FFECA2" strokeWidth="4" fill="none" />
            <path d="M -18 -16 C -32 -5, -14 14, 0 12 C 14 14, 32 -5, 18 -16" stroke="url(#posterOrangeSilk)" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path d="M -54 50 C -54 22, 54 22, 54 50 Z" fill="url(#posterMagentaSilk)" />
            <path d="M -45 35 L 0 55 L 45 35" stroke="#FFECA2" strokeWidth="3" fill="none" />
            <rect x="-54" y="48" width="108" height="12" fill="url(#posterGoldZari)" />
          </g>

          <g transform="translate(485, 875)">
            <circle cx="0" cy="-40" r="55" fill="url(#posterLampGlow)" />
            <circle cx="-14" cy="-45" r="7" fill="#FFE885" />
            <circle cx="0" cy="-55" r="9" fill="#FFF8E0" />
            <circle cx="14" cy="-45" r="7" fill="#FFE885" />
            <ellipse cx="0" cy="-35" rx="34" ry="12" fill="url(#posterGoldZari)" />
            <path d="M -8 -35 L -10 45 L 10 45 L 8 -35 Z" fill="url(#posterGoldZari)" />
            <circle cx="0" cy="10" r="16" fill="url(#posterGoldZari)" />
            <path d="M -30 75 C -30 45, 30 45, 30 75 Z" fill="url(#posterGoldZari)" />
          </g>
        </svg>
      )}
    </div>
  );
};
