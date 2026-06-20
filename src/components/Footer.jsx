import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-white/5 bg-slate-50/30 dark:bg-slate-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Monogram / Logo */}
          <button
            onClick={handleScrollToTop}
            className="text-2xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent transition-transform hover:scale-105"
          >
            Harsha Vardhan
          </button>
          
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            Aspiring Data Analyst & AI Enthusiast. Transforming raw data streams into visual intelligence and forecasting models.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
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
                className="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200/50 dark:border-white/10 text-slate-500 hover:text-white dark:text-slate-400 dark:hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent hover:-translate-y-1 hover:scale-105 active:scale-95 transition-all duration-300 shadow-sm"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-2">
            {[
              { id: "home", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "certifications", label: "Certifications" },
              { id: "experience", label: "Experience" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-xs font-semibold text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-white/5 to-transparent mt-4" />

          {/* Copyright & Scroll Top Row */}
          <div className="flex items-center justify-between w-full flex-col sm:flex-row gap-4 mt-2">
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              © {new Date().getFullYear()} Harsha Vardhan Palli. All rights reserved.
            </p>
            
            <button
              onClick={handleScrollToTop}
              className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
