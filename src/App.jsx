import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  // Scroll Progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Dark Mode class management
  useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  // Loader screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Section Observer for active navbar links
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "certifications", "experience", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of viewport
        }
      );
      observer.observe(el);
      return { observer, el };
    }).filter(Boolean);

    return () => {
      observers.forEach(({ observer, el }) => {
        observer.unobserve(el);
        observer.disconnect();
      });
    };
  }, []);

  return (
    <>
      {/* Loading Animation Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
          >
            {/* Spinning Loader Graphics */}
            <div className="relative w-16 h-16 mb-5">
              <div className="absolute inset-0 rounded-2xl border-4 border-slate-800" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-blue-500 border-r-purple-600"
              />
            </div>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400"
            >
              Loading Portfolio...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (visible after load / during exit animation) */}
      <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-purple-500/20">
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 origin-left z-[60]"
          style={{ scaleX }}
        />

        {/* Global Components */}
        <Navbar dark={dark} setDark={setDark} activeSection={activeSection} />
        
        {/* Sections */}
        <Hero dark={dark} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Experience />
        <Achievements />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
