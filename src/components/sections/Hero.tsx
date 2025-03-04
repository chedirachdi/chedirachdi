'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaArrowRight, FaChartBar, FaChartPie, FaProjectDiagram } from 'react-icons/fa';

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
          <stop offset="0%" stopColor="#4ADE80" stopOpacity="1" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="1" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="chartGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FACC15" stopOpacity="1" />
          <stop offset="100%" stopColor="#EAB308" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="pieGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="pieGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="pieGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <clipPath id="roundedRect">
          <rect width="600" height="400" rx="16" />
        </clipPath>
      </defs>
      
      {/* Dashboard Background with Glass Effect */}
      <g clipPath="url(#roundedRect)">
        <rect width="600" height="400" fill="url(#dashboardGradient)" />
        <rect width="600" height="400" fill="white" fillOpacity="0.05" />
        
        {/* Background Grid */}
        <g opacity="0.1">
          {[...Array(20)].map((_, i) => (
            <line 
              key={`vline-${i}`} 
              x1={i * 30} 
              y1="0" 
              x2={i * 30} 
              y2="400" 
              stroke="white" 
              strokeWidth="1" 
              strokeDasharray="1 5"
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <line 
              key={`hline-${i}`} 
              x1="0" 
              y1={i * 30} 
              x2="600" 
              y2={i * 30} 
              stroke="white" 
              strokeWidth="1" 
              strokeDasharray="1 5"
            />
          ))}
        </g>
        
        {/* Decorative Elements */}
        <circle cx="50" cy="50" r="100" fill="#3B82F6" opacity="0.05" />
        <circle cx="550" cy="350" r="120" fill="#8B5CF6" opacity="0.05" />
      </g>
      
      {/* Header */}
      <rect x="20" y="20" width="560" height="50" rx="10" fill="white" fillOpacity="0.07" />
      <circle cx="45" cy="45" r="15" fill="white" fillOpacity="0.1">
        <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite" />
      </circle>
      <rect x="70" y="35" width="100" height="20" rx="5" fill="white" fillOpacity="0.1" />
      <rect x="400" y="35" width="160" height="20" rx="5" fill="white" fillOpacity="0.1" />
      
      {/* Main Dashboard Content */}
      <g className="dashboard-content">
        {/* Left Panel - Bar Chart */}
        <rect x="20" y="90" width="270" height="140" rx="10" fill="white" fillOpacity="0.07" />
        <text x="40" y="115" fontSize="14" fontWeight="500" fill="white" opacity="0.9">Revenue Growth</text>
        
        {/* Bar Chart with Animation */}
        <g>
          {[
            { x: 40, height: 80, delay: 0 },
            { x: 80, height: 60, delay: 0.1 },
            { x: 120, height: 100, delay: 0.2 },
            { x: 160, height: 120, delay: 0.3 },
            { x: 200, height: 140, delay: 0.4 },
            { x: 240, height: 160, delay: 0.5 }
          ].map((bar, i) => (
            <g key={i}>
              <rect 
                x={bar.x} 
                y={210 - bar.height} 
                width="30" 
                height={bar.height} 
                fill="url(#chartGradient1)" 
                opacity="0.9" 
                rx="4"
              >
                <animate 
                  attributeName="height" 
                  from="0" 
                  to={bar.height} 
                  dur="1s" 
                  begin={`${bar.delay}s`} 
                  fill="freeze" 
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
                <animate 
                  attributeName="y" 
                  from="210" 
                  to={210 - bar.height} 
                  dur="1s" 
                  begin={`${bar.delay}s`} 
                  fill="freeze" 
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
              </rect>
              <rect 
                x={bar.x} 
                y={210 - bar.height - 2} 
                width="30" 
                height="4" 
                fill="white" 
                opacity="0.3" 
                rx="2"
              >
                <animate 
                  attributeName="y" 
                  from="210" 
                  to={210 - bar.height - 2} 
                  dur="1s" 
                  begin={`${bar.delay}s`} 
                  fill="freeze" 
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                />
              </rect>
            </g>
          ))}
        </g>
        
        {/* Right Panel - Pie Chart */}
        <rect x="310" y="90" width="270" height="140" rx="10" fill="white" fillOpacity="0.07" />
        <text x="330" y="115" fontSize="14" fontWeight="500" fill="white" opacity="0.9">Market Segments</text>
        
        {/* Animated Pie Chart */}
        <g transform="translate(445, 160)">
          <path d="M0 0 L0 -50 A50 50 0 0 1 43 -25 Z" fill="url(#pieGradient1)">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" fill="freeze" />
          </path>
          <path d="M0 0 L43 -25 A50 50 0 0 1 43 25 Z" fill="url(#pieGradient2)">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.2s" fill="freeze" />
          </path>
          <path d="M0 0 L43 25 A50 50 0 0 1 0 50 Z" fill="url(#pieGradient3)">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.4s" fill="freeze" />
          </path>
          <path d="M0 0 L0 50 A50 50 0 0 1 -43 25 Z" fill="#3B82F6">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.6s" fill="freeze" />
          </path>
          <path d="M0 0 L-43 25 A50 50 0 0 1 -43 -25 Z" fill="#8B5CF6">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.8s" fill="freeze" />
          </path>
          <path d="M0 0 L-43 -25 A50 50 0 0 1 0 -50 Z" fill="#EC4899">
            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="1s" fill="freeze" />
          </path>
          <circle cx="0" cy="0" r="20" fill="url(#dashboardGradient)" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
        </g>
        
        {/* Legend with Hover Effect */}
        <g>
          <rect x="510" y="130" width="10" height="10" rx="2" fill="url(#pieGradient1)">
            <animate attributeName="width" values="10;12;10" dur="2s" repeatCount="indefinite" begin="0.5s" />
          </rect>
          <text x="525" y="140" fontSize="12" fill="white" opacity="0.9">Enterprise</text>
          
          <rect x="510" y="150" width="10" height="10" rx="2" fill="url(#pieGradient2)">
            <animate attributeName="width" values="10;12;10" dur="2s" repeatCount="indefinite" begin="1s" />
          </rect>
          <text x="525" y="160" fontSize="12" fill="white" opacity="0.9">SMB</text>
          
          <rect x="510" y="170" width="10" height="10" rx="2" fill="url(#pieGradient3)">
            <animate attributeName="width" values="10;12;10" dur="2s" repeatCount="indefinite" begin="1.5s" />
          </rect>
          <text x="525" y="180" fontSize="12" fill="white" opacity="0.9">Startup</text>
          
          <rect x="510" y="190" width="10" height="10" rx="2" fill="#3B82F6">
            <animate attributeName="width" values="10;12;10" dur="2s" repeatCount="indefinite" begin="2s" />
          </rect>
          <text x="525" y="200" fontSize="12" fill="white" opacity="0.9">Government</text>
        </g>
        
        {/* Bottom Panels - KPIs with Animated Progress */}
        <g>
          <rect x="20" y="250" width="175" height="130" rx="10" fill="white" fillOpacity="0.07" />
          <text x="40" y="275" fontSize="14" fontWeight="500" fill="white" opacity="0.9">Client Retention</text>
          <text x="40" y="315" fontSize="28" fontWeight="bold" fill="white">95%</text>
          <rect x="40" y="330" width="115" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="40" y="330" width="109" height="4" rx="2" fill="url(#chartGradient3)">
            <animate attributeName="width" from="0" to="109" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </rect>
          <circle cx="149" cy="332" r="4" fill="white">
            <animate attributeName="cx" from="40" to="149" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </circle>
        </g>
        
        <g>
          <rect x="215" y="250" width="175" height="130" rx="10" fill="white" fillOpacity="0.07" />
          <text x="235" y="275" fontSize="14" fontWeight="500" fill="white" opacity="0.9">Revenue Growth</text>
          <text x="235" y="315" fontSize="28" fontWeight="bold" fill="white">+120%</text>
          <rect x="235" y="330" width="115" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="235" y="330" width="115" height="4" rx="2" fill="url(#chartGradient1)">
            <animate attributeName="width" from="0" to="115" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </rect>
          <circle cx="350" cy="332" r="4" fill="white">
            <animate attributeName="cx" from="235" to="350" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </circle>
        </g>
        
        <g>
          <rect x="410" y="250" width="170" height="130" rx="10" fill="white" fillOpacity="0.07" />
          <text x="430" y="275" fontSize="14" fontWeight="500" fill="white" opacity="0.9">Experience</text>
          <text x="430" y="315" fontSize="28" fontWeight="bold" fill="white">15+ yrs</text>
          <rect x="430" y="330" width="115" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="430" y="330" width="115" height="4" rx="2" fill="url(#chartGradient2)">
            <animate attributeName="width" from="0" to="115" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </rect>
          <circle cx="545" cy="332" r="4" fill="white">
            <animate attributeName="cx" from="430" to="545" dur="1.5s" fill="freeze" calcMode="spline" keySplines="0.4 0 0.2 1" />
          </circle>
        </g>
      </g>
      
      {/* Animated Elements */}
      <g className="animated-elements">
        {/* Pulsing Border */}
        <rect x="3" y="3" width="594" height="394" rx="14" stroke="white" strokeOpacity="0.2" strokeWidth="1.5" fill="none">
          <animate attributeName="strokeOpacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
        </rect>
        
        {/* Animated Dots */}
        {[...Array(5)].map((_, i) => (
          <circle 
            key={i}
            cx={100 + i * 100} 
            cy="45" 
            r="2" 
            fill="white"
          >
            <animate 
              attributeName="opacity" 
              values="0.3;0.8;0.3" 
              dur="3s" 
              begin={`${i * 0.5}s`}
              repeatCount="indefinite" 
            />
          </circle>
        ))}
        
        {/* Data Flow Lines */}
        <path 
          d="M45 60 L45 90" 
          stroke="white" 
          strokeOpacity="0.3" 
          strokeWidth="1.5" 
          strokeDasharray="3 3"
        >
          <animate attributeName="strokeDashoffset" from="0" to="12" dur="1s" repeatCount="indefinite" />
        </path>
        
        <path 
          d="M445 210 L445 250" 
          stroke="white" 
          strokeOpacity="0.3" 
          strokeWidth="1.5" 
          strokeDasharray="3 3"
        >
          <animate attributeName="strokeDashoffset" from="0" to="12" dur="1s" repeatCount="indefinite" />
        </path>
        
        {/* Glowing Accent */}
        <circle cx="45" cy="45" r="25" stroke="#3B82F6" strokeWidth="2" strokeOpacity="0.5" fill="none" filter="url(#glow)">
          <animate attributeName="r" values="25;30;25" dur="3s" repeatCount="indefinite" />
          <animate attributeName="strokeOpacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Floating Notification */}
      <g transform="translate(500, 70)">
        <rect x="0" y="0" width="80" height="30" rx="15" fill="#10B981" fillOpacity="0.9">
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze" />
        </rect>
        <text x="40" y="20" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="middle">
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.2s" fill="freeze" />
          +28.5% ↑
        </text>
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
      
      {/* Animated Line Chart */}
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
      
      {/* Area Fill */}
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
      
      {/* Data Points with Pulse Animation */}
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
      
      {/* Grid Lines */}
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
      
      {/* Network Grid */}
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
      
      {/* Data Nodes */}
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
      
      {/* Connection Lines with Animation */}
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
      
      {/* Data Flow Particles */}
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
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
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
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
              Transforming Businesses Through <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Strategic Automation</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I help businesses leverage cutting-edge automation and strategic innovation to achieve exceptional growth, operational excellence, and market leadership.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <Link href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-md hover:shadow-lg transition-all flex items-center gap-2 group">
                <span>Let&apos;s Connect</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link href="#experience" className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                View My Experience
              </Link>
            </motion.div>
            
            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              <motion.div 
                variants={statsVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400">120%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Revenue Growth</div>
              </motion.div>
              
              <motion.div 
                variants={statsVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </motion.div>
              
              <motion.div 
                variants={statsVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-2xl md:text-3xl font-bold mb-1 text-blue-600 dark:text-blue-400">95%+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Client Retention</div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right column - Dashboard SVG and floating elements */}
          <div className="order-1 lg:order-2 relative">
            <motion.div
              variants={itemVariants}
              className="relative z-10 rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
            >
              <BusinessDashboardSVG />
            </motion.div>
            
            {/* Floating analytics badges */}
            <AnalyticsBadge 
              icon={<FaChartBar className="text-lg" />}
              title="Conversion Rate"
              value="+65%"
              position="-left-10 top-1/4"
              delay="1s"
            />
            
            <AnalyticsBadge 
              icon={<FaChartPie className="text-lg" />}
              title="Market Share"
              value="+25%"
              position="-right-5 top-2/3"
              delay="1.3s"
            />
            
            <AnalyticsBadge 
              icon={<FaProjectDiagram className="text-lg" />}
              title="Process Efficiency"
              value="+80%"
              position="bottom-10 left-1/4"
              delay="1.6s"
            />
          </div>
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