import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, Terminal, Download, Sparkles } from "lucide-react";
import heroImg from "../../../assets/images/hero-character.png";
import resumePdf from "../../../assets/docs/jatinrai-resume.pdf";
import { heroData } from "../../../data";
import { BorderBeam } from "../../ui/border-beam";
import type { FileId } from "../types";

interface OverviewViewProps {
  onOpenFile: (fileId: FileId) => void;
  onToggleTerminal: () => void;
}

export function OverviewView({ onOpenFile, onToggleTerminal }: OverviewViewProps) {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-12">
      {/* Top Banner & Status Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/3 border border-white/5 text-xs text-zinc-400 font-mono">
            <MapPin size={12} className="text-violet-400" />
            <span>New Delhi, IN • UTC+5:30</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500">
          <span>file:</span>
          <span className="text-sky-400 font-medium">overview.tsx</span>
        </div>
      </div>

      {/* Main Grid: Left Intro + Right Diamond Avatar */}
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 mb-4">
            <Sparkles size={12} />
            <span>Senior / Lead Frontend Engineer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.08]">
            <span className="text-[#b1b1b8] text-2xl sm:text-3xl font-medium block mb-1">
              {heroData.greeting}
            </span>
            {heroData.name}
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-6 font-normal max-w-xl">
            {heroData.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <button
              type="button"
              onClick={() => onOpenFile("experience.tsx")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-zinc-200 hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <span>Explore Career & Scale</span>
              <ArrowRight size={14} />
            </button>

            <button
              type="button"
              onClick={() => onOpenFile("contact.sh")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs transition-all cursor-pointer"
            >
              <Mail size={14} className="text-violet-400" />
              <span>Get in Touch</span>
            </button>

            <button
              type="button"
              onClick={onToggleTerminal}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all cursor-pointer"
              title="Toggle interactive terminal"
            >
              <Terminal size={14} className="text-emerald-400" />
              <span>Shell</span>
            </button>
          </div>

          {/* Core Tech Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-zinc-500 mr-1">Daily Stack:</span>
            {["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Material-UI"].map(
              (tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-1 rounded-md bg-white/4 border border-white/5 text-zinc-300 font-mono"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
        </motion.div>

        {/* Right: Diamond Character Avatar with Radial Lighting */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center group">
            {/* Ambient Radial Mesh Glow */}
            <div className="absolute inset-0 bg-radial from-violet-600/20 via-cyan-500/15 to-transparent blur-3xl -z-10 pointer-events-none scale-125" />

            {/* Sleek Diamond Mask */}
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-[36px] shadow-[0_0_40px_rgba(255,255,255,0.06)] border border-white/20 overflow-hidden relative z-10 transition-all duration-700 group-hover:shadow-[0_0_70px_rgba(139,92,246,0.3)] group-hover:border-violet-400/50 rotate-45 transform-gpu isolate ring-1 ring-white/5">
              <img
                src={heroImg}
                alt="Jatin Rai"
                className="w-full h-full absolute inset-0 object-cover bg-black/40 backdrop-blur-md -rotate-45 scale-[1.42] transition-transform duration-700 group-hover:scale-[1.48]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Code Declaration Card (IDE Aesthetic) */}
      <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0c11]/90 border border-white/10 relative overflow-hidden font-mono text-xs">
        <BorderBeam duration={8} rx={16} colorFrom="#8b5cf6" colorTo="#38bdf8" />
        <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 text-zinc-500 text-[11px]">
          <span>TypeScript Type Declaration</span>
          <span className="text-emerald-400">✓ Type Check Passed</span>
        </div>
        <pre className="text-zinc-300 leading-relaxed overflow-x-auto whitespace-pre">
          <code>
            <span className="text-purple-400">interface</span>{" "}
            <span className="text-sky-300">SoftwareEngineer</span> {"{\n"}
            {"  "}name: <span className="text-emerald-300">&quot;Jatin Rai&quot;</span>;{"\n"}
            {"  "}experience: <span className="text-amber-300">&quot;4+ Years&quot;</span>;{"\n"}
            {"  "}currentDeployment:{" "}
            <span className="text-emerald-300">
              &quot;Samsung R&D Institute Delhi (8,000+ Users)&quot;
            </span>
            ;{"\n"}
            {"  "}impact: [
            <span className="text-emerald-300">&quot;40-50% Performance Speedup&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;AI KPI Dashboard&quot;</span>,{" "}
            <span className="text-emerald-300">&quot;Real-Time Streaming Chatbot&quot;</span>];
            {"\n"}
            {"  "}availability: <span className="text-blue-300">true</span>;{"\n"}
            {"}"}
          </code>
        </pre>
      </div>

      {/* Fast Navigation Modules */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        <div
          onClick={() => onOpenFile("experience.tsx")}
          className="p-4 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-mono text-sky-400">experience.tsx</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Samsung R&D & Career</h3>
          <p className="text-xs text-zinc-400">
            Enterprise employee portal serving 8,000+ users across 2 centers.
          </p>
        </div>

        <div
          onClick={() => onOpenFile("skills.json")}
          className="p-4 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-mono text-emerald-400">skills.json</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">29+ Technologies</h3>
          <p className="text-xs text-zinc-400">
            React, Next.js, TypeScript, Tailwind, Redux, Zustand, AI tools.
          </p>
        </div>

        <div
          onClick={() => window.open(resumePdf, "_blank", "noopener,noreferrer")}
          className="p-4 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-rose-500/30 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
            <span className="font-mono text-rose-400">resume.pdf</span>
            <Download size={13} className="group-hover:translate-y-0.5 transition-transform" />
          </div>
          <h3 className="text-sm font-semibold text-white mb-1">Download CV</h3>
          <p className="text-xs text-zinc-400">
            Official curriculum vitae with complete employment history.
          </p>
        </div>
      </div>
    </div>
  );
}
