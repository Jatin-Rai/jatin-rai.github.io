import { socialLinks } from "../data";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative z-10 bg-[#0a0a0c]">
      <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-white font-bold text-xl tracking-tighter">
          Jatin<span className="text-zinc-500">Rai.</span>
        </div>
        
        <div className="flex items-center gap-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <div
                key={idx}
                onClick={() => window.open(social.href, "_blank", "noopener,noreferrer")}
                className="group relative cursor-pointer w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#b1b1b8] transition-all hover:bg-white hover:text-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.1)]"
              >
                <Icon size={18} />
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 bg-[#141416] text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shadow-xl border border-white/10 pointer-events-none z-50">
                  {social.username}
                  {/* Tooltip downward triangle pointer */}
                  <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#141416] border-b border-r border-white/10 rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-[#b1b1b8] text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
