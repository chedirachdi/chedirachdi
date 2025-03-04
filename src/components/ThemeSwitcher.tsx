'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useThemeContext } from '@/providers/ThemeProvider';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useThemeContext();
  
  // Wait for client-side hydration to complete
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"></div>
    );
  }
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-300"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{ 
            opacity: theme === 'light' ? 0 : 1,
            scale: theme === 'light' ? 0.5 : 1,
            rotate: theme === 'light' ? -30 : 0
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="absolute inset-0 flex items-center justify-center text-indigo-600 dark:text-indigo-400"
        >
          <FaMoon className="w-full h-full" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{ 
            opacity: theme === 'light' ? 1 : 0,
            scale: theme === 'light' ? 1 : 0.5,
            rotate: theme === 'light' ? 0 : 30
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400"
        >
          <FaSun className="w-full h-full" />
        </motion.div>
      </div>
      
      {/* Animated background glow */}
      <motion.div 
        className="absolute inset-0 rounded-full"
        initial={false}
        animate={{ 
          boxShadow: theme === 'light' 
            ? '0 0 0 2px rgba(59, 130, 246, 0.1), 0 0 0 0 rgba(59, 130, 246, 0)' 
            : '0 0 0 2px rgba(99, 102, 241, 0.1), 0 0 0 0 rgba(99, 102, 241, 0)'
        }}
        transition={{ duration: 0.5 }}
      />
    </motion.button>
  );
} 