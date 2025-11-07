import { BookOpen, Award, Users, User, Bus, CheckCircle, Sparkles } from 'lucide-react';

export default function Rates() {
  return (
    <section id="rates" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#1E88C7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#2BA3DB]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#1E88C7] font-semibold text-sm uppercase tracking-wider">Investment in Your Future</span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">Our Rates</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent, competitive pricing for world-class English education
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="relative" id="general-english-pricing">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-[#1E88C7]/10 to-[#2BA3DB]/10 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                <div className="bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">General English</h3>
                        <p className="text-white/90">All levels from A1 to C2</p>
                      </div>
                    </div>
                    <Sparkles className="w-10 h-10 opacity-50" />
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <User className="w-5 h-5 text-[#1E88C7]" />
                      <h4 className="text-lg font-bold text-gray-900">Private Lessons</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">5 hours</span>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">R1,750</p>
                            <p className="text-xs text-gray-600">R350/hr</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">10 hours</span>
                          <div className="text-right">
                            <p className="text-2xl font-bold text-gray-900">R3,500</p>
                            <p className="text-xs text-gray-600">R350/hr</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-100 pt-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="w-5 h-5 text-[#1E88C7]" />
                      <h4 className="text-lg font-bold text-gray-900">Group Classes</h4>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative p-4 bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] rounded-xl text-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">10 hours</p>
                            <p className="text-xs text-white/90 mt-0.5">Max 8 students</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">R2,200</p>
                            <p className="text-xs text-white/90">R220/hr</p>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/20">
                          <p className="text-xs text-white/90">Save 37% compared to private</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" id="ielts-pricing">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-[#2BA3DB]/10 to-[#4DC4EC]/10 rounded-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                <div className="bg-gradient-to-r from-[#2BA3DB] to-[#4DC4EC] p-8 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold">IELTS Preparation</h3>
                        <p className="text-white/90">Achieve your target score</p>
                      </div>
                    </div>
                    <Sparkles className="w-10 h-10 opacity-50" />
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <User className="w-5 h-5 text-[#2BA3DB]" />
                      <h4 className="text-lg font-bold text-gray-900">Private Coaching</h4>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">10 hours</span>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-gray-900">R4,500</p>
                          <p className="text-xs text-gray-600">R450/hr</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-100 pt-5">
                    <div className="flex items-center space-x-2 mb-3">
                      <Users className="w-5 h-5 text-[#2BA3DB]" />
                      <h4 className="text-lg font-bold text-gray-900">Group Training</h4>
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2BA3DB] to-[#4DC4EC] rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative p-4 bg-gradient-to-br from-[#2BA3DB] to-[#4DC4EC] rounded-xl text-white">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold">10 hours</p>
                            <p className="text-xs text-white/90 mt-0.5">Max 8 students</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold">R3,000</p>
                            <p className="text-xs text-white/90">R300/hr</p>
                          </div>
                        </div>
                        <div className="mt-2 pt-2 border-t border-white/20">
                          <p className="text-xs text-white/90">Save 33% compared to private</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-gray-100 mb-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] p-4 rounded-2xl shadow-lg">
                <Bus className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 ml-6">Transport Services</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E88C7]/5 to-[#2BA3DB]/5 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
                <div className="relative p-8 bg-white rounded-2xl border-2 border-gray-200 group-hover:border-[#1E88C7] transition-all">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Shared Transport</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Daily Rate</span>
                      <span className="text-3xl font-bold text-[#1E88C7]">R100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Weekly Rate</span>
                      <span className="text-3xl font-bold text-[#1E88C7]">R500</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#1E88C7] flex-shrink-0 mt-0.5" />
                      <span>Within 20km radius</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#1E88C7] flex-shrink-0 mt-0.5" />
                      <span>Minimum 2 students required</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2BA3DB]/5 to-[#4DC4EC]/5 rounded-2xl transform group-hover:scale-105 transition-transform"></div>
                <div className="relative p-8 bg-white rounded-2xl border-2 border-gray-200 group-hover:border-[#2BA3DB] transition-all">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6">Private Transport</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-gray-700 font-medium">Daily Rate</span>
                      <span className="text-3xl font-bold text-[#2BA3DB]">R200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">Weekly Rate</span>
                      <span className="text-3xl font-bold text-[#2BA3DB]">R1,000</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2BA3DB] flex-shrink-0 mt-0.5" />
                      <span>Flexible pickup times</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2BA3DB] flex-shrink-0 mt-0.5" />
                      <span>Driver will wait for you</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-20"></div>
            <div className="relative bg-gradient-to-r from-red-500 to-orange-500 p-8 rounded-2xl text-white text-center shadow-xl">
              <p className="text-lg font-semibold">
                <strong className="text-xl">Important:</strong> No payment refund policy. All fees are non-refundable. Classes may be rescheduled within specified terms and conditions at the academy's discretion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
