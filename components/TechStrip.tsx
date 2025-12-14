import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Map, PenTool, Box, Compass, Layers, Cpu } from 'lucide-react';

interface TechStripProps {
    darkMode: boolean;
}

const tools = [
    { name: 'AutoCAD', icon: PenTool },
    { name: 'QGIS', icon: Globe },
    { name: 'ArcGIS', icon: Map },
    { name: 'Total Station', icon: Compass },
    { name: 'PostGIS', icon: Database },
    { name: '3D Modeling', icon: Box },
    { name: 'Photogrammetry', icon: Layers },
    { name: 'Remote Sensing', icon: Cpu },
];

const TechStrip: React.FC<TechStripProps> = ({ darkMode }) => {
    // Matches Hero's wave/theme colors
    const bgColor = darkMode ? 'bg-[#0f172a]' : 'bg-[#f8fafc]';
    const stripColor = darkMode ? 'bg-green-900/20 border-y border-green-900/30' : 'bg-green-50 border-y border-green-100';
    const textColor = darkMode ? 'text-gray-300' : 'text-gray-600';

    return (
        <div className={`py-8 ${bgColor} relative z-20 overflow-hidden`}>
            <div className={`${stripColor} py-6 backdrop-blur-sm`}>
                <div className="relative flex overflow-x-hidden group">
                    <motion.div 
                        className="flex space-x-16 animate-marquee whitespace-nowrap py-2"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ 
                            repeat: Infinity, 
                            ease: "linear", 
                            duration: 20 
                        }}
                    >
                        {/* Duplicate list for seamless loop */}
                        {[...tools, ...tools, ...tools].map((tool, idx) => (
                            <div 
                                key={idx}
                                className={`flex items-center space-x-3 ${textColor} hover:text-[#2E7D32] transition-colors cursor-default`}
                            >
                                <tool.icon size={24} className="text-[#2E7D32]" />
                                <span className="text-xl font-bold tracking-wider uppercase opacity-80">{tool.name}</span>
                            </div>
                        ))}
                    </motion.div>
                    
                    {/* Gradient Fade Edges */}
                    <div className={`pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r ${darkMode ? 'from-[#0f172a]/90' : 'from-[#f8fafc]'} to-transparent z-10`}></div>
                    <div className={`pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l ${darkMode ? 'from-[#0f172a]/90' : 'from-[#f8fafc]'} to-transparent z-10`}></div>
                </div>
            </div>
        </div>
    );
};

export default TechStrip;