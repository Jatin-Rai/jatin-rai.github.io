import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, LayoutGrid, Copy, Check } from "lucide-react";
import { skillsData } from "../../../data";

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

export function SkillsView() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "json">("grid");
  const [copiedJson, setCopiedJson] = useState(false);

  const filterTabs = ["All", ...skillsData.map((c) => c.category)];

  const filteredCategories = useMemo(() => {
    let result =
      selectedCategory === "All"
        ? skillsData
        : skillsData.filter((c) => c.category === selectedCategory);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) => item.name.toLowerCase().includes(q) || cat.category.toLowerCase().includes(q),
          ),
        }))
        .filter((cat) => cat.items.length > 0);
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.items.length, 0);

  const jsonString = useMemo(() => {
    const raw = skillsData.map((c) => ({
      category: c.category,
      skills: c.items.map((i) => i.name),
    }));
    return JSON.stringify(raw, null, 2);
  }, []);

  const handleCopyJson = () => {
    void navigator.clipboard.writeText(jsonString);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-5xl mx-auto space-y-6 font-sans">
      {/* File Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-semibold">src/config/skills.json</span>
          <span>• {totalSkillsCount} Indexed Skills</span>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center p-0.5 rounded-lg bg-white/5 border border-white/10">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-white/15 text-white shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={13} />
              <span>Bento</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("json")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                viewMode === "json"
                  ? "bg-white/15 text-white shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Code2 size={13} />
              <span>Raw JSON</span>
            </button>
          </div>
        </div>
      </div>

      {viewMode === "grid" ? (
        <>
          {/* Search & Category Filter Toolbar */}
          <div className="space-y-4">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills by name (e.g. React, TypeScript, AI, Redux)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/3 border border-white/10 text-xs text-white outline-none focus:border-violet-500/50 focus:bg-white/5 transition-all font-mono placeholder:text-zinc-600"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filterTabs.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all cursor-pointer ${
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
          </div>

          {/* Categorized Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredCategories.map((category, idx) => (
                <motion.div
                  key={category.category}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  className="p-5 rounded-2xl bg-white/2 border border-white/5 hover:border-white/10 transition-colors backdrop-blur-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                      <h3 className="text-white font-medium text-sm tracking-tight font-mono">
                        {category.category}
                      </h3>
                      <span className="text-[11px] text-zinc-500 font-mono">
                        {category.items.length} {category.items.length === 1 ? "skill" : "skills"}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill) => {
                        const glowClass =
                          skillBrandGlow[skill.name] ||
                          "hover:border-white/20 hover:text-white hover:bg-white/10";

                        return (
                          <motion.div
                            key={skill.name}
                            whileHover={{ y: -2 }}
                            className={`inline-flex items-center gap-1.5 bg-white/3 border border-white/5 text-zinc-300 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-default ${glowClass}`}
                          >
                            <skill.icon size={14} className="text-[#b1b1b8] shrink-0" />
                            <span>{skill.name}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </>
      ) : (
        /* Raw JSON Editor View */
        <div className="p-4 sm:p-6 rounded-2xl bg-[#0b0b10] border border-white/10 font-mono text-xs relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
            <span className="text-zinc-500">skills.json</span>
            <button
              type="button"
              onClick={handleCopyJson}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              {copiedJson ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} className="text-zinc-400" />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
          </div>
          <pre className="text-zinc-300 overflow-x-auto leading-relaxed max-h-[500px]">
            <code>{jsonString}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
