import React, { useState } from 'react';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, X, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const filters = ['All', 'Mapping', 'Surveying', 'GIS'];

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.title.includes(activeFilter) || p.description.includes(activeFilter));

  return (
    <section id="projects" className={`py-24 relative transition-colors duration-300 ${darkMode ? 'bg-[#05180b] text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl font-black uppercase tracking-wide mb-2 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Academic Projects
          </h2>
          <p className={`max-w-2xl mx-auto text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
             Academic projects are part of diploma coursework. Services are remote and non-licensed.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {filters.map(filter => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all ${
                        activeFilter === filter 
                            ? (darkMode ? 'bg-white text-black' : 'bg-[#2E7D32] text-white')
                            : (darkMode ? 'bg-transparent text-gray-400 border border-gray-700 hover:border-white hover:text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-[#2E7D32] hover:text-[#2E7D32]')
                    }`}
                >
                    {filter}
                </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border ${
                  darkMode 
                  ? 'bg-[#0a2e16] border-green-900/30 hover:shadow-green-900/20' 
                  : 'bg-white border-gray-100 hover:border-green-200 hover:shadow-green-100'
              }`}
            >
              <div className="grid md:grid-cols-12 gap-0">
                  {/* Icon Side */}
                  <div className={`md:col-span-3 p-8 flex flex-col items-center justify-center border-r ${darkMode ? 'bg-[#0f3a18] border-green-900/30' : 'bg-green-50 border-gray-100'}`}>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-green-900/50 text-green-400' : 'bg-white text-green-600 shadow-sm'}`}>
                          <Layers size={32} />
                      </div>
                      <span className={`text-xs font-mono uppercase tracking-widest text-center ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
                          {project.tools[0]}
                      </span>
                  </div>

                  {/* Content Side */}
                  <div className="md:col-span-9 p-8 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                          <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                              {project.title}
                          </h3>
                          <div className="hidden sm:flex gap-2">
                            {project.tools.slice(0, 3).map((tool, tIdx) => (
                                <span key={tIdx} className={`text-[10px] font-bold px-2 py-1 rounded border ${
                                    darkMode 
                                    ? 'bg-green-900/50 text-green-300 border-green-800' 
                                    : 'bg-green-50 text-green-700 border-green-100'
                                }`}>
                                    {tool}
                                </span>
                            ))}
                          </div>
                      </div>
                      
                      <p className={`mb-6 text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {project.description}
                      </p>
                      
                      <div>
                          <button 
                            onClick={() => setSelectedProject(project)}
                            className={`inline-flex items-center text-sm font-bold transition-colors ${darkMode ? 'text-green-400 hover:text-white' : 'text-green-600 hover:text-green-800'}`}
                          >
                              View Project Details
                              <ArrowUpRight size={16} className="ml-1" />
                          </button>
                      </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`relative w-full max-w-2xl border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col ${
                  darkMode ? 'bg-[#0a2e16] border-green-900' : 'bg-white border-gray-200'
              }`}
            >
              {/* Header */}
              <div className={`p-6 border-b flex justify-between items-start ${darkMode ? 'border-green-900/50 bg-[#0f3a18]' : 'border-gray-100 bg-gray-50'}`}>
                <div>
                   <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{selectedProject.title}</h3>
                   <div className="flex flex-wrap gap-2">
                      {selectedProject.tools.map((tool, idx) => (
                          <span key={idx} className={`text-xs font-mono px-2 py-1 rounded ${darkMode ? 'text-green-300 bg-green-900/30' : 'text-green-700 bg-green-100'}`}>
                              {tool}
                          </span>
                      ))}
                   </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-white/10 text-gray-400 hover:text-white' : 'hover:bg-gray-200 text-gray-500 hover:text-gray-900'}`}
                >
                  <X size={24} />
                </button>
              </div>

              {/* Body */}
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="prose max-w-none">
                   <h4 className={`text-sm font-bold mb-4 uppercase tracking-widest border-b pb-2 ${darkMode ? 'text-green-400 border-green-900/50' : 'text-green-700 border-gray-200'}`}>Technical Overview</h4>
                   <p className={`leading-relaxed whitespace-pre-line text-base ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedProject.caseStudy || selectedProject.description}
                   </p>
                </div>
              </div>

              {/* Footer */}
              <div className={`p-6 border-t flex justify-end ${darkMode ? 'border-green-900/50 bg-[#05180b]' : 'border-gray-100 bg-gray-50'}`}>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2 bg-green-700 hover:bg-green-600 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-green-500/20"
                  >
                    Close Details
                  </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;