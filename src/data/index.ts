import {
  Atom,
  Frame,
  Triangle,
  Globe,
  Code2,
  FileCode,
  FileCode2,
  Wind,
  Palette,
  Paintbrush,
  Grid,
  Asterisk,
  Paintbrush2,
  GitBranch,
  Github,
  Diamond,
  Cloud,
  Flame,
  Package,
  Send,
  CheckSquare,
  ListChecks,
  Users,
  Code,
  LineChart,
  Database,
  Folder,
  MapPin,
  Filter,
  Plug,
  Zap,
  Bookmark,
  Linkedin,
  Twitter,
  Instagram,
} from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jatinrai96/', username: 'jatinrai96' },
  { icon: Github, href: 'https://github.com/Jatin-Rai', username: 'Jatin-Rai' },
  { icon: Twitter, href: 'https://x.com/jatin_j_rai', username: '@jatin_j_rai' },
  { icon: Instagram, href: 'https://www.instagram.com/jatin.j.rai/', username: '@jatin.j.rai' },
];

export const heroData = {
  greeting: "Hi, I'm",
  name: 'Jatin Rai.',
  role: 'A Software Engineer.',
  description:
    'I build scalable, modern web applications with a focus on seamless user experiences, pixel-perfect design, and performant architectures.',
};

export const aboutData = {
  heading: "I build products that scale and experiences that engage.",
  paragraphs: [
    "As a software engineer, my focus lies in crafting elegant solutions to complex problems. Rooted firmly in modern React and frontend ecosystems, I transform sophisticated designs into fluid, interactive user interfaces that users love.",
    "Currently engineering seamless digital platforms at Samsung R&D Institute. My approach strictly prioritizes performance optimization, clean architectural patterns, and meticulous attention to UI/UX details."
  ],
  stats: [
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
  ],
};

export const skillsData = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: Atom },
      { name: 'Next.js', icon: Frame },
      { name: 'Vue', icon: Triangle },
      { name: 'Quasar', icon: Globe },
      { name: 'HTML', icon: Code2 },
      { name: 'JavaScript', icon: FileCode },
      { name: 'TypeScript', icon: FileCode2 },
    ],
  },
  {
    category: 'UI Styling',
    items: [
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Shadcn/UI', icon: Palette },
      { name: 'Material-UI', icon: Paintbrush },
      { name: 'Bootstrap', icon: Grid },
      { name: 'SCSS', icon: Asterisk },
      { name: 'CSS', icon: Paintbrush2 },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'Vercel', icon: Triangle },
      { name: 'Netlify', icon: Diamond },
      { name: 'AWS', icon: Cloud },
      { name: 'Firebase', icon: Flame },
      { name: 'Webpack', icon: Package },
      { name: 'Postman', icon: Send },
    ],
  },
  {
    category: 'CMS & Management',
    items: [
      { name: 'PayloadCMS', icon: Code },
      { name: 'Hygraph', icon: LineChart },
      { name: 'Contentful', icon: Database },
      { name: 'Sanity', icon: Folder },
      { name: 'Jira', icon: CheckSquare },
      { name: 'Clickup', icon: ListChecks },
      { name: 'Agile/Scrum', icon: Users },
    ],
  },
];

export const projectIconMap: Record<string, any> = {
  'Mapbox GL': MapPin,
  Algolia: Filter,
  'Next.js': Frame,
  Recharts: LineChart,
  'shadcn/ui': Palette,
  'REST API': Plug,
  'Character Wiki': Users,
  'Redux Toolkit': Zap,
  'Vite / React': Atom,
  'Local Bookmarking': Bookmark,
};

export const projects = [
  {
    title: 'Member Locator',
    desc: 'A geolocation-centric Next.js application leveraging Mapbox GL for interactive mapping and Algolia for instantaneous spatial search. Features dynamic member listing and clickable zoom-to-location markers.',
    tags: ['Mapbox GL', 'Algolia', 'Next.js'],
    link: 'https://member-locator.vercel.app/',
    large: true,
  },
  {
    title: 'EV Analytics Dashboard',
    desc: 'An enterprise-grade Next.js dashboard processing large datasets to render interactive Recharts visualizations, spanning geographic EV distribution, annual growth, and demographic analysis.',
    tags: ['Recharts', 'shadcn/ui'],
    link: 'https://ev-analytics-dashboard-peach.vercel.app/',
  },
  {
    title: 'Rick & Morty Wiki',
    desc: 'A comprehensive interactive wiki for exploring Rick and Morty characters, demonstrating robust external API integration, dynamic visual filtering, and advanced pagination states.',
    tags: ['REST API', 'Character Wiki'],
    link: 'https://rickandmortynerd.netlify.app/',
  },
  {
    title: 'React Pokédex Engine',
    desc: 'An interactive, high-performance standalone Pokédex built with Vite, ReactJS, and Redux Toolkit. Features fluid infinite scrolling, persistent device bookmarking, and heavily optimized PokéAPI integration.',
    tags: ['Redux Toolkit', 'Vite / React', 'Local Bookmarking'],
    link: 'https://pokedex-by-jatin.netlify.app/',
    large: true,
  },
];

export const experiences = [
  {
    date: 'Mar 2025 — Present',
    role: 'Senior Associate',
    company: 'Samsung R&D Institute Delhi',
  },
  {
    date: 'May 2024 — Jan 2025',
    role: 'Reactjs Developer',
    company: 'ExpandMyBusiness',
  },
  {
    date: 'May 2022 — May 2024',
    role: 'Software Engineer',
    company: 'Capgemini Technology Services India Limited',
  },
  {
    date: 'Jan 2022 — May 2022',
    role: 'React Developer',
    company: 'Shivila Technologies Pvt. Ltd.',
  },
  {
    date: 'Oct 2020 — Feb 2021',
    role: 'Computer Engineer Intern',
    company: 'Aizawl Smart City Limited',
  },
];
