'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import icons to reduce initial bundle size
const Icons = {
  FaUsers: dynamic(() => import('react-icons/fa').then(mod => mod.FaUsers)),
  FaGlobeAmericas: dynamic(() => import('react-icons/fa').then(mod => mod.FaGlobeAmericas)),
  FaHandshake: dynamic(() => import('react-icons/fa').then(mod => mod.FaHandshake)),
  FaEnvelope: dynamic(() => import('react-icons/fa').then(mod => mod.FaEnvelope)),
  FaPhone: dynamic(() => import('react-icons/fa').then(mod => mod.FaPhone)),
  FaMapMarkerAlt: dynamic(() => import('react-icons/fa').then(mod => mod.FaMapMarkerAlt)),
  FaLinkedin: dynamic(() => import('react-icons/fa').then(mod => mod.FaLinkedin)),
  FaExternalLinkAlt: dynamic(() => import('react-icons/fa').then(mod => mod.FaExternalLinkAlt))
};

interface NetworkStat {
  iconName: keyof typeof Icons;
  title: string;
  subtitle: string;
  value: string;
  label: string;
}

const networkStats: NetworkStat[] = [
  {
    iconName: 'FaUsers' as const,
    title: "Global Network",
    subtitle: "Professional Connections",
    value: "500+",
    label: "Active Members"
  },
  {
    iconName: 'FaGlobeAmericas' as const,
    title: "International Reach",
    subtitle: "Countries Served",
    value: "25+",
    label: "Countries"
  },
  {
    iconName: 'FaHandshake' as const,
    title: "Partnerships",
    subtitle: "Strategic Collaborations",
    value: "50+",
    label: "Partners"
  }
];

// Contact information
const contactInfo = [
  {
    iconName: 'FaEnvelope' as const,
    title: 'Email',
    value: 'chedi@genlogic.io',
    link: 'mailto:chedi@genlogic.io',
    gradient: 'from-blue-600 to-indigo-600',
    description: 'For business inquiries and collaboration opportunities'
  },
  {
    iconName: 'FaPhone' as const,
    title: 'Phone',
    value: '+44 7401 137621',
    link: 'tel:+447401137621',
    gradient: 'from-indigo-600 to-blue-600',
    description: 'Available for urgent matters and consultations'
  },
  {
    iconName: 'FaMapMarkerAlt' as const,
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
    iconName: 'FaLinkedin' as const,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/chedi-rachdi',
    color: '#0077B5'
  }
];

export default function Contact() {
  const ref = useRef(null);

  // Simplified animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const IconComponent = ({ name }: { name: keyof typeof Icons }) => {
    const Icon = Icons[name];
    return <Icon className="w-5 h-5" />;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="w-12 md:w-16 h-1 bg-blue-600 rounded-full mx-auto mb-3"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
              Let&apos;s <span className="text-blue-600">Connect</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4 md:px-0">
              I&apos;m always open to discussing new projects, opportunities, and partnerships.
            </p>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-stretch">
            {/* Contact information - 2 columns */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Contact Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden"
                  >
                    <div className={`h-1 bg-gradient-to-r ${item.gradient}`}></div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                          <IconComponent name={item.iconName} />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-blue-600">{item.value}</span>
                        {item.link && (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                            aria-label={`Open ${item.title.toLowerCase()} ${item.value} in a new window`}
                          >
                            <IconComponent name="FaExternalLinkAlt" />
                            <span className="sr-only">Open in new window</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {/* Social links card */}
                <div className="col-span-full sm:col-span-1 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 overflow-hidden">
                  <div className="h-1" style={{ backgroundColor: '#0077B5' }}></div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Connect on</h4>
                    <div className="flex flex-wrap gap-2">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-white hover:opacity-90 transition-opacity duration-200 text-sm md:text-base"
                          style={{ backgroundColor: social.color }}
                        >
                          <IconComponent name={social.iconName} />
                          <span>{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Call to action */}
                <div className="col-span-full sm:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-4 md:p-6 text-white">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">Ready to Transform Your Business?</h4>
                  <p className="text-white/90 mb-4 text-sm md:text-base">
                    Let&apos;s discuss how we can help you achieve your business goals through strategic automation and innovation.
                  </p>
                  <Link
                    href="mailto:chedi@genlogic.io"
                    className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm md:text-base"
                    aria-label="Send an email to discuss business opportunities"
                  >
                    <IconComponent name="FaEnvelope" />
                    Send a Message
                  </Link>
                </div>
              </div>
            </div>

            {/* Network section */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                My Network
              </h3>
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {networkStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 p-4 md:p-6"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                        <IconComponent name={stat.iconName} />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{stat.title}</h4>
                        <p className="text-sm text-gray-600">{stat.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
                      <span className="text-sm text-gray-600">{stat.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}