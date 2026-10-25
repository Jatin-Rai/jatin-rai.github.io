import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  GitBranch,
  Layers,
  Users,
  Zap,
  Building,
  CheckCircle2,
  Tag,
  Filter,
} from "lucide-react";
import { BorderBeam } from "../../ui/border-beam";

type ChangelogType = "feat" | "perf" | "arch" | "lead" | "test";

interface ChangelogItem {
  type: ChangelogType;
  scope: string;
  description: string;
}

interface RoleRelease {
  version: string;
  role: string;
  company: string;
  client?: string;
  date: string;
  status: "active" | "completed";
  branch: string;
  commitHash: string;
  metrics: string[];
  changelog: ChangelogItem[];
}

const CAREER_RELEASES: RoleRelease[] = [
  {
    version: "v2.5.0-prod",
    role: "Frontend Engineer (Consultant)",
    company: "Adecco India",
    client: "Samsung R&D Institute Delhi",
    date: "Mar 2025 – Present",
    status: "active",
    branch: "samsung/vconnect-prod",
    commitHash: "e4f9b1c",
    metrics: ["👥 8,000+ Users", "⚡ 40–50% Speedup", "🤖 AI Chatbot", "📊 7+ Excel Modules"],
    changelog: [
      {
        type: "lead",
        scope: "platform",
        description:
          "Leading feature development for Sampark Vconnect 2.0, a React & Material UI enterprise employee portal serving 8,000+ users across 2 Samsung R&D centers pan-India (3,000+ users at Delhi).",
      },
      {
        type: "feat",
        scope: "ai-kpi",
        description:
          "Developed an AI-powered KPI insights dashboard for People Partners, surfacing workforce analytics and performance trends to support data-driven HR decision-making.",
      },
      {
        type: "feat",
        scope: "ai-chatbot",
        description:
          "Built an AI chatbot integrated with a streaming API for real-time response delivery, assisting employees with HR policy queries and reducing manual HR support tickets.",
      },
      {
        type: "feat",
        scope: "streaming",
        description:
          "Integrated live event streaming API into the portal, enabling real-time event updates and announcements across all branch deployments.",
      },
      {
        type: "feat",
        scope: "reporting",
        description:
          "Built a comprehensive Excel reporting module covering 7+ report types (regular attendance, contractual, intern, health, and vendor summaries) for workforce management.",
      },
      {
        type: "perf",
        scope: "optimization",
        description:
          "Improved portal performance by 40–50% across key components through targeted refactoring, lazy loading, re-render optimization, and bundle trimming.",
      },
      {
        type: "arch",
        scope: "state",
        description:
          "Architected scalable state management using Context API, reducing prop-drilling complexity and improving maintainability across growing feature surfaces.",
      },
      {
        type: "lead",
        scope: "mentorship",
        description:
          "Mentored 2 interns and onboarded 2 fresher engineers on React best practices, component patterns, and code review standards.",
      },
    ],
  },
  {
    version: "v2.0.0",
    role: "React.js Developer",
    company: "RightO Services Pvt. Ltd.",
    client: "EMB Global",
    date: "May 2024 – Jan 2025",
    status: "completed",
    branch: "emb-global/crm-core",
    commitHash: "a7d832e",
    metrics: ["📈 Real-Time CRM", "🚀 Next.js SSR", "⚡ 35% Faster Fetch", "👥 5+ Dev Team"],
    changelog: [
      {
        type: "arch",
        scope: "crm-ssr",
        description:
          "Architected and delivered core CRM modules (dashboards, reporting, client management) using Next.js with SSR, boosting application speed for EMB Global.",
      },
      {
        type: "feat",
        scope: "analytics",
        description:
          "Built data-rich reporting dashboards using Recharts, featuring real-time data visualization across key business metrics.",
      },
      {
        type: "feat",
        scope: "data-grid",
        description:
          "Implemented client management interfaces with dynamic search, filtering, and pagination to handle large-scale CRM datasets efficiently.",
      },
      {
        type: "feat",
        scope: "estimation",
        description:
          "Developed client-side automated cost estimation logic, enabling real-time calculations directly in the UI without API roundtrips.",
      },
      {
        type: "perf",
        scope: "caching",
        description:
          "Optimized API integration patterns and implemented efficient caching strategies, reducing data fetch times by 35%.",
      },
    ],
  },
  {
    version: "v1.5.0",
    role: "Software Engineer",
    company: "Capgemini Technology Services Limited",
    client: "HSBC & Morgan Stanley",
    date: "May 2022 – May 2024",
    status: "completed",
    branch: "capgemini/banking-apac",
    commitHash: "f1c045b",
    metrics: ["🏦 HSBC Investment Banking", "🧪 Morgan Stanley QA", "🌐 APAC Cross-Functional"],
    changelog: [
      {
        type: "feat",
        scope: "investment-banking",
        description:
          "Enhanced investment banking dashboards for HSBC corporate clients, improving UI, refining data visualizations, and implementing advanced finance filters.",
      },
      {
        type: "test",
        scope: "automation",
        description:
          "Developed 4 automated test scripts for Morgan Stanley using Python and Selenium, improving testing efficiency and reducing manual QA effort.",
      },
      {
        type: "arch",
        scope: "apis",
        description:
          "Collaborated with cross-functional teams across the APAC region to integrate RESTful APIs and microservices securely.",
      },
    ],
  },
  {
    version: "v1.0.0",
    role: "React Developer",
    company: "Shivila Technologies Pvt. Ltd.",
    date: "Jan 2022 – May 2022",
    status: "completed",
    branch: "shivila/hr-admin",
    commitHash: "90b218a",
    metrics: ["👥 8-Member Team Lead", "📊 MUI Data Grids", "⚡ Redux Architecture"],
    changelog: [
      {
        type: "lead",
        scope: "team-lead",
        description:
          "Assigned and led an 8-member frontend team, successfully delivering and deploying client projects ahead of schedule.",
      },
      {
        type: "feat",
        scope: "hr-admin",
        description:
          "Developed a responsive HR admin dashboard using React and Material-UI with MUI Data Grids for advanced sorting and filtering.",
      },
      {
        type: "arch",
        scope: "redux",
        description:
          "Managed complex application state using Redux, ensuring predictable data flow across HR workflows.",
      },
    ],
  },
];

type ViewMode = "releases" | "git-graph";

export function ExperienceView() {
  const [viewMode, setViewMode] = useState<ViewMode>("releases");
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedReleases, setExpandedReleases] = useState<Record<number, boolean>>({
    0: true,
  });

  const toggleRelease = (idx: number) => {
    setExpandedReleases((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getTagColor = (type: string) => {
    switch (type) {
      case "feat":
        return "text-sky-400 bg-sky-500/10 border-sky-500/20";
      case "perf":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "arch":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20";
      case "lead":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "test":
        return "text-rose-400 bg-rose-500/10 border-rose-500/20";
      default:
        return "text-zinc-400 bg-white/5 border-white/10";
    }
  };

  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: 0,
      feat: 0,
      perf: 0,
      arch: 0,
      lead: 0,
      test: 0,
    };
    CAREER_RELEASES.forEach((rel) => {
      rel.changelog.forEach((item) => {
        counts.all += 1;
        if (counts[item.type] !== undefined) {
          counts[item.type] += 1;
        }
      });
    });
    return counts;
  }, []);

  return (
    <div className="p-5 md:p-8 max-w-5xl mx-auto space-y-7 font-sans">
      {/* Top Breadcrumb & Status Pill */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/5 text-xs font-mono">
        <div className="flex items-center gap-2 text-zinc-400">
          <span className="text-violet-400">src/careers/experience.tsx</span>
          <span>•</span>
          <span className="text-zinc-500">Production Deployments & Changelogs</span>
        </div>

        <div className="flex items-center gap-2">
          {/* View Mode Toggle: Releases vs Git Graph */}
          <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setViewMode("releases")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === "releases"
                  ? "bg-violet-600 text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers size={12} />
              <span>Release Notes</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("git-graph")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                viewMode === "git-graph"
                  ? "bg-violet-600 text-white font-medium"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <GitBranch size={12} />
              <span>Git Graph</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Production Impact Metric Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Users size={16} />
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-white">8,000+</div>
            <div className="text-[11px] text-zinc-400">Workforce Scale</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Zap size={16} />
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-emerald-400">40–50%</div>
            <div className="text-[11px] text-zinc-400">Runtime Speedup</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
            <Building size={16} />
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-white">4 Companies</div>
            <div className="text-[11px] text-zinc-400">4+ Years Shipped</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-white/2 border border-white/5 flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <CheckCircle2 size={16} />
          </div>
          <div>
            <div className="text-lg font-bold font-mono text-amber-300">100% CSAT</div>
            <div className="text-[11px] text-zinc-400">Production Reliability</div>
          </div>
        </div>
      </div>

      {/* Filter Chips Bar (Category / Scope) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="flex items-center gap-1 text-zinc-500 mr-1 text-[11px]">
            <Filter size={11} />
            Filter Log:
          </span>
          {[
            { id: "all", label: "All Items", count: tagCounts.all },
            { id: "feat", label: "feat: Features & AI", count: tagCounts.feat },
            { id: "perf", label: "perf: Performance", count: tagCounts.perf },
            { id: "arch", label: "arch: Architecture", count: tagCounts.arch },
            { id: "lead", label: "lead: Leadership", count: tagCounts.lead },
            { id: "test", label: "test: Automation", count: tagCounts.test },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveFilter(item.id)}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer border text-xs flex items-center gap-1.5 ${
                activeFilter === item.id
                  ? "bg-white text-black font-semibold border-white"
                  : "bg-white/3 text-zinc-400 border-white/5 hover:border-white/20 hover:text-white"
              }`}
            >
              <span>{item.label}</span>
              <span
                className={`text-[10px] px-1 rounded ${
                  activeFilter === item.id ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"
                }`}
              >
                {item.count}
              </span>
            </button>
          ))}
        </div>

        <div className="text-xs font-mono text-zinc-500">
          Showing {activeFilter === "all" ? "all" : activeFilter} entries
        </div>
      </div>

      {/* Content Rendering: Releases Mode vs Git Graph Mode */}
      {viewMode === "releases" ? (
        <div className="space-y-5">
          {CAREER_RELEASES.map((rel, idx) => {
            const isExpanded = expandedReleases[idx] ?? false;
            const filteredChangelog =
              activeFilter === "all"
                ? rel.changelog
                : rel.changelog.filter((c) => c.type === activeFilter);

            if (filteredChangelog.length === 0 && activeFilter !== "all") {
              return null;
            }

            return (
              <div
                key={rel.version}
                className={`rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                  rel.status === "active"
                    ? "bg-[#0c0c11]/90 border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.06)]"
                    : "bg-[#0a0a0e]/80 border-white/10 hover:border-white/20"
                }`}
              >
                {rel.status === "active" && (
                  <BorderBeam duration={10} rx={16} colorFrom="#8b5cf6" colorTo="#38bdf8" />
                )}

                {/* Release Card Header */}
                <div
                  onClick={() => toggleRelease(idx)}
                  className="p-5 sm:p-6 cursor-pointer select-none flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-semibold">
                        {rel.version}
                      </span>
                      <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                        {rel.role}
                      </h2>
                      {rel.status === "active" && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live Deployment
                        </span>
                      )}
                    </div>

                    <div className="text-xs sm:text-sm text-zinc-400 flex flex-wrap items-center gap-2">
                      <span className="font-medium text-white">{rel.company}</span>
                      {rel.client && (
                        <>
                          <span>•</span>
                          <span className="text-sky-300">Client: {rel.client}</span>
                        </>
                      )}
                      <span>•</span>
                      <span className="font-mono text-xs text-zinc-500">{rel.branch}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3">
                    <span className="text-xs font-mono text-zinc-400">{rel.date}</span>
                    <div
                      className={`p-1.5 rounded-lg bg-white/5 text-zinc-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>

                {/* Metrics Badges Bar */}
                <div className="px-5 sm:px-6 pb-4 flex flex-wrap gap-2 border-b border-white/5">
                  {rel.metrics.map((m) => (
                    <span
                      key={m}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/3 border border-white/5 text-zinc-300 font-mono"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Expandable Changelog Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="p-5 sm:p-6 bg-black/30 space-y-3"
                    >
                      <div className="text-xs font-mono text-zinc-500 mb-2 flex items-center justify-between">
                        <span>Changelog commits ({filteredChangelog.length}):</span>
                        <span className="text-sky-400 font-mono text-[11px]">
                          commit {rel.commitHash}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {filteredChangelog.map((c, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-3 rounded-xl bg-white/2 border border-white/5 flex items-start gap-3 hover:bg-white/4 transition-colors"
                          >
                            <span
                              className={`text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded border shrink-0 mt-0.5 ${getTagColor(
                                c.type,
                              )}`}
                            >
                              {c.type}:{c.scope}
                            </span>
                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                              {c.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      ) : (
        /* Git Graph Visualizer Mode */
        <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0c11]/90 border border-white/10 space-y-5 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-white/5 text-zinc-400 text-xs">
            <span className="flex items-center gap-2 text-white">
              <GitBranch size={13} className="text-violet-400" />
              <span>Career Git Graph • 4 Release Branches</span>
            </span>
            <span className="text-emerald-400">HEAD -&gt; main</span>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-linear-to-b before:from-violet-500 before:via-sky-500 before:to-zinc-700">
            {CAREER_RELEASES.map((rel) => (
              <div key={rel.version} className="relative group">
                {/* Commit Dot */}
                <div
                  className={`absolute -left-4.75 sm:-left-5.75 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all ${
                    rel.status === "active"
                      ? "bg-violet-500 border-white shadow-[0_0_12px_rgba(139,92,246,0.8)] scale-110"
                      : "bg-black border-zinc-500 group-hover:border-sky-400"
                  }`}
                />

                <div className="p-4 rounded-xl bg-white/2 border border-white/5 hover:border-violet-500/30 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sky-400 font-bold">{rel.commitHash}</span>
                      <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[11px]">
                        tag: {rel.version}
                      </span>
                      <span className="text-zinc-500 font-mono text-[11px]">({rel.branch})</span>
                    </div>
                    <span className="text-zinc-500 text-[11px]">{rel.date}</span>
                  </div>

                  <div className="text-sm font-semibold text-white">
                    {rel.role} • <span className="text-zinc-400 font-normal">{rel.company}</span>
                  </div>

                  <div className="text-xs text-zinc-400 flex flex-wrap gap-2 pt-1">
                    {rel.changelog.slice(0, 3).map((c, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/3 border border-white/5 text-[11px] text-zinc-300 flex items-center gap-1"
                      >
                        <Tag size={10} className="text-violet-400" />
                        {c.type}:{c.scope}
                      </span>
                    ))}
                    {rel.changelog.length > 3 && (
                      <span className="text-zinc-500 text-[11px] py-0.5">
                        +{rel.changelog.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
