import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Parallax cursor effect */}
      <div 
        className="absolute w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 192}px`,
          top: `${mousePosition.y - 192}px`,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 animate-fade-in-down">
              <span className="text-cyan-400 text-sm font-mono bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 inline-flex items-center gap-2">
                <Sparkles size={16} className="animate-pulse" />
                Hello, I'm
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
                Neil Landge
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text mb-4 animate-fade-in-up delay-200">
              Computer Science Student & Full Stack Developer
            </p>
            
            <p className="text-gray-400 max-w-2xl mb-8 text-lg leading-relaxed animate-fade-in-up delay-300">
              Third-year CS student at AISSMS IOIT Pune, passionate about building innovative web applications 
              and exploring AI-powered solutions. Specializing in MERN stack development with a keen interest 
              in data science and machine learning.
            </p>

            <div className="flex gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up delay-400">
              <a
                href="https://github.com/NeilLandge"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
              >
                <Github className="text-white group-hover:text-cyan-400 transition-colors" size={24} />
              </a>
              <a
                href="https://linkedin.com/in/neil-landge"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
              >
                <Linkedin className="text-white group-hover:text-cyan-400 transition-colors" size={24} />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=neillandge5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1"
              >
                <Mail className="text-white group-hover:text-cyan-400 transition-colors" size={24} />
              </a>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in-up delay-500">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50 hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 animate-fade-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-spin-slow"></div>
              <img
                src="/images/profile.jpg"
                alt="Neil Landge"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover object-top border-4 border-cyan-400/50 shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer animate-bounce hover:animate-none hover:scale-110"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;