//used code from flowbite docs https://flowbite.com/docs/components/carousel/ as a starting point
import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number; // optional, default 3000ms
  width?: string; 
  height?: string;
}

function Carousel({ images, autoPlayInterval = 3000, width, height}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (images.length <= 1) return; // no autoplay if only 1 image
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, images, autoPlayInterval]);

  if (images.length === 0) return null; // nothing to render

  return (
    <div className="relative overflow-hidden h-[70vh] w-[45vh] rounded-lg"
    style={{ width, height }}>
      {/* Slides */}
      <div className="relative w-full h-full ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover "
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div id="indicators" className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Prev/Next buttons */}
      <div id="buttons">
        <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:outline-none">
            <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
        </button>

        <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/60 focus:outline-none">
            <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;


