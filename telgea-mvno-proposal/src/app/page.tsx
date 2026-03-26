import HeroSection from "@/components/sections/HeroSection";
import ScopeSection from "@/components/sections/ScopeSection";
import CommercialSection from "@/components/sections/CommercialSection";
import TermsSection from "@/components/sections/TermsSection";
import SignatureSection from "@/components/sections/SignatureSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ScopeSection />
      <CommercialSection />
      <TermsSection />
      <SignatureSection />
    </main>
  );
}
