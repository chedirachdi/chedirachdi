'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { FaChartLine, FaUsers, FaLightbulb, FaGlobe, FaRocket, FaHandshake } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Optimized animation variants
  const containerVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  };

  const itemVariants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Business achievements data
  const achievements = [
    {
      id: 1,
      title: "Marketing Automation Platform",
      description: "Developed and implemented a comprehensive marketing automation platform that increased client conversion rates by 45% and streamlined campaign management processes.",
      category: "automation",
      image: "/images/projects/automation-platform.jpg",
      icon: <FaRocket />,
      stats: [
        { label: "Conversion Increase", value: "45%" },
        { label: "Time Efficiency", value: "65%" }
      ],
      tags: ["Marketing Automation", "CRM Integration", "Analytics"]
    },
    {
      id: 2,
      title: "Business Growth Strategy",
      description: "Designed and executed a strategic business growth plan for a mid-size company, resulting in 120% revenue growth over 18 months and successful market expansion.",
      category: "strategy",
      image: "/images/projects/business-growth.jpg",
      icon: <FaChartLine />,
      stats: [
        { label: "Revenue Growth", value: "120%" },
        { label: "Market Expansion", value: "3 Regions" }
      ],
      tags: ["Strategic Planning", "Market Analysis", "Revenue Growth"]
    },
    {
      id: 3,
      title: "Client Relationship Management System",
      description: "Implemented a custom CRM solution that improved client retention by 35% and enhanced team collaboration through streamlined communication channels.",
      category: "automation",
      image: "/images/projects/crm-system.jpg",
      icon: <FaHandshake />,
      stats: [
        { label: "Client Retention", value: "35%" },
        { label: "Team Efficiency", value: "40%" }
      ],
      tags: ["CRM", "Client Management", "Team Collaboration"]
    },
    {
      id: 4,
      title: "Leadership Development Program",
      description: "Created and led a comprehensive leadership development program that improved team performance by 50% and reduced turnover rates by 25% within the organization.",
      category: "leadership",
      image: "/images/projects/leadership-program.jpg",
      icon: <FaUsers />,
      stats: [
        { label: "Performance Boost", value: "50%" },
        { label: "Reduced Turnover", value: "25%" }
      ],
      tags: ["Leadership", "Team Building", "Organizational Development"]
    },
    {
      id: 5,
      title: "Digital Transformation Initiative",
      description: "Led a company-wide digital transformation initiative that modernized operations, resulting in 30% cost reduction and improved customer satisfaction scores.",
      category: "strategy",
      image: "/images/projects/digital-transformation.jpg",
      icon: <FaGlobe />,
      stats: [
        { label: "Cost Reduction", value: "30%" },
        { label: "Satisfaction Increase", value: "42%" }
      ],
      tags: ["Digital Transformation", "Process Optimization", "Customer Experience"]
    },
    {
      id: 6,
      title: "Innovation Workshop Series",
      description: "Developed and facilitated an innovation workshop series that generated 15 viable business ideas, with 3 successfully implemented, creating new revenue streams.",
      category: "leadership",
      image: "/images/projects/innovation-workshop.jpg",
      icon: <FaLightbulb />,
      stats: [
        { label: "Ideas Generated", value: "15" },
        { label: "Implemented", value: "3" }
      ],
      tags: ["Innovation", "Ideation", "Business Development"]
    }
  ];

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Achievements' },
    { id: 'automation', label: 'Automation' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'leadership', label: 'Leadership' }
  ];

  // Filter achievements based on active filter with animation handling
  const filteredAchievements = achievements.filter(achievement => 
    activeFilter === 'all' || achievement.category === activeFilter
  );

  return (
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <div className="w-12 md:w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
            >
              Featured <span className="text-blue-600">Projects</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Explore my portfolio of successful projects and business transformations
            </motion.p>
          </div>

          {/* Filter buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform hover:-translate-y-0.5'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
          
          {/* Projects grid */}
          <motion.div
            layout={!prefersReducedMotion}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredAchievements.map((achievement) => (
                <motion.div
                  layout={!prefersReducedMotion}
                  key={achievement.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col h-full transform transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-48 md:h-52 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl md:text-4xl">
                      {achievement.icon}
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900">{achievement.title}</h3>
                    <p className="text-base text-gray-600 mb-6">{achievement.description}</p>
                    
                    {/* Achievement stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {achievement.stats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg text-center">
                          <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                          <p className="text-lg md:text-xl font-bold text-blue-600">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {achievement.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 