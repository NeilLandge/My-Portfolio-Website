import React from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=neillandge5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                    Email
                    <Send size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">neillandge5@gmail.com</p>
                </div>
              </div>
            </a>

            <div className="group bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">Location</h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-xl border border-slate-700 hover:border-cyan-400/30 transition-all duration-500">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/NeilLandge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
              >
                <Github className="text-white group-hover:text-cyan-400 transition-colors group-hover:rotate-12" size={24} />
                <span className="text-white group-hover:text-cyan-400 transition-colors">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/neil-landge"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
              >
                <Linkedin className="text-white group-hover:text-cyan-400 transition-colors group-hover:rotate-12" size={24} />
                <span className="text-white group-hover:text-cyan-400 transition-colors">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/50 rounded-full border border-slate-700">
            <p className="text-gray-400">
              © 2025 Neil Landge. Built with <span className="text-cyan-400">React</span> & <span className="text-cyan-400">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;