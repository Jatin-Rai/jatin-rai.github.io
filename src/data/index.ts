import {
  Atom,
  Frame,
  Triangle,
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
  Layers,
  Brain,
  Braces,
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
      { name: 'React.js', icon: Atom },
      { name: 'Next.js', icon: Frame },
      { name: 'JavaScript', icon: FileCode },
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: Paintbrush2 },
      { name: 'Redux', icon: Zap },
      { name: 'Zustand', icon: Layers },
    ],
  },
  {
    category: 'UI/Styling',
    items: [
      { name: 'Tailwind CSS', icon: Wind },
      { name: 'Shadcn/UI', icon: Palette },
      { name: 'Material-UI', icon: Paintbrush },
      { name: 'Bootstrap', icon: Grid },
      { name: 'Styled-Components', icon: Braces },
      { name: 'SCSS', icon: Asterisk },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    items: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'Vercel', icon: Triangle },
      { name: 'Netlify', icon: Diamond },
      { name: 'Firebase', icon: Flame },
      { name: 'Webpack', icon: Package },
      { name: 'Postman', icon: Send },
    ],
  },
  {
    category: 'Project Management',
    items: [
      { name: 'Jira', icon: CheckSquare },
      { name: 'Clickup', icon: ListChecks },
    ],
  },
  {
    category: 'CMS',
    items: [
      { name: 'PayloadCMS', icon: Code },
      { name: 'Hygraph', icon: LineChart },
      { name: 'Contentful', icon: Database },
      { name: 'Sanity', icon: Folder },
    ],
  },
  {
    category: 'AI-Assisted Development',
    items: [
      { name: 'Cline', icon: Brain },
    ],
  },
  {
    category: 'Familiar With',
    items: [
      { name: 'TypeScript', icon: FileCode2 },
      { name: 'AWS', icon: Cloud },
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
    date: 'Mar 2025 – Present',
    role: 'Frontend Engineer (Consultant)',
    company: 'Adecco India • Client: Samsung R&D Institute Delhi',
    bullets: [
      'Leading feature development for Sampark Vconnect 2.0, a React and Material UI-powered enterprise employee portal serving 8,000+ users across 2 Samsung R&D centers pan-India, including 3,000+ users at the Delhi institute.',
      'Developed an AI-powered KPI insights dashboard for People Partners, surfacing workforce analytics and performance trends to support data-driven HR decision-making.',
      'Built an AI chatbot integrated with a streaming API for real-time response delivery, assisting employees with HR policy queries and reducing dependency on manual HR support.',
      'Integrated a live event streaming API into the portal, enabling real-time event updates and announcements across all branch deployments.',
      'Built a comprehensive Excel reporting module covering 7+ report types — including attendance (regular, contractual, intern), employee details, annual health, in/out summary, and vendor-specific reports — enabling data-driven workforce management across centers.',
      'Improved portal performance by 40–50% across key components through targeted refactoring, lazy loading, re-render optimization, and removal of unused dependencies from the production bundle.',
      'Architected scalable state management using Context API, reducing prop-drilling complexity and improving maintainability across the portal’s growing feature surface.',
      'Mentored 2 interns and onboarded 2 fresher engineers on React best practices, component design patterns, and code review standards, accelerating their ramp-up on a production codebase.',
    ],
  },
  {
    date: 'May 2024 – Jan 2025',
    role: 'React.js Developer',
    company: 'RightO Services Pvt. Ltd. • Client: EMB Global',
    bullets: [
      'Architected and delivered core CRM modules — dashboards, reporting, and client management — using Next.js with SSR, improving application performance for an in-house platform at EMB Global.',
      'Built data-rich reporting dashboards using Recharts, featuring real-time data visualization across key business metrics.',
      'Implemented advanced client management interfaces with dynamic search, filtering, and pagination to handle large-scale CRM data efficiently.',
      'Developed client-side automated cost estimation logic, enabling real-time cost calculations directly in the UI without API dependency.',
      'Optimized API integration patterns and implemented efficient caching strategies, reducing data fetch times by 35%.',
      'Collaborated with a cross-functional team of 5 developers, 2 testers, and 1 project manager to deliver critical features on schedule.',
    ],
  },
  {
    date: 'May 2022 – May 2024',
    role: 'Software Engineer',
    company: 'Capgemini Technology Services Limited',
    bullets: [
      'Enhanced investment banking dashboards for HSBC corporate clients, improving UI, refining data visualizations and charts, and implementing advanced filters for finance and cash management workflows.',
      'Developed 4 automated test scripts for Morgan Stanley using Python and Selenium, improving testing efficiency and reducing manual QA effort.',
      'Collaborated with cross-functional teams across the APAC region to integrate RESTful APIs and microservices.',
    ],
  },
  {
    date: 'Jan 2022 – May 2022',
    role: 'React Developer',
    company: 'Shivila Technologies Pvt. Ltd.',
    bullets: [
      'Developed a responsive HR admin dashboard using React and Material-UI, enabling streamlined management of employee data and HR workflows.',
      'Implemented MUI Data Grids with advanced sorting and filtering capabilities for efficient handling of large HR datasets.',
      'Built data visualization components for business analytics, providing actionable insights through interactive charts and reports.',
      'Managed application state using Redux, ensuring predictable data flow across the dashboard’s complex HR workflows.',
      'Assigned and led an 8-member frontend team, successfully delivering and deploying projects ahead of deadlines.',
    ],
  },
];
