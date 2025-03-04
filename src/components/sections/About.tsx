'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

// Service Card Component
function ServiceCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <div className="bg-white rounded-lg p-4 md:p-5 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, highlights }: { year: string, title: string, description: string, highlights?: string[] }) {
  return (
    <div className="relative pl-8 border-l-2 border-blue-500">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
      <div className="mb-1 text-sm font-medium text-blue-600">{year}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      
      {highlights && highlights.length > 0 && (
        <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h4 className="text-sm font-semibold mb-2 text-gray-700">Key Achievements:</h4>
          <ul className="space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></div>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState('who');

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
      icon: <FaUsers />,
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              I&apos;m an <span className="font-semibold text-blue-600">Electromechanical Engineer</span> turned <span className="font-semibold text-indigo-600">Software Developer</span> with a passion for automation and business transformation. With over 15 years of experience spanning hardware and software domains, I specialize in creating intelligent systems that bridge the physical and digital worlds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FaLightbulb />
                </div>
                <h3 className="font-bold text-gray-800">Technical Expertise</h3>
              </div>
              <p className="text-gray-600">
                My background in electromechanical engineering combined with software development gives me a unique perspective on creating integrated solutions that optimize both hardware and software components.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FaLightbulb />
                </div>
                <h3 className="font-bold text-gray-800">AI & Automation</h3>
              </div>
              <p className="text-gray-600">
                I leverage AI and automation technologies to create intelligent systems that streamline operations, enhance productivity, and drive business growth through data-driven insights.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                <FaLightbulb />
              </div>
              <h3 className="font-bold text-gray-800">My Approach</h3>
            </div>
            <p className="text-gray-600 mb-4">
              I approach each project with a holistic mindset, focusing on the intersection of technology, business processes, and user experience. By understanding the complete ecosystem, I develop solutions that not only solve immediate problems but also create long-term value.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Systems Thinker</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Continuous Learner</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Innovation Driven</span>
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
          <p className="text-gray-600 mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
            I offer specialized services that combine my expertise in engineering, software development, and business automation to help organizations optimize their operations and drive growth.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<FaUsers />}
              title="Full-Stack Development"
              description="Custom web and mobile applications built with modern technologies like React, Next.js, and Node.js to solve specific business challenges."
              color="from-blue-500 to-indigo-600"
            />
            <ServiceCard 
              icon={<FaLightbulb />}
              title="AI & Automation Solutions"
              description="Intelligent systems that leverage AI, machine learning, and automation to streamline workflows and enhance decision-making processes."
              color="from-indigo-500 to-purple-600"
            />
            <ServiceCard 
              icon={<FaLightbulb />}
              title="Systems Integration"
              description="Seamless integration of hardware and software systems to create unified solutions that optimize operational efficiency."
              color="from-purple-500 to-pink-600"
            />
            <ServiceCard 
              icon={<FaLightbulb />}
              title="Digital Transformation"
              description="Strategic guidance and implementation support for organizations looking to embrace digital technologies and modernize their operations."
              color="from-pink-500 to-rose-600"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <FaLightbulb className="text-blue-600" />
              <span>How I Deliver Value</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="font-bold text-blue-700 mb-2">Discovery</div>
                <p className="text-sm text-gray-700">In-depth analysis of your current systems, challenges, and objectives to identify opportunities.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg">
                <div className="font-bold text-indigo-700 mb-2">Solution Design</div>
                <p className="text-sm text-gray-700">Custom-tailored solutions designed to address your specific needs and integrate with existing systems.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <div className="font-bold text-purple-700 mb-2">Implementation</div>
                <p className="text-sm text-gray-700">Efficient development and deployment with continuous feedback and iterative improvements.</p>
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
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 mb-6">
            <p className="text-gray-700">
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
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="inline-block mb-3">
              <div className="w-12 md:w-16 h-1 bg-blue-600 rounded-full mx-auto"></div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900"
            >
              About <span className="text-blue-600">Me</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0"
            >
              Discover my journey, expertise, and the value I bring to businesses
            </motion.p>
          </div>

          {/* Tab navigation */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  {tab.icon}
                  {tab.label}
                </div>
              </button>
            ))}
          </motion.div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-6 md:mt-8"
            >
              {tabs.find(tab => tab.id === activeTab)?.content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 