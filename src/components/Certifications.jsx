import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Award, ExternalLink, ShieldCheck, Cpu, Database, BarChart2 } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Gen AI Data Analytics",
    issuer: "Tata Group",
    date: "2026",
    color: "from-blue-500 to-indigo-500",
    icon: <BarChart2 size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "2026",
    color: "from-purple-500 to-pink-500",
    icon: <Database size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "AI Skills Fest 2026",
    issuer: "Microsoft",
    date: "2026",
    color: "from-sky-500 to-blue-600",
    icon: <Cpu size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Saylor University",
    date: "2026",
    color: "from-fuchsia-500 to-purple-600",
    icon: <Award size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Use AI Responsibly",
    issuer: "Google",
    date: "2026",
    color: "from-emerald-500 to-teal-500",
    icon: <ShieldCheck size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    date: "2026",
    color: "from-teal-500 to-cyan-500",
    icon: <Cpu size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Google",
    date: "2026",
    color: "from-blue-600 to-indigo-500",
    icon: <Award size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Cybersecurity Job Simulation",
    issuer: "Mastercard",
    date: "2026",
    color: "from-rose-500 to-orange-500",
    icon: <ShieldCheck size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Prior",
    color: "from-slate-600 to-slate-800",
    icon: <Database size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "Python Programming",
    issuer: "Technical Academy",
    date: "Prior",
    color: "from-slate-600 to-slate-800",
    icon: <Cpu size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    title: "AI Fundamentals",
    issuer: "Technical Academy",
    date: "Prior",
    color: "from-slate-600 to-slate-800",
    icon: <Award size={24} />,
    link: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[45rem] h-[45rem] rounded-full bg-purple-500/[0.03] blur-[150px] -z-10" />

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
            <span>Credentials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Verified certifications &{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              badges
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base"
          >
            Showcasing a continuous commitment to professional growth and technical excellence.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.title + cert.issuer}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <div className="glass-panel rounded-3xl p-6 h-full flex flex-col justify-between items-center text-center border border-slate-200/50 dark:border-white/5 transition-shadow duration-500 hover:shadow-xl hover:shadow-indigo-500/[0.06] dark:hover:shadow-purple-500/[0.08]">
                {/* Visual Icon Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-md shadow-indigo-500/10 mb-4 transition-transform duration-500 hover:scale-110 hover:rotate-3`}>
                  {cert.icon}
                </div>

                <div className="mb-4">
                  {/* Badge Year */}
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-purple-300 bg-blue-500/5 dark:bg-purple-500/5 px-2.5 py-0.5 rounded-full mb-2">
                    {cert.date}
                  </span>
                  
                  {/* Title & Issuer */}
                  <h3 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base leading-snug line-clamp-2 px-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {/* View Verification Button */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10 hover:scale-[1.01] transition-all duration-200"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
