import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Mail } from "lucide-react";
import { Meteors } from "../ui/meteors";
import { AnimatedButton } from "../ui/animated-button";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText("jatinrai258@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 relative">
      <div className="w-[90%] max-w-300 mx-auto grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-12 md:gap-20">
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
          className="bg-linear-to-br from-[#141416]/80 to-[#0a0a0c]/90 border border-white/5 rounded-3xl p-8 md:p-14 backdrop-blur-xl relative overflow-hidden"
        >
          <Meteors number={25} />

          {/* Header & Quick Action */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
            <div>
              <p className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold text-white tracking-tight">
                Let's connect.
              </p>
              <p className="text-[#b1b1b8] text-sm mt-1 max-w-lg">
                Have an exciting project, open engineering role, or just want to discuss modern web
                architecture? Reach out anytime.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/30 text-xs font-medium text-white transition-all hover:bg-white/10 active:scale-95 shrink-0 cursor-pointer self-start md:self-auto"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Mail size={14} className="text-violet-400" />
                  <span className="text-zinc-300">Copy Email</span>
                  <Copy size={12} className="text-zinc-500" />
                </>
              )}
            </button>
          </div>

          <form
            action="https://formsubmit.co/jatinrai258@gmail.com"
            method="POST"
            className="flex flex-col gap-6 w-full relative z-10"
          >
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://jatin-rai.github.io/" />

            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[0.9rem] text-[#b1b1b8] font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-white font-sans text-[1rem] transition-all outline-none focus:bg-white/5 focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] w-full placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[0.9rem] text-[#b1b1b8] font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-white font-sans text-[1rem] transition-all outline-none focus:bg-white/5 focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] w-full placeholder:text-white/20"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[0.9rem] text-[#b1b1b8] font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="How can I help you?"
                className="bg-white/3 border border-white/5 rounded-xl px-5 py-4 text-white font-sans text-[1rem] transition-all outline-none focus:bg-white/5 focus:border-violet-500/40 focus:ring-1 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] w-full resize-none placeholder:text-white/20"
              ></textarea>
            </div>
            <AnimatedButton type="submit" containerClassName="w-full sm:w-auto">
              Send Message
              <Send size={18} />
            </AnimatedButton>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
