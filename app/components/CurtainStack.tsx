"use client";

import React, { useMemo, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CurtainStack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const sections = useMemo(() => React.Children.toArray(children), [children]);
  const total = sections.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // ✅ NEW: Smooth scroll to a curtain index (0=Hero, 1=Services, 2=WhyChooseUs, 3=Footer)
  useEffect(() => {
    const handler = (e: any) => {
      const index = Number(e?.detail?.index ?? 0);
      if (!ref.current) return;

      const top = ref.current.offsetTop;
      const targetTop = top + index * window.innerHeight; // each section = 100vh block
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    };

    window.addEventListener("curtain:scrollTo", handler as any);
    return () => window.removeEventListener("curtain:scrollTo", handler as any);
  }, []);

  return (
    <section ref={ref} className="relative">
      {/* total scroll height */}
      <div style={{ height: `${total * 100}vh` }} className="relative">
        {/* sticky stage */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {sections.map((child, i) => {
            const start = i / total;
            const end = (i + 1) / total;

            // slide up curtain
            const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

            // fade previous layer out when next comes (prevents overlap look)
            const opacity = useTransform(
              scrollYProgress,
              [start - 0.02, start, end],
              [i === 0 ? 1 : 0, 1, 1]
            );

            return (
              <motion.div
                key={i}
                className="absolute inset-0"
                style={{
                  y: i === 0 ? "0%" : y,
                  opacity,
                  zIndex: i + 1,
                }}
              >
                <div className="h-full w-full">{child}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
