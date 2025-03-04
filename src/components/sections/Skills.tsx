'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaChartLine, FaBullhorn, FaUsers, FaLightbulb, FaCogs, FaChartBar, FaChartPie, FaHandshake, FaTrophy, FaChess } from 'react-icons/fa';

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
        { name: 'Strategic Planning', level: 95 },
        { name: 'Business Development', level: 90 },
        { name: 'Executive Leadership', level: 98 },
        { name: 'Client Relationship Management', level: 95 },
        { name: 'Negotiation', level: 90 },
        { name: 'Team Building', level: 85 },
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing & Sales',
      icon: <FaBullhorn />,
      description: 'Comprehensive marketing and sales expertise to enhance brand visibility and drive revenue growth.',
      skills: [
        { name: 'Marketing Automation', level: 95 },
        { name: 'Digital Marketing', level: 90 },
        { name: 'Sales Strategy', level: 85 },
        { name: 'Content Marketing', level: 80 },
        { name: 'Email Marketing', level: 90 },
        { name: 'Social Media Marketing', level: 85 },
      ]
    },
    {
      id: 'technical',
      label: 'Technical & Project',
      icon: <FaCogs />,
      description: 'Technical and project management capabilities that ensure efficient implementation and delivery.',
      skills: [
        { name: 'Project Management', level: 90 },
        { name: 'CRM Systems', level: 95 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Process Optimization', level: 90 },
        { name: 'Marketing Technology', level: 95 },
        { name: 'Automation Tools', level: 90 },
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
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Expertise</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg">
              A comprehensive overview of my professional skills and areas of expertise that drive exceptional results.
            </motion.p>
          </div>
          
          {/* Executive Leadership Spotlight */}
          <motion.div 
            variants={itemVariants} 
            className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                <FaTrophy className="text-4xl text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Executive Leadership Excellence</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  With over 15 years of experience as a CEO and business leader, I've developed exceptional executive leadership capabilities that drive organizational transformation and sustainable growth. My leadership approach combines strategic vision, operational excellence, and a deep understanding of business automation.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Strategic Vision</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Ability to envision future business opportunities and develop actionable roadmaps</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Team Empowerment</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Creating high-performance cultures through mentorship and strategic delegation</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">Change Management</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Guiding organizations through transformational change with minimal disruption</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Skills section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Professional Skills</h3>
            
            {/* Category tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </button>
              ))}
            </div>
            
            {/* Active category content */}
            {categories.map((category) => (
              <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-gray-900 dark:text-white">{skill.name}</span>
                          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                            className={`h-full rounded-full ${
                              skill.level >= 90 ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                              skill.level >= 80 ? 'bg-gradient-to-r from-indigo-500 to-indigo-600' :
                              skill.level >= 70 ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                              'bg-gradient-to-r from-pink-500 to-pink-600'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Skill level legend */}
                <div className="flex flex-wrap justify-center gap-4">
                  {skillLevels.map((level, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">{level.label}</span> ({level.range})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Expertise areas */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Areas of Expertise</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className={`p-6 bg-gradient-to-r ${area.color} text-white`}>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl mb-4">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-bold">{area.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Skills visualization */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <SkillsRadarChart />
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