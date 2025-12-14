import React from 'react';
import { Play, Linkedin, Mail, Facebook, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { COLORS, CONTACT_INFO } from '../constants';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className={`relative pt-32 pb-0 overflow-hidden ${darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]'}`}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className={`absolute inset-0 ${darkMode ? 'bg-[radial-gradient(#ffffff33_1px,transparent_1px)]' : 'bg-[radial-gradient(#00000033_1px,transparent_1px)]'} [background-size:20px_20px]`}></div>
      </div>

      {/* Floating Gradient Blobs */}
      <div className="absolute top-20 right-0 -mr-20 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 left-0 -ml-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="flex justify-center lg:justify-start mb-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full border ${darkMode ? 'border-green-800 bg-green-900/30 text-green-400' : 'border-green-200 bg-green-50 text-green-700'}`}>
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wide">Available for Remote Work</span>
                </div>
            </div>
            
            <p className={`text-xl sm:text-2xl font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Hello, I'm <span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Nabin Paiyani</span>
            </p>

            <h1 className={`text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-4 leading-[1] ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
              REMOTE GEOMATICS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1976D2]">
                SUPPORT
              </span>
            </h1>
            
            <h2 className={`text-xl sm:text-2xl font-bold tracking-wide mb-6 flex items-center justify-center lg:justify-start gap-3 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <span className={`h-[2px] w-8 ${darkMode ? 'bg-[#FF8F00]' : 'bg-[#2E7D32]'}`}></span>
              GIS · CAD · SPATIAL DATA
            </h2>

            <p className={`text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Diploma Graduate | Bachelor Aspirant
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#hire-me"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-full overflow-hidden transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                style={{ backgroundColor: COLORS.primaryGreen }}
              >
                 <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                 <span className="relative flex items-center">
                    Hire Me Now
                 </span>
              </a>
              <a
                href="#projects"
                className={`group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full border-2 transition-all hover:bg-opacity-5 hover:-translate-y-1 ${
                    darkMode 
                        ? 'border-white text-white hover:bg-white' 
                        : 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-black'
                }`}
              >
                <Play size={18} className="mr-2 group-hover:scale-110 transition-transform" fill="currentColor" />
                View Projects
              </a>
            </div>

            {/* Download CV Link in Hero */}
            <div className="flex justify-center lg:justify-start mb-10 -mt-4">
                 <a 
                    href="/Nabin-Paiyani-Resume.pdf" 
                    download="Nabin-Paiyani-Resume.pdf"
                    className={`group inline-flex items-center text-sm font-bold border-b-2 border-transparent hover:border-blue-500 transition-all ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                >
                    <Download size={16} className="mr-2 group-hover:animate-bounce" />
                    Download CV (PDF)
                </a>
            </div>

            {/* Social Icons with Glass effect */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  { icon: Linkedin, href: CONTACT_INFO.linkedin },
                  { icon: Mail, href: `mailto:${CONTACT_INFO.email}` },
                  { icon: Facebook, href: "#" } 
                ].map((item, index) => (
                   <a 
                      key={index} 
                      href={item.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-white/5 border-white/10 text-white hover:bg-white/20' : 'bg-black/5 border-black/10 text-gray-700 hover:bg-black/10'}`}
                   >
                      <item.icon size={20} />
                   </a>
                ))}
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "backOut" }}
            className="lg:col-span-5 mt-16 lg:mt-0 relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto">
               {/* Decorative frame elements */}
               <div className={`absolute -top-4 -right-4 w-24 h-24 rounded-bl-[40px] border-t-4 border-r-4 z-20 ${darkMode ? 'border-[#FF8F00]' : 'border-[#2E7D32]'}`}></div>
               <div className={`absolute -bottom-4 -left-4 w-24 h-24 rounded-tr-[40px] border-b-4 border-l-4 z-20 ${darkMode ? 'border-[#1976D2]' : 'border-[#1976D2]'}`}></div>

               {/* Main Image Container */}
               <div className={`relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <img 
                    src="https://i.postimg.cc/rmptt98M/20211119-141655.jpg" 
                    alt="Nabin Paiyani"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Card: Specialization */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className={`absolute bottom-6 right-6 p-4 rounded-2xl backdrop-blur-xl border shadow-lg max-w-[160px] ${darkMode ? 'bg-black/40 border-white/10' : 'bg-white/60 border-white/40'}`}
                  >
                     <p className={`text-xs font-bold uppercase mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Role</p>
                     <p className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Geomatics Technician</p>
                  </motion.div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Curved Wave Divider - Connecting to TechStrip */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20">
         <svg className="block w-full h-[60px] sm:h-[100px]" viewBox="0 0 1440 320" preserveAspectRatio="none">
             {/* Dynamic fill based on TechStrip's color which is static in TechStrip.tsx but dependent on darkMode */}
             <path fill={darkMode ? '#0f172a' : '#f8fafc'} fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
         </svg>
      </div>
    </section>
  );
};

export default Hero;