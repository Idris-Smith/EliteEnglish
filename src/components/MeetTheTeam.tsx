export default function MeetTheTeam() {
  return (
    <section id="meet-the-team" className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#1E88C7]/5 rounded-full blur-3xl pulse-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#2BA3DB]/5 rounded-full blur-3xl pulse-slow"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Meet the Team</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1E88C7] to-[#2BA3DB] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1E88C7] to-[#2BA3DB] rounded-3xl shadow-2xl p-12">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { firstName: 'Stephen', lastName: 'Theunissen', role: 'Director', image: '/image.png' },
              { firstName: 'Clint', lastName: 'Van Reenen', role: 'Director', image: '/image copy.png' },
              { firstName: 'Isaac', lastName: 'Theunissen', role: 'Operations Manager', image: '/image copy copy.png' }
            ].map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-40 h-40 rounded-full mx-auto overflow-hidden shadow-xl transform group-hover:scale-105 transition-transform ring-4 ring-white">
                    <img
                      src={member.image}
                      alt={`${member.firstName} ${member.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="font-bold text-xl text-white leading-tight">
                  <div>{member.firstName}</div>
                  <div>{member.lastName}</div>
                </h4>
                <p className="text-white/90 font-medium mt-2">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
