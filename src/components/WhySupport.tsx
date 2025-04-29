import { FaRegSmile, FaHandsHelping, FaGraduationCap } from 'react-icons/fa';

export default function WhySupport() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Support RTHM?</h2>

        <div className="flex flex-wrap justify-center gap-10">

          <div className="w-72 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FaGraduationCap size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Support Education</h3>
            <p className="text-gray-600">Help students stay in school and achieve academic excellence through your generous contribution.</p>
          </div>

          <div className="w-72 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FaHandsHelping size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Transparent Giving</h3>
            <p className="text-gray-600">Track your donations with full transparency — know exactly who you are helping and how.</p>
          </div>

          <div className="w-72 p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition">
            <FaRegSmile size={40} className="mx-auto text-indigo-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-700 mb-2">Change Lives</h3>
            <p className="text-gray-600">Your small act of kindness can create a ripple effect that changes many lives forever.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
