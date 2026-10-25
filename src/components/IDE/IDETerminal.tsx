import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import type { FileId } from "./types";
import resumePdf from "../../assets/docs/jatinrai-resume.pdf";

interface IDETerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenFile: (fileId: FileId) => void;
}

interface LogEntry {
  type: "input" | "output" | "error" | "success";
  text: string;
}

export function IDETerminal({ isOpen, onClose, onOpenFile }: IDETerminalProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([
    {
      type: "output",
      text: "Jatin Rai IDE Shell [Version 4.2.0] - type 'help' for available commands.",
    },
    {
      type: "success",
      text: "✓ Connected to Samsung R&D Institute Delhi Portal Core Cluster (TLS 1.3).",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const handleCommandSubmit = (cmdToRun?: string) => {
    const raw = cmdToRun !== undefined ? cmdToRun : command;
    const cleanCmd = raw.trim().toLowerCase();
    if (!cleanCmd) return;

    const newLogs: LogEntry[] = [...history, { type: "input", text: `$ ${raw}` }];

    switch (cleanCmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: `Available Shell Commands:
  • exp / experience   - Open experience.tsx (Samsung R&D, EMB Global)
  • skills             - Open skills.json (30 indexed technologies)
  • skills --top       - Print top 5 core architectural strengths
  • about              - Open about.md & Architecture Decision Records
  • contact            - Open contact.sh & interactive API console
  • git log            - Pretty print Git release history
  • whoami             - Display candidate engineering profile
  • uptime             - Show deployment runtime metrics
  • sudo hire jatin    - Initiate offer workflow (Easter Egg)
  • resume / cv        - Open official PDF resumé
  • copy-email         - Copy jatinrai258@gmail.com to clipboard
  • clear              - Clear terminal buffer`,
        });
        break;

      case "clear":
        setHistory([]);
        setCommand("");
        return;

      case "whoami":
      case "bio":
        newLogs.push({
          type: "output",
          text: `Identity: Jatin Rai
Title: Lead Frontend Engineer / Web Architect
Experience: 4+ Years Enterprise Production
Active Engagement: Samsung R&D Institute Delhi (Sampark Vconnect 2.0)
Workforce Scale: 8,000+ daily employees across 2 centers
Specialization: React 19, TypeScript, Next.js, SSE Streaming APIs, Performance Profiling`,
        });
        break;

      case "skills --top":
        newLogs.push({
          type: "output",
          text: `Top Production Strengths:
  1. React 19 / Next.js     [4+ Years]  - High-traffic SSR & Enterprise Portals
  2. TypeScript             [3+ Years]  - 100% Strict Type Safety & Clean Contracts
  3. Tailwind CSS v4        [3+ Years]  - CSS-first, zero-runtime theme systems
  4. Real-Time Streaming    [2+ Years]  - SSE event streaming & LLM AI Chatbots
  5. State Orchestration    [4+ Years]  - Context API, Redux Toolkit, Zustand`,
        });
        break;

      case "git log":
        newLogs.push({
          type: "output",
          text: `* e4f9b1c (HEAD -> main, tag: v2.5.0-prod) feat(ai-chatbot): streaming SSE responses for Samsung R&D
* a7d832e (tag: v2.0.0) arch(crm-ssr): deliver Next.js SSR architecture for EMB Global
* f1c045b (tag: v1.5.0) feat(banking): HSBC corporate financial analytics dashboards
* 90b218a (tag: v1.0.0) lead(hr-admin): lead 8-member frontend team at Shivila`,
        });
        break;

      case "uptime":
        newLogs.push({
          type: "success",
          text: `✓ System Status: 100% ONLINE
• Uptime: 99.98% SLA
• Runtime Engine: Vite+ (Rolldown / Vitest / Oxlint)
• Local Time: New Delhi, IN (UTC+5:30)
• Availability: Open to Senior / Lead Frontend Opportunities`,
        });
        break;

      case "sudo hire jatin":
      case "hire":
      case "curl /hire":
        newLogs.push({
          type: "success",
          text: `🎉 EXCELLENT DECISION: ACCESS GRANTED!
==============================================
Candidate: Jatin Rai
Status: READY TO ACCELERATE YOUR ENGINEERING TEAM
Direct Email: jatinrai258@gmail.com
SLA: Reply within 24 hours
Action: Email dispatched or use contact.sh tab to submit proposal!`,
        });
        break;

      case "exp":
      case "experience":
        newLogs.push({ type: "success", text: "Opening experience.tsx..." });
        onOpenFile("experience.tsx");
        break;

      case "skills":
        newLogs.push({ type: "success", text: "Opening skills.json..." });
        onOpenFile("skills.json");
        break;

      case "about":
        newLogs.push({ type: "success", text: "Opening about.md..." });
        onOpenFile("about.md");
        break;

      case "contact":
        newLogs.push({ type: "success", text: "Opening contact.sh..." });
        onOpenFile("contact.sh");
        break;

      case "email":
      case "copy-email":
        void navigator.clipboard.writeText("jatinrai258@gmail.com");
        newLogs.push({
          type: "success",
          text: "✓ Successfully copied 'jatinrai258@gmail.com' to clipboard!",
        });
        break;

      case "resume":
      case "cv":
      case "curl resume":
      case "download cv":
        window.open(resumePdf, "_blank", "noopener,noreferrer");
        newLogs.push({ type: "success", text: "Opening jatinrai-resume.pdf in new tab..." });
        break;

      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${cleanCmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newLogs);
    setCommand("");
  };

  if (!isOpen) return null;

  return (
    <div
      className={`border-t border-white/10 bg-[#0a0a0e]/95 backdrop-blur-2xl flex flex-col shrink-0 transition-all duration-300 z-30 ${
        isExpanded ? "h-80" : "h-44 sm:h-56"
      }`}
    >
      {/* Terminal Title Bar */}
      <div className="h-9 px-4 bg-white/2 border-b border-white/5 flex items-center justify-between select-none">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <TerminalIcon size={13} className="text-violet-400" />
          <span className="font-medium text-white">terminal (zsh)</span>
          <span className="text-[10px] text-zinc-500">• bash 5.2</span>
        </div>

        {/* Quick Clickable Shortcuts */}
        <div className="hidden md:flex items-center gap-1.5 font-mono text-[11px]">
          <span className="text-zinc-600 mr-1">Quick:</span>
          {["sudo hire jatin", "git log", "skills --top", "uptime", "copy-email", "clear"].map(
            (preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handleCommandSubmit(preset)}
                className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer"
              >
                {preset}
              </button>
            ),
          )}
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            title={isExpanded ? "Minimize" : "Maximize"}
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-rose-400 hover:bg-white/5 transition-colors cursor-pointer"
            title="Close Terminal"
          >
            <X size={13} />
          </button>
        </div>
      </div>

      {/* Terminal Output Stream */}
      <div className="flex-1 p-3 overflow-y-auto font-mono text-xs space-y-1.5 select-text">
        {history.map((log, idx) => (
          <div
            key={idx}
            className={`whitespace-pre-wrap leading-relaxed ${
              log.type === "input"
                ? "text-white font-semibold"
                : log.type === "success"
                  ? "text-emerald-400"
                  : log.type === "error"
                    ? "text-rose-400"
                    : "text-zinc-400"
            }`}
          >
            {log.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommandSubmit();
        }}
        className="h-10 px-3 border-t border-white/5 bg-black/40 flex items-center gap-2"
      >
        <span className="text-violet-400 font-mono text-xs select-none">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Type command ('help', 'git log', 'skills --top', 'sudo hire jatin', 'clear')..."
          className="flex-1 bg-transparent text-white font-mono text-xs outline-none placeholder:text-zinc-600"
        />
        <button
          type="submit"
          className="p-1 text-zinc-500 hover:text-white transition-colors cursor-pointer"
          title="Execute"
        >
          <CornerDownLeft size={13} />
        </button>
      </form>
    </div>
  );
}
