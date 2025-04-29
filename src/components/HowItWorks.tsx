import { FaUserEdit, FaCheckCircle, FaDonate } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">How It Works</h2>

        <div className="flex flex-wrap justify-center gap-12">

          <div className="w-64 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaUserEdit size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Student Registration</h3>
            <p className="text-gray-600">Students submit their academic details and financial needs for verification.</p>
          </div>

          <div className="w-64 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaCheckCircle size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Verification & Approval</h3>
            <p className="text-gray-600">Our team carefully verifies each student's profile before publishing it.</p>
          </div>

          <div className="w-64 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <FaDonate size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Donation & Support</h3>
            <p className="text-gray-600">Donors select a student profile and contribute directly towards their educational fees.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
