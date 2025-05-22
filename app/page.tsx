import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Coverage } from "./components/Coverage";
import { HowItWorks } from "./components/HowItWorks";
import { TargetAudience } from "./components/TargetAudience";
import { WhyStandOut } from "./components/WhyStandOut";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { BackgroundPattern } from "./components/BackgroundPattern";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 relative">
      <Navbar />
      <Hero />
      {/* Background pattern applied to specific sections */}
      <div className="relative z-10 overflow-hidden">
        <BackgroundPattern />
        <Coverage />
        <HowItWorks />
        <TargetAudience />
        <WhyStandOut />
        <CTA />
      </div>
      <Footer />
    </main>
  );
}
