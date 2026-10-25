import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectIconMap } from "../../data";
import { useState } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center py-24 relative border-t border-white/5"
    >
      <div className="w-[90%] max-w-300 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`relative block p-2 ${project.large ? "md:col-span-2" : ""}`}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-white/5 block rounded-3xl"
                    layoutId="hoverBackgroundProjects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{
                  y: -5,
                  borderColor: "rgba(139, 92, 246, 0.25)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                }}
                className="p-8 h-full border border-white/5 rounded-2xl flex flex-col justify-between gap-6 bg-linear-to-br from-[#141416]/90 to-[#0a0a0c]/85 backdrop-blur-md relative overflow-hidden group z-10 transition-colors"
              >
                {/* Ambient glow on hover */}
                <div className="absolute -top-20 -right-20 w-44 h-44 bg-violet-600/15 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Window Control Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5 relative z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/25 border border-red-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/25 border border-yellow-500/40" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/25 border border-green-500/40" />
                  </div>
                  <span className="text-[11px] text-zinc-500 font-mono">
                    {project.tags[0] || "Web Application"}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col gap-3">
                  <h3 className="text-[1.35rem] font-semibold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#b1b1b8] text-[0.95rem] leading-[1.6]">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => {
                      const Icon = projectIconMap[tag];
                      return (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 bg-white/4 text-zinc-300 px-3 py-1 rounded-full text-xs font-medium border border-white/5 hover:border-white/10 transition-colors"
                        >
                          {Icon && <Icon size={12} className="text-[#b1b1b8]" />}
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                  <span className="text-xs text-zinc-500 font-medium">Production Live</span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white transition-all hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] group/btn"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
