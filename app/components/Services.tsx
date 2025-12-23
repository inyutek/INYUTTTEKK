"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

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

  // smoother stagger for entrance
  const delay = useMemo(() => 0.2 + index * 0.1, [index]);

  return (
    // PARENT: Handles Entry Animation (Slow & Smooth)
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* CHILD: Handles Hover Animation (Fast & Snappy) */}
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.2 }} // This ensures the RETURN is fast (0.2s)
        className={[
          // base
          "group relative overflow-hidden rounded-xl",
          "min-h-[380px] p-8 flex flex-col items-center text-center",
          // border + bg
          "border border-white/20 bg-black",
          // hover
          "transition-all duration-300 ease-out",
          "hover:border-white/60 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
        ].join(" ")}
      >
        {/* glossy left shine overlay (optional, keeping subtle) */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        </div>

        {/* Content layer */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Icon */}
          <div className="w-20 h-20 mb-7 flex items-center justify-center">
            <img
              src={icon}
              alt={iconAlt}
              className="h-12 w-12 object-contain opacity-95 transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>

          {/* Title (No typewriter) */}
          <div className="text-xs font-semibold tracking-[0.18em] uppercase">
            {title}
          </div>

          <div className="mt-4 mb-6 h-[1px] w-12 bg-white/30" />

          {/* Desc (No typewriter) */}
          <p className="text-sm text-white/80 leading-relaxed min-h-[96px]">
            {desc}
          </p>
        </div>

        {/* Optional: subtle glow on hover */}
        <div className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.10),transparent_55%)]" />
        </div>
      </motion.div>
    </motion.div>
  );
}
