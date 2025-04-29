"use client";

import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    src: "/images/banner1.jpg",
    title: "Empower Your Future with Scholarships",
    subtitle: "Join our community and unlock your potential.",
  },
  {
    src: "/images/banner3.jpg",
    title: "Together We Achieve More",
    subtitle: "Be part of a movement that transforms futures.",
  },
  {
    src: "/images/banner2.jpg",
    title: "Support Education, Change Lives",
    subtitle: "Donate today to help deserving students.",
  },
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(nextSlide, 5000);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-96 sm:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map(({ src, title, subtitle }, idx) => (
          <div
            key={idx}
            className="relative w-full flex-shrink-0 h-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"
          >
            <img
              src={src}
              alt={title}
              className="w-full h-full object-cover brightness-90 transition-transform duration-700 ease-in-out hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-center items-start p-10 sm:p-20 text-white">
              <h2 className="text-4xl sm:text-6xl font-extrabold drop-shadow-2xl mb-4 tracking-wide leading-tight">
                {title}
              </h2>
              <p className="text-xl sm:text-3xl font-semibold drop-shadow-xl max-w-2xl">
                {subtitle}
              </p>
              <button
                className="mt-8 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-bold text-white shadow-lg hover:shadow-glow hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                onClick={() => alert("Call to action clicked!")}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 scale-125"
                : "bg-gray-400 hover:bg-indigo-300"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}