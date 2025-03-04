'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/chedirachdi/', 
      icon: <FaLinkedin className="h-5 w-5" />,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/chedirachdi', 
      icon: <FaTwitter className="h-5 w-5" />,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Email', 
      href: 'mailto:chedi.rachdi@genlogic.me', 
      icon: <FaEnvelope className="h-5 w-5" />,
      color: 'hover:text-red-500'
    },
  ];
  
  // SVG pattern for background
  const HexagonPattern = () => (
    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 opacity-5 dark:opacity-10 z-0">
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(50, 50)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(150, 50)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(250, 50)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(100, 137)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(200, 137)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(300, 137)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(50, 224)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(150, 224)" stroke="currentColor" strokeWidth="1"/>
      <path d="M50 87L100 58V0L50 29L0 0V58L50 87Z" transform="translate(250, 224)" stroke="currentColor" strokeWidth="1"/>
    </svg>
  );
  
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50/30 dark:to-gray-900/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/50 dark:via-amber-700/50 to-transparent"></div>
      <HexagonPattern />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Back to top button */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 rounded-full gradient-bg-gold text-white shadow-lg hover:shadow-xl transition-all"
            aria-label="Back to top"
          >
            <FaArrowUp className="h-5 w-5" />
          </motion.button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4"
          >
            <Link href="#home" className="inline-block">
              <span className="text-2xl font-bold gradient-text-gold">
                Chedi Rachdi
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              CEO & Business Automation Expert helping companies achieve exceptional growth through strategic innovation and operational excellence.
            </p>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 20 
                  }}
                  whileHover={{ y: -5 }}
                  className="p-2 rounded-full executive-card text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Links columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text-gold">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text-gold">Services</h3>
            <ul className="space-y-3">
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link 
                  href="#about"
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Business Development
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <Link 
                  href="#about"
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Marketing Automation
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Link 
                  href="#about"
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Strategic Consulting
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4"
          >
            <h3 className="text-lg font-semibold mb-4 gradient-text-gold">Contact</h3>
            <address className="not-italic space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-bg-gold flex items-center justify-center text-white">
                  <FaMapMarkerAlt />
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Tunisia
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-bg-gold flex items-center justify-center text-white">
                  <FaEnvelope />
                </div>
                <a 
                  href="mailto:chedi.rachdi@genlogic.me"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  chedi.rachdi@genlogic.me
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full gradient-bg-gold flex items-center justify-center text-white">
                  <FaPhone />
                </div>
                <a 
                  href="tel:+21655555555"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                >
                  +216 55 555 555
                </a>
              </div>
            </address>
            
            <div className="mt-6">
              <Link
                href="#contact"
                className="inline-flex items-center px-5 py-2 rounded-full gradient-bg-gold text-white font-medium hover:shadow-lg transition-all"
              >
                Schedule a Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Trusted by section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="text-center mb-6">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Trusted by Leading Companies</h4>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image src="/images/company1.png" alt="Company 1" width={120} height={40} className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/images/company2.png" alt="Company 2" width={120} height={40} className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/images/company3.png" alt="Company 3" width={120} height={40} className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
            <Image src="/images/company4.png" alt="Company 4" width={120} height={40} className="h-8 w-auto grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all" />
          </div>
        </motion.div>
        
        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Chedi Rachdi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 