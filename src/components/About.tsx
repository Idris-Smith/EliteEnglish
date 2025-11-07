import { Target, Heart, Award, MapPin, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#1E88C7] font-semibold text-sm uppercase tracking-wider">Our Story</span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">About Elite English</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#1E88C7]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#2BA3DB]/10 rounded-full blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] p-12 rounded-3xl text-white shadow-2xl">
                <Target className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-white/95">
                  Elite English exists to offer specialized tuition for 2nd language learners, helping them acquire, develop, and perfect their English skills through personalized attention and expert guidance.
                </p>
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-white/90 italic">
                    "We believe every student has the potential to achieve excellence in English."
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1E88C7] p-3 rounded-xl flex-shrink-0">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Personalized Approach</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We conduct in-depth needs analysis for each student. Our trained staff understands that learners from all countries share similar challenges and provides individualized guidance to fast-track your learning.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#2BA3DB] p-3 rounded-xl flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">International Experience</h3>
                    <p className="text-gray-700 leading-relaxed">
                      With years of teaching experience across many countries worldwide, our director brings global expertise. Previously based in Santiago, Chile, we now operate from Cape Town, South Africa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all border border-gray-100 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4DC4EC] p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Perfect Location</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Located in leafy Diep River, just outside Cape Town's City Bowl. Experience a relaxed, vibrant atmosphere away from the hustle, perfect for focused learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 p-12 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Why Choose Elite English?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Only 8 students max per group',
                'Private lessons available',
                'Affordable transport options',
                'Native-speaking teachers',
                'Complete cultural immersion',
                'Weekend tours coming soon'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl hover:shadow-md transition-all">
                  <CheckCircle className="w-6 h-6 text-[#1E88C7] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] rounded-3xl shadow-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-10 text-center">Meet Our Leadership Team</h3>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { firstName: 'Stephen', lastName: 'Theunissen', role: 'Director', image: '/image.png' },
                { firstName: 'Clint', lastName: 'Van Reenen', role: 'Director', image: '/image copy.png' },
                { firstName: 'Isaac', lastName: 'Theunissen', role: 'Operations Manager', image: '/image copy copy.png' }
              ].map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-40 h-40 rounded-full mx-auto overflow-hidden shadow-xl transform group-hover:scale-105 transition-transform ring-4 ring-white">
                      <img
                        src={member.image}
                        alt={`${member.firstName} ${member.lastName}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h4 className="font-bold text-xl text-white leading-tight">
                    <div>{member.firstName}</div>
                    <div>{member.lastName}</div>
                  </h4>
                  <p className="text-white/90 font-medium mt-2">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
