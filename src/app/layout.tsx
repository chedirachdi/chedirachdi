import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chedi Rachdi | CEO & Business Automation Expert",
  description: "Chedi Rachdi is a CEO and Business Automation Expert helping companies transform their operations through strategic leadership and innovative automation solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        suppressHydrationWarning 
        className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col transition-colors duration-300`}
      >
        {/* Background elements */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Gradient blobs */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl"></div>
          
          {/* Center accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <Navbar />
        <main className="flex-grow relative z-10">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
