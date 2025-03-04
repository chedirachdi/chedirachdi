'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
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

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: 'Email',
      value: 'chedi@genlogic.io',
      link: 'mailto:chedi@genlogic.io'
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: 'Phone',
      value: '+44 7401 137621',
      link: 'tel:+447401137621'
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: 'Location',
      value: 'Europe',
      link: null
    }
  ];

  // Social links
  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/chedi-rachdi',
      color: 'bg-[#0077B5]'
    }
  ];

  // SVG Component for business connections visualization
  const BusinessConnectionSVG = () => (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 800 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-lg mx-auto"
    >
      {/* Central node */}
      <circle cx="400" cy="300" r="60" fill="url(#centralGradient)" />
      <text x="400" y="305" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">CR</text>
      
      {/* Connection lines */}
      <motion.path 
        d="M 450 270 Q 550 200 650 250" 
        stroke="url(#lineGradient1)" 
        strokeWidth="3" 
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <motion.path 
        d="M 450 330 Q 550 400 650 350" 
        stroke="url(#lineGradient2)" 
        strokeWidth="3" 
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      />
      
      <motion.path 
        d="M 350 270 Q 250 200 150 250" 
        stroke="url(#lineGradient3)" 
        strokeWidth="3" 
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.9 }}
      />
      
      <motion.path 
        d="M 350 330 Q 250 400 150 350" 
        stroke="url(#lineGradient4)" 
        strokeWidth="3" 
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.1 }}
      />
      
      {/* Connection nodes */}
      <motion.circle 
        cx="650" cy="250" r="40" 
        fill="url(#nodeGradient1)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      />
      <motion.text 
        x="650" y="255" 
        textAnchor="middle" 
        fill="white" 
        fontSize="14" 
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        Email
      </motion.text>
      
      <motion.circle 
        cx="650" cy="350" r="40" 
        fill="url(#nodeGradient2)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      />
      <motion.text 
        x="650" y="355" 
        textAnchor="middle" 
        fill="white" 
        fontSize="14" 
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        Phone
      </motion.text>
      
      <motion.circle 
        cx="150" cy="250" r="40" 
        fill="url(#nodeGradient3)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      />
      <motion.text 
        x="150" y="255" 
        textAnchor="middle" 
        fill="white" 
        fontSize="14" 
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        LinkedIn
      </motion.text>
      
      <motion.circle 
        cx="150" cy="350" r="40" 
        fill="url(#nodeGradient4)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      />
      <motion.text 
        x="150" y="355" 
        textAnchor="middle" 
        fill="white" 
        fontSize="14" 
        fontWeight="bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.7 }}
      >
        Location
      </motion.text>
      
      {/* Pulse animations */}
      <motion.circle 
        cx="400" cy="300" r="60" 
        stroke="rgba(59, 130, 246, 0.5)" 
        strokeWidth="5"
        fill="none"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
      />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="centralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        
        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        
        <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        
        <linearGradient id="lineGradient3" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        
        <linearGradient id="lineGradient4" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#818CF8" />
        </linearGradient>
        
        <linearGradient id="nodeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        
        <linearGradient id="nodeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        
        <linearGradient id="nodeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        
        <linearGradient id="nodeGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get in <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Touch</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 text-lg">
              Ready to discuss how I can help transform your business through automation and strategic growth?
            </motion.p>
          </div>
          
          {/* Contact content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-start p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social links */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Connect on</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-white shadow-md hover:shadow-lg transition-all"
                      style={{ backgroundColor: social.color === 'bg-[#0077B5]' ? '#0077B5' : '' }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Business connection visualization */}
            <motion.div 
              variants={itemVariants}
              className="hidden lg:block"
            >
              <BusinessConnectionSVG />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}