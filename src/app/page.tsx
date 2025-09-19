import Navigation from "@/components/sections/navigation";
import HeroSlider from "@/components/sections/hero-slider";
import ClientLogos from "@/components/sections/client-logos";
import AboutUsSection from "@/components/sections/about-us";
import ServicesSection from "@/components/sections/services";
import TrustBanner from "@/components/sections/trust-banner";
import StrongFoundations from "@/components/sections/strong-foundations";
import MissionCta from "@/components/sections/mission-cta";
import WhatWeDoSection from "@/components/sections/what-we-do";
import ModernInfrastructure from "@/components/sections/modern-infrastructure";
import QualityConstruction from "@/components/sections/quality-construction";
import PortfolioSection from "@/components/sections/portfolio";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main>
      <Navigation />
      <HeroSlider />
      <ClientLogos />
      <AboutUsSection />
      <ServicesSection />
      <TrustBanner />
      <StrongFoundations />
      <MissionCta />
      <WhatWeDoSection />
      <ModernInfrastructure />
      <QualityConstruction />
      <PortfolioSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}