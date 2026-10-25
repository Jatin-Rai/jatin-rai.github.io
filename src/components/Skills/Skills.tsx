import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillsData } from "../../data";

const skillBrandGlow: Record<string, string> = {
  "React.js":
    "hover:border-sky-400/40 hover:text-sky-300 hover:bg-sky-500/10 hover:shadow-[0_0_15px_rgba(56,189,248,0.15)]",
  "Next.js":
    "hover:border-white/40 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]",
  "Tailwind CSS":
    "hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(34,211,238,0.15)]",
  JavaScript:
    "hover:border-amber-400/40 hover:text-amber-300 hover:bg-amber-500/10 hover:shadow-[0_0_15px_rgba(251,191,36,0.15)]",
  TypeScript:
    "hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(96,165,250,0.15)]",
  Redux:
    "hover:border-purple-400/40 hover:text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(192,132,252,0.15)]",
  Zustand: "hover:border-amber-600/40 hover:text-amber-200 hover:bg-amber-600/10",
  Git: "hover:border-orange-500/40 hover:text-orange-400 hover:bg-orange-500/10 hover:shadow-[0_0_15px_rgba(249,115,22,0.15)]",
  GitHub: "hover:border-zinc-300/40 hover:text-white hover:bg-white/10",
  Firebase: "hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/10",
  AWS: "hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/10",
  Cline:
    "hover:border-emerald-400/40 hover:text-emerald-300 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(52,211,153,0.15)]",
  "Anti Gravity":
    "hover:border-violet-400/40 hover:text-violet-300 hover:bg-violet-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]",
  "Shadcn/UI": "hover:border-zinc-300/40 hover:text-white hover:bg-white/10",
  "Material-UI": "hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/10",
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterTabs = ["All", ...skillsData.map((c) => c.category)];
  const displayedCategories =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="w-[90%] max-w-300 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            Skills
          </h2>
        </div>

        <div className="flex flex-col">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filterTabs.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    isSelected
                      ? "text-white bg-white/15 border border-white/20 shadow-xs"
                      : "text-zinc-400 hover:text-white bg-white/3 border border-white/5 hover:border-white/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedCategories.map((category, idx) => (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-6 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-xs"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                    <h3 className="text-white font-medium text-base tracking-tight">
                      {category.category}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono">
                      {category.items.length} {category.items.length === 1 ? "skill" : "skills"}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.items.map((skill) => {
                      const glowClass =
                        skillBrandGlow[skill.name] ||
                        "hover:border-white/20 hover:text-white hover:bg-white/10";
                      return (
                        <motion.div
                          key={skill.name}
                          whileHover={{ y: -2 }}
                          className={`inline-flex items-center gap-2 bg-white/3 border border-white/5 text-zinc-300 px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 cursor-default ${glowClass}`}
                        >
                          <skill.icon size={16} className="text-[#b1b1b8] transition-colors" />
                          <span>{skill.name}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
