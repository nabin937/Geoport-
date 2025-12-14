import React from 'react';
import { COLORS } from '../constants';

interface LogoProps {
  darkMode: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ darkMode, className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Group */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Green Background */}
          <rect width="100" height="100" rx="16" fill={COLORS.primaryGreen} />
          
          {/* Map/Card Icon Graphic */}
          <g transform="translate(18, 42)">
             <rect x="0" y="0" width="64" height="36" rx="6" stroke="white" strokeWidth="5" fill="none" />
             <line x1="32" y1="0" x2="32" y2="36" stroke="white" strokeWidth="4" />
             <line x1="0" y1="18" x2="64" y2="18" stroke="white" strokeWidth="4" />
          </g>
          
          {/* Location Pin Graphic */}
          <path 
            d="M50 18C41.1634 18 34 25.1634 34 34C34 44 50 64 50 64C50 64 66 44 66 34C66 25.1634 58.8366 18 50 18Z" 
            fill="white" 
          />
          <circle cx="50" cy="34" r="6" fill={COLORS.primaryGreen} />
        </svg>
      </div>

      {/* Text Group */}
      <div className="flex flex-col justify-center">
        <h1 className={`text-2xl font-bold leading-none tracking-tight ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
          GeoPort
        </h1>
        <div className={`flex flex-col text-[10px] font-medium leading-tight mt-0.5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <span>Geomatics Engineering</span>
          <span>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;