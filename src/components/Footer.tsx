import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/elite_english_final_transparent.png"
                alt="Elite English Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elite English - Making Learning Fun. Specialized English tuition in Cape Town for 2nd language learners.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#2BA3DB] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#2BA3DB] transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#2BA3DB] transition-colors">
                  Schedule
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('rates')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#2BA3DB] transition-colors">
                  Rates
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('terms')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#2BA3DB] transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>67 Main Rd, Diep River</li>
              <li>Cape Town, South Africa</li>
              <li>
                <a href="tel:+27718838520" className="hover:text-[#2BA3DB] transition-colors">
                  +27 71 883 8520
                </a>
              </li>
              <li>
                <a href="mailto:isaac@eliteenglish.co.za" className="hover:text-[#2BA3DB] transition-colors break-all">
                  isaac@eliteenglish.co.za
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Elite English. All rights reserved.</p>
          <p className="text-sm mt-2">Specialized English tuition for international students in Cape Town</p>
        </div>
      </div>
    </footer>
  );
}
