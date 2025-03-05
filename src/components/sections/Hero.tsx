'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowRight, FaChartLine, FaCogs, FaRobot, FaLightbulb, FaClock, FaArrowUp } from 'react-icons/fa';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.1),transparent_50%)]" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(59,130,246,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.03) 1px, transparent 1px)',
            backgroundSize: '3rem 3rem',
            transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-blue-100">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-pulse" />
                <span className="text-blue-600 font-medium text-xs sm:text-sm">
                  Business Automation Expert
                </span>
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              <span className="block">Marketing Automation</span>
              <span className="block mt-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Expert & Strategist
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
              Helping businesses leverage automation to scale their marketing efforts and drive growth. Let&apos;s transform your business together.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Start Your Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-gray-100"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: '15+', label: 'Years Experience', icon: FaLightbulb },
                { value: '120%', label: 'Growth Rate', icon: FaChartLine },
                { value: '50+', label: 'Businesses Transformed', icon: FaCogs },
                { value: '85%', label: 'Client Retention', icon: FaRobot }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/50 backdrop-blur-sm border border-gray-100 p-4 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-indigo-500/10">
                        <stat.icon className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Advanced Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-[600px] select-none"
          >
            {/* Main Dashboard Container */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 overflow-hidden border border-white/10 shadow-2xl">
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 backdrop-blur-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
              </div>

              {/* Top Navigation Bar */}
              <div className="absolute top-0 inset-x-0 h-14 bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 border-b border-white/10 backdrop-blur-xl px-6 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-lg shadow-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-lg shadow-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-lg shadow-green-500/20" />
                  </div>
                  <div className="text-white/50 text-sm font-medium">Automation Analytics</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm">
                    Real-time Monitoring
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                    <FaRobot className="w-4 h-4 text-white/70" />
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="absolute inset-0 pt-14 p-6">
                <div className="h-full grid grid-cols-12 grid-rows-[auto_auto_1fr] gap-4">
                  {/* Main Chart */}
                  <div className="col-span-9 row-span-2 bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 rounded-2xl border border-white/10 p-4 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-indigo-500/5 transition-all duration-300" />
                    
                    <div className="relative h-full flex flex-col">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="text-white/90 font-medium text-lg mb-1">Process Automation Efficiency</div>
                          <div className="text-white/50 text-sm">Tasks automated vs. manual operations</div>
                        </div>
                        <div className="flex gap-2">
                          {['Day', 'Week', 'Month', 'Quarter'].map((period, i) => (
                            <button
                              key={period}
                              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                                i === 1
                                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                  : 'text-white/40 hover:text-white/60'
                              }`}
                            >
                              {period}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex-1 relative">
                        <div className="absolute inset-x-0 bottom-0 h-[80%] flex items-end">
                          {[...Array(24)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 mx-0.5"
                              initial={{ height: '20%' }}
                              animate={{ 
                                height: `${65 + Math.sin(i * 0.5) * 25}%`,
                                opacity: 0.3 + Math.sin(i * 0.5) * 0.5
                              }}
                              transition={{
                                duration: 4,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut'
                              }}
                            >
                              <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500 via-blue-500 to-indigo-500 opacity-80 rounded-sm" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-sm" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Side Stats */}
                  <div className="col-span-3 row-span-2 flex flex-col gap-4">
                    {[
                      { label: 'Active Workflows', value: '847', icon: FaCogs, color: 'emerald' },
                      { label: 'AI Models Active', value: '12', icon: FaRobot, color: 'blue' },
                      { label: 'Data Processed', value: '2.8TB', icon: FaClock, color: 'indigo' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex-1 bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 rounded-xl border border-white/10 p-3 relative overflow-hidden group"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-500/0 to-${stat.color}-500/0 group-hover:from-${stat.color}-500/5 group-hover:to-${stat.color}-500/10 transition-all duration-300`} />
                        <div className="relative h-full flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                              <stat.icon className={`w-4 h-4 text-${stat.color}-400`} />
                            </div>
                            <div className="text-lg font-semibold text-white">
                              {stat.value}
                            </div>
                          </div>
                          <div className="text-sm text-white/50">{stat.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom Metrics */}
                  <div className="col-span-12 grid grid-cols-4 gap-4">
                    {[
                      { label: 'Time Saved (Monthly)', value: '2,847h', trend: '+14%', icon: FaClock },
                      { label: 'Process Automation', value: '94.2%', trend: '+2.4%', icon: FaRobot },
                      { label: 'Cost Reduction', value: '$128K', trend: '+18.3%', icon: FaChartLine },
                      { label: 'ROI', value: '312%', trend: '+21.5%', icon: FaArrowUp }
                    ].map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 rounded-2xl border border-white/10 p-4 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-indigo-500/5 transition-all duration-300" />
                        <div className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10">
                              <metric.icon className="w-4 h-4 text-blue-400" />
                            </div>
                            <div className={`text-sm font-medium px-2 py-1 rounded-full ${
                              metric.trend.startsWith('+') 
                                ? 'text-green-400 bg-green-500/10' 
                                : 'text-red-400 bg-red-500/10'
                            }`}>
                              {metric.trend}
                            </div>
                          </div>
                          <div className="text-2xl font-semibold text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="text-sm text-white/50">
                            {metric.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* System Status */}
                  <div className="col-span-12">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="w-full bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-800/50 rounded-2xl border border-white/10 p-4 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 transition-all duration-300" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                              <FaRobot className="w-4 h-4 text-green-400" />
                            </div>
                            <div>
                              <div className="text-white/90 font-medium">Automation Health</div>
                              <div className="text-white/50 text-sm">All processes running optimally</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-green-400 text-sm font-medium">99.99% Success Rate</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: 'Workflow Execution', value: '98%' },
                            { label: 'AI Model Performance', value: '96.5%' },
                            { label: 'Data Processing', value: '99.9%' }
                          ].map((status, i) => (
                            <div key={i} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-white/50 text-sm">{status.label}</span>
                                <span className="text-white/90 text-sm font-medium">{status.value}</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 overflow-hidden">
                                <motion.div
                                  className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                                  initial={{ width: '0%' }}
                                  animate={{ width: status.value }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    ease: 'easeOut'
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 