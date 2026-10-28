"use client";

import React, { useEffect } from "react";
import { PortfolioItem } from "@/lib/data";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { X, CheckCircle2, Cpu, ArrowRight, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onStartSimilarProject: (projectName: string) => void;
}

export function ProjectModal({
  project,
  onClose,
  onStartSimilarProject,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#09090D]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#181820] border border-[#B5A1FF]/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Top ambient highlight */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#7655F6] to-transparent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#09090D] border border-[#B5A1FF]/20 text-[#9E9EB2] hover:text-white hover:border-[#B5A1FF]/50 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#7655F6]/25 text-[#B5A1FF] border border-[#7655F6]/40 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          {project.categoryLabel}
        </div>

        {/* Title & Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold font-lexend text-white mb-1">
          {project.title}
        </h3>
        <p className="text-sm font-mono text-[#B5A1FF] mb-4">
          {project.tagline}
        </p>

        {/* Narrative */}
        <p className="text-sm sm:text-base text-[#E8E8F0]/85 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Architecture Highlight Card */}
        <div className="p-4 rounded-2xl bg-[#09090D] border border-[#B5A1FF]/20 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white mb-1.5">
            <Cpu className="w-4 h-4 text-[#7655F6]" />
            Architectural Engineering Highlight:
          </div>
          <p className="text-xs sm:text-sm text-[#9E9EB2] leading-relaxed">
            {project.highlight}
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-[#09090D]/60 border border-[#B5A1FF]/15 mb-6">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg sm:text-xl font-bold font-mono text-white">
                {m.value}
              </div>
              <div className="text-[10px] text-[#9E9EB2] uppercase tracking-wider">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#B5A1FF] mb-2.5">
            Core Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#09090D] text-[#E8E8F0] border border-[#B5A1FF]/20 flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3 h-3 text-[#B5A1FF]" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#B5A1FF]/15">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-mono text-[#9E9EB2] hover:text-white transition-colors"
          >
            Close Preview
          </button>
          <LiquidButton
            variant="primary"
            size="md"
            onClick={() => {
              onStartSimilarProject(project.title);
              onClose();
            }}
            href="#contact"
            className="w-full sm:w-auto"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Similar Project
          </LiquidButton>
        </div>
      </div>
    </div>
  );
}
