import { GraduationCap, Users, Globe, Award, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E88C7] via-[#2BA3DB] to-[#4DC4EC]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Cape Town's Premier English School</span>
            </div>

            <div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-4">
                Elite English
              </h1>
              <p className="text-3xl lg:text-4xl italic font-light mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Making Learning Fun
              </p>
              <p className="text-xl text-white/95 leading-relaxed max-w-2xl">
                Transform your English skills with personalized attention, expert native-speaking teachers, and an immersive South African experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group bg-white text-[#1E88C7] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Start Your Journey</span>
                <Award className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </button>
              <a
                href="https://wa.me/27718838520"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50 flex items-center justify-center space-x-2"
              >
                <span>WhatsApp Us</span>
                <span className="text-xl">💬</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/30 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-white">8</div>
                <div className="text-sm text-white">Max Students</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/30 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-white">A1-C1</div>
                <div className="text-sm text-white">C2 Private Classes</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl border border-white/30 text-center min-w-[120px]">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white">Native Teachers</div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full lg:w-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 hover:-rotate-2 group">
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <Users className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Small Classes</h3>
                  <p className="text-white/90 text-sm">Max 8 students for personalized attention</p>
                </div>
              </div>

              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 hover:rotate-2 mt-8 group">
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <GraduationCap className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Expert Teachers</h3>
                  <p className="text-white/90 text-sm">Years of international experience</p>
                </div>
              </div>

              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 hover:rotate-2 -mt-8 group">
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <Globe className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Cultural Immersion</h3>
                  <p className="text-white/90 text-sm">Full South African experience</p>
                </div>
              </div>

              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all transform hover:scale-105 hover:-rotate-2 group">
                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <MapPin className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Transport Included</h3>
                  <p className="text-white/90 text-sm">Door-to-door service available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
