'use client';

import React, { useState } from 'react';

// Dummy student data with 10 random students using online images (Unsplash links)
const students = [
  {
    id: 1,
    name: 'Syed Roshan',
    image: 'https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg',
    description: 'A dedicated student working hard for his dreams.',
    education: 'Secondary',
    classCourse: '8th Class',
    balanceFees: '60,000',
    marks: 95,
    amountDonated: 35,
  },
  {
    id: 2,
    name: 'Riyan Ahmed',
    image: 'https://images.pexels.com/photos/3028771/pexels-photo-3028771.jpeg',
    description: 'An ambitious student striving for excellence.',
    education: 'Higher',
    classCourse: '12th Class',
    balanceFees: '45,000',
    marks: 92,
    amountDonated: 25,
  },
  {
    id: 3,
    name: 'Imran Khan',
    image: 'https://images.pexels.com/photos/1462633/pexels-photo-1462633.jpeg',
    description: 'Striving for success in every exam.',
    education: 'Professional',
    classCourse: 'Engineering [CSE]',
    balanceFees: '75,000',
    marks: 88,
    amountDonated: 50,
  },
  {
    id: 4,
    name: 'Adnan Syed',
    image: 'https://images.pexels.com/photos/1239297/pexels-photo-1239297.jpeg',
    description: 'A passionate learner aiming for high grades.',
    education: 'Higher',
    classCourse: '12th Class',
    balanceFees: '35,000',
    marks: 93,
    amountDonated: 40,
  },
  {
    id: 5,
    name: 'Faizan',
    image: 'https://images.pexels.com/photos/1813270/pexels-photo-1813270.jpeg',
    description: 'Focused and determined, always giving 100%.',
    education: 'Higher',
    classCourse: '11th Class',
    balanceFees: '40,000',
    marks: 89,
    amountDonated: 20,
  },
  {
    id: 6,
    name: 'Nizam',
    image: 'https://images.pexels.com/photos/2100040/pexels-photo-2100040.jpeg',
    description: 'A future leader making strides every day.',
    education: 'Professional',
    classCourse: 'Engineering [Mechanical]',
    balanceFees: '50,000',
    marks: 90,
    amountDonated: 30,
  },
  {
    id: 7,
    name: 'Hanzala',
    image: 'https://images.pexels.com/photos/1595387/pexels-photo-1595387.jpeg',
    description: 'Excels in all subjects with dedication.',
    education: 'Secondary',
    classCourse: '9th Class',
    balanceFees: '55,000',
    marks: 94,
    amountDonated: 60,
  },
  {
    id: 8,
    name: 'Shahid',
    image: 'https://images.pexels.com/photos/1619016/pexels-photo-1619016.jpeg',
    description: 'Eager to learn and grow every day.',
    education: 'Higher',
    classCourse: '10th Class',
    balanceFees: '65,000',
    marks: 97,
    amountDonated: 45,
  },
  {
    id: 9,
    name: 'Huzaif',
    image: 'https://images.pexels.com/photos/3028771/pexels-photo-3028771.jpeg',
    description: 'Working tirelessly towards his educational goals.',
    education: 'Higher',
    classCourse: '12th Class',
    balanceFees: '30,000',
    marks: 91,
    amountDonated: 70,
  },
  {
    id: 10,
    name: 'Saad',
    image: 'https://images.pexels.com/photos/3246586/pexels-photo-3246586.jpeg',
    description: 'An enthusiastic student passionate about learning.',
    education: 'Professional',
    classCourse: 'Engineering [Civil]',
    balanceFees: '80,000',
    marks: 85,
    amountDonated: 15,
  },
];


export default function EducationPage() {
  const [selectedEducation, setSelectedEducation] = useState<string>('');
  const [selectedMarks, setSelectedMarks] = useState<number>(0);
  const [selectedClass, setSelectedClass] = useState<string>('');
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);

  const filteredStudents = students.filter((student) => {
    const matchesEducation = selectedEducation ? student.education === selectedEducation : true;
    const matchesMarks = selectedMarks ? student.marks >= selectedMarks : true;
    const matchesClass = selectedClass ? student.classCourse.includes(selectedClass) : true;

    return matchesEducation && matchesMarks && matchesClass;
  });

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Left Sidebar Filter with collapsible arrow */}
      <div
        className={`transition-all ${sidebarExpanded ? 'w-1/4' : 'w-16'} p-4 bg-gradient-to-b from-indigo-100 to-white pt-19`}
      >
        <button
          onClick={() => setSidebarExpanded(!sidebarExpanded)}
          className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4 focus:outline-none hover:bg-indigo-600 transition-all duration-300"
        >
          {sidebarExpanded ? '←' : '→'}
        </button>
        {sidebarExpanded && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Filter Students</h3>

            {/* Education Filter */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Education</label>
              <select
                value={selectedEducation}
                onChange={(e) => setSelectedEducation(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">All</option>
                <option value="Secondary">Secondary</option>
                <option value="Higher">Higher</option>
                <option value="Professional">Professional</option>
              </select>
            </div>

            {/* Marks Filter */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Minimum Marks</label>
              <input
                type="range"
                min="0"
                max="100"
                value={selectedMarks}
                onChange={(e) => setSelectedMarks(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm">
                <span>0%</span>
                <span>{selectedMarks}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Class Filter */}
            <div className="mb-4">
              <label className="block font-medium mb-2">Class/Course</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">All</option>
                <option value="8th Class">8th Class</option>
                <option value="9th Class">9th Class</option>
                <option value="10th Class">10th Class</option>
                <option value="12th Class">12th Class</option>
                <option value="Engineering">Engineering</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className={`transition-all ${sidebarExpanded ? 'w-3/4' : 'w-full'} p-4`}>
        <h1 className="text-3xl mb-6 text-center text-blue-600 font-bold pt-12"></h1>

        <div className="w-full mb-10 bg-gradient-to-b from-indigo-100 to-white p-8 rounded-xl shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-4">
              Unlock Your Educational Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6">
              At Rise to Help Mankind, we are committed to empowering students worldwide by providing access to scholarships, mentorship, and the tools necessary for academic and personal growth.
              Our mission is to ensure that every student, regardless of background, has the opportunity to excel and reach their full potential.
            </p>
            <button
              className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
              onClick={() => alert("Explore Education Services clicked!")}
            >
              Explore Education Services
            </button>
          </div>
        </div>

        <div
          className={`grid gap-6 ${sidebarExpanded ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`}
        >
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out">
              <img
                src={student.image}
                alt={student.name}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{student.name}</h2>
                <p className="text-gray-600 mt-2">{student.description}</p>

                {/* Education and Class/Course */}
                <div className="mt-4 space-y-2">
                  <p><strong className="font-medium">Education:</strong> {student.education}</p>
                  <p><strong className="font-medium">Class/Course:</strong> {student.classCourse}</p>
                </div>

                {/* Balance Fees, Marks, and Donation Info */}
                <div className="mt-4 space-y-2">
                  <p><strong className="font-medium">Balance Fees:</strong> {student.balanceFees}</p>
                  <p><strong className="font-medium">Marks Scored:</strong> {student.marks}</p>

                  <div>
                    <strong className="font-medium">Amount Donated:</strong>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="h-2 rounded-full bg-green-500"
                        style={{ width: `${student.amountDonated}%` }}
                      ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{student.amountDonated}% of total</p>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  {/* View Academics Button */}
                  <button className="w-full bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300">
                    View Academics
                  </button>
                  {/* Donate Now Button */}
                  <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                    Donate Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
