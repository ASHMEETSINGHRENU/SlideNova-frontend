"use client";

import React from "react";
import Image from "next/image";
import { GlowCard } from "@/components/ui/GlowCard";
import { STATS } from "@/lib/data";
import { CheckCircle2, Target, Cpu, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#09090D] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#7655F6]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#B5A1FF]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7655F6]" />
            About Nova
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight leading-tight">
            We Build More Than Websites.{" "}
            <span className="text-gradient-violet">
              We Build Opportunities.
            </span>
          </h2>
        </div>

        {/* Two-Column Grid: Narrative & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181820]/70 border border-[#B5A1FF]/20 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#7655F6] to-[#B5A1FF]" />
              <p className="text-lg sm:text-xl font-medium text-[#E8E8F0] leading-relaxed">
                <span className="text-white font-semibold">Nova</span> is a web development and digital solutions platform dedicated to helping businesses establish and grow their online presence.
              </p>
            </div>

            <p className="text-base sm:text-lg text-[#E8E8F0]/80 leading-relaxed">
              We believe every business deserves a powerful digital identity. That&apos;s why we combine creative design, modern technology, and strategic thinking to build websites that look exceptional and perform effectively.
            </p>

            <p className="text-base sm:text-lg text-[#E8E8F0]/80 leading-relaxed">
              Whether you&apos;re launching a new business, upgrading an existing website, or building a complex digital platform, Nova turns your vision into reality.
            </p>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#7655F6]/15 via-[#181820] to-[#181820] border border-[#7655F6]/30">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-[#7655F6]/20 text-[#B5A1FF] shrink-0 mt-0.5">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider mb-1">
                    Our Mission
                  </h3>
                  <p className="text-sm sm:text-base text-[#E8E8F0]/90 font-medium">
                    Our mission is simple: help businesses grow through innovative, reliable, and user-focused digital solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Core Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Modern Next.js & React Architecture",
                "Conversion-Driven Strategic Layouts",
                "Lightning Fast Performance & SEO",
                "Dedicated Engineering Partnership",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-[#E8E8F0]/90">
                  <CheckCircle2 className="w-4 h-4 text-[#B5A1FF] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Glowing Aura Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7655F6] via-[#B5A1FF] to-[#7655F6] rounded-3xl opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />
              
              <div className="relative rounded-2xl bg-[#181820] border border-[#B5A1FF]/30 p-2 sm:p-3 overflow-hidden shadow-2xl">
                {/* Cyber Frame Top Bar */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-[#B5A1FF]/15 text-xs text-[#9E9EB2] font-mono mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-[#B5A1FF]">nova-matrix-v2.6.sys</span>
                </div>

                {/* Hero Platform Graphic */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#09090D]">
                  <Image
                    src="/images/nova-hero.png"
                    alt="Nova Cybernetic Digital Platform Architecture"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090D]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating badge inside visual */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#181820]/90 border border-[#B5A1FF]/30 backdrop-blur-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-[#B5A1FF]" />
                      <span className="text-xs font-semibold text-white">Full-Stack Digital Hub</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#B5A1FF] px-2 py-0.5 rounded bg-[#7655F6]/30">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => (
            <GlowCard key={idx} className="text-center p-6" glowColor={idx % 2 === 0 ? "violet" : "glow"}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-gradient-glow mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#9E9EB2] tracking-wide">
                {stat.label}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}
