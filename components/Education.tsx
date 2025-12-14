import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { EDUCATION_DATA, COLORS } from '../constants';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  return (
    <section id="education" className={`py-24 relative ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
      
      {/* Background Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${darkMode ? 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#00000012_1px,transparent_1px),linear-gradient(to_bottom,#00000012_1px,transparent_1px)]'} bg-[size:24px_24px]`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
            My Journey
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8F00] to-[#FFD54F]">Background</span>
          </h2>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
        >
            <div className={`relative p-1 rounded-3xl bg-gradient-to-br from-[#2E7D32] via-[#FF8F00] to-[#1976D2] shadow-2xl`}>
                <div className={`h-full rounded-[20px] p-8 md:p-12 backdrop-blur-xl ${darkMode ? 'bg-[#1a1a1a]/95' : 'bg-white/95'}`}>
                    
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                        <div>
                            <div className="flex items-center mb-3">
                                <div className={`p-2 rounded-lg mr-4 ${darkMode ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                                    <GraduationCap size={32} />
                                </div>
                                <h3 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {EDUCATION_DATA.degree}
                                </h3>
                            </div>
                            <p className={`text-xl font-medium ml-14 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                {EDUCATION_DATA.institution}
                            </p>
                        </div>
                        <div className={`mt-4 md:mt-0 flex items-center px-4 py-2 rounded-full font-bold shadow-sm ${darkMode ? 'bg-gray-800 text-orange-400' : 'bg-orange-50 text-orange-700'}`}>
                            <Calendar size={18} className="mr-2" />
                            {EDUCATION_DATA.year}
                        </div>
                    </div>

                    <div>
                        <h4 className={`text-sm font-bold uppercase tracking-wider mb-6 flex items-center ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            <Award size={16} className="mr-2" />
                            Key Achievements & Highlights
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {EDUCATION_DATA.highlights.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`flex items-center p-4 rounded-xl transition-colors ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'}`}
                                >
                                    <div className={`h-2 w-2 rounded-full mr-3 flex-shrink-0 ${darkMode ? 'bg-[#FF8F00]' : 'bg-[#2E7D32]'}`}></div>
                                    <span className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;