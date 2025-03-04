'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaChartLine, FaBullhorn, FaUsers, FaLightbulb, FaCogs, FaHandshake, FaTrophy, FaChess, FaCode, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { ReactNode } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: ReactNode;
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('business');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Skill categories
  const categories = [
    {
      id: 'business',
      label: 'Business & Leadership',
      icon: <FaChartLine />,
      description: 'Strategic business development and leadership skills that drive organizational growth and success.',
      skills: [
        { name: 'Strategic Planning', level: 95, icon: <FaChartLine /> },
        { name: 'Business Development', level: 90, icon: <FaChartLine /> },
        { name: 'Executive Leadership', level: 98, icon: <FaChess /> },
        { name: 'Client Relationship Management', level: 95, icon: <FaHandshake /> },
        { name: 'Negotiation', level: 90, icon: <FaHandshake /> },
        { name: 'Team Building', level: 85, icon: <FaUsers /> },
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing & Sales',
      icon: <FaBullhorn />,
      description: 'Comprehensive marketing and sales expertise to enhance brand visibility and drive revenue growth.',
      skills: [
        { name: 'Marketing Automation', level: 95, icon: <FaBullhorn /> },
        { name: 'Digital Marketing', level: 90, icon: <FaBullhorn /> },
        { name: 'Sales Strategy', level: 85, icon: <FaChartLine /> },
        { name: 'Content Marketing', level: 80, icon: <FaLightbulb /> },
        { name: 'Email Marketing', level: 90, icon: <FaBullhorn /> },
        { name: 'Social Media Marketing', level: 85, icon: <FaBullhorn /> },
      ]
    },
    {
      id: 'technical',
      label: 'Technical & Project',
      icon: <FaCogs />,
      description: 'Technical and project management capabilities that ensure efficient implementation and delivery.',
      skills: [
        { name: 'Project Management', level: 90, icon: <FaChartLine /> },
        { name: 'CRM Systems', level: 95, icon: <FaCogs /> },
        { name: 'Data Analysis', level: 85, icon: <FaChartLine /> },
        { name: 'Process Optimization', level: 90, icon: <FaChartLine /> },
        { name: 'Marketing Technology', level: 95, icon: <FaCogs /> },
        { name: 'Automation Tools', level: 90, icon: <FaCogs /> },
      ]
    }
  ];

  // Areas of expertise
  const expertiseAreas = [
    {
      title: 'Executive Leadership',
      description: 'Visionary leadership that drives organizational transformation, fosters innovation, and delivers exceptional business outcomes.',
      icon: <FaChess />,
      color: 'from-blue-600 to-indigo-700'
    },
    {
      title: 'Business Growth',
      description: 'Strategic planning and execution to drive sustainable business growth and expansion.',
      icon: <FaChartLine />,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Marketing Automation',
      description: 'Implementation of advanced marketing automation systems to streamline processes and improve ROI.',
      icon: <FaBullhorn />,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Leadership',
      description: 'Effective leadership and team building to create high-performing, motivated teams.',
      icon: <FaUsers />,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Strategic Consulting',
      description: 'Expert guidance on business strategy, market positioning, and growth opportunities.',
      icon: <FaLightbulb />,
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Client Relationship',
      description: 'Building and maintaining strong client relationships through effective communication and trust.',
      icon: <FaHandshake />,
      color: 'from-rose-500 to-red-600'
    },
  ];

  // Skill level legend
  const skillLevels = [
    { label: 'Expert', range: '90-100%', color: 'bg-blue-600' },
    { label: 'Advanced', range: '80-89%', color: 'bg-indigo-600' },
    { label: 'Proficient', range: '70-79%', color: 'bg-purple-600' },
    { label: 'Intermediate', range: '60-69%', color: 'bg-pink-600' },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <div className="w-12 md:w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900"
            >
              Professional <span className="text-blue-600">Skills</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0"
            >
              A comprehensive overview of my technical and business capabilities
            </motion.p>
          </div>

          {/* Category navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {category.icon}
                  {category.label}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Skills content */}
          <motion.div variants={itemVariants} className="mt-6 md:mt-8">
            {categories.map((category) => (
              <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white rounded-lg p-4 md:p-6 shadow-md border border-gray-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                          {skill.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-600 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{skill.name}</span>
                          <span className="text-blue-600 font-medium">{skill.level}%</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill level legend */}
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  {skillLevels.map((level, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                      <span className="text-sm text-gray-600">
                        <span className="font-medium">{level.label}</span> ({level.range})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Expertise areas */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 text-gray-900">Areas of Expertise</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200"
                >
                  <div className={`p-4 md:p-6 bg-gradient-to-r ${area.color} text-white`}>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold">{area.title}</h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-sm md:text-base text-gray-600">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Skills Radar Chart Component
function SkillsRadarChart() {
  return (
    <svg width="100%" height="400" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-lg">
      {/* Background */}
      <circle cx="250" cy="200" r="150" fill="#EFF6FF" />
      
      {/* Radar levels */}
      <circle cx="250" cy="200" r="150" fill="none" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="250" cy="200" r="120" fill="none" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="250" cy="200" r="90" fill="none" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="250" cy="200" r="60" fill="none" stroke="#E2E8F0" strokeWidth="1" />
      <circle cx="250" cy="200" r="30" fill="none" stroke="#E2E8F0" strokeWidth="1" />
      
      {/* Axis lines */}
      <line x1="250" y1="50" x2="250" y2="350" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="100" y1="200" x2="400" y2="200" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="152.5" y1="102.5" x2="347.5" y2="297.5" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="152.5" y1="297.5" x2="347.5" y2="102.5" stroke="#E2E8F0" strokeWidth="1" />
      
      {/* Skill points */}
      <path 
        d="M250,65 L355,130 L355,270 L250,335 L145,270 L145,130 Z" 
        fill="url(#skillGradient)" 
        fillOpacity="0.3" 
        stroke="url(#skillGradient)" 
        strokeWidth="2"
      />
      
      <circle cx="250" cy="65" r="6" fill="#3B82F6" />
      <circle cx="355" cy="130" r="6" fill="#3B82F6" />
      <circle cx="355" cy="270" r="6" fill="#3B82F6" />
      <circle cx="250" cy="335" r="6" fill="#3B82F6" />
      <circle cx="145" cy="270" r="6" fill="#3B82F6" />
      <circle cx="145" cy="130" r="6" fill="#3B82F6" />
      
      {/* Skill labels */}
      <text x="250" y="40" textAnchor="middle" fill="currentColor" className="text-gray-700 dark:text-gray-300" fontWeight="bold">
        Business Strategy
      </text>
      <text x="380" y="130" textAnchor="start" fill="currentColor" className="text-gray-700 dark:text-gray-300" fontWeight="bold">
        Marketing
      </text>
      <text x="380" y="270" textAnchor="start" fill="currentColor" className="text-gray-700 dark:text-gray-300" fontWeight="bold">
        Technology
      </text>
      <text x="250" y="365" textAnchor="middle" fill="currentColor" className="text-gray-700 dark:text-gray-300" fontWeight="bold">
        Leadership
      </text>
      <text x="120" y="270" textAnchor="end" fill="currentColor" className="text-gray-700 dark:text-gray-300" fontWeight="bold">
        Client Relations
      </text>
      <text x="120" y="130" textAnchor="end" fill="currentColor" className="text-gray-700 dark:text-gray-300" fontWeight="bold">
        Innovation
      </text>
      
      {/* Center point */}
      <circle cx="250" cy="200" r="4" fill="#3B82F6" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  );
} 