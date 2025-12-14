import React from 'react';
import { motion } from 'framer-motion';
import { BIO_TEXT, COLORS } from '../constants';
import { Download, MessageCircle, ArrowRight } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
        >
          <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${darkMode ? 'text-green-400' : 'text-green-700'}`}>
            My Story
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1976D2]">Me</span>
          </h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#2E7D32] to-[#1976D2]`}></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-8 md:p-12 rounded-3xl border shadow-xl backdrop-blur-sm ${darkMode ? 'bg-gray-900/50 border-gray-800 shadow-black/20' : 'bg-white border-gray-100 shadow-gray-200/50'}`}
        >
            <p className={`text-lg sm:text-xl leading-relaxed mb-10 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <span className="text-5xl float-left mr-3 mt-[-10px] font-serif opacity-30">"</span>
                {BIO_TEXT}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                 <a 
                    href="/Nabin-Paiyani-Resume.pdf"
                    download="Nabin-Paiyani-Resume.pdf"
                    className={`group flex items-center px-8 py-3.5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${darkMode ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                >
                    <Download size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                    Download CV
                </a>
                <a 
                    href="#contact"
                    className={`group flex items-center px-8 py-3.5 border-2 rounded-full font-bold transition-all ${
                        darkMode 
                            ? 'border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400' 
                            : 'border-gray-200 text-gray-700 hover:border-green-600 hover:text-green-700'
                    }`}
                >
                    <MessageCircle size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
                    Let's Chat
                    <ArrowRight size={16} className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;