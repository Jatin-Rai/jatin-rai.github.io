import { CheckCircle2, GitBranch, Terminal, ShieldAlert, Sun, Moon } from "lucide-react";
import type { FileItem } from "./types";
import { useTheme } from "../../context/useTheme";

interface IDEStatusBarProps {
  activeFile: FileItem;
  terminalOpen: boolean;
  onToggleTerminal: () => void;
}

export function IDEStatusBar({ activeFile, terminalOpen, onToggleTerminal }: IDEStatusBarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="h-7 bg-[#09090d] border-t border-white/10 px-3 flex items-center justify-between text-[11px] font-mono text-zinc-400 select-none shrink-0 z-40">
      {/* Left status items */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleTerminal}
          className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
            terminalOpen ? "text-violet-300" : "hover:text-white"
          }`}
        >
          <Terminal size={12} />
          <span className="hidden sm:inline">Shell</span>
        </button>

        <div className="flex items-center gap-1 hover:text-white transition-colors cursor-default">
          <GitBranch size={11} className="text-emerald-400" />
          <span>main</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-zinc-500">
          <CheckCircle2 size={11} className="text-emerald-400" />
          <span>0 errors</span>
          <ShieldAlert size={11} className="text-zinc-600" />
          <span>0 warnings</span>
        </div>
      </div>

      {/* Center file path info */}
      <div className="hidden md:flex items-center gap-2 text-zinc-500 truncate max-w-sm">
        <span>{activeFile.path}</span>
      </div>

      {/* Right runtime and theme info */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={toggleTheme}
          className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
          title="Toggle Dark / Light Theme"
        >
          {theme === "dark" ? (
            <Sun size={11} className="text-amber-300" />
          ) : (
            <Moon size={11} className="text-violet-400" />
          )}
          <span className="capitalize">{theme}</span>
        </button>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden md:inline">TypeScript JSX</span>
        <span className="text-violet-400 font-medium">Vite+</span>
      </div>
    </footer>
  );
}
