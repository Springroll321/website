import React, { useEffect, useState } from "react";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  sizeClass?: string; // Tailwind width & height together (like "w-[50vh] h-[70vh]")
  showIndicators?: boolean;
  showButtons?: boolean;
  indicatorActiveColor?: string;
  indicatorInactiveColor?: string;
}

function Carousel({
  images,
  autoPlayInterval = 3000,
  sizeClass = "w-[35vw] h-[60vh] md:w-[28vw] md:h-[80vh]",
  showIndicators = true,
  showButtons = true,
  indicatorActiveColor = "bg-orange-100",
  indicatorInactiveColor = "bg-gray-300",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [currentIndex, images, autoPlayInterval]);

  if (images.length === 0) return null;

  return (
    <div className={`relative overflow-hidden ${sizeClass}`}>
      {/* Slides */}
      <div className="relative w-full h-full items-center justify-center">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      {showIndicators && (
        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? indicatorActiveColor
                  : indicatorInactiveColor
              }`}
              aria-current={index === currentIndex ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Prev/Next buttons */}
      {showButtons && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 z-20 flex items-center justify-center w-10 h-10 -translate-y-1/2 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
