"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FaHandshake,
  FaGraduationCap,
  FaGlobe,
  FaRocket,
  FaClipboardCheck,
  FaUsers,
} from "react-icons/fa";

const images = [
  {
    src: "/images/banner3.png",
    title: "Empower Your Future with Scholarships",
    subtitle: "Join our community and unlock your potential.",
  },
  {
    src: "/images/banner3.png",
    title: "Together We Achieve More",
    subtitle: "Be part of a movement that transforms futures.",
  },
  {
    src: "/images/banner2.png",
    title: "Unlock Opportunities Today",
    subtitle: "Apply for scholarships and start your journey.",
  },
];

const BannerSlider = React.memo(function BannerSlider() {
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

  const handleMouseEnter = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
  };

  const handleMouseLeave = () => {
    slideInterval.current = setInterval(nextSlide, 5000);
  };

  return (
    <div
      className="relative w-full max-w-7xl mx-auto h-[350px] rounded-xl overflow-hidden shadow-2xl mb-16 select-none mt-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-[900ms] ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map(({ src, title, subtitle }, idx) => (
          <div
            key={idx}
            className="relative w-full flex-shrink-0 h-full bg-gradient-to-br from-indigo-700 via-indigo-900 to-black"
          >
            <img
              src={src}
              alt={`Banner for ${title}`}
              className="w-full h-full object-cover brightness-75 transition-transform duration-700 ease-in-out hover:scale-105"
              draggable={false}
              loading="lazy"
              onError={(e) => (e.currentTarget.src = "/images/fallback.png")}
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-6 sm:p-10 md:p-20 text-white max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-shadow-lg mb-4 tracking-wide leading-tight">
                {title}
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-shadow-md mb-8">
                {subtitle}
              </p>
              {/* <button
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-white shadow-xl hover:shadow-glow hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
                onClick={() => alert("Call to action clicked!")}
              >
                Learn More
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-5 h-5 rounded-full focus:outline-none border-2 border-transparent transition-all duration-300 ${
              idx === currentIndex
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg border-white"
                : "bg-gray-300 hover:bg-indigo-400 border-gray-400"
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
});

export default function Home() {
  return (
    <>
      <head>
        <title>Rise to Help Mankind - Scholarship Platform</title>
        <meta
          name="description"
          content="Rise to Help Mankind - Helping students unlock their future through scholarships and mentorship."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <main className="bg-gradient-to-b from-indigo-50 via-white to-indigo-50 min-h-screen p-6 sm:p-12 font-sans text-gray-900">
        <BannerSlider />

        {/* WHY US Section */}
        <section className="mb-20 bg-gradient-to-br from-white to-indigo-100 rounded-3xl py-16 shadow-2xl animate-fade-in">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center !text-black mb-14 tracking-tight drop-shadow-md">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {[
                {
                  icon: <FaHandshake />,
                  title: "Trusted Community",
                  desc: "We foster a supportive network that helps you reach your goals.",
                  color: "text-indigo-800",
                },
                {
                  icon: <FaGraduationCap />,
                  title: "Educational Support",
                  desc: "Access scholarships, mentorship, and resources to excel academically.",
                  color: "text-purple-800",
                },
                {
                  icon: <FaGlobe />,
                  title: "Global Impact",
                  desc: "Join a worldwide movement committed to changing lives.",
                  color: "text-pink-800",
                },
              ].map(({ icon, title, desc, color }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow-md p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-default"
                >
                  <div
                    className={`text-6xl mb-6 ${color} drop-shadow-lg transition-transform transform hover:scale-110 duration-300`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 !text-black">
                    {title}
                  </h3>
                  <p className="text-lg sm:text-xl leading-relaxed !text-black">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS Section */}
        <section className="mb-20 bg-gradient-to-br from-white to-purple-100 rounded-3xl py-16 shadow-2xl animate-fade-in">
          <div className="container mx-auto px-6 max-w-7xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-center !text-black mb-14 tracking-tight drop-shadow-md">
              How It Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
              {[
                {
                  icon: <FaRocket />,
                  step: "1. Sign Up",
                  desc: "Create your free account to start exploring scholarships and resources.",
                  color: "text-indigo-700",
                },
                {
                  icon: <FaClipboardCheck />,
                  step: "2. Apply & Track",
                  desc: "Submit applications and monitor your progress in real-time.",
                  color: "text-purple-700",
                },
                {
                  icon: <FaUsers />,
                  step: "3. Join Community",
                  desc: "Connect with mentors and peers who support your journey.",
                  color: "text-pink-700",
                },
              ].map(({ icon, step, desc, color }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center space-y-6 cursor-default"
                >
                  <div
                    className={`text-7xl ${color} drop-shadow-xl transition-transform transform hover:scale-110 duration-300`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold !text-black">
                    {step}
                  </h3>
                  <p className="max-w-sm !text-black text-lg sm:text-xl leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR MISSION & READY (Unified) Section */}
        <section className="w-full py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-white text-center animate-fade-in">
          {/* Our Mission Header */}
          <h2
            style={{ color: "black", fontWeight: "bold" }}
            className="text-4xl sm:text-5xl mb-8 tracking-wide"
          >
            Our Mission
          </h2>

          {/* Mission Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed mb-16">
            We are dedicated to empowering students by providing access to
            scholarships, mentorship, and a vibrant community. Our goal is to
            break barriers and create pathways for success in education
            globally.
          </p>

          {/* Our Mission Header */}
          <h2
            style={{ color: "black", fontWeight: "bold" }}
            className="text-4xl sm:text-5xl mb-8 tracking-wide"
          >
            Ready to Make a Difference?
          </h2>

          {/* Mission Description */}
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-700 leading-relaxed mb-16">
            Join our mission and be part of a community that’s changing the
            world, one scholarship at a time. Whether you’re a student looking
            for support or a donor willing to give back, your participation
            matters. Together, we can make education accessible to all.
          </p>

          {/* Buttons for registration and donation */}
          <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6">
            <button
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-gradient-to-l hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => (window.location.href = "/register")}
            >
              📝 Register as Student
            </button>
            <button
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-md hover:bg-gradient-to-l hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
              onClick={() => alert("Donate Now clicked!")}
            >
              💸 Donate Now
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-md">© 2025 Rise to Help Mankind. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/contact" className="hover:text-indigo-700 transition-colors duration-300">
              Contact
            </a>
            <a href="/privacy" className="hover:text-indigo-700 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="https://x.com" className="hover:text-indigo-700 transition-colors duration-300">
              X
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
