import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Briefcase, Calendar, CheckCircle } from "lucide-react";

const EXPERIENCE = [
  {
    role: "Data Analytics & ML Project Builder",
    organization: "Independent Projects — B.Sc Computer Science",
    period: "2025 — Present",
    points: [
      "Built the Rossmann Predictive Analytics Dashboard, reaching an R² Score of 0.9354 with Random Forest Regression.",
      "Developed a Customer Segmentation model using K-Means Clustering with EDA-driven marketing insights.",
      "Designed an interactive Power BI dashboard for regional sales and revenue analysis.",
    ],
  },
  {
    role: "Data Analytics Job Simulation",
    organization: "Deloitte Australia",
    period: "2026",
    points: [
      "Completed a structured job simulation covering real-world data analytics workflows.",
      "Practiced translating complex business questions into clear, actionable data-driven recommendations.",
    ],
  },
  {
    role: "AI & Cybersecurity Skill Tracks",
    organization: "Google · Microsoft · Tata Group · Saylor · Mastercard",
    period: "2026",
    points: [
      "Completed AI Skills Fest 2026 (Microsoft) and Gen AI Data Analytics (Tata Group).",
      "Built foundations in responsible AI usage and prompt engineering through Google's certification tracks.",
      "Completed a Cybersecurity Job Simulation with Mastercard.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow sphere */}
      <div className="absolute top-1/2 left-1/4 w-[35rem] h-[35rem] rounded-full bg-blue-500/[0.02] dark:bg-blue-600/[0.02] blur-[150px] -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 dark:border-purple-400/20 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-purple-300 mb-4 shadow-sm"
          >
            <Sparkles size={12} />
            <span>Journey</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            My professional{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              journey
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10">
          {/* Glowing vertical line */}
          <div className="absolute left-[11px] sm:left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />
          
          <div className="space-y-12">
            {EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative"
              >
                {/* Node icon */}
                <span className="absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-white dark:ring-slate-950 shadow-lg flex items-center justify-center text-white">
                  <Briefcase size={12} className="sm:w-3.5 sm:h-3.5" />
                </span>

                {/* Info Card */}
                <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8">
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                    
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 dark:text-purple-300 bg-blue-500/5 dark:bg-purple-500/5 border border-blue-500/10 dark:border-purple-500/10">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-indigo-600 dark:text-purple-300 mb-5">
                    {exp.organization}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3">
                    {exp.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-normal">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
