import React from 'react';
import { GraduationCap, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Education</h3>
                  <p className="text-gray-300 font-medium">
                    Bachelor of Technology in Computer Science
                  </p>
                  <p className="text-gray-400 text-sm">
                    AISSMS Institute of Information Technology, Pune
                  </p>
                  <p className="text-cyan-400 text-sm mt-1">CGPA: 8.2 (77.9%) | 2023 - 2027</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Academic Background</h3>
                  <p className="text-gray-300 mb-2">St. Arnold's Central School, Pune</p>
                  <p className="text-gray-400 text-sm">XII - 83% | MHT-CET - 92.71 percentile</p>
                  <p className="text-gray-400 text-sm">X - 92.17%</p>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Location</h3>
                  <p className="text-gray-300">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <h3 className="text-2xl font-semibold text-white mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate third-year Computer Science student with a strong foundation in full-stack 
                development and a growing expertise in AI and machine learning. My journey in tech has been 
                driven by curiosity and a desire to build solutions that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                From developing AI-powered finance managers to building oceanographic data explorers, I enjoy 
                tackling complex problems and turning ideas into functional, user-friendly applications. My 
                experience spans across web development, data science, and system design.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me participating in hackathons, exploring new technologies, 
                or collaborating with teams to create innovative solutions. I believe in continuous learning 
                and pushing the boundaries of what's possible with technology.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <h3 className="text-xl font-semibold text-white mb-4 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Leadership', 'Adaptability', 'Teamwork', 'Communication', 'Problem-Solving'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-cyan-400/10 text-cyan-400 rounded-full text-sm border border-cyan-400/20 hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;