import resumePdf from "../assets/docs/jatinrai-resume.pdf";
import { Download } from "lucide-react";
import { aboutData } from "../data";
import { AnimatedButton } from "./ui/animated-button";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            About
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-6 text-[#b1b1b8] text-[1.1rem] leading-[1.7]">
            <p className="text-[clamp(1.2rem,3vw,1.5rem)] text-white font-medium tracking-tight leading-[1.4]">
              {aboutData.heading}
            </p>
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="mt-6">
              <AnimatedButton
                as="a"
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resumé <Download size={16} />
              </AnimatedButton>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/5">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-3xl font-bold tracking-tight text-white">{stat.value}</span>
                <span className="text-[0.9rem] text-[#b1b1b8] font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
