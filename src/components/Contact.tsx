import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-[#1E88C7] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch to start your English learning journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E88C7] p-4 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Location</h3>
                  <p className="text-gray-700 leading-relaxed">
                    67 Main Rd, Diep River<br />
                    Cape Town, South Africa
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Located in the leafy area of Diep River, just outside the City Bowl
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E88C7] p-4 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:+27718838520"
                    className="text-[#1E88C7] hover:text-[#1670A9] text-lg font-medium transition-colors"
                  >
                    +27 71 883 8520
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Call us during business hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E88C7] p-4 rounded-lg flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <a
                    href="https://wa.me/27718838520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1E88C7] hover:text-[#1670A9] text-lg font-medium transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Quick and easy communication
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1E88C7] p-4 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:isaac@eliteenglish.co.za"
                    className="text-[#1E88C7] hover:text-[#1670A9] text-lg font-medium transition-colors break-all"
                  >
                    isaac@eliteenglish.co.za
                  </a>
                  <p className="text-sm text-gray-600 mt-2">
                    Send us your inquiries anytime
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] p-8 lg:p-10 rounded-xl shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to Start Learning?</h3>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Contact us today for a free needs analysis and consultation. We'll help you find the perfect course to achieve your English learning goals.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <span className="text-white font-bold flex-shrink-0">✓</span>
                <span>Free initial assessment and needs analysis</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-white font-bold flex-shrink-0">✓</span>
                <span>Personalized course recommendations</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-white font-bold flex-shrink-0">✓</span>
                <span>Flexible scheduling options</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-white font-bold flex-shrink-0">✓</span>
                <span>Start classes within days of enrollment</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/27718838520"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-[#1E88C7] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all text-center shadow-lg hover:shadow-xl"
              >
                WhatsApp Us Now
              </a>
              <a
                href="tel:+27718838520"
                className="block w-full bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all text-center border-2 border-white/30 hover:border-white/50"
              >
                Call Us
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm text-white/80 text-center">
                Social media coming soon: Instagram | Facebook | LinkedIn
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-6xl mx-auto">
          <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.4446789!2d18.4657!3d-34.0296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d6f6f6f6f6f%3A0x1234567890!2s67%20Main%20Rd%2C%20Diep%20River%2C%20Cape%20Town!5e0!3m2!1sen!2sza!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elite English Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
