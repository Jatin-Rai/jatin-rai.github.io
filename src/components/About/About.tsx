import resumePdf from "../../assets/docs/jatinrai-resume.pdf";
import { Download } from "lucide-react";
import { aboutData } from "../../data";
import { AnimatedButton } from "../ui/animated-button";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="w-[90%] max-w-300 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            About
          </h2>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col gap-6 text-[#b1b1b8] text-[1.1rem] leading-[1.7]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-medium text-violet-300 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span>Currently at Samsung R&D Institute Delhi</span>
            </div>

            <p className="text-[clamp(1.2rem,3vw,1.5rem)] text-white font-medium tracking-tight leading-[1.4]">
              {aboutData.heading}
            </p>
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="mt-4">
              <AnimatedButton as="a" href={resumePdf} target="_blank" rel="noopener noreferrer">
                Download Resumé <Download size={16} />
              </AnimatedButton>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 pt-12 border-t border-white/5">
            {aboutData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 p-5 rounded-2xl bg-white/3 border border-white/5 hover:border-white/15 transition-all hover:-translate-y-1 group backdrop-blur-xs"
              >
                <span className="text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-100 to-zinc-400 group-hover:to-violet-300 transition-all">
                  {stat.value}
                </span>
                <span className="text-xs text-[#b1b1b8] font-semibold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
