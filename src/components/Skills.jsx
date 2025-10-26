import React from 'react';
import { Code2, Layout, Server, Database, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['C/C++', 'Python', 'JavaScript', 'Java'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Frontend',
      icon: <Layout size={24} />,
      skills: ['HTML5', 'CSS', 'JavaScript', 'React.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Database',
      icon: <Database size={24} />,
      skills: ['MongoDB', 'PostgreSQL', 'SQLite'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Data Science & ML',
      icon: <Brain size={24} />,
      skills: ['Matplotlib', 'Seaborn', 'SciPy', 'NLTK', 'Scikit-learn'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Developer Tools',
      icon: <Wrench size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'PyCharm', 'Streamlit'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-xl`}></div>
                
                <div className="flex items-center gap-3 mb-4 relative">
                  <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 relative">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-900 text-gray-300 rounded-md text-sm border border-slate-700 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-110 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;