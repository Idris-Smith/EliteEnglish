import { Clock } from 'lucide-react';

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Class Schedule</h2>
          <div className="w-24 h-1 bg-[#1E88C7] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible timing options to fit your schedule
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] p-6 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white mr-3" />
              <h3 className="text-2xl font-bold text-white">Weekly Schedule</h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Time</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Format</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 uppercase tracking-wider">Course Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5">
                      <span className="text-lg font-bold text-[#1E88C7]">8:30 AM - 10:30 AM</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-900 font-medium">Group Classes</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-600">General English or IELTS Preparation</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5">
                      <span className="text-lg font-bold text-[#1E88C7]">10:45 AM - 11:45 AM</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-900 font-medium">Private Lessons</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-600">General English only</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5">
                      <span className="text-lg font-bold text-[#1E88C7]">12:45 PM - 2:45 PM</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-900 font-medium">Group or Private</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-600">General English or IELTS</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5">
                      <span className="text-lg font-bold text-[#1E88C7]">3:00 PM - 5:00 PM</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-900 font-medium">Group or Private</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-base text-gray-600">General English or IELTS</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
