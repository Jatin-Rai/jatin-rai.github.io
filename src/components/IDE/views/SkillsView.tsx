import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Code2,
  LayoutGrid,
  Copy,
  Check,
  Layers,
  X,
  Building,
  CheckCircle2,
} from "lucide-react";
import { skillsData } from "../../../data";

interface SkillDetail {
  name: string;
  category: string;
  tier: "daily" | "enterprise" | "modern-ai";
  tenure: string;
  deployments: string[];
  description: string;
}

const SKILL_PROFILES: Record<string, SkillDetail> = {
  "React.js": {
    name: "React.js",
    category: "Frontend",
    tier: "daily",
    tenure: "4+ Years • Primary Core",
    deployments: ["Samsung R&D Institute Delhi", "EMB Global", "Capgemini (HSBC)", "Shivila"],
    description:
      "Core framework expertise spanning React 16 through React 19. Architected high-scale enterprise platforms with custom hooks, memoization, code-splitting, lazy-loading, and zero layout shift.",
  },
  TypeScript: {
    name: "TypeScript",
    category: "Frontend",
    tier: "daily",
    tenure: "3+ Years • Strict Production",
    deployments: ["Samsung R&D Institute Delhi", "EMB Global", "Open Source"],
    description:
      "Engineered end-to-end type safety, generic utility types, Discriminated Unions, and API contract interfaces ensuring zero runtime type regressions.",
  },
  "Next.js": {
    name: "Next.js",
    category: "Frontend",
    tier: "daily",
    tenure: "2+ Years • SSR / App Router",
    deployments: ["EMB Global CRM", "Personal Portfolio", "Client Portals"],
    description:
      "Implemented Server-Side Rendering (SSR), Static Site Generation (SSG), and edge API routes reducing initial page load times by up to 35%.",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    category: "UI/Styling",
    tier: "daily",
    tenure: "3+ Years • v3 & v4",
    deployments: ["Samsung R&D Projects", "EMB Global CRM", "Modern IDE Portfolio"],
    description:
      "Expertise in utility-first design systems, custom theme configuration, responsive design, dark mode tokens, and Tailwind v4 CSS-first architecture.",
  },
  "Material-UI": {
    name: "Material-UI",
    category: "UI/Styling",
    tier: "enterprise",
    tenure: "3+ Years • Enterprise Portal",
    deployments: ["Samsung R&D Institute Delhi (Sampark Vconnect 2.0)", "Shivila HR Admin"],
    description:
      "Designed and delivered complex enterprise components including multi-tab forms, customized theme palettes, dense data tables, and modal workflows for 8,000+ workforce users.",
  },
  Redux: {
    name: "Redux",
    category: "Frontend",
    tier: "enterprise",
    tenure: "3+ Years • Redux Toolkit",
    deployments: ["Capgemini (HSBC Corporate Clients)", "Shivila HR Admin"],
    description:
      "Constructed normalized global state architectures, thunks for async API workflows, and memoized selectors with Reselect for financial data platforms.",
  },
  Zustand: {
    name: "Zustand",
    category: "Frontend",
    tier: "enterprise",
    tenure: "2 Years • Lightweight State",
    deployments: ["Modern Web Apps", "Component State Managers"],
    description:
      "Created lightweight, boilerplate-free state stores with persistence middleware and selector subscriptions for instantaneous UI reactions.",
  },
  "Anti Gravity": {
    name: "Anti Gravity",
    category: "AI-Assisted Development",
    tier: "modern-ai",
    tenure: "Current Focus • Autonomous Coding",
    deployments: ["Advanced Agentic Coding Workflows", "Full-Stack Rapid Prototyping"],
    description:
      "Leveraged Google DeepMind's Antigravity autonomous coding agent with custom skills, MCP toolchains, and multi-agent coordination for rapid test-driven delivery.",
  },
  Cline: {
    name: "Cline",
    category: "AI-Assisted Development",
    tier: "modern-ai",
    tenure: "Current Focus • In-Editor AI",
    deployments: ["IDE Development", "Context-Aware Refactoring"],
    description:
      "Integrated autonomous CLI and agentic pair-programming tools for codebase refactoring, terminal task automation, and architectural reviews.",
  },
  Git: {
    name: "Git",
    category: "Tools & Infrastructure",
    tier: "daily",
    tenure: "4+ Years • Version Control",
    deployments: ["Samsung R&D", "EMB Global", "Capgemini", "Shivila"],
    description:
      "Extensive experience with branch management (GitFlow, trunk-based development), interactive rebasing, merge conflict resolution, and CI/CD triggers.",
  },
  "Shadcn/UI": {
    name: "Shadcn/UI",
    category: "UI/Styling",
    tier: "enterprise",
    tenure: "2 Years • Modern Component Systems",
    deployments: ["Modern Portals", "Command Menu Palettes", "Dashboard Prototypes"],
    description:
      "Composed accessible, Radix-based UI components with seamless Tailwind CSS utility styling and keyboard navigation compliance.",
  },
};

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
  const [viewMode, setViewMode] = useState<"grid" | "matrix" | "json">("grid");
  const [copiedJson, setCopiedJson] = useState(false);
  const [inspectedSkill, setInspectedSkill] = useState<SkillDetail | null>(null);

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

  const handleSkillClick = (skillName: string, category: string) => {
    if (SKILL_PROFILES[skillName]) {
      setInspectedSkill(SKILL_PROFILES[skillName]);
    } else {
      setInspectedSkill({
        name: skillName,
        category,
        tier: "enterprise",
        tenure: "Production Shipped",
        deployments: ["Enterprise Platforms & Client Implementations"],
        description: `Production-tested ${skillName} utilized for modular web systems, high reliability, and clean integration.`,
      });
    }
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-5xl mx-auto space-y-6 font-sans">
      {/* File Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-semibold">src/config/skills.json</span>
          <span>• {totalSkillsCount} Indexed Skills</span>
        </div>

        {/* View Mode Switcher: Bento vs Matrix vs Raw JSON */}
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
              onClick={() => setViewMode("matrix")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                viewMode === "matrix"
                  ? "bg-white/15 text-white shadow-xs"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers size={13} />
              <span>Depth Matrix</span>
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

      {/* Search & Filter Controls (for Grid & Matrix views) */}
      {viewMode !== "json" && (
        <div className="space-y-4">
          <div className="relative">
            <Search
              size={15}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills by name (e.g. React, TypeScript, AI, Redux)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30 transition-all"
            />
          </div>

          {viewMode === "grid" && (
            <div className="flex flex-wrap items-center gap-1.5">
              {filterTabs.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border ${
                    selectedCategory === cat
                      ? "bg-white text-black font-semibold border-white"
                      : "bg-white/3 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* View 1: Bento Grid Mode */}
      {viewMode === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-5 rounded-2xl bg-white/2 border border-white/10 hover:border-white/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-mono font-semibold text-white tracking-wide">
                    {cat.category}
                  </h2>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {cat.items.length} {cat.items.length === 1 ? "skill" : "skills"}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((skill) => {
                    const glowClass = skillBrandGlow[skill.name] ?? "hover:border-white/20";
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => handleSkillClick(skill.name, cat.category)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/4 border border-white/5 text-xs font-mono text-zinc-300 transition-all cursor-pointer ${glowClass}`}
                      >
                        <skill.icon size={13} className="shrink-0" />
                        <span>{skill.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-[10px] font-mono text-zinc-600 mt-4 pt-2 border-t border-white/5 flex items-center justify-between">
                <span>Click skill to inspect production footprint</span>
                <span>✓ Verified</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View 2: Seniority & Depth Matrix View */}
      {viewMode === "matrix" && (
        <div className="space-y-5">
          {/* Tier 1 */}
          <div className="p-5 rounded-2xl bg-[#0c0c11]/90 border border-violet-500/20 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                <h2 className="text-sm font-mono font-bold text-white">
                  Tier 1: Daily Production Architecture (4+ Years)
                </h2>
              </div>
              <span className="text-xs font-mono text-violet-300 px-2 py-0.5 rounded bg-violet-500/10">
                Primary Strength
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Core technologies deployed daily across high-traffic enterprise applications. Deep
              mastery of lifecycle internals, performance profiling, strict type checking, and
              design system tokens.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "React.js",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Git",
              ].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleSkillClick(name, "Frontend Core")}
                  className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-200 hover:bg-violet-500/20 transition-all cursor-pointer"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Tier 2 */}
          <div className="p-5 rounded-2xl bg-white/2 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                <h2 className="text-sm font-mono font-bold text-white">
                  Tier 2: Enterprise Shipped & State Systems (2–3 Years)
                </h2>
              </div>
              <span className="text-xs font-mono text-sky-300 px-2 py-0.5 rounded bg-sky-500/10">
                Shipped Systems
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Large-scale enterprise libraries and state orchestrators delivered in production for
              Samsung R&D, HSBC corporate clients, and commercial CRMs.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Material-UI",
                "Redux",
                "Zustand",
                "Shadcn/UI",
                "GitHub",
                "Vercel",
                "Netlify",
                "Firebase",
                "Webpack",
                "Postman",
              ].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleSkillClick(name, "Enterprise Systems")}
                  className="px-3 py-1.5 rounded-lg bg-white/4 border border-white/5 text-xs font-mono text-zinc-300 hover:bg-white/10 transition-all cursor-pointer"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Tier 3 */}
          <div className="p-5 rounded-2xl bg-white/2 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <h2 className="text-sm font-mono font-bold text-white">
                  Tier 3: Specialized Platforms & Modern AI (Current Focus)
                </h2>
              </div>
              <span className="text-xs font-mono text-emerald-300 px-2 py-0.5 rounded bg-emerald-500/10">
                Cutting-Edge
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Autonomous AI agent tooling, unified toolchains, headless content modeling, and
              streaming LLM interfaces.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                "Anti Gravity",
                "Cline",
                "PayloadCMS",
                "Hygraph",
                "Contentful",
                "Sanity",
                "AWS",
                "Jira",
                "Clickup",
              ].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleSkillClick(name, "Specialized Platforms")}
                  className="px-3 py-1.5 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-xs font-mono text-emerald-300 hover:bg-emerald-500/15 transition-all cursor-pointer"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* View 3: Raw JSON Editor Mode */}
      {viewMode === "json" && (
        <div className="p-5 rounded-2xl bg-[#09090d] border border-white/10 font-mono text-xs relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-zinc-400 mb-3">
            <span>skills.json</span>
            <button
              type="button"
              onClick={handleCopyJson}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              {copiedJson ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400">Copied JSON</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy JSON</span>
                </>
              )}
            </button>
          </div>

          <pre className="text-zinc-300 leading-relaxed overflow-x-auto p-2">
            <code>{jsonString}</code>
          </pre>
        </div>
      )}

      {/* Interactive Skill Production Inspector Modal/Drawer */}
      <AnimatePresence>
        {inspectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setInspectedSkill(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-2xl bg-[#0c0c11] border border-white/20 p-6 space-y-4 shadow-2xl relative font-mono text-xs"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">{inspectedSkill.name}</span>
                    <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px]">
                      {inspectedSkill.category}
                    </span>
                  </div>
                  <div className="text-emerald-400 text-[11px]">{inspectedSkill.tenure}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setInspectedSkill(null)}
                  className="p-1 rounded-lg bg-white/5 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X size={15} />
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 space-y-2">
                <div className="text-zinc-500 text-[10px] uppercase">Production Deployments</div>
                <div className="space-y-1.5">
                  {inspectedSkill.deployments.map((dep) => (
                    <div key={dep} className="flex items-center gap-2 text-zinc-200">
                      <Building size={12} className="text-violet-400 shrink-0" />
                      <span>{dep}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="text-zinc-500 text-[10px] uppercase">Architectural Context</div>
                <p className="text-zinc-300 leading-relaxed font-sans text-xs">
                  {inspectedSkill.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 border-t border-white/5">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 size={12} /> Production Verified
                </span>
                <button
                  type="button"
                  onClick={() => setInspectedSkill(null)}
                  className="px-3 py-1 rounded-lg bg-white text-black font-semibold cursor-pointer hover:bg-zinc-200"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
