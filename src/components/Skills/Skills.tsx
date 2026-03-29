import { motion } from "framer-motion";
import { skillsData } from "../../data";

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            Skills
          </h2>
        </div>
        
        <div className="flex flex-col gap-12">
          {skillsData.map((category, idx) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col"
            >
              <h3 className="mb-5 text-white font-medium text-[1.2rem] tracking-tight">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/5 text-white px-5 py-2.5 rounded-full text-[0.9rem] font-medium transition-colors cursor-default"
                  >
                    <skill.icon size={18} className="text-[#b1b1b8]" />
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
