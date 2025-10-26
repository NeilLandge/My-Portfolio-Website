import React, { useState } from 'react';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, liveLink }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>
          <ChevronRight 
            className={`text-cyan-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'}`} 
            size={24} 
          />
        </div>
        
        <ul className="space-y-2 mb-4 text-gray-300">
          {description.slice(0, isExpanded ? description.length : 3).map((point, index) => (
            <li key={index} className="text-sm leading-relaxed flex items-start group/item">
              <span className="text-cyan-400 mr-2 group-hover/item:scale-125 transition-transform">•</span>
              <span className="group-hover/item:text-white transition-colors">{point}</span>
            </li>
          ))}
        </ul>

        {description.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors mb-4 flex items-center gap-1"
          >
            {isExpanded ? 'Show less' : `Show ${description.length - 3} more`}
            <ChevronRight size={16} className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs border border-cyan-400/20 hover:bg-cyan-400/20 hover:scale-110 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-700 text-white rounded-lg text-sm transition-all duration-300 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 group/link"
            >
              <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
              Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 group/link"
            >
              <ExternalLink size={16} className="group-hover/link:rotate-12 transition-transform" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;