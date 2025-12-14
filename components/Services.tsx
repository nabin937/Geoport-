import React from 'react';
import { SERVICES_DATA } from '../constants';
import { 
  Database, 
  Map as MapIcon, 
  PenTool, 
  LayoutTemplate, 
  Satellite, 
  PieChart, 
  BookOpen, 
  CheckCircle2,
  Globe2
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ServicesProps {
    darkMode: boolean;
}

const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'GIS': return <Database size={32} />;
      case 'Map': return <MapIcon size={32} />;
      case 'Digitize': return <PenTool size={32} />;
      case 'CAD': return <LayoutTemplate size={32} />;
      case 'Satellite': return <Satellite size={32} />;
      case 'Viz': return <PieChart size={32} />;
      case 'Academic': return <BookOpen size={32} />;
      default: return <Database size={32} />;
    }
  };

  return (
    <section id="services" className={`py-24 ${darkMode ? 'bg-[#0b1120]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
            Available Globally
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Remote <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1976D2] to-[#2E7D32]">Geomatics</span> Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
             <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${darkMode ? 'bg-blue-900/20 border-blue-800 text-blue-300' : 'bg-blue-50 border-blue-200 text-blue-700'}`}>
                <Globe2 className="inline mr-1.5 w-3 h-3" /> Remote Capable
             </span>
             <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${darkMode ? 'bg-green-900/20 border-green-800 text-green-300' : 'bg-green-50 border-green-200 text-green-700'}`}>
                Entry-Level Rates
             </span>
             <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${darkMode ? 'bg-orange-900/20 border-orange-800 text-orange-300' : 'bg-orange-50 border-orange-200 text-orange-700'}`}>
                Academic & Professional
             </span>
          </div>
          <p className={`mt-6 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Delivering precise spatial solutions using industry-standard GIS and CAD software. Available for contract, freelance, and academic support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES_DATA.map((service, idx) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`group relative rounded-2xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-100'}`}
                >
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>

                    <div className="p-6 h-full flex flex-col">
                        <div className={`mb-4 inline-flex p-3 rounded-lg ${darkMode ? 'bg-gray-800 text-green-400' : 'bg-green-50 text-green-700'}`}>
                            {getIcon(service.iconType)}
                        </div>

                        <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {service.title}
                        </h3>
                        <p className={`text-xs font-mono mb-4 uppercase tracking-wider ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {service.roleTitle}
                        </p>
                        
                        <p className={`text-sm mb-6 flex-grow leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {service.description}
                        </p>

                        <div className="space-y-3 mb-6">
                            {service.features.slice(0, 3).map((feature, fIdx) => (
                                <div key={fIdx} className="flex items-start">
                                    <CheckCircle2 size={14} className={`mt-0.5 mr-2 flex-shrink-0 ${darkMode ? 'text-green-500' : 'text-green-600'}`} />
                                    <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
                            <div className="flex flex-wrap gap-2">
                                {service.tools.map((tool, tIdx) => (
                                    <span key={tIdx} className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide ${darkMode ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;