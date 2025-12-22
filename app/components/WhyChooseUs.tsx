"use client";

import Reveal from "./Reveal";
import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <section id="case-studies" className="w-full bg-white text-black">
      {/* ✅ SAME WHITE BLOCK / CONTAINER (DON'T CHANGE) */}
      <div className="site-wrap py-20">
        {/* ✅ SAME LAYOUT (DON'T CHANGE) */}
        {/* Adjusted gap-32 to lg:gap-32 and gap-12 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-32 items-center">
          {/* ✅ LEFT CONTENT (DON'T CHANGE) */}
          <div className="min-w-0">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                WHY CHOOSE US
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="text-base sm:text-lg text-black/70 leading-relaxed max-w-xl">
                We combine precision, clarity, and modern digital execution to
                create measurable growth for ambitious brands.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <Link
                href="/case-studies"
                className="inline-flex items-center mt-10 px-7 py-4 text-sm font-semibold border border-black hover:bg-black hover:text-white transition"
              >
                Read our Case Studies →
              </Link>
            </Reveal>
          </div>

          {/* ✅ RIGHT STATS (REBUILT LIKE YOUR SS) */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-10">
              <Reveal delay={0.05}>
                <StatCardTop big="35+" label="WEBSITES LAUNCHED" />
              </Reveal>

              <Reveal delay={0.12}>
                <StatCardTop big="10+" label="INDUSTRIES SERVED" />
              </Reveal>

              <Reveal delay={0.35} className="col-span-2">
                <StatCardWide big="98%" label="CLIENT SATISFACTION SCORE" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TOP 2 BOXES (SS STYLE) ---------- */
function StatCardTop({ big, label }: { big: string; label: string }) {
  return (
    <div
      className={[
        "bg-black text-white rounded-1xl",
        "px-6 sm:px-12 py-12", // Responsive padding
        "w-full min-h-[100px]",
        "flex flex-col justify-center",
        "border border-black/10",
      ].join(" ")}
    >
      <div className="text-5xl font-extrabold leading-none">{big}</div>

      <div className="mt-6 text-xs sm:text-[13px] tracking-[0.25em] text-white/90">
        {label}
      </div>
    </div>
  );
}

/* ---------- LONG 98% BAR (SS STYLE) ---------- */
function StatCardWide({ big, label }: { big: string; label: string }) {
  return (
    <div
      className={[
        "bg-black text-white rounded-1xl",
        "px-6 sm:px-12 py-12", // Responsive padding
        "w-full min-h-[180px]",
        "border border-black/10",
        "flex items-center",
      ].join(" ")}
    >
      <div className="text-5xl font-extrabold whitespace-nowrap">{big}</div>

      {/* spacer so label goes to right like screenshot */}
      <div className="flex-1" />

      <div className="text-s sm:text-[14px] tracking-[0.25em] text-white/90 text-right whitespace-nowrap">
        {label}
      </div>
    </div>
  );
}
