import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { experiences } from "../../data";

const roleMetrics: Record<number, string[]> = {
  0: ["👥 8,000+ Users", "⚡ 40–50% Speedup", "🤖 AI Chatbot", "📊 Excel Reporting"],
  1: ["📈 Real-Time CRM", "🚀 Next.js SSR", "⚡ 35% Faster Fetch", "👥 5+ Dev Team"],
  2: ["🏦 HSBC / Morgan Stanley", "📊 Investment Banking", "🧪 Python Automation"],
  3: ["👥 8-Member Team Lead", "📊 MUI Data Grids", "⚡ Redux Architecture"],
};

export default function Experience() {
  const [expandedRoles, setExpandedRoles] = useState<Record<number, boolean>>({
    0: true, // Most recent role open by default
  });

  const toggleRole = (index: number) => {
    setExpandedRoles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center py-24 relative border-t border-white/5"
    >
      <div className="w-[90%] max-w-300 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            Experience
          </h2>
        </div>

        <div className="flex flex-col relative pl-6 md:pl-0">
          {/* Vertical timeline spine */}
          <div className="absolute left-0 md:-left-8 top-0 bottom-0 w-px bg-linear-to-b from-violet-500/50 via-white/10 to-transparent" />

          {experiences.map((exp, idx) => {
            const isExpanded = !!expandedRoles[idx];
            const metrics = roleMetrics[idx] || [];

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="py-8 border-b border-white/5 last:border-none group relative sm:-mx-6 sm:px-6 rounded-2xl hover:bg-white/2 transition-colors"
              >
                {/* Timeline node */}
                {idx === 0 ? (
                  <div className="absolute -left-7.5 md:-left-9.75 top-9 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border-2 border-violet-400 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
                  </div>
                ) : (
                  <div className="absolute -left-7.25 md:-left-9.25 top-9 w-2.5 h-2.5 rounded-full bg-[#0a0a0c] border-2 border-white/20 group-hover:border-violet-400/60 transition-colors" />
                )}

                <div className="flex flex-col gap-4">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                          {exp.role}
                        </h3>
                        {idx === 0 && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                            <Sparkles size={10} /> Present
                          </span>
                        )}
                      </div>
                      <div className="text-[1.05rem] text-[#b1b1b8] mt-0.5">{exp.company}</div>
                    </div>
                    <div className="text-xs text-zinc-400 font-mono tracking-wider pt-1 sm:text-right shrink-0">
                      {exp.date}
                    </div>
                  </div>

                  {/* Highlight Metric Badges */}
                  {metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-md bg-white/4 border border-white/5 text-zinc-300"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Expand/Collapse Toggle Button */}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleRole(idx)}
                        className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-medium transition-colors cursor-pointer py-1"
                      >
                        <span>
                          {isExpanded
                            ? "Hide Details"
                            : `View ${exp.bullets.length} Key Achievements`}
                        </span>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-4 space-y-2.5 border-t border-white/5 pt-4">
                              {exp.bullets.map((bullet, bIdx) => (
                                <li
                                  key={bIdx}
                                  className="text-sm text-[#b1b1b8] leading-relaxed flex items-start gap-2.5"
                                >
                                  <span className="text-violet-400 mt-0.5 shrink-0 text-sm">▹</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
