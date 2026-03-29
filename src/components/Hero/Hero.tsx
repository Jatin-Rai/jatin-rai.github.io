import { motion } from "framer-motion";
import { Mail, ArrowDown } from "lucide-react";
import { Link } from "react-scroll";
import { socialLinks, heroData } from "../../data";
import { Spotlight } from "../ui/spotlight";
import { AnimatedButton } from "../ui/animated-button";
import heroImg from "../../assets/images/hero-character.png";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-[150vh]" fill="white" />
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[1.05] tracking-tight font-bold mb-6 text-transparent bg-clip-text bg-linear-to-b from-white to-white/70">
            <span className="block text-[clamp(1.25rem,3vw,2.5rem)] text-[#b1b1b8] tracking-tight font-medium mb-2">{heroData.greeting}</span>
            {heroData.name}<br/>
            <span className="text-[#b1b1b8] font-medium text-[clamp(1.5rem,4vw,3rem)] block mt-2">{heroData.role}</span>
          </h1>
          
          <p className="text-[#b1b1b8] text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.6] max-w-[500px] mb-10 font-medium">
            {heroData.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="contact" smooth={true} duration={600}>
              <AnimatedButton 
                as="div" 
                variant="primary"
              >
                Get in touch <Mail size={16} />
              </AnimatedButton>
            </Link>
            <Link to="projects" smooth={true} duration={600}>
              <AnimatedButton 
                as="div" 
                variant="secondary"
              >
                View Work <ArrowDown size={16} />
              </AnimatedButton>
            </Link>
          </div>
          
          <div className="flex gap-6 mt-8">
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
            delay: 0.1
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
              delay: 2.5 
            }}
            className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] flex items-center justify-center group"
          >
          {/* Sleek Diamond Mask */}
          <div 
            className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] rounded-[30px] md:rounded-[45px] shadow-[0_0_40px_rgba(255,255,255,0.06)] border border-white/20 overflow-hidden relative z-10 transition-all duration-700 group-hover:shadow-[0_0_80px_rgba(255,255,255,0.15)] group-hover:border-white/40 rotate-45 transform-gpu isolate ring-1 ring-white/5"
          >
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
