"use client";

import React from "react";
import { Sparkles, Globe2, Eye, ArrowRight } from "lucide-react";
import { LiquidButton } from "@/components/ui/LiquidButton";

interface VisionSectionProps {
  onOpenContactModal?: () => void;
}

export function VisionSection({ onOpenContactModal }: VisionSectionProps) {
  return (
    <section id="vision" className="relative py-24 sm:py-32 bg-[#09090D] cyber-grid overflow-hidden">
      {/* Central Volumetric Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#7655F6]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-6">
          <Eye className="w-3.5 h-3.5 text-[#7655F6]" />
          Our Vision
        </div>

        {/* Vision Big Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight leading-tight mb-8">
          Making the Digital World Work Better for{" "}
          <span className="text-gradient-glow">Every Business.</span>
        </h2>

        {/* Futuristic Manifesto Card */}
        <div className="relative rounded-3xl bg-[#181820]/80 border border-[#B5A1FF]/30 p-8 sm:p-14 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-left mb-12">
          {/* Subtle Top Gradient Line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#7655F6] to-transparent" />

          {/* Cybernetic watermark */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-[#7655F6]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-lg sm:text-2xl font-medium text-[#E8E8F0] leading-relaxed">
              &ldquo;At Nova, we envision a future where businesses of every size can access modern digital experiences that help them compete, connect, and grow.&rdquo;
            </p>

            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B5A1FF] to-transparent mx-auto" />

            <p className="text-base sm:text-lg text-[#9E9EB2] leading-relaxed">
              We are passionate about turning ambitious ideas into practical digital solutions and building long-term value through technology, creativity, and innovation.
            </p>

            <div className="pt-4 flex items-center justify-center gap-4 text-xs font-mono text-[#B5A1FF]">
              <span className="flex items-center gap-1.5">
                <Globe2 className="w-4 h-4 text-[#7655F6]" /> Open Web Standard
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#B5A1FF]" /> Boundless Innovation
              </span>
            </div>
          </div>
        </div>

        {/* Quick Call to Action */}
        <div className="inline-flex items-center justify-center">
          <LiquidButton
            variant="primary"
            size="lg"
            onClick={onOpenContactModal}
            href="#contact"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Shape Your Digital Future
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
