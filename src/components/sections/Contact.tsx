'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGlobeAmericas, FaHandshake } from 'react-icons/fa';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

// Dynamically import icons to reduce initial bundle size
const Icons = {
  FaUsers: FaUsers,
  FaGlobeAmericas: FaGlobeAmericas,
  FaHandshake: FaHandshake,
  FaEnvelope: FaEnvelope,
  FaPhone: FaPhone,
  FaMapMarkerAlt: FaMapMarkerAlt,
  FaLinkedin: FaLinkedin,
  FaExternalLinkAlt: FaExternalLinkAlt
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const IconComponent = ({ name }: { name: keyof typeof Icons }) => {
    const Icon = Icons[name];
    return <Icon className="text-2xl" />;
  };

  return (
    <section id="contact" className="relative py-12 sm:py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
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

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-8 sm:space-y-12 md:space-y-16"
        >
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto relative">
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-100 mb-4 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
                <span className="text-blue-600 font-medium text-xs sm:text-sm">
                  Let&apos;s Connect
                </span>
              </div>
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 relative"
            >
              <span className="text-gray-900">Ready to </span>
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Transform</span>
              <span className="text-gray-900"> Your Business?</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Let&apos;s discuss how my expertise in marketing automation and business development can help your organization achieve sustainable growth
            </motion.p>
          </div>

          {/* Network Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {networkStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 border border-blue-100/30 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                    <IconComponent name={stat.iconName} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{stat.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-4">{stat.subtitle}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">{stat.label}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Information and CTA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Get in Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all duration-300`}>
                      <IconComponent name={item.iconName} />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm text-gray-500">{item.title}</h4>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-base sm:text-lg font-semibold text-gray-900">{item.value}</p>
                      )}
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">Connect Online</h3>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100/30"
                    >
                      <IconComponent name={link.iconName} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Call to Action Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-md border border-blue-100/30"
            >
              <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
              <div className="p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Let&apos;s Collaborate</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  I&apos;m always open to discussing new projects, creative ideas, and opportunities to be part of your vision. Whether you need help with marketing automation, business strategy, or digital transformation, I&apos;m here to help you succeed.
                </p>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Personalized marketing automation solutions</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Strategic business development consulting</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 flex items-center justify-center text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">Innovative digital transformation solutions</p>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <a 
                    href="mailto:chedi@genlogic.io" 
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-sm sm:text-base font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <IconComponent name="FaEnvelope" />
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}