import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Coverage } from "./components/Coverage";
import { Affordability } from "./components/Affordability";
import { HowItWorks } from "./components/HowItWorks";
import { TargetAudience } from "./components/TargetAudience";
import { WhyStandOut } from "./components/WhyStandOut";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Coverage />
      <Affordability />
      <HowItWorks />
      <TargetAudience />
      <WhyStandOut />
      <CTA />
      <Footer />
    </main>
  );
}
