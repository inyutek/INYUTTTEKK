import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CTAAndFooter from "./components/CTAAndFooter";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* 0) HERO */}
        <div id="top" className="min-h-screen w-full bg-white text-black">
          <Hero />
        </div>

        {/* 1) SERVICES */}
        <div id="services" className="min-h-screen w-full bg-black text-white">
          <Services />
        </div>

        {/* 2) WHY CHOOSE US */}
        <div id="case-studies" className="min-h-screen w-full bg-white text-black">
          <WhyChooseUs />
        </div>

        {/* 3) CTA + FOOTER */}
        <div id="contact" className="min-h-screen w-full bg-black text-white">
          <CTAAndFooter />
        </div>
      </main>
    </>
  );
}
