import { BookOpen, Award, Users, User, Briefcase, Zap, ArrowRight } from 'lucide-react';

export default function Services() {
  const scrollToPricing = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1E88C7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#2BA3DB]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#1E88C7] font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">Our Services</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beginners to advanced learners, we offer comprehensive English courses tailored to your unique goals
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#1E88C7]/10 to-transparent rounded-bl-full"></div>

              <div className="p-6 sm:p-10 relative z-10">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] p-4 sm:p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                      <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4 sm:ml-6">General English</h3>
                  </div>
                  <button
                    onClick={() => scrollToPricing('general-english-pricing')}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Comprehensive English learning for all levels, from Beginner (A1) to Advanced (C1), and CPE (C2) on demand.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="bg-[#1E88C7] p-2 rounded-lg flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Group Classes</h4>
                      <p className="text-gray-600">Max 8 students per class, split into beginner-intermediate and intermediate-advanced levels for optimal progress</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="bg-[#2BA3DB] p-2 rounded-lg flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Private Lessons</h4>
                      <p className="text-gray-600">One-on-one sessions tailored to your specific needs and learning pace</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#1E88C7]/5 to-[#2BA3DB]/5 p-6 rounded-2xl border border-[#1E88C7]/20">
                  <p className="text-sm text-gray-700 font-medium">
                    <strong className="text-[#1E88C7]">Levels offered:</strong> A1 (Beginner), A2 (Elementary), B1 (Pre-Intermediate), B1+ (Intermediate), B2 (Upper Intermediate), C1 (Advanced), C2 (CPE on demand)
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#2BA3DB]/10 to-transparent rounded-bl-full"></div>

              <div className="p-6 sm:p-10 relative z-10">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-[#2BA3DB] to-[#4DC4EC] p-4 sm:p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform">
                      <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4 sm:ml-6">IELTS Preparation</h3>
                  </div>
                  <button
                    onClick={() => scrollToPricing('ielts-pricing')}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-gradient-to-r from-[#2BA3DB] to-[#4DC4EC] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <span>View Pricing</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  Specialized training designed to help you achieve success in the IELTS exam with expert guidance and proven strategies.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="bg-[#2BA3DB] p-2 rounded-lg flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Small Group Training</h4>
                      <p className="text-gray-600">Focused exam preparation in small groups for effective learning and practice</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                    <div className="bg-[#4DC4EC] p-2 rounded-lg flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Private Coaching</h4>
                      <p className="text-gray-600">Intensive one-on-one preparation targeting your specific exam challenges</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#2BA3DB]/5 to-[#4DC4EC]/5 p-6 rounded-2xl border border-[#2BA3DB]/20">
                  <p className="text-sm text-gray-700 font-medium">
                    <strong className="text-[#2BA3DB]">What we cover:</strong> All four IELTS components - Listening, Reading, Writing, and Speaking, with practice tests and personalized feedback
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-[#1E88C7] via-[#2BA3DB] to-[#4DC4EC] p-12 rounded-3xl shadow-2xl text-white">
              <div className="flex items-center justify-center mb-8">
                <Zap className="w-12 h-12 mr-4" />
                <h3 className="text-3xl font-bold">Additional Services</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
                  <Briefcase className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-xl mb-3">Business English</h4>
                  <p className="text-white/90 leading-relaxed">Specialized courses for professionals needing English in business contexts, presentations, negotiations, and corporate communications</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105">
                  <BookOpen className="w-10 h-10 mb-4" />
                  <h4 className="font-bold text-xl mb-3">Flexible Packages</h4>
                  <p className="text-white/90 leading-relaxed">From 10 hours per week to fully customized schedules designed around your availability and learning objectives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
