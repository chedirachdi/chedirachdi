'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';
import { Tab } from '@headlessui/react';
import { useMediaQuery } from 'react-responsive';

// Service Card Component
function ServiceCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative h-full hover:border-blue-200 transition-all duration-300">
        <div className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <div className="text-2xl">{icon}</div>
        </div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, description, highlights }: { year: string, title: string, description: string, highlights?: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative pl-12 pb-12"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-transparent" />
      
      {/* Timeline Dot */}
      <div className="absolute -left-3 top-0">
        <div className="relative w-6 h-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 animate-pulse opacity-50" />
          <div className="absolute inset-1 rounded-full bg-white" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600" />
        </div>
      </div>

      {/* Year Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-100 mb-4">
        <span className="text-blue-600 font-semibold">{year}</span>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-200">
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        {highlights && highlights.length > 0 && (
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-blue-600 mb-4">Key Achievements</h4>
            <div className="grid gap-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <span className="text-gray-600">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
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
              I&apos;m a <span className="font-semibold text-blue-600">Marketing Automation Expert</span> and <span className="font-semibold text-indigo-600">Business Development Leader</span> with a proven track record in transforming businesses through innovative automation solutions. As the CEO of GenLogic and with extensive experience in multiple leadership roles, I specialize in creating strategic frameworks that drive growth and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FaLightbulb />
                </div>
                <h3 className="font-bold text-gray-800">Marketing Automation</h3>
              </div>
              <p className="text-gray-600">
                I excel in implementing comprehensive marketing automation solutions, focusing on lead nurturing, campaign management, and CRM integration to optimize direct sales and drive business growth.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FaChartLine />
                </div>
                <h3 className="font-bold text-gray-800">Strategic Leadership</h3>
              </div>
              <p className="text-gray-600">
                With experience leading multiple successful ventures, I bring a strategic approach to business development, focusing on market expansion, stakeholder management, and sustainable growth.
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
              I approach each project with a focus on innovation and excellence, leveraging deep sector knowledge and analytical insights to provide candid, impartial advice. My expertise in cultural and creative industries, combined with technical knowledge in automation, enables me to deliver transformative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Marketing Expert</span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Business Strategist</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Automation Specialist</span>
              <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Innovation Leader</span>
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
            As a marketing automation expert and business development leader, I offer comprehensive solutions that help organizations optimize their operations, drive growth, and achieve sustainable success in the digital age.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<FaUsers />}
              title="Marketing Automation"
              description="Comprehensive marketing automation solutions including lead nurturing, campaign management, and CRM integration for optimized direct sales performance."
              color="bg-gradient-to-r from-blue-500 to-indigo-600"
            />
            <ServiceCard 
              icon={<FaLightbulb />}
              title="Strategic Consulting"
              description="Expert guidance in business strategy, market expansion, and operational optimization for cultural and creative industries."
              color="bg-gradient-to-r from-indigo-500 to-purple-600"
            />
            <ServiceCard 
              icon={<FaChartLine />}
              title="Sales Optimization"
              description="Advanced sales strategies and automation tools to streamline processes, improve conversion rates, and maximize revenue potential."
              color="bg-gradient-to-r from-purple-500 to-pink-600"
            />
            <ServiceCard 
              icon={<FaLightbulb />}
              title="Business Transformation"
              description="End-to-end business transformation services focusing on digital innovation, process automation, and sustainable growth strategies."
              color="bg-gradient-to-r from-pink-500 to-rose-600"
            />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
              <FaLightbulb className="text-blue-600" />
              <span>How I Deliver Value</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                <div className="font-bold text-blue-700 mb-2">Analysis & Strategy</div>
                <p className="text-sm text-gray-700">Comprehensive assessment of your current systems and processes to develop targeted automation strategies that align with your business&apos;s unique needs and goals.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg">
                <div className="font-bold text-indigo-700 mb-2">Implementation</div>
                <p className="text-sm text-gray-700">Expert implementation of marketing automation tools and processes, ensuring seamless integration with existing systems.</p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                <div className="font-bold text-purple-700 mb-2">Optimization</div>
                <p className="text-sm text-gray-700">Continuous monitoring and optimization of automated processes to maximize ROI and business impact.</p>
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
              With over 20 years of experience in business development and marketing automation, I've led multiple successful ventures and helped businesses transform their operations through innovative technology solutions and strategic planning.
            </p>
          </div>
          
          <TimelineItem 
            year="Dec 2023 - Present"
            title="Owner / Marketing Automation Guru - GenLogic"
            description="Leading an esteemed international consultancy specializing in strategy and planning for cultural and creative industries, with a focus on marketing automation for direct sales."
            highlights={[
              "Developed comprehensive marketing automation strategies for direct sales optimization",
              "Implemented advanced lead nurturing and campaign management systems",
              "Integrated CRM solutions for improved sales and marketing alignment",
              "Provided strategic consulting for cultural and creative industry clients",
              "Established innovative automation frameworks for business growth"
            ]}
          />
          
          <TimelineItem 
            year="Jan 2022 - Present"
            title="CEO / Managing Partner - NAZAX Application Run"
            description="Leading business development and strategic growth initiatives while managing key client relationships and market expansion."
            highlights={[
              "Developed and executed comprehensive growth strategies",
              "Managed and expanded client relationships",
              "Led stakeholder negotiations and contract management",
              "Identified new business opportunities and revenue streams",
              "Analyzed market trends and competitive landscape"
            ]}
          />
          
          <TimelineItem 
            year="Apr 2023 - Jul 2024"
            title="Chief Executive Officer - WEBBEC"
            description="Spearheaded innovative recruitment solutions and talent acquisition strategies for diverse organizations."
            highlights={[
              "Implemented innovative sourcing strategies across traditional and modern channels",
              "Developed comprehensive screening and selection methodologies",
              "Created structured onboarding programs for client organizations",
              "Enhanced candidate experience through technology integration",
              "Established strategic partnerships for talent acquisition"
            ]}
          />
          
          <TimelineItem 
            year="Aug 2022 - Feb 2023"
            title="Tech Sales Manager - Celantur"
            description="Led technical sales initiatives and strategic business development for mobile mapping solutions and geospatial data services."
            highlights={[
              "Developed technical sales strategies for complex mapping solutions",
              "Managed key client relationships and technical implementations",
              "Created strategic frameworks for market expansion",
              "Led negotiations with technical stakeholders",
              "Analyzed market opportunities in geospatial technology"
            ]}
          />
        </div>
      )
    }
  ];

  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.03) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem'
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-12"
        >
          {/* Enhanced Section Header */}
          <div className="text-center max-w-3xl mx-auto relative">
            <motion.div 
              variants={itemVariants} 
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"
            />
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-100 mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
                <span className="text-blue-600 font-medium text-sm">
                  Discover My Story
                </span>
              </div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-5xl font-bold mb-6 relative text-gray-900"
            >
              Marketing <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Automation</span> Expert
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-800 text-lg max-w-2xl mx-auto font-medium"
            >
              CEO of GenLogic | International Business Consultant | Specializing in Marketing Automation & Strategic Growth for Cultural and Creative Industries
            </motion.p>
          </div>

          {/* Enhanced Tabs Navigation */}
          <div className="flex justify-center mb-12">
            <div className="p-1.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-2xl">
              <div className="inline-flex bg-white rounded-xl p-1.5 shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      {tab.icon}
                      {tab.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-3xl blur-3xl" />
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-gray-100/50 p-8 shadow-xl relative">
                <div className="relative">
                  {tabs.find(tab => tab.id === activeTab)?.content}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 