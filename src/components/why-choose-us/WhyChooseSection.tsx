"use client";

import React from "react";
import { WHY_CHOOSE_PILLARS } from "@/lib/data";
import { GlowCard } from "@/components/ui/GlowCard";
import { Compass, Zap, Smartphone, Gauge, Users, TrendingUp, ShieldAlert, Award } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Compass,
  Zap,
  Smartphone,
  Gauge,
  Users,
  TrendingUp,
};

export function WhyChooseSection() {
  return (
    <section id="why-choose" className="relative py-24 sm:py-32 bg-[#09090D] cyber-grid-dense">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#7655F6]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#B5A1FF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-4">
            <Award className="w-3.5 h-3.5 text-[#7655F6]" />
            Why Choose Nova?
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight mb-4">
            Your Goals.{" "}
            <span className="text-gradient-glow">Our Commitment.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8F0]/80">
            We don&apos;t just deliver code — we forge long-term digital foundations engineered for measurable competitive advantage.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.iconName] || Zap;

            return (
              <GlowCard
                key={pillar.id}
                className="flex flex-col justify-between p-6 sm:p-8"
                glowColor={idx % 2 === 0 ? "violet" : "glow"}
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7655F6]/15 border border-[#B5A1FF]/30 text-[#B5A1FF] shadow-[0_0_15px_rgba(118,85,246,0.25)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-[#181820] text-[#B5A1FF] border border-[#B5A1FF]/20">
                      {pillar.metric}
                    </span>
                  </div>

                  {/* Title & Description from Spec */}
                  <h3 className="text-xl font-bold font-lexend text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#E8E8F0]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Index Bar */}
                <div className="pt-6 mt-6 border-t border-[#B5A1FF]/10 flex items-center justify-between text-xs text-[#9E9EB2] font-mono">
                  <span>Pillar 0{idx + 1}</span>
                  <span className="text-[#B5A1FF]">✦ Verified Standard</span>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
