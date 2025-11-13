import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#1E88C7]/5 rounded-full blur-3xl pulse-slow"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#2BA3DB]/5 rounded-full blur-3xl pulse-slow"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#1E88C7] font-semibold text-sm uppercase tracking-wider">Our Difference</span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">Why Choose Elite English?</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 via-white to-gray-50 p-12 rounded-3xl shadow-xl border border-gray-100">
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
      </div>
    </section>
  );
}
