import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Sparkles, Trophy, Target, BookmarkCheck, CheckCircle2, Zap } from "lucide-react";

const MILESTONES = [
  {
    title: "10+ Certifications",
    description: "Proven record of continuous learning across AI, data analytics, and security.",
    icon: <Trophy className="text-yellow-500" size={24} />,
    color: "from-yellow-500/20 to-amber-500/10",
  },
  {
    title: "0.9354 R² Model Accuracy",
    description: "Achieved high-accuracy sales forecasting with Random Forest Regression.",
    icon: <Target className="text-blue-500" size={24} />,
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    title: "Simulations Completed",
    description: "Deloitte Australia and Mastercard real-world simulation programs.",
    icon: <BookmarkCheck className="text-purple-500" size={24} />,
    color: "from-purple-500/20 to-indigo-500/10",
  },
  {
    title: "Consistent Builder",
    description: "Successfully balancing a B.Sc curriculum with 5+ shipped hands-on projects.",
    icon: <Zap className="text-emerald-500" size={24} />,
    color: "from-emerald-500/20 to-teal-500/10",
  },
];

const STATS = [
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Certifications Earned" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 500, suffix: "+", label: "LinkedIn Connections" },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const [ref, setRef] = useState(null);
  const [hasRun, setHasRun] = useState(false);

  useEffect(() => {
    if (!ref || hasRun) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRun(true);
          const controls = animate(0, value, {
            duration: 1.8,
            ease: "easeOut",
            onUpdate(value) {
              setCount(Math.floor(value));
            },
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, value, hasRun]);

  return (
    <span ref={setRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow sphere */}
      <div className="absolute top-1/4 right-1/4 w-[35rem] h-[35rem] rounded-full bg-purple-500/[0.02] dark:bg-purple-600/[0.02] blur-[150px] -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-400/20 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-purple-300 mb-4 shadow-sm"
          >
            <Sparkles size={12} />
            <span>Achievements</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Milestones &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              statistics
            </span>
          </motion.h2>
        </div>

        {/* Milestones Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {MILESTONES.map((mile) => (
            <motion.div
              key={mile.title}
              variants={itemVariants}
              className="h-full"
            >
              <div className="glass-panel glass-panel-hover rounded-3xl p-6 h-full flex flex-col items-center text-center border border-slate-200/50 dark:border-white/5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${mile.color} flex items-center justify-center mb-4 shadow-sm transition-transform duration-500 hover:scale-115 hover:rotate-3`}>
                  {mile.icon}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-2">
                  {mile.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-normal">
                  {mile.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Counters Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="glass-panel rounded-3xl p-6 sm:p-8 text-center border border-slate-200/50 dark:border-white/5">
              <p className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
