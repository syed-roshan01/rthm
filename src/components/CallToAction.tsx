"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaHandsHelping, FaLightbulb, FaHeart, FaUsers } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      title: "Scholarship Programs",
      description:
        "Providing financial aid to deserving students worldwide to help them achieve their educational goals.",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Mentorship",
      description:
        "Connecting students with experienced mentors to guide their academic and personal growth.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Community Support",
      description:
        "Building a global community that supports each other and promotes learning and collaboration.",
      img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <>
      <head>
        <title>About Us - Rise to Help Mankind</title>
        <meta
          name="description"
          content="Learn more about Rise to Help Mankind - our mission, vision, and the team dedicated to empowering students worldwide."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main
  className="
    bg-gradient-to-b from-white via-gray-50 to-white
    min-h-screen
    pt-24        /* Push content down below navbar */
    px-6 sm:px-12 /* Horizontal padding only */
    font-sans text-gray-900
    overflow-x-hidden
  "
>

        {/* Who We Are Section */}
        <motion.section
          className="max-w-7xl mx-auto mb-24 text-center px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-black">Who We Are</h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Rise to Help Mankind is a global initiative committed to unlocking the true
            potential of students through scholarships, mentorship, and community
            support. We believe that education is a universal right, and together, we’re
            building a brighter future for all.
          </p>
        </motion.section>

        {/* New Cards Section */}
        <motion.section
          className="max-w-7xl mx-auto mb-24 px-6 grid grid-cols-1 sm:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {cards.map(({ title, description, img }, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              whileHover={{ scale: 1.05 }}
              style={{ maxWidth: "100%" }} /* Ensure cards don’t overflow */
            >
              <img
                src={img}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
                style={{ maxWidth: "100%" }} /* Ensure images do not overflow */
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-extrabold mb-3">{title}</h3>
                <p className="text-gray-700 flex-grow">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-24 max-w-7xl mx-auto px-6">
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-extrabold text-black mb-6">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To empower students by providing easy access to scholarships, mentorship,
              and a community that believes in their dreams. We strive to remove barriers
              and create pathways to success, transforming lives one opportunity at a time.
            </p>
          </motion.div>

          <motion.div
            className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-3xl font-extrabold text-black mb-6">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To build a world where every student, regardless of background, has the
              opportunity to achieve their dreams through education, support, and
              community collaboration.
            </p>
          </motion.div>
        </section>

        {/* Core Values Section */}
        <motion.section
          className="mb-24 max-w-7xl mx-auto text-center px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-14 text-black">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
            {[
              {
                icon: <FaHandsHelping />,
                title: "Empathy",
                color: "text-indigo-700",
                desc: "We lead with compassion and understanding in everything we do.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                color: "text-purple-700",
                desc: "We strive for creative solutions to break educational barriers.",
              },
              {
                icon: <FaHeart />,
                title: "Integrity",
                color: "text-pink-700",
                desc: "We act with honesty, transparency, and respect for all.",
              },
              {
                icon: <FaUsers />,
                title: "Community",
                color: "text-blue-700",
                desc: "We believe in the power of collaboration and collective growth.",
              },
            ].map(({ icon, title, color, desc }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className={`text-5xl mb-6 ${color}`}>{icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-black">{title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Join Us Section */}
        <motion.section
          className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl p-16 text-white text-center max-w-7xl mx-auto shadow-2xl mb-24"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 tracking-wide">
            Join Us in Shaping the Future
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Whether you're a student seeking support or a donor ready to invest in the
            next generation, your journey with us makes a difference. Let's rise
            together to help mankind.
          </p>
          <button
            onClick={() => alert("Join us clicked!")}
            className="px-8 py-4 bg-white text-indigo-700 font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Involved
          </button>
        </motion.section>
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
