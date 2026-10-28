"use client";

import React, { useState } from "react";
import { PROCESS_STEPS, ProcessStep } from "@/lib/data";
import { GlowCard } from "@/components/ui/GlowCard";
import { Search, PenTool, Code, ShieldCheck, Rocket, GitCommit, CheckCircle2 } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  PenTool,
  Code,
  ShieldCheck,
  Rocket,
};

export function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#09090D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#7655F6]/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-4">
            <GitCommit className="w-3.5 h-3.5 text-[#7655F6]" />
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight mb-4">
            From First Idea to{" "}
            <span className="text-gradient-violet">Final Launch.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8F0]/80">
            A battle-tested 5-stage development cycle engineered to eliminate friction, maintain transparency, and guarantee rapid turnaround.
          </p>
        </div>

        {/* Step Navigation Pill Bar */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mb-12 overflow-x-auto pb-4 sm:pb-0 gap-2 scrollbar-none">
          {PROCESS_STEPS.map((step, idx) => {
            const isSelected = selectedStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#7655F6] text-white shadow-[0_0_20px_rgba(118,85,246,0.6)] border border-[#B5A1FF]"
                    : "bg-[#181820]/80 text-[#9E9EB2] hover:text-white hover:bg-[#20202B] border border-[#B5A1FF]/15"
                }`}
              >
                <span>{step.step}</span>
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* 5-Step Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.iconName] || Code;
            const isSelected = selectedStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setSelectedStep(idx)}
                className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#181820] border-2 border-[#B5A1FF] shadow-[0_0_30px_rgba(118,85,246,0.35)] -translate-y-1.5"
                    : "bg-[#181820]/50 border border-[#B5A1FF]/15 hover:border-[#B5A1FF]/30 hover:bg-[#181820]/80"
                }`}
              >
                {/* Step Number & Connector */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold font-mono text-[#B5A1FF]">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-xl bg-[#7655F6]/20 text-[#B5A1FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-lexend text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#E8E8F0]/80 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Tag */}
                <div className="pt-3 border-t border-[#B5A1FF]/10 flex items-center justify-between text-[11px] font-mono text-[#9E9EB2]">
                  <span>Timeline</span>
                  <span className="text-[#B5A1FF] font-semibold">{step.timeline}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Step Deliverables Showcase */}
        {selectedStep !== null && (
          <div className="rounded-2xl bg-[#181820]/90 border border-[#B5A1FF]/30 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-[#B5A1FF] uppercase tracking-wider">
                  Deep Dive — Stage {PROCESS_STEPS[selectedStep].step}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-lexend text-white">
                  {PROCESS_STEPS[selectedStep].title}: Deliverables &amp; Outcomes
                </h4>
              </div>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-[#7655F6]/25 border border-[#B5A1FF]/30 text-[#B5A1FF] self-start sm:self-auto">
                Estimated Duration: {PROCESS_STEPS[selectedStep].timeline}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#E8E8F0]/85 mb-6 max-w-3xl">
              {PROCESS_STEPS[selectedStep].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {PROCESS_STEPS[selectedStep].deliverables.map((item, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[#09090D] border border-[#B5A1FF]/15 text-xs text-[#E8E8F0]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#B5A1FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
