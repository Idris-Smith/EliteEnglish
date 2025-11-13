import { Target, Heart, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about-us" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-[#1E88C7]/5 rounded-full blur-3xl floating"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-[#2BA3DB]/5 rounded-full blur-3xl floating-delayed"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Us</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#1E88C7]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#2BA3DB]/10 rounded-full blur-2xl"></div>

              <div className="relative bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] p-12 rounded-3xl text-white shadow-2xl">
                <Target className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed text-white/95">
                  Elite English exists to offer specialized tuition for 2nd language learners (ESL — English as a Second Language), helping them acquire, develop, and perfect their English skills through personalized attention and expert guidance.
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
                      Located in leafy Diep River, just outside Cape Town's City Bowl. Experience a relaxed, vibrant atmosphere away from the hustle and bustle, perfect for focused learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
