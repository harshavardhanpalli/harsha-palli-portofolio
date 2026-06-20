import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, BarChart2, Brain, Wrench, Database } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming",
    icon: <Terminal className="text-blue-500" size={20} />,
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Python", level: 85 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Data Analytics",
    icon: <BarChart2 className="text-emerald-500" size={20} />,
    color: "from-emerald-500 to-teal-400",
    skills: [
      { name: "Power BI", level: 80 },
      { name: "MS Excel", level: 80 },
      { name: "Pandas", level: 82 },
      { name: "NumPy", level: 78 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="text-purple-500" size={20} />,
    color: "from-purple-500 to-fuchsia-400",
    skills: [
      { name: "Machine Learning (Scikit-Learn)", level: 75 },
      { name: "NLP", level: 70 },
      { name: "Data Visualization (Matplotlib / Seaborn)", level: 82 },
    ],
  },
  {
    title: "Tools & Environments",
    icon: <Wrench className="text-cyan-500" size={20} />,
    color: "from-cyan-500 to-blue-400",
    skills: [
      { name: "GitHub", level: 80 },
      { name: "Google BigQuery", level: 68 },
      { name: "VS Code", level: 85 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/10 transition-colors duration-500">
      {/* Glow effect spheres */}
      <div className="absolute top-1/3 right-1/4 w-[35rem] h-[35rem] rounded-full bg-blue-500/[0.03] dark:bg-blue-600/[0.03] blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-purple-500/[0.03] dark:bg-purple-600/[0.03] blur-[150px] -z-10" />

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
            <span>Skills</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            My technical{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
              toolkit
            </span>
          </motion.h2>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center shadow-sm">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Progress Bars */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                        <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                      </div>
                      
                      {/* Outer Track */}
                      <div className="h-2 rounded-full bg-slate-200/55 dark:bg-white/5 overflow-hidden">
                        {/* Glowing Progress Fill */}
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.15 }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-sm shadow-blue-500/20`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
