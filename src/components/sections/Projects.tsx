'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaGlobeAmericas, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  };

  // Business achievements data
  const achievements = [
    {
      id: 1,
      title: "GenLogic Automation Suite",
      description: "Developed a comprehensive marketing automation ecosystem for cultural and creative industries, resulting in 75% improved lead qualification and 45% increase in conversion rates.",
      category: "automation",
      image: "/images/projects/automation-platform.jpg",
      icon: <FaRocket />,
      stats: [
        { label: "Lead Quality", value: "+75%" },
        { label: "Conversion Rate", value: "+45%" }
      ],
      tags: ["Marketing Automation", "Lead Nurturing", "CRM Integration"]
    },
    {
      id: 2,
      title: "NAZAX Growth Initiative",
      description: "Led strategic business development program at NAZAX, implementing automated sales processes and CRM systems that drove 150% revenue growth in 12 months.",
      category: "strategy",
      image: "/images/projects/business-growth.jpg",
      icon: <FaChartLine />,
      stats: [
        { label: "Revenue Growth", value: "150%" },
        { label: "Process Efficiency", value: "+85%" }
      ],
      tags: ["Business Strategy", "Sales Automation", "Revenue Growth"]
    },
    {
      id: 3,
      title: "WEBBEC Recruitment Platform",
      description: "Designed and implemented an automated talent acquisition platform, reducing hiring time by 60% and improving candidate matching accuracy by 80%.",
      category: "automation",
      image: "/images/projects/crm-system.jpg",
      icon: <FaHandshake />,
      stats: [
        { label: "Hiring Speed", value: "-60%" },
        { label: "Match Accuracy", value: "80%" }
      ],
      tags: ["Recruitment Automation", "AI Matching", "HR Tech"]
    },
    {
      id: 4,
      title: "Cultural Sector Transformation",
      description: "Spearheaded digital transformation for multiple cultural organizations, implementing automated marketing and engagement systems.",
      category: "strategy",
      image: "/images/projects/digital-transformation.jpg",
      icon: <FaGlobeAmericas />,
      stats: [
        { label: "Engagement", value: "+120%" },
        { label: "ROI", value: "+95%" }
      ],
      tags: ["Cultural Sector", "Digital Transformation", "Automation"]
    },
    {
      id: 5,
      title: "Direct Sales Automation",
      description: "Created an integrated direct sales automation system that combines lead nurturing, campaign management, and performance analytics.",
      category: "automation",
      image: "/images/projects/automation-sales.jpg",
      icon: <FaLightbulb />,
      stats: [
        { label: "Sales Efficiency", value: "+70%" },
        { label: "Lead Response", value: "-65%" }
      ],
      tags: ["Direct Sales", "Lead Automation", "Analytics"]
    },
    {
      id: 6,
      title: "Marketing Analytics Platform",
      description: "Developed a comprehensive marketing analytics platform that provides real-time insights and automated reporting for campaign optimization.",
      category: "automation",
      image: "/images/projects/analytics-platform.jpg",
      icon: <FaChartLine />,
      stats: [
        { label: "Data Accuracy", value: "99%" },
        { label: "Time Saved", value: "85%" }
      ],
      tags: ["Analytics", "Automation", "Marketing Intelligence"]
    }
  ];

  // Filter categories
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'automation', label: 'Automation Solutions' },
    { id: 'strategy', label: 'Strategic Initiatives' }
  ];

  // Filter achievements based on active filter with animation handling
  const filteredAchievements = achievements.filter(achievement => 
    activeFilter === 'all' || achievement.category === activeFilter
  );

  // Color themes for different projects
  const getCardColors = (id: number) => {
    const themes = {
      1: { accent: '#3B82F6' }, // Blue
      2: { accent: '#8B5CF6' }, // Purple
      3: { accent: '#10B981' }, // Emerald
      4: { accent: '#F97316' }, // Orange
    };
    return themes[id as keyof typeof themes] || themes[1];
  };

  return (
    <section id="projects" className="relative py-20 sm:py-32 bg-white overflow-hidden">
      {/* Minimal background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,0,0,0.02),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto relative">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-100 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
                <span className="text-blue-600 font-medium text-sm">
                  Featured Work
                </span>
              </div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-5xl font-bold mb-6 relative"
            >
              <span className="text-gray-900">Transformative</span>{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Solutions</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 text-lg max-w-2xl mx-auto"
            >
              Explore my portfolio of business achievements that have driven growth and innovation. Each project showcases my expertise in marketing automation, strategic planning, and business development.
            </motion.p>
          </div>

          {/* Filter buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg transform hover:-translate-y-0.5'
                    : 'bg-gradient-to-r from-blue-500/5 to-indigo-500/5 text-blue-600 border border-blue-100 hover:shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>
          
          {/* Projects grid with premium styling */}
          <motion.div
            layout={true}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredAchievements.map((achievement) => {
              const cardColors = getCardColors(achievement.id);
              return (
              <motion.div
                layout={true}
                key={achievement.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.3 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-blue-100/30 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200/50"
              >
                {/* Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.05),transparent_50%)]" />
                </div>
                
                {/* Header with gradient */}
                <div className="relative h-48 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden" style={{ background: `linear-gradient(to right, ${cardColors.accent}, #6366f1)` }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_50%)]" />
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
                      backgroundSize: '1.5rem 1.5rem'
                    }}
                  />
                  
                  {/* Icon with animation */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-4xl transform transition-transform duration-300 shadow-lg"
                  >
                    {achievement.icon}
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow relative z-10">
                  <h3 className="text-xl font-bold mb-3">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      {achievement.title}
                    </span>
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {achievement.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-3 rounded-xl text-center border border-blue-100/50 shadow-sm transition-all duration-300 hover:shadow-md"
                      >
                        <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                        <p className="text-lg font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          {stat.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="text-sm text-gray-600 mt-2">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                      {achievement.category}
                    </span>
                    {achievement.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 