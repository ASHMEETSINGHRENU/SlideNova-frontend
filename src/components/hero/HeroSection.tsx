"use client";

import React from "react";
import { NovaScene3D } from "./NovaScene3D";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { ArrowUpRight, Compass, ShieldCheck, Zap, Globe, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenContactModal?: () => void;
}

export function HeroSection({ onOpenContactModal }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#09090D] cyber-grid"
    >
      {/* 3D Living World Canvas */}
      <NovaScene3D />

      {/* Atmospheric lighting layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#7655F6]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[#B5A1FF]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Release / Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#181820]/90 border border-[#B5A1FF]/30 backdrop-blur-xl shadow-[0_0_20px_rgba(118,85,246,0.2)] mb-8 transition-transform hover:scale-105 cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-[#7655F6] animate-ping" />
          <span className="text-xs font-semibold tracking-wider text-[#B5A1FF] uppercase font-mono">
            Next-Gen Digital Solutions
          </span>
          <span className="h-3 w-px bg-[#B5A1FF]/30" />
          <span className="text-xs text-[#E8E8F0]/70 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#B5A1FF]" /> 2026 Ready
          </span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight font-lexend text-[#E8E8F0] leading-[1.1] mb-6">
          Turning Ideas Into{" "}
          <span className="relative inline-block">
            <span className="text-gradient-glow drop-shadow-[0_0_35px_rgba(181,161,255,0.4)]">
              Powerful Digital
            </span>
          </span>{" "}
          <span className="text-gradient-violet drop-shadow-[0_0_35px_rgba(118,85,246,0.5)]">
            Experiences.
          </span>
        </h1>

        {/* Detailed Description from spec */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-[#E8E8F0]/85 font-normal leading-relaxed mb-4">
          At Nova, we help businesses transform their ideas into modern, high-performing websites. From startups and small businesses to established enterprises, we create digital experiences that strengthen your brand, connect with your audience, and drive business growth.
        </p>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-semibold tracking-wide text-[#B5A1FF] font-mono mb-10 px-4 py-1.5 rounded-lg bg-[#181820]/50 border border-[#B5A1FF]/15">
          Your vision. Our expertise. One powerful digital experience.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mb-14">
          <LiquidButton
            variant="primary"
            size="lg"
            href="#portfolio"
            className="w-full sm:w-auto"
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            Explore Our Work
          </LiquidButton>

          <LiquidButton
            variant="secondary"
            size="lg"
            onClick={onOpenContactModal}
            href="#contact"
            className="w-full sm:w-auto"
            icon={<Sparkles className="w-4 h-4 text-[#B5A1FF]" />}
          >
            Let&apos;s Build Together
          </LiquidButton>
        </div>

        {/* Holographic Floating Feature Chips (matches cyber-city theme) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl w-full">
          {[
            { label: "High-Performance Next.js", icon: Zap, sub: "< 0.8s Latency" },
            { label: "Bespoke UI/UX Architecture", icon: Compass, sub: "Pixel-Perfect" },
            { label: "Enterprise Security & Scale", icon: ShieldCheck, sub: "99.9% Uptime" },
            { label: "Global Cloud Deployment", icon: Globe, sub: "Edge-Ready" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center sm:items-start text-center sm:text-left p-3.5 sm:p-4 rounded-xl bg-[#181820]/75 border border-[#B5A1FF]/15 backdrop-blur-md transition-all duration-300 hover:border-[#B5A1FF]/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(118,85,246,0.25)]"
              >
                <div className="flex items-center gap-2 mb-1.5 text-[#B5A1FF]">
                  <Icon className="w-4 h-4" />
                  <span className="text-xs font-semibold text-white tracking-tight">
                    {item.label}
                  </span>
                </div>
                <span className="text-[11px] text-[#9E9EB2] font-mono">
                  {item.sub}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-[#9E9EB2] hover:text-[#B5A1FF] flex flex-col items-center gap-1 transition-colors group cursor-pointer"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-[#B5A1FF]/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 rounded-full bg-[#B5A1FF] animate-bounce" />
        </div>
      </a>
    </section>
  );
}
