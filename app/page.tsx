import Navbar from "./components/Navbar";
import CurtainStack from "./components/CurtainStack";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CTAAndFooter from "./components/CTAAndFooter";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <CurtainStack>
        {/* 0) HERO */}
        <div id="top" className="h-screen w-full bg-white text-black">
          <Hero />
        </div>

        {/* 1) SERVICES */}
        <div id="services" className="h-screen w-full bg-black text-white">
          <Services />
        </div>

        {/* 2) WHY CHOOSE US */}
        <div id="case-studies" className="h-screen w-full bg-white text-black">
          <WhyChooseUs />
        </div>

        {/* 3) CTA + FOOTER */}
        <div id="contact" className="h-screen w-full bg-black text-white">
          <CTAAndFooter />
        </div>
      </CurtainStack>
    </>
  );
}
