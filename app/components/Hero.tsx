const WHATSAPP_NUMBER = "919112235551";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi INYUTEK team, I want to schedule a call."
)}`;

export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center bg-white text-black overflow-x-hidden"
    >
      {/* ✅ added px-6 lg:px-10 so hero content not too left */}
      <div className="site-wrap py-16 px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-12 items-center">
          {/* LEFT */}
          <div className="min-w-0">
            {/* ✅ small polish: leading + max width */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold leading-[0.95] max-w-[13ch]">
              PRECISION <br />
              PERFORMANCE <br />
              PROMOTION <br />
              IMPACT
            </h1>

            <p className="mt-10 max-w-xl text-base sm:text-lg text-black/75 leading-relaxed">
              We help small and medium sized businesses and early stage startups scale
              with modern websites, brand clarity, and performance-driven digital strategy.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-black bg-black text-white hover:opacity-90"
              >
                Schedule a call
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold border border-black bg-white text-black hover:bg-black hover:text-white transition"
              >
                View Services
              </a>
            </div>
          </div>

          {/* RIGHT (image placeholder box) */}
          <div className="w-full">
            <div className="w-full aspect-[4/3] border border-black/20 bg-black/5 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
