import HeroSection from "./_components/HeroSection";
import WhatsInsideSection from "./_components/WhatsInsideSection";
import WhySection from "./_components/WhySection";

export default function LandingOne() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5">
      <HeroSection />
      <WhatsInsideSection />
      <WhySection />
    </div>
  );
}
