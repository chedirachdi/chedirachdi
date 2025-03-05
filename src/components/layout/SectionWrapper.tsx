'use client';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ children, className = '' }: SectionWrapperProps) {
  return (
    <section className={`relative isolate ${className}`}>
      {/* Modern gradient background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/50 to-indigo-50/50"></div>
        
        {/* Gradient shapes */}
        <div className="absolute left-[10%] right-[10%] top-0 -z-10 h-[1000px] w-[80%] rounded-full bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 blur-3xl"></div>
        
        {/* Animated gradient circles */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400/20 to-indigo-400/20 blur-3xl animate-float"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-400/20 blur-3xl animate-float-delayed"></div>
        
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f610_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Gradient lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/[0.03] to-transparent transform rotate-12 scale-150"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/[0.03] to-transparent transform -rotate-12 scale-150"></div>
        </div>
      </div>

      {/* Content wrapper with glass effect */}
      <div className="relative">
        {children}
      </div>
    </section>
  );
} 