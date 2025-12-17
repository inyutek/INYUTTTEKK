"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  text: string;
  className?: string;
  speedMs?: number; // typing speed
  startDelayMs?: number;
};

export default function TypewriterHeading({
  text,
  className = "",
  speedMs = 35,
  startDelayMs = 0,
}: Props) {
  const chars = useMemo(() => text.split(""), [text]);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    let t1: any;
    let t2: any;

    t1 = setTimeout(() => {
      t2 = setInterval(() => {
        setShown((prev) => {
          if (prev >= chars.length) {
            clearInterval(t2);
            return prev;
          }
          return prev + 1;
        });
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(t1);
      clearInterval(t2);
    };
  }, [chars.length, speedMs, startDelayMs]);

  return (
    <h2 className={className}>
      {chars.slice(0, shown).join("")}
      <span className="inline-block w-[1px] ml-1 align-baseline animate-pulse bg-current">
        &nbsp;
      </span>
    </h2>
  );
}
