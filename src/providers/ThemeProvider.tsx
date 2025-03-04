'use client';

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    const initialTheme = savedTheme || systemTheme;
    setTheme(initialTheme);
    
    // Apply the theme to the document
    applyTheme(initialTheme);

    // Listen for storage events to sync theme across tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'theme') {
        const newTheme = e.newValue as Theme;
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    setMounted(true);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Function to apply theme consistently
  const applyTheme = (newTheme: Theme) => {
    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove('light', 'dark');
    
    // Add the appropriate class
    document.documentElement.classList.add(newTheme);
    
    // Store the theme preference
    localStorage.setItem('theme', newTheme);
  };

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  // Only render children once mounted to avoid hydration mismatch
  if (!mounted) {
    // Return children without theme context to match server rendering
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
} 