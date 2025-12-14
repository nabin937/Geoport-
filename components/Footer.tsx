import React from 'react';
import { ArrowUp, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${darkMode ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Nabin Paiyani
          </h2>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Geomatics Engineering
          </p>
          <a href="/" className={`text-xs font-mono mt-1 block ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              GeoPort.online
          </a>
        </div>

        <div className="flex items-center gap-4">
            <a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className={`p-2 rounded-full transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-700'}`}
            >
                <Linkedin size={20} />
            </a>

            <button
            onClick={scrollToTop}
            className={`p-2 rounded-full transition-colors ${
                darkMode 
                ? 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:text-[#2E7D32] hover:bg-green-50'
            }`}
            aria-label="Scroll to top"
            >
            <ArrowUp size={20} />
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;