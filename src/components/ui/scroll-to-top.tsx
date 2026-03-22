import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { ChevronUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button if we scroll past 500px height
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Navigate upwards smoothly via react-scroll engine
    scroll.scrollToTop({
      duration: 800,
      smooth: "easeInOutQuint",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full cursor-pointer bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 hover:bg-white hover:text-black hover:scale-110 active:scale-95 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <ChevronUp size={24} className="stroke-[3px]" />
    </button>
  );
}
