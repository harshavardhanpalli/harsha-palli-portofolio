import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ dark, setDark, activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 border ${
            scrolled
              ? "bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border-slate-200/50 dark:border-white/10 shadow-lg shadow-indigo-500/5"
              : "bg-white/30 dark:bg-white/[0.03] backdrop-blur-md border-white/20 dark:border-white/5"
          }`}
        >
          {/* Logo */}
          <button
            onClick={() => handleScrollTo("home")}
            className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Harsha<span className="text-slate-400 dark:text-slate-500">.dev</span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-purple-300 hover:bg-slate-500/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-xl -z-10 shadow-md shadow-indigo-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDark((prev) => !prev)}
              aria-label="Toggle dark mode"
              className="p-2.5 rounded-xl bg-white/60 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-yellow-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-white/15 transition-colors shadow-sm"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-2.5 rounded-xl bg-white/60 dark:bg-white/10 border border-slate-200/60 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-white/15 transition-colors shadow-sm"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-[100%] left-0 right-0 mx-4 mt-2 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 shadow-2xl p-4 flex flex-col gap-2 z-40"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-indigo-500/10"
                      : "text-slate-700 dark:text-slate-300 hover:bg-indigo-500/5 hover:text-indigo-600 dark:hover:text-purple-400"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
