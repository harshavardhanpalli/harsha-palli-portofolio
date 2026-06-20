import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const CONTACT_INFO = [
  {
    icon: <Mail className="text-blue-500" size={18} />,
    label: "Email",
    value: "harsha739661@gmail.com",
    href: "mailto:harsha739661@gmail.com",
  },
  {
    icon: <Phone className="text-emerald-500" size={18} />,
    label: "Phone",
    value: "+91 82475 28685",
    href: "tel:+918247528685",
  },
  {
    icon: <LinkedinIcon className="text-indigo-500" size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/harsha-palli",
    href: "https://www.linkedin.com/in/harsha-palli-105b9b3b3",
  },
  {
    icon: <GithubIcon className="text-slate-800 dark:text-white" size={18} />,
    label: "GitHub",
    value: "github.com/harshavardhanpalli",
    href: "https://github.com/harshavardhanpalli",
  },
  {
    icon: <MapPin className="text-rose-500" size={18} />,
    label: "Location",
    value: "Visakhapatnam, India",
    href: "https://maps.google.com/?q=Visakhapatnam",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate contact form submission
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      
      // Reset back to idle after a few seconds
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
      {/* Background glow sphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[45rem] h-[25rem] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-[120px] -z-10" />

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
            <span>Contact</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Let's build something{" "}
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              extraordinary
            </span>
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
          >
            {CONTACT_INFO.map((info) => (
              <a
                href={info.href}
                key={info.label}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group"
              >
                <div className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4 border border-slate-200/50 dark:border-white/5 h-full">
                  <span className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 flex items-center justify-center shadow-sm shrink-0 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate mt-0.5">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/50 dark:border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      disabled={status === "sending" || status === "success"}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/40 transition-all disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. you@example.com"
                      disabled={status === "sending" || status === "success"}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/40 transition-all disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project, opportunities, or requests..."
                    disabled={status === "sending" || status === "success"}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-white/5 text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-purple-500/40 transition-all resize-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-50 active:scale-95"
                >
                  <Send size={15} />
                  <span>
                    {status === "sending" ? "Sending Message..." : status === "success" ? "Message Sent!" : "Send Message"}
                  </span>
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold mt-2"
                    >
                      <CheckCircle2 size={16} />
                      <span>Thank you! Your message has been sent successfully.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
