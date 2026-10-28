"use client";

import React, { useState } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "violet" | "glow" | "neutral";
  interactive?: boolean;
  onClick?: () => void;
}

export function GlowCard({
  children,
  className = "",
  glowColor = "violet",
  interactive = true,
  onClick,
}: GlowCardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  const glowStyles = {
    violet: "rgba(118, 85, 246, 0.25)",
    glow: "rgba(181, 161, 255, 0.3)",
    neutral: "rgba(232, 232, 240, 0.15)",
  }[glowColor];

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`
        relative rounded-2xl bg-[#181820]/80 p-6 md:p-8 backdrop-blur-xl
        border border-[#B5A1FF]/15 transition-all duration-300
        hover:border-[#B5A1FF]/40 hover:shadow-[0_10px_30px_-5px_rgba(118,85,246,0.25)]
        overflow-hidden ${interactive ? "hover:-translate-y-1" : ""}
        ${className}
      `}
    >
      {/* Dynamic Cursor Spotlight Effect */}
      {interactive && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            opacity: mousePos.opacity,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowStyles}, transparent 70%)`,
          }}
        />
      )}

      {/* Top ambient highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B5A1FF]/30 to-transparent" />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
