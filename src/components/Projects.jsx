import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'BudgetPro - AI-Powered Personal Finance Manager',
      description: [
        'Built a full-stack web application to manage personal income and expenses efficiently with a responsive design',
        'Implemented CRUD functionality for adding, editing, deleting transactions, and setting budget limits',
        'Integrated AI-powered report analysis with PDF export for insights and record-keeping',
        'Visualized spending trends and category-wise distribution using Chart.js',
        'Used Node.js and Express.js for backend APIs and MongoDB for data persistence'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
      githubLink: 'https://github.com/NeilLandge/BudgetPro',
      liveLink: 'https://budget-pro-amber.vercel.app/'
    },
    {
      title: 'Hospital Management System',
      description: [
        'Developed a Java-Swing based application to manage patients, doctors, appointments, and billing efficiently',
        'Implemented CRUD operations with input validation, error handling, and user authentication',
        'Integrated PDF generation for appointments and bills via iTextPDF for record-keeping',
        'Designed a centralized dashboard for smooth navigation and interactive stat cards'
      ],
      technologies: ['Java', 'Swing', 'JDBC', 'SQLite', 'iTextPDF'],
      githubLink: 'https://github.com/NeilLandge/Hospital-Management-System',
      liveLink: null
    },
    {
      title: 'SMS Spam Classifier',
      description: [
        'Developed a SMS Spam classifier using NLTK and Scikit-learn',
        'Analyzed a data set consisting of ham and spam messages using Seaborn and Matplotlib',
        'Performed EDA (Exploratory Data Analysis) and Data Preprocessing using Seaborn and NLTK',
        'Used PyCharm and Streamlit to deploy the spam classifier in a web-application based format'
      ],
      technologies: ['Python', 'NLTK', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Streamlit'],
      githubLink: 'https://github.com/NeilLandge/IBM-Internship-Neil-Landge',
      liveLink: null
    },
    {
      title: 'HTML Poster Editor',
      description: [
        'Interactive web-based poster editor with drag-and-drop functionality',
        'Real-time editing capabilities for text, images, and design elements',
        'Export functionality for high-quality poster downloads',
        'Responsive design for seamless editing across devices'
      ],
      technologies: ['HTML', 'CSS', 'TypeScript', 'Next.js'],
      githubLink: 'https://github.com/NeilLandge/HTML-Poster-Editor',
      liveLink: 'https://html-poster-editor-six.vercel.app/'
    },

    {
      title: 'FloatChat AI (SIH Hackathon Project)',
      description: [
        'Created an AI-powered app for oceanographic data exploration and visualization of ARGO floats',
        'Built a Streamlit dashboard with interactive graphs, trajectory mapping, and time-series visualizations',
        'Integrated AI-powered RAG system to answer natural language queries using PostgreSQL and semantic indexing',
        'Automated parsing and processing of ARGO NetCDF files with quality control and validation'
      ],
      technologies: ['Python', 'Streamlit', 'RAG', 'PostgreSQL', 'NetCDF'],
      githubLink: 'https://github.com/NeilLandge/FloatChat-AI-Argo-Float-Explorer',
      liveLink: null
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my work spanning full-stack development, AI/ML, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;