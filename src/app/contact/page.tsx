'use client';

import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      // Here you can integrate with your backend API for submitting the form
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h2>

        {isSubmitted ? (
          <div className="text-center text-green-600">
            <p>Thank you for reaching out! We will get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Subject */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject of your message"
                required
              />
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="6"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-500 text-sm">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
