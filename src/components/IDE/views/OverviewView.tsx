import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Terminal,
  Sparkles,
  Cpu,
  Layers,
  Zap,
  Copy,
  Check,
  Code2,
  Play,
  Gauge,
  ExternalLink,
  ShieldCheck,
  Clock,
  Radio,
  FileCode,
} from "lucide-react";
import resumePdf from "../../../assets/docs/jatinrai-resume.pdf";
import { BorderBeam } from "../../ui/border-beam";
import type { FileId } from "../types";

interface OverviewViewProps {
  onOpenFile: (fileId: FileId) => void;
  onToggleTerminal: () => void;
}

type SandboxTab = "preview" | "code" | "architecture" | "telemetry";

export function OverviewView({ onOpenFile, onToggleTerminal }: OverviewViewProps) {
  const [activeTab, setActiveTab] = useState<SandboxTab>("preview");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  // Interactive Playground state
  const [aiStreaming, setAiStreaming] = useState(true);
  const [virtualizedList, setVirtualizedList] = useState(true);
  const [userLoad, setUserLoad] = useState<"8k" | "15k" | "25k">("8k");

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText("jatinrai258@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopySnippet = () => {
    const code = `// Enterprise React 19 State Architecture (Samsung R&D Portal)
export function useRealtimeKPIStream(centerId: string) {
  const [kpiData, setKpiData] = useState<KPIPayload | null>(null);

  useEffect(() => {
    const eventSource = new EventSource(\`/api/v1/kpi/stream?center=\${centerId}\`);
    eventSource.onmessage = (event) => {
      const update = JSON.parse(event.data);
      setKpiData((prev) => ({ ...prev, ...update }));
    };
    return () => eventSource.close();
  }, [centerId]);

  return { kpiData, isLive: true };
}`;
    void navigator.clipboard.writeText(code);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  // Simulated metrics based on playground controls
  const latency = aiStreaming ? (virtualizedList ? "14ms" : "32ms") : "78ms";
  const fps = virtualizedList ? "60 FPS" : "44 FPS";
  const bundleWeight = userLoad === "8k" ? "12.4 kB" : userLoad === "15k" ? "14.1 kB" : "16.8 kB";

  return (
    <div className="p-5 md:p-8 max-w-6xl mx-auto space-y-8 font-sans">
      {/* Top Mission Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
        <div className="flex flex-wrap items-center gap-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for Senior / Lead Roles</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-xs text-zinc-400 font-mono">
            <MapPin size={11} className="text-violet-400" />
            <span>New Delhi, IN • UTC+5:30</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/3 border border-white/5 text-xs text-zinc-400 font-mono">
            <Radio size={11} className="text-sky-400 animate-pulse" />
            <span>Active Deploy: Samsung R&D Delhi</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
          <span>file:</span>
          <span className="text-sky-400 font-medium">overview.tsx</span>
        </div>
      </div>

      {/* Hero Headline & Direct Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300">
            <Sparkles size={12} />
            <span>Lead Frontend Engineer & Modern Web Architect</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Jatin Rai
          </h1>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            Engineering high-scale, resilient frontend systems. Currently driving core employee
            portal features at{" "}
            <strong className="text-white font-semibold">Samsung R&D Institute Delhi</strong>,
            serving 8,000+ daily workforce users with React 19, TypeScript, and streaming AI
            architectures.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => onOpenFile("experience.tsx")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-zinc-200 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            <span>Explore Career & Scale</span>
            <ArrowRight size={13} />
          </button>

          <button
            type="button"
            onClick={onToggleTerminal}
            className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-all cursor-pointer"
            title="Toggle interactive developer terminal"
          >
            <Terminal size={13} className="text-emerald-400" />
            <span>Terminal</span>
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
            title="Copy email address"
          >
            {copiedEmail ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Email</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => window.open(resumePdf, "_blank", "noopener,noreferrer")}
            className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-all cursor-pointer"
            title="Download PDF Resumé"
          >
            <span>CV</span>
            <ExternalLink size={12} className="text-zinc-400" />
          </button>
        </div>
      </div>

      {/* Main Bento Grid: 2 Columns on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Bento Card 1: Interactive Component Playground / Code Sandbox (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0c0c11]/90 border border-white/10 overflow-hidden flex flex-col relative">
          <BorderBeam duration={10} rx={16} colorFrom="#8b5cf6" colorTo="#38bdf8" />

          {/* Sandbox Header with View Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-400/80 animate-pulse" />
              <span className="text-xs font-mono font-medium text-white">
                Interactive Architecture Sandbox
              </span>
            </div>

            {/* Sandbox Tabs */}
            <div className="flex items-center gap-1 bg-black/40 p-0.5 rounded-lg border border-white/5 text-xs font-mono">
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === "preview"
                    ? "bg-violet-600 text-white font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Play size={11} />
                <span>Simulate</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === "code"
                    ? "bg-violet-600 text-white font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Code2 size={11} />
                <span>TSX Code</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("architecture")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === "architecture"
                    ? "bg-violet-600 text-white font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Layers size={11} />
                <span>Topology</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("telemetry")}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  activeTab === "telemetry"
                    ? "bg-violet-600 text-white font-medium"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <Gauge size={11} />
                <span>Vitals</span>
              </button>
            </div>
          </div>

          {/* Sandbox Body */}
          <div className="p-5 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeTab === "preview" && (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-zinc-400 font-mono">
                      Target: Enterprise Workforce KPI Engine
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Live Reactive State
                    </span>
                  </div>

                  {/* Interactive Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    {/* Toggle 1: AI Streaming */}
                    <div
                      onClick={() => setAiStreaming(!aiStreaming)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer select-none ${
                        aiStreaming
                          ? "bg-violet-500/10 border-violet-500/40 text-violet-200"
                          : "bg-white/2 border-white/5 text-zinc-400 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[11px]">SSE AI Streaming</span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            aiStreaming ? "bg-violet-400" : "bg-zinc-600"
                          }`}
                        />
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-tight">
                        {aiStreaming ? "Active • Real-time" : "Standard Polling"}
                      </p>
                    </div>

                    {/* Toggle 2: Virtualized List */}
                    <div
                      onClick={() => setVirtualizedList(!virtualizedList)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer select-none ${
                        virtualizedList
                          ? "bg-sky-500/10 border-sky-500/40 text-sky-200"
                          : "bg-white/2 border-white/5 text-zinc-400 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono text-[11px]">Virtual Windowing</span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            virtualizedList ? "bg-sky-400" : "bg-zinc-600"
                          }`}
                        />
                      </div>
                      <p className="text-[11px] text-zinc-400 leading-tight">
                        {virtualizedList ? "60 FPS • 0 Layout Thrash" : "Uncapped DOM nodes"}
                      </p>
                    </div>

                    {/* Selector: Scale */}
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5 text-zinc-300">
                      <div className="flex items-center justify-between mb-1 text-[11px] font-mono text-zinc-400">
                        <span>Workforce Load</span>
                      </div>
                      <div className="flex items-center gap-1 pt-0.5">
                        {(["8k", "15k", "25k"] as const).map((load) => (
                          <button
                            key={load}
                            type="button"
                            onClick={() => setUserLoad(load)}
                            className={`flex-1 text-[10px] font-mono py-0.5 rounded cursor-pointer transition-all ${
                              userLoad === load
                                ? "bg-white text-black font-semibold"
                                : "bg-white/5 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {load}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Real-Time Telemetry Bar */}
                  <div className="p-3.5 rounded-xl bg-black/50 border border-white/5 grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">
                        Render Latency
                      </div>
                      <div className="text-base font-mono font-bold text-emerald-400">
                        {latency}
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">
                        Frame Rate
                      </div>
                      <div className="text-base font-mono font-bold text-sky-400">{fps}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase">
                        Gzip Transfer
                      </div>
                      <div className="text-base font-mono font-bold text-violet-400">
                        {bundleWeight}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "code" && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <FileCode size={12} />
                      useRealtimeKPIStream.ts
                    </span>
                    <button
                      type="button"
                      onClick={handleCopySnippet}
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white cursor-pointer transition-colors"
                    >
                      {copiedSnippet ? (
                        <>
                          <Check size={11} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={11} />
                          <span>Copy Hook</span>
                        </>
                      )}
                    </button>
                  </div>

                  <pre className="p-3.5 rounded-xl bg-black/60 border border-white/5 text-[11px] font-mono text-zinc-300 overflow-x-auto leading-relaxed">
                    <code>
                      <span className="text-purple-400">export function</span>{" "}
                      <span className="text-sky-300">useRealtimeKPIStream</span>(centerId:{" "}
                      <span className="text-amber-300">string</span>) {"{\n"}
                      {"  "}
                      <span className="text-purple-400">const</span> [kpiData, setKpiData] ={" "}
                      <span className="text-blue-300">useState</span>&lt;
                      <span className="text-emerald-300">KPIPayload</span>&gt;(null);{"\n\n"}
                      {"  "}
                      <span className="text-blue-300">useEffect</span>(() =&gt; {"{\n"}
                      {"    "}
                      <span className="text-purple-400">const</span> sse ={" "}
                      <span className="text-purple-400">new</span>{" "}
                      <span className="text-sky-300">EventSource</span>(
                      <span className="text-emerald-300">
                        `/api/v1/kpi/stream?center=$&#123;centerId&#125;`
                      </span>
                      );{"\n"}
                      {"    "}sse.onmessage = (event) =&gt; setKpiData(JSON.parse(event.data));
                      {"\n"}
                      {"    "}
                      <span className="text-purple-400">return</span> () =&gt; sse.close();{"\n"}
                      {"  "}&#125;, [centerId]);{"\n\n"}
                      {"  "}
                      <span className="text-purple-400">return</span> &#123; kpiData, isLive:{" "}
                      <span className="text-blue-300">true</span> &#125;;{"\n"}
                      &#125;
                    </code>
                  </pre>
                </motion.div>
              )}

              {activeTab === "architecture" && (
                <motion.div
                  key="architecture"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3.5"
                >
                  <div className="text-xs font-mono text-zinc-400">
                    Production Data Flow • Sampark Vconnect 2.0
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5 space-y-1">
                      <div className="text-[10px] text-zinc-500">CLIENT LAYER</div>
                      <div className="font-semibold text-white">React 19 + MUI</div>
                      <div className="text-[10px] text-zinc-400">8,000+ Endpoints</div>
                    </div>
                    <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 space-y-1">
                      <div className="text-[10px] text-violet-400">STREAMING PROXY</div>
                      <div className="font-semibold text-violet-200">SSE Event Stream</div>
                      <div className="text-[10px] text-violet-300">&lt; 20ms Latency</div>
                    </div>
                    <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 space-y-1">
                      <div className="text-[10px] text-sky-400">AI INFERENCE</div>
                      <div className="font-semibold text-sky-200">LLM KPI Copilot</div>
                      <div className="text-[10px] text-sky-300">HR Analytics</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                      <div className="text-[10px] text-emerald-400">REPORT ENGINE</div>
                      <div className="font-semibold text-emerald-200">7+ Excel Pipelines</div>
                      <div className="text-[10px] text-emerald-300">Zero Memory Leak</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "telemetry" && (
                <motion.div
                  key="telemetry"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-3"
                >
                  <div className="text-xs font-mono text-zinc-400">
                    Production Core Web Vitals & Toolchain Benchmarks
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                      <div className="text-[10px] font-mono text-zinc-500">LIGHTHOUSE</div>
                      <div className="text-xl font-mono font-bold text-emerald-400">100 / 100</div>
                      <div className="text-[10px] text-zinc-400">All Metrics Green</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                      <div className="text-[10px] font-mono text-zinc-500">LCP</div>
                      <div className="text-xl font-mono font-bold text-emerald-400">0.8s</div>
                      <div className="text-[10px] text-zinc-400">Largest Paint</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                      <div className="text-[10px] font-mono text-zinc-500">INP</div>
                      <div className="text-xl font-mono font-bold text-emerald-400">42ms</div>
                      <div className="text-[10px] text-zinc-400">Next Paint Delay</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                      <div className="text-[10px] font-mono text-zinc-500">BUNDLE GZIP</div>
                      <div className="text-xl font-mono font-bold text-sky-400">12.4 kB</div>
                      <div className="text-[10px] text-zinc-400">Tree-shaken CSS</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Sandbox Footer Note */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-500 mt-3">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-emerald-400" />
                Vite+ Unified Toolchain • Oxlint & Vitest Verified
              </span>
              <button
                type="button"
                onClick={() => onOpenFile("experience.tsx")}
                className="text-violet-400 hover:text-violet-300 cursor-pointer flex items-center gap-1"
              >
                <span>Inspect Full Production Stack</span>
                <ArrowRight size={11} />
              </button>
            </div>
          </div>
        </div>

        {/* Bento Card 2: Samsung R&D Flagship Engagement (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-[#0c0c11]/90 border border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300">
                <Cpu size={12} />
                <span>Primary Deployment</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 font-medium">v2.5.0-prod</span>
            </div>

            <div>
              <h2 className="text-lg font-bold text-white mb-1">Samsung R&D Institute Delhi</h2>
              <p className="text-xs font-mono text-zinc-400 mb-3">
                Sampark Vconnect 2.0 • Enterprise Employee Portal
              </p>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Leading feature engineering across 2 R&D centers pan-India. Architected real-time
                streaming AI assistant, KPI workforce analytics dashboard, and automated
                multi-report generation.
              </p>
            </div>

            {/* 4 Metric Chips */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                <div className="text-xl font-bold font-mono text-white">8,000+</div>
                <div className="text-[11px] text-zinc-400">Active Workforce Users</div>
              </div>
              <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                <div className="text-xl font-bold font-mono text-emerald-400">40–50%</div>
                <div className="text-[11px] text-zinc-400">Runtime Speedup</div>
              </div>
              <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                <div className="text-xl font-bold font-mono text-sky-400">7+ Types</div>
                <div className="text-[11px] text-zinc-400">Excel Reporting Modules</div>
              </div>
              <div className="p-3 rounded-xl bg-white/2 border border-white/5">
                <div className="text-xl font-bold font-mono text-violet-400">2 Centers</div>
                <div className="text-[11px] text-zinc-400">Pan-India Deployment</div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 mt-4 flex items-center justify-between">
            <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1.5">
              <Clock size={12} className="text-amber-400" />
              May 2025 – Present
            </span>
            <button
              type="button"
              onClick={() => onOpenFile("experience.tsx")}
              className="text-xs font-medium text-white hover:text-sky-300 flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>View Changelog</span>
              <ArrowRight size={12} />
            </button>
          </div>
        </div>

        {/* Bento Card 3: Core Technology Ecosystem (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-[#0c0c11]/90 border border-white/10 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-white">
                <Zap size={13} className="text-amber-400" />
                <span>Core Daily Stack</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenFile("skills.json")}
                className="text-[11px] font-mono text-emerald-400 hover:text-emerald-300 cursor-pointer"
              >
                30 skills →
              </button>
            </div>

            <div className="space-y-2.5 pt-1">
              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1.5">
                  Frontend & Architecture
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["React 19", "Next.js", "TypeScript", "Tailwind CSS v4"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/4 border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1.5">
                  State & Design Systems
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Context API", "Redux", "Zustand", "Material-UI", "Shadcn/UI"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/4 border border-white/5 text-xs font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1.5">
                  AI & Modern Toolchain
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Vite+", "Rolldown", "Streaming APIs", "Anti Gravity", "Cline"].map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded-md bg-white/4 border border-white/5 text-xs font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-500 mt-3">
            Strict TypeScript • Zero Runtime Warnings
          </div>
        </div>

        {/* Bento Card 4: Career Track Milestones (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-[#0c0c11]/90 border border-white/10 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-white">
                <Layers size={13} className="text-sky-400" />
                <span>Career Progression</span>
              </div>
              <span className="text-[11px] font-mono text-zinc-400">4+ Years</span>
            </div>

            <div className="space-y-2 pt-1">
              <div className="p-2.5 rounded-xl bg-white/3 border border-white/5 flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-white">Samsung R&D Institute</div>
                  <div className="text-[11px] text-zinc-400">Frontend Engineer (Consultant)</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10">
                  Current
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/2 border border-white/5 flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-zinc-300">RightO / EMB Global</div>
                  <div className="text-[11px] text-zinc-400">React.js Developer</div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">2024–25</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/2 border border-white/5 flex items-start justify-between gap-2">
                <div>
                  <div className="text-xs font-semibold text-zinc-300">Capgemini (HSBC)</div>
                  <div className="text-[11px] text-zinc-400">Associate Software Engineer</div>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">2022–24</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 mt-3">
            <span>Shivila (2021–22)</span>
            <button
              type="button"
              onClick={() => onOpenFile("experience.tsx")}
              className="text-sky-400 hover:text-sky-300 cursor-pointer flex items-center gap-1"
            >
              <span>Full History</span>
              <ArrowRight size={11} />
            </button>
          </div>
        </div>

        {/* Bento Card 5: Engineering Pillars & Contact CTA (4 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-[#0c0c11]/90 border border-white/10 p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-white">
                <Sparkles size={13} className="text-violet-400" />
                <span>Engineering Philosophy</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">100% Quality</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed pt-1">
              Building software that pairs{" "}
              <strong className="text-white">exceptional UX craft</strong> with{" "}
              <strong className="text-white">enterprise-grade performance</strong>. Focused on
              zero-drift component libraries, resilient state management, and ergonomic developer
              experiences.
            </p>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                <Check size={12} className="text-emerald-400" />
                <span>Enterprise Scale Profiling & Trimming</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                <Check size={12} className="text-emerald-400" />
                <span>Streaming AI & Real-Time Event Systems</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                <Check size={12} className="text-emerald-400" />
                <span>Fast Mentorship & Team Acceleration</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between mt-3">
            <button
              type="button"
              onClick={() => onOpenFile("about.md")}
              className="text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              about.md →
            </button>
            <button
              type="button"
              onClick={() => onOpenFile("contact.sh")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs transition-all cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight size={11} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
