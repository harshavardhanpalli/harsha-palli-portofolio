import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink, Code } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

const PROJECTS = [
  {
    title: "Rossmann Predictive Analytics Dashboard",
    description: "Built an end-to-end sales forecasting solution utilizing historical retail dataset, achieving a high model accuracy with an R² Score of 0.9354. Deployed as an interactive Streamlit dashboard showcasing KPIs.",
    tags: ["Python", "Scikit-Learn", "Streamlit", "Pandas", "Random Forest"],
    github: "https://github.com/harshavardhanpalli/Rossmann-Predictive-Analytics",
    demo: null, // No live demo URL, but we will handle button states gracefully
    color: "from-blue-600/20 via-indigo-600/10 to-transparent",
    border: "group-hover:border-blue-500/50",
    glow: "shadow-blue-500/5",
  },
  {
    title: "Customer Segmentation using Machine Learning",
    description: "Developed an unsupervised learning model using K-Means Clustering to group customers based on buying behavior and age distribution patterns. Conducted EDA and visualization to generate target recommendations.",
    tags: ["Python", "K-Means", "Matplotlib", "Seaborn", "Scikit-Learn"],
    github: "https://github.com/harshavardhanpalli/Customer-Segmentation",
    demo: null,
    color: "from-purple-600/20 via-fuchsia-600/10 to-transparent",
    border: "group-hover:border-purple-500/50",
    glow: "shadow-purple-500/5",
  },
  {
    title: "Sales & Revenue Analysis Dashboard",
    description: "Designed a fully interactive Power BI Business Intelligence dashboard analyzing regional sales performance and product metrics. Integrated KPI cards, region distribution charts, and interactive filtering.",
    tags: ["Power BI", "DAX", "Data Modeling", "MS Excel"],
    github: null,
    demo: null,
    color: "from-emerald-600/20 via-teal-600/10 to-transparent",
    border: "group-hover:border-emerald-500/50",
    glow: "shadow-emerald-500/5",
  },
  {
    title: "Weather Prediction Analysis using ML",
    description: "Engineered a predictive model to analyze meteorological factors and forecast weather patterns using Python. Built a custom preprocessing pipeline for feature cleaning and transformation.",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy"],
    github: null,
    demo: null,
    color: "from-cyan-600/20 via-blue-600/10 to-transparent",
    border: "group-hover:border-cyan-500/50",
    glow: "shadow-cyan-500/5",
  },
  {
    title: "AI Resume Analyzer",
    description: "Created an automated parser system to extract skills from candidate resumes, evaluate formatting, and compute direct ATS (Applicant Tracking System) scores using NLP parsing algorithms.",
    tags: ["Python", "NLP", "Streamlit", "NLTK", "Parsing"],
    github: null,
    demo: null,
    color: "from-pink-600/20 via-purple-600/10 to-transparent",
    border: "group-hover:border-pink-500/50",
    glow: "shadow-pink-500/5",
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/5 blur-[150px] -z-10" />

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
            <span>Projects</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Real-world data & AI{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              solutions
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base"
          >
            A curated selection of machine learning predictive pipelines, business intelligence dashboards, and AI tools built end-to-end.
          </motion.p>
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="h-full group"
            >
              <div className={`glass-panel rounded-3xl h-full flex flex-col justify-between overflow-hidden border border-slate-200/50 dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${project.glow} ${project.border}`}>
                
                {/* Header Decoration */}
                <div className={`h-24 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 10% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                  <Code size={36} className="text-slate-500/80 dark:text-slate-300/60 drop-shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                </div>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-lg text-[10px] sm:text-xs font-semibold bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200/40 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-900 dark:bg-white/10 text-white rounded-xl text-xs font-bold border border-slate-800 dark:border-white/10 hover:bg-slate-800 dark:hover:bg-white/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                      >
                        <GithubIcon size={13} />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-950 text-slate-400 dark:text-slate-600 rounded-xl text-xs font-bold border border-slate-200/50 dark:border-white/5 cursor-not-allowed select-none">
                        Internal Repo
                      </span>
                    )}

                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-xs font-bold hover:shadow-md hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-95 transition-all duration-200"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    ) : (
                      <span className="flex-1 flex items-center justify-center gap-1 px-4 py-2.5 bg-slate-100 dark:bg-slate-950 text-slate-400 dark:text-slate-600 rounded-xl text-xs font-bold border border-slate-200/50 dark:border-white/5 cursor-not-allowed select-none">
                        Demo N/A
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
