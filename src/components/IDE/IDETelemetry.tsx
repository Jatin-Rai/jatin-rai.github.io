import { useState } from "react";
import { Download, Mail, Copy, Check, Sparkles, Activity, ShieldCheck } from "lucide-react";
import { aboutData } from "../../data";
import resumePdf from "../../assets/docs/jatinrai-resume.pdf";

export function IDETelemetry() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText("jatinrai258@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-80 border-l border-white/10 bg-[#0c0c10]/70 backdrop-blur-xl p-4 flex flex-col gap-5 overflow-y-auto shrink-0 select-none">
      {/* Telemetry Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold">
          <Activity size={14} className="text-violet-400" />
          <span>System Telemetry</span>
        </div>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          ONLINE
        </span>
      </div>

      {/* Primary Role & Center Card */}
      <div className="p-3.5 rounded-xl bg-white/3 border border-white/5 space-y-2">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-white">
          <Sparkles size={13} className="text-violet-400" />
          <span>Primary Deployment</span>
        </div>
        <p className="text-xs text-zinc-300 font-medium">Samsung R&D Institute Delhi</p>
        <p className="text-[11px] text-zinc-400 leading-relaxed">
          Sampark Vconnect 2.0 • Serving 8,000+ active enterprise users across 2 R&D centers
          pan-India.
        </p>
      </div>

      {/* Impact Stats Grid */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
          Performance Indicators
        </span>
        <div className="grid grid-cols-1 gap-2">
          {aboutData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white/2 border border-white/5 flex items-center justify-between"
            >
              <span className="text-xs text-zinc-400 font-medium">{stat.label}</span>
              <span className="text-lg font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-white to-violet-300">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Verification & Quality Card */}
      <div className="p-3 rounded-xl bg-white/2 border border-white/5 flex items-start gap-2.5">
        <ShieldCheck size={16} className="text-emerald-400 shrink-0 mt-0.5" />
        <div className="text-[11px] text-zinc-400 leading-relaxed">
          Production-tested React 19 architecture, strict TypeScript typing, and Vite+ unified
          toolchain.
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-2 pt-2 border-t border-white/5 mt-auto">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold">
          Quick Actions
        </span>

        <button
          type="button"
          onClick={handleCopyEmail}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 transition-all cursor-pointer font-medium"
        >
          <div className="flex items-center gap-2">
            <Mail size={14} className="text-violet-400" />
            <span>{copied ? "Copied to Clipboard!" : "Copy Email Address"}</span>
          </div>
          {copied ? (
            <Check size={13} className="text-emerald-400" />
          ) : (
            <Copy size={13} className="text-zinc-500" />
          )}
        </button>

        <a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-200 transition-all cursor-pointer font-medium"
        >
          <div className="flex items-center gap-2">
            <Download size={14} className="text-sky-400" />
            <span>Download Resumé (PDF)</span>
          </div>
          <span className="text-[10px] font-mono text-zinc-500">CV</span>
        </a>
      </div>
    </div>
  );
}
