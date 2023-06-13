import { HeroText } from "@/components/client/hero-text";
import { HeroSection } from "@/components/server/hero-section";
import { ServicesSecttion } from "@/components/server/services-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HeroText />
      <ServicesSecttion />
    </>
  );
}
