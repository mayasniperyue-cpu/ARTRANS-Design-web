import { useState, useEffect } from "react";
import { LanguageProvider } from "./hooks/useLanguage";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import PartnershipModel from "./components/PartnershipModel";
import StructuringEcosystem from "./components/StructuringEcosystem";
import StrategicPartners from "./components/StrategicPartners";
import ConsortiumBuilder from "./components/ConsortiumBuilder";
import CollaborationScenarios from "./components/CollaborationScenarios";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <LanguageProvider>
      <div
        className="min-h-screen antialiased overflow-x-hidden selection:bg-gold/30 selection:text-white"
        style={{
          backgroundColor: "#0C0C0C",
          color: "#F0F0F0",
          fontFamily: "Barlow, sans-serif"
        }}
      >
        {/* Dynamic Golden Spotlight Mouse Overlay follow-effect */}
        <div
          className="fixed pointer-events-none z-[9999] rounded-full transition-all duration-200 mix-blend-screen hidden md:block"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            width: 480,
            height: 480,
            background: "radial-gradient(circle, rgba(194,154,100,0.05) 0%, transparent 65%)",
            transform: "translate(-50%, -50%)"
          }}
        />

        {/* Primary header navbar */}
        <Header />

        {/* Main content layouts */}
        <main>
          <Hero />
          <WhoWeAre />
          <PartnershipModel />
          <StructuringEcosystem />
          <StrategicPartners />
          <ConsortiumBuilder />
          <CollaborationScenarios />
          <ContactForm />
        </main>

        {/* Global page footer summary footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

