import { Menu, X, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <img
              src="/elite_english_final_transparent.png"
              alt="Elite English Logo"
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#1E88C7] font-medium transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#1E88C7] font-medium transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#1E88C7] font-medium transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-[#1E88C7] font-medium transition-colors">
              Schedule
            </button>
            <button onClick={() => scrollToSection('rates')} className="text-gray-700 hover:text-[#1E88C7] font-medium transition-colors">
              Rates
            </button>
            <button onClick={() => scrollToSection('terms')} className="text-gray-700 hover:text-[#1E88C7] font-medium transition-colors">
              T&Cs
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#1E88C7] text-white px-6 py-2.5 rounded-lg hover:bg-[#1670A9] transition-all shadow-md hover:shadow-lg">
              Contact Us
            </button>
          </nav>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-[#1E88C7] font-medium py-2 text-left transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#1E88C7] font-medium py-2 text-left transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#1E88C7] font-medium py-2 text-left transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-[#1E88C7] font-medium py-2 text-left transition-colors">
              Schedule
            </button>
            <button onClick={() => scrollToSection('rates')} className="text-gray-700 hover:text-[#1E88C7] font-medium py-2 text-left transition-colors">
              Rates
            </button>
            <button onClick={() => scrollToSection('terms')} className="text-gray-700 hover:text-[#1E88C7] font-medium py-2 text-left transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-[#1E88C7] text-white px-6 py-2.5 rounded-lg hover:bg-[#1670A9] transition-all text-left">
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
