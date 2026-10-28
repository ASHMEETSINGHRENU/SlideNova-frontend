"use client";

import React, { useState } from "react";
import { SERVICES, ServiceItem } from "@/lib/data";
import { GlowCard } from "@/components/ui/GlowCard";
import { LiquidButton } from "@/components/ui/LiquidButton";
import {
  Code2,
  Layout,
  ShoppingBag,
  Building2,
  Sparkles,
  Cpu,
  ArrowRight,
  Check,
  Layers,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Code2,
  Layout,
  ShoppingBag,
  Building2,
  Sparkles,
  Cpu,
};

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#09090D] cyber-grid">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#7655F6]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#B5A1FF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#7655F6]" />
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight mb-4">
            Everything You Need to{" "}
            <span className="text-gradient-glow">Grow Online.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8F0]/80">
            Tailored digital craftsmanship engineered to elevate brands, increase conversion velocity, and scale effortlessly.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {SERVICES.map((service, idx) => {
            const Icon = ICON_MAP[service.iconName] || Code2;
            const isSelected = activeService.id === service.id;

            return (
              <GlowCard
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected ? "border-[#B5A1FF]/60 ring-1 ring-[#7655F6]/50 shadow-[0_0_30px_rgba(118,85,246,0.3)]" : ""
                }`}
                glowColor={idx % 2 === 0 ? "violet" : "glow"}
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#7655F6]/25 to-[#181820] border border-[#B5A1FF]/30 text-[#B5A1FF] shadow-[0_0_15px_rgba(118,85,246,0.2)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#9E9EB2] tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Short Description from Spec */}
                  <h3 className="text-xl font-bold font-lexend text-white mb-3 group-hover:text-[#B5A1FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#E8E8F0]/80 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-2 pt-2 border-t border-[#B5A1FF]/10 mb-6">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#E8E8F0]/90">
                        <Check className="w-3.5 h-3.5 text-[#B5A1FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#B5A1FF]/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectService) onSelectService(service.title);
                    }}
                    className="text-xs font-semibold text-[#B5A1FF] hover:text-white flex items-center gap-1.5 transition-colors group/btn"
                  >
                    Start with this
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1 text-[#7655F6]" />
                  </button>
                  <span className="text-[11px] font-mono text-[#9E9EB2]">
                    Next.js Stack
                  </span>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Dynamic Deep-Dive Feature Banner */}
        <div className="rounded-2xl bg-[#181820]/90 border border-[#B5A1FF]/30 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#7655F6]/20 blur-[90px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7655F6]/20 text-[#B5A1FF] text-xs font-mono mb-3">
                <span>Selected Focus:</span>
                <span className="text-white font-semibold">{activeService.title}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold font-lexend text-white mb-2">
                {activeService.shortDesc}
              </h4>
              <p className="text-sm sm:text-base text-[#E8E8F0]/80 leading-relaxed mb-4">
                {activeService.fullDesc}
              </p>
              <div className="flex flex-wrap gap-2">
                {activeService.deliverables.map((item, dIdx) => (
                  <span
                    key={dIdx}
                    className="px-3 py-1 rounded-full text-xs font-mono bg-[#09090D] border border-[#B5A1FF]/25 text-[#E8E8F0]"
                  >
                    ✦ {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <LiquidButton
                variant="primary"
                size="md"
                onClick={() => onSelectService && onSelectService(activeService.title)}
                href="#contact"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire About {activeService.title}
              </LiquidButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
