import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, projectIconMap } from "../../data";
import { useState } from "react";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 relative border-t border-white/5">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
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
                    className="absolute inset-0 h-full w-full bg-white/5 block rounded-[24px]"
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
                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.15)", boxShadow: "0 15px 35px rgba(0,0,0,0.4)" }}
                className="p-10 h-full border border-white/5 rounded-[20px] flex flex-col justify-between gap-10 bg-linear-to-br from-[#141416]/90 to-[#0a0a0c]/80 backdrop-blur-md relative overflow-hidden group z-10"
              >
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col gap-4">
                <h3 className="text-[1.5rem] font-semibold text-white tracking-tight">{project.title}</h3>
                <p className="text-[#b1b1b8] text-[1.05rem] leading-[1.6]">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.tags.map(tag => {
                    const Icon = projectIconMap[tag];
                    return (
                      <span key={tag} className="inline-flex items-center gap-2 bg-white/5 text-white px-3 py-1.5 rounded-full text-[0.85rem] font-medium border border-white/5">
                        {Icon && <Icon size={14} className="text-[#b1b1b8]" />}
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </div>

              <div className="relative z-10 flex self-end">
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white/5 border border-transparent flex items-center justify-center text-white transition-all hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] group/icon"
                >
                  <ArrowUpRight size={20} className="transition-transform group-hover/icon:rotate-45" />
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
