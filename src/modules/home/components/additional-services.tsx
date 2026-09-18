export function AdditionalServicesSection() {
  const sections = [
    {
      title: "Production",
      items: [
        "Directing & Concept",
        "Location scouting",
        "Casting (talent / model / VO)",
        "Wardrobe & styling",
        "Fixer / coordinator in Da Nang",
        "Filming permits & licenses",
        "Catering & BTS coverage",
      ],
    },
    {
      title: "Crew",
      items: [
        "DP / Cinematographer",
        "Camera Operator",
        "1st AC & Focus Puller",
        "Gaffer · Best Boy · Grips",
        "DIT / Data Wrangler",
        "Sound Recordist / Boom Operator",
      ],
    },
    {
      title: "Studio",
      items: [
        "White & Black infinity cyclorama",
        "Set design & custom builds",
        "Prop sourcing & styling",
        "Dedicated podcast acoustic set",
        "BTS photo / video package",
      ],
    },
    {
      title: "Post Production",
      items: [
        "Offline editing & story assembly",
        "DaVinci Resolve color grading",
        "Sound design & audio mixing",
        "Motion graphics & 2D titles",
        "Product visual FX & cleanup",
      ],
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-2 border-y border-line">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p className="eyebrow mb-4 font-mono text-xs text-orange tracking-widest uppercase">
          06 — Additional services
        </p>
        <h2
          className="h-display text-ink font-display font-semibold mb-14"
          style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", lineHeight: 1.15 }}
        >
          Everything else a shoot needs.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="border border-line rounded-2xl p-6 bg-surface hover:border-orange/40 transition-colors"
            >
              <h3 className="font-display font-semibold text-xl mb-4 text-orange">
                {sec.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-muted">
                {sec.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-orange/60 text-xs">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
