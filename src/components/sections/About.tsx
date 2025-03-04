'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaUserTie, FaChartLine, FaRocket, FaCogs, FaGlobeAmericas, FaCode, FaRobot, FaServer } from 'react-icons/fa';

// Tab Button Component for better encapsulation
function TabButton({ 
  id, 
  label, 
  icon, 
  isActive, 
  onClick 
}: { 
  id: string; 
  label: string; 
  icon: React.ReactNode; 
  isActive: boolean; 
  onClick: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 flex-1 relative z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 touch-manipulation ${
        isActive
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
      }`}
      aria-selected={isActive}
      role="tab"
      id={`tab-${id}`}
      aria-controls={`panel-${id}`}
      tabIndex={isActive ? 0 : -1}
    >
      <span className="text-base">{icon}</span>
      <span className="whitespace-nowrap text-xs sm:text-sm">{label}</span>
    </button>
  );
}

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

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  // Tab content
  const tabs = [
    {
      id: 'who',
      label: 'Who I Am',
      icon: <FaUserTie />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I&apos;m an <span className="font-semibold text-blue-600 dark:text-blue-400">Electromechanical Engineer</span> turned <span className="font-semibold text-indigo-600 dark:text-indigo-400">Software Developer</span> with a passion for automation and business transformation. With over 15 years of experience spanning hardware and software domains, I specialize in creating intelligent systems that bridge the physical and digital worlds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaCode />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Technical Expertise</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                My background in electromechanical engineering combined with software development gives me a unique perspective on creating integrated solutions that optimize both hardware and software components.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <FaRobot />
                </div>
                <h3 className="font-bold text-gray-800 dark:text-gray-200">AI & Automation</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                I leverage AI and automation technologies to create intelligent systems that streamline operations, enhance productivity, and drive business growth through data-driven insights.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <FaRocket />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-200">My Approach</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I approach each project with a holistic mindset, focusing on the intersection of technology, business processes, and user experience. By understanding the complete ecosystem, I develop solutions that not only solve immediate problems but also create long-term value.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium">Systems Thinker</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">Continuous Learner</span>
              <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">Innovation Driven</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'services',
      label: 'Services',
      icon: <FaChartLine />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
            I offer specialized services that combine my expertise in engineering, software development, and business automation to help organizations optimize their operations and drive growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<FaServer />}
              title="Full-Stack Development"
              description="Custom web and mobile applications built with modern technologies like React, Next.js, and Node.js to solve specific business challenges."
              color="from-blue-500 to-indigo-600"
            />
            <ServiceCard 
              icon={<FaRobot />}
              title="AI & Automation Solutions"
              description="Intelligent systems that leverage AI, machine learning, and automation to streamline workflows and enhance decision-making processes."
              color="from-indigo-500 to-purple-600"
            />
            <ServiceCard 
              icon={<FaCogs />}
              title="Systems Integration"
              description="Seamless integration of hardware and software systems to create unified solutions that optimize operational efficiency."
              color="from-purple-500 to-pink-600"
            />
            <ServiceCard 
              icon={<FaGlobeAmericas />}
              title="Digital Transformation"
              description="Strategic guidance and implementation support for organizations looking to embrace digital technologies and modernize their operations."
              color="from-pink-500 to-rose-600"
            />
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <FaRocket className="text-blue-600 dark:text-blue-400" />
              <span>How I Deliver Value</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 rounded-lg">
                <div className="font-bold text-blue-700 dark:text-blue-300 mb-2">Discovery</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">In-depth analysis of your current systems, challenges, and objectives to identify opportunities.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-900/30 rounded-lg">
                <div className="font-bold text-indigo-700 dark:text-indigo-300 mb-2">Solution Design</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Custom-tailored solutions designed to address your specific needs and integrate with existing systems.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/30 rounded-lg">
                <div className="font-bold text-purple-700 dark:text-purple-300 mb-2">Implementation</div>
                <p className="text-sm text-gray-700 dark:text-gray-300">Efficient development and deployment with continuous feedback and iterative improvements.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'journey',
      label: 'My Journey',
      icon: <FaChartLine />,
      content: (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800/30 mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              My professional journey spans from electromechanical engineering to software development and business automation, giving me a unique perspective on creating integrated solutions.
            </p>
          </div>
          
          <TimelineItem 
            year="2020 - Present"
            title="Independent Software Developer & Automation Specialist"
            description="Developing custom software solutions and automation systems for businesses across various industries, with a focus on integrating AI and machine learning technologies."
            highlights={["Created custom automation solutions for e-commerce businesses", "Developed AI-powered analytics dashboards", "Implemented integrated hardware-software systems"]}
          />
          <TimelineItem 
            year="2015 - 2020"
            title="Systems Integration Engineer"
            description="Led the design and implementation of integrated systems combining hardware and software components for industrial automation applications."
            highlights={["Reduced operational costs by 35% through automation", "Integrated IoT sensors with cloud-based monitoring systems", "Optimized production processes using data analytics"]}
          />
          <TimelineItem 
            year="2010 - 2015"
            title="Electromechanical Engineer"
            description="Designed and developed electromechanical systems for industrial applications, focusing on efficiency and reliability."
            highlights={["Designed control systems for manufacturing equipment", "Implemented preventive maintenance protocols", "Optimized energy consumption in industrial systems"]}
          />
          <TimelineItem 
            year="2004 - 2010"
            title="Technical Specialist"
            description="Provided technical support and maintenance for complex electromechanical systems, developing a deep understanding of system integration challenges."
            highlights={["Troubleshot and resolved complex system failures", "Implemented system upgrades and modifications", "Trained technical teams on system operations"]}
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
            <motion.div variants={itemVariants} className="inline-block px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-4">
              Professional Profile
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Me</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg">
              Bridging the gap between engineering and software development to create intelligent automation solutions.
            </motion.p>
          </div>
          
          {/* Content area with tabs and SVG */}
          <motion.div variants={itemVariants} className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left side: SVG illustration */}
            <div className="w-full lg:w-2/5 flex justify-center">
              <EnhancedBusinessSVG />
            </div>
            
            {/* Right side: Tabs and content */}
            <div className="w-full lg:w-3/5">
              {/* Tab navigation */}
              <div className="grid grid-cols-3 sm:flex mb-8 bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-md relative z-10 overflow-hidden">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.id}
                    id={tab.id}
                    label={tab.label}
                    icon={tab.icon}
                    isActive={activeTab === tab.id}
                    onClick={handleTabChange}
                  />
                ))}
              </div>
              
              {/* Tab content */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg">
                {tabs.map((tab) => (
                  <div 
                    key={tab.id} 
                    className={activeTab === tab.id ? 'block' : 'hidden'}
                    role="tabpanel"
                    id={`panel-${tab.id}`}
                    aria-labelledby={`tab-${tab.id}`}
                  >
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
    <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, highlights }: { year: string, title: string, description: string, highlights?: string[] }) {
  return (
    <div className="relative pl-8 border-l-2 border-blue-500 dark:border-blue-400">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
      <div className="mb-1 text-sm font-medium text-blue-600 dark:text-blue-400">{year}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-3">{description}</p>
      
      {highlights && highlights.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
          <h4 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Achievements:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400 mt-1.5 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Enhanced Business SVG Component
function EnhancedBusinessSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-md">
      {/* Gradients */}
      <defs>
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Background elements */}
      <circle cx="250" cy="250" r="200" fill="#EFF6FF" className="dark:opacity-20" />
      <circle cx="250" cy="250" r="150" fill="#DBEAFE" className="dark:opacity-10" />
      
      {/* Decorative elements */}
      <circle cx="250" cy="250" r="180" stroke="#93C5FD" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <circle cx="250" cy="250" r="120" stroke="#93C5FD" strokeWidth="1" strokeDasharray="3 3" className="dark:opacity-30" />
      
      {/* Growth chart base */}
      <rect x="100" y="350" width="300" height="3" rx="1.5" fill="#CBD5E1" className="dark:opacity-50" />
      <rect x="100" y="150" width="3" height="200" rx="1.5" fill="#CBD5E1" className="dark:opacity-50" />
      
      {/* Grid lines */}
      <line x1="100" y1="200" x2="400" y2="200" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <line x1="100" y1="250" x2="400" y2="250" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <line x1="100" y1="300" x2="400" y2="300" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      
      <line x1="150" y1="150" x2="150" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <line x1="200" y1="150" x2="200" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <line x1="250" y1="150" x2="250" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <line x1="300" y1="150" x2="300" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      <line x1="350" y1="150" x2="350" y2="350" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="5 5" className="dark:opacity-30" />
      
      {/* Area under the curve */}
      <path 
        d="M100,350 L100,320 C150,300 180,310 200,280 C220,250 250,230 300,200 C350,170 380,150 400,130 L400,350 Z" 
        fill="url(#areaGradient)"
      />
      
      {/* Growth line */}
      <path 
        d="M100,320 C150,300 180,310 200,280 C220,250 250,230 300,200 C350,170 380,150 400,130" 
        stroke="url(#blueGradient)" 
        strokeWidth="4" 
        fill="none" 
        strokeLinecap="round"
        filter="url(#glow)"
      />
      
      {/* Data points */}
      <circle cx="100" cy="320" r="8" fill="url(#blueGradient)" />
      <circle cx="150" cy="300" r="8" fill="url(#blueGradient)" />
      <circle cx="200" cy="280" r="8" fill="url(#blueGradient)" />
      <circle cx="250" cy="230" r="8" fill="url(#blueGradient)" />
      <circle cx="300" cy="200" r="8" fill="url(#blueGradient)" />
      <circle cx="350" cy="170" r="8" fill="url(#blueGradient)" />
      <circle cx="400" cy="130" r="8" fill="url(#blueGradient)" />
      
      {/* Pulse animations on key points */}
      <circle cx="250" cy="230" r="15" fill="url(#blueGradient)" opacity="0.3">
        <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="400" cy="130" r="15" fill="url(#blueGradient)" opacity="0.3">
        <animate attributeName="r" values="15;25;15" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite" />
      </circle>
      
      {/* Labels */}
      <text x="100" y="370" fill="#64748B" fontSize="12" textAnchor="middle" className="dark:fill-gray-400">2018</text>
      <text x="200" y="370" fill="#64748B" fontSize="12" textAnchor="middle" className="dark:fill-gray-400">2020</text>
      <text x="300" y="370" fill="#64748B" fontSize="12" textAnchor="middle" className="dark:fill-gray-400">2022</text>
      <text x="400" y="370" fill="#64748B" fontSize="12" textAnchor="middle" className="dark:fill-gray-400">2024</text>
      
      {/* Gear icons representing automation */}
      <g transform="translate(180, 260)" className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '20s' }}>
        <path d="M10,0 L-10,0 L-5,-8.66 L5,-8.66 Z M5,8.66 L-5,8.66 L-10,0 L10,0 Z" fill="#93C5FD" />
      </g>
      
      <g transform="translate(320, 190)" className="animate-spin" style={{ transformOrigin: 'center', animationDuration: '15s', animationDirection: 'reverse' }}>
        <path d="M12,0 L-12,0 L-6,-10.39 L6,-10.39 Z M6,10.39 L-6,10.39 L-12,0 L12,0 Z" fill="#93C5FD" />
      </g>
    </svg>
  );
} 