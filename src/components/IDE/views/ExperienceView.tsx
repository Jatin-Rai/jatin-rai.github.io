import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, GitCommit, Sparkles } from "lucide-react";
import { BorderBeam } from "../../ui/border-beam";

interface RoleRelease {
  version: string;
  role: string;
  company: string;
  client?: string;
  date: string;
  status: "active" | "completed";
  metrics: string[];
  changelog: {
    type: "feat" | "perf" | "arch" | "lead" | "test";
    scope: string;
    description: string;
  }[];
}

const CAREER_RELEASES: RoleRelease[] = [
  {
    version: "v2.5.0-prod",
    role: "Frontend Engineer (Consultant)",
    company: "Adecco India",
    client: "Samsung R&D Institute Delhi",
    date: "Mar 2025 – Present",
    status: "active",
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

export function ExperienceView() {
  const [expandedReleases, setExpandedReleases] = useState<Record<number, boolean>>({
    0: true, // Most recent open by default
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

  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* File Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 font-semibold">src/careers/experience.tsx</span>
          <span>• 4 Major Deployments</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300">Production Verified</span>
        </div>
      </div>

      {/* Production Telemetry Top Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/2 border border-white/5 font-mono text-xs">
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Active Engagement</span>
          <span className="text-white font-medium text-xs">Samsung R&D</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Direct Scale</span>
          <span className="text-emerald-400 font-bold text-xs">8,000+ Users</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Perf Speedup</span>
          <span className="text-violet-400 font-bold text-xs">40–50% Faster</span>
        </div>
        <div>
          <span className="text-zinc-500 block text-[10px] uppercase">Total Experience</span>
          <span className="text-amber-400 font-bold text-xs">4+ Years</span>
        </div>
      </div>

      {/* Career Release Cards */}
      <div className="space-y-6">
        {CAREER_RELEASES.map((rel, idx) => {
          const isExpanded = !!expandedReleases[idx];
          const isPrimary = rel.status === "active";

          return (
            <motion.div
              key={rel.version}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`p-5 sm:p-6 rounded-2xl border transition-all relative overflow-hidden ${
                isPrimary
                  ? "bg-gradient-to-br from-[#121218] to-[#0a0a0f] border-violet-500/30 shadow-[0_0_35px_rgba(139,92,246,0.08)]"
                  : "bg-white/2 hover:bg-white/4 border-white/5"
              }`}
            >
              {isPrimary && (
                <BorderBeam duration={8} rx={16} colorFrom="#8b5cf6" colorTo="#06b6d4" />
              )}

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/5">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-violet-400 bg-violet-500/10 px-2 py-0.5 rounded border border-violet-500/20">
                      {rel.version}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {rel.role}
                    </h3>
                    {isPrimary && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
                        <Sparkles size={10} /> Active
                      </span>
                    )}
                  </div>
                  <div className="text-xs sm:text-sm text-zinc-300">
                    <span className="font-semibold text-white">{rel.company}</span>
                    {rel.client && <span className="text-zinc-400"> • Client: {rel.client}</span>}
                  </div>
                </div>

                <div className="text-xs font-mono text-zinc-500 shrink-0 sm:text-right">
                  {rel.date}
                </div>
              </div>

              {/* Metric Tags */}
              <div className="flex flex-wrap gap-2 pt-3">
                {rel.metrics.map((metric, mIdx) => (
                  <span
                    key={mIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/4 border border-white/5 text-zinc-300"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Changelog Toggle */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => toggleRelease(idx)}
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white font-mono transition-colors cursor-pointer"
                >
                  <GitCommit size={13} className="text-violet-400" />
                  <span>
                    {isExpanded ? "Hide Changelog" : `View ${rel.changelog.length} Changelog Items`}
                  </span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Changelog Entries */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-3 pt-3 border-t border-white/5 space-y-2 font-mono text-xs">
                        {rel.changelog.map((entry, cIdx) => (
                          <div
                            key={cIdx}
                            className="p-2.5 rounded-lg bg-black/30 border border-white/5 flex items-start gap-2.5 hover:border-white/10 transition-colors"
                          >
                            <span
                              className={`text-[10px] font-mono uppercase px-1.5 py-0.5 rounded border shrink-0 ${getTagColor(
                                entry.type,
                              )}`}
                            >
                              {entry.type}:{entry.scope}
                            </span>
                            <span className="text-zinc-300 font-sans text-xs leading-relaxed">
                              {entry.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
