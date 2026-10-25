import { motion } from "framer-motion";
import { Mail, ArrowDown, MapPin, Command } from "lucide-react";
import { Link } from "react-scroll";
import { socialLinks, heroData } from "../../data";
import { Spotlight } from "../ui/spotlight";
import { AnimatedButton } from "../ui/animated-button";
import heroImg from "../../assets/images/hero-character.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden"
    >
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-[150vh]" fill="white" />
      <div className="w-[90%] max-w-300 mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Top Status & Location Badges */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-md shadow-xs hover:border-emerald-500/30 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for opportunities</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/3 border border-white/5 text-xs text-zinc-400 font-mono backdrop-blur-md"
            >
              <MapPin size={12} className="text-violet-400" />
              <span>New Delhi, IN • UTC+5:30</span>
            </motion.div>
          </div>

          <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[1.05] tracking-tight font-bold mb-6 text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
            <span className="block text-[clamp(1.25rem,3vw,2.5rem)] text-[#b1b1b8] tracking-tight font-medium mb-2">
              {heroData.greeting}
            </span>
            {heroData.name}
            <br />
            <span className="text-[#b1b1b8] font-medium text-[clamp(1.5rem,4vw,3rem)] block mt-2">
              {heroData.role}
            </span>
          </h1>

          <p className="text-[#b1b1b8] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.6] max-w-125 mb-8 font-medium">
            {heroData.description}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link to="contact" smooth={true} duration={600}>
              <AnimatedButton as="div" variant="primary">
                Get in touch <Mail size={16} />
              </AnimatedButton>
            </Link>
            <Link to="experience" smooth={true} duration={600}>
              <AnimatedButton as="div" variant="secondary">
                View Experience <ArrowDown size={16} />
              </AnimatedButton>
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-command-menu"))}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-zinc-400 hover:text-white transition-all cursor-pointer shadow-xs active:scale-95 font-mono"
              title="Open Command Palette (Cmd + K)"
            >
              <Command size={12} />
              <span>⌘K</span>
            </button>
          </div>

          {/* Core Tech Stack Strip */}
          <div className="flex flex-wrap items-center gap-2 mb-8 pt-2">
            <span className="text-xs text-zinc-500 font-medium">Core Stack:</span>
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"].map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-zinc-300 font-medium hover:border-white/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-6">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <div
                  key={idx}
                  onClick={() => window.open(social.href, "_blank", "noopener,noreferrer")}
                  className="group relative cursor-pointer text-[#b1b1b8] hover:text-white transition-colors flex items-center justify-center"
                >
                  <Icon size={22} />
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 bg-white/10 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap shadow-[0_10px_20px_rgba(0,0,0,0.5)] border border-white/5 pointer-events-none z-50">
                    {social.username}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right Content - Raindrop Skyfall Engine */}
        <motion.div
          initial={{ y: "-80vh", opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 2.5,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.1,
          }}
          className="mx-auto md:mx-0 shrink-0 mt-12 md:mt-0"
        >
          {/* Infinite Upright Bouncing Container */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
            className="relative w-87.5 h-87.5 md:w-125 md:h-125 flex items-center justify-center group"
          >
            {/* Ambient subtle glow backdrop */}
            <div className="absolute inset-0 bg-radial from-violet-600/15 via-cyan-500/10 to-transparent blur-3xl -z-10 pointer-events-none scale-125" />

            {/* Sleek Diamond Mask */}
            <div className="w-65 h-65 md:w-90 md:h-90 rounded-[30px] md:rounded-[45px] shadow-[0_0_40px_rgba(255,255,255,0.06)] border border-white/20 overflow-hidden relative z-10 transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(139,92,246,0.25)] group-hover:border-violet-400/40 rotate-45 transform-gpu isolate ring-1 ring-white/5">
              {/* Counter-rotated image core */}
              <img
                src={heroImg}
                alt="Jatin Rai"
                className="w-full h-full absolute inset-0 object-cover bg-black/40 backdrop-blur-md -rotate-45 scale-[1.42] transition-transform duration-700 group-hover:scale-[1.48]"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
