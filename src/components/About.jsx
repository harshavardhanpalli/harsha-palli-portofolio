import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Award, BookOpen, GraduationCap } from "lucide-react";

const EDUCATION_TIMELINE = [
  {
    year: "2026",
    title: "AI & Data Analytics Certifications",
    institution: "Tata Group · Deloitte · Microsoft · Google · Mastercard · Saylor",
    description: "Successfully completed over 10+ professional tracks, developing solid foundations in machine learning, generative AI, cybersecurity, and advanced query analysis.",
    icon: <Award className="text-purple-500" size={16} />,
  },
  {
    year: "2024 — Present",
    title: "Bachelor of Science (B.Sc) — Computer Science",
    institution: "Andhra University, Visakhapatnam",
    description: "Focusing heavily on Data Science, Machine Learning integrations, and Advanced Computing. Balancing academic curricula with continuous practical building.",
    icon: <GraduationCap className="text-blue-500" size={16} />,
  },
];

const HIGHLIGHTS = [
  { text: "Continuous Learner", icon: "🚀" },
  { text: "Analytical Thinking", icon: "🧠" },
  { text: "Time Management", icon: "⏱️" },
  { text: "Collaboration", icon: "🤝" },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[30rem] h-[30rem] rounded-full bg-indigo-500/5 dark:bg-indigo-600/5 blur-[120px] -z-10" />

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
            <span>About Me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            The spark behind the{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              dashboards
            </span>
          </motion.h2>
        </div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8 items-stretch"
        >
          {/* Card 1: Intro & Objective */}
          <motion.div variants={cardVariants} className="h-full">
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                    <Target size={18} />
                  </span>
                  <span>Career Objective & Focus</span>
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                  To secure a challenging position in Data Analytics or AI where I can apply analytical skills, solve real-world problems, and contribute to growth while continuously learning emerging technologies.
                </p>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  I specialize in exploring datasets to identify trends, training regression and clustering models, and developing visual stories. I am deeply interested in generative AI tools, prompt engineering, and building automation scripts.
                </p>
              </div>

              {/* Strengths / Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3.5">
                  Core Attributes
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {HIGHLIGHTS.map((h) => (
                    <div
                      key={h.text}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-100 dark:border-white/5"
                    >
                      <span className="text-sm">{h.icon}</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                        {h.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Academic & Credentials Journey */}
          <motion.div variants={cardVariants} className="h-full">
            <div className="glass-panel glass-panel-hover rounded-3xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2.5">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-md shadow-purple-500/10">
                    <BookOpen size={18} />
                  </span>
                  <span>Education & Milestones</span>
                </h3>

                <div className="relative pl-6 space-y-6">
                  {/* Timeline central line */}
                  <div className="absolute left-[9px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-slate-200 dark:to-slate-800" />

                  {EDUCATION_TIMELINE.map((item, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline dot icon */}
                      <span className="absolute -left-6 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </span>
                      
                      <div>
                        <span className="text-xs font-bold text-blue-600 dark:text-purple-300 bg-blue-500/5 dark:bg-purple-500/5 px-2.5 py-0.5 rounded-full">
                          {item.year}
                        </span>
                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm sm:text-base mt-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.institution}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
