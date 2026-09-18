"use client";

import Link from "next/link";
import { SERVICES_LIST } from "@/constants/equipment-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { Video, Camera, Building, Mic } from "lucide-react";

export function ServicesSection() {
  const { t } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "video":
        return <Video className="w-6 h-6 text-orange" />;
      case "camera":
        return <Camera className="w-6 h-6 text-orange" />;
      case "building":
        return <Building className="w-6 h-6 text-orange" />;
      case "mic":
        return <Mic className="w-6 h-6 text-orange" />;
      default:
        return <Camera className="w-6 h-6 text-orange" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-bg-2 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4 font-mono text-xs text-orange tracking-widest uppercase">
              {t("services.eyebrow")}
            </p>
            <h2
              className="h-display text-ink font-display font-semibold"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.4rem)", lineHeight: 1.1 }}
            >
              {t("services.title1")}
              <br />
              {t("services.title2")}
            </h2>
          </div>
          <p
            className="text-muted max-w-sm text-base font-light"
            style={{ lineHeight: 1.75 }}
          >
            {t("services.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES_LIST.map((service) => (
            <article
              key={service.id}
              className="card-tilt border border-line rounded-2xl p-7 bg-surface relative overflow-hidden group hover:border-orange/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div
                className="glow-orb absolute -top-20 -right-20 w-44 h-44 rounded-full opacity-15 pointer-events-none transition-opacity group-hover:opacity-30 blur-2xl"
                style={{ background: service.glowColor }}
              />

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl grid place-items-center border border-line mb-7"
                  style={{ background: "rgba(255,107,26,0.08)" }}
                >
                  {getServiceIcon(service.icon)}
                </div>
                <span className="font-mono text-xs text-muted2">{service.idx}</span>
                <h3 className="font-display font-semibold text-2xl mt-1 mb-3 text-ink group-hover:text-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-line/50">
                <Link
                  href={service.href}
                  className="cta-ul font-mono text-xs tracking-widest text-orange hover:text-orange-bright transition-colors inline-flex items-center gap-1.5"
                >
                  {service.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
