import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ArrowUpRight,
  User,
  Zap,
  Briefcase,
  Mail,
  FileDown,
  Copy,
  Check,
  X,
  Compass,
} from "lucide-react";
import {
  IconBrandGithub as Github,
  IconBrandLinkedin as Linkedin,
  IconBrandTwitter as Twitter,
  IconBrandInstagram as Instagram,
} from "@tabler/icons-react";
import resumePdf from "../../assets/docs/jatinrai-resume.pdf";

interface CommandItem {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Actions" | "Socials";
  icon: React.ElementType;
  action: () => void;
  shortcut?: string;
}

export function CommandMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const openMenu = useCallback(() => {
    setIsOpen(true);
    setSelectedIndex(0);
  }, []);

  const copyEmail = useCallback(() => {
    void navigator.clipboard.writeText("jatinrai258@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      closeMenu();
    }, 1200);
  }, [closeMenu]);

  const items: CommandItem[] = useMemo(
    () => [
      // Navigation
      {
        id: "nav-home",
        title: "Overview",
        subtitle: "Hero introduction & headline (overview.tsx)",
        category: "Navigation",
        icon: Compass,
        action: () => {
          closeMenu();
          window.dispatchEvent(new CustomEvent("open-file", { detail: "overview.tsx" }));
        },
        shortcut: "O",
      },
      {
        id: "nav-about",
        title: "About",
        subtitle: "Biography and summary (about.md)",
        category: "Navigation",
        icon: User,
        action: () => {
          closeMenu();
          window.dispatchEvent(new CustomEvent("open-file", { detail: "about.md" }));
        },
        shortcut: "A",
      },
      {
        id: "nav-skills",
        title: "Skills",
        subtitle: "Technical competencies and tools (skills.json)",
        category: "Navigation",
        icon: Zap,
        action: () => {
          closeMenu();
          window.dispatchEvent(new CustomEvent("open-file", { detail: "skills.json" }));
        },
        shortcut: "S",
      },
      {
        id: "nav-experience",
        title: "Experience",
        subtitle: "Career history at Samsung R&D (experience.tsx)",
        category: "Navigation",
        icon: Briefcase,
        action: () => {
          closeMenu();
          window.dispatchEvent(new CustomEvent("open-file", { detail: "experience.tsx" }));
        },
        shortcut: "E",
      },
      {
        id: "nav-contact",
        title: "Contact",
        subtitle: "Get in touch or send message (contact.sh)",
        category: "Navigation",
        icon: Mail,
        action: () => {
          closeMenu();
          window.dispatchEvent(new CustomEvent("open-file", { detail: "contact.sh" }));
        },
        shortcut: "C",
      },

      // Actions
      {
        id: "act-copy-email",
        title: copied ? "Email Copied!" : "Copy Email",
        subtitle: "jatinrai258@gmail.com",
        category: "Actions",
        icon: copied ? Check : Copy,
        action: copyEmail,
        shortcut: "↵",
      },
      {
        id: "act-resume",
        title: "Download Resumé",
        subtitle: "View latest curriculum vitae (PDF)",
        category: "Actions",
        icon: FileDown,
        action: () => {
          closeMenu();
          window.open(resumePdf, "_blank", "noopener,noreferrer");
        },
      },

      // Socials
      {
        id: "soc-linkedin",
        title: "LinkedIn",
        subtitle: "jatinrai96",
        category: "Socials",
        icon: Linkedin,
        action: () => {
          closeMenu();
          window.open("https://www.linkedin.com/in/jatinrai96/", "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "soc-github",
        title: "GitHub",
        subtitle: "Jatin-Rai",
        category: "Socials",
        icon: Github,
        action: () => {
          closeMenu();
          window.open("https://github.com/Jatin-Rai", "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "soc-twitter",
        title: "X (Twitter)",
        subtitle: "@jatin_j_rai",
        category: "Socials",
        icon: Twitter,
        action: () => {
          closeMenu();
          window.open("https://x.com/jatin_j_rai", "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "soc-instagram",
        title: "Instagram",
        subtitle: "@jatin.j.rai",
        category: "Socials",
        icon: Instagram,
        action: () => {
          closeMenu();
          window.open("https://www.instagram.com/jatin.j.rai/", "_blank", "noopener,noreferrer");
        },
      },
    ],
    [closeMenu, copyEmail, copied],
  );

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(lower)) ||
        item.category.toLowerCase().includes(lower),
    );
  }, [items, query]);

  // Global keyboard shortcut listener (Cmd+K / Ctrl+K and custom event)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        closeMenu();
      }
    };

    const handleCustomOpen = () => openMenu();

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-menu", handleCustomOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-menu", handleCustomOpen);
    };
  }, [closeMenu, isOpen, openMenu]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation within the filtered items
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (filteredItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const currentItem = filteredItems[selectedIndex];
      if (currentItem) {
        currentItem.action();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-5000 flex items-start justify-center pt-20 px-4 sm:pt-28">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-full max-w-xl bg-[#0f0f13]/95 border border-white/10 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden relative z-10 backdrop-blur-2xl"
          >
            {/* Top Search Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/5 gap-3">
              <Search size={18} className="text-zinc-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-white text-sm outline-none placeholder:text-zinc-500 font-sans"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="text-zinc-500 hover:text-white transition-colors p-1"
                >
                  <X size={14} />
                </button>
              )}
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/10 rounded-md">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-12 text-center text-zinc-500 text-sm">
                  No commands found for &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedIndex === idx;

                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-all ${
                        isSelected
                          ? "bg-white/10 text-white shadow-xs"
                          : "text-zinc-300 hover:bg-white/5"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-violet-500/20 text-violet-300 border border-violet-500/30"
                              : "bg-white/5 text-zinc-400 border border-white/5"
                          }`}
                        >
                          <Icon size={15} />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium tracking-tight leading-tight">
                            {item.title}
                          </span>
                          {item.subtitle && (
                            <span className="text-xs text-zinc-500 leading-tight">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.category === "Socials" && (
                          <ArrowUpRight size={13} className="text-zinc-500" />
                        )}
                        {item.shortcut && (
                          <kbd className="text-[10px] font-mono text-zinc-500 px-1.5 py-0.5 rounded bg-white/5 border border-white/5">
                            {item.shortcut}
                          </kbd>
                        )}
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 text-[11px] text-zinc-500 font-mono bg-white/1">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">↑↓</kbd>
                  <span>Navigate</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">↵</kbd>
                  <span>Select</span>
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span>Press</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5">ESC</kbd>
                <span>to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
