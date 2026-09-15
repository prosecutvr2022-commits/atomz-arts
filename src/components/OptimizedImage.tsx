import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  priority = false,
  fallbackSrc,
  ...props
}) => {
  // Priority images must be immediately visible without opacity-0 flash
  const [isLoaded, setIsLoaded] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setCurrentSrc(src);
    if (priority) {
      setIsLoaded(true);
    } else if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
    }
    setHasError(false);
  }, [src, priority]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, []);

  const handleError = () => {
    // If webp fails, attempt to fallback to png
    if (currentSrc.endsWith('.webp')) {
      const pngFallback = currentSrc.replace(/\.webp$/, '.png');
      setCurrentSrc(pngFallback);
      return;
    }
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      return;
    }
    setHasError(true);
    setIsLoaded(true);
  };

  const isVisible = priority || isLoaded;

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton / Shimmer Placeholder while non-priority image is genuinely loading */}
      {!isVisible && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/70 via-pink-50/50 to-pink-100/70 animate-pulse pointer-events-none" />
      )}

      {/* Fallback Graphic if image fails completely */}
      {hasError ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-pink-50 text-[#831154] p-4 text-center">
          <span className="text-2xl mb-1">🎭</span>
          <span className="text-xs font-semibold text-[#831154] line-clamp-1">{alt}</span>
        </div>
      ) : (
        <img
          ref={(node) => {
            imgRef.current = node;
            if (node && node.complete && node.naturalWidth > 0) {
              setIsLoaded(true);
            }
          }}
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          referrerPolicy="no-referrer"
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          className={`${className} ${
            !priority ? 'transition-opacity duration-300' : ''
          } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          {...props}
        />
      )}
    </div>
  );
};

