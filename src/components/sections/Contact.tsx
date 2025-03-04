'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaArrowRight } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Simplified animation variants for better mobile performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced from 0.1
        delayChildren: 0.1, // Reduced from 0.2
        duration: 0.3 // Added duration for smoother animation
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 }, // Reduced y distance from 20 to 10
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.3, // Reduced from 0.5
        ease: "easeOut" // Simplified easing function
      }
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'Email',
      value: 'chedi@genlogic.io',
      link: 'mailto:chedi@genlogic.io',
      gradient: 'from-blue-600 to-indigo-600',
      description: 'For business inquiries and collaboration opportunities'
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: 'Phone',
      value: '+44 7401 137621',
      link: 'tel:+447401137621',
      gradient: 'from-indigo-600 to-blue-600',
      description: 'Available for urgent matters and consultations'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'Location',
      value: 'Europe',
      link: null,
      gradient: 'from-blue-600 to-indigo-600',
      description: 'Operating across European business hubs'
    }
  ];

  // Social links
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/chedi-rachdi',
      color: '#0077B5'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8 md:space-y-14"
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
              Get in <span className="text-blue-600">Touch</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 md:px-0">
              Ready to discuss how I can help transform your business through automation and strategic growth?
            </motion.p>
          </div>
          
          {/* Contact content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch">
            {/* Contact information - 2 columns */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6 md:space-y-8 lg:space-y-10 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-start">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mr-4 shadow-md`}>
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.description}</p>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm md:text-base"
                            >
                              {item.value}
                              <FaArrowRight className="ml-2 text-xs" />
                            </a>
                          ) : (
                            <p className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social links and CTA in a row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 flex-grow">
                {/* Social links card */}
                <motion.div 
                  variants={itemVariants}
                  className="md:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <div className="h-1" style={{ backgroundColor: '#0077B5' }}></div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect on</h4>
                    <div className="flex">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-white hover:opacity-90 transition-opacity duration-200"
                          style={{ backgroundColor: social.color }}
                        >
                          {social.icon}
                          <span className="text-sm md:text-base">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                {/* Call to action */}
                <motion.div 
                  variants={itemVariants}
                  className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md text-white overflow-hidden h-full flex flex-col"
                >
                  <div className="p-4 md:p-6 lg:p-8 flex flex-col h-full justify-between">
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-2">Ready to collaborate?</h4>
                      <p className="text-blue-100 mb-6 text-sm md:text-base">
                        I'm always open to discussing new projects, opportunities, and partnerships.
                      </p>
                    </div>
                    <div>
                      <a 
                        href="mailto:chedi@genlogic.io" 
                        className="inline-flex items-center px-4 md:px-5 py-2 md:py-3 rounded-lg bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 text-sm md:text-base"
                      >
                        Send a message
                        <FaArrowRight className="ml-2" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Business connection visualization - 1 column */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-1 flex flex-col"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 border-b border-gray-200 dark:border-gray-700 pb-2 lg:block hidden">
                My Network
              </h3>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 dark:border-gray-700 overflow-hidden flex-grow flex flex-col">
                <div className="h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="p-4 md:p-6 flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 text-center border-b border-gray-200 dark:border-gray-700 pb-2 lg:hidden">My Network</h3>
                  
                  <div className="relative h-[250px] md:h-[300px] lg:h-[400px] mx-auto w-full">
                    {/* Central node */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg z-10">
                      CR
                    </div>
                    
                    {/* Connection lines and nodes */}
                    <div className="absolute top-0 left-0 w-full h-full">
                      {/* Email connection */}
                      <div className="absolute top-[15%] right-[15%] w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-md z-10">
                        <FaEnvelope className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div className="absolute top-[25%] right-[30%] w-[25%] h-[2px] bg-blue-400 transform rotate-[30deg]"></div>
                      
                      {/* Phone connection */}
                      <div className="absolute bottom-[15%] right-[15%] w-12 h-12 md:w-14 md:h-14 rounded-full bg-indigo-500 flex items-center justify-center text-white shadow-md z-10">
                        <FaPhone className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div className="absolute bottom-[25%] right-[30%] w-[25%] h-[2px] bg-indigo-400 transform -rotate-[30deg]"></div>
                      
                      {/* LinkedIn connection */}
                      <div className="absolute top-[15%] left-[15%] w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#0077B5] flex items-center justify-center text-white shadow-md z-10">
                        <FaLinkedin className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div className="absolute top-[25%] left-[30%] w-[25%] h-[2px] bg-[#0077B5] transform -rotate-[30deg]"></div>
                      
                      {/* Location connection */}
                      <div className="absolute bottom-[15%] left-[15%] w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md z-10">
                        <FaMapMarkerAlt className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div className="absolute bottom-[25%] left-[30%] w-[25%] h-[2px] bg-blue-500 transform rotate-[30deg]"></div>
                    </div>
                  </div>
                  
                  <p className="text-center text-gray-500 dark:text-gray-400 mt-4 md:mt-6 text-xs md:text-sm">
                    Professional connections and communication channels
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}