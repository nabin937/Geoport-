import React from 'react';
import { SERVICES_DATA, CONTACT_INFO } from '../constants';
import { 
  Database, 
  Map as MapIcon, 
  PenTool, 
  LayoutTemplate, 
  Satellite, 
  BookOpen, 
  CheckCircle2, 
  Wrench,
  Clock,
  ArrowRight,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';

interface HireMeProps {
    darkMode: boolean;
}

const HireMe: React.FC<HireMeProps> = ({ darkMode }) => {
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'GIS': return <Database size={28} />;
      case 'Map': return <MapIcon size={28} />;
      case 'Digitize': return <PenTool size={28} />;
      case 'CAD': return <LayoutTemplate size={28} />;
      case 'Satellite': return <Satellite size={28} />;
      case 'Academic': return <BookOpen size={28} />;
      default: return <Database size={28} />;
    }
  };

  return (
    <section id="hire-me" className={`py-24 ${darkMode ? 'bg-[#0f172a]' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className={`text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Remote Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1976D2]">(Entry-Level)</span>
          </h2>
          <h3 className={`text-xl sm:text-2xl font-bold tracking-wide mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Geomatics Engineering Support
          </h3>
          <p className={`max-w-3xl mx-auto text-lg leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Suitable for remote support, academic work, and junior technical tasks. 
            Services include GIS mapping, spatial data processing, and CAD drafting.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SERVICES_DATA.map((service, idx) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl border transition-all hover:shadow-xl ${darkMode ? 'bg-[#1a1a1a] border-gray-800 hover:border-green-800' : 'bg-white border-gray-200 hover:border-green-200'}`}
                >
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800 text-green-400' : 'bg-green-50 text-green-700'}`}>
                            {getIcon(service.iconType)}
                        </div>
                        <div>
                            <h4 className={`font-bold text-lg leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>{service.title}</h4>
                            <p className={`text-xs uppercase tracking-wider font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{service.roleTitle}</p>
                        </div>
                    </div>
                    
                    <ul className="space-y-2.5">
                        {service.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start text-sm">
                                <CheckCircle2 size={16} className={`mt-0.5 mr-2.5 flex-shrink-0 ${darkMode ? 'text-green-500' : 'text-green-600'}`} />
                                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>

        {/* Summary Info Box */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 md:p-12 relative overflow-hidden border ${darkMode ? 'bg-[#0b1120] border-gray-800' : 'bg-white border-gray-200 shadow-xl shadow-gray-200/50'}`}
        >
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Tools & Availability */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Wrench className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                            <h4 className={`text-lg font-bold uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Tools Used
                            </h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                             {['QGIS', 'AutoCAD', 'GPS Data', 'Survey Data', 'MS Excel'].map((tool) => (
                                 <span key={tool} className={`px-3 py-1.5 rounded-md text-sm font-bold border ${darkMode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-200 text-gray-700'}`}>
                                     {tool}
                                 </span>
                             ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 mb-3">
                             <Clock className={`w-5 h-5 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`} />
                             <h4 className={`text-lg font-bold uppercase tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                Availability
                             </h4>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            All services are delivered <span className="font-bold">100% remotely</span>. 
                            Advanced professional services available after bachelor studies abroad.
                        </p>
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`flex flex-col justify-center items-center text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    <a 
                        href="#contact"
                        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-full bg-[#2E7D32] hover:bg-[#1b5e20] transition-all shadow-lg hover:shadow-green-900/20 hover:-translate-y-1 mb-4"
                    >
                        Hire Me for Remote Work
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                    
                    <a 
                        href="/Nabin-Paiyani-Resume.pdf"
                        download="Nabin-Paiyani-Resume.pdf"
                        className={`inline-flex items-center text-sm font-bold hover:underline mb-6 ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
                    >
                        <Download size={14} className="mr-1.5" />
                        Download CV PDF
                    </a>
                    
                    <div className="text-sm space-y-1">
                        <p className={`font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            For inquiries & collaborations:
                        </p>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="block hover:underline text-blue-500">
                            {CONTACT_INFO.email}
                        </a>
                    </div>
                </div>

            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HireMe;