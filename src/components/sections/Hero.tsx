'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaArrowRight, FaChartBar, FaChartPie, FaProjectDiagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  // Professional Business SVG Elements
  const BusinessDashboardSVG = () => (
    <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="dashboardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
        <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <clipPath id="roundedRect">
          <rect width="600" height="400" rx="16" />
        </clipPath>
      </defs>
      
      <g clipPath="url(#roundedRect)">
        <rect width="600" height="400" fill="url(#dashboardGradient)" />
        <rect width="600" height="400" fill="white" fillOpacity="0.05" />
        
        <g opacity="0.1">
          {[...Array(10)].map((_, i) => (
            <line 
              key={`vline-${i}`} 
              x1={i * 60} 
              y1="0" 
              x2={i * 60} 
              y2="400" 
              stroke="white" 
              strokeWidth="1" 
              strokeDasharray="1 5"
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <line 
              key={`hline-${i}`} 
              x1="0" 
              y1={i * 60} 
              x2="600" 
              y2={i * 60} 
              stroke="white" 
              strokeWidth="1" 
              strokeDasharray="1 5"
            />
          ))}
        </g>
      </g>
      
      <rect x="20" y="20" width="560" height="50" rx="10" fill="white" fillOpacity="0.07" />
      <circle cx="45" cy="45" r="15" fill="white" fillOpacity="0.1" />
      <rect x="70" y="35" width="100" height="20" rx="5" fill="white" fillOpacity="0.1" />
      <rect x="400" y="35" width="160" height="20" rx="5" fill="white" fillOpacity="0.1" />
      
      <g>
        {[
          { x: 40, height: 80, delay: 0 },
          { x: 100, height: 60, delay: 0.1 },
          { x: 160, height: 100, delay: 0.2 },
          { x: 220, height: 120, delay: 0.3 }
        ].map((bar, i) => (
          <g key={i}>
            <rect 
              x={bar.x} 
              y={210 - bar.height} 
              width="40" 
              height={bar.height} 
              fill="url(#chartGradient1)" 
              opacity="0.9" 
              rx="4"
            >
              <animate 
                attributeName="height" 
                from="0" 
                to={bar.height} 
                dur="0.5s" 
                begin={`${bar.delay}s`} 
                fill="freeze" 
                calcMode="ease-out"
              />
              <animate 
                attributeName="y" 
                from="210" 
                to={210 - bar.height} 
                dur="0.5s" 
                begin={`${bar.delay}s`} 
                fill="freeze" 
                calcMode="ease-out"
              />
            </rect>
          </g>
        ))}
      </g>
      
      <g transform="translate(445, 160)">
        <path d="M0 0 L0 -50 A50 50 0 0 1 43 -25 Z" fill="url(#chartGradient1)">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" fill="freeze" />
        </path>
        <path d="M0 0 L43 -25 A50 50 0 0 1 43 25 Z" fill="url(#chartGradient2)">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.1s" fill="freeze" />
        </path>
        <path d="M0 0 L43 25 A50 50 0 0 1 0 50 Z" fill="url(#chartGradient3)">
          <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.2s" fill="freeze" />
        </path>
      </g>
    </svg>
  );
  
  const BusinessMetricsSVG = () => (
    <svg width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 opacity-10 dark:opacity-20 z-0">
      <defs>
        <linearGradient id="metricGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow-small" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <path 
        d="M0 150 C50 120, 100 180, 150 100 C200 20, 250 80, 300 60 C350 40, 400 120, 450 80 C500 40, 550 100, 600 50" 
        stroke="url(#metricGradient)" 
        strokeWidth="3" 
        fill="none"
        strokeDasharray="1200"
        strokeDashoffset="1200"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          from="1200" 
          to="0" 
          dur="3s" 
          fill="freeze" 
          calcMode="spline"
          keySplines="0.4 0 0.2 1"
        />
      </path>
      
      <path 
        d="M0 150 C50 120, 100 180, 150 100 C200 20, 250 80, 300 60 C350 40, 400 120, 450 80 C500 40, 550 100, 600 50 L600 200 L0 200 Z" 
        fill="currentColor" 
        opacity="0"
      >
        <animate 
          attributeName="opacity" 
          from="0" 
          to="0.1" 
          dur="2s" 
          begin="1s"
          fill="freeze" 
        />
      </path>
      
      {[
        {x: 0, y: 150, delay: 0},
        {x: 50, y: 120, delay: 0.2},
        {x: 100, y: 180, delay: 0.4},
        {x: 150, y: 100, delay: 0.6},
        {x: 200, y: 20, delay: 0.8},
        {x: 250, y: 80, delay: 1.0},
        {x: 300, y: 60, delay: 1.2},
        {x: 350, y: 40, delay: 1.4},
        {x: 400, y: 120, delay: 1.6},
        {x: 450, y: 80, delay: 1.8},
        {x: 500, y: 40, delay: 2.0},
        {x: 550, y: 100, delay: 2.2},
        {x: 600, y: 50, delay: 2.4}
      ].map((point, i) => (
        <g key={i} filter="url(#glow-small)">
          <circle 
            cx={point.x} 
            cy={point.y} 
            r="0" 
            fill="currentColor"
          >
            <animate 
              attributeName="r" 
              from="0" 
              to="4" 
              dur="0.5s" 
              begin={`${point.delay}s`}
              fill="freeze" 
            />
            <animate 
              attributeName="opacity" 
              values="0;1;0.7" 
              dur="3s" 
              begin={`${point.delay + 0.5}s`}
              repeatCount="indefinite" 
            />
          </circle>
          <circle 
            cx={point.x} 
            cy={point.y} 
            r="0" 
            stroke="currentColor" 
            strokeWidth="1" 
            fill="none"
          >
            <animate 
              attributeName="r" 
              from="0" 
              to="8" 
              dur="0.5s" 
              begin={`${point.delay}s`}
              fill="freeze" 
            />
            <animate 
              attributeName="opacity" 
              values="0.5;0.2;0.5" 
              dur="3s" 
              begin={`${point.delay + 0.5}s`}
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      ))}
      
      {[50, 100, 150].map((y, i) => (
        <line 
          key={`grid-${i}`}
          x1="0" 
          y1={y} 
          x2="600" 
          y2={y} 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeDasharray="5 5" 
          opacity="0.1"
        >
          <animate 
            attributeName="opacity" 
            from="0" 
            to="0.1" 
            dur="1s" 
            begin={`${i * 0.3}s`}
            fill="freeze" 
          />
        </line>
      ))}
    </svg>
  );
  
  const DataFlowSVG = () => (
    <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 opacity-5 dark:opacity-10 z-0">
      <defs>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
        </linearGradient>
        <filter id="glow-node" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      <g opacity="0.3">
        {[...Array(8)].map((_, i) => (
          <line 
            key={`grid-v-${i}`}
            x1={100 * (i + 1)} 
            y1="0" 
            x2={100 * (i + 1)} 
            y2="800" 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="5 10"
            opacity="0.2"
          />
        ))}
        {[...Array(8)].map((_, i) => (
          <line 
            key={`grid-h-${i}`}
            x1="0" 
            y1={100 * (i + 1)} 
            x2="800" 
            y2={100 * (i + 1)} 
            stroke="currentColor" 
            strokeWidth="0.5" 
            strokeDasharray="5 10"
            opacity="0.2"
          />
        ))}
      </g>
      
      {[
        {x: 100, y: 100, size: 12, delay: 0},
        {x: 250, y: 150, size: 18, delay: 0.2},
        {x: 400, y: 100, size: 14, delay: 0.4},
        {x: 550, y: 150, size: 16, delay: 0.6},
        {x: 700, y: 100, size: 12, delay: 0.8},
        {x: 100, y: 250, size: 16, delay: 1.0},
        {x: 250, y: 300, size: 12, delay: 1.2},
        {x: 400, y: 250, size: 20, delay: 1.4},
        {x: 550, y: 300, size: 14, delay: 1.6},
        {x: 700, y: 250, size: 16, delay: 1.8},
        {x: 100, y: 400, size: 14, delay: 2.0},
        {x: 250, y: 450, size: 16, delay: 2.2},
        {x: 400, y: 400, size: 12, delay: 2.4},
        {x: 550, y: 450, size: 18, delay: 2.6},
        {x: 700, y: 400, size: 14, delay: 2.8},
        {x: 100, y: 550, size: 16, delay: 3.0},
        {x: 250, y: 600, size: 12, delay: 3.2},
        {x: 400, y: 550, size: 14, delay: 3.4},
        {x: 550, y: 600, size: 16, delay: 3.6},
        {x: 700, y: 550, size: 12, delay: 3.8},
        {x: 100, y: 700, size: 18, delay: 4.0},
        {x: 250, y: 750, size: 14, delay: 4.2},
        {x: 400, y: 700, size: 16, delay: 4.4},
        {x: 550, y: 750, size: 12, delay: 4.6},
        {x: 700, y: 700, size: 14, delay: 4.8}
      ].map((node, i) => (
        <g key={i} filter="url(#glow-node)">
          <circle 
            cx={node.x} 
            cy={node.y} 
            r="0" 
            fill="url(#nodeGradient)"
            opacity="0"
          >
            <animate 
              attributeName="r" 
              from="0" 
              to={node.size} 
              dur="0.8s" 
              begin={`${node.delay}s`}
              fill="freeze" 
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
            />
            <animate 
              attributeName="opacity" 
              from="0" 
              to="1" 
              dur="0.8s" 
              begin={`${node.delay}s`}
              fill="freeze" 
            />
            <animate 
              attributeName="opacity" 
              values="1;0.5;1" 
              dur="3s" 
              begin={`${node.delay + 0.8}s`}
              repeatCount="indefinite" 
            />
          </circle>
          <circle 
            cx={node.x} 
            cy={node.y} 
            r="0" 
            stroke="white" 
            strokeWidth="0.5" 
            fill="none"
            opacity="0"
          >
            <animate 
              attributeName="r" 
              from="0" 
              to={node.size + 5} 
              dur="0.8s" 
              begin={`${node.delay}s`}
              fill="freeze" 
              calcMode="spline"
              keySplines="0.4 0 0.2 1"
            />
            <animate 
              attributeName="opacity" 
              from="0" 
              to="0.3" 
              dur="0.8s" 
              begin={`${node.delay}s`}
              fill="freeze" 
            />
            <animate 
              attributeName="r" 
              values={`${node.size + 5};${node.size + 8};${node.size + 5}`} 
              dur="3s" 
              begin={`${node.delay + 0.8}s`}
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      ))}
      
      {[
        {x1: 100, y1: 100, x2: 250, y2: 150, delay: 0.5},
        {x1: 250, y1: 150, x2: 400, y2: 100, delay: 0.7},
        {x1: 400, y1: 100, x2: 550, y2: 150, delay: 0.9},
        {x1: 550, y1: 150, x2: 700, y2: 100, delay: 1.1},
        {x1: 100, y1: 250, x2: 250, y2: 300, delay: 1.3},
        {x1: 250, y1: 300, x2: 400, y2: 250, delay: 1.5},
        {x1: 400, y1: 250, x2: 550, y2: 300, delay: 1.7},
        {x1: 550, y1: 300, x2: 700, y2: 250, delay: 1.9},
        {x1: 100, y1: 400, x2: 250, y2: 450, delay: 2.1},
        {x1: 250, y1: 450, x2: 400, y2: 400, delay: 2.3},
        {x1: 400, y1: 400, x2: 550, y2: 450, delay: 2.5},
        {x1: 550, y1: 450, x2: 700, y2: 400, delay: 2.7},
        {x1: 100, y1: 550, x2: 250, y2: 600, delay: 2.9},
        {x1: 250, y1: 600, x2: 400, y2: 550, delay: 3.1},
        {x1: 400, y1: 550, x2: 550, y2: 600, delay: 3.3},
        {x1: 550, y1: 600, x2: 700, y2: 550, delay: 3.5},
        {x1: 100, y1: 700, x2: 250, y2: 750, delay: 3.7},
        {x1: 250, y1: 750, x2: 400, y2: 700, delay: 3.9},
        {x1: 400, y1: 700, x2: 550, y2: 750, delay: 4.1},
        {x1: 550, y1: 750, x2: 700, y2: 700, delay: 4.3},
        {x1: 100, y1: 100, x2: 100, y2: 250, delay: 4.5},
        {x1: 250, y1: 150, x2: 250, y2: 300, delay: 4.7},
        {x1: 400, y1: 100, x2: 400, y2: 250, delay: 4.9},
        {x1: 550, y1: 150, x2: 550, y2: 300, delay: 5.1},
        {x1: 700, y1: 100, x2: 700, y2: 250, delay: 5.3},
        {x1: 100, y1: 250, x2: 100, y2: 400, delay: 5.5},
        {x1: 250, y1: 300, x2: 250, y2: 450, delay: 5.7},
        {x1: 400, y1: 250, x2: 400, y2: 400, delay: 5.9},
        {x1: 550, y1: 300, x2: 550, y2: 450, delay: 6.1},
        {x1: 700, y1: 250, x2: 700, y2: 400, delay: 6.3}
      ].map((line, i) => (
        <path
          key={`line-${i}`}
          d={`M${line.x1} ${line.y1} L${line.x2} ${line.y2}`}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="150"
          strokeDashoffset="150"
          opacity="0.3"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="150"
            to="0"
            dur="1s"
            begin={`${line.delay}s`}
            fill="freeze"
            calcMode="spline"
            keySplines="0.4 0 0.2 1"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.5;0.3"
            dur="3s"
            begin={`${line.delay + 1}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}
      
      {[
        {x1: 100, y1: 100, x2: 250, y2: 150, delay: 1.0},
        {x1: 250, y1: 150, x2: 400, y2: 100, delay: 1.5},
        {x1: 400, y1: 100, x2: 550, y2: 150, delay: 2.0},
        {x1: 550, y1: 150, x2: 700, y2: 100, delay: 2.5},
        {x1: 100, y1: 250, x2: 250, y2: 300, delay: 3.0},
        {x1: 250, y1: 300, x2: 400, y2: 250, delay: 3.5},
        {x1: 400, y1: 250, x2: 550, y2: 300, delay: 4.0},
        {x1: 550, y1: 300, x2: 700, y2: 250, delay: 4.5},
        {x1: 100, y1: 400, x2: 250, y2: 450, delay: 5.0},
        {x1: 250, y1: 450, x2: 400, y2: 400, delay: 5.5}
      ].map((particle, i) => (
        <circle
          key={`particle-${i}`}
          r="3"
          fill="#3B82F6"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;0.8;0"
            dur="2s"
            begin={`${particle.delay}s`}
            repeatCount="indefinite"
          />
          <animateMotion
            path={`M${particle.x1},${particle.y1} L${particle.x2},${particle.y2}`}
            dur="2s"
            begin={`${particle.delay}s`}
            repeatCount="indefinite"
          />
        </circle>
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
        staggerChildren: 0.05,
        delayChildren: 0.1,
        duration: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
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
    <section className="relative min-h-screen flex items-center py-16 md:py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background SVG Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <DataFlowSVG />
        <BusinessMetricsSVG />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
                CEO & Business Automation Expert
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-gray-900">
              Transforming Businesses Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Strategic Automation</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-2xl">
              I help businesses leverage cutting-edge automation and strategic innovation to achieve exceptional growth, operational excellence, and market leadership.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <Link 
                href="#contact" 
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 text-sm md:text-base"
              >
                Get in Touch
                <FaArrowRight />
              </Link>
              
              <Link 
                href="#projects" 
                className="px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-medium rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 text-sm md:text-base"
              >
                View Case Studies
              </Link>
            </motion.div>
            
            {/* Key stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              <motion.div 
                variants={statsVariants}
                className="bg-white p-3 md:p-4 rounded-lg shadow-md border border-gray-200 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-blue-600">120%</div>
                <div className="text-xs sm:text-sm text-gray-600">Revenue Growth</div>
              </motion.div>
              
              <motion.div 
                variants={statsVariants}
                className="bg-white p-3 md:p-4 rounded-lg shadow-md border border-gray-200 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-blue-600">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
              </motion.div>
              
              <motion.div 
                variants={statsVariants}
                className="bg-white p-3 md:p-4 rounded-lg shadow-md border border-gray-200 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 text-blue-600">95%+</div>
                <div className="text-xs sm:text-sm text-gray-600">Client Retention</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column - Dashboard SVG and floating elements */}
          <motion.div 
            variants={itemVariants}
            className="order-1 lg:order-2 relative"
          >
            <BusinessDashboardSVG />
          </motion.div>
        </motion.div>
        
        {/* Social proof and links */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-200 dark:border-gray-700 pt-8"
        >
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Connect with me</p>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/chedirachdi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://twitter.com/chedirachdi" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Trusted by leading companies</p>
            <div className="flex items-center gap-8">
              {/* SVG Company Logos */}
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-gray-400 dark:text-gray-600">
                <rect x="10" y="10" width="100" height="20" rx="10" fill="currentColor" />
                <path d="M30 20H90" stroke="white" strokeWidth="2" />
                <circle cx="30" cy="20" r="5" fill="white" />
                <circle cx="60" cy="20" r="5" fill="white" />
                <circle cx="90" cy="20" r="5" fill="white" />
              </svg>
              
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-gray-400 dark:text-gray-600">
                <path d="M20 10H100V30H20V10Z" fill="currentColor" />
                <path d="M30 15H90V25H30V15Z" fill="none" stroke="white" strokeWidth="2" />
                <circle cx="60" cy="20" r="5" fill="white" />
              </svg>
              
              <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto text-gray-400 dark:text-gray-600">
                <path d="M60 5L110 35H10L60 5Z" fill="currentColor" />
                <path d="M60 15L85 30H35L60 15Z" fill="white" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 