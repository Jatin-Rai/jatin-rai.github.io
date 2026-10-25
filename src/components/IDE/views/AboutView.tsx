import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Sparkles,
  Cpu,
  Layers,
  Zap,
  ChevronDown,
  Laptop,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { aboutData } from "../../../data";
import resumePdf from "../../../assets/docs/jatinrai-resume.pdf";
import { BorderBeam } from "../../ui/border-beam";

interface ADRItem {
  id: string;
  title: string;
  status: "Accepted" | "Production-Verified";
  context: string;
  decision: string;
  consequences: string;
  metrics: string;
}

const ARCHITECTURE_DECISIONS: ADRItem[] = [
  {
    id: "ADR-001",
    title: "Server-Sent Events (SSE) vs WebSockets for Enterprise AI Chatbot",
    status: "Production-Verified",
    context:
      "The employee portal required real-time token streaming from an LLM service for HR policy queries. WebSockets required maintaining stateful TCP connections across load-balanced enterprise servers.",
    decision:
      "Adopted HTTP/2 Server-Sent Events (SSE). Leveraging native browser EventSource API, unidirectional streaming, built-in reconnection protocols, and standard HTTPS port multiplexing.",
    consequences:
      "Drastically simplified infrastructure with zero sticky-session requirement. Reconnection handles network hiccups automatically with lower server memory footprint.",
    metrics: "< 20ms First-token response latency • Zero server connection socket exhaustion",
  },
  {
    id: "ADR-002",
    title: "Granular Dynamic Code-Splitting & Virtualization in Workforce Tables",
    status: "Production-Verified",
    context:
      "Large-scale employee data grids across 2 R&D centers rendered thousands of DOM nodes simultaneously, leading to 400ms main-thread freezes and high layout thrashing.",
    decision:
      "Implemented TanStack / custom windowing combined with React.lazy route chunking and deferred state transitions via useDeferredValue.",
    consequences:
      "Only visible rows render in the DOM viewport. Background tabs and heavy reporting export modules are downloaded strictly on demand.",
    metrics: "40–50% Portal speedup • 60 FPS continuous scroll • 45% lower initial bundle size",
  },
];

export function AboutView() {
  const [expandedAdr, setExpandedAdr] = useState<string | null>("ADR-001");

  const toggleAdr = (id: string) => {
    setExpandedAdr((prev) => (prev === id ? null : id));
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* File Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">src/content/about.md</span>
          <span>• 4.8 KB</span>
          <span>• Markdown</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-zinc-400">Rendered Document</span>
        </div>
      </div>

      {/* Frontmatter Metadata Block (IDE Style) */}
      <div className="p-4 rounded-xl bg-white/2 border border-white/5 font-mono text-xs text-zinc-400 space-y-1">
        <div className="text-zinc-600 select-none">---</div>
        <div>
          <span className="text-purple-400">title:</span>{" "}
          <span className="text-zinc-200">&quot;Jatin Rai - Lead Frontend Engineer&quot;</span>
        </div>
        <div>
          <span className="text-purple-400">currentRole:</span>{" "}
          <span className="text-emerald-300">
            &quot;Frontend Engineer (Consultant) @ Samsung R&D Institute Delhi&quot;
          </span>
        </div>
        <div>
          <span className="text-purple-400">experience:</span>{" "}
          <span className="text-amber-300">&quot;4+ Years Enterprise Engineering&quot;</span>
        </div>
        <div>
          <span className="text-purple-400">status:</span>{" "}
          <span className="text-blue-300">&quot;Open to Senior / Lead Roles&quot;</span>
        </div>
        <div className="text-zinc-600 select-none">---</div>
      </div>

      {/* Current Position Callout Card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 rounded-2xl bg-linear-to-r from-violet-500/10 via-sky-500/5 to-transparent border border-violet-500/20 relative overflow-hidden"
      >
        <BorderBeam duration={9} rx={16} colorFrom="#8b5cf6" colorTo="#06b6d4" />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-violet-300 font-mono">
              <Sparkles size={13} className="text-violet-400" />
              <span>CURRENT ENTERPRISE ENGAGEMENT</span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Samsung R&D Institute Delhi
            </h2>
            <p className="text-xs text-zinc-300">
              Leading core feature engineering for Sampark Vconnect 2.0 • Serving 8,000+ active
              employees across 2 R&D centers pan-India.
            </p>
          </div>

          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-all shrink-0 shadow-md active:scale-95 cursor-pointer self-start sm:self-auto"
          >
            <Download size={13} />
            <span>Download CV</span>
          </a>
        </div>
      </motion.div>

      {/* Main Editorial Headline */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
          {aboutData.heading}
        </h1>

        <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {aboutData.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[#b1b1b8]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Architecture Decision Records (ADRs) Showcase */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-2">
            <FileText size={13} className="text-violet-400" />
            <span>Architecture Decision Records (ADRs)</span>
          </span>
          <span className="text-[11px] font-mono text-emerald-400">
            Production Engineering Case Studies
          </span>
        </div>

        <div className="space-y-3">
          {ARCHITECTURE_DECISIONS.map((adr) => {
            const isExpanded = expandedAdr === adr.id;
            return (
              <div
                key={adr.id}
                className="rounded-xl border border-white/10 bg-white/2 hover:border-white/20 transition-all overflow-hidden"
              >
                <div
                  onClick={() => toggleAdr(adr.id)}
                  className="p-4 cursor-pointer select-none flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 font-mono text-xs font-bold">
                      {adr.id}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{adr.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 hidden sm:inline-block">
                      {adr.status}
                    </span>
                    <ChevronDown
                      size={14}
                      className={`text-zinc-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 pb-4 pt-1 border-t border-white/5 bg-black/30 space-y-3 text-xs"
                    >
                      <div>
                        <div className="font-mono text-zinc-500 uppercase text-[10px] mb-1">
                          Context & Problem
                        </div>
                        <p className="text-zinc-300 leading-relaxed font-sans">{adr.context}</p>
                      </div>

                      <div>
                        <div className="font-mono text-zinc-500 uppercase text-[10px] mb-1">
                          Architectural Decision
                        </div>
                        <p className="text-zinc-300 leading-relaxed font-sans">{adr.decision}</p>
                      </div>

                      <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/15 text-emerald-300 font-mono flex items-center gap-2">
                        <CheckCircle2 size={13} className="shrink-0" />
                        <span>Outcome: {adr.metrics}</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engineering Pillars Bento Grid */}
      <div className="space-y-3 pt-4">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
          Engineering Pillars & Principles
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 w-fit">
              <Cpu size={16} />
            </div>
            <h3 className="text-sm font-semibold text-white">High-Scale React</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Architecting modular, type-safe frontend platforms supporting thousands of daily
              workforce users.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 w-fit">
              <Sparkles size={16} />
            </div>
            <h3 className="text-sm font-semibold text-white">AI & Real-Time APIs</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Integrating streaming LLM chatbots, KPI workforce predictive dashboards, and SSE event
              streams.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
              <Zap size={16} />
            </div>
            <h3 className="text-sm font-semibold text-white">Performance Auditing</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Consistently achieving 40–50% bundle and runtime speedups through profiling and lazy
              loading.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 w-fit">
              <Layers size={16} />
            </div>
            <h3 className="text-sm font-semibold text-white">State & Design Systems</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Crafting pixel-perfect design systems with Tailwind CSS v4, Context API, Redux, and
              Material-UI.
            </p>
          </div>
        </div>
      </div>

      {/* Developer Workstation & Config (.config/developer.yaml) */}
      <div className="p-5 rounded-2xl bg-[#09090d] border border-white/10 space-y-4 font-mono text-xs">
        <div className="flex items-center justify-between pb-3 border-b border-white/5 text-zinc-400">
          <span className="flex items-center gap-2 text-white">
            <Laptop size={13} className="text-violet-400" />
            <span>.config/developer.yaml • Workstation & Runtime</span>
          </span>
          <span className="text-emerald-400">✓ Calibrated</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
            <div className="text-[10px] text-zinc-500">PLATFORM / HARDWARE</div>
            <div className="font-semibold text-white">Apple Silicon (macOS)</div>
            <div className="text-[10px] text-zinc-400">Unix Core Shell</div>
          </div>

          <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
            <div className="text-[10px] text-zinc-500">PRIMARY TOOLCHAIN</div>
            <div className="font-semibold text-sky-300">Vite+ (Unified Web)</div>
            <div className="text-[10px] text-zinc-400">Rolldown & Oxlint</div>
          </div>

          <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
            <div className="text-[10px] text-zinc-500">AI AGENTIC PAIRING</div>
            <div className="font-semibold text-violet-300">Antigravity & Cline</div>
            <div className="text-[10px] text-zinc-400">DeepMind AGY Agent</div>
          </div>

          <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
            <div className="text-[10px] text-zinc-500">TYPOGRAPHY & THEME</div>
            <div className="font-semibold text-emerald-300">Inter & JetBrains Mono</div>
            <div className="text-[10px] text-zinc-400">Sleek Dark Canvas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
