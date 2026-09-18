"use client";

import React, { useState } from "react";
import { SITE_CONFIG } from "@/constants/site-config";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    serviceType: "Camera & Equipment Rental",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        serviceType: "Camera & Equipment Rental",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-2 border-t border-line relative overflow-hidden">
      <div
        className="glow-orb absolute w-[50vw] h-[50vw] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--orange)", bottom: "-25%", right: "-15%" }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <p className="eyebrow mb-5 font-mono text-xs text-orange tracking-widest uppercase">
              {t("contact.eyebrow")}
            </p>
            <h2
              className="h-display text-ink font-display font-semibold mb-7"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.08 }}
            >
              {t("contact.title1")}{" "}
              <span className="serif-i text-orange italic font-serif">
                {t("contact.title2")}
              </span>
            </h2>
            <p
              className="text-muted leading-relaxed max-w-md mb-10 text-base sm:text-lg font-light"
              style={{ lineHeight: 1.8 }}
            >
              {t("contact.desc")}
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-4 group focus-ring"
              >
                <span className="w-12 h-12 rounded-full grid place-items-center border border-line group-hover:border-orange transition-colors bg-surface">
                  <Mail className="w-5 h-5 text-orange" />
                </span>
                <span>
                  <span className="block text-muted2 font-mono text-[10px] tracking-widest">
                    EMAIL
                  </span>
                  <span className="text-ink group-hover:text-orange transition-colors text-base">
                    {SITE_CONFIG.email}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
                className="flex items-center gap-4 group focus-ring"
              >
                <span className="w-12 h-12 rounded-full grid place-items-center border border-line group-hover:border-orange transition-colors bg-surface">
                  <Phone className="w-5 h-5 text-orange" />
                </span>
                <span>
                  <span className="block text-muted2 font-mono text-[10px] tracking-widest">
                    RENTAL / PRODUCTION
                  </span>
                  <span className="text-ink group-hover:text-orange transition-colors text-base">
                    {SITE_CONFIG.hotlineRental}
                  </span>
                </span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.phoneNumbers.studio}`}
                className="flex items-center gap-4 group focus-ring"
              >
                <span className="w-12 h-12 rounded-full grid place-items-center border border-line group-hover:border-orange transition-colors bg-surface">
                  <Phone className="w-5 h-5 text-orange" />
                </span>
                <span>
                  <span className="block text-muted2 font-mono text-[10px] tracking-widest">
                    STUDIO / PODCAST
                  </span>
                  <span className="text-ink group-hover:text-orange transition-colors text-base">
                    {SITE_CONFIG.hotlineStudio}
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="w-12 h-12 rounded-full grid place-items-center border border-line bg-surface shrink-0">
                  <MapPin className="w-5 h-5 text-orange" />
                </span>
                <span>
                  <span className="block text-muted2 font-mono text-[10px] tracking-widest">
                    STUDIO & RENTAL BASE
                  </span>
                  <span className="text-ink text-base">
                    {SITE_CONFIG.address}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="border border-line rounded-3xl p-7 sm:p-10 bg-surface shadow-2xl relative self-start">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-display font-semibold text-2xl text-white">
                  Brief received — thank you!
                </h3>
                <p className="text-muted text-sm max-w-sm mx-auto">
                  We will get back to you within one business day with availability and quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-mono text-[11px] tracking-widest text-muted mb-2 uppercase"
                    >
                      YOUR NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Director"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-ink text-sm focus:border-orange focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[11px] tracking-widest text-muted mb-2 uppercase"
                    >
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@production.com"
                      className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-ink text-sm focus:border-orange focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="serviceType"
                    className="block font-mono text-[11px] tracking-widest text-muted mb-2 uppercase"
                  >
                    WHAT DO YOU NEED?
                  </label>
                  <select
                    id="serviceType"
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-ink text-sm focus:border-orange focus:outline-none transition-colors"
                  >
                    <option value="Fujifilm Camera Rental">Fujifilm Camera & Lens Rental</option>
                    <option value="Cinema Camera Rental">Cinema Camera Rental (Sony, RED, ARRI)</option>
                    <option value="Video Production">Full Video Production</option>
                    <option value="Studio Rental">Studio Rental (360m² Cyclorama)</option>
                    <option value="Podcast Studio">Podcast / Talking Head Studio</option>
                    <option value="Full Production + Gear">Full Production + Gear</option>
                    <option value="Other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[11px] tracking-widest text-muted mb-2 uppercase"
                  >
                    PROJECT DETAILS
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about dates, equipment list, scope, location..."
                    className="w-full px-4 py-3 rounded-xl bg-bg border border-line text-ink text-sm focus:border-orange focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full py-4 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t("contact.btn")}</span>
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-muted2 text-xs text-center font-mono tracking-wide pt-2">
                  Direct inquiry to{" "}
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-orange underline">
                    {SITE_CONFIG.email}
                  </a>{" "}
                  · or message us on WhatsApp / Zalo
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
