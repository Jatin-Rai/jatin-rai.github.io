import { FileCode, FileText, FileJson, Terminal, FileDown, X } from "lucide-react";
import type { FileId, FileItem } from "./types";
import { IDE_FILES } from "./types";

interface IDETabsProps {
  openTabs: FileId[];
  activeFileId: FileId;
  onSelectTab: (fileId: FileId) => void;
  onCloseTab: (fileId: FileId) => void;
}

export function IDETabs({ openTabs, activeFileId, onSelectTab, onCloseTab }: IDETabsProps) {
  const getTabIcon = (id: FileId) => {
    switch (id) {
      case "overview.tsx":
      case "experience.tsx":
        return <FileCode size={13} className="text-sky-400 shrink-0" />;
      case "about.md":
        return <FileText size={13} className="text-amber-400 shrink-0" />;
      case "skills.json":
        return <FileJson size={13} className="text-emerald-400 shrink-0" />;
      case "contact.sh":
        return <Terminal size={13} className="text-purple-400 shrink-0" />;
      case "resume.pdf":
        return <FileDown size={13} className="text-rose-400 shrink-0" />;
      default:
        return <FileCode size={13} className="text-zinc-400 shrink-0" />;
    }
  };

  const getFileInfo = (id: FileId): FileItem => {
    return IDE_FILES.find((f) => f.id === id) || IDE_FILES[0];
  };

  return (
    <div className="h-10 bg-[#0d0d12]/80 border-b border-white/10 flex items-center overflow-x-auto no-scrollbar px-2 shrink-0 select-none">
      <div className="flex items-center gap-1">
        {openTabs.map((tabId) => {
          const file = getFileInfo(tabId);
          const isActive = activeFileId === tabId;

          return (
            <div
              key={tabId}
              onClick={() => onSelectTab(tabId)}
              className={`group flex items-center gap-2 px-3 py-1.5 rounded-t-lg border-t-2 text-xs font-mono transition-all cursor-pointer ${
                isActive
                  ? "bg-[#14141a] text-white border-violet-500 border-x border-x-white/10 shadow-xs"
                  : "bg-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/5 border-transparent"
              }`}
            >
              {getTabIcon(tabId)}
              <span className="truncate max-w-[120px]">{file.name}</span>

              {/* Close Button (if more than 1 tab open) */}
              {openTabs.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onCloseTab(tabId);
                  }}
                  className="opacity-0 group-hover:opacity-100 hover:text-rose-400 p-0.5 rounded transition-opacity"
                  title="Close Tab"
                >
                  <X size={12} />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
