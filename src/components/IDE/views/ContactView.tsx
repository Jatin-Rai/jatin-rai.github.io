import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Copy, Check, Mail, ExternalLink, ShieldCheck, Terminal } from "lucide-react";
import {
  IconBrandGithub as Github,
  IconBrandLinkedin as Linkedin,
  IconBrandTwitter as Twitter,
} from "@tabler/icons-react";
import { BorderBeam } from "../../ui/border-beam";
import { socialLinks } from "../../../data";

export function ContactView() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText("jatinrai258@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 max-w-5xl mx-auto space-y-8 font-sans">
      {/* File Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-purple-400 font-semibold">scripts/contact.sh</span>
          <span>• Direct Communication Channel</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-zinc-300">Ready for Inquiries</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-6 items-start">
        {/* Left Column: Direct Channels & Telemetry */}
        <div className="space-y-4">
          {/* Direct Email Card */}
          <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 font-semibold">
                <Mail size={14} className="text-violet-400" />
                <span>DIRECT INBOX</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                ACTIVE
              </span>
            </div>

            <div>
              <p className="text-sm font-bold text-white font-mono break-all">
                jatinrai258@gmail.com
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Preferred for job inquiries, technical consulting, and architecture discussions.
              </p>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-white transition-all cursor-pointer active:scale-98"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={14} className="text-zinc-400" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles Bento */}
          <div className="p-5 rounded-2xl bg-white/2 border border-white/5 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold block">
              Professional Networks
            </span>

            <div className="space-y-2">
              {socialLinks.slice(0, 3).map((social) => {
                const Icon =
                  social.icon === Linkedin ? Linkedin : social.icon === Github ? Github : Twitter;

                return (
                  <a
                    key={social.username}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/2 hover:bg-white/5 border border-white/5 hover:border-white/15 transition-all text-xs font-mono text-zinc-300 group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        size={16}
                        className="text-zinc-400 group-hover:text-white transition-colors"
                      />
                      <span>{social.username}</span>
                    </div>
                    <ExternalLink
                      size={13}
                      className="text-zinc-600 group-hover:text-zinc-300 transition-colors"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* SLA & Security Card */}
          <div className="p-4 rounded-xl bg-white/1 border border-white/5 flex items-start gap-2.5 text-xs text-zinc-400 font-mono">
            <ShieldCheck size={15} className="text-emerald-400 shrink-0 mt-0.5" />
            <span className="text-[11px] leading-relaxed">
              Fast response turnaround: typically within 24 hours. Based in New Delhi, India
              (UTC+5:30).
            </span>
          </div>
        </div>

        {/* Right Column: Developer API Payload Console */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="p-6 sm:p-7 rounded-3xl bg-[#0d0d12] border border-white/10 relative overflow-hidden space-y-6 shadow-xl"
        >
          <BorderBeam duration={9} rx={24} colorFrom="#8b5cf6" colorTo="#06b6d4" />

          {/* Terminal Console Header */}
          <div className="pb-4 border-b border-white/5 flex items-center justify-between font-mono text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-violet-400" />
              <span className="text-white font-medium">POST /api/v1/message</span>
            </div>
            <span className="text-[10px] text-zinc-500">TLS Encrypted</span>
          </div>

          <form
            action="https://formsubmit.co/jatinrai258@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input type="text" name="_honey" style={{ display: "none" }} />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://jatin-rai.github.io/" />

            <div className="space-y-1.5">
              <label
                htmlFor="contact-name"
                className="text-xs font-mono text-zinc-400 flex items-center gap-1"
              >
                <span className="text-purple-400">payload.sender</span>
                <span className="text-zinc-600">: string</span>
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white text-xs font-mono outline-none focus:border-violet-500/50 focus:bg-white/5 transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-email"
                className="text-xs font-mono text-zinc-400 flex items-center gap-1"
              >
                <span className="text-purple-400">payload.email</span>
                <span className="text-zinc-600">: string</span>
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                required
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white text-xs font-mono outline-none focus:border-violet-500/50 focus:bg-white/5 transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="text-xs font-mono text-zinc-400 flex items-center gap-1"
              >
                <span className="text-purple-400">payload.body</span>
                <span className="text-zinc-600">: string</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your team, project, or open role..."
                className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/10 text-white text-xs font-mono outline-none focus:border-violet-500/50 focus:bg-white/5 transition-all resize-none placeholder:text-zinc-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-semibold text-xs transition-all hover:bg-zinc-200 active:scale-98 shadow-md cursor-pointer font-mono"
            >
              <span>Dispatch Message Payload</span>
              <Send size={13} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
