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
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2c3e50" />
          <stop offset="100%" stopColor="#1a2639" />
        </linearGradient>
        <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2196F3" />
          <stop offset="100%" stopColor="#1565C0" />
        </linearGradient>
        <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#FFA000" />
        </linearGradient>
        <linearGradient id="pieGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E91E63" />
          <stop offset="100%" stopColor="#C2185B" />
        </linearGradient>
        <linearGradient id="pieGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9C27B0" />
          <stop offset="100%" stopColor="#7B1FA2" />
        </linearGradient>
        <linearGradient id="pieGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3F51B5" />
          <stop offset="100%" stopColor="#303F9F" />
        </linearGradient>
      </defs>
      
      {/* Dashboard Background */}
      <rect width="600" height="400" rx="10" fill="url(#dashboardGradient)" />
      
      {/* Header */}
      <rect x="20" y="20" width="560" height="50" rx="5" fill="#ffffff10" />
      <circle cx="45" cy="45" r="15" fill="#ffffff20" />
      <rect x="70" y="35" width="100" height="20" rx="3" fill="#ffffff20" />
      <rect x="400" y="35" width="160" height="20" rx="3" fill="#ffffff20" />
      
      {/* Main Dashboard Content */}
      <g className="dashboard-content">
        {/* Left Panel - Bar Chart */}
        <rect x="20" y="90" width="270" height="140" rx="5" fill="#ffffff10" />
        <text x="40" y="115" fontSize="14" fill="white" opacity="0.8">Revenue Growth</text>
        
        {/* Bar Chart */}
        <rect x="40" y="130" width="30" height="80" fill="url(#chartGradient1)" opacity="0.9" />
        <rect x="80" y="150" width="30" height="60" fill="url(#chartGradient1)" opacity="0.9" />
        <rect x="120" y="110" width="30" height="100" fill="url(#chartGradient1)" opacity="0.9" />
        <rect x="160" y="90" width="30" height="120" fill="url(#chartGradient1)" opacity="0.9" />
        <rect x="200" y="70" width="30" height="140" fill="url(#chartGradient1)" opacity="0.9" />
        <rect x="240" y="50" width="30" height="160" fill="url(#chartGradient1)" opacity="0.9" />
        
        {/* Right Panel - Pie Chart */}
        <rect x="310" y="90" width="270" height="140" rx="5" fill="#ffffff10" />
        <text x="330" y="115" fontSize="14" fill="white" opacity="0.8">Market Segments</text>
        
        {/* Pie Chart */}
        <path d="M445 160 L445 110 A50 50 0 0 1 488 145 Z" fill="url(#pieGradient1)" />
        <path d="M445 160 L488 145 A50 50 0 0 1 445 210 Z" fill="url(#pieGradient2)" />
        <path d="M445 160 L445 210 A50 50 0 0 1 402 145 L445 160 Z" fill="url(#pieGradient3)" />
        <path d="M445 160 L402 145 A50 50 0 0 1 445 110 Z" fill="#3F51B5" />
        
        {/* Legend */}
        <rect x="510" y="130" width="10" height="10" fill="url(#pieGradient1)" />
        <text x="525" y="140" fontSize="12" fill="white" opacity="0.8">Enterprise</text>
        <rect x="510" y="150" width="10" height="10" fill="url(#pieGradient2)" />
        <text x="525" y="160" fontSize="12" fill="white" opacity="0.8">SMB</text>
        <rect x="510" y="170" width="10" height="10" fill="url(#pieGradient3)" />
        <text x="525" y="180" fontSize="12" fill="white" opacity="0.8">Startup</text>
        <rect x="510" y="190" width="10" height="10" fill="#3F51B5" />
        <text x="525" y="200" fontSize="12" fill="white" opacity="0.8">Government</text>
        
        {/* Bottom Panels - KPIs */}
        <rect x="20" y="250" width="175" height="130" rx="5" fill="#ffffff10" />
        <text x="40" y="275" fontSize="14" fill="white" opacity="0.8">Client Retention</text>
        <text x="40" y="315" fontSize="28" fontWeight="bold" fill="white">95%</text>
        <path d="M40 330 L155 330" stroke="#ffffff30" strokeWidth="2" />
        <path d="M40 330 L147 330" stroke="url(#chartGradient3)" strokeWidth="2" />
        
        <rect x="215" y="250" width="175" height="130" rx="5" fill="#ffffff10" />
        <text x="235" y="275" fontSize="14" fill="white" opacity="0.8">Revenue Growth</text>
        <text x="235" y="315" fontSize="28" fontWeight="bold" fill="white">+120%</text>
        <path d="M235 330 L350 330" stroke="#ffffff30" strokeWidth="2" />
        <path d="M235 330 L350 330" stroke="url(#chartGradient1)" strokeWidth="2" />
        
        <rect x="410" y="250" width="170" height="130" rx="5" fill="#ffffff10" />
        <text x="430" y="275" fontSize="14" fill="white" opacity="0.8">Experience</text>
        <text x="430" y="315" fontSize="28" fontWeight="bold" fill="white">15+ yrs</text>
        <path d="M430 330 L545 330" stroke="#ffffff30" strokeWidth="2" />
        <path d="M430 330 L545 330" stroke="url(#chartGradient2)" strokeWidth="2" />
      </g>
      
      {/* Animated Elements */}
      <g className="animated-elements">
        <circle cx="45" cy="45" r="20" stroke="#ffffff30" strokeWidth="1" strokeDasharray="5 5" className="animate-slow-spin" style={{transformOrigin: '45px 45px'}} />
        <rect x="20" y="20" width="560" height="360" rx="10" stroke="#ffffff10" strokeWidth="1" strokeDasharray="10 5" className="animate-pulse" style={{animationDuration: '4s'}} />
      </g>
    </svg>
  );
  
  const BusinessMetricsSVG = () => (
    <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 opacity-10 dark:opacity-20 z-0">
      {/* Line Chart */}
      <path d="M0 150 C50 120, 100 180, 150 100 C200 20, 250 80, 300 60 C350 40, 400 120, 450 80 C500 40, 550 100, 600 50" stroke="currentColor" strokeWidth="3" fill="none" />
      <path d="M0 150 C50 120, 100 180, 150 100 C200 20, 250 80, 300 60 C350 40, 400 120, 450 80 C500 40, 550 100, 600 50 L600 200 L0 200 Z" fill="currentColor" opacity="0.1" />
      
      {/* Data Points */}
      {[0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600].map((x, i) => {
        const y = i % 2 === 0 ? 150 - i * 5 : 150 + i * 5;
        return (
          <circle key={i} cx={x} cy={y} r="3" fill="currentColor" className="animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
        );
      })}
    </svg>
  );
  
  const DataFlowSVG = () => (
    <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 opacity-5 dark:opacity-10 z-0">
      {/* Connection Lines */}
      {[...Array(20)].map((_, i) => {
        const startX = Math.random() * 800;
        const startY = Math.random() * 800;
        const endX = Math.random() * 800;
        const endY = Math.random() * 800;
        return (
          <path 
            key={i}
            d={`M${startX} ${startY} L${endX} ${endY}`} 
            stroke="currentColor" 
            strokeWidth="1" 
            strokeDasharray="5 5"
            className="animate-pulse"
            style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}
          />
        );
      })}
      
      {/* Data Nodes */}
      {[...Array(15)].map((_, i) => {
        const x = 100 + (i % 5) * 150;
        const y = 100 + Math.floor(i / 5) * 150;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx={x} cy={y} r="5" fill="currentColor" className="animate-pulse" style={{animationDelay: `${i * 0.3}s`}} />
          </g>
        );
      })}
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
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex items-center gap-3 border border-gray-200 dark:border-gray-700">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
          {icon}
        </div>
        <div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
          <div className="text-lg font-bold text-gray-900 dark:text-white">{value}</div>
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
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
            <div className="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700">
              <BusinessDashboardSVG />
            </div>
            
            {/* Floating analytics badges */}
            <AnalyticsBadge 
              icon={<FaChartLine className="w-5 h-5" />}
              title="Conversion Rate"
              value="45% Increase"
              position="top-10 left-0 lg:-left-20"
              delay="1.0"
            />
            
            <AnalyticsBadge 
              icon={<FaChartPie className="w-5 h-5" />}
              title="Market Share"
              value="32% Growth"
              position="bottom-10 left-0 lg:-left-20"
              delay="1.3"
            />
            
            <AnalyticsBadge 
              icon={<FaChartBar className="w-5 h-5" />}
              title="Efficiency"
              value="65% Improvement"
              position="top-10 right-0 lg:-right-20"
              delay="1.6"
            />
            
            <AnalyticsBadge 
              icon={<FaCogs className="w-5 h-5" />}
              title="Automation"
              value="85% Coverage"
              position="bottom-10 right-0 lg:-right-20"
              delay="1.9"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 