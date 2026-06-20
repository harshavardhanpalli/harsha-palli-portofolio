import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Mail, Brain, Database, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import ParticleBackground from "./ParticleBackground";

const TYPING_WORDS = ["Aspiring Data Analyst", "AI Enthusiast", "Python Developer", "B.Sc CS Student"];

export default function Hero({ dark }) {
  const [typedText, setTypedText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIdx % TYPING_WORDS.length];
    let timer;

    if (!isDeleting && typedText.length < currentWord.length) {
      // Typing
      timer = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length + 1));
      }, 100);
    } else if (!isDeleting && typedText.length === currentWord.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && typedText.length > 0) {
      // Backspacing
      timer = setTimeout(() => {
        setTypedText(currentWord.slice(0, typedText.length - 1));
      }, 50);
    } else if (isDeleting && typedText.length === 0) {
      // Transition to next word
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % TYPING_WORDS.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, wordIdx]);

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden select-none"
    >
      {/* Dynamic colorful bg glow spheres */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 transition-colors duration-500" />
      
      {/* Blue glow sphere top-left */}
      <div className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-500/20 dark:bg-blue-600/15 blur-[120px] -z-10 animate-pulse-glow" />
      
      {/* Purple glow sphere bottom-right */}
      <div className="absolute bottom-[-15%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-purple-500/20 dark:bg-purple-600/15 blur-[120px] -z-10 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      {/* Interactive Particle Network */}
      <div className="absolute inset-0 -z-10">
        <ParticleBackground dark={dark} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center z-10">
        {/* Left Info Column */}
        <div className="text-center lg:text-left flex flex-col justify-center">
          {/* Recruiter Friendly Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/10 backdrop-blur-md text-xs sm:text-sm font-semibold text-blue-600 dark:text-purple-300 mb-6 shadow-sm self-center lg:self-start"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 relative" />
            <span>Open to AI & Data Analytics Internships / Roles</span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900 dark:text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Harsha Vardhan
            </span>
          </motion.h1>

          {/* Typing Effect Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-10 sm:h-12 mt-4 mb-5"
          >
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-200">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="inline-block w-[3px] h-6 sm:h-7 bg-purple-500 ml-1.5 align-middle animate-pulse" />
            </p>
          </motion.div>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 mb-9 leading-relaxed"
          >
            Motivated B.Sc Computer Science student passionate about Data Analytics, AI, and Machine Learning. Turning raw datasets into forecasts, dashboards, and automated tools using Python, SQL, and Power BI.
          </motion.p>

          {/* Call To Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="/Harsha_Vardhan_Resume.pdf"
              download="Harsha_Vardhan_Resume.pdf"
              className="group flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
            
            <button
              onClick={handleScrollToContact}
              className="flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-xl font-bold text-sm hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300"
            >
              <span>Contact Me</span>
              <ChevronRight size={16} />
            </button>
          </motion.div>

          {/* Social Profiles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="flex items-center justify-center lg:justify-start gap-4 mt-10"
          >
            {[
              { icon: <GithubIcon size={18} />, href: "https://github.com/harshavardhanpalli", label: "GitHub" },
              { icon: <LinkedinIcon size={18} />, href: "https://www.linkedin.com/in/harsha-palli-105b9b3b3", label: "LinkedIn" },
              { icon: <Mail size={18} />, href: "mailto:harsha739661@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              >
                {icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Graphic Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glowing Gradient Shadow Blobs */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 blur-3xl opacity-35 dark:opacity-45 animate-pulse-glow" />
            
            {/* 3D Glassmorphic Card Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2.5rem] p-1.5 bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-500 shadow-2xl"
            >
              <div className="w-full h-full rounded-[2.1rem] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl flex items-center justify-center overflow-hidden border border-white/50 dark:border-white/10">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100/50 via-indigo-50/50 to-purple-100/50 dark:from-slate-800 dark:via-indigo-950/30 dark:to-purple-950/30">
                  {/* Monogram "H" */}
                  <motion.span
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="text-8xl sm:text-9xl font-black bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent select-none filter drop-shadow-md"
                  >
                    H
                  </motion.span>
                </div>
              </div>
            </motion.div>

            {/* Floating Tags (Framer-Motion Floating Animations) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-8 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-xl flex items-center gap-2"
            >
              <Brain size={16} className="text-purple-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Machine Learning</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 bottom-12 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-xl flex items-center gap-2"
            >
              <Terminal size={16} className="text-blue-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Python</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
              className="absolute right-2 -top-4 px-4 py-2 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-white/10 shadow-xl flex items-center gap-2"
            >
              <Database size={16} className="text-cyan-500" />
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Data Analytics</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
