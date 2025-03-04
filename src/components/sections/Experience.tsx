'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaChartLine, FaUsers, FaRocket, FaGlobeAmericas, FaLightbulb, FaCogs, FaTrophy, FaHandshake, FaChess, FaChartBar, FaBook, FaCertificate, FaLaptopCode, FaBrain, FaRobot, FaWater } from 'react-icons/fa';

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
    tagline: "Driving measurable business outcomes through strategic transformation and innovative automation solutions.",
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
      { 
        metric: "Average Revenue Growth", 
        value: "120", 
        suffix: "%",
        description: "Consistent revenue growth across client businesses through strategic automation and optimization",
        icon: <FaChartLine className="text-xl" />,
        color: "#4F46E5"
      },
      { 
        metric: "Marketing ROI Improvement", 
        value: "65", 
        suffix: "%",
        description: "Enhanced marketing return on investment through data-driven campaign optimization",
        icon: <FaChartBar className="text-xl" />,
        color: "#0891B2"
      },
      { 
        metric: "Operational Efficiency", 
        value: "40", 
        suffix: "+%",
        description: "Increased operational efficiency through streamlined processes and automation",
        icon: <FaCogs className="text-xl" />,
        color: "#0D9488"
      },
      { 
        metric: "Client Retention Rate", 
        value: "95", 
        suffix: "+%",
        description: "Exceptional client satisfaction and retention through consistent value delivery",
        icon: <FaHandshake className="text-xl" />,
        color: "#9333EA"
      }
    ],
    caseStudies: [
      {
        title: "E-Commerce Transformation",
        description: "Implemented comprehensive automation strategy for a mid-sized e-commerce business, resulting in 135% revenue growth and 45% reduction in operational costs.",
        metrics: ["135% Revenue Growth", "45% Cost Reduction", "3x Customer Lifetime Value"],
        color: "#4F46E5"
      },
      {
        title: "SaaS Growth Acceleration",
        description: "Developed and executed strategic growth plan for SaaS platform, achieving 200% user acquisition improvement and 70% increase in customer retention.",
        metrics: ["200% User Growth", "70% Retention Increase", "55% CAC Reduction"],
        color: "#0891B2"
      }
    ]
  };
  
  const educationContent = {
    title: "Education & Knowledge",
    description: "My academic foundation and continuous learning that powers my business leadership and innovation strategies.",
    quote: "Education is not the learning of facts, but the training of the mind to think.",
    quoteAuthor: "Albert Einstein",
    education: [
      {
        title: "Engineer's Degree, Electromechanical Engineering",
        institution: "Electromechanical school systems Tunis",
        period: "1999 - 2004",
        focus: "Electro-Mechanical Engineers",
        description: "As an electro-mechanical engineer, I worked with both electrical and mechanical aspects of engineering projects. This involved developing and manufacturing various products including appliances, medical instrumentation, industrial machines and robotics.",
        icon: <FaGraduationCap className="text-2xl" />,
        color: "#9333EA",
        achievements: [
          "Design and development of electromechanical systems",
          "Production, maintenance and repair of industrial equipment",
          "Economics evaluation, statistical analysis and quality control"
        ]
      },
      {
        title: "Python for Everybody",
        institution: "University of Michigan",
        period: "Nov 2021 - May 2022",
        focus: "Python, Information Technology",
        description: "Comprehensive course covering the basics of programming computers using Python, from simple instructions to more complex programming concepts without requiring advanced mathematics.",
        icon: <FaLaptopCode className="text-2xl" />,
        color: "#DB2777",
        achievements: [
          "Mastered Python fundamentals and programming basics",
          "Completed all chapters of 'Python for Everybody' textbook",
          "Prepared foundation for advanced programming courses"
        ]
      },
      {
        title: "Email Marketing Certification",
        institution: "HubSpot Academy",
        period: "2017",
        focus: "Email Marketing",
        description: "Specialized certification in email marketing strategies, automation, and best practices through HubSpot's comprehensive training program for marketers and sales representatives.",
        icon: <FaCertificate className="text-2xl" />,
        color: "#C026D3",
        achievements: [
          "Mastered inbound marketing methodologies",
          "Learned email marketing automation techniques",
          "Applied HubSpot tools for marketing campaigns"
        ]
      }
    ],
    continuousLearning: [
      {
        title: "AI & Prompt Engineering with Claude",
        provider: "Cursor AI",
        year: "2023",
        description: "Mastering AI-assisted coding and prompt engineering techniques to enhance development workflows and automate complex tasks.",
        icon: <FaRobot className="text-xl" />,
        color: "#0891B2"
      },
      {
        title: "Fullstack Development",
        provider: "Self-Directed Learning",
        year: "2020-Present",
        description: "Continuous development of fullstack skills using React, Next.js, Node.js, and various backend technologies to build scalable business applications.",
        icon: <FaLaptopCode className="text-xl" />,
        color: "#4F46E5"
      },
      {
        title: "Windsurfing Instructor Certification",
        provider: "International Windsurfing Association",
        year: "2019",
        description: "Professional certification in windsurfing instruction, combining passion for water sports with teaching and leadership skills.",
        icon: <FaWater className="text-xl" />,
        color: "#0D9488"
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
            {/* Header with animated background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 dark:from-blue-900/30 dark:to-indigo-900/30 z-0"></div>
              <div className="absolute inset-0 z-0 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-5 dark:opacity-10">
                  {/* Connection Lines */}
                  {[...Array(15)].map((_, i) => (
                    <path 
                      key={i}
                      d={`M${100 + i * 50} ${100} L${700 - i * 30} ${700}`} 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      strokeDasharray="5 5"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                  
                  {/* Data Nodes */}
                  {[...Array(10)].map((_, i) => (
                    <circle 
                      key={i}
                      cx={100 + (i % 5) * 150} 
                      cy={100 + Math.floor(i / 5) * 300}
                      r="8"
                      fill="currentColor"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </svg>
              </div>
              
              <div className="relative z-10 py-16 px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-6 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium text-sm mb-6"
                >
                  Strategic Business Transformation
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200"
                >
                  {businessImpactContent.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                >
                  {businessImpactContent.description}
                </motion.p>
              </div>
            </motion.div>
            
            {/* Results metrics - redesigned with animated elements */}
            <div className="mb-16">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200"
              >
                Measurable <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Business Impact</span>
              </motion.h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {businessImpactContent.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div 
                      className="h-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                    ></div>
                    <div className="p-6">
                      <div className="flex flex-col items-center mb-4">
                        <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-1">
                          {index === 0 ? "120%" : index === 1 ? "65%" : index === 2 ? "40%+" : "95%+"}
                        </div>
                        <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                          {result.metric}
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 mt-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          {index === 0 ? <FaChartLine /> : index === 1 ? <FaChartBar /> : index === 2 ? <FaCogs /> : <FaHandshake />}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Capabilities - redesigned with better visuals */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200"
              >
                Transformation <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Capabilities</span>
              </motion.h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {businessImpactContent.capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 relative overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute -bottom-4 -right-4 text-primary-200 dark:text-primary-800 opacity-10 group-hover:opacity-20 transition-opacity">
                      <WavePattern />
                    </div>
                    
                    <div className="flex items-start gap-6">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      >
                        {capability.icon}
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-200">{capability.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{capability.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Case Studies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <h4 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
                Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Success Stories</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-8">
                    <h5 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">E-Commerce Transformation</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Implemented comprehensive automation strategy for a mid-sized e-commerce business, resulting in 135% revenue growth and 45% reduction in operational costs.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        135% Revenue Growth
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                        45% Cost Reduction
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        3x Customer Lifetime Value
                      </span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-8">
                    <h5 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">SaaS Growth Acceleration</h5>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Developed and executed strategic growth plan for SaaS platform, achieving 200% user acquisition improvement and 70% increase in customer retention.
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        200% User Growth
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300">
                        70% Retention Increase
                      </span>
                      <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
                        55% CAC Reduction
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        );
        
      case 'education':
        return (
          <div className="space-y-16">
            {/* Header with animated background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-900/30 dark:to-pink-900/30 z-0"></div>
              <div className="absolute inset-0 z-0 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute opacity-5 dark:opacity-10">
                  {/* Books Pattern */}
                  {[...Array(8)].map((_, i) => (
                    <path 
                      key={i}
                      d={`M${100 + i * 80} 100 L${100 + i * 80} 200 L${160 + i * 80} 200 L${160 + i * 80} 100 Z`} 
                      stroke="currentColor" 
                      strokeWidth="1"
                      fill="none"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                  
                  {/* Connection Lines */}
                  {[...Array(10)].map((_, i) => (
                    <path 
                      key={`line-${i}`}
                      d={`M${100} ${300 + i * 30} L${700} ${300 + i * 30}`} 
                      stroke="currentColor" 
                      strokeWidth="1" 
                      strokeDasharray="5 5"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </svg>
              </div>
              
              <div className="relative z-10 py-16 px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-6 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium text-sm mb-6"
                >
                  Academic Excellence & Continuous Learning
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200"
                >
                  {educationContent.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8"
                >
                  {educationContent.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="max-w-2xl mx-auto italic text-gray-700 dark:text-gray-300 flex flex-col items-center"
                >
                  <FaBook className="text-2xl mb-2 text-purple-600 dark:text-purple-400" />
                  <p className="text-lg mb-1">&quot;{educationContent.quote}&quot;</p>
                  <p className="text-sm">— {educationContent.quoteAuthor}</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Formal Education */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200"
              >
                Academic <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Credentials</span>
              </motion.h4>
              
              <div className="space-y-12">
                {educationContent.education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 relative group hover:shadow-xl transition-all duration-300"
                  >
                    <div 
                      className="h-2 w-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <div className="absolute top-5 right-5 text-primary-200 dark:text-primary-800 transform rotate-12 opacity-10 group-hover:opacity-20 transition-opacity">
                      <CirclePattern />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-shrink-0">
                          <div 
                            className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
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
                            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{item.title}</h4>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 md:ml-4 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
                              {item.period}
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <div className="text-lg font-medium mb-1" style={{ color: item.color }}>{item.institution}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Focus: {item.focus}</div>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
                          </div>
                          
                          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                            <h5 className="font-semibold mb-3 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                              <FaTrophy className="text-sm" style={{ color: item.color }} />
                              Key Achievements
                            </h5>
                            <ul className="space-y-2">
                              {item.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Continuous Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="text-2xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">
                Continuous <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Professional Development</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {educationContent.continuousLearning.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ 
                            backgroundColor: `${course.color}15`,
                            color: course.color
                          }}
                        >
                          {course.icon}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{course.year}</div>
                          <div className="font-medium text-gray-900 dark:text-white">{course.provider}</div>
                        </div>
                      </div>
                      <h5 className="text-lg font-bold mb-3 text-gray-800 dark:text-gray-200">{course.title}</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{course.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Learning Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8 border border-purple-200 dark:border-purple-800 shadow-lg relative overflow-hidden"
            >
              <div className="absolute -bottom-4 -right-4 text-primary-200 dark:text-primary-800 opacity-10">
                <HexagonPattern />
              </div>
              
              <h4 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">My Learning Philosophy</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <FaBrain className="text-xl" />
                  </div>
                  <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Continuous Growth</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Embracing lifelong learning as a core principle for personal and professional development.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <FaLightbulb className="text-xl" />
                  </div>
                  <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Practical Application</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Translating theoretical knowledge into actionable strategies and tangible business results.</p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                    <FaUsers className="text-xl" />
                  </div>
                  <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Knowledge Sharing</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Actively mentoring and sharing expertise to elevate teams and drive collective success.</p>
                </div>
              </div>
            </motion.div>
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A showcase of my professional journey, leadership achievements, and the transformative impact I&apos;ve had on businesses.
          </p>
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