"use client";

import { useEffect, useState } from "react";

export function useTimecode() {
  const [timecode, setTimecode] = useState("00:00:00:00");

  useEffect(() => {
    let frame = 0;
    const pad = (n: number) => String(n).padStart(2, "0");

    const interval = setInterval(() => {
      frame++;
      const ff = frame % 24;
      const ss = Math.floor(frame / 24) % 60;
      const mm = Math.floor(frame / 1440) % 60;
      const hh = Math.floor(frame / 86400) % 24;

      setTimecode(`${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`);
    }, 41.67); // 24 frames per second (~41.67ms)

    return () => clearInterval(interval);
  }, []);

  return timecode;
}
