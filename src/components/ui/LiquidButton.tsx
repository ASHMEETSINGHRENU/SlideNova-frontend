"use client";

import React from "react";

interface LiquidButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  icon?: React.ReactNode;
}

export function LiquidButton({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  icon,
  onClick,
  ...props
}: LiquidButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-medium tracking-wide",
    md: "px-6 py-3 text-sm font-semibold tracking-wide",
    lg: "px-8 py-4 text-base font-semibold tracking-wide",
  }[size];

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#7655F6] via-[#6543ea] to-[#5835db] text-white border border-[#B5A1FF]/50 shadow-[0_0_20px_rgba(118,85,246,0.45)] hover:shadow-[0_0_35px_rgba(181,161,255,0.6)] hover:border-[#B5A1FF]",
    secondary:
      "bg-[#181820]/90 text-[#E8E8F0] border border-[#B5A1FF]/25 hover:border-[#B5A1FF]/60 hover:text-white hover:bg-[#20202B] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(118,85,246,0.3)] backdrop-blur-md",
    ghost:
      "bg-transparent text-[#E8E8F0] hover:text-[#B5A1FF] border border-transparent hover:border-[#B5A1FF]/30 hover:bg-[#181820]/40",
  }[variant];

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2.5 rounded-full
    transition-all duration-300 ease-out cursor-pointer active:scale-[0.98] select-none
    overflow-hidden font-sans ${sizeClasses} ${variantClasses} ${className}
  `;

  const content = (
    <>
      {/* Specular Liquid Sheen overlay */}
      <span className="pointer-events-none absolute -inset-full top-0 block -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:animate-liquid-sheen group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Glow dot in primary buttons */}
      {variant === "primary" && (
        <span className="h-1.5 w-1.5 rounded-full bg-[#B5A1FF] shadow-[0_0_8px_#B5A1FF] animate-pulse" />
      )}
      
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
