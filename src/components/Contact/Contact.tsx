import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Meteors } from "../ui/meteors";
import { AnimatedButton } from "../ui/animated-button";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
        <div>
          <h2 className="text-[2.5rem] font-bold text-transparent bg-clip-text bg-linear-to-br from-white to-zinc-500 sticky top-32">
            Contact
          </h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-br from-[#141416]/80 to-[#0a0a0c]/90 border border-white/5 rounded-[24px] p-8 md:p-16 backdrop-blur-xl relative overflow-hidden"
        >
          <Meteors number={25} />
          
          <p className="text-[clamp(2rem,4vw,2.5rem)] font-semibold text-white tracking-tight mb-8 relative z-10">
            Let's connect.
          </p>
          
          <form action="https://formsubmit.co/jatinrai258@gmail.com" method="POST" className="flex flex-col gap-6 w-full relative z-10">
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://jatin-rai.github.io/" />
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[0.9rem] text-[#b1b1b8] font-medium">Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" 
                className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-white font-sans text-[1rem] transition-all outline-none focus:bg-white/5 focus:border-white/20 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] w-full placeholder:text-white/20" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[0.9rem] text-[#b1b1b8] font-medium">Email</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" 
                className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-white font-sans text-[1rem] transition-all outline-none focus:bg-white/5 focus:border-white/20 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] w-full placeholder:text-white/20" 
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[0.9rem] text-[#b1b1b8] font-medium">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="How can I help you?" 
                className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-white font-sans text-[1rem] transition-all outline-none focus:bg-white/5 focus:border-white/20 focus:shadow-[0_0_15px_rgba(255,255,255,0.05)] w-full resize-none placeholder:text-white/20" 
              ></textarea>
            </div>
            <AnimatedButton
              type="submit"
              containerClassName="w-full sm:w-auto"
            >
              Send Message
              <Send size={18} />
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
