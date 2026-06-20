import React from "react";
import { motion } from "framer-motion";
import { Sparkles, FileText, Download, ExternalLink } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full bg-blue-500/[0.02] dark:bg-blue-600/[0.02] blur-[150px] -z-10" />

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
            <span>Resume</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Curriculum{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              vitae
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base"
          >
            Review my professional background or download a copy for your records.
          </motion.p>
        </div>

        {/* Resume Preview & Download Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-white/5"
        >
          {/* Header Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3 text-left">
              <span className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shadow-sm shrink-0">
                <FileText size={20} />
              </span>
              <div>
                <h3 className="font-bold text-slate-950 dark:text-white text-sm sm:text-base">
                  Harsha_Vardhan_Resume.pdf
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  Updated June 2026 · AI & Data Analysis Focus
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="/Harsha_Vardhan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-slate-100 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/10 transition-colors"
              >
                <span>Open Fullscreen</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="/Harsha_Vardhan_Resume.pdf"
                download="Harsha_Vardhan_Resume.pdf"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-indigo-500/10 hover:shadow-lg transition-transform duration-200 active:scale-95"
              >
                <Download size={13} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* PDF Embed / Interactive Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/5 bg-slate-100/50 dark:bg-slate-950 shadow-inner">
            {/* Desktop Preview */}
            <div className="hidden md:block">
              <iframe
                src="/Harsha_Vardhan_Resume.pdf"
                className="w-full h-[650px]"
                title="Harsha Vardhan Palli Resume"
              />
            </div>

            {/* Mobile Fallback Container */}
            <div className="md:hidden py-16 px-6 text-center flex flex-col items-center justify-center gap-4">
              <FileText className="text-slate-300 dark:text-slate-700" size={64} />
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
                Direct PDF previews are not supported on smaller mobile screens. Click below to download or view the document.
              </p>
              
              <a
                href="/Harsha_Vardhan_Resume.pdf"
                download="Harsha_Vardhan_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
              >
                <Download size={14} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
