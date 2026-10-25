import { useState, useEffect } from "react";
import { Command, GitBranch, Search, Terminal, PanelLeftClose, PanelLeft } from "lucide-react";
import type { FileItem } from "./types";

interface IDETitleBarProps {
  activeFile: FileItem;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  terminalOpen: boolean;
  setTerminalOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

export function IDETitleBar({
  activeFile,
  sidebarOpen,
  setSidebarOpen,
  terminalOpen,
  setTerminalOpen,
}: IDETitleBarProps) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-12 border-b border-white/10 bg-[#0d0d11]/90 backdrop-blur-xl flex items-center justify-between px-4 select-none shrink-0 z-40">
      {/* Left: Window Controls & Workspace Name */}
      <div className="flex items-center gap-3">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-1.5 pr-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]/50 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29]/50 inline-block" />
        </div>

        {/* Sidebar Toggle Button */}
        <button
          type="button"
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="p-1 rounded-md text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
          title={sidebarOpen ? "Collapse Explorer" : "Expand Explorer"}
        >
          {sidebarOpen ? <PanelLeftClose size={16} /> : <PanelLeft size={16} />}
        </button>

        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400">
          <span className="text-white font-medium">jatin-rai.github.io</span>
        </span>
      </div>

      {/* Center: Command Palette Search Bar & Breadcrumbs */}
      <div className="flex items-center gap-2 max-w-md w-full mx-2 sm:mx-4">
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-command-menu"))}
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-400 hover:text-white transition-all cursor-pointer shadow-xs active:scale-[0.99] font-sans"
        >
          <div className="flex items-center gap-2 truncate">
            <Search size={13} className="text-zinc-500 shrink-0" />
            <span className="truncate">
              <span className="text-zinc-500">
                {activeFile.path.split("/").slice(0, -1).join("/")}/
              </span>
              <span className="text-zinc-200 font-medium">{activeFile.name}</span>
            </span>
          </div>
          <div className="flex items-center gap-1 shrink-0 font-mono text-[10px] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-zinc-400">
            <Command size={10} />
            <span>K</span>
          </div>
        </button>
      </div>

      {/* Right: Telemetry & Layout Toggles */}
      <div className="flex items-center gap-3">
        {/* Git Branch Badge */}
        <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/3 border border-white/5 px-2.5 py-1 rounded-md">
          <GitBranch size={13} className="text-emerald-400" />
          <span>main</span>
        </div>

        {/* Live IST Clock */}
        {timeStr && (
          <div className="hidden md:flex items-center gap-1 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{timeStr} IST</span>
          </div>
        )}

        {/* Terminal Toggle Button */}
        <button
          type="button"
          onClick={() => setTerminalOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer border ${
            terminalOpen
              ? "bg-violet-500/15 border-violet-500/30 text-violet-300"
              : "bg-white/5 border-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
          }`}
          title={terminalOpen ? "Close Terminal" : "Open Terminal"}
        >
          <Terminal size={14} />
          <span className="hidden sm:inline">Terminal</span>
        </button>
      </div>
    </header>
  );
}
