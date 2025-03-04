'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUserTie, FaChartLine, FaHandshake, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function About() {
  const [activeTab, setActiveTab] = useState('who');
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

  // Tab content
  const tabs = [
    {
      id: 'who',
      label: 'Who I Am',
      icon: <FaUserTie />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400">
            I'm a results-driven entrepreneur and marketing automation specialist with over 10 years of experience in business development and digital transformation. As the CEO of GenLogic, I help businesses streamline their operations, enhance customer experiences, and drive sustainable growth through innovative automation solutions.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            My approach combines strategic vision with technical expertise, allowing me to identify opportunities for improvement and implement effective solutions that deliver measurable results. I'm passionate about helping businesses leverage technology to achieve their full potential.
          </p>
        </div>
      )
    },
    {
      id: 'services',
      label: 'Services',
      icon: <FaChartLine />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard 
            icon={<FaChartLine />}
            title="Business Development"
            description="Strategic planning and implementation of growth initiatives to expand market reach and increase revenue."
            color="from-blue-500 to-indigo-600"
          />
          <ServiceCard 
            icon={<FaHandshake />}
            title="Marketing Automation"
            description="Design and implementation of automated marketing systems to enhance lead generation and conversion rates."
            color="from-indigo-500 to-purple-600"
          />
          <ServiceCard 
            icon={<FaUsers />}
            title="Leadership & Team Building"
            description="Development of high-performing teams through effective leadership strategies and organizational culture."
            color="from-purple-500 to-pink-600"
          />
          <ServiceCard 
            icon={<FaLightbulb />}
            title="Strategic Consulting"
            description="Expert guidance on business strategy, market positioning, and competitive advantage."
            color="from-pink-500 to-rose-600"
          />
        </div>
      )
    },
    {
      id: 'journey',
      label: 'My Journey',
      icon: <FaChartLine />,
      content: (
        <div className="space-y-8">
          <TimelineItem 
            year="2020 - Present"
            title="CEO & Founder, GenLogic"
            description="Leading a team of experts in providing business automation solutions to clients across various industries."
          />
          <TimelineItem 
            year="2018 - 2020"
            title="Director of Business Development"
            description="Spearheaded growth initiatives resulting in 120% revenue increase and expansion into new markets."
          />
          <TimelineItem 
            year="2015 - 2018"
            title="Marketing Automation Specialist"
            description="Implemented automated marketing systems that increased lead generation by 85% and improved conversion rates."
          />
          <TimelineItem 
            year="2013 - 2015"
            title="Business Consultant"
            description="Provided strategic guidance to startups and established businesses on growth strategies and operational efficiency."
          />
        </div>
      )
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg">
              Discover my professional journey, services, and the expertise I bring to help businesses thrive.
            </motion.p>
          </div>
          
          {/* Content area with tabs and SVG */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side: SVG illustration */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <BusinessGrowthSVG />
            </div>
            
            {/* Right side: Tabs and content */}
            <div className="w-full lg:w-3/5">
              {/* Tab navigation */}
              <div className="flex mb-8 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all flex-1 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Tab content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                {tabs.map((tab) => (
                  <div key={tab.id} className={activeTab === tab.id ? 'block' : 'hidden'}>
                    {tab.content}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Service Card Component
function ServiceCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description }: { year: string, title: string, description: string }) {
  return (
    <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
      <div className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">{year}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}

// Business Growth SVG Component
function BusinessGrowthSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-md">
      {/* Background elements */}
      <circle cx="250" cy="250" r="200" fill="#EFF6FF" />
      
      {/* Growth chart base */}
      <rect x="100" y="350" width="300" height="2" fill="#CBD5E1" />
      <rect x="100" y="150" width="2" height="200" fill="#CBD5E1" />
      
      {/* Grid lines */}
      <line x1="100" y1="200" x2="400" y2="200" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="100" y1="250" x2="400" y2="250" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="100" y1="300" x2="400" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      
      <line x1="150" y1="150" x2="150" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="200" y1="150" x2="200" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="250" y1="150" x2="250" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="300" y1="150" x2="300" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      <line x1="350" y1="150" x2="350" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" />
      
      {/* Growth line */}
      <path 
        d="M100,320 C150,300 180,310 200,280 C220,250 250,230 300,200 C350,170 380,150 400,130" 
        stroke="url(#blueGradient)" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round"
      />
      
      {/* Area under the curve */}
      <path 
        d="M100,350 L100,320 C150,300 180,310 200,280 C220,250 250,230 300,200 C350,170 380,150 400,130 L400,350 Z" 
        fill="url(#areaGradient)" 
        opacity="0.2"
      />
      
      {/* Data points */}
      <circle cx="100" cy="320" r="6" fill="#3B82F6" />
      <circle cx="150" cy="300" r="6" fill="#3B82F6" />
      <circle cx="200" cy="280" r="6" fill="#3B82F6" />
      <circle cx="250" cy="230" r="6" fill="#3B82F6" />
      <circle cx="300" cy="200" r="6" fill="#3B82F6" />
      <circle cx="350" cy="170" r="6" fill="#3B82F6" />
      <circle cx="400" cy="130" r="6" fill="#3B82F6" />
      
      {/* Business elements */}
      <circle cx="150" cy="120" r="30" fill="white" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M140,120 L160,120 M150,110 L150,130" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
      
      <circle cx="250" cy="80" r="30" fill="white" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M240,80 L260,80 M250,70 L250,90" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
      
      <circle cx="350" cy="100" r="30" fill="white" stroke="#CBD5E1" strokeWidth="2" />
      <path d="M340,100 L360,100 M350,90 L350,110" stroke="#EC4899" strokeWidth="2" strokeLinecap="round" />
      
      {/* Connection lines */}
      <line x1="150" y1="150" x2="150" y2="300" stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="250" y1="110" x2="250" y2="230" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="350" y1="130" x2="350" y2="170" stroke="#EC4899" strokeWidth="1" strokeDasharray="3 3" />
      
      {/* Animated elements */}
      <circle cx="250" cy="250" r="5" fill="#3B82F6" opacity="0.7">
        <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
} 