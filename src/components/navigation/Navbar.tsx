"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/data";
import { LiquidButton } from "@/components/ui/LiquidButton";
import {
  MagnificationDock,
  DockItemData,
} from "@/components/ui/MagnificationDock";
import {
  Home,
  User,
  Layers,
  FolderGit2,
  Award,
  GitCommit,
  Eye,
  Mail,
  Menu,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface NavbarProps {
  onOpenContactModal?: () => void;
}

const SECTION_ICONS: Record<string, React.ReactNode> = {
  Home: <Home className="w-4 h-4 text-[#B5A1FF]" />,
  About: <User className="w-4 h-4 text-[#B5A1FF]" />,
  Services: <Layers className="w-4 h-4 text-[#B5A1FF]" />,
  Portfolio: <FolderGit2 className="w-4 h-4 text-[#B5A1FF]" />,
  "Why Us": <Award className="w-4 h-4 text-[#B5A1FF]" />,
  Process: <GitCommit className="w-4 h-4 text-[#B5A1FF]" />,
  Vision: <Eye className="w-4 h-4 text-[#B5A1FF]" />,
  Contact: <Mail className="w-4 h-4 text-[#B5A1FF]" />,
};

export function Navbar({ onOpenContactModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = ["hero", "about", "services", "portfolio", "why-choose", "process", "vision", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Convert NAV_LINKS to DockItemData
  const dockItems: DockItemData[] = NAV_LINKS.map((link) => {
    const sectionId = link.href.replace("#", "");
    return {
      icon: SECTION_ICONS[link.name] || <Home className="w-4 h-4" />,
      label: link.name,
      isActive: activeSection === sectionId,
      onClick: () => handleNavClick(link.href),
    };
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090D]/85 backdrop-blur-2xl border-b border-[#B5A1FF]/15 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="group flex items-center gap-3 focus:outline-none shrink-0"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#7655F6] to-[#181820] border border-[#B5A1FF]/40 shadow-[0_0_15px_rgba(118,85,246,0.5)] group-hover:shadow-[0_0_25px_rgba(181,161,255,0.7)] transition-all duration-300">
              <span className="font-extrabold text-white text-lg tracking-wider font-mono">
                N
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#B5A1FF] shadow-[0_0_8px_#B5A1FF] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-white group-hover:text-[#B5A1FF] transition-colors font-mono">
                NOVA
              </span>
              <span className="text-[10px] tracking-wider text-[#9E9EB2] -mt-1 uppercase">
                Digital Future
              </span>
            </div>
          </a>

          {/* Desktop Magnification Dock Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <MagnificationDock
              items={dockItems}
              panelHeight={48}
              baseItemSize={38}
              magnification={54}
              distance={130}
              labelPosition="bottom"
              spring={{ mass: 0.1, stiffness: 160, damping: 13 }}
            />
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LiquidButton
              variant="primary"
              size="sm"
              onClick={onOpenContactModal}
              href="#contact"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Let&apos;s Build
            </LiquidButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <LiquidButton
              variant="primary"
              size="sm"
              onClick={onOpenContactModal}
              href="#contact"
              className="text-xs px-3 py-1.5"
            >
              Start
            </LiquidButton>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#181820] border border-[#B5A1FF]/20 text-[#E8E8F0] hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 pt-3 pb-6 bg-[#09090D]/95 backdrop-blur-2xl border-b border-[#B5A1FF]/20 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  handleNavClick(link.href);
                }}
                className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-[#E8E8F0] hover:bg-[#181820] hover:text-[#B5A1FF] border border-transparent hover:border-[#B5A1FF]/20 transition-colors"
              >
                <span className="flex items-center gap-2.5">
                  {SECTION_ICONS[link.name]}
                  {link.name}
                </span>
                {activeSection === link.href.replace("#", "") && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B5A1FF] shadow-[0_0_8px_#B5A1FF]" />
                )}
              </a>
            ))}
            <div className="pt-3 border-t border-[#181820] mt-2">
              <LiquidButton
                variant="primary"
                size="md"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContactModal) onOpenContactModal();
                }}
                href="#contact"
                className="w-full justify-center"
                icon={<Sparkles className="w-4 h-4" />}
              >
                Let&apos;s Build Together
              </LiquidButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
