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
    { type: "output", text: "Jatin Rai IDE Shell [Version 4.0.0] - type 'help' for commands." },
    { type: "success", text: "Connected to Samsung R&D Institute Delhi Portal Core Cluster." },
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
          text: "Available commands:\n  • exp            - Jump to Experience (Samsung R&D, EMB Global)\n  • skills         - Open Skills configuration\n  • about          - Open Bio and about.md\n  • contact        - Open Contact form and script\n  • copy-email     - Copy jatinrai258@gmail.com to clipboard\n  • resume         - Open PDF resume\n  • whoami         - Display candidate profile\n  • clear          - Clear terminal output",
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
          text: "Jatin Rai - Lead Frontend Engineer with 4+ years experience building scalable enterprise web platforms at Samsung R&D Institute Delhi, Capgemini, and EMB Global.",
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
        window.open(resumePdf, "_blank", "noopener,noreferrer");
        newLogs.push({ type: "success", text: "Opening jatinrai-resume.pdf in new tab..." });
        break;

      case "curl /hire":
      case "hire":
        newLogs.push({
          type: "success",
          text: "⚡ STATUS: AVAILABLE FOR OPPORTUNITIES\n• Role: Lead / Senior Frontend Engineer\n• Highlights: 8,000+ Users @ Samsung, 40-50% Performance Speedup, AI Streaming Chatbot\n• Email: jatinrai258@gmail.com",
        });
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
        isExpanded ? "h-80" : "h-44 sm:h-52"
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
          {["curl /hire", "exp", "skills", "copy-email", "clear"].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => handleCommandSubmit(preset)}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Window controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsExpanded((prev) => !prev)}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
            title={isExpanded ? "Minimize" : "Maximize"}
          >
            {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-rose-400 hover:bg-white/5 transition-colors"
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
          placeholder="Type command ('help', 'exp', 'skills', 'whoami', 'copy-email')..."
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
