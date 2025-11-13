import { FileText, AlertCircle, Clock, Bus, Heart, Shield, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function TermsAndConditions() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="terms" className="py-20 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] rounded-2xl mb-6 shadow-xl">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Terms & Conditions</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">
            Please read these terms carefully before enrolling
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all mb-8 flex items-center justify-between group"
        >
          <span className="text-xl font-bold text-gray-900 group-hover:text-[#1E88C7] transition-colors">
            {isExpanded ? 'Hide Terms & Conditions' : 'View Terms & Conditions'}
          </span>
          <ChevronDown
            className={`w-6 h-6 text-[#1E88C7] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          />
        </button>

        <div className={`space-y-8 transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-[#1E88C7] p-3 rounded-xl flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract Terms</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    All classes are offered on a free and voluntary basis until a contract is signed between the school and the student. Once signed, all regulations come into effect for the duration of your contract term.
                  </p>
                  <p>
                    Elite English will not be held responsible for damages or complaints that occur before or after the term of contract. The Academy reserves the right of refusal to any student who does not comply with our policies.
                  </p>
                  <p>
                    Students undergo a free interview and needs analysis. Once accepted and upon payment of fees and provision of identification, a contract will be formulated.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-[#2BA3DB] p-3 rounded-xl flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment & Refund Policy</h3>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-4">
                  <p className="text-red-800 font-semibold">
                    <strong>No Payment Refund Policy:</strong> The Academy will not refund any payments (cash or otherwise). Classes may be recovered only at the Academy's discretion based on validated reasons within specified time limits.
                  </p>
                </div>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    No student will be allowed into any class unless a contract has been signed and corresponding fees have been paid. All licensed payment methods are accepted.
                  </p>
                  <p>
                    Classes may not be changed mid-stream unless previously agreed upon by administration with necessary fees/requirements considered.
                  </p>
                  <p>
                    Prices agreed upon at contract time will be upheld for a minimum of 6 months, after which they may be subject to change based on market or legal implications.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-[#4DC4EC] p-3 rounded-xl flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Attendance & Late-Coming</h3>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                    <p className="text-yellow-800 font-semibold">
                      <strong>Zero-Tolerance Policy:</strong> If no communication is received, teachers will wait 20 minutes from class commencement, then the class is forfeited.
                    </p>
                  </div>
                  <div className="space-y-3 text-gray-700 leading-relaxed">
                    <p>
                      <strong>Late-Coming:</strong> If you are going to be late, communicate with management immediately. Students more than 20 minutes late will not be allowed into group classes or will forfeit private classes.
                    </p>
                    <p>
                      <strong>Group Classes:</strong> Lost time will not be recovered unless EE transport was at fault.
                    </p>
                    <p>
                      <strong>Private Classes:</strong> Lost classes will only be recovered if EE transport was at fault, or if the teacher was informed timeously and agreed to wait.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-[#1E88C7] p-3 rounded-xl flex-shrink-0">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Absence Due to Sickness</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>12-Hour Notice Required:</strong> If unable to attend due to illness, notify administration 12 hours before class. For weekends, use the emergency number.
                  </p>
                  <p>
                    <strong>2+ Consecutive Days:</strong> A doctor's certificate must accompany your request for class recovery. Without this certificate, all missed classes are forfeited.
                  </p>
                  <p>
                    <strong>Hospitalization:</strong> Proof of hospital stay with pertinent dates must be submitted to recover lost classes.
                  </p>
                  <p className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                    Failure to provide required documentation means recovery of classes is at management's discretion. No cash or card payments will be refunded.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-[#2BA3DB] p-3 rounded-xl flex-shrink-0">
                <Bus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Transport Terms</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Shared Transport:</strong> Only offered for shared classes with minimum 2 students within a 20km radius. You can book at private rates until another student joins.
                  </p>
                  <p>
                    <strong>Private Lessons:</strong> Only private transport rates available.
                  </p>
                  <p>
                    <strong>Shared Transport Pickup:</strong> You'll receive a pickup time and be contacted before driver arrives. Maximum 5-minute wait to avoid class delays.
                  </p>
                  <p>
                    <strong>Private Transport:</strong> Driver will wait if you're late, but your class ends at the scheduled time (no time extension).
                  </p>
                  <p className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-lg">
                    All transport changes must be communicated to and approved by management only. Date, time, or route changes may not be made without management's express knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-[#4DC4EC] p-3 rounded-xl flex-shrink-0">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Travelling & Class Postponement</h3>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  <p>
                    If you wish to travel for tourism or before returning home, arrangements must be made with <strong>2 weeks prior notice</strong>.
                  </p>
                  <p>
                    <strong>Maximum Break:</strong> Cannot exceed 2 weeks.
                  </p>
                  <p>
                    <strong>Recovery Period:</strong> Postponed classes must be recovered within 14 days (2 weeks) from return date.
                  </p>
                  <p className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                    Failure to comply means management may cancel recovery of classes due to teacher availability or schedule changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Discounts</h3>
              <div className="space-y-3 text-gray-700 leading-relaxed">
                <p>
                  Any discounts offered will be determined per consensus by management and per individual course requirements.
                </p>
                <p>
                  The Academy reserves the right to not offer discounts for certain courses, especially if maximum discounts are already included in package prices. This is at the sole discretion of the Academy.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] rounded-2xl shadow-2xl p-10 text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Questions About Our Terms?</h3>
            <p className="text-center text-lg text-white/90 mb-6">
              We're here to help clarify any questions you may have about our policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:isaac@eliteenglish.co.za"
                className="bg-white text-[#1E88C7] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all text-center shadow-lg"
              >
                Email Us
              </a>
              <a
                href="https://wa.me/27718838520"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all text-center border-2 border-white/30"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
