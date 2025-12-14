import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import { CV_HIGHLIGHTS } from '../constants';

interface DownloadCVProps {
  darkMode: boolean;
}

const DownloadCV: React.FC<DownloadCVProps> = ({ darkMode }) => {
  return (
    <section id="download-cv" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-[#0a101e]' : 'bg-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 md:p-12 border shadow-2xl relative overflow-hidden ${darkMode ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
            
            {/* Background Pattern */}
            <div className={`absolute top-0 right-0 w-64 h-64 rounded-full filter blur-3xl opacity-10 pointer-events-none ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold mb-6 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>
                        <FileText size={14} className="mr-2" />
                        Professional Resume
                    </div>
                    
                    <h2 className={`text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
                        Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1976D2]">CV</span>
                    </h2>
                    
                    <p className={`text-lg mb-8 leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Download my updated CV to review my education, technical skills, academic projects, and work experience in geomatics engineering.
                    </p>

                    <div className="flex flex-col gap-4 items-start">
                        <a 
                            href="/Nabin-Paiyani-Resume.pdf" 
                            download="Nabin-Paiyani-Resume.pdf"
                            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-full bg-[#1976D2] hover:bg-[#1565C0] transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
                        >
                            <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                            Download CV (PDF)
                        </a>
                        <p className={`text-sm font-medium ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                            Updated for international academic and remote roles.
                        </p>
                    </div>
                </motion.div>

                {/* Highlights List */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-2xl border ${darkMode ? 'bg-[#0f172a] border-gray-700' : 'bg-gray-50 border-gray-200'}`}
                >
                    <h3 className={`text-lg font-bold mb-4 uppercase tracking-wide ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                        CV Highlights
                    </h3>
                    <ul className="space-y-4">
                        {CV_HIGHLIGHTS.map((highlight, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle2 size={18} className={`mt-0.5 mr-3 flex-shrink-0 ${darkMode ? 'text-green-500' : 'text-green-600'}`} />
                                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {highlight}
                                </span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;