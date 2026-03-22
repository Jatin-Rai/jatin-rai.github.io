import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-1000 transition-all duration-300 ${
          scrolled ? "bg-black/80 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "bg-black/40"
        } backdrop-blur-xl border border-white/5 px-6 py-3 rounded-full w-max max-w-[600px] justify-center items-center`}
      >
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "");
            const isActive = activeSection === targetId;
            return (
              <li key={link.name} className="relative">
                <Link
                  to={targetId}
                  spy={true}
                  smooth={true}
                  duration={600}
                  onSetActive={() => setActiveSection(targetId)}
                  className={`relative z-10 px-5 py-2 block text-sm font-medium transition-colors cursor-pointer ${
                    isActive ? "text-white" : "text-[#b1b1b8] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-full z-0 pointer-events-none"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Mobile Toggle FAB */}
      <button
        className="md:hidden fixed top-6 right-6 z-1001 w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0a0c]/98 z-900 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, idx) => {
                const targetId = link.href.replace("#", "");
                const isActive = activeSection === targetId;
                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="relative"
                  >
                    <Link
                      to={targetId}
                      spy={true}
                      smooth={true}
                      duration={600}
                      onClick={() => setIsOpen(false)}
                      onSetActive={() => setActiveSection(targetId)}
                      className={`text-2xl font-medium transition-colors cursor-pointer ${
                        isActive ? "text-white" : "text-[#b1b1b8] hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
