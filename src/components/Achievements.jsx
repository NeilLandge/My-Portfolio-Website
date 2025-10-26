import React from 'react';
import { Trophy, Award, Sparkles } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Trophy size={32} />,
      title: 'Smart India Hackathon',
      description: 'Selected among top 15 teams in Internal Rounds',
      years: '2024 & 2025',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Award size={32} />,
      title: 'JSPM RSCOE AVINYA 3.0',
      description: 'Placed 9th in 24-hours Hackathon Final Round',
      year: '2025',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-yellow-400 animate-pulse" size={24} />
            <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
              Achievements
            </h2>
            <Sparkles className="text-yellow-400 animate-pulse" size={24} />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognition and accomplishments in competitive programming and hackathons
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl border border-slate-700 hover:border-yellow-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2"
            >
              {/* Gradient glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-xl`}></div>
              
              <div className="flex flex-col items-center text-center relative">
                <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-full text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {achievement.title}
                </h3>
                <p className="text-gray-300 mb-2 group-hover:text-white transition-colors">{achievement.description}</p>
                <div className={`px-4 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm font-medium rounded-full`}>
                  {achievement.years || achievement.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;