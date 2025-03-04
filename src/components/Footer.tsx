'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronRight } from 'react-icons/fa';

export default function Footer() {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

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

  // Navigation links
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Case Studies' },
    { href: '#contact', label: 'Contact' },
  ];

  // Social links
  const socialLinks = [
    { href: 'https://linkedin.com/in/chedi-rachdi', icon: <FaLinkedinIn />, label: 'LinkedIn' },
    { href: 'mailto:chedi@genlogic.io', icon: <FaEnvelope />, label: 'Email' },
  ];

  // Services
  const services = [
    { label: 'Business Development', href: '#about' },
    { label: 'Marketing Automation', href: '#about' },
    { label: 'Client Relationship Management', href: '#about' },
    { label: 'Leadership & Team Building', href: '#about' },
    { label: 'Strategic Consulting', href: '#about' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-indigo-500/5 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-md">
                CR
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Chedi Rachdi</h3>
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-medium">CEO & Business Automation Expert</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Helping businesses transform through strategic automation and leadership excellence.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          {/* Navigation column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white relative inline-block">
              Navigation
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index} className="flex items-center">
                  <FaChevronRight className="text-blue-500 dark:text-blue-400 mr-2 text-xs" />
                  <Link 
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            </h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <FaChevronRight className="text-blue-500 dark:text-blue-400 mr-2 text-xs" />
                  <Link 
                    href={service.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact column */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaEnvelope className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                  <a 
                    href="mailto:chedi@genlogic.io" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    chedi@genlogic.io
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaPhone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                  <a 
                    href="tel:+447401137621" 
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +44 7401 137621
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                  <span className="text-gray-700 dark:text-gray-300">Europe</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 my-8"></div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Chedi Rachdi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 