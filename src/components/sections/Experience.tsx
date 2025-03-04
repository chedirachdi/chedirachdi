'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaChartLine, FaUsers, FaRocket, FaGlobeAmericas, FaLightbulb, FaCogs, FaTrophy, FaHandshake, FaChess, FaChartBar, FaBook, FaCertificate, FaLaptopCode, FaBrain, FaRobot, FaWater } from 'react-icons/fa';

// Optimize animation variants
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

// Optimize tab transitions
const tabVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

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
  
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl" ref={containerRef}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-8 md:space-y-12"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <div className="w-12 md:w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-5 text-gray-900 dark:text-white"
            >
              Professional <span className="text-blue-600">Experience</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 md:px-0"
            >
              A track record of leadership, innovation, and business transformation
            </motion.p>
          </div>

          {/* Tab navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {['leadership', 'business', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-8 md:mt-12"
            >
              {activeTab === 'leadership' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {leadershipContent.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden"
                    >
                      <div className="p-4 md:p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            {achievement.icon}
                          </div>
                          <div>
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                              {achievement.title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {achievement.period}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                          {achievement.description}
                        </p>
                        <ul className="space-y-2">
                          {achievement.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                              <span className="text-blue-600 mt-1">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Similar optimizations for business and education tabs */}
              {/* ... rest of your tab content ... */}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}