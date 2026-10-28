"use client";

import React from "react";
import { ArrowUp, Sparkles } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-[#09090D] border-t border-[#B5A1FF]/15 pt-16 pb-12 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#7655F6]/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#181820] items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#7655F6] to-[#181820] border border-[#B5A1FF]/40 text-white font-mono font-bold">
                N
              </div>
              <span className="text-xl font-bold font-mono tracking-widest text-white">
                NOVA
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold font-lexend text-white">
              Nova — Digital Experiences That Move Businesses Forward.
            </h3>

            <p className="text-sm text-[#E8E8F0]/80 max-w-lg leading-relaxed">
              We design and develop modern websites that help businesses build their online presence, connect with customers, and unlock new opportunities.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B5A1FF]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#9E9EB2] hover:text-[#B5A1FF] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Top Action */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#B5A1FF]">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 rounded-xl bg-[#181820] border border-[#B5A1FF]/20 text-[#E8E8F0] hover:text-[#B5A1FF] hover:border-[#B5A1FF]/50 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-[#181820] border border-[#B5A1FF]/20 text-[#E8E8F0] hover:text-[#B5A1FF] hover:border-[#B5A1FF]/50 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-[#181820] border border-[#B5A1FF]/20 text-[#E8E8F0] hover:text-[#B5A1FF] hover:border-[#B5A1FF]/50 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 0 0-1.63 1.63c0 .9.73 1.63 1.63 1.63a1.63 1.63 0 0 0 1.63-1.63c0-.9-.73-1.63-1.63-1.63z" />
                </svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#9E9EB2] hover:text-[#B5A1FF] pt-2 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" /> Back to top
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9EB2] font-mono">
          <div>
            © 2026 Nova. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[#E8E8F0]/70">
            <Sparkles className="w-3.5 h-3.5 text-[#B5A1FF]" />
            <span>Designed with creativity. Developed with purpose.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
