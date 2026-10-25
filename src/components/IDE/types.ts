export type FileId =
  | "overview.tsx"
  | "about.md"
  | "experience.tsx"
  | "skills.json"
  | "contact.sh"
  | "resume.pdf";

export interface FileItem {
  id: FileId;
  name: string;
  path: string;
  category: "source" | "content" | "scripts" | "assets";
  badge?: string;
  description: string;
}

export const IDE_FILES: FileItem[] = [
  {
    id: "overview.tsx",
    name: "overview.tsx",
    path: "src/overview.tsx",
    category: "source",
    badge: "MAIN",
    description: "Hero overview, key stats & headline",
  },
  {
    id: "experience.tsx",
    name: "experience.tsx",
    path: "src/careers/experience.tsx",
    category: "source",
    badge: "SAMSUNG",
    description: "Samsung R&D, EMB Global, Capgemini history",
  },
  {
    id: "about.md",
    name: "about.md",
    path: "src/content/about.md",
    category: "content",
    description: "Bio, engineering philosophy & metrics",
  },
  {
    id: "skills.json",
    name: "skills.json",
    path: "src/config/skills.json",
    category: "source",
    badge: "29",
    description: "Technical competencies, frameworks & tools",
  },
  {
    id: "contact.sh",
    name: "contact.sh",
    path: "scripts/contact.sh",
    category: "scripts",
    description: "Direct email copy & interactive message form",
  },
  {
    id: "resume.pdf",
    name: "resume.pdf",
    path: "assets/jatinrai-resume.pdf",
    category: "assets",
    badge: "PDF",
    description: "Official Curriculum Vitae",
  },
];
