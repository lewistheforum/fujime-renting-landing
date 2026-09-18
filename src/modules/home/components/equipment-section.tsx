"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function EquipmentSection() {
  const { t } = useLanguage();

  const gearHighlights = [
    {
      title: "Fujifilm & Cinema Cameras",
      desc: "Fujifilm X-H2S, X-T5, GFX 100 II, Sony FX3, FX6 & RED bodies.",
      price: "from 500.000đ",
    },
    {
      title: "Prime & Zoom Lenses",
      desc: "Fujinon XF, Zeiss CP.3, Vespid Prime and Sony GM series.",
      price: "from 250.000đ",
    },
    {
      title: "Aputure & Amaran Lighting",
      desc: "1200D Pro, 600D, 300C LED, softboxes, lanterns & modifiers.",
      price: "from 300.000đ",
    },
    {
      title: "DJI Gimbal & Drone",
      desc: "DJI RS4 Pro, Ronin 2, Mavic 3 Pro, aerials & wireless follow focus.",
      price: "from 400.000đ",
    },
    {
      title: "Audio & Wireless Kit",
      desc: "Wireless lavaliers, Sennheiser shotguns & Zoom/Sound Devices recorders.",
      price: "from 200.000đ",
    },
    {
      title: "Monitors & Support",
      desc: "Atomos Ninja V, 7\" director monitors, Miller/Sachtler tripods & sliders.",
      price: "from 150.000đ",
    },
  ];

  return (
    <section id="equipment" className="py-24 md:py-32 relative overflow-hidden bg-bg">
      <div
        className="glow-orb absolute w-[40vw] h-[40vw] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--orange)", top: "10%", right: "-15%" }}
      />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-4 font-mono text-xs text-orange tracking-widest uppercase">
              {t("equipment.eyebrow")}
            </p>
            <h2
              className="h-display text-ink font-display font-semibold"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.4rem)", lineHeight: 1.1 }}
            >
              {t("equipment.title1")}{" "}
              <span className="serif-i text-orange italic font-serif">
                {t("equipment.title2")}
              </span>
            </h2>
          </div>
          <p
            className="text-muted max-w-sm text-base font-light"
            style={{ lineHeight: 1.75 }}
          >
            {t("equipment.desc")}
          </p>
        </div>

        {/* Featured photos banner */}
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-4 mb-4">
          <div className="filmframe h-72 md:h-80 relative rounded-2xl overflow-hidden border border-line group">
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/equip-feature28c4.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="ff-rec absolute top-3 left-3 flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-red-500 bg-black/60 px-2 py-1 rounded-full border border-line">
              <i className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
              ON LOCATION
            </div>
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              Full cinema rig · CINEFY & FUJIFILM gear room
            </span>
          </div>

          <div className="filmframe h-72 md:h-80 relative rounded-2xl overflow-hidden border border-line group">
            <div
              className="ff-glow absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/images/remus-set-2fc87.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <span className="ff-label absolute bottom-3 left-3 text-xs font-mono text-white/90">
              Sony & Fuji cine setup · Anamorphic primes
            </span>
          </div>
        </div>

        {/* Category cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gearHighlights.map((item, idx) => (
            <div
              key={idx}
              className="card-tilt border border-line rounded-2xl p-6 bg-surface hover:border-orange/50 transition-all duration-300 flex justify-between items-start gap-4"
            >
              <div>
                <h3 className="font-display font-semibold text-lg mb-1 text-ink">
                  {item.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="price text-lg font-bold text-orange">{item.price}</div>
                <div className="text-muted2 font-mono text-[10px] tracking-widest">/ DAY</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/equipment-rental"
            className="btn btn-primary px-8 py-3.5 rounded-full bg-orange hover:bg-orange-bright text-bg font-semibold text-sm tracking-wide transition-colors"
          >
            {t("equipment.cta")}
          </Link>
          <span className="text-muted2 font-mono text-[11px] tracking-widest uppercase">
            DAILY · WEEKLY · BUNDLES · FREE SETUP ADVICE
          </span>
        </div>
      </div>
    </section>
  );
}
