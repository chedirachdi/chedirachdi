'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaChartLine, FaUsers, FaRocket, FaGlobeAmericas, FaLightbulb, FaCogs, FaTrophy, FaHandshake, FaChess } from 'react-icons/fa';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('leadership');
  const containerRef = useRef(null);
  
  // Define the leadership achievements and business impact sections
  const leadershipContent = {
    title: "Executive Leadership",
    description: "As a seasoned CEO and visionary business leader, I've consistently driven transformative growth and innovation across multiple ventures, specializing in marketing automation, strategic business development, and organizational excellence.",
    achievements: [
      {
        title: "GenLogic",
        role: "Owner / Marketing Automation Guru",
        period: "Dec 2023 - Present",
        description: "Leading an international consultancy specializing in marketing automation and business strategy for the cultural and creative industries.",
        highlights: [
          "Implemented cutting-edge marketing automation systems that increased client conversion rates by 45%",
          "Developed proprietary lead nurturing processes that reduced sales cycles by 30%",
          "Created data-driven marketing strategies resulting in 65% ROI improvement for clients",
          "Established strategic partnerships with major technology providers in the automation space",
          "Pioneered AI-driven customer journey mapping that increased client retention by 40%"
        ],
        icon: <FaRocket className="text-2xl" />,
        color: "#4F46E5"
      },
      {
        title: "NAZAX",
        role: "CEO / Managing Partner",
        period: "Jan 2022 - Present",
        description: "Spearheading strategic business development and client relationship management for innovative technology solutions.",
        highlights: [
          "Led company growth of 120% year-over-year through strategic business development initiatives",
          "Pioneered automated client relationship management systems that improved retention by 35%",
          "Negotiated and secured partnerships with Fortune 500 companies",
          "Developed and implemented a comprehensive business intelligence system for data-driven decision making",
          "Orchestrated international expansion into 3 new markets, increasing revenue by 85%",
          "Mentored executive team members, resulting in 25% improvement in leadership effectiveness metrics"
        ],
        icon: <FaChartLine className="text-2xl" />,
        color: "#0891B2"
      },
      {
        title: "WEBBEC",
        role: "Chief Executive Officer",
        period: "Apr 2023 - Jul 2024",
        description: "Led an innovative recruitment firm with unique sourcing strategies and comprehensive selection methods.",
        highlights: [
          "Transformed traditional recruitment processes with AI-powered automation, reducing time-to-hire by 40%",
          "Implemented data analytics systems that improved candidate quality metrics by 55%",
          "Developed strategic vision that positioned the company as a leader in tech recruitment",
          "Created and executed comprehensive growth strategies resulting in market expansion to 3 new countries",
          "Established a culture of innovation and excellence, reducing employee turnover by 30%",
          "Secured $2.5M in funding through strategic investor relationships and compelling business case development"
        ],
        icon: <FaUsers className="text-2xl" />,
        color: "#0D9488"
      }
    ],
    leadershipPhilosophy: {
      title: "My Leadership Philosophy",
      principles: [
        {
          title: "Vision-Driven Transformation",
          description: "Creating compelling visions of the future that inspire teams and drive organizational change.",
          icon: <FaLightbulb className="text-xl" />
        },
        {
          title: "Strategic Empowerment",
          description: "Empowering teams through strategic delegation and creating autonomous decision-making frameworks.",
          icon: <FaUsers className="text-xl" />
        },
        {
          title: "Data-Informed Leadership",
          description: "Leveraging analytics and business intelligence to make informed strategic decisions.",
          icon: <FaChartLine className="text-xl" />
        },
        {
          title: "Adaptive Excellence",
          description: "Fostering a culture of continuous improvement and adaptability to changing market conditions.",
          icon: <FaChess className="text-xl" />
        }
      ]
    }
  };
  
  const businessImpactContent = {
    title: "Business Transformation",
    description: "I help businesses leverage automation and strategic innovation to achieve exceptional growth and operational excellence.",
    capabilities: [
      {
        title: "Marketing Automation",
        description: "Implementing sophisticated marketing automation systems that nurture leads, personalize customer journeys, and drive conversion rates.",
        icon: <FaCogs className="text-3xl" />,
        color: "#4F46E5"
      },
      {
        title: "Strategic Growth",
        description: "Developing comprehensive growth strategies that identify new market opportunities, optimize business models, and scale operations efficiently.",
        icon: <FaChartLine className="text-3xl" />,
        color: "#0891B2"
      },
      {
        title: "Business Intelligence",
        description: "Creating data-driven decision frameworks that leverage analytics to provide actionable insights and competitive advantages.",
        icon: <FaLightbulb className="text-3xl" />,
        color: "#0D9488"
      },
      {
        title: "Global Expansion",
        description: "Guiding businesses through international market entry with localized strategies and cross-cultural business development approaches.",
        icon: <FaGlobeAmericas className="text-3xl" />,
        color: "#9333EA"
      }
    ],
    results: [
      { metric: "Average Revenue Growth", value: "120%", suffix: "" },
      { metric: "Marketing ROI Improvement", value: "65%", suffix: "" },
      { metric: "Operational Efficiency", value: "40%", suffix: "+" },
      { metric: "Client Retention Rate", value: "95%", suffix: "+" }
    ]
  };
  
  const educationContent = {
    title: "Education & Knowledge",
    description: "My academic foundation and continuous learning that powers my business leadership and innovation strategies.",
    education: [
      {
        title: "Master of Business Administration (MBA)",
        institution: "University of Tunis",
        period: "2010 - 2012",
        focus: "Business Strategy and Marketing",
        description: "Specialized in international business development with a thesis on digital marketing automation's impact on business growth.",
        icon: <FaGraduationCap className="text-2xl" />,
        color: "#9333EA"
      },
      {
        title: "Bachelor of Science in Business Administration",
        institution: "University of Tunis",
        period: "2006 - 2010",
        focus: "Marketing and Sales Management",
        description: "Focused on business fundamentals with specialization in marketing strategies and customer relationship management.",
        icon: <FaGraduationCap className="text-2xl" />,
        color: "#DB2777"
      },
      {
        title: "Professional Certification in Digital Marketing",
        institution: "Google Digital Academy",
        period: "2018",
        focus: "Digital Marketing and Automation",
        description: "Comprehensive certification covering advanced digital marketing techniques, automation workflows, and analytics.",
        icon: <FaGraduationCap className="text-2xl" />,
        color: "#C026D3"
      }
    ]
  };
  
  // SVG patterns and decorative elements
  const CirclePattern = () => (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-10">
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
      <circle cx="60" cy="60" r="20" stroke="currentColor" strokeWidth="2" />
      <circle cx="60" cy="60" r="60" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
  
  const HexagonPattern = () => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-10">
      <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" stroke="currentColor" strokeWidth="2" />
      <path d="M50 20L79.3 35V65L50 80L20.7 65V35L50 20Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
  
  const WavePattern = () => (
    <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-10">
      <path d="M0 20C20 5 30 35 50 20C70 5 80 35 100 20C120 5 130 35 150 20C170 5 180 35 200 20" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
  
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'leadership':
        return (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{leadershipContent.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{leadershipContent.description}</p>
            </div>
            
            {/* Executive Leadership Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 0L120 80H200L135 130L155 200L100 155L45 200L65 130L0 80H80L100 0Z" fill="currentColor" />
                </svg>
              </div>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg">
                  <FaTrophy className="text-2xl text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Executive Leadership Impact</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">120%</div>
                  <div className="text-gray-600 dark:text-gray-400">Average Business Growth</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                  <div className="text-gray-600 dark:text-gray-400">Years Leadership Experience</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Teams Led & Mentored</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">95%</div>
                  <div className="text-gray-600 dark:text-gray-400">Team Retention Rate</div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                My executive leadership approach combines strategic vision with operational excellence, creating transformative business outcomes through empowered teams and data-driven decision making. I specialize in guiding organizations through periods of significant growth and digital transformation.
              </p>
            </motion.div>
            
            {/* Leadership Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
            >
              <h4 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">{leadershipContent.leadershipPhilosophy.title}</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leadershipContent.leadershipPhilosophy.principles.map((principle, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 flex-shrink-0">
                      {principle.icon}
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-1">{principle.title}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {leadershipContent.achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative overflow-hidden group"
                >
                  <div className="absolute top-5 right-5 text-primary-200 dark:text-primary-800 transform rotate-12">
                    <CirclePattern />
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all h-full flex flex-col relative z-10 border border-gray-100 dark:border-gray-700">
                    <div className="mb-6 flex items-center justify-between">
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
                          boxShadow: `0 10px 25px -5px ${item.color}33`
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        {item.period}
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-1 text-gray-800 dark:text-gray-200">{item.title}</h4>
                    <p className="text-lg font-medium mb-4" style={{ color: item.color }}>{item.role}</p>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
                    
                    <div className="mt-auto">
                      <h5 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                            <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      case 'impact':
        return (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{businessImpactContent.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{businessImpactContent.description}</p>
            </div>
            
            {/* Results metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {businessImpactContent.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center relative overflow-hidden"
                >
                  <div className="absolute -bottom-4 -right-4 text-primary-200 dark:text-primary-800">
                    <HexagonPattern />
                  </div>
                  <h4 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                    {result.value}{result.suffix}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{result.metric}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Capabilities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {businessImpactContent.capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                >
                  <div className="absolute -bottom-4 -right-4 text-primary-200 dark:text-primary-800">
                    <WavePattern />
                  </div>
                  
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${capability.color}, ${capability.color}CC)`,
                      boxShadow: `0 10px 25px -5px ${capability.color}33`
                    }}
                  >
                    {capability.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">{capability.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      case 'education':
        return (
          <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{educationContent.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{educationContent.description}</p>
            </div>
            
            <div className="space-y-12">
              {educationContent.education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden"
                >
                  <div className="absolute top-5 right-5 text-primary-200 dark:text-primary-800 transform rotate-12">
                    <CirclePattern />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    <div>
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${item.color}, ${item.color}CC)`,
                          boxShadow: `0 10px 25px -5px ${item.color}33`
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">{item.title}</h4>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-4">
                          {item.period}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-lg font-medium mb-1" style={{ color: item.color }}>{item.institution}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Focus: {item.focus}</div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4" ref={containerRef}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Experience & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Impact</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            A showcase of my professional journey, leadership achievements, and the transformative impact I've had on businesses.
          </motion.p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveTab('leadership')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === 'leadership'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <FaBriefcase />
            <span>Executive Leadership</span>
          </button>
          
          <button
            onClick={() => setActiveTab('impact')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === 'impact'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <FaChartLine />
            <span>Business Impact</span>
          </button>
          
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <FaGraduationCap />
            <span>Education</span>
          </button>
        </div>
        
        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderActiveContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}