export default function AboutProgram() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
  
          {/* Image Section */}
          <div className="flex-1">
            <img 
              src="/images/education_help.png" 
              alt="Education Support" 
              className="rounded-lg shadow-lg"
            />
          </div>
  
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 ">About RTHM</h2>
            <p className="text-lg text-gray-600 mb-6">
              Rise To Help Mankind (RTHM) is a platform dedicated to connecting students in need with donors who care. 
              Our mission is to ensure that financial hurdles do not block bright futures. 
              Through a simple, transparent, and verified system, we help students achieve their academic dreams — and build a stronger tomorrow.
            </p>
          </div>
  
        </div>
      </section>
    );
  }