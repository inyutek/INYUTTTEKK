"use client";

import Link from "next/link";
import Reveal from "./Reveal";

export default function CTAAndFooter() {
  return (
    <section id="contact" className="w-full bg-black text-white">
      {/* Equal padding left & right */}
      <div className="site-wrap py-28">
        {/* CTA */}
        <div className="text-center">
          <Reveal>
            <p className="text-xs tracking-[0.35em] text-white/70 mb-4">
              START YOUR TRANSFORMATION
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
              SCHEDULE A FREE CONSULTATION CALL
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-white/75 max-w-2xl mx-auto leading-relaxed">
              Choose what’s easiest for you — WhatsApp or Email. We’ll reply fast
              and guide you with clarity.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919112235551?text=Hi%20INYUTEK%20team%2C%20I%20want%20to%20schedule%20a%20call."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-white bg-white text-black hover:opacity-90 transition"
              >
                Book a Call →
              </a>

              <a
                href="mailto:inyutek@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-white bg-black text-white hover:bg-white hover:text-black transition"
              >
                Email Us →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Divider */}
        <div className="mt-20 border-t border-white/15" />

        {/* Footer content */}
        <div
          id="subscribe"
          className="pt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-20"
        >
          {/* Column 1 */}
          <div className="pr-6">
            <p className="text-xs tracking-[0.35em] font-semibold mb-6">
              INYUTEK
            </p>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Precision, clarity, and modern execution helping brands scale
              through digital growth.
            </p>
            <div className="mt-6 text-sm font-semibold">
              <a
                href="mailto:inyutek@gmail.com"
                className="hover:opacity-80 transition"
              >
                inyutek@gmail.com
              </a>
            </div>

          </div>

          {/* Column 2 */}
          <div>
            <p className="text-xs tracking-[0.35em] font-semibold mb-6">
              COMPANY
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/process">Our Process</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><a href="#top">Back to Top</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <p className="text-xs tracking-[0.35em] font-semibold mb-6">
              SERVICES
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Web Development</li>
              <li>Brand Strategy</li>
              <li>Social Marketing</li>
              <li>Sales Enablement</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <p className="text-xs tracking-[0.35em] font-semibold mb-6">
              LEGAL
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-20 border-t border-white/15 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/60">
            © 2025 Inyutek Consulting LLP. All rights reserved.
          </p>

          <div className="flex gap-8 text-xs tracking-[0.25em] font-semibold">
            <div className="flex gap-8 text-xs tracking-[0.25em] font-semibold">
              <a
                href="https://www.linkedin.com/company/inyutek/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/inyutek"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/inyutek?igsh=YWc1dW14ajkyYmty"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
