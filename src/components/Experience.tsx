import { motion } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-24 relative border-t border-white/5">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            Experience
          </h2>
        </div>
        
        <div className="flex flex-col relative">
          <div className="absolute left-[8px] md:-left-8 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />

          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 py-10 border-b border-white/5 last:border-none group relative transition-colors hover:bg-white/2 sm:-mx-6 sm:px-6 rounded-2xl"
            >
              <div>
                <h3 className="text-xl font-semibold text-white tracking-tight mb-1">{exp.role}</h3>
                <div className="text-[1.1rem] text-[#b1b1b8]">{exp.company}</div>
              </div>
              <div className="text-[0.85rem] text-[#b1b1b8] uppercase tracking-wider font-medium pt-1 sm:text-right shrink-0">
                {exp.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
