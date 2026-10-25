import { useState, useEffect, useCallback, useMemo } from "react";
import { IDETitleBar } from "./IDETitleBar";
import { IDESidebar } from "./IDESidebar";
import { IDETabs } from "./IDETabs";
import { IDETelemetry } from "./IDETelemetry";
import { IDETerminal } from "./IDETerminal";
import { OverviewView } from "./views/OverviewView";
import { AboutView } from "./views/AboutView";
import { ExperienceView } from "./views/ExperienceView";
import { SkillsView } from "./views/SkillsView";
import { ContactView } from "./views/ContactView";
import { IDEStatusBar } from "./IDEStatusBar";
import { IDE_FILES, type FileId, type FileItem } from "./types";
import resumePdf from "../../assets/docs/jatinrai-resume.pdf";

export function IDEContainer() {
  const [activeFileId, setActiveFileId] = useState<FileId>("overview.tsx");
  const [openTabs, setOpenTabs] = useState<FileId[]>([
    "overview.tsx",
    "experience.tsx",
    "skills.json",
    "about.md",
    "contact.sh",
  ]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);

  const activeFile = useMemo<FileItem>(() => {
    return IDE_FILES.find((f) => f.id === activeFileId) || IDE_FILES[0];
  }, [activeFileId]);

  const handleSelectFile = useCallback((fileId: FileId) => {
    if (fileId === "resume.pdf") {
      window.open(resumePdf, "_blank", "noopener,noreferrer");
      return;
    }

    setActiveFileId(fileId);
    setOpenTabs((prev) => (prev.includes(fileId) ? prev : [...prev, fileId]));

    const sectionSlug = fileId.split(".")[0];
    if (sectionSlug) {
      window.history.replaceState(null, "", `#${sectionSlug}`);
    }
  }, []);

  const handleCloseTab = useCallback(
    (fileId: FileId) => {
      setOpenTabs((prev) => {
        const next = prev.filter((id) => id !== fileId);
        if (next.length === 0) return ["overview.tsx"];

        if (activeFileId === fileId) {
          const fallback = next[next.length - 1];
          setActiveFileId(fallback);
        }
        return next;
      });
    },
    [activeFileId],
  );

  // Sync hash routing on initial load and hashchange
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (!hash) return;

      const mapping: Record<string, FileId> = {
        hero: "overview.tsx",
        overview: "overview.tsx",
        home: "overview.tsx",
        about: "about.md",
        experience: "experience.tsx",
        careers: "experience.tsx",
        skills: "skills.json",
        contact: "contact.sh",
        resume: "resume.pdf",
      };

      const matched = mapping[hash];
      if (matched) {
        handleSelectFile(matched);
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, [handleSelectFile]);

  // Listen to open-file custom events from CommandMenu or anywhere else
  useEffect(() => {
    const handleCustomOpenFile = (e: Event) => {
      const customEvent = e as CustomEvent<FileId>;
      if (customEvent.detail) {
        handleSelectFile(customEvent.detail);
      }
    };

    window.addEventListener("open-file", handleCustomOpenFile);
    return () => window.removeEventListener("open-file", handleCustomOpenFile);
  }, [handleSelectFile]);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-[#0a0a0e] text-white font-sans selection:bg-violet-500/30">
      {/* 1. IDE Title Bar */}
      <IDETitleBar
        activeFile={activeFile}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        terminalOpen={terminalOpen}
        setTerminalOpen={setTerminalOpen}
      />

      {/* 2. Main Workspace (Sidebar + Editor Area + Telemetry) */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Mobile Sidebar Backdrop Overlay */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 top-12 bg-black/60 backdrop-blur-xs z-20 lg:hidden"
          />
        )}

        {/* Left Explorer Sidebar */}
        <IDESidebar
          activeFile={activeFile}
          onSelectFile={handleSelectFile}
          isOpen={sidebarOpen}
          onCloseMobile={() => setSidebarOpen(false)}
        />

        {/* Center: Editor Area (Tabs + Scrollable Content + Terminal Drawer) */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#09090c] relative overflow-hidden">
          {/* File Tab Bar */}
          <IDETabs
            openTabs={openTabs}
            activeFileId={activeFileId}
            onSelectTab={handleSelectFile}
            onCloseTab={handleCloseTab}
          />

          {/* Active File Content Viewer */}
          <main className="flex-1 overflow-y-auto bg-dot-grid relative">
            {activeFileId === "overview.tsx" && (
              <OverviewView
                onOpenFile={handleSelectFile}
                onToggleTerminal={() => setTerminalOpen((prev) => !prev)}
              />
            )}
            {activeFileId === "about.md" && <AboutView />}
            {activeFileId === "experience.tsx" && <ExperienceView />}
            {activeFileId === "skills.json" && <SkillsView />}
            {activeFileId === "contact.sh" && <ContactView />}
          </main>

          {/* Bottom Interactive Terminal Drawer */}
          <IDETerminal
            isOpen={terminalOpen}
            onClose={() => setTerminalOpen(false)}
            onOpenFile={handleSelectFile}
          />
        </div>

        {/* Right: Telemetry Panel (Desktop) */}
        <div className="hidden xl:flex">
          <IDETelemetry />
        </div>
      </div>

      {/* 3. Bottom Status Bar */}
      <IDEStatusBar
        activeFile={activeFile}
        terminalOpen={terminalOpen}
        onToggleTerminal={() => setTerminalOpen((prev) => !prev)}
      />
    </div>
  );
}
