import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {/* Brand */}
          <div>
            <div className="text-sm font-extrabold tracking-[0.18em] uppercase">
              INYUTEK
            </div>

            <p className="mt-6 text-sm leading-relaxed text-black/70 max-w-xs">
              Precision, clarity, and modern execution helping brands scale
              through digital growth.
            </p>

            <a
              href="mailto:inyutek@gmail.com"
              className="mt-6 inline-block text-sm font-semibold underline underline-offset-4"
            >
              inyutek@gmail.com
            </a>
          </div>

          {/* Company */}
          <div>
            <div className="text-xs font-extrabold tracking-widest uppercase mb-6">
              Company
            </div>
            <ul className="space-y-3 text-sm text-black/70">
              <li>
                <Link className="hover:text-black" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/process">
                  Our Process
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/careers">
                  Careers
                </Link>
              </li>
              <li>
                <a className="hover:text-black" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-xs font-extrabold tracking-widest uppercase mb-6">
              Services
            </div>
            <ul className="space-y-3 text-sm text-black/70">
              <li>
                <Link className="hover:text-black" href="/services/web-development">
                  Web Development
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/services/brand-strategy">
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/services/social-marketing">
                  Social Marketing
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/services/sales-enablement">
                  Sales Enablement
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="text-xs font-extrabold tracking-widest uppercase mb-6">
              Legal
            </div>
            <ul className="space-y-3 text-sm text-black/70">
              <li>
                <Link className="hover:text-black" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/terms">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-black" href="/cookie-policy">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-black/10 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-black/60 tracking-wide">
            © {new Date().getFullYear()} Inyutek Consulting LLP. All rights reserved.
          </div>

          <div className="flex gap-8 text-xs font-semibold tracking-widest">
            <a className="hover:underline underline-offset-8" href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hover:underline underline-offset-8" href="#" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a className="hover:underline underline-offset-8" href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
