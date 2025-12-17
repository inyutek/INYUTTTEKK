"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const services = [
  {
    title: "WEB DEVELOPMENT & DESIGN",
    desc: "Building high-performance, conversion-focused websites and intuitive user interfaces (UI/UX).",
    icon: "/icons/webdev.svg",
    iconAlt: "Web",
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    desc: "Developing engaging content strategies and managing campaigns to drive audience growth and conversion.",
    icon: "/icons/ads.svg",
    iconAlt: "Social",
  },
  {
    title: "BRANDING & STRATEGY",
    desc: "Defining your core message, visual identity, and strategic roadmap for long-term market authority.",
    icon: "/icons/strategy.svg",
    iconAlt: "Branding",
  },
  {
    title: "SALES SUPPORT",
    desc: "Implementing systems, processes, and content that empower your sales team to close deals efficiently.",
    icon: "/icons/sales.svg",
    iconAlt: "Sales",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen bg-black text-white flex items-center"
    >
      <div className="site-wrap py-24">
        {/* Only heading size change if you want:
            text-xl sm:text-2xl md:text-3xl  -> make bigger/smaller here */}
        <motion.h2
          className="text-center text-xl sm:text-2xl md:text-3xl font-semibold tracking-[0.35em] mb-14"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: false, amount: 0.1 }}
        >
          THINGS WE DO
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  icon,
  iconAlt,
  index,
}: {
  title: string;
  desc: string;
  icon: string;
  iconAlt: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  // replay on scroll in/out
  const inView = useInView(ref, { amount: 0.6, once: false });

  // typing states
  const [showIcon, setShowIcon] = useState(false);
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDesc, setTypedDesc] = useState("");

  // slower typing (premium feel)
  const titleSpeedMs = 36;
  const descSpeedMs = 20;

  // smoother stagger
  const delay = useMemo(() => 0.2 + index * 0.18, [index]);

  useEffect(() => {
    let t1: any;
    let t2: any;
    let interval1: any;
    let interval2: any;

    if (inView) {
      setShowIcon(false);
      setTypedTitle("");
      setTypedDesc("");

      t1 = setTimeout(() => {
        setShowIcon(true);

        const fullTitle = title;
        let i = 0;

        interval1 = setInterval(() => {
          i++;
          setTypedTitle(fullTitle.slice(0, i));
          if (i >= fullTitle.length) {
            clearInterval(interval1);

            t2 = setTimeout(() => {
              const fullDesc = desc;
              let j = 0;

              interval2 = setInterval(() => {
                j++;
                setTypedDesc(fullDesc.slice(0, j));
                if (j >= fullDesc.length) clearInterval(interval2);
              }, descSpeedMs);
            }, 280);
          }
        }, titleSpeedMs);
      }, 420 + index * 160);
    } else {
      setShowIcon(false);
      setTypedTitle("");
      setTypedDesc("");
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [inView, title, desc, index, descSpeedMs, titleSpeedMs]);

  return (
    <motion.div
      ref={ref}
      // ✅ left se aana (kept)
      initial={{ opacity: 0, x: -110 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1.15,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      viewport={{ once: false, amount: 0.6 }}
      // ✅ POP-UP + DECORATED BOX (no size change)
      whileHover={{ y: -14 }}
      className={[
        // base
        "group relative overflow-hidden rounded-2xl",
        "min-h-[380px] p-10 flex flex-col items-center text-center",
        // border + bg
        "border border-white/20 bg-white/[0.03]",
        // depth (like your HTML/CSS neumorphism vibe)
        "shadow-[inset_6px_6px_10px_rgba(0,0,0,0.35),inset_-6px_-6px_16px_rgba(255,255,255,0.06),0_18px_40px_rgba(0,0,0,0.45)]",
        // smooth hover
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-white/55 hover:bg-white/[0.05] hover:shadow-[0_40px_80px_rgba(0,0,0,0.65)]",
      ].join(" ")} // ✅ FIX: join so no red error
    >
      {/* glossy left shine overlay (like ::before) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-white/[0.06]" />
      </div>

      {/* inner box feel (like .box in your CSS) */}
      <div
        className={[
          "absolute inset-5 rounded-[18px]",
          "border border-white/10 bg-black/25",
          "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.35)]",
          "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:-translate-y-2",
        ].join(" ")}
      />

      {/* Content layer */}
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Icon */}
        <motion.div
          className="w-20 h-20 mb-7 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={
            showIcon ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
          }
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={icon}
            alt={iconAlt}
            className="h-12 w-12 object-contain opacity-95"
            loading="lazy"
          />
        </motion.div>

        {/* Title (typed) */}
        <div className="text-xs font-semibold tracking-[0.18em] uppercase">
          {typedTitle || "\u00A0"}
        </div>

        <div className="mt-4 mb-6 h-[1px] w-12 bg-white/30" />

        {/* Desc (typed) */}
        <p className="text-sm text-white/80 leading-relaxed min-h-[96px]">
          {typedDesc || "\u00A0"}
        </p>
      </div>

      {/* Optional: subtle glow on hover */}
      <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
      </div>
    </motion.div>
  );
}
