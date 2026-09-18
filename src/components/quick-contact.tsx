"use client";

import { SITE_CONFIG } from "@/constants/site-config";
import { Phone } from "lucide-react";

export function QuickContact() {
  return (
    <div className="quick-contact" aria-label="Quick contact" data-no-i18n>
      <a
        className="qc-zalo"
        href={SITE_CONFIG.social.zalo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on Zalo"
      >
        <span className="qc-tip">Zalo · {SITE_CONFIG.phoneNumbers.rental}</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C6.5 2 2 5.85 2 10.6c0 2.64 1.38 5 3.55 6.58-.12.93-.6 2.3-1.4 3.32-.24.3.02.66.38.55 1.94-.56 3.36-1.27 4.27-1.85.97.23 2.04.35 3.2.35 5.5 0 10-3.85 10-8.6S17.5 2 12 2z" />
        </svg>
      </a>

      <a
        className="qc-wa"
        href={SITE_CONFIG.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <span className="qc-tip">WhatsApp</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M.5 23.5l1.65-6A11.4 11.4 0 0 1 .6 11.6C.6 5.3 5.78.16 12.08.16c3.05 0 5.92 1.19 8.07 3.34a11.32 11.32 0 0 1 3.35 8.08c0 6.3-5.18 11.43-11.48 11.43-1.9 0-3.78-.48-5.43-1.39L.5 23.5zM6.9 7.17c-.21.01-.45.09-.69.35-.24.26-.92.9-.92 2.18s.94 2.53 1.07 2.7c.13.18 1.85 2.96 4.55 4.04 2.25.9 2.71.72 3.2.67.49-.04 1.58-.64 1.8-1.27.22-.62.22-1.16.16-1.27-.07-.11-.24-.18-.5-.31-.26-.13-1.58-.78-1.82-.87-.25-.09-.42-.13-.6.13-.18.26-.69.87-.85 1.05-.16.18-.31.2-.57.07-.26-.13-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.47-1.83-.16-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.16.17-.27.26-.44.09-.18.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.94-.21-.51-.43-.44-.59-.45h-.5z" />
        </svg>
      </a>

      <a
        className="qc-phone"
        href={`tel:${SITE_CONFIG.phoneNumbers.rental}`}
        aria-label="Call Fujime Renting"
      >
        <span className="qc-tip">Call · {SITE_CONFIG.hotlineRental}</span>
        <Phone className="w-5 h-5 text-orange" />
      </a>
    </div>
  );
}
