"use client";

import React, { useState } from "react";
import { PORTFOLIO_PROJECTS, PortfolioItem } from "@/lib/data";
import { GlowCard } from "@/components/ui/GlowCard";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { ExternalLink, Sparkles, ArrowUpRight, FolderGit2, CheckCircle2 } from "lucide-react";

interface PortfolioSectionProps {
  onOpenProjectModal?: (project: PortfolioItem) => void;
}

export function PortfolioSection({ onOpenProjectModal }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Business", "E-commerce", "SaaS", "Portfolio"];

  const filteredProjects =
    activeFilter === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 bg-[#09090D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7655F6]/10 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-[#7655F6]" />
            Our Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight mb-4">
            Ideas We&apos;ve Turned Into{" "}
            <span className="text-gradient-violet">Reality.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8F0]/80 leading-relaxed mb-4">
            Every project tells a story. Our portfolio showcases the ideas, challenges, and creative solutions behind the websites and digital experiences we&apos;ve developed.
          </p>
          <p className="text-sm text-[#9E9EB2] max-w-2xl mx-auto">
            From elegant business websites to dynamic web applications, each project reflects our commitment to quality, creativity, and meaningful results.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide font-mono transition-all duration-200 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#7655F6] text-white shadow-[0_0_20px_rgba(118,85,246,0.5)] border border-[#B5A1FF]/60"
                  : "bg-[#181820]/80 text-[#E8E8F0]/80 hover:text-white hover:bg-[#20202B] border border-[#B5A1FF]/15"
              }`}
            >
              {cat === "All" ? "All Projects" : cat}
            </button>
          ))}
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <GlowCard
              key={project.id}
              onClick={() => onOpenProjectModal && onOpenProjectModal(project)}
              className="group cursor-pointer p-6 sm:p-8 flex flex-col justify-between"
              glowColor={idx % 2 === 0 ? "violet" : "glow"}
            >
              <div>
                {/* Project Header Tag & Category */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-[#7655F6]/20 text-[#B5A1FF] border border-[#7655F6]/40">
                    {project.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#9E9EB2] font-mono group-hover:text-white transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B5A1FF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Title & Tagline from Spec */}
                <h3 className="text-2xl font-bold font-lexend text-white mb-2 group-hover:text-[#B5A1FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-[#B5A1FF] mb-3 font-mono">
                  {project.tagline}
                </p>
                <p className="text-sm text-[#E8E8F0]/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Metrics Callout Strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#09090D]/80 border border-[#B5A1FF]/15 mb-6">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center">
                      <div className="text-base sm:text-lg font-bold text-white font-mono">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-[#9E9EB2] uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#181820] text-[#E8E8F0]/70 border border-[#B5A1FF]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#B5A1FF]/10 flex items-center justify-between text-xs">
                <span className="text-[#9E9EB2] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B5A1FF]" />
                  Verified Case Study
                </span>
                <span className="text-[#B5A1FF] font-semibold flex items-center gap-1 group-hover:underline">
                  View Architecture <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Global CTA from Spec: Explore All Projects */}
        <div className="text-center">
          <LiquidButton
            variant="secondary"
            size="lg"
            onClick={() => setActiveFilter("All")}
            icon={<Sparkles className="w-4 h-4 text-[#B5A1FF]" />}
          >
            Explore All Projects
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
