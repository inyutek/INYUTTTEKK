"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      {/* Taller navbar + balanced padding */}
      <div className="site-wrap h-24 px-8 lg:px-14 flex items-center">
        
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-extrabold tracking-[0.28em] text-sm lg:text-base"
          >
            INYUTEK
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <nav className="flex-1 flex items-center justify-center gap-20">
          <a
            href="#services"
            className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
          >
            SERVICES
          </a>
          <Link
            href="/case-studies"
            className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
          >
            CASE STUDIES
          </Link>
          <a
            href="#blog"
            className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
          >
            BLOG
          </a>
        </nav>

        {/* RIGHT: Action buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-3 text-sm font-semibold border border-black bg-black text-white hover:opacity-90 transition"
          >
            Contact
          </a>
          <a
            href="#subscribe"
            className="px-5 py-3 text-sm font-semibold border border-black bg-white text-black hover:bg-black hover:text-white transition"
          >
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
