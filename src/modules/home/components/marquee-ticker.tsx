import { SITE_CONFIG } from "@/constants/site-config";

export function MarqueeTicker() {
  return (
    <section className="py-8 border-y border-line bg-bg-2 overflow-hidden">
      <div className="relative w-full flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee-scroll min-w-full shrink-0 items-center justify-around">
          {SITE_CONFIG.marqueeItems.map((item, idx) => (
            <span
              key={`mq-1-${idx}`}
              className="inline-flex items-center gap-6 font-display text-base md:text-xl font-medium tracking-wider text-muted2 uppercase mx-6"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange"></span>
            </span>
          ))}
        </div>
        <div className="flex animate-marquee-scroll min-w-full shrink-0 items-center justify-around" aria-hidden="true">
          {SITE_CONFIG.marqueeItems.map((item, idx) => (
            <span
              key={`mq-2-${idx}`}
              className="inline-flex items-center gap-6 font-display text-base md:text-xl font-medium tracking-wider text-muted2 uppercase mx-6"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-orange"></span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
