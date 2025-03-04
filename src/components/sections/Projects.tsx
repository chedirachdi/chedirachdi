'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaChartLine, FaUsers, FaLightbulb, FaGlobe, FaRocket, FaHandshake } from 'react-icons/fa';
import Image from 'next/image';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
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

  // Filter achievements based on active filter
  const filteredAchievements = activeFilter === 'all' 
    ? achievements 
    : achievements.filter(achievement => achievement.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
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
              Business <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Achievements</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg">
              Showcasing significant business impacts and transformative initiatives that demonstrate my expertise in driving growth and innovation.
            </motion.p>
          </div>
          
          {/* Filter tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
          
          {/* Achievements grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredAchievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col h-full"
              >
                <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-pattern-grid"></div>
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-3xl">
                    {achievement.icon}
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{achievement.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{achievement.description}</p>
                  
                  {/* Achievement stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {achievement.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                        <p className="text-xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Tags */}
                <div className="px-6 pb-6 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {achievement.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 