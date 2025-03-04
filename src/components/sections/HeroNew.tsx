'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaCogs, FaLightbulb, FaChartBar, FaChartPie, FaProjectDiagram } from 'react-icons/fa';

export default function HeroNew() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  
  // Professional Business SVG Elements
  const BusinessDashboardSVG = () => (
    <svg width="500" height="300" viewBox="0 0 500 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2196F3" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#1565C0" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FFA000" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      
      {/* Dashboard Background with Glass Effect */}
      <rect width="500" height="300" rx="10" fill="url(#dashboardGradient)" opacity="0.1" />
      
      {/* Background Grid - Simplified */}
      <g opacity="0.04">
        {[...Array(10)].map((_, i) => (
          <line 
            key={`vline-${i}`} 
            x1={i * 50} 
            y1="0" 
            x2={i * 50} 
            y2="300" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="1 5"
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <line 
            key={`hline-${i}`} 
            x1="0" 
            y1={i * 50} 
            x2="500" 
            y2={i * 50} 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="1 5"
          />
        ))}
      </g>
      
      {/* Header - Simplified */}
      <rect x="20" y="15" width="460" height="30" rx="5" fill="currentColor" fillOpacity="0.04" />
      <circle cx="35" cy="30" r="7" fill="currentColor" fillOpacity="0.08" />
      <rect x="50" y="25" width="80" height="10" rx="2" fill="currentColor" fillOpacity="0.08" />
      <rect x="350" y="25" width="110" height="10" rx="2" fill="currentColor" fillOpacity="0.08" />
      
      {/* Main Dashboard Content - Simplified */}
      <g className="dashboard-content">
        {/* Left Panel - Bar Chart */}
        <rect x="20" y="60" width="225" height="100" rx="5" fill="currentColor" fillOpacity="0.04" />
        <text x="30" y="75" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">Revenue Growth</text>
        
        {/* Bar Chart - Simplified */}
        <g>
          {[
            { x: 30, height: 55 },
            { x: 60, height: 40 },
            { x: 90, height: 65 },
            { x: 120, height: 75 },
            { x: 150, height: 85 },
            { x: 180, height: 90 }
          ].map((bar, i) => (
            <rect 
              key={i}
              x={bar.x} 
              y={145 - bar.height} 
              width="20" 
              height={bar.height} 
              fill="url(#chartGradient1)" 
              opacity="0.6" 
              rx="2"
            />
          ))}
        </g>
        
        {/* Right Panel - Pie Chart */}
        <rect x="255" y="60" width="225" height="100" rx="5" fill="currentColor" fillOpacity="0.04" />
        <text x="265" y="75" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">Market Segments</text>
        
        {/* Pie Chart - Simplified */}
        <g transform="translate(365, 110)">
          <path d="M0 0 L0 -35 A35 35 0 0 1 30 -17 Z" fill="url(#chartGradient1)" opacity="0.6" />
          <path d="M0 0 L30 -17 A35 35 0 0 1 30 17 Z" fill="url(#chartGradient2)" opacity="0.6" />
          <path d="M0 0 L30 17 A35 35 0 0 1 0 35 Z" fill="url(#chartGradient3)" opacity="0.6" />
          <path d="M0 0 L0 35 A35 35 0 0 1 -30 17 Z" fill="#3B82F6" opacity="0.6" />
          <circle cx="0" cy="0" r="14" fill="currentColor" opacity="0.04" />
        </g>
        
        {/* Legend - Simplified */}
        <g>
          <rect x="420" y="80" width="6" height="6" rx="1" fill="url(#chartGradient1)" />
          <text x="430" y="85" fontSize="8" fill="currentColor" opacity="0.6">Enterprise</text>
          
          <rect x="420" y="95" width="6" height="6" rx="1" fill="url(#chartGradient2)" />
          <text x="430" y="100" fontSize="8" fill="currentColor" opacity="0.6">SMB</text>
          
          <rect x="420" y="110" width="6" height="6" rx="1" fill="url(#chartGradient3)" />
          <text x="430" y="115" fontSize="8" fill="currentColor" opacity="0.6">Startup</text>
          
          <rect x="420" y="125" width="6" height="6" rx="1" fill="#3B82F6" />
          <text x="430" y="130" fontSize="8" fill="currentColor" opacity="0.6">Government</text>
        </g>
        
        {/* Bottom Panels - KPIs - Simplified */}
        <g>
          <rect x="20" y="170" width="150" height="115" rx="5" fill="currentColor" fillOpacity="0.04" />
          <text x="30" y="185" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">Client Retention</text>
          <text x="30" y="215" fontSize="18" fontWeight="bold" fill="currentColor" opacity="0.7">95%</text>
          <rect x="30" y="230" width="100" height="2" rx="1" fill="currentColor" fillOpacity="0.08" />
          <rect x="30" y="230" width="95" height="2" rx="1" fill="url(#chartGradient3)" />
          <circle cx="125" cy="231" r="2.5" fill="currentColor" opacity="0.6" />
        </g>
        
        <g>
          <rect x="180" y="170" width="150" height="115" rx="5" fill="currentColor" fillOpacity="0.04" />
          <text x="190" y="185" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">Revenue Growth</text>
          <text x="190" y="215" fontSize="18" fontWeight="bold" fill="currentColor" opacity="0.7">+120%</text>
          <rect x="190" y="230" width="100" height="2" rx="1" fill="currentColor" fillOpacity="0.08" />
          <rect x="190" y="230" width="100" height="2" rx="1" fill="url(#chartGradient1)" />
          <circle cx="290" cy="231" r="2.5" fill="currentColor" opacity="0.6" />
        </g>
        
        <g>
          <rect x="340" y="170" width="140" height="115" rx="5" fill="currentColor" fillOpacity="0.04" />
          <text x="350" y="185" fontSize="9" fontWeight="500" fill="currentColor" opacity="0.6">Experience</text>
          <text x="350" y="215" fontSize="18" fontWeight="bold" fill="currentColor" opacity="0.7">15+ yrs</text>
          <rect x="350" y="230" width="100" height="2" rx="1" fill="currentColor" fillOpacity="0.08" />
          <rect x="350" y="230" width="100" height="2" rx="1" fill="url(#chartGradient2)" />
          <circle cx="450" cy="231" r="2.5" fill="currentColor" opacity="0.6" />
        </g>
      </g>
    </svg>
  );
  
  const BusinessMetricsSVG = () => (
    <svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 opacity-5 dark:opacity-10 z-0 w-1/2 max-w-[300px]">
      <defs>
        <linearGradient id="metricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      
      {/* Simplified Grid Lines */}
      {[30, 60, 90, 120].map((y, i) => (
        <line 
          key={`grid-${i}`}
          x1="0" 
          y1={y} 
          x2="400" 
          y2={y} 
          stroke="currentColor" 
          strokeWidth="0.5" 
          strokeDasharray="4 4" 
          opacity="0.1"
        />
      ))}
      
      {[50, 100, 150, 200, 250, 300, 350].map((x, i) => (
        <line 
          key={`vgrid-${i}`}
          x1={x} 
          y1="0" 
          x2={x} 
          y2="150" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          strokeDasharray="4 4" 
          opacity="0.1"
        />
      ))}
      
      {/* Simplified Line Chart */}
      <path 
        d="M0 120 C40 100, 80 110, 120 80 C160 50, 200 70, 240 40 C280 30, 320 50, 360 30 L400 20" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeOpacity="0.3"
        fill="none"
      />
      
      {/* Subtle Area Fill */}
      <path 
        d="M0 120 C40 100, 80 110, 120 80 C160 50, 200 70, 240 40 C280 30, 320 50, 360 30 L400 20 L400 150 L0 150 Z" 
        fill="currentColor" 
        opacity="0.05"
      />
      
      {/* Key Data Points - Minimal */}
      {[
        {x: 0, y: 120},
        {x: 120, y: 80},
        {x: 240, y: 40},
        {x: 360, y: 30}
      ].map((point, i) => (
        <circle 
          key={i}
          cx={point.x} 
          cy={point.y} 
          r="2" 
          fill="currentColor"
          opacity="0.3"
        />
      ))}
    </svg>
  );
  
  const DataFlowSVG = () => (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 opacity-3 dark:opacity-5 z-0 w-1/2 max-w-[300px]">
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      
      {/* Simplified Network Grid */}
      <g opacity="0.2">
        {[...Array(5)].map((_, i) => (
          <line 
            key={`grid-v-${i}`}
            x1={80 * (i + 1)} 
            y1="0" 
            x2={80 * (i + 1)} 
            y2="400" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="3 6"
            opacity="0.2"
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <line 
            key={`grid-h-${i}`}
            x1="0" 
            y1={80 * (i + 1)} 
            x2="400" 
            y2={80 * (i + 1)} 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="3 6"
            opacity="0.2"
          />
        ))}
      </g>
      
      {/* Simplified Data Nodes */}
      {[
        {x: 80, y: 80, size: 6},
        {x: 160, y: 120, size: 8},
        {x: 240, y: 80, size: 6},
        {x: 320, y: 120, size: 8},
        {x: 80, y: 160, size: 8},
        {x: 160, y: 240, size: 6},
        {x: 240, y: 160, size: 10},
        {x: 320, y: 240, size: 6},
        {x: 80, y: 320, size: 6},
        {x: 160, y: 320, size: 8},
        {x: 240, y: 320, size: 6},
        {x: 320, y: 320, size: 8}
      ].map((node, i) => (
        <circle 
          key={i}
          cx={node.x} 
          cy={node.y} 
          r={node.size} 
          fill="url(#nodeGradient)"
          opacity="0.3"
        />
      ))}
      
      {/* Simplified Connection Lines */}
      {[
        {x1: 80, y1: 80, x2: 160, y2: 120},
        {x1: 160, y1: 120, x2: 240, y2: 80},
        {x1: 240, y1: 80, x2: 320, y2: 120},
        {x1: 80, y1: 160, x2: 160, y2: 240},
        {x1: 160, y1: 240, x2: 240, y2: 160},
        {x1: 240, y1: 160, x2: 320, y2: 240},
        {x1: 80, y1: 320, x2: 160, y2: 320},
        {x1: 160, y1: 320, x2: 240, y2: 320},
        {x1: 240, y1: 320, x2: 320, y2: 320},
        {x1: 80, y1: 80, x2: 80, y2: 160},
        {x1: 160, y1: 120, x2: 160, y2: 240},
        {x1: 240, y1: 80, x2: 240, y2: 160},
        {x1: 320, y1: 120, x2: 320, y2: 240},
        {x1: 80, y1: 160, x2: 80, y2: 320},
        {x1: 160, y1: 240, x2: 160, y2: 320},
        {x1: 240, y1: 160, x2: 240, y2: 320},
        {x1: 320, y1: 240, x2: 320, y2: 320}
      ].map((line, i) => (
        <line
          key={`line-${i}`}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="3 3"
          opacity="0.2"
        />
      ))}
    </svg>
  );
  
  // Business Analytics Floating Elements
  const AnalyticsBadge = ({ icon, title, value, position, delay }: { 
    icon: React.ReactNode, 
    title: string, 
    value: string,
    position: string,
    delay: string
  }) => (
    <motion.div
      initial={{ opacity: 0, x: position.includes('left') ? -20 : 20, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: parseFloat(delay), duration: 0.8 }}
      className={`absolute ${position} z-20 animate-float`}
      style={{ animationDelay: delay }}
    >
      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md flex items-center gap-2.5 border border-gray-200 dark:border-gray-700">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
          {icon}
        </div>
        <div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{title}</div>
          <div className="text-sm font-bold text-gray-900 dark:text-white">{value}</div>
        </div>
      </div>
    </motion.div>
  );
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
    }
  };
  
  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
    }
  };
  
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden isolate">
      {/* Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DataFlowSVG />
        <BusinessMetricsSVG />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6">
                CEO & Business Automation Expert
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Businesses Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Strategic Automation</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I help businesses streamline operations, increase efficiency, and drive growth through innovative automation strategies and executive leadership.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Link 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                Get in Touch
                <FaArrowRight />
              </Link>
              
              <Link 
                href="#projects" 
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-full shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Case Studies
              </Link>
            </motion.div>
            
            {/* Key stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              <motion.div 
                variants={statsVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">15+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Years Experience</div>
              </motion.div>
              
              <motion.div 
                variants={statsVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">120%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Avg. Growth Rate</div>
              </motion.div>
              
              <motion.div 
                variants={statsVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              >
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">50+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Businesses Transformed</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column - Dashboard visualization */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <BusinessDashboardSVG />
            </div>
            
            {/* Floating analytics badges */}
            <AnalyticsBadge 
              icon={<FaChartLine className="w-5 h-5" />}
              title="Conversion Rate"
              value="45% Increase"
              position="top-6 left-0 lg:-left-20"
              delay="1.0"
            />
            
            <AnalyticsBadge 
              icon={<FaChartPie className="w-5 h-5" />}
              title="Market Share"
              value="32% Growth"
              position="bottom-6 left-0 lg:-left-20"
              delay="1.3"
            />
            
            <AnalyticsBadge 
              icon={<FaChartBar className="w-5 h-5" />}
              title="Efficiency"
              value="65% Improvement"
              position="top-6 right-0 lg:-right-20"
              delay="1.6"
            />
            
            <AnalyticsBadge 
              icon={<FaCogs className="w-5 h-5" />}
              title="Automation"
              value="85% Coverage"
              position="bottom-6 right-0 lg:-right-20"
              delay="1.9"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 