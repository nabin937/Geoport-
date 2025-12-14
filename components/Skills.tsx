import React from 'react';
import { SKILL_CATEGORIES, SKILLS_CHART_DATA, COLORS } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className={`py-24 relative overflow-hidden ${darkMode ? 'bg-[#1e293b]' : 'bg-gray-50'}`}>
      
       {/* Background Glow */}
       <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
       <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <span className={`text-sm font-bold tracking-widest uppercase mb-2 block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            My Arsenal
          </span>
          <h2 className={`text-4xl sm:text-5xl font-black uppercase tracking-tight ${darkMode ? 'text-white' : 'text-[#1a1a1a]'}`}>
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1976D2]">Competencies</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Skill Categories */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <motion.div 
                key={idx} 
                variants={item}
                className={`group p-6 rounded-2xl border shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${darkMode ? 'bg-gray-800/60 border-gray-700 hover:border-gray-500' : 'bg-white/80 border-gray-100 hover:border-blue-200'}`}
              >
                <h3 className={`text-xl font-bold mb-4 pb-2 border-b flex items-center justify-between ${darkMode ? 'text-white border-gray-700' : 'text-gray-900 border-gray-100'}`}>
                  {cat.category}
                  <div className={`h-2 w-2 rounded-full ${darkMode ? 'bg-green-500' : 'bg-blue-500'} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                </h3>
                <ul className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center">
                      <CheckCircle2 size={16} className={`mr-2 flex-shrink-0 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                      <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className={`h-full p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center border backdrop-blur-md relative overflow-hidden ${darkMode ? 'bg-gray-900/60 border-gray-800' : 'bg-white border-gray-100'}`}>
                 {/* Decorative circles */}
                 <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                 <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -ml-16 -mb-16"></div>

                 <h3 className={`text-xl font-bold mb-6 relative z-10 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      Proficiency Balance
                 </h3>
                 <div className="w-full h-[350px] relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_CHART_DATA}>
                            <PolarGrid stroke={darkMode ? '#374151' : '#e5e7eb'} strokeDasharray="3 3" />
                            <PolarAngleAxis 
                                dataKey="subject" 
                                tick={{ fill: darkMode ? '#9CA3AF' : '#4B5563', fontSize: 11, fontWeight: 600 }} 
                            />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Skill Level"
                                dataKey="A"
                                stroke={COLORS.primaryGreen}
                                strokeWidth={3}
                                fill={COLORS.primaryGreen}
                                fillOpacity={0.3}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: darkMode ? '#1f2937' : '#fff',
                                    borderColor: darkMode ? '#374151' : '#e5e7eb',
                                    color: darkMode ? '#fff' : '#000',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                                    border: 'none'
                                }}
                                itemStyle={{ color: darkMode ? '#fff' : '#000' }}
                                formatter={(value: number) => [`${value}%`, 'Proficiency']}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                 </div>
                 <p className={`text-xs text-center mt-4 uppercase tracking-wider font-semibold ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                     Relative strength across disciplines
                 </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;