"use client";

import React, { useState } from "react";
import { LiquidButton } from "@/components/ui/LiquidButton";
import { SERVICES } from "@/lib/data";
import { Send, CheckCircle2, MessageSquare, Mail, Phone, MapPin, Sparkles, AlertCircle } from "lucide-react";

interface ContactSectionProps {
  initialService?: string;
}

export function ContactSection({ initialService }: ContactSectionProps) {
  const [selectedService, setSelectedService] = useState<string>(
    initialService || "Website Development"
  );
  const [selectedBudget, setSelectedBudget] = useState<string>("$10k - $25k");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");

  const budgetOptions = ["<$5k", "$5k - $10k", "$10k - $25k", "$25k+"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setFeedbackMsg("Please provide your name, email, and project message.");
      return;
    }

    setStatus("loading");
    setFeedbackMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedService,
          budget: selectedBudget,
        }),
      });

      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        setFeedbackMsg(
          json.message ||
            "Thank you! Your project inquiry has been received. Nova will contact you within 24 hours."
        );
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
        setFeedbackMsg(json.error || "Failed to submit. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedbackMsg("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#09090D] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[500px] bg-[#7655F6]/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[450px] bg-[#B5A1FF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#181820] border border-[#B5A1FF]/25 text-xs font-mono text-[#B5A1FF] mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-[#7655F6]" />
            Let&apos;s Work Together
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-lexend text-[#E8E8F0] tracking-tight mb-4">
            Have an Idea?{" "}
            <span className="text-gradient-glow">Let&apos;s Make It Happen.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8F0]/85 max-w-2xl mx-auto leading-relaxed mb-4">
            Every great project starts with a conversation. Whether you need a brand-new website, a complete redesign, or a custom digital solution, Nova is ready to help you take the next step.
          </p>
          <p className="text-sm font-semibold text-[#B5A1FF] font-mono">
            Tell us about your idea, and let&apos;s create something meaningful together.
          </p>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Info & CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#181820]/80 border border-[#B5A1FF]/20 backdrop-blur-xl">
              <h3 className="text-xl font-bold font-lexend text-white mb-2">
                Connect Directly with Nova
              </h3>
              <p className="text-sm text-[#E8E8F0]/80 leading-relaxed mb-6">
                Prefer email or direct messaging? Reach out through any of our executive communication channels.
              </p>

              <div className="space-y-4 text-sm">
                <a
                  href="mailto:contact@nova.digital"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#09090D] border border-[#B5A1FF]/15 text-[#E8E8F0] hover:text-[#B5A1FF] hover:border-[#B5A1FF]/40 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#7655F6]" />
                  <span>contact@nova.digital</span>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#09090D] border border-[#B5A1FF]/15 text-[#E8E8F0]">
                  <Phone className="w-4 h-4 text-[#7655F6]" />
                  <span>+1 (555) 839-NOVA</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#09090D] border border-[#B5A1FF]/15 text-[#E8E8F0]">
                  <MapPin className="w-4 h-4 text-[#7655F6]" />
                  <span>San Francisco, CA &amp; Global Remote</span>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Card */}
            <div className="p-6 rounded-2xl bg-[#181820]/60 border border-[#B5A1FF]/15 backdrop-blur-md">
              <h4 className="text-sm font-bold font-mono text-[#B5A1FF] uppercase tracking-wider mb-3">
                Nova Project Guarantee
              </h4>
              <div className="space-y-2.5 text-xs text-[#E8E8F0]/85">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7655F6]" />
                  <span>Initial proposal &amp; estimate within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7655F6]" />
                  <span>Transparent milestone-based delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7655F6]" />
                  <span>Direct developer &amp; designer collaboration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#181820]/90 border border-[#B5A1FF]/30 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#B5A1FF]/15">
                <span className="text-sm font-bold font-lexend text-white">
                  Project Inquiry &amp; Scope Estimator
                </span>
                <span className="text-xs font-mono text-[#B5A1FF] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Rapid Response
                </span>
              </div>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7655F6]/20 border border-[#B5A1FF] text-[#B5A1FF]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold font-lexend text-white">
                    Inquiry Received!
                  </h4>
                  <p className="text-sm text-[#E8E8F0]/85 max-w-md mx-auto">
                    {feedbackMsg}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-mono font-semibold bg-[#7655F6] text-white hover:bg-[#8767ff] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Select Service */}
                  <div>
                    <label className="block text-xs font-mono text-[#B5A1FF] uppercase tracking-wider mb-2.5">
                      1. Select Desired Service
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES.map((srv) => (
                        <button
                          type="button"
                          key={srv.id}
                          onClick={() => setSelectedService(srv.title)}
                          className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all duration-200 cursor-pointer ${
                            selectedService === srv.title
                              ? "bg-[#7655F6] text-white border border-[#B5A1FF] shadow-[0_0_15px_rgba(118,85,246,0.5)]"
                              : "bg-[#09090D] text-[#E8E8F0]/80 border border-[#B5A1FF]/15 hover:border-[#B5A1FF]/40 hover:text-white"
                          }`}
                        >
                          {srv.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Budget */}
                  <div>
                    <label className="block text-xs font-mono text-[#B5A1FF] uppercase tracking-wider mb-2.5">
                      2. Estimated Investment Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`p-2 rounded-xl text-xs font-mono text-center transition-all duration-200 cursor-pointer ${
                            selectedBudget === b
                              ? "bg-[#7655F6] text-white border border-[#B5A1FF] shadow-[0_0_15px_rgba(118,85,246,0.5)]"
                              : "bg-[#09090D] text-[#E8E8F0]/80 border border-[#B5A1FF]/15 hover:border-[#B5A1FF]/40 hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#E8E8F0]/80 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-[#B5A1FF]/20 text-[#E8E8F0] placeholder:text-[#9E9EB2]/50 text-sm focus:outline-none focus:border-[#B5A1FF] focus:ring-1 focus:ring-[#7655F6]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#E8E8F0]/80 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-[#B5A1FF]/20 text-[#E8E8F0] placeholder:text-[#9E9EB2]/50 text-sm focus:outline-none focus:border-[#B5A1FF] focus:ring-1 focus:ring-[#7655F6]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#E8E8F0]/80 mb-1.5">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Ventures"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-[#B5A1FF]/20 text-[#E8E8F0] placeholder:text-[#9E9EB2]/50 text-sm focus:outline-none focus:border-[#B5A1FF] focus:ring-1 focus:ring-[#7655F6]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#E8E8F0]/80 mb-1.5">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your goals, vision, timeline, and any specific design preferences..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#09090D] border border-[#B5A1FF]/20 text-[#E8E8F0] placeholder:text-[#9E9EB2]/50 text-sm focus:outline-none focus:border-[#B5A1FF] focus:ring-1 focus:ring-[#7655F6]"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                      <span>{feedbackMsg}</span>
                    </div>
                  )}

                  {/* Action Buttons from Spec: Start a Project / Contact Us */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <LiquidButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === "loading"}
                      className="w-full sm:w-auto"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {status === "loading" ? "Submitting..." : "Start a Project"}
                    </LiquidButton>

                    <span className="text-xs text-[#9E9EB2] font-mono">
                      No commitment required
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
