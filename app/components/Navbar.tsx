"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if we are on the homepage
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/10">
      {/* Taller navbar + balanced padding */}
      <div className="site-wrap h-24 flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-extrabold tracking-[0.28em] text-sm lg:text-base"
          >
            INYUTEK
          </Link>
        </div>

        {/* CENTER: Navigation (Desktop) */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-20">
          {!isHome && (
            <Link
              href="/"
              className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
            >
              HOME
            </Link>
          )}
          <Link
            href="/#services"
            className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
          >
            SERVICES
          </Link>
          <Link
            href="/case-studies"
            className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
          >
            CASE STUDIES
          </Link>
          <Link
            href="/#newsletter"
            className="text-sm tracking-[0.32em] font-semibold hover:opacity-70 transition"
          >
            NEWSLETTER
          </Link>
        </nav>

        {/* RIGHT: Action buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#contact"
            className="px-5 py-3 text-sm font-semibold border border-black bg-black text-white hover:opacity-90 transition"
          >
            Book a call
          </Link>
          <Link
            href="/#subscribe"
            className="px-5 py-3 text-sm font-semibold border border-black bg-white text-black hover:bg-black hover:text-white transition"
          >
            Subscribe
          </Link>
        </div>

        {/* MOBILE: Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-black"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-black"
          />
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-24 bg-white z-40 overflow-hidden flex flex-col items-center pt-10 gap-8"
          >
            <nav className="flex flex-col items-center gap-8">
              {!isHome && (
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg tracking-[0.32em] font-semibold"
                >
                  HOME
                </Link>
              )}
              <Link
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-[0.32em] font-semibold"
              >
                SERVICES
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-[0.32em] font-semibold"
              >
                CASE STUDIES
              </Link>
              <Link
                href="/#newsletter"
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-[0.32em] font-semibold"
              >
                NEWSLETTER
              </Link>
            </nav>

            <div className="flex flex-col items-center gap-4 mt-4">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 text-sm font-semibold border border-black bg-black text-white"
              >
                Book a call
              </Link>
              <Link
                href="/#subscribe"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 text-sm font-semibold border border-black bg-white text-black"
              >
                Subscribe
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
