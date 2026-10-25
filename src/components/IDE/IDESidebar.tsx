import {
  FileCode,
  FileText,
  FileJson,
  Terminal,
  FileDown,
  FolderOpen,
  ChevronDown,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  IconBrandGithub as Github,
  IconBrandLinkedin as Linkedin,
  IconBrandTwitter as Twitter,
} from "@tabler/icons-react";
import { IDE_FILES, type FileId, type FileItem } from "./types";
import { socialLinks } from "../../data";

interface IDESidebarProps {
  activeFile: FileItem;
  onSelectFile: (fileId: FileId) => void;
  isOpen: boolean;
  onCloseMobile?: () => void;
}

export function IDESidebar({ activeFile, onSelectFile, isOpen, onCloseMobile }: IDESidebarProps) {
  const getFileIcon = (file: FileItem) => {
    switch (file.id) {
      case "overview.tsx":
      case "experience.tsx":
        return <FileCode size={15} className="text-sky-400 shrink-0" />;
      case "about.md":
        return <FileText size={15} className="text-amber-400 shrink-0" />;
      case "skills.json":
        return <FileJson size={15} className="text-emerald-400 shrink-0" />;
      case "contact.sh":
        return <Terminal size={15} className="text-purple-400 shrink-0" />;
      case "resume.pdf":
        return <FileDown size={15} className="text-rose-400 shrink-0" />;
      default:
        return <FileCode size={15} className="text-zinc-400 shrink-0" />;
    }
  };

  const handleFileClick = (fileId: FileId) => {
    onSelectFile(fileId);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  return (
    <aside
      className={`fixed lg:static top-12 bottom-0 left-0 z-30 w-64 bg-[#0a0a0e]/95 lg:bg-[#0a0a0e]/70 border-r border-white/10 flex flex-col justify-between transition-transform duration-300 backdrop-blur-2xl ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:hidden"
      }`}
    >
      <div className="flex flex-col overflow-y-auto">
        {/* Explorer Header */}
        <div className="px-4 py-3 flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-zinc-500 font-semibold border-b border-white/5">
          <span>Explorer</span>
          <span className="text-[10px] text-zinc-600">v4.0</span>
        </div>

        {/* Workspace Folder Header */}
        <div className="px-3 pt-3 pb-1 flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
          <ChevronDown size={14} className="text-zinc-500" />
          <FolderOpen size={14} className="text-amber-400" />
          <span className="tracking-tight">PORTFOLIO-WORKSPACE</span>
        </div>

        {/* File List */}
        <div className="px-2 py-1 space-y-0.5">
          {IDE_FILES.map((file) => {
            const isActive = activeFile.id === file.id;

            return (
              <button
                key={file.id}
                type="button"
                onClick={() => handleFileClick(file.id)}
                className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs font-mono transition-all text-left cursor-pointer group ${
                  isActive
                    ? "bg-white/10 text-white font-medium border border-white/10 shadow-xs"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  {getFileIcon(file)}
                  <span className="truncate">{file.name}</span>
                </div>

                {file.badge && (
                  <span
                    className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                      file.badge === "SAMSUNG"
                        ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                        : file.badge === "MAIN"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-white/10 text-zinc-400"
                    }`}
                  >
                    {file.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Quick Career Callout Banner */}
        <div className="mx-3 mt-4 p-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-xs">
          <div className="flex items-center gap-1.5 text-violet-300 font-semibold mb-1">
            <Sparkles size={12} />
            <span>Currently At</span>
          </div>
          <p className="text-zinc-300 text-[11px] leading-relaxed">
            Samsung R&D Institute Delhi • Frontend Engineer Consultant (8,000+ Users)
          </p>
        </div>
      </div>

      {/* Bottom Connect / Social Links */}
      <div className="p-3 border-t border-white/10 bg-white/1">
        <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2 px-1">
          Connect & Socials
        </div>
        <div className="space-y-1">
          {socialLinks.slice(0, 3).map((social) => {
            const Icon =
              social.icon === Github
                ? Github
                : social.icon === Linkedin
                  ? Linkedin
                  : social.icon === Twitter
                    ? Twitter
                    : FileCode;

            return (
              <a
                key={social.username}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-2 py-1.5 rounded-md text-xs text-zinc-400 hover:text-white hover:bg-white/5 transition-colors font-mono"
              >
                <div className="flex items-center gap-2">
                  <Icon size={14} className="text-zinc-500" />
                  <span>{social.username}</span>
                </div>
                <ExternalLink size={11} className="text-zinc-600" />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
