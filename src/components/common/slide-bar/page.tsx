'use client'

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import No_data_found from '../../../../public/no-data-found.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideImage {
  src: StaticImageData;
  alt: string;
  title?: string;
  description?: string;
}

interface ImageSlideShowProps {
  images?: SlideImage[];
  autoSlideInterval?: number;
  title?: string;
  subtitle?: string;
}

const defaultImages: SlideImage[] = [
  {
    src: No_data_found,
    alt: "Default Image 1",
    title: "Welcome",
    description: "Please add your images"
  }
];

const ImageSlideShow: React.FC<ImageSlideShowProps> = ({
  images = defaultImages,
  autoSlideInterval = 5000,
  title,
  subtitle,
}) => {
  // Guard clause for empty images array
  if (!images || images.length === 0) {
    images = defaultImages;
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect - removed isHovered dependency
  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, autoSlideInterval);

    return () => clearInterval(timer);
  }, [images, autoSlideInterval]);

  const goToSlide = (index: number) => {
    if (!images) return;
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (!images) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (!images) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // If there's only one image, don't show navigation controls
  const showControls = images.length > 1;

  return (
    <div className="relative w-full h-[500px] group">
      {/* Main Image */}
      <div className="relative h-full overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out transform ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full blur-[2px]"
            />
            
            {/* Title and Subtitle Overlay */}
            {(title || subtitle) && (
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
                {title && (
                  <h1 className="text-5xl font-bold mb-4 tracking-wide">{title}</h1>
                )}
                {subtitle && (
                  <p className="text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Individual Image Title and Description */}
            {(image.title || image.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                {image.title && (
                  <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                )}
                {image.description && (
                  <p className="text-sm opacity-90">{image.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show if there's more than one image */}
      {showControls && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlideShow;