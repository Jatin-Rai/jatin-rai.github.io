import { motion } from "framer-motion";
import { Download, Sparkles, Cpu, Layers, Zap } from "lucide-react";
import { aboutData } from "../../../data";
import resumePdf from "../../../assets/docs/jatinrai-resume.pdf";
import { BorderBeam } from "../../ui/border-beam";

export function AboutView() {
  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* File Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-amber-400 font-semibold">src/content/about.md</span>
          <span>• 3.2 KB</span>
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
        className="p-5 rounded-2xl bg-gradient-to-r from-violet-500/10 via-sky-500/5 to-transparent border border-violet-500/20 relative overflow-hidden"
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

      {/* Engineering Pillars Bento Grid */}
      <div className="space-y-3 pt-4">
        <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
          Engineering Pillars & Principles
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
              <Cpu size={16} />
            </div>
            <h3 className="text-xs font-semibold text-white font-mono">High-Scale React</h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Architecting modular, type-safe frontend platforms supporting thousands of daily
              workforce users.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
              <Sparkles size={16} />
            </div>
            <h3 className="text-xs font-semibold text-white font-mono">AI & Real-Time APIs</h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Integrating streaming LLM chatbots, KPI workforce predictive dashboards, and SSE event
              streams.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Zap size={16} />
            </div>
            <h3 className="text-xs font-semibold text-white font-mono">Performance Auditing</h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Consistently achieving 40–50% bundle and runtime speedups through profiling and lazy
              architectures.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white/2 border border-white/5 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <Layers size={16} />
            </div>
            <h3 className="text-xs font-semibold text-white font-mono">State & Design Systems</h3>
            <p className="text-[11px] text-zinc-400 leading-relaxed">
              Crafting pixel-perfect design systems with Tailwind CSS v4, Context API, Redux, and
              Material-UI.
            </p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
        {aboutData.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white/2 border border-white/5 flex flex-col gap-1"
          >
            <span className="text-3xl font-bold font-mono tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-100 to-violet-300">
              {stat.value}
            </span>
            <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold font-mono">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
